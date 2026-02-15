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
import { Zap, Monitor, HardDrive, Wifi, Shield, Award, Cpu, Boxes, Wind, Gauge, Sparkles, Activity } from 'lucide-react';

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
                        <span className={styles.heroTag}>Aquarium Design PC</span>
                        <h1 className={styles.heroTitle}>
                            T-ROK <span className={styles.gradient}>B760 SE</span>
                        </h1>
                        <p className={styles.heroDesc}>
                            L'evoluzione dell'estetica gaming. Un design a doppia camera con trasparenza totale per chi vuole mettere in mostra la potenza del proprio hardware.
                        </p>
                        <div className={styles.heroCTAs}>
                            <Link href="/punti-vendita?tipo=fornitura" className={styles.ctaPrimary}>
                                Configura Ora
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
                        className={`${styles.bentoCard} ${styles.cardLarge}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className={styles.cardContent}>
                            <Sparkles size={48} className={styles.cardIcon} />
                            <h2 className={styles.cardTitle}>Spettacolo Visivo</h2>
                            <p className={styles.cardText}>
                                Case Dual Chamber completamente riprogettato per favorire la dissipazione termica dei componenti più energivori, lasciando spazio alle espansioni più voluminose.
                            </p>
                            <div className={styles.cardReveal}>
                                <p className={styles.cardText}>
                                    Vetro temperato a trasparenza totale su due lati e n°5 ventole ARGB di serie. Un’estetica premium per godere al meglio degli effetti luminosi gestiti dal sistema ASUS Aura Sync.
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
                            <Cpu size={36} className={styles.cardIcon} />
                            <h3 className={styles.cardTitle}>Intel 14th Gen</h3>
                            <div className={styles.cardReveal}>
                                <p className={styles.cardTextSmall}>
                                    Architettura Raptor Lake Refresh: fino a 24 core per gestire streaming e gaming simultaneo senza incertezze.
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
                            <Monitor size={48} className={styles.cardIcon} />
                            <h3 className={styles.cardTitle}>Grafica RTX serie 40</h3>
                            <p className={styles.cardText}>
                                Basata su architettura NVIDIA Ada Lovelace. Ray Tracing e DLSS 3 per frame rate elevatissimi in risoluzione 4K.
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
                            <Gauge size={48} className={styles.cardIcon} />
                            <h3 className={styles.cardTitle}>DDR5 High Speed</h3>
                            <p className={styles.cardText}>
                                Velocità fino a 7200MT/s per un sistema reattivo e multitasking fluido nelle sessioni di lavoro più pesanti.
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
