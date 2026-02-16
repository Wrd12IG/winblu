"use client";

import Link from 'next/link';
import Image from 'next/image';
import styles from '../linea-e-motion/emotion-bento.module.css';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SpecsCards from "@/components/SpecsCards";
import B2BCTASection from "@/components/B2BCTASection";
import { motion } from 'framer-motion';
import { Monitor, Cpu, MousePointerClick, Zap, Share2, Layers, HardDrive, Video, Settings, ShieldCheck, Award, Lock, Package, Sparkles, Network } from 'lucide-react';

const GridBackground = () => (
    <div className={styles.gridBg} />
);

export default function LineaEVisionMTouchPage() {
    return (
        <div className={styles.container}>
            <Navbar />

            {/* Hero Section */}
            <section className={styles.hero}>
                <GridBackground />
                <div className={styles.heroContent}>
                    <motion.div
                        className={styles.heroText}
                        initial={{ opacity: 1, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className={styles.heroTag}>All-In-One M-TOUCH</span>
                        <h1 className={styles.heroTitle}>
                            Winblu <span className={styles.gradient}>eVision M-TOUCH</span>
                        </h1>
                        <p className={styles.heroDesc}>
                            eVision è un'innovativa soluzione che abbina gli elevati livelli prestazionali dei PC Winblu con l'alta qualità di uno schermo Full HD integrato, ora anche nella versione TOUCH, in grado di restituire immagini nitide e brillanti. Un computer con prestazioni ad hoc e linee pulite, perfette per abbellire ogni ambiente con il minimo ingombro.
                        </p>
                        <div className={styles.heroCTAs}>
                            <Link href="/punti-vendita?tipo=fornitura" className={styles.ctaPrimary}>
                                Richiedi Preventivo
                            </Link>
                            <Link href="/punti-vendita" className={styles.ctaSecondary}>
                                Trova Rivenditore
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
                                src="/assets/evision-touch-hero.jpg"
                                alt="Winblu eVision M-TOUCH"
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
                    {/* Row 1: Touch Technology (8) + Design (4) */}
                    <motion.div
                        className={`${styles.bentoCard} ${styles.cardLarge} ${styles.cardWithImage}`}
                        initial={{ opacity: 1, y: 0 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className={styles.cardImageContainer}>
                            <Image
                                src="/assets/evision-touch-hero.jpg"
                                alt="eVision M-TOUCH Display"
                                fill
                                className={styles.cardImage}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 50vw"
                            />
                            <div className={styles.cardOverlay} />
                        </div>
                        <div className={styles.cardContent}>
                            <MousePointerClick size={48} className={styles.cardIcon} />
                            <h2 className={styles.cardTitle}>Tecnologia Touch Capacitiva Avanzata</h2>
                            <p className={styles.cardText}>
                                La versione M-TOUCH di Winblu eVision integra un display touchscreen capacitivo multipoint a <strong>10 punti di contatto simultanei</strong>, per un'interazione fluida, precisa e intuitiva con il sistema operativo e le applicazioni.
                            </p>
                            <div className={styles.cardReveal}>
                                <p className={styles.cardText}>
                                    Perfetto per applicazioni professionali, punti vendita, presentazioni interattive e ambienti dove l'interazione touch è fondamentale. Il pannello touchscreen garantisce una risposta immediata e precisa, ideale per Windows 11 e applicazioni touch-optimized. La tecnologia capacitiva assicura una durata superiore rispetto ai tradizionali touch resistivi.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className={`${styles.bentoCard} ${styles.cardSmall}`}
                        initial={{ opacity: 1, y: 0 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <div className={styles.cardContent}>
                            <Package size={36} className={styles.cardIcon} />
                            <h3 className={styles.cardTitle}>Design All-in-One</h3>
                            <div className={styles.cardReveal}>
                                <p className={styles.cardTextSmall}>
                                    Un design elegante e compatto che racchiude tutta la potenza di un PC desktop in un'unica soluzione space-saving. Perfetto per uffici, negozi, reception e ambienti dove lo spazio è prezioso. Disponibile in versione bianco/argento e nero.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Row 2: Performance (6) + Display (6) */}
                    <motion.div
                        className={`${styles.bentoCard} ${styles.cardMedium}`}
                        initial={{ opacity: 1, y: 0 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className={styles.cardContent}>
                            <div className={styles.gifIconContainer}>
                                <Cpu size={64} className={styles.iconCyan} style={{ color: '#0160A9', filter: 'drop-shadow(0 0 10px rgba(1,96,169,0.5))' }} />
                            </div>
                            <h3 className={styles.cardTitle}>Prestazioni Enterprise</h3>
                            <p className={styles.cardText}>
                                Winblu eVision M-TOUCH è equipaggiato con processori Intel® Core™ di 12ª, 13ª e 14ª generazione - i3, i5 e i7 - per garantire prestazioni professionali in ogni contesto d'uso.
                            </p>
                            <div className={styles.cardReveal}>
                                <p className={styles.cardText}>
                                    Architettura hardware completa con supporto fino a 64 GB di RAM DDR4, Solid State Disk M.2 NVMe ultra veloce, più un ulteriore disco SATA3. Connettività totale con Gigabit LAN, WiFi 6, Bluetooth 5.2 e lettore SD card integrato. Una piattaforma bilanciata ed espandibile per ogni esigenza professionale.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className={`${styles.bentoCard} ${styles.cardMedium}`}
                        initial={{ opacity: 1, y: 0 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <div className={styles.cardContent}>
                            <Monitor size={48} className={styles.cardIcon} />
                            <h3 className={styles.cardTitle}>Display Full HD Brillante</h3>
                            <p className={styles.cardText}>
                                Schermo da <strong>23.8"</strong> LED retroilluminato con risoluzione <strong>1920×1080 Full HD</strong>, pannello IPS per angoli di visione a 178° e colori vividi e accurati.
                            </p>
                            <div className={styles.cardReveal}>
                                <p className={styles.cardText}>
                                    La grafica integrata Intel® UHD (in base alla CPU scelta) permette la gestione simultanea di un monitor esterno tramite connettore HDMI o VGA. Sistema audio con altoparlanti 2x2W, webcam 5MP pull-up integrata con microfono, per videoconferenze di qualità professionale.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Row 3: Windows 11 (8) + Connectivity (4) */}
                    <motion.div
                        className={`${styles.bentoCard} ${styles.cardLarge} ${styles.cardHighlight}`}
                        initial={{ opacity: 1, y: 0 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <div className={styles.cardContent}>
                            <Lock size={48} className={styles.cardIcon} />
                            <h2 className={styles.cardTitle}>Windows 11 Pro: Sinonimo di Business</h2>
                            <p className={styles.cardText}>
                                Il sistema operativo ideale per gestire al meglio il proprio computer in contesto lavorativo. Progettato per migliorare produttività, prestazioni e sicurezza.
                            </p>
                            <ul className={styles.featureList} style={{ marginTop: '1rem', gridTemplateColumns: '1fr 1fr' }}>
                                <li>Gestione dominio aziendale</li>
                                <li>BitLocker encryption</li>
                                <li>Remote Desktop</li>
                                <li>Hyper-V virtualization</li>
                            </ul>
                        </div>
                    </motion.div>

                    <motion.div
                        className={`${styles.bentoCard} ${styles.cardSmall} ${styles.cardIconFocus}`}
                        initial={{ opacity: 1, y: 0 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        <div className={styles.cardIconLarge}>
                            <Network size={100} className={styles.iconCyan} style={{ color: '#0160A9', filter: 'drop-shadow(0 0 15px rgba(1,96,169,0.5))' }} />
                        </div>
                        <div className={styles.cardContent}>
                            <h3 className={styles.cardTitle}>Connettività Totale</h3>
                            <p className={styles.cardTextSmall}>
                                WiFi 6, Bluetooth 5.2, Gigabit LAN integrata, multiple porte USB 3.2 e 2.0, lettore SD card, uscite HDMI e VGA per doppio monitor. Tutto ciò che serve per rimanere connessi.
                            </p>
                        </div>
                    </motion.div>

                    {/* Row 4: Security (6) + Warranty (6) */}
                    <motion.div
                        className={`${styles.bentoCard} ${styles.cardMedium}`}
                        initial={{ opacity: 1, y: 0 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <div className={styles.cardContent}>
                            <ShieldCheck size={40} className={styles.cardIcon} />
                            <h3 className={styles.cardTitle}>Sicurezza Avanzata</h3>
                            <p className={styles.cardText}>
                                Protocollo hardware Trusted Platform Module (TPM) 2.0 integrato per crittografia dati e autenticazione sicura. Slot Kensington per sicurezza fisica del dispositivo.
                            </p>
                            <div className={styles.cardReveal}>
                                <p className={styles.cardText}>
                                    Compatibile con tutte le funzionalità di sicurezza enterprise di Windows 11 Pro, incluso BitLocker drive encryption e Windows Hello. Porta seriale COM opzionale per applicazioni legacy e POS.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className={`${styles.bentoCard} ${styles.cardMedium} ${styles.cardHighlight}`}
                        initial={{ opacity: 1, y: 0 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                    >
                        <div className={styles.cardContent}>
                            <Award size={40} className={styles.cardIcon} />
                            <h3 className={styles.cardTitle}>Garanzia Professionale</h3>
                            <p className={styles.cardText}>
                                Garanzia <strong>24 mesi</strong> con supporto tecnico diretto dal produttore italiano Winblu.
                            </p>
                            <div className={styles.cardReveal}>
                                <p className={styles.cardText}>
                                    Assistenza dedicata per configurazioni business e possibilità di estensione garanzia. Supporto tecnico specializzato per installazioni multi-unità e ambienti professionali.
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
                        initial={{ opacity: 1, y: 0 }}
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
                    <SpecsCards specs={[
                        { id: 'display', title: 'Display Touch', description: '23.8" Full HD (1920x1080) Multitouch Capacitivo 10 Punti', icon: <MousePointerClick size={24} /> },
                        { id: 'cpu', title: 'Processore', description: 'Supporto Intel® Core™ i3 / i5 / i7 12ª/13ª/14ª Gen', icon: <Cpu size={24} /> },
                        { id: 'ram', title: 'Memoria RAM', description: 'Supporto DDR4 SO-DIMM fino a 64GB', icon: <Layers size={24} /> },
                        { id: 'ssd', title: 'Storage SSD', description: 'Slot M.2 NVMe PCIe Gen3/Gen4 ultrarapido', icon: <HardDrive size={24} /> },
                        { id: 'hdd', title: 'Storage Secondario', description: 'Slot 2.5" SATA3 per HDD/SSD aggiuntivo', icon: <Package size={24} /> },
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
