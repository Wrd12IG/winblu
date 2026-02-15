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
import { Shield, Zap, Cpu, Monitor, Wifi, Award, Box, Layers, Gauge, Sparkles, Activity, Settings, TrendingUp } from 'lucide-react';

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const GridBackground = () => (
    <div className={styles.gridBg} />
);

export default function TRokZ790Page() {
    const technicalSpecs: SpecCategory[] = [
        {
            id: 'cpu',
            title: 'Processore',
            icon: <Cpu size={24} />,
            items: [
                { label: 'Modello', value: 'Intel® Core™ i9-14900K (14a Gen)' },
                { label: 'Core / Thread', value: '24 Core / 32 Thread' },
                { label: 'Frequenza', value: 'Fino a 6.0 GHz Turbo' },
                { label: 'Cache', value: '36MB L3 Smart Cache' },
            ]
        },
        {
            id: 'motherboard',
            title: 'Chipset Z790',
            icon: <Settings size={24} />,
            items: [
                { label: 'Chipset', value: 'Intel® Z790 Extreme' },
                { label: 'Supporto RAM', value: 'DDR5 fino a 192GB' },
                { label: 'PCIe', value: 'Supporto PCIe 5.0' },
            ]
        },
        {
            id: 'graphics',
            title: 'Grafica Estrema',
            icon: <Monitor size={24} />,
            items: [
                { label: 'Serie', value: 'NVIDIA® GeForce® RTX serie 4000' },
                { label: 'Architettura', value: 'Ada Lovelace' },
                { label: 'VRAM', value: 'Fino a 24GB GDDR6X' },
                { label: 'Ray Tracing', value: 'Cores di 3a Generazione' },
            ]
        },
        {
            id: 'memory',
            title: 'DDR5 Performance',
            icon: <Gauge size={24} />,
            items: [
                { label: 'Frequenza', value: 'Fino a 7200 MT/s' },
                { label: 'Capacità', value: 'DDR5 High-Density' },
                { label: 'Estetica', value: 'Dissipatore RGB Sync' },
            ]
        },
        {
            id: 'psu',
            title: 'Alimentazione',
            icon: <Zap size={24} />,
            items: [
                { label: 'Standard', value: 'ATX 3.0 PCIe 5.0 Ready' },
                { label: 'Efficienza', value: '80Plus Gold / Platinum' },
                { label: 'Potenza', value: 'Fino a 1200W' },
            ]
        },
        {
            id: 'audio',
            title: 'Audio Immersivo',
            icon: <Activity size={24} />,
            items: [
                { label: 'Codec', value: 'ROG Supreme FX 7.1 (ALC4080)' },
                { label: 'Risoluzione', value: '32bit / 384 kHz' },
                { label: 'Componenti', value: 'Nichicon™ Premium Capacitors' },
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
                        <span className={styles.heroTag}>Winblu T-ROK Z790</span>
                        <h1 className={styles.heroTitle}>
                            Performance<br />
                            <span className={styles.gradient}>No Limits</span>
                        </h1>
                        <p className={styles.heroDesc}>
                            Scatena la tua furia di gioco. Il tuo PC gaming non è mai stato così potente.
                        </p>
                        <div className={styles.heroCTAs}>
                            <Link href="/punti-vendita?tipo=fornitura" className={styles.ctaPrimary}>
                                Configura il Top
                            </Link>
                            <Link href="/punti-vendita" className={styles.ctaSecondary}>
                                Trova Rivenditore
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
                                alt="Winblu T-Rok Z790 Extreme"
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
                            <TrendingUp size={48} className={styles.cardIcon} style={{ color: '#0160A9', marginBottom: '1.5rem' }} />
                            <h2 className={styles.cardTitle}>Il vertice della potenza gaming</h2>
                            <p className={styles.cardText}>
                                Case d'eccezione per la massima eleganza, con pannelli in vetro temperato da 4mm sul frontale e sui lati.
                            </p>
                            <div className={styles.cardReveal}>
                                <p className={styles.cardText}>
                                    Una sinfonia di luci ARGB in armonia con i componenti, gestibile via software. La serie T-ROK Z790 prevede alimentatori ATX 3.0 PCIe 5.0 80Plus Gold, garantendo stabilità assoluta.
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
                            <Sparkles size={36} className={styles.cardIcon} style={{ color: '#0160A9', marginBottom: '1rem' }} />
                            <h3 className={styles.cardTitle}>Full ARGB</h3>
                            <div className={styles.cardReveal}>
                                <p className={styles.cardTextSmall}>
                                    4 ventole ARGB con 20 diversi effetti luminosi sincronizzabili con l'ecosistema Aura RGB.
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
                            <Activity size={48} className={styles.cardIcon} style={{ color: '#0160A9' }} />
                            <h3 className={styles.cardTitle}>Audio ROG Supreme FX</h3>
                            <p className={styles.cardText}>
                                Fedeltà sonora assoluta con amplificatori Savitech e codec ALC4080. Audio a 32bit/384 kHz per un'immersione totale.
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
                            <Wifi size={48} className={styles.cardIcon} />
                            <h3 className={styles.cardTitle}>Wi-Fi 6E & LAN 2.5G</h3>
                            <p className={styles.cardText}>
                                Connettività fulminea senza latenza. Protocollo tri-band con antenna regolabile per il gaming competitivo online.
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
