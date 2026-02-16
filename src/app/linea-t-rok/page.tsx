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
            size: "cardMedium"
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
            <Navbar />
            <section className={styles.hero}>
                <GridBackground />
                <div className={styles.heroContent}>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className={styles.heroText}
                    >
                        <span className={styles.heroTag}>Performance No Limits</span>
                        <h1 className={styles.heroTitle}>
                            Winblu <span className={styles.gradient}>T-ROK Series</span>
                        </h1>
                        <p className={styles.heroDesc}>
                            Nata per chi non scende a compromessi. La linea T-ROK unisce l'estetica più ricercata alla potenza bruta dell'hardware di ultima generazione per un'esperienza di gioco definitiva.
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
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Bento Grid Gallery */}
            <section id="gallery" className={styles.bentoSection}>
                <div className={styles.bentoGrid}>
                    {/* Z790 - Third Card */}
                    <motion.div
                        className={`${styles.bentoCard} ${styles.cardThird} ${styles.cardWithImage}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <Link href="/t-rok-z790" className={styles.cardLink}>
                            <div className={styles.cardImageContainerSmall}>
                                <Image
                                    src={models[0].image}
                                    alt={models[0].name}
                                    fill
                                    className={styles.cardImage}
                                    sizes="(max-width: 768px) 100vw, 400px"
                                />
                                <div className={styles.cardOverlay} />
                            </div>
                            <div className={styles.cardContent}>
                                <span className={styles.heroTag} style={{ fontSize: '0.7rem' }}>{models[0].tagline}</span>
                                <h3 className={styles.cardTitle}>{models[0].name}</h3>
                                <div className={styles.cardReveal}>
                                    <p className={styles.cardTextSmall}>{models[0].description}</p>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '1rem' }}>
                                        {models[0].specs.map((spec, i) => (
                                            <span key={i} className={styles.heroTag} style={{ fontSize: '0.7rem' }}>{spec}</span>
                                        ))}
                                    </div>
                                    <div style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', color: '#0160A9', fontWeight: '800' }}>
                                        Scopri di più <ChevronRight size={16} style={{ marginLeft: '0.5rem' }} />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </motion.div>

                    {/* B760 SE - Third */}
                    <motion.div
                        className={`${styles.bentoCard} ${styles.cardThird} ${styles.cardWithImage}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <Link href="/t-rok-b760-se" className={styles.cardLink}>
                            <div className={styles.cardImageContainerSmall}>
                                <Image
                                    src={models[1].image}
                                    alt={models[1].name}
                                    fill
                                    className={styles.cardImage}
                                    sizes="(max-width: 768px) 100vw, 400px"
                                />
                                <div className={styles.cardOverlay} />
                            </div>
                            <div className={styles.cardContent}>
                                <span className={styles.heroTag} style={{ fontSize: '0.7rem' }}>{models[1].tagline}</span>
                                <h3 className={styles.cardTitle}>{models[1].name}</h3>
                                <div className={styles.cardReveal}>
                                    <p className={styles.cardTextSmall}>{models[1].description}</p>
                                    <div style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', color: '#0160A9', fontWeight: '800' }}>
                                        Scopri B760 <ChevronRight size={16} style={{ marginLeft: '0.5rem' }} />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </motion.div>

                    {/* H610 - Third */}
                    <motion.div
                        className={`${styles.bentoCard} ${styles.cardThird} ${styles.cardWithImage}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <Link href="/t-rok-tuf-h610" className={styles.cardLink}>
                            <div className={styles.cardImageContainerSmall}>
                                <Image
                                    src={models[2].image}
                                    alt={models[2].name}
                                    fill
                                    className={styles.cardImage}
                                    sizes="(max-width: 768px) 100vw, 400px"
                                />
                                <div className={styles.cardOverlay} />
                            </div>
                            <div className={styles.cardContent}>
                                <span className={styles.heroTag} style={{ fontSize: '0.7rem' }}>{models[2].tagline}</span>
                                <h3 className={styles.cardTitle}>{models[2].name}</h3>
                                <div className={styles.cardReveal}>
                                    <p className={styles.cardTextSmall}>{models[2].description}</p>
                                    <div style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', color: '#0160A9', fontWeight: '800' }}>
                                        Scopri H610 <ChevronRight size={16} style={{ marginLeft: '0.5rem' }} />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </motion.div>

                    {/* Features - Aligned to fit grid (Medium) */}
                    <motion.div
                        className={`${styles.bentoCard} ${styles.cardMedium}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <div className={styles.cardContent}>
                            <Wind size={48} className={styles.cardIcon} />
                            <h3 className={styles.cardTitle}>Cooling</h3>
                            <p className={styles.cardText}>AIO 360mm e airflow ottimizzato per maratone di gioco estreme.</p>
                        </div>
                    </motion.div>

                    <motion.div
                        className={`${styles.bentoCard} ${styles.cardMedium} ${styles.cardHighlight}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <div className={styles.cardContent}>
                            <Layers size={48} className={styles.cardIcon} />
                            <h3 className={styles.cardTitle}>Vista 270°</h3>
                            <p className={styles.cardText}>Design panoramico con vetro curvo o aquarium case.</p>
                        </div>
                    </motion.div>

                    <motion.div
                        className={`${styles.bentoCard} ${styles.cardMedium}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                    >
                        <div className={styles.cardContent}>
                            <Sparkles size={48} className={styles.cardIcon} />
                            <h3 className={styles.cardTitle}>RGB Aura</h3>
                            <p className={styles.cardText}>Sincronizzazione ARGB completa con ASUS Aura Sync.</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            <B2BCTASection />
            <Footer />
        </div>
    );
}
