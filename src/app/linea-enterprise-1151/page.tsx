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
                { label: 'Speed', value: '2666/3200 MT/s' },
            ]
        },
        {
            id: 'storage',
            title: 'Archiviazione',
            icon: <HardDrive size={24} />,
            items: [
                { label: 'Bays', value: '4x 3.5" Hot-Swap (Espandibile)' },
                { label: 'Boot', value: '2x M.2 NVMe (RAID 1 Support)' },
                { label: 'Controller', value: 'ASUS PIKE II 3000 Series' },
            ]
        },
        {
            id: 'management',
            title: 'Network & Gestione',
            icon: <Network size={24} />,
            items: [
                { label: 'LAN', value: '2-4x Intel® Gigabit Ethernet' },
                { label: 'Features', value: 'Teaming & Failover Support' },
                { label: 'Mgmt', value: 'iKVM / IPMI 2.0' },
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
                            Soluzioni ottimizzate per il carico di lavoro. I server Winblu Enterprise 1151 supportano le più recenti tecnologie con CPU Intel® Xeon® E per prestazioni estreme e affidabilità totale.
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
                            <h2 className={styles.cardTitle}>La sicurezza di non fermarsi mai</h2>
                            <p className={styles.cardText}>
                                Basati su piattaforma ASUS, leader nel settore hardware server. Soluzioni ingegnerizzate in modo ottimale con componentistica selezionata e certificata per garantire continuità operativa.
                            </p>
                            <div className={styles.cardReveal}>
                                <p className={styles.cardText}>
                                    Ideali per chi cerca totale sicurezza e affidabilità, caratteristiche imprescindibili per un server aziendale.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.bentoCard} ${styles.cardSmall} ${styles.cardHighlight}`}>
                        <div className={styles.cardContent}>
                            <Shield size={36} className={styles.cardIcon} style={{ color: '#0160A9' }} />
                            <h3 className={styles.cardTitle}>Protezione Dati</h3>
                            <div className={styles.cardReveal}>
                                <p className={styles.cardTextSmall}>
                                    Controller ASUS PIKE II 3000 per storage SAS a 12 Gbit/s e protezione RAID hardware integrata.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.bentoCard} ${styles.cardMedium}`}>
                        <div className={styles.cardContent}>
                            <Network size={48} className={styles.cardIcon} />
                            <h3 className={styles.cardTitle}>Intel Gigabit Ethernet</h3>
                            <p className={styles.cardText}>
                                Da due a quattro porte Intel® Ethernet di classe server con supporto teaming e failover per una connessione ininterrotta.
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
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: '#00d2ff' }}>Soluzioni ottimizzate per il carico di lavoro</h2>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#ccc' }}>
                                I server Winblu della linea Enterprise 1151 supportano le più recenti tecnologie con le CPU <strong>Intel® Xeon® E</strong>, 1.36x più veloci rispetto alla generazione precedente e funzionanti con TDP massimo di 95W per prestazioni estreme. I quattro slot di memoria supportano fino a <strong>128 GB di DDR4 ECC</strong> 2666MHz per elaborazioni a uso intensivo di RAM. I server Winblu Enterprise 1151 sono disponibili in formato 1 unità rack, 4 unità e 5 unità tower convertibile.
                            </p>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                            <div>
                                <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#fff' }}>Flessibilità di espansione storage</h3>
                                <p style={{ lineHeight: '1.7', color: '#aaa' }}>
                                    La linea Enterprise 1151 ospita quattro bay da 2,5”/3,5″ sostituibili a caldo (Hot-Swap). La versione 5U è ulteriormente espandibile fino a otto bay per una maggiore capacità di archiviazione opzionale. Due slot <strong>M.2 NVMe</strong> ospitano SSD fino al formato 22110 con supporto al boot del sistema operativo e larghezza di banda PCIe Gen3 – 5,3 volte più veloce rispetto a SATA III – per velocità di avvio più elevate.
                                </p>
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#fff' }}>Massimizzazione I/O e Protezione</h3>
                                <p style={{ lineHeight: '1.7', color: '#aaa' }}>
                                    Supporto per i controller della serie <strong>ASUS PIKE II 3000</strong>, la più recente soluzione di storage aziendale, con supporto per l’archiviazione SAS a 12 Gbit/s e protezione dei dati RAID integrata. I controller hardware ASUS PIKE sono una grande opzione di aggiornamento per migliorare immediatamente capacità e prestazioni.
                                </p>
                            </div>
                        </div>

                        <div style={{ padding: '2rem', background: 'rgba(255,255,255,0.05)', borderRadius: '16px', borderLeft: '4px solid #00d2ff' }}>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: '#fff' }}>Connettività Intel di Classe Server</h3>
                            <p style={{ margin: 0, color: '#ccc' }}>
                                Dotati di connettori <strong>Intel® Ethernet</strong> (da 2 a 4 secondo il modello) con controller I210 e I219. Il supporto <strong>Teaming</strong> estende la larghezza di banda della rete, mentre la funzione di <strong>Failover</strong> garantisce una connessione ininterrotta, rendendola la soluzione perfetta per applicazioni di virtualizzazione che richiedono una rete ultraveloce e affidabile.
                            </p>
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
