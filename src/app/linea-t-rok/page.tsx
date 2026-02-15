"use client";

import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/product-bento.module.css'; // Updated import
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import B2BCTASection from "@/components/B2BCTASection";
import { motion } from 'framer-motion';
import { Shield, Zap, Cpu, Monitor, Wifi, Award, ChevronRight, Layers, Wind, Gauge, Sparkles, Box } from 'lucide-react';

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const GridBackground = () => (
    <div className={styles.gridBg} />
);

export default function LineaTRok() {
    const models = [
        {
            id: 'z790',
            name: "T-ROK Z790",
            tagline: "Performance No Limits",
            description: "Scatena la tua furia di gioco. Il tuo PC gaming non è mai stato così potente.",
            image: "https://www.winblu.it/wp-content/uploads/2024/07/winblu-0323-1872x2048.png",
            specs: ["Intel Core i9 14th Gen", "Z790 Chipset", "Aura RGB", "DDR5 7200"],
            href: "/t-rok-z790",
            size: "cardLarge" // Changed from oneThird to cardLarge/Medium to fit bento
        },
        {
            id: 'b760-se',
            name: "T-ROK B760 SE",
            tagline: "Aquarium Design",
            description: "Entra nel gioco come mai prima d’ora. Il PC gaming per tutti, dagli esperti ai principianti.",
            image: "https://www.winblu.it/wp-content/uploads/2024/07/winblu-0143-1872x2048.png",
            specs: ["DDR5 7200MT/s", "Aquarium Case", "5x Fans ARGB"],
            href: "/t-rok-b760-se",
            size: "cardMedium"
        },
        {
            id: 'h610',
            name: "T-ROK H610",
            tagline: "Powered by ASUS",
            description: "Un Gaming dalle piccole dimensioni, di un elegante color bianco, per il gamer che vuole il massimo!",
            image: "/products/t-rok/t-rok-white.png",
            specs: ["Asus PBA", "Compact Design", "White Aesthetic"],
            href: "/t-rok-tuf-h610",
            size: "cardMedium"
        }
    ];

    return (
        <div className={styles.container}>

            {/* Hero Section */}
            <section className={styles.hero}>
                <GridBackground />
                <div className={styles.heroContent}>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className={styles.heroText}
                    >
                        <span className={styles.heroTag}>Winblu T-ROK Series</span>
                        <h1 className={styles.heroTitle}>
                            Performance<br />
                            <span className={styles.gradient}>No Limits</span>
                        </h1>
                        <p className={styles.heroDesc}>
                            Nata per chi non scende a compromessi. La linea T-ROK unisce l'estetica più ricercata alla potenza bruta dell'hardware di ultima generazione.
                        </p>
                        <div className={styles.heroCTAs}>
                            <Link href="/punti-vendita" className={styles.ctaPrimary}>
                                Configura il tuo T-ROK
                            </Link>
                            <Link href="#gallery" className={styles.ctaSecondary}>
                                Scopri la Gamma
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className={styles.heroVisual}
                    >
                        <div className={styles.heroImageContainer}>
                            <Image
                                src="https://www.winblu.it/wp-content/uploads/2024/07/winblu-0323-1872x2048.png"
                                alt="Winblu T-Rok Premium"
                                fill
                                className={styles.heroProductImage}
                                priority
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Bento Grid Gallery */}
            <section id="gallery" className={styles.bentoSection}>
                <motion.h2
                    className={styles.sectionTitle}
                    style={{
                        textAlign: 'center',
                        fontSize: '2.5rem',
                        marginBottom: '3rem',
                        fontWeight: '700',
                        color: '#fff'
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                >
                    Scegli la tua Arma
                </motion.h2>

                <div className={styles.bentoGrid}>
                    {/* Manually placing cards to fit the new layout better */}

                    {/* T-ROK Z790 - Large Card */}
                    <motion.div
                        className={`${styles.bentoCard} ${styles.cardLarge} ${styles.cardWithImage}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <Link href="/t-rok-z790" className={styles.cardLink} style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column', height: '100%', width: '100%' }}>
                            <div className={styles.cardImageContainer}>
                                <Image
                                    src={models[0].image}
                                    alt={models[0].name}
                                    fill
                                    className={styles.cardImage}
                                />
                                <div className={styles.cardOverlay} />
                            </div>
                            <div className={styles.cardContent}>
                                <span className={styles.heroTag} style={{ fontSize: '0.8rem', padding: '0.2rem 0.6rem' }}>{models[0].tagline}</span>
                                <h2 className={styles.cardTitle}>{models[0].name}</h2>
                                <p className={styles.cardText}>{models[0].description}</p>
                                <div className={styles.cardReveal}>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1rem' }}>
                                        {models[0].specs.map((spec, i) => (
                                            <span key={i} style={{
                                                fontSize: '0.75rem',
                                                padding: '0.25rem 0.75rem',
                                                background: 'rgba(255,255,255,0.1)',
                                                borderRadius: '100px',
                                                border: '1px solid rgba(255,255,255,0.2)',
                                                color: '#fff'
                                            }}>
                                                {spec}
                                            </span>
                                        ))}
                                    </div>
                                    <div style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', color: '#0160A9', fontWeight: '700', fontSize: '0.875rem' }}>
                                        Scopri di più <ChevronRight size={16} style={{ marginLeft: '0.25rem' }} />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </motion.div>

                    {/* Features Small Cards */}
                    <motion.div
                        className={`${styles.bentoCard} ${styles.cardSmall}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <div className={styles.cardContent}>
                            <Wind size={36} className={styles.cardIcon} />
                            <h3 className={styles.cardTitle}>Raffreddamento</h3>
                            <div className={styles.cardReveal}>
                                <p className={styles.cardTextSmall}>Sistemi AIO da 240mm e airflow ottimizzato per performance costanti.</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* T-ROK B760 SE - Medium Card */}
                    <motion.div
                        className={`${styles.bentoCard} ${styles.cardMedium} ${styles.cardWithImage}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <Link href="/t-rok-b760-se" className={styles.cardLink} style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column', height: '100%', width: '100%' }}>
                            <div className={styles.cardImageContainerSmall}>
                                <Image
                                    src={models[1].image}
                                    alt={models[1].name}
                                    fill
                                    className={styles.cardImage}
                                />
                                <div className={styles.cardOverlay} />
                            </div>
                            <div className={styles.cardContent}>
                                <span className={styles.heroTag} style={{ fontSize: '0.7rem', marginBottom: '0.5rem' }}>{models[1].tagline}</span>
                                <h3 className={styles.cardTitle}>{models[1].name}</h3>
                                <div className={styles.cardReveal}>
                                    <p className={styles.cardText}>{models[1].description}</p>
                                    <div style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', color: '#0160A9', fontWeight: '700', fontSize: '0.875rem' }}>
                                        Scopri B760 <ChevronRight size={16} style={{ marginLeft: '0.25rem' }} />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </motion.div>

                    {/* T-ROK H610 - Medium Card */}
                    <motion.div
                        className={`${styles.bentoCard} ${styles.cardMedium} ${styles.cardWithImage}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <Link href="/t-rok-tuf-h610" className={styles.cardLink} style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column', height: '100%', width: '100%' }}>
                            <div className={styles.cardImageContainerSmall}>
                                <Image
                                    src={models[2].image}
                                    alt={models[2].name}
                                    fill
                                    className={styles.cardImage}
                                />
                                <div className={styles.cardOverlay} />
                            </div>
                            <div className={styles.cardContent}>
                                <span className={styles.heroTag} style={{ fontSize: '0.7rem', marginBottom: '0.5rem' }}>{models[2].tagline}</span>
                                <h3 className={styles.cardTitle}>{models[2].name}</h3>
                                <div className={styles.cardReveal}>
                                    <p className={styles.cardText}>{models[2].description}</p>
                                    <div style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', color: '#0160A9', fontWeight: '700', fontSize: '0.875rem' }}>
                                        Scopri H610 <ChevronRight size={16} style={{ marginLeft: '0.25rem' }} />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </motion.div>

                    {/* Features Small Cards */}
                    <motion.div
                        className={`${styles.bentoCard} ${styles.cardSmall} ${styles.cardHighlight}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <div className={styles.cardContent}>
                            <Layers size={36} className={styles.cardIcon} />
                            <h3 className={styles.cardTitle}>Vista 270°</h3>
                            <div className={styles.cardReveal}>
                                <p className={styles.cardTextSmall}>Design panoramico con vetro curvo o aquarium.</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className={`${styles.bentoCard} ${styles.cardSmall}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        <div className={styles.cardContent}>
                            <Sparkles size={36} className={styles.cardIcon} />
                            <h3 className={styles.cardTitle}>RGB Aura</h3>
                            <div className={styles.cardReveal}>
                                <p className={styles.cardTextSmall}>Sincronizzazione ARGB completa con ASUS Aura Sync.</p>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </section>

            {/* B2B CTA Section */}
            <B2BCTASection />
        </div>
    );
}
