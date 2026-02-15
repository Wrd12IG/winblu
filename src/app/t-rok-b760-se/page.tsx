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
                            T-Rok B760 SE:<br />
                            <span className={styles.gradient}>Gioco Immersivo</span>
                        </h1>
                        <p className={styles.heroDesc}>
                            Rilevanti prestazioni e pregio estetico. Il nuovo T-Rok B760 SE apre le porte al futuro del gaming, pronto a ridefinire le regole del gioco grazie a un equipaggiamento d’avanguardia.
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
                            <h2 className={styles.cardTitle}>Effetti Speciali</h2>
                            <p className={styles.cardText}>
                                Design a “doppia camera” riprogettato per favorire la dissipazione, con doppio vetro temperato a trasparenza totale.
                            </p>
                            <div className={styles.cardReveal}>
                                <p className={styles.cardText}>
                                    Un’evoluzione estetica per godere degli effetti luminosi gestiti dal sistema AURA, con un angolo di visuale da “prima fila”.
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
                            <Gauge size={36} className={styles.cardIcon} />
                            <h3 className={styles.cardTitle}>7200 MT/s</h3>
                            <div className={styles.cardReveal}>
                                <p className={styles.cardTextSmall}>
                                    Memorie DDR5 ad altissima frequenza per un multitasking record.
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
                                Fino a 24 core e 32 thread. Il più veloce processore da gaming al mondo.
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
                                Architettura Ada Lovelace per un'esperienza visiva davvero inimmaginabile.
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
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: '#00d2ff' }}>Premio Oscar per gli effetti speciali</h2>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#ccc', maxWidth: '900px', margin: '0 auto' }}>
                                I laboratori R&D Winblu hanno progettato un design a <strong>“doppia camera”</strong> completamente rinnovato, con una disposizione modificata dei componenti interni per favorire la dissipazione; uno spazio più ampio per le espansioni più voluminose e un <strong>doppio vetro temperato a trasparenza totale</strong> con n°5 FAN di serie. Un’evoluzione estetica per godere degli effetti luminosi gestiti dal sistema <strong>AURA</strong>.
                            </p>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                            <div>
                                <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#fff' }}>Potenza senza compatibilità</h3>
                                <p style={{ lineHeight: '1.7', color: '#aaa' }}>
                                    Supporta la <strong>Quattordicesima generazione</strong> di processori Intel® Core™ (Raptor Lake Refresh) con core aumentati fino a 24 e thread fino a 32. Il massimo della potenza è garantito anche dalle memorie <strong>DDR5 con frequenza fino a 7200MT/s</strong>, con dissipatore ed effetti luce RGB.
                                </p>
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#fff' }}>Grafica Ada Lovelace</h3>
                                <p style={{ lineHeight: '1.7', color: '#aaa' }}>
                                    GPU <strong>Nvidia® GeForce® serie 4000</strong>: un enorme passo avanti in termini di prestazioni, efficienza e grafica IA. Rendering real time in qualità cinematografica e modellazione fotorealistica di oggetti complessi per una produttività senza precedenti.
                                </p>
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#fff' }}>Giocare al massimo</h3>
                                <p style={{ lineHeight: '1.7', color: '#aaa' }}>
                                    Audio impeccabile con <strong>Surround 7.1</strong> (SNR 98dB) ed elaborazione DTS® per bassi più profondi. Connettività fulminea grazie al protocollo <strong>WI-FI 6</strong> e alla porta <strong>LAN 2.5Gb</strong>.
                                </p>
                            </div>
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
