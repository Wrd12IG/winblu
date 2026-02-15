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
                            <span className={styles.gradient} style={{ background: 'linear-gradient(135deg, #ff0055 0%, #7e0021 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>No Limits Performance</span>
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
                        className={`${styles.bentoCard} ${styles.cardLarge} ${styles.cardWithImage}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className={styles.cardImageContainer}>
                            <Image
                                src="https://www.winblu.it/wp-content/uploads/2024/07/winblu-0323-1872x2048.png"
                                alt="T-Rok Z790 Overview"
                                fill
                                className={styles.cardImage}
                                sizes="(max-width: 768px) 100vw, 66vw"
                            />
                            <div className={styles.cardOverlay} />
                        </div>
                        <div className={styles.cardContent}>
                            <Sparkles size={48} className={styles.cardIcon} style={{ color: '#ff0055' }} />
                            <h2 className={styles.cardTitle}>Massima Eleganza, Massima Potenza</h2>
                            <p className={styles.cardText}>
                                Case d’eccezione con pannelli in vetro temperato da 4mm sui tre lati e quattro ventole ARGB con Aura RGB lighting.
                            </p>
                            <div className={styles.cardReveal}>
                                <p className={styles.cardText}>
                                    Sincronizzazione luminosa totale e nuovo alimentatore ATX 3.0 PCIe 5.0 80Plus Gold per massima stabilità nelle sessioni estreme.
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
                            <Zap size={36} className={styles.cardIcon} style={{ color: '#ff0055' }} />
                            <h3 className={styles.cardTitle}>ATX 3.0 Ready</h3>
                            <div className={styles.cardReveal}>
                                <p className={styles.cardTextSmall}>
                                    Alimentazione nativa PCIe 5.0 per gestire le richieste energetiche delle GPU più potenti al mondo.
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
                            <Cpu size={48} className={styles.cardIcon} style={{ color: '#ff0055' }} />
                            <h3 className={styles.cardTitle}>14ᴬ Gen Unlocked</h3>
                            <p className={styles.cardText}>
                                Raptor Lake Refresh: fino a 6.0GHz sul modello i9-14900K. Il vertice assoluto della potenza computazionale.
                            </p>
                            <div className={styles.cardReveal}>
                                <p className={styles.cardText}>
                                    Cache L3 massimizzata e gestione dei thread ottimizzata per un gaming fluido a risoluzione 4K e rendering in tempo reale.
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
                            <Monitor size={48} className={styles.cardIcon} style={{ color: '#ff0055' }} />
                            <h3 className={styles.cardTitle}>RTX series Extreme</h3>
                            <p className={styles.cardText}>
                                Ray Tracing di 3ᵃ gen per mondi virtuali iper-dettagliati. Grafica AI Ada Lovelace senza compromessi.
                            </p>
                            <div className={styles.cardReveal}>
                                <p className={styles.cardText}>
                                    Massima libertà nella creazione di contenuti e produttività ingegneristica senza precedenti grazie a DLSS 3.
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
                            <Activity size={36} className={styles.cardIcon} style={{ color: '#ff0055' }} />
                            <h3 className={styles.cardTitle}>Supreme FX Audio</h3>
                            <div className={styles.cardReveal}>
                                <p className={styles.cardTextSmall}>
                                    Audio professionale a 32bit / 384 kHz con codec ALC4080 per un'immersione sonora totale.
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
                            <Wifi size={48} className={styles.cardIcon} style={{ color: '#ff0055' }} />
                            <h3 className={styles.cardTitle}>Wi-Fi 6E Tri-Band</h3>
                            <p className={styles.cardText}>
                                Connessione fulminea e priva di lag grazie allo spettro dei 6GHz e porta LAN da 2.5Gb integrata.
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
                        style={{ background: 'linear-gradient(to bottom, #fff, #ff0055)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
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
