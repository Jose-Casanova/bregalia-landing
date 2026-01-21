"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface MotionDivProps {
    children: ReactNode;
    delay?: number;
    className?: string;
    direction?: "up" | "down" | "left" | "right" | "none";
}

export function MotionDiv({
    children,
    delay = 0,
    className = "",
    direction = "up",
}: MotionDivProps) {
    const variants = {
        hidden: {
            opacity: 0,
            y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
            x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut" as const,
                delay: delay,
            },
        },
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={variants}
            className={className}
        >
            {children}
        </motion.div>
    );
}
