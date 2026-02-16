"use client";

import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/product-bento.module.css';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SpecsCards from "@/components/SpecsCards";
import B2BCTASection from "@/components/B2BCTASection";
import ScrollIndicator from "@/components/ScrollIndicator";
import { motion } from 'framer-motion';
import { Monitor, Cpu, Box, Zap, Share2, Layers, HardDrive, Video, Settings, ShieldCheck, Package, Sparkles } from 'lucide-react';

const GridBackground = () => (
    <div className={styles.gridBg} />
);

export default function LineaEVisionStandardPage() {
    return (
        <div className={styles.container}>
            <Navbar />
            <section className={styles.hero}>
                <GridBackground />
                <div className={styles.heroContent}>
                    <motion.div
                        className={styles.heroText}
                        initial={{ opacity: 1, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className={styles.heroTag}>All-In-One Standard</span>
                        <h1 className={styles.heroTitle}>
                            Winblu <span className={styles.gradient}>eVision Standard</span>
                        </h1>
                        <h2 className={styles.heroSubtitle} style={{ fontSize: '1.5rem', fontWeight: '600', color: '#fff', marginBottom: '1rem' }}>
                            Alta qualità ed eleganza: bello da vedere, facile da utilizzare.
                        </h2>
                        <p className={styles.heroDesc}>
                            Per la più accattivante proposta Winblu abbiamo scelto un nome che racchiudesse tutta la potenza della tecnologia e riservasse al tempo stesso uno sguardo al futuro. eVision è un’innovativa soluzione che abbina gli elevati livelli prestazionali dei PC Winblu con l’alta qualità di uno schermo Full HD integrato. Risultato? Un computer All-In-One performante, ergonomico ed elegante, perfetto per rendere prestigiosa la tua scrivania, la tua zona entertainment di casa o come soluzione tutta-in-uno particolarmente adatta per specifiche ambientazioni, ad esempio negozi, ristoranti o situazioni che richiedono prodotti space-saving ovvero a minimo ingombro.
                        </p>
                        <div className={styles.heroCTAs}>
                            <Link href="/punti-vendita" className={styles.ctaPrimary}>
                                Configura Ora
                            </Link>
                            <Link href="/linea-evision" className={styles.ctaSecondary}>
                                Torna a eVision
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        className={styles.heroVisual}
                        initial={{ opacity: 1, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className={styles.heroImageContainer}>
                            <Image
                                src="/assets/evision-standard-hero.jpg"
                                alt="Winblu eVision Standard"
                                fill
                                className={styles.heroProductImage}
                                priority
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    </motion.div>
                </div>
                <ScrollIndicator />
            </section>

            {/* Performance Section */}
            <section className={styles.bentoSection}>
                <div className={styles.bentoGrid}>
                    {/* Row 1: Performance (8) + Design (4) */}
                    <motion.div
                        className={`${styles.bentoCard} ${styles.cardLarge}`}
                        initial={{ opacity: 1, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className={styles.cardContent}>
                            <Cpu size={48} className={styles.cardIcon} />
                            <h3 className={styles.cardTitle}>Prestazioni al top di gamma</h3>
                            <h4 style={{ color: '#00f0ff', marginBottom: '1rem', fontWeight: '600' }}>Con i processori Intel® Core™ di 14A generazione</h4>
                            <p className={styles.cardText}>
                                Winblu LCDPC eVision è capacità computazionale di primo livello, ancora più potente e versatile, grazie all’intera gamma dei processori Intel® Core™ fino alla 14A generazione versione dekstop – i3, i5 e i7; altrettanto completo il resto dell’architettura hardware, con possibilità di ospitare fino a 64 GB di RAM DDR4, un Solid State Disk M.2 NVMe ultra veloce, più un ulteriore disco Sata3 – tradizionale o allo stato solido. Ottima anche la connettività con Gigabit LAN, Wifi, Bluetooth e lettore SD card integrati.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        className={`${styles.bentoCard} ${styles.cardSmall}`}
                        initial={{ opacity: 1, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <div className={styles.cardContent}>
                            <Package size={36} className={styles.cardIcon} />
                            <h3 className={styles.cardTitle}>Eleganza e Compattezza</h3>
                            <p className={styles.cardTextSmall}>
                                Un design unico ed esclusivo, finalizzato alla massima ergonomia. eVision è la soluzione space-saving perfetta per negozi, ristoranti e ambienti che richiedono il minimo ingombro senza rinunciare allo stile.
                            </p>
                        </div>
                    </motion.div>

                    {/* Row 2: Image (6) + Display Text (6) */}
                    <motion.div
                        className={`${styles.bentoCard} ${styles.cardMedium} ${styles.cardWithImage}`}
                        initial={{ opacity: 1, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className={styles.cardImageContainer}>
                            <Image
                                src="/assets/evision-standard-hero.jpg"
                                alt="Winblu eVision Display"
                                fill
                                className={styles.cardImage}
                                sizes="(max-width: 768px) 100vw, 50vw"
                                style={{ objectFit: 'cover' }}
                            />
                            <div className={styles.cardOverlay} />
                        </div>
                    </motion.div>

                    <motion.div
                        className={`${styles.bentoCard} ${styles.cardMedium}`}
                        initial={{ opacity: 1, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <div className={styles.cardContent}>
                            <Monitor size={48} className={styles.cardIcon} />
                            <h3 className={styles.cardTitle}>Parola d’ordine: nitidezza.</h3>
                            <h4 style={{ color: '#00f0ff', marginBottom: '1rem', fontWeight: '600' }}>Grazie al display Full HD e WEBCAM 5MP</h4>
                            <p className={styles.cardText}>
                                Come descrivere la combo LCDPC in soli due aggettivi? Winblu eVision è tutta la compattezza di una piattaforma hardware che si esprime al meglio attraverso la nitidezza di un display Full HD integrato. La soluzione eVision è dotata di uno schermo da 23.8” o 27” LED retroilluminato con risoluzione 1920×1080, in grado di restituire immagini nitide e brillanti. La linea eVision standard è disponibile in 2 colori a scelta, bianco/argento e nero.
                            </p>
                            <div className={styles.cardReveal} style={{ maxHeight: 'none', opacity: 1, marginTop: '1rem' }}>
                                <p className={styles.cardTextSmall}>
                                    La grafica integrata Intel ® UHD (in base alla CPU scelta), con connettore HDMI, permette la gestione simultanea di un ulteriore monitor. Completano il quadro un sistema audio con altoparlanti 2x2W, luce di cortesia, webcam 5MP pull-up, microfono e porta seriale/COM, per il massimo della multimedialità.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Specs Cards Section - Full 12 Specs */}
            <section style={{ padding: '6rem 2rem', background: 'rgba(0,0,0,0.2)' }}>
                <div style={{ maxWidth: '1600px', margin: '0 auto' }}>
                    <motion.h2
                        initial={{ opacity: 1, y: 20 }}
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
                        { id: 'display', title: 'Display', description: '23.8" Full HD (1920x1080) LED IPS, 178° viewing angle', icon: <Monitor size={24} /> },
                        { id: 'cpu', title: 'Processore', description: 'Supporto Intel® Core™ i3 / i5 / i7 12ª/13ª Gen', icon: <Cpu size={24} /> },
                        { id: 'ram', title: 'Memoria RAM', description: 'Supporto DDR4 SO-DIMM fino a 64GB', icon: <Layers size={24} /> },
                        { id: 'ssd', title: 'Storage SSD', description: 'Slot M.2 NVMe PCIe Gen3/Gen4 ultrarapido', icon: <HardDrive size={24} /> },
                        { id: 'hdd', title: 'Storage Secondario', description: 'Slot 2.5" SATA3 per HDD/SSD aggiuntivo', icon: <Box size={24} /> },
                        { id: 'graphics', title: 'Grafica', description: 'Intel® UHD Graphics 730/770 Integrata', icon: <Zap size={24} /> },
                        { id: 'connectivity', title: 'Networking', description: 'Wi-Fi 6, Bluetooth 5.2, LAN Gigabit', icon: <Share2 size={24} /> },
                        { id: 'webcam', title: 'Multimedia', description: 'Webcam 5MP Pop-up + Mic + Speaker Stereo', icon: <Video size={24} /> },
                        { id: 'ports', title: 'Output Video', description: 'HDMI 2.0 + VGA (Supporto doppio monitor)', icon: <Monitor size={24} /> },
                        { id: 'io', title: 'Porte I/O', description: '4x USB 3.2, 2x USB 2.0, Card Reader SD', icon: <Settings size={24} /> },
                        { id: 'security', title: 'Sicurezza', description: 'TPM 2.0 Hardware, Kensington Connect, Drive Encryption', icon: <ShieldCheck size={24} /> },
                        { id: 'os', title: 'Sistema Operativo', description: 'Windows 11 Pro con licenza ufficiale', icon: <Cpu size={24} /> },
                    ]} />
                </div>
            </section>

            <B2BCTASection />
            <Footer />
        </div>
    );
}
