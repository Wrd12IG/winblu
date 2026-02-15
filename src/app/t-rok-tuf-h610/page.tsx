"use client";

import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/product-bento.module.css';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SpecsCards from "@/components/SpecsCards";
import { SpecCategory } from "@/components/SpecsAccordion";
import B2BCTASection from "@/components/B2BCTASection";
import { motion } from 'framer-motion';
import { Shield, Zap, Cpu, Monitor, Wifi, Award, Box, Layers, Gauge, Sparkles, Activity, Settings } from 'lucide-react';

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
                        <span className={styles.heroTag}>Powered By ASUS</span>
                        <h1 className={styles.heroTitle}>
                            Il Bisonte<br />
                            <span className={styles.gradient}>Bianco</span>
                        </h1>
                        <p className={styles.heroDesc}>
                            Un Gaming dalle piccole dimensioni, di un elegante color bianco, per il gamer che vuole il massimo!
                        </p>
                        <div className={styles.heroCTAs}>
                            <Link href="/punti-vendita?tipo=fornitura" className={styles.ctaPrimary}>
                                Richiedi Preventivo
                            </Link>
                            <Link href="/punti-vendita" className={styles.ctaSecondary}>
                                Trova un Punto Vendita
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
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Bento Grid Section */}
            <section className={styles.bentoSection}>
                <div className={styles.bentoGrid}>
                    <motion.div
                        className={`${styles.bentoCard} ${styles.cardLarge}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className={styles.cardContent}>
                            <Settings size={48} className={styles.cardIcon} />
                            <h2 className={styles.cardTitle}>Progettazione Congiunta Winblu & ASUS</h2>
                            <p className={styles.cardText}>
                                T-ROK GAMING H610 è la nostra nuova proposta basata su hardware ASUS e certificata ufficialmente dal marchio <strong>PBA – Powered By ASUS</strong>. Una simbiosi irresistibile fra alte prestazioni ed esclusività del design.
                            </p>
                            <div className={styles.cardReveal}>
                                <p className={styles.cardText}>
                                    La componentistica ASUS, brand Numero Uno al mondo nel settore Gaming, regala standard prestazionali di assoluta eccellenza in un prodotto spettacolare anche alla vista grazie al moderno color bianco del case.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className={`${styles.bentoCard} ${styles.cardSmall} ${styles.cardHighlight}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <div className={styles.cardContent}>
                            <Box size={36} className={styles.cardIcon} />
                            <h3 className={styles.cardTitle}>Compatto & Potente</h3>
                            <div className={styles.cardReveal}>
                                <p className={styles.cardTextSmall}>
                                    Un Gaming dalle piccole dimensioni per il gamer che vuole il massimo delle prestazioni in uno spazio ridotto.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className={`${styles.bentoCard} ${styles.cardMedium}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className={styles.cardContent}>
                            <Zap size={48} className={styles.cardIcon} style={{ color: '#0160A9' }} />
                            <h3 className={styles.cardTitle}>DDR5 Next Generation</h3>
                            <p className={styles.cardText}>
                                Supporto completo alla nuova frontiera della capacità elaborativa con memorie DDR5 e processori Intel Core di 14a Generazione.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        className={`${styles.bentoCard} ${styles.cardMedium} ${styles.cardHighlight}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <div className={styles.cardContent}>
                            <Monitor size={48} className={styles.cardIcon} />
                            <h3 className={styles.cardTitle}>RTX 4000 & DLSS 3</h3>
                            <p className={styles.cardText}>
                                Grafica NVIDIA di ultima generazione realizzata tramite IA. Prestazioni record ed efficienza energetica basata su architettura Ada Lovelace.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Specs Cards Section */}
            <section style={{ padding: '4rem 2rem', background: 'rgba(0,0,0,0.2)' }}>
                <div style={{ maxWidth: '1600px', margin: '0 auto' }}>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{
                            fontSize: '2.5rem',
                            fontWeight: '700',
                            textAlign: 'center',
                            marginBottom: '4rem',
                            background: 'linear-gradient(135deg, #fff 0%, #0160A9 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                        }}
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
        </div>
    );
}
