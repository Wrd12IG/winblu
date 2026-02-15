"use client";

import Link from 'next/link';
import Image from 'next/image';
import styles from '../t-rok-styles/trok-premium.module.css';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SpecsCards from "@/components/SpecsCards";
import { SpecCategory } from "@/components/SpecsAccordion";
import B2BCTASection from "@/components/B2BCTASection";
import { motion } from 'framer-motion';
import { Shield, Zap, Cpu, Monitor, Wifi, Award, Box, Layers, Gauge, Sparkles, Activity, Settings, TrendingUp, Package } from 'lucide-react';

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const GridBackground = () => (
    <div className={styles.gridBg} />
);

export default function TRokTufH610Page() {
    const technicalSpecs: SpecCategory[] = [
        {
            id: 'cpu',
            title: 'Processore',
            icon: <Cpu size={24} />,
            items: [
                { label: 'Generazione', value: 'Intel® Core™ Quattordicesima Generazione' },
                { label: 'Architettura', value: 'Raptor Lake Refresh' },
                { label: 'E-core/P-core', value: 'Fino a 24 Core complessivi' },
                { label: 'Turbo Freq', value: 'Fino a 6.0 GHz' },
            ]
        },
        {
            id: 'pba',
            title: 'Powered by ASUS',
            icon: <Award size={24} />,
            items: [
                { label: 'Certificazione', value: 'PBA - Powered By ASUS' },
                { label: 'Scheda Madre', value: 'ASUS serie TUF / Prime H610' },
                { label: 'Qualità', value: 'Componentistica di Grado Militare' },
            ]
        },
        {
            id: 'design',
            title: 'Design Bianco',
            icon: <Box size={24} />,
            items: [
                { label: 'Case', value: 'Bisonte Bianco Special Edition' },
                { label: 'Colore', value: 'Pure White Aesthetic' },
                { label: 'Forma', value: 'Compact Mid-Tower' },
                { label: 'Visual', value: 'Vetro Temperato Laterale' },
            ]
        },
        {
            id: 'memory',
            title: 'Memoria RAM',
            icon: <Gauge size={24} />,
            items: [
                { label: 'Supporto', value: 'DDR5 New Frontier' },
                { label: 'Capacità', value: 'Fino a 128GB (2 slot)' },
                { label: 'Frequenza', value: 'DDR5 Velocità Estrema' },
            ]
        },
        {
            id: 'graphics',
            title: 'Grafica',
            icon: <Monitor size={24} />,
            items: [
                { label: 'Serie', value: 'NVIDIA® GeForce® RTX serie 4000' },
                { label: 'AI Power', value: 'NVIDIA DLSS 3 Support' },
                { label: 'Visual', value: 'Ray Tracing Avanzato' },
            ]
        },
        {
            id: 'software',
            title: 'OS & Security',
            icon: <Shield size={24} />,
            items: [
                { label: 'S.O.', value: 'Windows 11 Professional' },
                { label: 'Antivirus', value: 'Kaspersky Internet Security incluso' },
                { label: 'Sicurezza', value: 'TPM 2.0 Ready' },
            ]
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
                        <span className={styles.heroTag}>Powered by ASUS</span>
                        <h1 className={styles.heroTitle}>
                            T-Rok H610:<br />
                            <span className={styles.gradient} style={{ background: 'linear-gradient(135deg, #fff 0%, #00d2ff 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Bisonte Bianco</span>
                        </h1>
                        <p className={styles.heroDesc}>
                            Quando le leggende si fanno realtà. Ricordate il mitologico Bisonte Bianco delle Leggende Indiane? Una creatura fantastica che ora prende la forma di una poderosa game machine firmata Winblu.
                        </p>
                        <div className={styles.heroCTAs}>
                            <Link href="/punti-vendita?tipo=fornitura" className={styles.ctaPrimary} style={{ borderColor: 'rgba(0, 210, 255, 0.4)', background: 'linear-gradient(135deg, rgba(0, 210, 255, 0.2), rgba(0, 210, 255, 0.1))' }}>
                                Configura
                            </Link>
                            <Link href="/punti-vendita" className={styles.ctaSecondary}>
                                Rivenditori
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
                                src="/products/t-rok/t-rok-white.png"
                                alt="Winblu T-Rok H610 White"
                                fill
                                className={styles.heroProductImage}
                                priority
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Bento Grid Section */}
            <section className={styles.bentoSection}>
                <div className={styles.bentoGrid}>
                    <motion.div
                        className={`${styles.bentoCard} ${styles.cardLarge} ${styles.cardWithImage}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className={styles.cardImageContainer}>
                            <Image
                                src="/products/t-rok/t-rok-white.png"
                                alt="T-Rok H610 Overview"
                                fill
                                className={styles.cardImage}
                                sizes="(max-width: 768px) 100vw, 66vw"
                            />
                            <div className={styles.cardOverlay} />
                        </div>
                        <div className={styles.cardContent}>
                            <Sparkles size={48} className={styles.cardIcon} style={{ color: '#00d2ff' }} />
                            <h2 className={styles.cardTitle}>L'eccellenza in Bianco</h2>
                            <p className={styles.cardText}>
                                Progettata dai Laboratori R&D Winblu e ASUS, certificata ufficialmente dal marchio <strong>PBA</strong>.
                            </p>
                            <div className={styles.cardReveal}>
                                <p className={styles.cardText}>
                                    Un connubio che regala standard prestazionali di assoluta eccellenza e un’esperienza di gioco straordinaria, in un'originale estetica bianca ispirata alla leggenda del Bisonte Bianco.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className={`${styles.bentoCard} ${styles.cardSmall} ${styles.cardHighlight}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <div className={styles.cardContent}>
                            <Package size={36} className={styles.cardIcon} style={{ color: '#00d2ff' }} />
                            <h3 className={styles.cardTitle}>Pure Aesthetic</h3>
                            <div className={styles.cardReveal}>
                                <p className={styles.cardTextSmall}>
                                    Design compact mid-tower con vetro temperato laterale per mettere in mostra ogni dettaglio dell'hardware ASUS.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className={`${styles.bentoCard} ${styles.cardMedium}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className={styles.cardContent}>
                            <Cpu size={48} className={styles.cardIcon} style={{ color: '#00d2ff' }} />
                            <h3 className={styles.cardTitle}>Intelligence Hybrid</h3>
                            <p className={styles.cardText}>
                                Supporta l'ultima generazione Intel Core per un multitasking senza precedenti e frame rate stabili.
                            </p>
                            <div className={styles.cardReveal}>
                                <p className={styles.cardText}>
                                    Fino a 6.0GHz di frequenza per dominare ogni scenario competitivo, supportato da memorie DDR5 RGB ad alte prestazioni.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className={`${styles.bentoCard} ${styles.cardMedium} ${styles.cardHighlight}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <div className={styles.cardContent}>
                            <Monitor size={48} className={styles.cardIcon} style={{ color: '#00d2ff' }} />
                            <h3 className={styles.cardTitle}>RTX Graphics</h3>
                            <p className={styles.cardText}>
                                Architettura NVIDIA Ada Lovelace con DLSS 3 per mondi virtuali iper-realistici e fluidità estrema.
                            </p>
                            <div className={styles.cardReveal}>
                                <p className={styles.cardText}>
                                    Ottimizzazione termica avanzata che garantisce prestazioni silenziose anche durante i render più complessi o le sessioni di gioco prolungate.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className={`${styles.bentoCard} ${styles.cardSmall}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <div className={styles.cardContent}>
                            <Shield size={36} className={styles.cardIcon} style={{ color: '#00d2ff' }} />
                            <h3 className={styles.cardTitle}>Gaming Sicuro</h3>
                            <div className={styles.cardReveal}>
                                <p className={styles.cardTextSmall}>
                                    TPM 2.0 e Kaspersky Internet Security inclusi per proteggere le tue sessioni online da ogni minaccia.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className={`${styles.bentoCard} ${styles.cardMedium} ${styles.cardHighlight}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                    >
                        <div className={styles.cardContent}>
                            <TrendingUp size={48} className={styles.cardIcon} style={{ color: '#00d2ff' }} />
                            <h3 className={styles.cardTitle}>Productivity Pro</h3>
                            <p className={styles.cardText}>
                                Accelerazione IA per flussi di lavoro creativi, rendering 3D e modellazione fotorealistica.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Specs Cards Section */}
            <section className={styles.specsSection}>
                <div style={{ maxWidth: '1600px', margin: '0 auto' }}>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={styles.specsTitle}
                    >
                        Specifiche Tecniche
                    </motion.h2>
                    <SpecsCards specs={technicalSpecs.map(spec => ({
                        id: spec.id,
                        title: spec.title,
                        icon: spec.icon,
                        description: spec.items.map(i => `${i.label}: ${i.value}`).join(' • ')
                    }))} />
                </div>
            </section>

            <B2BCTASection />
            <Footer />
        </div>
    );
}
