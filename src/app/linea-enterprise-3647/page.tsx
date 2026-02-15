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
import { Server, Activity, Database, Cpu, Network, Shield, Settings, Zap } from 'lucide-react';

const GridBackground = () => (
    <div className={styles.gridBg} />
);

export default function LineaEnterprise3647Page() {
    const technicalSpecs: SpecCategory[] = [
        {
            id: 'dual-cpu',
            title: 'Dual Processor Power',
            icon: <Cpu size={24} />,
            items: [
                { label: 'CPU', value: '2x Intel® Xeon® Scalable' },
                { label: 'Cores', value: 'Fino a 56 Cores Totali' },
                { label: 'Chipset', value: 'C621 Series' },
            ]
        },
        {
            id: 'memory-density',
            title: 'Alta Densità Memoria',
            icon: <Database size={24} />,
            items: [
                { label: 'Slots', value: '12x DDR4 ECC RDIMM/LRDIMM' },
                { label: 'Capacità', value: 'Fino a 1.5TB RAM' },
                { label: 'Channel', value: 'Hexa-Channel Memory' },
            ]
        },
        {
            id: 'expansion',
            title: 'Espansibilità',
            icon: <Settings size={24} />,
            items: [
                { label: 'PCIe', value: '7x PCIe Gen3/Gen4 Slots' },
                { label: 'Storage', value: '8x 3.5" Hot-Swap SAS/SATA' },
                { label: 'NVMe', value: 'U.2 NVMe Support' },
            ]
        },
        {
            id: 'networking',
            title: 'Networking & I/O',
            icon: <Network size={24} />,
            items: [
                { label: 'LAN', value: 'Dual 10GbE + Mgmt LAN' },
                { label: 'IPMI', value: 'ASPEED AST2500 BMC' },
                { label: 'Video', value: 'VGA Integrated Port' },
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
                        <span className={styles.heroTag}>Winblu Enterprise</span>
                        <h1 className={styles.heroTitle}>
                            Winblu Enterprise<br />
                            <span className={styles.gradient}>3647</span>
                        </h1>
                        <p className={styles.heroDesc}>
                            Nessun compromesso per la serie Winblu Enterprise 3647: equipaggiate con le più recenti tecnologie dei microprocessori Intel Xeon Scalable di 2nd generazione.
                        </p>
                        <div className={styles.heroCTAs}>
                            <Link href="/punti-vendita" className={styles.ctaPrimary}>
                                Configura Cluster
                            </Link>
                            <Link href="/supporto" className={styles.ctaSecondary}>
                                SLA Enterprise
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
                                src="/assets/enterprise-3647-hero.png"
                                alt="Winblu Enterprise 3647 Dual CPU"
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
                            <Server size={48} className={styles.cardIcon} />
                            <h2 className={styles.cardTitle}>Infrastruttura Mission-Critical</h2>
                            <p className={styles.cardText}>
                                Massima densità di calcolo e affidabilità mission-critical. I server Enterprise 3647 offrono configurazioni dual socket per gestire applicazioni aziendali complesse, database e infrastrutture cloud.
                            </p>
                            <div className={styles.cardReveal}>
                                <p className={styles.cardText}>
                                    Alimentatori ridondanti e supporto per carichi di lavoro ad alta intensità fanno di questa linea la scelta ideale per il Data Center moderno.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.bentoCard} ${styles.cardSmall} ${styles.cardHighlight}`}>
                        <div className={styles.cardContent}>
                            <Zap size={36} className={styles.cardIcon} style={{ color: '#0160A9' }} />
                            <h3 className={styles.cardTitle}>High Performance Computing</h3>
                            <div className={styles.cardReveal}>
                                <p className={styles.cardTextSmall}>
                                    Fino a 56 core fisici e 112 thread per nodo, per gestire simulazioni e calcoli paralleli massivi.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.bentoCard} ${styles.cardMedium}`}>
                        <div className={styles.cardContent}>
                            <Database size={48} className={styles.cardIcon} />
                            <h3 className={styles.cardTitle}>In-Memory Database Ready</h3>
                            <p className={styles.cardText}>
                                Con supporto fino a 1.5TB di RAM, è la soluzione ideale per SAP HANA, SQL Server e database in-memory ad alte prestazioni.
                            </p>
                        </div>
                    </div>
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
