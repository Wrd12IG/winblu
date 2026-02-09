"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./PantherAnimation.module.css";

export default function PantherAnimation() {
    return (
        <motion.div
            className={styles.pantherContainer}
            animate={{
                x: ["-120%", "120%"], // Move from left to right beyond viewport
            }}
            transition={{
                duration: 25, // Slow, stealthy prowl
                repeat: Infinity,
                repeatDelay: 5,
                ease: "linear"
            }}
        >
            <Image
                src="/panther-tech.png"
                alt="Tech Panther"
                width={600}
                height={300}
                className={styles.pantherImage}
                priority={false}
            />
        </motion.div>
    );
}
