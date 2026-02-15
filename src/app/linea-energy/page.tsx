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
                        <span className={styles.heroTag}>Winblu Linea Energy</span>
                        <h1 className={styles.heroTitle}>
                            Qualità e Stile<br />
                            <span className={styles.gradient}>Per Ogni Esigenza</span>
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
                            <h2 className={styles.cardTitle}>Il Best-Seller Winblu</h2>
                            <p className={styles.cardText}>
                                Un compagno dinamico e instancabile. Disinvolti nei programmi di produttività, agili nel web, sociali per natura.
                            </p>
                            <div className={styles.cardReveal}>
                                <p className={styles.cardText}>
                                    Robustezza e qualità dei materiali si fondono con l'eleganza del design. Perfetti sia per la casa che per l'ufficio, garantiscono affidabilità totale in qualsiasi contesto.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.bentoCard} ${styles.cardSmall} ${styles.cardHighlight}`}>
                        <div className={styles.cardContent}>
                            <Wifi size={36} className={styles.cardIcon} style={{ color: '#0160A9' }} />
                            <h3 className={styles.cardTitle}>Fino a 2.4Gbps</h3>
                            <div className={styles.cardReveal}>
                                <p className={styles.cardTextSmall}>
                                    Wi-Fi 6 e Bluetooth 5.0 (opzionali) per velocità di trasferimento eccezionali anche su reti affollate.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.bentoCard} ${styles.cardMedium}`}>
                        <div className={styles.cardContent}>
                            <Monitor size={48} className={styles.cardIcon} />
                            <h3 className={styles.cardTitle}>Intel Xe Graphics</h3>
                            <p className={styles.cardText}>
                                Core grafico Intel UHD 770/730 con supporto 8K@60Hz HDR e decodifica media 12-bit.
                            </p>
                            <div className={styles.cardReveal}>
                                <p className={styles.cardText}>
                                    Per i più esigenti, la linea Energy2 supporta GPU NVIDIA® GeForce® GTX per content creation e design professionale.
                                </p>
                            </div>
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
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: '#00d2ff' }}>Incredibile Performance 12ᴬ Gen</h2>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#ccc' }}>
                                I microprocessori <strong>Intel® Core™ di 12A generazione</strong> (Alder Lake) sono il cuore pulsante di Winblu ENERGY. Una nuovissima architettura ibrida governata da <strong>Intel® Thread Director</strong>, che assegna i task ai core migliori (Performance o Efficiency) in base alla tipologia. Il risultato è un incremento di produttività fino al 50% rispetto alla generazione precedente.
                            </p>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                            <div>
                                <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#fff' }}>Connettività a 360°</h3>
                                <p style={{ lineHeight: '1.7', color: '#aaa' }}>
                                    Pannello frontale con 2x USB 3.0 e Audio. Retro con porte USB 3.2/2.0 aggiuntive. Uscite video flessibili: <strong>VGA, HDMI e DisplayPort</strong> (in base al modello) per la massima compatibilità con monitor digitali.
                                </p>
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#fff' }}>Espandibilità Totale</h3>
                                <p style={{ lineHeight: '1.7', color: '#aaa' }}>
                                    Configurabile fino a <strong>n°3 Storage SATA/NVMe M.2</strong> per la massima capacità, con supporto nativo a <strong>RAID 0/1</strong>. Il massimo della connettività è assicurato dal <strong>Wi-Fi 6 con Bluetooth 5.0</strong> (opzionali).
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
