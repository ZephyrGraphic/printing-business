"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface StaggerChildrenProps {
  children: ReactNode
  className?: string
  delay?: number
  staggerDelay?: number
  threshold?: number
  once?: boolean
}

export function StaggerChildren({
  children,
  className,
  delay = 0,
  staggerDelay = 0.1,
  threshold = 0.1,
  once = true,
}: StaggerChildrenProps) {
  const { ref, inView } = useInView({
    triggerOnce: once,
    threshold,
  })

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: delay,
        staggerChildren: staggerDelay,
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={container}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <motion.div variants={item} className={cn(className)}>
      {children}
    </motion.div>
  )
}

