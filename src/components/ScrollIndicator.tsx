"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import styles from "./ScrollIndicator.module.css";

export default function ScrollIndicator() {
    const scrollToContent = () => {
        const vh = window.innerHeight;
        window.scrollTo({
            top: vh,
            behavior: "smooth",
        });
    };

    return (
        <motion.div
            className={styles.scrollIndicator}
            onClick={scrollToContent}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
        >
            <span>Scopri di più</span>
            <ChevronDown className={styles.arrow} size={24} />
        </motion.div>
    );
}
