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
                            Scalabilità e versatilità estreme. Nessun compromesso per la serie Winblu Enterprise 3647: equipaggiate con le più recenti tecnologie dei microprocessori Intel Xeon Scalable di 2nd generazione.
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
                            <Shield size={48} className={styles.cardIcon} />
                            <h2 className={styles.cardTitle}>La sicurezza di non fermarsi mai</h2>
                            <p className={styles.cardText}>
                                Basati su piattaforma Asus, azienda leader nel settore hardware. Soluzioni ingegnerizzate in modo ottimale e ricche di funzionalità intelligenti, con componentistica selezionata e certificata per garantire totale sicurezza e affidabilità.
                            </p>
                            <div className={styles.cardReveal}>
                                <p className={styles.cardText}>
                                    Rispondono al meglio al bisogno di continuità operativa, caratteristica imprescindibile per un server mission-critical.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.bentoCard} ${styles.cardSmall} ${styles.cardHighlight}`}>
                        <div className={styles.cardContent}>
                            <Zap size={36} className={styles.cardIcon} style={{ color: '#0160A9' }} />
                            <h3 className={styles.cardTitle}>Accelera i flussi</h3>
                            <div className={styles.cardReveal}>
                                <p className={styles.cardTextSmall}>
                                    Supporto fino a 4 GPU NVIDIA® o AMD® per accelerare flussi AEC e Multimedia. Rendering cinematografico e calcoli complessi in tempo reale.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.bentoCard} ${styles.cardMedium}`}>
                        <div className={styles.cardContent}>
                            <Network size={48} className={styles.cardIcon} />
                            <h3 className={styles.cardTitle}>Intel® Gigabit Ethernet</h3>
                            <p className={styles.cardText}>
                                Schede di rete Intel® server-class con controller I350/I210. Supporto Teaming per larghezza di banda estesa e Failover per connessione ininterrotta.
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
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: '#00d2ff' }}>Scalabilità e versatilità estreme</h2>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#ccc' }}>
                                Queste soluzioni supportano fino a un massimo di <strong>56 core e 112 thread totali</strong>, e fino <strong>3 Terabyte di memoria RAM ECC</strong>, per una estrema capacità computazionale complessiva. La linea Enterprise 3647 offre le piattaforme ideali per integrare la macchina perfetta in grado di soddisfare esigenze professionali e enterprise: analisi dei dati, machine learning, elaborazione multimediale, virtualizzazione, web-hosting o <strong>High-Performance-Computing (HPC)</strong>. Disponibili in formato 1 unità, 2 unità e 5 unità.
                            </p>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                            <div>
                                <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#fff' }}>Applicazioni AEC e Multimedia</h3>
                                <p style={{ lineHeight: '1.7', color: '#aaa' }}>
                                    Winblu Enterprise 3647 5U ha il potenziale per accelerare i flussi di lavoro relativi ad architettura, ingegneria e costruzione (AEC). La possibilità di installare fino a <strong>quattro GPU NVIDA® o AMD®</strong> consente di completare progetti BIM e CAD in tempi record. In ambito multimediale è possibile eseguire rendering fotorealistici e modellazione complessa con ombre, riflessi e rifrazioni istantanei.
                                </p>
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#fff' }}>Gestione completa dell'infrastruttura IT</h3>
                                <p style={{ lineHeight: '1.7', color: '#aaa' }}>
                                    Il modulo integrato <strong>ASMB9-iKVM</strong> supporta aggiornamento del BIOS da remoto, gestione completa delle ventole, KVM stand-alone, registrazione video e acquisizione BSOD. Fornisce monitoraggio e diagnostica in modalità remota 24 ore su 24, anche se il sistema operativo è inattivo, attraverso un'interfaccia grafica web user-friendly (IPMI 2.0).
                                </p>
                            </div>
                        </div>

                        <div style={{ padding: '2rem', background: 'rgba(255,255,255,0.05)', borderRadius: '16px', borderLeft: '4px solid #00d2ff' }}>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: '#fff' }}>Espandibilità Network Avanzata</h3>
                            <p style={{ margin: 0, color: '#ccc' }}>
                                Oltre ai controller Intel® Gigabit integrati, tutte le soluzioni Winblu Enterprise 3647 offrono la possibilità di espandere il comparto network con il controller <strong>Asus PEB-10Gb/s</strong>, rappresentando la soluzione perfetta per applicazioni di virtualizzazione che richiedono una rete ultraveloce e affidabile.
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
