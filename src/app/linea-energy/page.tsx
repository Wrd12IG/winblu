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
import { Shield, Zap, Cpu, Monitor, Wifi, Award, Settings, HardDrive, Box, Lock, Activity, Speaker } from 'lucide-react';

const GridBackground = () => (
    <div className={styles.gridBg} />
);

export default function LineaEnergyPage() {
    // Specs now handled directly in SpecsCards
    return (
        <div className={styles.container}>
            <Navbar />
            <section className={styles.hero}>
                <GridBackground />
                <div className={styles.heroContent}>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className={styles.heroText}
                    >
                        <span className={styles.heroTag}>Linea Energy</span>
                        <h1 className={styles.heroTitle}>
                            Winblu <span className={styles.gradient}>Energy</span>
                        </h1>
                        <h2 className={styles.heroSubtitle}>la Qualità e l’Affidabilità di un vero Best-Seller. Qualità e stile per ogni esigenza</h2>
                        <div className={styles.heroDesc}>
                            <p>
                                Winblu Energy rappresenta il best-seller della gamma Winblu e combina la robustezza e la qualità dei materiali con l’eleganza e l’ergonomia del design: soluzioni performanti, super-collaudate e affidabili che non deludono mai le aspettative dell’utilizzatore.
                            </p>
                            <p>
                                Un compagno dinamico e instancabile al servizio delle tue esigenze: ogni personal computer della linea Energy è studiato e realizzato per offrirti alte prestazioni e totale affidabilità in qualsiasi contesto applicativo.
                            </p>
                        </div>
                        <div className={styles.heroCTAs}>
                            <Link href="/punti-vendita?tipo=fornitura" className={styles.ctaPrimary}>
                                Configura Winblu
                            </Link>
                            <Link href="/punti-vendita" className={styles.ctaSecondary}>
                                Trova Rivenditore
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className={styles.heroVisual}
                    >
                        <div className={styles.heroImageContainer}>
                            <Image
                                src="/assets/energy-hero-new.jpg"
                                alt="Winblu Energy Tower"
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
                    <motion.div
                        className={`${styles.bentoCard} ${styles.cardLarge}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className={styles.cardContent}>
                            <Award size={48} className={styles.cardIcon} style={{ color: '#0160A9' }} />
                            <h2 className={styles.cardTitle}>Il Best-Seller Winblu</h2>
                            <p className={styles.cardText}>
                                Disinvolti nei classici programmi di produttività individuale, agili nella navigazione web e ..sociali per natura, fedeli nella riproduzione dei contenuti audio-video, robusti e affidabili.
                            </p>
                            <div className={styles.cardReveal}>
                                <p className={styles.cardText}>
                                    I desktop Energy si contraddistinguono per la qualità delle prestazioni e sono perfetti sia per la casa che per l’ufficio.
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
                            <h3 className={styles.cardTitle}>Performance 12A Gen</h3>
                            <div className={styles.cardReveal}>
                                <p className={styles.cardTextSmall}>
                                    CPU Intel® Core™ di 12A gen con architettura ibrida per prestazioni, fluidità e efficienza mai visti prima (+50% produttività).
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className={`${styles.bentoCard} ${styles.cardMedium}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className={styles.cardContent}>
                            <Monitor size={48} className={styles.cardIcon} />
                            <h3 className={styles.cardTitle}>Core grafico eccellente</h3>
                            <p className={styles.cardText}>
                                Core grafico Intel® UHD 770/730 con supporto fino a 8k@60Hz HDR e media a 12-bit per contenuti multimediali avanzati.
                            </p>
                            <div className={styles.cardReveal}>
                                <p className={styles.cardText}>
                                    Per gli utilizzatori più esigenti, la linea Energy è equipaggiabile con GPU NVIDIA® GeForce® serie GTX.
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
                            <Wifi size={48} className={styles.cardIcon} />
                            <h3 className={styles.cardTitle}>Connettività a 360°</h3>
                            <p className={styles.cardText}>
                                Molteplicità di porte (USB 3.1/3.2, HDMI, DP, VGA) per essere il centro del tuo universo digitale.
                            </p>
                            <div className={styles.cardReveal}>
                                <p className={styles.cardText}>
                                    Massima espandibilità storage (SATA/NVMe M.2, Raid 0/1) e connettività Wireless veloce con Wi-Fi 6 + Bluetooth 5.0 opzionali (fino a 2.4Gbps).
                                </p>
                            </div>
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
                            <Shield size={48} className={styles.cardIcon} style={{ color: '#0160A9' }} />
                            <h2 className={styles.cardTitle}>Soddisfatti e Garantiti</h2>
                            <p className={styles.cardText}>
                                I Pc Energy sono garantiti 24 mesi con formula On Site, con la possibilità di estendere il servizio di ulteriori 12 mesi.
                            </p>
                            <div className={styles.cardReveal}>
                                <p className={styles.cardText}>
                                    Questa specifica formula prevede l’intervento a domicilio di un tecnico specializzato e altamente qualificato per la riparazione del dispositivo (escluse isole minori).
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
                            <Lock size={36} className={styles.cardIcon} />
                            <h3 className={styles.cardTitle}>Windows 11 Pro</h3>
                            <div className={styles.cardReveal}>
                                <p className={styles.cardTextSmall}>
                                    Winblu Energy suggerisce Windows 11 Professional per migliorare produttività, prestazioni e sicurezza.
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
                        { id: 'cpu', title: 'Processori', description: 'Intel® Core™ I3, i5, i7 serie Rocket Lake 11A Generazione o serie Alder Lake 12A Generazione', icon: <Cpu size={24} /> },
                        { id: 'chipset', title: 'Chipset', description: 'Intel® H510, H610, B660', icon: <Settings size={24} /> },
                        { id: 'memory', title: 'Memoria', description: 'RAM DDR4, frequenza fino a 3200Mhz, supporta massimo 128GB (specifiche in base al modello scelto)', icon: <HardDrive size={24} /> },
                        { id: 'storage', title: 'Archiviazione e lettori', description: 'Fino a n°2 HD/SSD SATA3 3.5”/2.5”, n°1 SSD M.2 NVME, Intel® Rapid Storage Technology, supporto RAID 0,1 (SATA), Masterizzatore DVD opzionale', icon: <HardDrive size={24} /> },
                        { id: 'video', title: 'Sezione Video', description: 'Intel® UHD 770/730/630, connettori D-SUB (VGA) e/o HDMI e/o DP, possibilità di scheda video aggiuntiva Nvidia® Geforce® serie GTX su slot PCIe x16', icon: <Monitor size={24} /> },
                        { id: 'audio', title: 'Sezione Audio', description: 'Realtek® 7.1 HD Audio CODEC, porte per cuffie e microfono anteriori', icon: <Speaker size={24} /> },
                        { id: 'connectivity', title: 'Connettività e Sicurezza', description: 'Lan Gigabit, Wi-Fi 6 + BT opzionale, TPM 2.0 integrato, Modulo TPM hw opzionale, n°2 USB3.1 frontali, n°2 USB3.2 e n°4 USB2.0 posteriori', icon: <Wifi size={24} /> },
                        { id: 'software', title: 'Compatibilità Software', description: 'Windows 11 e Windows 10 in versione Home, Professional o Educational per le Scuole', icon: <Settings size={24} /> },
                        { id: 'case', title: 'Case e Alimentatore', description: 'Micro-atx nero/silver, Alimentatore 350/450/500W (eff. 85% o 80Plus), 412,5x175x360mm 24L, Drive Bays vari, n°2 porte Audio e n°2 USB3.1 frontali, Kensington slot', icon: <Box size={24} /> },
                        { id: 'included', title: 'In Dotazione', description: 'Tastiera e Mouse USB (opzionali), Kit Drivers e Manuali Utente (dove previsto)', icon: <Box size={24} /> },
                        { id: 'energy', title: 'Efficienza Energetica', description: 'ETEC: 157.75 kWh/year, ETEC Max: 250.60 kWh/year (Config. rif: H610/i7-12700/32GB/SSD 512GB+1TB/450W/GT1030)', icon: <Activity size={24} /> },
                        { id: 'warranty', title: 'Garanzia', description: 'Garanzia di 24/36 mesi On Site con intervento a domicilio entro 48 ore lavorative (escluse isole minori)', icon: <Award size={24} /> },
                    ]} />
                </div>
            </section>

            <B2BCTASection />
            <Footer />
        </div>
    );
}
