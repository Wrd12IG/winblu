"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight, Check, ShieldCheck, Truck } from "lucide-react";
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
                    Espandi il Tuo <span className={styles.highlight}>Business</span> con Winblu
                </h2>

                <p className={styles.subtitle}>
                    Unisciti al nostro network di rivenditori autorizzati. Offri ai tuoi clienti l'eccellenza dell'assemblaggio italiano.
                </p>

                <div className={styles.ctaButtons}>
                    <motion.button
                        className={styles.primaryButton}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span className={styles.buttonText}>Candidati come Rivenditore</span>
                        <ArrowRight size={20} className={styles.buttonIcon} />
                    </motion.button>

                    <motion.button
                        className={styles.secondaryButton}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span className={styles.buttonText}>Richiedi Info</span>
                        <Mail size={20} className={styles.buttonIcon} />
                    </motion.button>
                </div>

                <div className={styles.trustBadges}>
                    <div className={styles.badge}>
                        <span className={styles.badgeIcon}><Check size={18} /></span>
                        <span className={styles.badgeText}>Made in Italy</span>
                    </div>
                    <div className={styles.badge}>
                        <span className={styles.badgeIcon}><ShieldCheck size={18} /></span>
                        <span className={styles.badgeText}>3 Anni Garanzia</span>
                    </div>
                    <div className={styles.badge}>
                        <span className={styles.badgeIcon}><Truck size={18} /></span>
                        <span className={styles.badgeText}>Spedizione Assicurata</span>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
