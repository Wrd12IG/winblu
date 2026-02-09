"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "./FinalCTA.module.css";

export default function FinalCTA() {
    return (
        <section className={styles.ctaSection}>
            <div className={styles.glowEffect} />

            <motion.div
                className={styles.container}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <h2 className={styles.title}>
                    Pronto a Fare sul <span className={styles.highlight}>Serio</span>?
                </h2>

                <p className={styles.subtitle}>
                    Configuratore avanzato o consulenza diretta. Costruiamo insieme il tuo setup perfetto.
                </p>

                <div className={styles.ctaButtons}>
                    <motion.button
                        className={styles.primaryButton}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span className={styles.buttonText}>Configura il Tuo PC</span>
                        <span className={styles.buttonIcon}>→</span>
                    </motion.button>

                    <motion.button
                        className={styles.secondaryButton}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span className={styles.buttonText}>Parla con un Tecnico</span>
                        <span className={styles.buttonIcon}>💬</span>
                    </motion.button>
                </div>

                <div className={styles.trustBadges}>
                    <div className={styles.badge}>
                        <span className={styles.badgeIcon}>🇮🇹</span>
                        <span className={styles.badgeText}>Made in Italy</span>
                    </div>
                    <div className={styles.badge}>
                        <span className={styles.badgeIcon}>✓</span>
                        <span className={styles.badgeText}>3 Anni Garanzia</span>
                    </div>
                    <div className={styles.badge}>
                        <span className={styles.badgeIcon}>🚚</span>
                        <span className={styles.badgeText}>Spedizione Assicurata</span>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
