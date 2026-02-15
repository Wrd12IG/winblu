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
                        <span className={styles.heroTag} style={{ color: '#0160A9', borderColor: 'rgba(1, 96, 169, 0.3)', background: 'rgba(1, 96, 169, 0.1)' }}>Performance No Limits</span>
                        <h1 className={styles.heroTitle}>
                            Winblu <span className={styles.gradient} style={{ background: 'linear-gradient(135deg, #0160A9 0%, #004e8a 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>T-ROK Z790</span>
                        </h1>
                        <p className={styles.heroDesc}>
                            Varca i confini dell’immaginazione. Con i nuovi Winblu T-ROK Z790, potrete vivere esperienze di gioco a livelli finora impensabili. Una vera e propria bomba di tecnologia per l’appassionato di gaming estremo che cerca solo ed esclusivamente il top.
                        </p>
                        <div className={styles.heroCTAs}>
                            <Link href="/punti-vendita?tipo=fornitura" className={styles.ctaPrimary} style={{ borderColor: 'rgba(1, 96, 169, 0.4)', background: 'linear-gradient(135deg, rgba(1, 96, 169, 0.2), rgba(1, 96, 169, 0.1))' }}>
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
                            <Sparkles size={48} className={styles.cardIcon} style={{ color: '#0160A9' }} />
                            <h2 className={styles.cardTitle}>Eleganza & Potenza</h2>
                            <p className={styles.cardText}>
                                Un case d’eccezione con pannelli in <strong>vetro temperato da 4mm</strong> sui tre lati. Le quattro ventole ARGB servono incredibili effetti luminosi sincronizzabili con <strong>Aura RGB lighting</strong>.
                            </p>
                            <div className={styles.cardReveal}>
                                <p className={styles.cardText}>
                                    Per garantire la massima stabilità, la serie T-ROK Z790 prevede il nuovo alimentatore <strong>ATX 3.0 PCIe 5.0 80Plus Gold</strong>. Un concentrato di stile e affidabilità per sessioni di gioco senza interruzioni.
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
                        style={{ background: 'linear-gradient(135deg, rgba(1, 96, 169, 0.08), rgba(1, 96, 169, 0.02))', borderColor: 'rgba(1, 96, 169, 0.2)' }}
                    >
                        <div className={styles.cardContent}>
                            <Activity size={36} className={styles.cardIcon} style={{ color: '#0160A9' }} />
                            <h3 className={styles.cardTitle}>Audio ROG Supreme FX</h3>
                            <div className={styles.cardReveal}>
                                <p className={styles.cardTextSmall}>
                                    La scheda madre Asus ROG Strix Z790-F Gaming WiFi eleva l'audio a nuovi livelli con l'esclusivo codec ALC4080 e i condensatori Nichicon™ Premium. Ogni battito e ogni effetto risulterà cristallino e avvolgente.
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
                            <Cpu size={48} className={styles.cardIcon} style={{ color: '#0160A9' }} />
                            <h3 className={styles.cardTitle}>Evoluzione Hardware</h3>
                            <p className={styles.cardText}>
                                Sfrutta la potenza dei processori Intel® Core™ di 14ᵃ generazione serie K. Una piattaforma progettata per il futuro del gaming e della creazione di contenuti.
                            </p>
                            <div className={styles.cardReveal}>
                                <p className={styles.cardText}>
                                    Ottimizzati per il multitasking estremo, questi processori garantiscono frame rate elevatissimi anche nei titoli più esigenti e velocità di rendering senza precedenti.
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
                        style={{ background: 'linear-gradient(135deg, rgba(1, 96, 169, 0.08), rgba(1, 96, 169, 0.02))', borderColor: 'rgba(1, 96, 169, 0.2)' }}
                    >
                        <div className={styles.cardContent}>
                            <Monitor size={48} className={styles.cardIcon} style={{ color: '#0160A9' }} />
                            <h3 className={styles.cardTitle}>Grafica Incredibile</h3>
                            <p className={styles.cardText}>
                                Basato su architettura NVIDIA Ada Lovelace, T-ROK Z790 monta le potentissime GeForce RTX® 4000. Ray Tracing e IA per un realismo mai visto prima.
                            </p>
                            <div className={styles.cardReveal}>
                                <p className={styles.cardText}>
                                    La tecnologia DLSS 3 moltiplica le prestazioni garantendo un'esperienza fluida anche a risoluzione 4K, portando il fotorealismo direttamente sulla tua scrivania.
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
                            <Wifi size={36} className={styles.cardIcon} style={{ color: '#0160A9' }} />
                            <h3 className={styles.cardTitle}>Connettività No-Limits</h3>
                            <div className={styles.cardReveal}>
                                <p className={styles.cardTextSmall}>
                                    Wi-Fi 6E Tri-Band e porta LAN da 2.5Gb per garantire la minima latenza possibile. Una rete stabile per dominare le classifiche online.
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
                        style={{ background: 'linear-gradient(135deg, rgba(1, 96, 169, 0.08), rgba(1, 96, 169, 0.02))', borderColor: 'rgba(1, 96, 169, 0.2)' }}
                    >
                        <div className={styles.cardContent}>
                            <Gauge size={48} className={styles.cardIcon} style={{ color: '#0160A9' }} />
                            <h3 className={styles.cardTitle}>Performance DDR5</h3>
                            <p className={styles.cardText}>
                                Memorie ad alta velocità fino a 7200 MT/s per abbattere ogni collo di bottiglia. La reattività che trasforma ogni comando in azione immediata.
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
                        style={{ background: 'linear-gradient(to bottom, #fff, #0160A9)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
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
