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
import { Cpu, Zap, Database, Activity, Shield, Box, Monitor, Server } from 'lucide-react';

const GridBackground = () => (
    <div className={styles.gridBg} />
);

export default function LineaExperiencePage() {
    const technicalSpecs: SpecCategory[] = [
        {
            id: 'cpu-power',
            title: 'Processing Power',
            icon: <Cpu size={24} />,
            items: [
                { label: 'CPU', value: 'Intel® Core™ Ultra / Xeon W' },
                { label: 'Cores', value: 'Fino a 56 Cores' },
                { label: 'Chipset', value: 'W790 Workstation' },
            ]
        },
        {
            id: 'gpu-acceleration',
            title: 'GPU Acceleration',
            icon: <Zap size={24} />,
            items: [
                { label: 'GPU', value: 'Multi-GPU Support' },
                { label: 'NVIDIA', value: 'RTX 6000 Ada Gen / GeForce RTX 4090' },
                { label: 'VRAM', value: 'Fino a 48GB GDDR6 ECC' },
            ]
        },
        {
            id: 'memory',
            title: 'Memory & Storage',
            icon: <Database size={24} />,
            items: [
                { label: 'RAM', value: 'Fino a 2TB DDR5 ECC' },
                { label: 'Storage', value: 'M.2 PCIe Gen5 NVMe' },
                { label: 'RAID', value: '0/1/5/10 Support' },
            ]
        },
        {
            id: 'connectivity',
            title: 'Pro Connectivity',
            icon: <Server size={24} />,
            items: [
                { label: 'LAN', value: 'Dual 10GbE' },
                { label: 'Thunderbolt', value: 'Thunderbolt 4 Ports' },
                { label: 'Remote', value: 'IPMI Management' },
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
                        <span className={styles.heroTag}>Winblu Experience</span>
                        <h1 className={styles.heroTitle}>
                            La Workstation<br />
                            <span className={styles.gradient}>su misura per te</span>
                        </h1>
                        <p className={styles.heroDesc}>
                            Prestazioni potenti con processori Intel® Xeon® e Core™ X-Series. La scelta definitiva per creatori di contenuti, ingegneri e professionisti del rendering.
                        </p>
                        <div className={styles.heroCTAs}>
                            <Link href="/punti-vendita" className={styles.ctaPrimary}>
                                Configura Workstation
                            </Link>
                            <Link href="/supporto" className={styles.ctaSecondary}>
                                Servizio Premium
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
                                src="/assets/experience-workstation-hero.png"
                                alt="Winblu Experience Workstation"
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
                            <Activity size={48} className={styles.cardIcon} />
                            <h2 className={styles.cardTitle}>Incredibili Performance</h2>
                            <p className={styles.cardText}>
                                Basate su processori Xeon-W e Core-X fino a 18 core/36 thread. Supporto memoria ECC fino a 1TB per garantire affidabilità totale e prevenire crash di sistema.
                            </p>
                            <div className={styles.cardReveal}>
                                <p className={styles.cardText}>
                                    La tecnologia Intel Turbo Boost Max 3.0 indirizza i carichi critici ai core più veloci, mentre il Deep Learning Boost accelera l'IA per tagging immagini e riconoscimento vocale.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.bentoCard} ${styles.cardSmall} ${styles.cardHighlight}`}>
                        <div className={styles.cardContent}>
                            <Box size={36} className={styles.cardIcon} style={{ color: '#0160A9' }} />
                            <h3 className={styles.cardTitle}>NVIDIA Studio</h3>
                            <div className={styles.cardReveal}>
                                <p className={styles.cardTextSmall}>
                                    Supporto per NVIDIA® Quadro e GeForce con SLI fino a 3 vie. Rendering cinematografico e accelerazione BIM/CAD in tempo reale.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.bentoCard} ${styles.cardMedium}`}>
                        <div className={styles.cardContent}>
                            <Database size={48} className={styles.cardIcon} />
                            <h3 className={styles.cardTitle}>Storage Ultra Rapido</h3>
                            <p className={styles.cardText}>
                                Fino a due SSD NVMe M.2 con RAID 0/1 nativo per prestazioni 5.3x superiori al SATA. USB 3.1 Type-A/C per trasferimenti a 10Gbps.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Detailed Features Section - Restored Original Content */}
            <section style={{ padding: '4rem 2rem', background: '#111', color: '#fff' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{ display: 'grid', gap: '4rem' }}
                    >
                        <div>
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: '#00d2ff' }}>Potenza di Calcolo Senza Compromessi</h2>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#ccc' }}>
                                Le workstation Winblu Experience integrano processori <strong>Intel® Xeon-W</strong> e <strong>Core™ X-Series</strong> (Cascade Lake-X) con moltiplicatore sbloccato. La memoria <strong>ECC (Error Correction Code)</strong> rileva e ripara errori in tempo reale, fondamentale per rendering lunghi e calcoli scientifici.
                            </p>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                            <div>
                                <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#fff' }}>Grafica Professionale & AI</h3>
                                <p style={{ lineHeight: '1.7', color: '#aaa' }}>
                                    Supporto completo per <strong>NVIDIA® Quadro</strong> e <strong>GeForce</strong>, ideale per accelerare flussi AEC, BIM e CAD. La tecnologia <strong>Intel DL Boost</strong> velocizza i carichi di lavoro basati su Intelligenza Artificiale come il riconoscimento oggetti e traduzioni istantanee.
                                </p>
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#fff' }}>Connettività & Espandibilità</h3>
                                <p style={{ lineHeight: '1.7', color: '#aaa' }}>
                                    Slot M.2 con dissipatore integrato per <strong>SSD NVMe in RAID 0/1</strong>. Connettività estrema con porte <strong>USB 3.1 Type-C</strong> a 10Gbps e supporto multi-GPU per configurazioni SLI fino a 3 vie (su modelli selezionati).
                                </p>
                            </div>
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
