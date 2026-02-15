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
            <Navbar />
            <section className={styles.hero}>
                <GridBackground />
                <div className={styles.heroContent}>
                    <motion.div
                        className={styles.heroText}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className={styles.heroTag}>Potenza Senza Compromessi</span>
                        <h1 className={styles.heroTitle}>
                            Winblu <span className={styles.gradient}>Experience</span>
                        </h1>
                        <p className={styles.heroDesc}>
                            Prestazioni estreme con processori Intel® Xeon® e Core™ X-Series. La scelta definitiva per creatori di contenuti, ingegneri e professionisti del rendering che non accettano limiti.
                        </p>
                        <div className={styles.heroCTAs}>
                            <Link href="/punti-vendita" className={styles.ctaPrimary}>
                                Configura Workstation
                            </Link>
                            <Link href="/punti-vendita" className={styles.ctaSecondary}>
                                Trova Rivenditore
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        className={styles.heroVisual}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className={styles.heroImageContainer}>
                            <Image
                                src="/assets/experience-workstation-hero.png"
                                alt="Winblu Experience Workstation"
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
                    {/* Row 1 */}
                    <motion.div
                        className={`${styles.bentoCard} ${styles.cardLarge}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className={styles.cardContent}>
                            <Activity size={48} className={styles.cardIcon} />
                            <h2 className={styles.cardTitle}>Incredibili Performance</h2>
                            <p className={styles.cardText}>
                                Basate su processori Xeon-W e Core-X fino a 18 core/36 thread. Supporto memoria ECC fino a 1TB per garantire affidabilità totale e prevenire crash durante i calcoli più complessi.
                            </p>
                            <div className={styles.cardReveal}>
                                <p className={styles.cardText}>
                                    La tecnologia Intel Turbo Boost Max 3.0 indirizza i carichi critici ai core più veloci, mentre il Deep Learning Boost accelera l'IA per flussi di lavoro creativi e scientifici.
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
                            <Shield size={36} className={styles.cardIcon} />
                            <h3 className={styles.cardTitle}>NVIDIA Studio</h3>
                            <div className={styles.cardReveal}>
                                <p className={styles.cardTextSmall}>
                                    Supporto completo per NVIDIA® RTX Professional e GeForce. Rendering cinematografico e accelerazione BIM/CAD certificata per i principali software ISV.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Row 2 */}
                    <motion.div
                        className={`${styles.bentoCard} ${styles.cardMedium}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className={styles.cardContent}>
                            <Database size={48} className={styles.cardIcon} />
                            <h3 className={styles.cardTitle}>Storage Ultra Rapido</h3>
                            <p className={styles.cardText}>
                                Fino a due SSD NVMe M.2 con RAID 0/1 nativo per prestazioni 5.3x superiori al SATA. La velocità di accesso ai dati che serve ai professionisti del video 8K.
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
                            <Server size={48} className={styles.cardIcon} />
                            <h3 className={styles.cardTitle}>Connettività Pro</h3>
                            <p className={styles.cardText}>
                                Dual 10GbE, Thunderbolt 4 e gestione remota IPMI. Una workstation che si integra perfettamente in infrastrutture server e datacenter.
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
