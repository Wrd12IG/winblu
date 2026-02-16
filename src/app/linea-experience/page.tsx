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
import { Cpu, Zap, Database, Activity, Shield, Box, Monitor, Server, Settings, Disc, Speaker, Layers, HardDrive } from 'lucide-react';

const GridBackground = () => (
    <div className={styles.gridBg} />
);

export default function LineaExperiencePage() {
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
                        <span className={styles.heroTag}>Winblu Experience</span>
                        <h1 className={styles.heroTitle}>
                            La workstation<br />
                            <span className={styles.gradient}>su misura per te</span>
                        </h1>
                        <p className={styles.heroDesc}>
                            Prestazioni potenti con le Workstation grafiche Winblu Experience basate su processori Xeon-W e Core-X. Fino a 18 core e 36 thread, supporto memoria ECC e grafica NVIDIA® Quadro o GeForce. La scelta definitiva per creatori di contenuti, ingegneri e professionisti.
                        </p>
                        <div className={styles.heroCTAs}>
                            <Link href="/punti-vendita?tipo=fornitura" className={styles.ctaPrimary}>
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
                                src="/assets/experience-workstation.png"
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
                            <Activity size={48} className={styles.cardIcon} style={{ color: '#0160A9' }} />
                            <h2 className={styles.cardTitle}>Incredibili Performance</h2>
                            <p className={styles.cardText}>
                                Basate su processori Xeon-W serie 2000, Xeon-E e Core-X fino a 18 core/36 thread. Supporto memoria ECC fino a 1TB per rilevare e riparare errori, garantendo affidabilità totale.
                            </p>
                            <div className={styles.cardReveal}>
                                <p className={styles.cardText}>
                                    La tecnologia Intel Turbo Boost Max 3.0 e Intel Deep Learning Boost accelerano i carichi di lavoro più critici e l'IA, come il tagging delle immagini e il riconoscimento vocale.
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
                            <h3 className={styles.cardTitle}>NVIDIA Quadro</h3>
                            <div className={styles.cardReveal}>
                                <p className={styles.cardTextSmall}>
                                    Equipaggiate con GPU NVIDIA® Quadro e GeForce, con possibilità di SLI fino a 3 vie. Perfette per rendering cinematografico, BIM e CAD.
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
                                Fino a due SSD NVMe M.2 con dissipatore integrato e RAID 0/1 nativo.
                            </p>
                            <div className={styles.cardReveal}>
                                <p className={styles.cardText}>
                                    Prestazioni fino a 5.3 volte superiori al SATA. Porte USB 3.1 Type-A/C fino a 10Gbps.
                                </p>
                            </div>
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
                            <h3 className={styles.cardTitle}>Intel Gigabit Server-Class</h3>
                            <p className={styles.cardText}>
                                Dual Intel Gigabit LAN per una rete affidabile, basso utilizzo CPU e supporto Teaming per maggiore throughput o ridondanza.
                            </p>
                        </div>
                    </motion.div>

                    {/* Row 3 */}
                    <motion.div
                        className={`${styles.bentoCard} ${styles.cardLarge}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <div className={styles.cardContent}>
                            <Speaker size={48} className={styles.cardIcon} style={{ color: '#0160A9' }} />
                            <h2 className={styles.cardTitle}>Audio Straordinario</h2>
                            <p className={styles.cardText}>
                                Codec Realtek ALC S1220A 7.1 canali con rapporto segnale-rumore di 120dB (uscita) e 113dB (ingresso).
                            </p>
                            <div className={styles.cardReveal}>
                                <p className={styles.cardText}>
                                    Condensatori audio giapponesi per un suono caldo, naturale e avvolgente. Ideale per i creatori di contenuti.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className={`${styles.bentoCard} ${styles.cardSmall} ${styles.cardHighlight}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                    >
                        <div className={styles.cardContent}>
                            <Layers size={36} className={styles.cardIcon} />
                            <h3 className={styles.cardTitle}>Garanzia On-Site</h3>
                            <div className={styles.cardReveal}>
                                <p className={styles.cardTextSmall}>
                                    24 mesi di garanzia con estensione fino a 3 anni On Site e intervento in 24 ore.
                                </p>
                            </div>
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
                    <SpecsCards specs={[
                        { id: 'cpu', title: 'Processori', description: 'Intel® Core™ i5/i7/i9 (1151c), Intel® Xeon® E/W (2066x/1151c), Intel® Core™ i9 serie X (2066i)', icon: <Cpu size={24} /> },
                        { id: 'chipset', title: 'Chipset', description: 'Intel® C246 (1151c), Intel® C422 (2066x), Intel® X299 (2066i)', icon: <Settings size={24} /> },
                        { id: 'memory', title: 'Memoria', description: 'ECC DDR4 2666MHz (max 1TB su 2066x), DDR4 2666MHz HyperX (max 128GB su 2066i/1151c)', icon: <Database size={24} /> },
                        { id: 'storage', title: 'Archiviazione', description: 'M.2 NVMe e SATA (250GB-2TB), SSD SATA (256GB-2TB), HDD Enterprise 7200rpm (1TB-4TB), Masterizzatore Dual Layer', icon: <HardDrive size={24} /> },
                        { id: 'video', title: 'Sezione Video', description: 'NVIDIA® Quadro™ (P400 - RTX™4000), NVIDIA® GeForce™ (GTX 1050 - RTX 2080)', icon: <Monitor size={24} /> },
                        { id: 'audio', title: 'Sezione Audio', description: 'Realtek® ALC S1220A 7.1 (2066x/i) con Crystal Sound 3, Realtek® ALC887 8-channel (1151c)', icon: <Speaker size={24} /> },
                        { id: 'connectivity', title: 'Connettività', description: 'Intel® Gigabit LAN I210AT e i219-LM, USB 3.1 gen 2 Type-A/C fino a 10Gbps', icon: <Server size={24} /> },
                        { id: 'os', title: 'Sistema Operativo', description: 'Microsoft Windows 10 Pro / Pro for Workstations', icon: <Settings size={24} /> },
                        { id: 'case', title: 'Case e Alimentatore', description: 'Tower 4U, Alimentatori 500W/700W/850W 80Plus Gold (Full Modular su 2066i)', icon: <Box size={24} /> },
                        { id: 'controller', title: 'Controller', description: 'Intel® RSTe Integrato – SATA/NVMe RAID 0/1/5/10 (Windows e Linux)', icon: <Settings size={24} /> },
                        { id: 'warranty', title: 'Garanzia', description: '24/36 mesi On Site con intervento a domicilio entro 48 ore lavorative (escluse isole minori)', icon: <Shield size={24} /> },
                        { id: 'optical', title: 'Lettori', description: 'Masterizzatore Dual Layer', icon: <Disc size={24} /> },

                    ]} />
                </div>
            </section>

            <B2BCTASection />
            <Footer />
        </div>
    );
}
