"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./WorldsSection.module.css";

export default function WorldsSection() {
    return (
        <section className={styles.worldsSection}>
            <div className={styles.container}>
                <motion.h2
                    className={styles.sectionTitle}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Quale <span className={styles.highlight}>Mondo</span> ti Rappresenta?
                </motion.h2>

                <div className={styles.worldsGrid}>
                    {/* Gaming World */}
                    <motion.div
                        className={styles.worldCard}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className={styles.cardImageWrapper}>
                            <Image
                                src="/hero-gaming.png"
                                alt="Gaming PC"
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className={styles.cardImage}
                            />
                            <div className={styles.cardOverlay} />
                        </div>

                        <div className={styles.cardContent}>
                            <div className={styles.cardBadge}>GAMING</div>
                            <h3 className={styles.cardTitle}>Per Chi Compete</h3>
                            <p className={styles.cardDescription}>
                                Potenza estrema per dominare ogni arena competitiva.
                                Frame rate altissimi, zero compromessi, RGB personalizzabile.
                            </p>
                            <div className={styles.cardFeatures}>
                                <div className={styles.feature}>
                                    <span className={styles.featureIcon}>⚡</span>
                                    <span>4K/144Hz Ready</span>
                                </div>
                                <div className={styles.feature}>
                                    <span className={styles.featureIcon}>🎮</span>
                                    <span>RGB Sync</span>
                                </div>
                                <div className={styles.feature}>
                                    <span className={styles.featureIcon}>❄️</span>
                                    <span>Raffreddamento Avanzato</span>
                                </div>
                            </div>
                            <Link href="/linea-t-rok" className={styles.cardButton}>
                                Esplora Gaming
                                <span className={styles.arrow}>→</span>
                            </Link>
                        </div>
                    </motion.div>

                    {/* Professional World */}
                    <motion.div
                        className={styles.worldCard}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className={styles.cardImageWrapper}>
                            <Image
                                src="/hero-workstation.png"
                                alt="Workstation PC"
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className={styles.cardImage}
                            />
                            <div className={styles.cardOverlay} />
                        </div>

                        <div className={styles.cardContent}>
                            <div className={styles.cardBadge}>PROFESSIONAL</div>
                            <h3 className={styles.cardTitle}>Per Chi Crea</h3>
                            <p className={styles.cardDescription}>
                                Workstation certificate per professionisti.
                                Rendering, editing 8K, sviluppo AI. Affidabilità assoluta.
                            </p>
                            <div className={styles.cardFeatures}>
                                <div className={styles.feature}>
                                    <span className={styles.featureIcon}>🎨</span>
                                    <span>Certificata Adobe</span>
                                </div>
                                <div className={styles.feature}>
                                    <span className={styles.featureIcon}>⚙️</span>
                                    <span>ECC Memory</span>
                                </div>
                                <div className={styles.feature}>
                                    <span className={styles.featureIcon}>🔒</span>
                                    <span>Business Grade</span>
                                </div>
                            </div>
                            <Link href="/linea-experience" className={styles.cardButton}>
                                Esplora Workstation
                                <span className={styles.arrow}>→</span>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
