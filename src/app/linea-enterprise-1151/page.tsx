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
import { Server, Shield, Database, Activity, HardDrive, Network, Lock, Cpu } from 'lucide-react';

const GridBackground = () => (
    <div className={styles.gridBg} />
);

export default function LineaEnterprise1151Page() {
    const technicalSpecs: SpecCategory[] = [
        {
            id: 'processor',
            title: 'Processore',
            icon: <Cpu size={24} />,
            items: [
                { label: 'CPU', value: 'Intel® Xeon® E-2300 Series' },
                { label: 'Socket', value: 'LGA 1200' },
                { label: 'Cores', value: 'Fino a 8 Cores / 16 Threads' },
            ]
        },
        {
            id: 'memory',
            title: 'Memoria',
            icon: <Database size={24} />,
            items: [
                { label: 'RAM', value: 'DDR4 ECC UDIMM' },
                { label: 'Capacità', value: 'Fino a 128GB' },
                { label: 'Speed', value: '3200 MT/s' },
            ]
        },
        {
            id: 'storage',
            title: 'Archiviazione',
            icon: <HardDrive size={24} />,
            items: [
                { label: 'Bays', value: '4x 3.5" Hot-Swap SATA/SAS' },
                { label: 'Boot', value: '2x M.2 NVMe (RAID 1)' },
                { label: 'Controller', value: 'RAID Hardware Dedicato' },
            ]
        },
        {
            id: 'management',
            title: 'Gestione',
            icon: <Network size={24} />,
            items: [
                { label: 'Remote', value: 'iKVM (IPMI 2.0)' },
                { label: 'LAN', value: 'Dual Gigabit + Management Port' },
                { label: 'OS', value: 'Windows Server / Linux / VMware' },
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
                            <span className={styles.gradient}>1151</span>
                        </h1>
                        <p className={styles.heroDesc}>
                            I server Winblu della linea Enterprise 1151 supportano le più recenti tecnologie con le CPU Intel® Xeon® E. Prestazioni superiori per gestire i carichi di lavoro aziendali critici.
                        </p>
                        <div className={styles.heroCTAs}>
                            <Link href="/punti-vendita" className={styles.ctaPrimary}>
                                Configura Server
                            </Link>
                            <Link href="/supporto" className={styles.ctaSecondary}>
                                Supporto Enterprise
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
                                src="/assets/enterprise-1151-hero.png"
                                alt="Winblu Enterprise 1151 Server"
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
                            <h2 className={styles.cardTitle}>Fondamenta Solide per il tuo IT</h2>
                            <p className={styles.cardText}>
                                Affidabilità, scalabilità e sicurezza: i server Enterprise 1151 sono la base solida per la tua infrastruttura IT. Ideali per piccole e medie imprese che necessitano di un server robusto e versatile.
                            </p>
                            <div className={styles.cardReveal}>
                                <p className={styles.cardText}>
                                    La memoria ECC garantisce l'integrità dei dati, mentre il supporto per drive Hot-Swap permette la manutenzione senza interruzioni di servizio.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.bentoCard} ${styles.cardSmall} ${styles.cardHighlight}`}>
                        <div className={styles.cardContent}>
                            <Shield size={36} className={styles.cardIcon} style={{ color: '#0160A9' }} />
                            <h3 className={styles.cardTitle}>Data Protection</h3>
                            <div className={styles.cardReveal}>
                                <p className={styles.cardTextSmall}>
                                    Proteggi i tuoi asset aziendali con TPM 2.0 e funzionalità di sicurezza hardware integrate.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.bentoCard} ${styles.cardMedium}`}>
                        <div className={styles.cardContent}>
                            <Network size={48} className={styles.cardIcon} />
                            <h3 className={styles.cardTitle}>Gestione Remota</h3>
                            <p className={styles.cardText}>
                                Controlla il tuo server da qualsiasi luogo grazie all'interfaccia IPMI dedicata. Monitoraggio hardware, KVM remoto e aggiornamenti firmware semplificati.
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
