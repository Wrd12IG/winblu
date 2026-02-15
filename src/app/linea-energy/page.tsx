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
import { Shield, Zap, Cpu, Monitor, Wifi, Award, Settings, HardDrive, Box } from 'lucide-react';

const GridBackground = () => (
    <div className={styles.gridBg} />
);

export default function LineaEnergyPage() {
    const technicalSpecs: SpecCategory[] = [
        {
            id: 'cpu',
            title: 'Processore',
            icon: <Cpu size={24} />,
            items: [
                { label: 'Generazione', value: 'Intel® Core™ 13a/14a Gen' },
                { label: 'Modelli', value: 'i3 / i5 / i7' },
                { label: 'Performance', value: 'Hybrid Architecture' },
            ]
        },
        {
            id: 'graphics',
            title: 'Grafica',
            icon: <Monitor size={24} />,
            items: [
                { label: 'Integrata', value: 'Intel® UHD Graphics 700' },
                { label: 'Opzionale', value: 'NVIDIA® GeForce® GTX Legacy' },
                { label: 'Output', value: 'HDMI 2.1 / DisplayPort' },
            ]
        },
        {
            id: 'warranty',
            title: 'Garanzia On-Site',
            icon: <Shield size={24} />,
            items: [
                { label: 'Durata', value: '24 Mesi Standard' },
                { label: 'Estensione', value: 'Opzionale fino a 36 Mesi' },
                { label: 'Servizio', value: 'Intervento a Domicilio' },
            ]
        },
        {
            id: 'design',
            title: 'Design & Build',
            icon: <Box size={24} />,
            items: [
                { label: 'Case', value: 'Mid-Tower ATX' },
                { label: 'Frontale', value: 'Carbon Fiber Texture' },
                { label: 'Materiali', value: 'Acciaio SGCC 0.6mm' },
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
                        <span className={styles.heroTag}>Linea Energy</span>
                        <h1 className={styles.heroTitle}>
                            Qualità e<br />
                            <span className={styles.gradient}>Affidabilità</span>
                        </h1>
                        <p className={styles.heroDesc}>
                            Il best-seller della gamma Winblu. Una combinazione perfetta di robustezza, qualità dei materiali ed eleganza per ogni ambiente lavorativo.
                        </p>
                        <div className={styles.heroCTAs}>
                            <Link href="/punti-vendita" className={styles.ctaPrimary}>
                                Configura Ora
                            </Link>
                            <Link href="/supporto" className={styles.ctaSecondary}>
                                Servizi e Garanzia
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
                                src="/assets/energy-hero.png"
                                alt="Winblu Energy Tower"
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
                            <Award size={48} className={styles.cardIcon} />
                            <h2 className={styles.cardTitle}>Il Cuore Pulsante del Business</h2>
                            <p className={styles.cardText}>
                                Progettata per garantire continuità operativa e prestazioni solide. Il case con texture in fibra di carbonio conferisce un look professionale che si adatta a qualsiasi ufficio moderno.
                            </p>
                            <div className={styles.cardReveal}>
                                <p className={styles.cardText}>
                                    Oltre all'estetica, la Linea Energy offre un'accessibilità superiore per la manutenzione e l'upgrade, garantendo un lungo ciclo di vita al tuo investimento IT.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.bentoCard} ${styles.cardSmall} ${styles.cardHighlight}`}>
                        <div className={styles.cardContent}>
                            <Shield size={36} className={styles.cardIcon} style={{ color: '#0160A9' }} />
                            <h3 className={styles.cardTitle}>On-Site Service</h3>
                            <div className={styles.cardReveal}>
                                <p className={styles.cardTextSmall}>
                                    Dormi sonni tranquilli con la garanzia On-Site: in caso di guasto, un tecnico verrà direttamente da te per risolvere il problema.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.bentoCard} ${styles.cardMedium}`}>
                        <div className={styles.cardContent}>
                            <Monitor size={48} className={styles.cardIcon} />
                            <h3 className={styles.cardTitle}>Versatilità Grafica</h3>
                            <p className={styles.cardText}>
                                Dagli applicativi Office alla creazione di contenuti leggeri, la grafica Intel UHD (o la GPU NVIDIA opzionale) supporta flussi di lavoro multi-monitor fino all'8K.
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
