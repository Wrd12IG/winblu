"use client";

import styles from '../linea-t-rok/linea-t-rok.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

export default function LineaEMotionPage() {
    return (
        <div className={styles.container}>
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <motion.div
                        className={styles.heroText}
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                    >
                        <motion.div variants={fadeInUp} className={styles.subtitle}>
                            Winblu Linea e-Motion
                        </motion.div>
                        <motion.h1 variants={fadeInUp} className={styles.title}>
                            Mobilità Senza <br /> Confini
                        </motion.h1>
                        <motion.p variants={fadeInUp} className={styles.heroDescription}>
                            Notebook dalle prestazioni elevate, perfetti per chi lavora in mobilità senza rinunciare alla potenza.
                            La linea e-Motion combina portabilità ed autonomia per professionisti sempre connessi.
                        </motion.p>
                    </motion.div>

                    <motion.div
                        className={styles.heroImageWrapper}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <Image
                            src="/products/e-motion/extracted_24.jpeg"
                            alt="Winblu e-Motion Hero"
                            fill
                            className={styles.heroImage}
                        />
                    </motion.div>
                </div>
            </section>

            <section className={styles.intro}>
                <div className={styles.introContent}>
                    <motion.p
                        className={styles.introText}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        "Prestazioni desktop in un corpo ultra-sottile: la soluzione definitiva per il professionista moderno che lavora ovunque."
                    </motion.p>
                </div>
            </section>

            <section className={styles.gallery}>
                <motion.h2
                    className={styles.sectionTitle}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Design in movimento
                </motion.h2>

                <div className={styles.grid}>
                    <motion.div
                        className={`${styles.card} ${styles.cardLarge}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className={styles.cardImageContainer}>
                            <Image src="/products/e-motion/extracted_11.jpeg" alt="Vista Frontale" width={600} height={400} style={{ objectFit: 'contain' }} />
                        </div>
                    </motion.div>

                    <motion.div
                        className={styles.card}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <div className={styles.cardImageContainer}>
                            <Image src="/products/e-motion/extracted_13.jpeg" alt="Tastiera" width={300} height={300} style={{ objectFit: 'contain' }} />
                        </div>
                    </motion.div>

                    <motion.div
                        className={`${styles.card} ${styles.cardTall}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className={styles.cardImageContainer}>
                            <Image src="/products/e-motion/extracted_14.jpeg" alt="Profilo Sottile" width={400} height={600} style={{ objectFit: 'contain' }} />
                        </div>
                    </motion.div>

                    <motion.div
                        className={styles.card}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <div className={styles.cardImageContainer}>
                            <Image src="/products/e-motion/extracted_27.jpeg" alt="Connettività" width={300} height={300} style={{ objectFit: 'contain' }} />
                        </div>
                    </motion.div>

                    <motion.div
                        className={styles.card}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <div className={styles.cardImageContainer}>
                            <Image src="/products/e-motion/extracted_25.jpeg" alt="Performance" width={300} height={300} style={{ objectFit: 'contain' }} />
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className={styles.ctaSection}>
                <motion.div
                    className={styles.ctaContent}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <h2 className={styles.sectionTitle}>Porta il tuo ufficio con te</h2>
                    <Link href="/punti-vendita" className={styles.ctaButton}>
                        Trova Rivenditore <span style={{ marginLeft: '10px' }}>→</span>
                    </Link>
                </motion.div>
            </section>
        </div>
    );
}
