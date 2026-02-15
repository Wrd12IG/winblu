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
import { Server, Activity, Database, Cpu, Network, Shield, Settings, Zap, Monitor } from 'lucide-react';

const GridBackground = () => (
    <div className={styles.gridBg} />
);

export default function LineaEnterprise3647Page() {
    const technicalSpecs: SpecCategory[] = [
        {
            id: 'dual-cpu',
            title: 'Dual Processor',
            icon: <Cpu size={24} />,
            items: [
                { label: 'CPU', value: '2x Intel® Xeon® Scalable (2nd Gen)' },
                { label: 'Cores', value: 'Fino a 56 Cores / 112 Threads' },
                { label: 'TDP', value: 'Max Performance' },
            ]
        },
        {
            id: 'memory-density',
            title: 'Memoria Extreme',
            icon: <Database size={24} />,
            items: [
                { label: 'Capacità', value: 'Fino a 3TB DDR4 ECC' },
                { label: 'Slots', value: 'DIMM Alta Densità' },
                { label: 'Use Case', value: 'In-Memory DB / HPC' },
            ]
        },
        {
            id: 'gpu-acceleration',
            title: 'GPU Acceleration',
            icon: <Zap size={24} />,
            items: [
                { label: 'GPU', value: 'Fino a 4x NVIDIA® / AMD®' },
                { label: 'Use Case', value: 'AI / Rendering / Simulations' },
                { label: 'Power', value: 'Supporto Multi-GPU' },
            ]
        },
        {
            id: 'networking',
            title: 'Networking & Mgmt',
            icon: <Network size={24} />,
            items: [
                { label: 'LAN', value: 'Intel® Gigabit (I350/I210)' },
                { label: 'Mgmt', value: 'ASMB9-iKVM Remote Mgmt' },
                { label: 'Expand', value: 'ASUS PEB-10Gb/s Ready' },
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
                        <span className={styles.heroTag}>Extreme Scalability Hub</span>
                        <h1 className={styles.heroTitle}>
                            Winblu <span className={styles.gradient}>Enterprise 3647</span>
                        </h1>
                        <p className={styles.heroDesc}>
                            Potenza di calcolo senza precedenti. La serie 3647 è equipaggiata con microprocessori Intel® Xeon® Scalable di 2nd generazione per gestire i carichi aziendali più estremi.
                        </p>
                        <div className={styles.heroCTAs}>
                            <Link href="/punti-vendita" className={styles.ctaPrimary}>
                                Configura Cluster
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
                                src="/assets/enterprise-3647-hero.png"
                                alt="Winblu Enterprise 3647 Dual CPU"
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
                            <Shield size={48} className={styles.cardIcon} />
                            <h2 className={styles.cardTitle}>Sicurezza Mission-Critical</h2>
                            <p className={styles.cardText}>
                                Soluzioni dual-processor progettate per High-Performance Computing (HPC) e virtualizzazione densa. Fino a 56 core e 3 Terabyte di memoria RAM ECC per una stabilità granitica.
                            </p>
                            <div className={styles.cardReveal}>
                                <p className={styles.cardText}>
                                    La serie 3647 è ingegnerizzata su piattaforma ASUS per massimizzare la scalabilità, adatta per Machine Learning, Analisi Dati e Web Hosting di larga scala.
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
                            <h3 className={styles.cardTitle}>GPU Acceleration</h3>
                            <div className={styles.cardReveal}>
                                <p className={styles.cardTextSmall}>
                                    Supporto fino a 4 GPU NVIDIA® o AMD® per accelerare rendering cinematografici e simulazioni AEC complesse.
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
                            <Settings size={48} className={styles.cardIcon} />
                            <h3 className={styles.cardTitle}>Gestione IT Completa</h3>
                            <p className={styles.cardText}>
                                Modulo integrato ASMB9-iKVM per monitoraggio remoto 24/7, diagnostica BSOD e controllo ventole intelligente tramite interfaccia grafica web.
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
                            <Network size={48} className={styles.cardIcon} />
                            <h3 className={styles.cardTitle}>10Gb/s Expandability</h3>
                            <p className={styles.cardText}>
                                Oltre al dual-LAN integrato, opzione per controller ASUS PEB-10G per reti a bassissima latenza e alta densità di traffico.
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
