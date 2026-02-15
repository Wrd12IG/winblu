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
                            T-ROK Z790:<br />
                            <span className={styles.gradient}>No Limits Performance</span>
                        </h1>
                        <p className={styles.heroDesc}>
                            Varca i confini dell’immaginazione. Potrai vivere esperienze di gioco a livelli impensabili. Una bomba di tecnologia per l’appassionato di gaming estremo che cerca solo ed esclusivamente il top.
                        </p>
                        <div className={styles.heroCTAs}>
                            <Link href="/punti-vendita?tipo=fornitura" className={styles.ctaPrimary}>
                                Configura il Top
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
                                src="https://www.winblu.it/wp-content/uploads/2024/07/winblu-0323-1872x2048.png"
                                alt="Winblu T-Rok Z790 Extreme"
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
                        className={`${styles.bentoCard} ${styles.cardLarge}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className={styles.cardContent}>
                            <Sparkles size={48} className={styles.cardIcon} />
                            <h2 className={styles.cardTitle}>Eleganza & Potenza</h2>
                            <p className={styles.cardText}>
                                Case d'eccezione con pannelli in vetro temperato da 4mm e quattro ventole Addressable-RGB con 20 diversi effetti luminosi.
                            </p>
                            <div className={styles.cardReveal}>
                                <p className={styles.cardText}>
                                    Sincronizzazione Aura RGB e nuovo alimentatore ATX 3.0 PCIe 5.0 80Plus Gold per massima stabilità e potenza senza compromessi.
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
                            <Zap size={36} className={styles.cardIcon} />
                            <h3 className={styles.cardTitle}>ATX 3.0</h3>
                            <div className={styles.cardReveal}>
                                <p className={styles.cardTextSmall}>
                                    Alimentazione PCIe 5.0 pronta per le GPU del futuro.
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
                            <Cpu size={48} className={styles.cardIcon} />
                            <h3 className={styles.cardTitle}>14ᴬ Gen Intel</h3>
                            <p className={styles.cardText}>
                                Raptor Lake Refresh: fino a 6.0GHz sul modello i9-14900K. Il massimo della potenza.
                            </p>
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
                            <Monitor size={48} className={styles.cardIcon} />
                            <h3 className={styles.cardTitle}>RTX Serie 4000</h3>
                            <p className={styles.cardText}>
                                Tensor core di 4ᵃ gen e Ray Tracing di 3ᵃ gen per mondi virtuali iper-dettagliati.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Detailed Features Section */}
            <section style={{ padding: '4rem 2rem', background: '#0a0a0a', color: '#fff' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{ display: 'grid', gap: '5rem' }}
                    >
                        <div style={{ textAlign: 'center' }}>
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: '#ff0055' }}>Massima Eleganza, Massima Potenza</h2>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#ccc', maxWidth: '900px', margin: '0 auto' }}>
                                Un case d’eccezione con pannelli in <strong>vetro temperato da 4mm</strong> sui tre lati. Le quattro ventole ARGB servono incredibili effetti luminosi sincronizzabili con <strong>Aura RGB lighting</strong>. Per garantire la massima stabilità, la serie T-ROK Z790 prevede il nuovo alimentatore <strong>ATX 3.0 PCIe 5.0 80Plus Gold</strong>.
                            </p>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem' }}>
                            <div>
                                <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#fff' }}>Frontiera Elaborativa</h3>
                                <p style={{ lineHeight: '1.7', color: '#aaa' }}>
                                    Supporto alla <strong>Quattordicesima generazione</strong> Intel® Core™ (Raptor Lake Refresh) con core aumentati fino a 24 e thread fino a 32. Con i suoi <strong>6.0GHz</strong>, l'i9-14900K è definito come il più veloce al mondo, supportato da memorie <strong>DDR5 fino a 7200MT/s</strong>.
                                </p>
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#fff' }}>Audio ROG Supreme FX</h3>
                                <p style={{ lineHeight: '1.7', color: '#aaa' }}>
                                    L'esclusivo codec <strong>ALC4080</strong> aumenta la risoluzione fino a <strong>32bit/384 kHz</strong>. I condensatori Nichicon™ e l'amplificatore <strong>Savitech</strong> forniscono un'acustica ad alta fedeltà verso cuffie professionali.
                                </p>
                            </div>
                        </div>

                        <div style={{ borderTop: '1px solid #333', paddingTop: '3rem', textAlign: 'center' }}>
                            <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#fff' }}>Connettività No-Limits</h3>
                            <p style={{ lineHeight: '1.7', color: '#aaa', maxWidth: '800px', margin: '0 auto' }}>
                                Protocollo <strong>WI-FI 6E tri-band</strong> con antenna regolabile e porta <strong>LAN 2.5Gb</strong> per una connessione fulminea e priva di lag nelle sessioni online più competitive.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Specs Cards Section */}
            <section style={{ padding: '6rem 2rem', background: 'rgba(0,0,0,0.2)' }}>
                <div style={{ maxWidth: '1600px', margin: '0 auto' }}>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{
                            fontSize: '3rem',
                            fontWeight: '800',
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
            <Footer />
        </div>
    );
}
