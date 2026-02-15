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
import { Zap, Monitor, HardDrive, Wifi, Shield, Award, Cpu, Boxes, Wind, Gauge, Sparkles, Activity, TrendingUp, Package } from 'lucide-react';

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const GridBackground = () => (
    <div className={styles.gridBg} />
);

export default function TRokB760SEPage() {
    const technicalSpecs: SpecCategory[] = [
        {
            id: 'cpu',
            title: 'Processore',
            icon: <Cpu size={24} />,
            items: [
                { label: 'Generazione', value: 'Intel® Core™ Quattordicesima Generazione' },
                { label: 'Architettura', value: 'Raptor Lake Refresh' },
                { label: 'Core Max', value: 'Fino a 24 Core / 32 Thread' },
                { label: 'Frequenza Max', value: 'Fino a 6.0 GHz' },
            ]
        },
        {
            id: 'design',
            title: 'Design Case',
            icon: <Boxes size={24} />,
            items: [
                { label: 'Tipo', value: 'Aquarium Dual Chamber' },
                { label: 'Materiale', value: 'Vetro Temperato Trasparenza Totale' },
                { label: 'Ventole', value: 'n°5 FAN ARGB di serie' },
                { label: 'Illuminazione', value: 'Sistema ASUS Aura Sync' },
            ]
        },
        {
            id: 'memory',
            title: 'Memoria RAM',
            icon: <Gauge size={24} />,
            items: [
                { label: 'Tipo', value: 'DDR4 / DDR5 SO-DIMM' },
                { label: 'Frequenza', value: 'Fino a 7200 MT/s' },
                { label: 'Effetti', value: 'RGB Sync' },
                { label: 'Dual Channel', value: 'Supportato' },
            ]
        },
        {
            id: 'graphics',
            title: 'Grafica',
            icon: <Monitor size={24} />,
            items: [
                { label: 'Serie', value: 'NVIDIA® GeForce® RTX serie 4000' },
                { label: 'Architettura', value: 'Ada Lovelace' },
                { label: 'Core CUDA', value: 'Fino a 16384' },
                { label: 'Tecnologie', value: 'Ray Tracing Gen 3, Tensor Core Gen 4' },
            ]
        },
        {
            id: 'cooling',
            title: 'Raffreddamento',
            icon: <Wind size={24} />,
            items: [
                { label: 'Tipo', value: 'Dissipazione a Liquido' },
                { label: 'Radiatore', value: 'AIO 240mm (opzionale)' },
                { label: 'Airflow', value: 'Ottimizzato a doppia camera' },
            ]
        },
        {
            id: 'connectivity',
            title: 'Connettività',
            icon: <Wifi size={24} />,
            items: [
                { label: 'WiFi', value: 'Intel® Wi-Fi 6' },
                { label: 'Ethernet', value: 'Realtek® LAN 2.5Gb' },
                { label: 'Audio', value: 'Realtek 7.1 Surround (SNR 98dB)' },
                { label: 'DTS', value: 'DTS® Audio Processing' },
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
                        <span className={styles.heroTag} style={{ color: '#00d2ff', borderColor: 'rgba(0, 210, 255, 0.3)', background: 'rgba(0, 210, 255, 0.1)' }}>Aquarium Design PC</span>
                        <h1 className={styles.heroTitle}>
                            T-Rok B760 SE:<br />
                            <span className={styles.gradient} style={{ background: 'linear-gradient(135deg, #00d2ff 0%, #0056b3 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Gioco Immersivo</span>
                        </h1>
                        <p className={styles.heroDesc}>
                            Rilevanti prestazioni e pregio estetico. Il nuovo T-Rok B760 SE apre le porte al futuro del gaming, pronto a ridefinire le regole del gioco grazie a un equipaggiamento d’avanguardia.
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
                                src="https://www.winblu.it/wp-content/uploads/2024/07/winblu-0143-1872x2048.png"
                                alt="Winblu T-Rok B760 SE"
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
                                src="https://www.winblu.it/wp-content/uploads/2024/07/winblu-0143-1872x2048.png"
                                alt="T-Rok B760 SE Overview"
                                fill
                                className={styles.cardImage}
                                sizes="(max-width: 768px) 100vw, 66vw"
                            />
                            <div className={styles.cardOverlay} />
                        </div>
                        <div className={styles.cardContent}>
                            <Sparkles size={48} className={styles.cardIcon} style={{ color: '#00d2ff' }} />
                            <h2 className={styles.cardTitle}>Premio Oscar per gli effetti speciali</h2>
                            <p className={styles.cardText}>
                                Design a “doppia camera” riprogettato per favorire la dissipazione, con doppio vetro temperato a trasparenza totale.
                            </p>
                            <div className={styles.cardReveal}>
                                <p className={styles.cardText}>
                                    Un’evoluzione estetica per godere degli effetti luminosi gestiti dal sistema AURA, con n°5 FAN di serie e un angolo di visuale da “prima fila”.
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
                            <Gauge size={36} className={styles.cardIcon} style={{ color: '#00d2ff' }} />
                            <h3 className={styles.cardTitle}>7200 MT/s</h3>
                            <div className={styles.cardReveal}>
                                <p className={styles.cardTextSmall}>
                                    Memorie DDR5 ad altissima frequenza per un multitasking record e caricamenti istantanei.
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
                            <h3 className={styles.cardTitle}>14ᴬ Gen Intel</h3>
                            <p className={styles.cardText}>
                                Fino a 24 core e 32 thread. Il più veloce processore da gaming al mondo con architettura Raptor Lake Refresh.
                            </p>
                            <div className={styles.cardReveal}>
                                <p className={styles.cardText}>
                                    Ottimizzazione intelligente del carico di lavoro tra P-core ed E-core per massime prestazioni costanti.
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
                            <h3 className={styles.cardTitle}>Ada Lovelace</h3>
                            <p className={styles.cardText}>
                                NVIDIA GeForce RTX serie 4000: un enorme passo avanti in termini di prestazioni, efficienza e grafica IA.
                            </p>
                            <div className={styles.cardReveal}>
                                <p className={styles.cardText}>
                                    Rendering real-time in qualità cinematografica per un'immersione visiva senza precedenti.
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
                            <Wifi size={36} className={styles.cardIcon} style={{ color: '#00d2ff' }} />
                            <h3 className={styles.cardTitle}>Connettività 2.5Gb</h3>
                            <div className={styles.cardReveal}>
                                <p className={styles.cardTextSmall}>
                                    Porta LAN ultra-rapida e Wi-Fi 6 per sessioni multiplayer senza lag e download immediati.
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
                            <Activity size={48} className={styles.cardIcon} style={{ color: '#00d2ff' }} />
                            <h3 className={styles.cardTitle}>Audio Surround 7.1</h3>
                            <p className={styles.cardText}>
                                Chip Realtek ad alta fedeltà con elaborazione DTS® per bassi profondi e suono cristallino.
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
                        style={{ background: 'linear-gradient(to bottom, #fff, #00d2ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
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
