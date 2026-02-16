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
                { label: 'Modelli', value: 'i5, i7, i9' },
                { label: 'Frequenza', value: 'Fino a 6.0 GHz' },
            ]
        },
        {
            id: 'chipset',
            title: 'Chipset',
            icon: <Settings size={24} />,
            items: [
                { label: 'Modello', value: 'Intel® H610' },
            ]
        },
        {
            id: 'case',
            title: 'Case e Alimentatore',
            icon: <Box size={24} />,
            items: [
                { label: 'Case', value: 'Micro-Atx compatto ASUS bianco' },
                { label: 'Design', value: 'Pannello laterale in vetro, rete antipolvere' },
                { label: 'Alimentatore', value: 'ASUS 750W 80Plus Gold bianco' },
                { label: 'Dimensioni', value: '460x205x350mm' },
            ]
        },
        {
            id: 'cooling',
            title: 'Raffreddamento',
            icon: <Activity size={24} />,
            items: [
                { label: 'Opzione 1', value: 'Dissipatore heat pipe ARGB' },
                { label: 'Opzione 2', value: 'Liquido ASUS ROG STRIX LC II 240 ARGB White' },
                { label: 'Ventole', value: '1x posteriore 120mm ARGB' },
            ]
        },
        {
            id: 'memory',
            title: 'Memoria RAM',
            icon: <Gauge size={24} />,
            items: [
                { label: 'Tipo', value: 'DDR5 5600Mhz RGB' },
                { label: 'Capacità', value: 'Massimo 64GB' },
            ]
        },
        {
            id: 'storage',
            title: 'Archiviazione',
            icon: <Layers size={24} />,
            items: [
                { label: 'Slot M.2', value: '1x PCIe NVMe' },
                { label: 'SATA', value: '1x HD/SSD SATA3 3.5”/2.5”' },
            ]
        },
        {
            id: 'graphics',
            title: 'Sezione Video',
            icon: <Monitor size={24} />,
            items: [
                { label: 'Schede', value: 'ASUS Nvidia® Geforce ® GTX e RTX serie 4000 e 3000' },
                { label: 'Slot', value: 'PCIe 4.0 x16' },
            ]
        },
        {
            id: 'audio',
            title: 'Audio',
            icon: <Sparkles size={24} />,
            items: [
                { label: 'Codec', value: 'Realtek® 7.1 HD Audio CODEC' },
                { label: 'Porte', value: '3x jacks audio' },
            ]
        },
        {
            id: 'connectivity',
            title: 'Connettività',
            icon: <Wifi size={24} />,
            items: [
                { label: 'LAN', value: 'Gigabit Realtek®' },
                { label: 'USB Frontali', value: '2x USB3.2 Gen1' },
                { label: 'USB Posteriori', value: '2x USB3.2 Gen1, 4x USB2.0' },
            ]
        },
        {
            id: 'software',
            title: 'Software & OS',
            icon: <Shield size={24} />,
            items: [
                { label: 'OS', value: 'Windows 11 Professional o Home' },
                { label: 'Sicurezza', value: 'Firmware TPM 2.0' },
            ]
        },
        {
            id: 'energy',
            title: 'Efficienza Energetica',
            icon: <Zap size={24} />,
            items: [
                { label: 'ETEC', value: '296.69 kWh/year' },
                { label: 'Efficienza', value: 'Alimentatore 80Plus Gold' },
            ]
        },
        {
            id: 'warranty',
            title: 'Garanzia',
            icon: <Award size={24} />,
            items: [
                { label: 'Durata', value: '24 mesi On Site (domicilio)' },
            ]
        }
    ];

    return (
        <div
            className={styles.container}
            style={{
                '--accent-primary': '#ffffff',
                '--accent-rgb': '255, 255, 255',
                '--accent-gradient': 'linear-gradient(135deg, #fff 0%, #64748b 100%)'
            } as any}
        >
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
                            T-Rok Gaming H610:<br />
                            <span className={styles.gradient}>Quando le leggende si fanno realtà</span>
                        </h1>
                        <p className={styles.heroDesc}>
                            Ricordate White Buffalo, il mitologico Bisonte Bianco delle Leggende Indiane? Una creatura fantastica, che ora prende la forma di una poderosa game machine firmata Winblu: stiamo parlando di T-ROK H610 White Color, la nuovissima soluzione Powered By ASUS progettata per gli appassionati di Gaming estremo o comunque di alta qualità.
                        </p>
                        <div className={styles.heroCTAs}>
                            <Link href="/punti-vendita?tipo=fornitura" className={styles.ctaPrimary}>
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
                            <Award size={48} className={styles.cardIcon} />
                            <h2 className={styles.cardTitle}>Powered By ASUS</h2>
                            <p className={styles.cardText}>
                                Progettata congiuntamente dai Laboratori R&D Winblu e ASUS, T-ROK GAMING H610 è la nostra nuova proposta basata su hardware ASUS e quindi certificata ufficialmente dal marchio PBA.
                            </p>
                            <div className={styles.cardReveal}>
                                <p className={styles.cardText}>
                                    Una soluzione innovativa anche nell’originale colore bianco che contraddistingue l’estetica di questo prodotto: davvero un’irresistibile simbiosi fra alte prestazioni ed esclusività del design.
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
                            <Cpu size={36} className={styles.cardIcon} style={{ color: '#00d2ff' }} />
                            <h3 className={styles.cardTitle}>Intel® Core™ 14a Gen</h3>
                            <div className={styles.cardReveal}>
                                <p className={styles.cardTextSmall}>
                                    Supporta la 14a generazione "Raptor Lake Refresh" con frequenza fino a 6.0GHz (i9-14900K). Il massimo della potenza garantito.
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
                            <Monitor size={48} className={styles.cardIcon} style={{ color: '#00d2ff' }} />
                            <h3 className={styles.cardTitle}>NVIDIA® RTX™ 4000</h3>
                            <p className={styles.cardText}>
                                L’equipaggiamento raggiunge l’apice con le GPU Nvidia® GeForce® serie 4000.
                            </p>
                            <div className={styles.cardReveal}>
                                <p className={styles.cardText}>
                                    Basate su architettura Ada Lovelace, offrono prestazioni ed efficienza record con DLSS 3 e Ray Tracing di terza generazione.
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
                            <Gauge size={48} className={styles.cardIcon} style={{ color: '#00d2ff' }} />
                            <h3 className={styles.cardTitle}>DDR5 Velocità Estrema</h3>
                            <p className={styles.cardText}>
                                Il massimo della potenza è garantito anche dalle memorie DDR5 con dissipatore ed effetti luce RGB.
                            </p>
                            <div className={styles.cardReveal}>
                                <p className={styles.cardText}>
                                    Una nuova frontiera della capacità elaborativa per un sistema sempre reattivo e performante.
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
                            <h3 className={styles.cardTitle}>Windows 11 & Sicurezza</h3>
                            <div className={styles.cardReveal}>
                                <p className={styles.cardTextSmall}>
                                    Include Windows 11 e software Kaspersky Internet Security per la massima protezione.
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
                            <Sparkles size={48} className={styles.cardIcon} style={{ color: '#00d2ff' }} />
                            <h3 className={styles.cardTitle}>XBOX Game Pass</h3>
                            <p className={styles.cardText}>
                                Per chi acquista T-Rok, un mese di accesso libero all’intero catalogo giochi XBOX!
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
