"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface VanishInputProps {
  placeholder: string;
  name: string;
  id: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  className?: string;
  isTextarea?: boolean;
  shouldVanish?: boolean; // New prop to trigger vanish animation
}

export function VanishInput({
  placeholder,
  name,
  id,
  type = "text",
  value,
  onChange,
  className,
  isTextarea = false,
  shouldVanish = false,
}: VanishInputProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const newDataRef = useRef<any[]>([]);
  const inputElementRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);
  const [animating, setAnimating] = useState(false);

  const setRef = useCallback((node: HTMLInputElement | HTMLTextAreaElement | null) => {
    inputElementRef.current = node;
  }, []);

  const draw = useCallback(() => {
    if (!inputElementRef.current) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    console.log("[VanishInput] Drawing canvas for:", value);

    const computedStyles = getComputedStyle(inputElementRef.current);
    const fontSize = parseFloat(computedStyles.getPropertyValue("font-size"));
    const lineHeight = parseFloat(computedStyles.getPropertyValue("line-height"));
    const paddingTop = parseFloat(computedStyles.getPropertyValue("padding-top"));
    const paddingLeft = parseFloat(computedStyles.getPropertyValue("padding-left"));

    canvas.width = inputElementRef.current.clientWidth * 2;
    canvas.height = inputElementRef.current.clientHeight * 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.font = `${fontSize * 2}px ${computedStyles.fontFamily}`;
    ctx.fillStyle = "#0062ff";

    if (isTextarea) {
      const lines = value.split('\n');
      lines.forEach((line, index) => {
        const yPos = (paddingTop + (lineHeight * index) + fontSize) * 2; // Adjusted for line-height and scaled, baseline
        ctx.fillText(line, paddingLeft * 2, yPos);
      });
    } else {
      const yPos = (paddingTop + fontSize) * 2; // Adjusted to match text baseline for input
      ctx.fillText(value, paddingLeft * 2, yPos);
    }

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const pixelData = imageData.data;
    const newData: any[] = [];

    for (let t = 0; t < canvas.height; t++) {
      let i = 4 * t * canvas.width;
      for (let n = 0; n < canvas.width; n++) {
        let e = i + 4 * n;
        if (pixelData[e + 3] !== 0) {
          newData.push({
            x: n,
            y: t,
            color: [
              pixelData[e],
              pixelData[e + 1],
              pixelData[e + 2],
              pixelData[e + 3],
            ],
          });
        }
      }
    }
    newDataRef.current = newData.map(({ x, y, color }) => ({
      x,
      y,
      r: 1,
      color: `#0062ff`,
    }));
  }, [value, isTextarea]);

  const animate = useCallback((start: number) => {
    const animateFrame = (pos: number = 0) => {
      requestAnimationFrame(() => {
        const newArr = [];
        for (let i = 0; i < newDataRef.current.length; i++) {
          const current = newDataRef.current[i];
          if (current.x < pos) {
            newArr.push(current);
          } else {
            if (current.r <= 0) {
              current.r = 0;
              continue;
            }
            current.x += Math.random() > 0.5 ? 1 : -1;
            current.y += Math.random() > 0.5 ? 1 : -1;
            current.r -= 0.05 * Math.random();
            newArr.push(current);
          }
        }
        newDataRef.current = newArr;
        const ctx = canvasRef.current?.getContext("2d");
        if (ctx) {
          ctx.clearRect(pos, 0, 800, 800); // Clear whole canvas as it's not a form anymore
          newDataRef.current.forEach((t) => {
            const { x: n, y: i, r: s, color: color } = t;
            if (n > pos) {
              ctx.beginPath();
              ctx.rect(n, i, s, s);
              ctx.fillStyle = color;
              ctx.strokeStyle = "#0062ff";
              ctx.stroke();
            }
          });
        }
        if (newDataRef.current.length > 0) {
          animateFrame(pos - 8);
        }
      });
    };
    animateFrame(start);
  }, []);

  useEffect(() => {
    if (shouldVanish && value) {
      console.log("[VanishInput] Triggering vanish animation for:", name, value);
      setAnimating(true);
      draw();
      // Clear the DOM value to prevent duplicate text during animation
      if (inputElementRef.current) {
        inputElementRef.current.value = "";
      }
      const maxX = newDataRef.current.reduce(
        (prev, current) => (current.x > prev ? current.x : prev),
        0
      );
      animate(maxX);
    } else if (!shouldVanish) {
      setAnimating(false);
    }
  }, [shouldVanish, value, draw, animate]);

  // Handle autofill events
  useEffect(() => {
    let animationFrameId: number;
    let lastValue = value;

    const checkForAutofill = () => {
      if (inputElementRef.current && !animating) {
        const currentValue = inputElementRef.current.value;
        if (currentValue !== lastValue) {
          lastValue = currentValue;
          // Create a synthetic change event
          const syntheticEvent = {
            target: inputElementRef.current,
            currentTarget: inputElementRef.current,
          } as React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;
          onChange(syntheticEvent);
        }
      }
      animationFrameId = requestAnimationFrame(checkForAutofill);
    };

    animationFrameId = requestAnimationFrame(checkForAutofill);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [value, onChange, animating]);

  const InputComponent = isTextarea ? "textarea" : "input";

  return (
    <div
      className={cn(
        "relative w-full",
        className,
      )}
    >
      <canvas
        className={cn(
          "absolute pointer-events-none transform scale-50 top-[0.5rem] left-[calc(0.75rem)] origin-top-left filter invert dark:invert-0 pr-20",
          !animating ? "opacity-0" : "opacity-100"
        )}
        ref={canvasRef}
      />
      <InputComponent
        onInput={(e) => {
          if (!animating) {
            onChange(e as React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>);
          }
        }}
        ref={setRef}
        value={value}
        type={type}
        name={name}
        id={id}
        className={cn(
          "flex w-full rounded-md border bg-background px-3 py-2 text-base file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          isTextarea ? "min-h-[150px] resize-none" : "h-10",
          animating && "text-transparent dark:text-transparent",
          "[&:-webkit-autofill]:bg-background [&:-webkit-autofill]:shadow-[0_0_0_30px_hsl(var(--background))_inset] [&:-webkit-autofill]:text-foreground"
        )}
      />

      <div className="absolute inset-0 flex items-center rounded-md pointer-events-none">
        <AnimatePresence mode="wait">
          {!value && !animating && (
            <motion.p
              initial={{
                y: 0,
                opacity: 0,
              }}
              key={placeholder}
              animate={{
                y: 0,
                opacity: 1,
              }}
              exit={{
                y: -15,
                opacity: 0,
              }}
              transition={{
                duration: 0.3,
                ease: "linear",
              }}
              className="text-muted-foreground text-sm sm:text-base font-normal absolute top-[0.5rem] left-[calc(0.75rem)] w-[calc(100%-2rem)] truncate"
            >
              {placeholder}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}