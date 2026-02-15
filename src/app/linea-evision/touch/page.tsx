"use client";

import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/product-bento.module.css';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SpecsCards from "@/components/SpecsCards";
import { SpecCategory } from "@/components/SpecsAccordion";
import B2BCTASection from "@/components/B2BCTASection";
import { motion } from 'framer-motion';
import { MousePointer2, Layout, Sliders, Cpu, Move, PenTool } from 'lucide-react';

const GridBackground = () => (
    <div className={styles.gridBg} />
);

export default function EVisionTouchPage() {
    const technicalSpecs: SpecCategory[] = [
        {
            id: 'touch',
            title: 'Display Interattivo',
            icon: <MousePointer2 size={24} />,
            items: [
                { label: 'Tipologia', value: 'Capacitive Multi-Touch' },
                { label: 'Punti', value: '10 Punti di Tocco Simultanei' },
                { label: 'Superficie', value: 'Vetro Edge-to-Edge 7H' },
            ]
        },
        {
            id: 'ergonomics',
            title: 'Ergonomia',
            icon: <Move size={24} />,
            items: [
                { label: 'Stand', value: 'Dual-Hinge Stand' },
                { label: 'Inclinazione', value: 'Da -5° a +60°' },
                { label: 'Utilizzo', value: 'Desktop & Drafting Mode' },
            ]
        },
        {
            id: 'performance',
            title: 'Potenza Creativa',
            icon: <Cpu size={24} />,
            items: [
                { label: 'CPU', value: 'Intel® Core™ i5 / i7' },
                { label: 'Grafica', value: 'Intel® Iris® Xe Graphics' },
                { label: 'RAM', value: 'DDR4/DDR5 fino a 64GB' },
            ]
        },
        {
            id: 'connectivity',
            title: 'IO & Porte',
            icon: <Layout size={24} />,
            items: [
                { label: 'USB Laterali', value: '2x USB 3.0 (Accesso Rapido)' },
                { label: 'Video Out', value: 'HDMI + Daisy Chain Support' },
                { label: 'Lettore', value: 'SD Card Reader Integrato' },
            ]
        }
    ];

    return (
        <div className={styles.container}>
            <GridBackground />

            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <motion.div
                        className={styles.heroText}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className={styles.heroTag}>eVision Touch</span>
                        <h1 className={styles.heroTitle}>
                            Il Tuo Tocco<br />
                            <span className={styles.gradient}>Creativo</span>
                        </h1>
                        <p className={styles.heroDesc}>
                            Interagisci direttamente con i tuoi contenuti. Un display reattivo e uno stand ergonomico per liberare la tua creatività.
                        </p>
                        <div className={styles.heroCTAs}>
                            <Link href="/punti-vendita" className={styles.ctaPrimary}>
                                Configura
                            </Link>
                            <Link href="/linea-evision" className={styles.ctaSecondary}>
                                Torna alla Serie
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        className={styles.heroVisual}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className={styles.heroImageContainer}>
                            <Image
                                src="/assets/evision/touch-hero.png"
                                alt="Winblu eVision Touch"
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
                    <div className={`${styles.bentoCard} ${styles.cardLarge}`}>
                        <div className={styles.cardContent}>
                            <PenTool size={48} className={styles.cardIcon} />
                            <h2 className={styles.cardTitle}>Progettato per l'Interazione</h2>
                            <p className={styles.cardText}>
                                Che tu stia disegnando, navigando o presentando, eVision Touch risponde a ogni tuo gesto con fluidità e precisione.
                            </p>
                            <div className={styles.cardReveal}>
                                <p className={styles.cardText}>
                                    La tecnologia touch capacitiva a 10 punti permette l'uso simultaneo di più dita, ideale per zoomare, ruotare e scorrere con naturalezza.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.bentoCard} ${styles.cardMedium} ${styles.cardHighlight}`}>
                        <div className={styles.cardContent}>
                            <Sliders size={48} className={styles.cardIcon} style={{ color: '#0160A9' }} />
                            <h3 className={styles.cardTitle}>Ergonomia Totale</h3>
                            <p className={styles.cardText}>
                                Inclina lo schermo fino a 60 gradi per trovare l'angolazione perfetta per scrivere o disegnare.
                            </p>
                        </div>
                    </div>

                    <div className={`${styles.bentoCard} ${styles.cardMedium}`}>
                        <div className={styles.cardContent}>
                            <Layout size={48} className={styles.cardIcon} />
                            <h3 className={styles.cardTitle}>Chiosco Mode</h3>
                            <p className={styles.cardText}>
                                Soluzione perfetta anche per punti vendita e info-point interattivi, grazie alla robustezza del pannello frontale in vetro.
                            </p>
                        </div>
                    </div>
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
