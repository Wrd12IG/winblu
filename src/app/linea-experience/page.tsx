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
                            Progettata per i professionisti più esigenti: grafica 3D, BIM, CAD e rendering avanzato. Potenza certificata e affidabilità senza compromessi.
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
                            <h2 className={styles.cardTitle}>Tecnologia Professionale</h2>
                            <p className={styles.cardText}>
                                Workstation scalabili con Intel Xeon per prestazioni multitasking senza precedenti.
                            </p>
                            <div className={styles.cardReveal}>
                                <p className={styles.cardText}>
                                    Le workstation Winblu Experience sono il risultato di anni di ottimizzazione. Ogni dettaglio è pensato per chi trasforma le idee in realtà.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.bentoCard} ${styles.cardSmall} ${styles.cardHighlight}`}>
                        <div className={styles.cardContent}>
                            <Box size={36} className={styles.cardIcon} style={{ color: '#0160A9' }} />
                            <h3 className={styles.cardTitle}>Calcolo Estremo</h3>
                            <div className={styles.cardReveal}>
                                <p className={styles.cardTextSmall}>
                                    Supporto Intel Xeon-W e Core-X fino a 18 core/36 thread per rendering cinematografico.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.bentoCard} ${styles.cardMedium}`}>
                        <div className={styles.cardContent}>
                            <Shield size={48} className={styles.cardIcon} />
                            <h3 className={styles.cardTitle}>Affidabilità 24/7</h3>
                            <p className={styles.cardText}>
                                Componenti testati per carichi di lavoro continui e sistemi di raffreddamento silenziosi. Memoria ECC per flussi di lavoro critici.
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
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: '#00d2ff' }}>Incredibili performance con Intel Xeon e Intel Core-X</h2>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#ccc' }}>
                                Prestazioni potenti con le Workstation grafiche Winblu Experience basate su processori <strong>Xeon-W serie 2000</strong> e <strong>Xeon-E</strong>, fino a 18 core e 36 thread (8 core e 16 thread con Xeon-E) e con il supporto alla memoria <strong>ECC (Error Correction Code)</strong> fino a un massimo di 1TB (secondo il modello), per il rilevamento e la riparazione automatici di errori di memoria a bit singolo, riducendo il rischio di crash del sistema e di corruzione dei dati, così garantendo prestazioni affidabili e reattive. Serve altra potenza? Con i processori <strong>Core X</strong> di decima generazione con il moltiplicatore sbloccato e le memorie OC, è possibile sprigionare tutta l’aggressività dell’architettura Cascade Lake-X di Intel con incredibili picchi di frequenza di boost.
                            </p>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                            <div>
                                <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#fff' }}>Features all’avanguardia</h3>
                                <p style={{ lineHeight: '1.7', color: '#aaa' }}>
                                    La tecnologia <strong>Intel Turbo Boost Max 3.0</strong> (solo Experience 2066i e 2066x) incrementa la potenza di elaborazione della tua workstation indirizzando i carichi di lavoro più critici ai quattro core più veloci del processore, migliorando le prestazioni con le attività altamente “threaded”.
                                    Un tagging dell’immagine più rapido, traduzioni di linguaggio, rilevamento di oggetti e volti, riconoscimento vocale, sono solo alcuni dei carichi di lavori tipici che possono invece beneficiare dell’<strong>Intel Deep Learning Boost (Intel DL Boost)</strong>, la feature progettata per accelerare l’intelligenza artificiale.
                                </p>
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#fff' }}>Supporto Grafica Professionale</h3>
                                <p style={{ lineHeight: '1.7', color: '#aaa' }}>
                                    Cos’è una workstation grafica senza un comparto grafico di degno di questo nome? Per questo le workstation Winblu Experience sono equipaggiate con le insuperabili GPU <strong>NVIDIA® Quadro</strong> e <strong>GeForce</strong>, con possibilità di SLI fino a 3 vie (solo Experience 2066i e 2066x), rendendole macchine perfette per creatori di contenuti, media streamers e designers professionisti. nVIDIA Quadro ha il potenziale per accelerare i flussi di lavoro relativi ad architettura, ingegneria e costruzione (AEC), consentendo di completare progetti BIM e CAD in tempi record.
                                </p>
                            </div>
                        </div>

                        <div style={{ padding: '2rem', background: 'rgba(255,255,255,0.05)', borderRadius: '16px', borderLeft: '4px solid #00d2ff' }}>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: '#fff' }}>Storage ultra rapido e I/O integrato</h3>
                            <p style={{ margin: 0, color: '#ccc' }}>
                                Tutte le workstation Winblu Experience offrono on-board la possibilità di installare fino a due drive <strong>SSD NVMe</strong> su socket m.2 con dissipatore integrato e supporto nativo a <strong>RAID 0/1</strong>, rompendo definitivamente i limiti di banda del bus SATA con prestazioni fino a 5.3 volte superiori. Le porte USB 3.1 in formato Type-A e Type-C forniscono una estrema flessibilità di connessione con velocità di trasferimento fino a 10Gbps.
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
