"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Zap, Gamepad2, Snowflake, Palette, Settings, Lock, ArrowRight } from "lucide-react";
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
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
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
                            <h3 className={styles.cardTitle}>T-Rok</h3>
                            <p className={styles.cardDescription}>
                                Domina ogni arena con prestazioni estreme.
                            </p>
                            <Link href="/linea-t-rok" className={styles.cardButton}>
                                Scopri T-Rok
                                <ArrowRight size={18} className={styles.arrow} />
                            </Link>
                        </div>
                    </motion.div>

                    {/* All-in-One World */}
                    <motion.div
                        className={styles.worldCard}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className={styles.cardImageWrapper}>
                            <Image
                                src="/hero-compact.png"
                                alt="All-in-One PC"
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className={styles.cardImage}
                            />
                            <div className={styles.cardOverlay} />
                        </div>

                        <div className={styles.cardContent}>
                            <div className={styles.cardBadge}>ALL-IN-ONE</div>
                            <h3 className={styles.cardTitle}>eVision</h3>
                            <p className={styles.cardDescription}>
                                Eleganza e potenza in un unico design compatto.
                            </p>
                            <Link href="/linea-evision" className={styles.cardButton}>
                                Scopri eVision
                                <ArrowRight size={18} className={styles.arrow} />
                            </Link>
                        </div>
                    </motion.div>

                    {/* Workstation World */}
                    <motion.div
                        className={styles.worldCard}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
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
                            <div className={styles.cardBadge}>WORKSTATION</div>
                            <h3 className={styles.cardTitle}>Experience</h3>
                            <p className={styles.cardDescription}>
                                Certificata per creativi e professionisti esigenti.
                            </p>
                            <Link href="/linea-experience" className={styles.cardButton}>
                                Scopri Experience
                                <ArrowRight size={18} className={styles.arrow} />
                            </Link>
                        </div>
                    </motion.div>

                    {/* Server World */}
                    <motion.div
                        className={styles.worldCard}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <div className={styles.cardImageWrapper}>
                            <Image
                                src="/enterprise_3647-extracted/extracted_26.png"
                                alt="Server Enterprise"
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className={styles.cardImage}
                                style={{ objectFit: 'contain', padding: '2rem' }}
                            />
                            <div className={styles.cardOverlay} />
                        </div>

                        <div className={styles.cardContent}>
                            <div className={styles.cardBadge}>SERVER</div>
                            <h3 className={styles.cardTitle}>Enterprise</h3>
                            <p className={styles.cardDescription}>
                                Infrastrutture scalabili per il data center moderno.
                            </p>
                            <Link href="/linea-enterprise-3647" className={styles.cardButton}>
                                Scopri Enterprise
                                <ArrowRight size={18} className={styles.arrow} />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
