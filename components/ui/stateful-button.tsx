"use client";
import { cn } from "@/lib/utils";
import React, { useEffect } from "react";
import { motion, useAnimate } from "motion/react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
  loading?: boolean;
  success?: boolean;
}

export const Button = ({ className, children, loading, success, ...props }: ButtonProps) => {
  const [scope, animate] = useAnimate();

  // Omit drag and animation event props to avoid type errors with motion.button
  const {
    onDrag,
    onDragStart,
    onDragEnd,
    onAnimationStart,
    onAnimationEnd,
    ...buttonProps
  } = props;

  useEffect(() => {
    const animateLoading = async () => {
      if (!scope.current || !scope.current.querySelector('.loader')) return;
      await animate(
        ".loader",
        {
          width: "20px",
          scale: 1,
          display: "block",
        },
        {
          duration: 0.2,
        },
      );
    };
    const animateSuccess = async () => {
      if (!scope.current || !scope.current.querySelector('.loader') || !scope.current.querySelector('.check')) return;
      await animate(
        ".loader",
        {
          width: "0px",
          scale: 0,
          display: "none",
        },
        {
          duration: 0.2,
        },
      );
      await animate(
        ".check",
        {
          width: "20px",
          scale: 1,
          display: "block",
        },
        {
          duration: 0.2,
        },
      );
      await animate(
        ".check",
        {
          width: "0px",
          scale: 0,
          display: "none",
        },
        {
          delay: 2,
          duration: 0.2,
        },
      );
    };
    if (loading) {
      animateLoading();
    } else if (success) {
      animateSuccess();
    } else {
      if (!scope.current) return;
      animate(
        ".loader",
        { width: "0px", scale: 0, display: "none" },
        { duration: 0.1 }
      );
      animate(
        ".check",
        { width: "0px", scale: 0, display: "none" },
        { duration: 0.1 }
      );
    }
  }, [loading, success, animate, scope]);

  return (
    <motion.button
      layout
      layoutId="button"
      ref={scope}
      className={cn(
        // Default to blue, full width, rounded-md for consistency
        "flex w-full min-w-[120px] items-center justify-center gap-2 rounded-md bg-blue-600 px-4 py-2 font-medium text-white ring-offset-2 transition duration-200 hover:ring-2 hover:ring-blue-400 dark:ring-offset-black",
        "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:ring-0 disabled:hover:bg-blue-600",
        className,
      )}
      {...buttonProps}
    >
      <motion.div layout className="flex items-center gap-2">
        <Loader />
        <CheckIcon />
        <motion.span layout>{children}</motion.span>
      </motion.div>
    </motion.button>
  );
};

const Loader = () => {
  return (
    <motion.svg
      animate={{
        rotate: [0, 360],
      }}
      initial={{
        scale: 0,
        width: 0,
        display: "none",
      }}
      style={{
        scale: 0.5,
        display: "none",
      }}
      transition={{
        duration: 0.3,
        repeat: Infinity,
        ease: "linear",
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="loader text-white"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 3a9 9 0 1 0 9 9" />
    </motion.svg>
  );
};

const CheckIcon = () => {
  return (
    <motion.svg
      initial={{
        scale: 0,
        width: 0,
        display: "none",
      }}
      style={{
        scale: 0.5,
        display: "none",
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="check text-white"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
      <path d="M9 12l2 2l4 -4" />
    </motion.svg>
  );
}; 