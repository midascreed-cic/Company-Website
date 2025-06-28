"use client"

import { cn } from "@/lib/utils"
import { motion, stagger, useAnimate, useInView } from "framer-motion"
import { useEffect } from "react"

type Animation = "blurInUp" | "blurInDown" | "fadeInUp" | "fadeInDown" | "fadeIn"
type By = "character" | "word"

interface TextAnimateProps {
  children: string
  animation?: Animation
  by?: By
  delay?: number
  className?: string
  once?: boolean
}

export function TextAnimate({
  children,
  animation = "fadeIn",
  by = "word",
  delay = 0,
  className,
  once = false,
}: TextAnimateProps) {
  const [scope, animate] = useAnimate()
  const isInView = useInView(scope, { once })

  const getAnimationProperties = (animation: Animation) => {
    switch (animation) {
      case "blurInUp":
        return {
          initial: { opacity: 0, filter: "blur(10px)", y: 20 },
          animate: { opacity: 1, filter: "blur(0px)", y: 0 },
        }
      case "blurInDown":
        return {
          initial: { opacity: 0, filter: "blur(10px)", y: -20 },
          animate: { opacity: 1, filter: "blur(0px)", y: 0 },
        }
      case "fadeInUp":
        return {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
        }
      case "fadeInDown":
        return {
          initial: { opacity: 0, y: -20 },
          animate: { opacity: 1, y: 0 },
        }
      case "fadeIn":
      default:
        return {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
        }
    }
  }

  const animationProperties = getAnimationProperties(animation)

  useEffect(() => {
    if (isInView) {
      const elements = by === "character" ? "span" : "div"
      animate(elements, animationProperties.animate, {
        duration: 0.5,
        delay: stagger(0.03, { startDelay: delay }),
      })
    }
  }, [isInView, animate, animation, by, delay, animationProperties.animate])

  const renderText = () => {
    if (by === "character") {
      return children.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={animationProperties.initial}
          className={cn("inline-block", char === " " && "mr-1")}
        >
          {char}
        </motion.span>
      ))
    } else {
      return children.split(" ").map((word, index) => (
        <motion.div key={index} initial={animationProperties.initial} className="inline-block mr-1.5">
          {word}
        </motion.div>
      ))
    }
  }

  return (
    <span ref={scope} className={cn("inline-block", className)}>
      {renderText()}
    </span>
  )
}
