"use client"

import { cn } from "@/lib/utils"
import type React from "react" // Import React

type TColorProp = string | string[]

interface ShineBorderProps {
  borderRadius?: number
  borderWidth?: number
  duration?: number
  color?: TColorProp
  className?: string
  children?: React.ReactNode
}

export function ShineBorder({
  borderRadius = 8,
  borderWidth = 1,
  duration = 14,
  color = "#000000",
  className,
  children,
}: ShineBorderProps) {
  return (
    <div
      style={
        {
          "--border-radius": `${borderRadius}px`,
        } as React.CSSProperties
      }
      className={cn(
        "relative min-h-[60px] w-fit min-w-[300px] place-items-center rounded-[--border-radius] p-3 bg-background border overflow-hidden",
        className,
      )}
    >
      <div
        style={
          {
            "--border-width": `${borderWidth}px`,
            "--border-radius": `${borderRadius}px`,
            "--duration": `${duration}s`,
            "--mask-linear-gradient": `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
            "--background-radial-gradient": `radial-gradient(circle at center, transparent 0%, ${color instanceof Array ? color.join(",") : color}, transparent 70%)`,
          } as React.CSSProperties
        }
        className={`before:bg-shine-size pointer-events-none before:absolute before:inset-0 before:size-full before:rounded-[--border-radius] before:p-[--border-width] before:will-change-[background-position] before:content-[""] before:![-webkit-mask-composite:xor] before:![mask-composite:exclude] before:[background-image:--background-radial-gradient] before:[background-size:200%_200%] before:[mask:--mask-linear-gradient] motion-safe:before:animate-shine sm:before:[background-size:300%_300%]`}
      ></div>
      {children}
    </div>
  )
}
