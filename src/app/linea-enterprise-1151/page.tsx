"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ShieldCheck, Database, HardDrive, Network, Server, Shield, Activity, Lock, Cpu, Settings, Monitor, Disc, Usb, Terminal, Box, Award } from 'lucide-react';
import styles from '../styles/product-bento.module.css';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SpecsCards from "@/components/SpecsCards";
import { SpecCategory } from "@/components/SpecsAccordion";
import B2BCTASection from "@/components/B2BCTASection";

const GridBackground = () => (
    <div className={styles.gridBg} />
);

export default function LineaEnterprise1151Page() {
    // Specs configuration moved directly to component

    return (
        <div className={styles.container}>
            <Navbar />
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <motion.div
                        initial={{ opacity: 1, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className={styles.heroText}
                    >
                        <span className={styles.heroTag}>Enterprise Series</span>
                        <h1 className={styles.heroTitle}>
                            Winblu <span className={styles.gradient}>Enterprise 1151</span>
                        </h1>
                        <h2 className={styles.heroSubtitle}>Soluzioni ottimizzate per il carico di lavoro</h2>
                        <div className={styles.heroDesc}>
                            <p>
                                I server Winblu della linea Enterprise 1151 supportano le più recenti tecnologie con le CPU Intel® Xeon® E, 1.36x più veloci rispetto alla generazione precedente e funzionanti con TDP massimo di 95W per prestazioni estreme. I quattro slot di memoria supportano fino a 128 GB di DDR4 ECC 2666MHz per elaborazioni a uso intensivo di RAM.
                            </p>
                            <p>
                                I server Winblu Enterprise 1151 sono disponibili in formato 1 unità, 4 unità e 5 unità.
                            </p>
                        </div>
                        <div className={styles.heroCTAs}>
                            <Link href="/punti-vendita?tipo=fornitura" className={styles.ctaPrimary}>
                                Configura Server
                            </Link>
                            <Link href="/punti-vendita" className={styles.ctaSecondary}>
                                Contatta Esperto
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 1, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className={styles.heroVisual}
                    >
                        <div className={styles.heroImageContainer}>
                            <Image
                                src="/products/enterprise-1151_hero_v4.png"
                                alt="Winblu Enterprise 1151"
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
                        className={`${styles.bentoCard} ${styles.cardLarge} ${styles.cardWithImage}`}
                        initial={{ opacity: 1, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className={styles.cardImageContainer}>
                            <Image
                                src="/products/enterprise-1151/extracted_24.png"
                                alt="Sicurezza Enterprise"
                                fill
                                className={styles.cardImage}
                                sizes="(max-width: 768px) 100vw, 66vw"
                            />
                            <div className={styles.cardOverlay} />
                        </div>
                        <div className={styles.cardContent}>
                            <ShieldCheck size={48} className={styles.cardIcon} />
                            <h2 className={styles.cardTitle}>La sicurezza di non fermarsi mai</h2>
                            <p className={styles.cardText}>
                                I sistemi della linea Enterprise 1151 rispondono al meglio al bisogno di totale sicurezza e affidabilità, caratteristiche imprescindibili per un server.
                            </p>
                            <div className={styles.cardReveal}>
                                <p className={styles.cardText}>
                                    Basati su piattaforma Asus, azienda leader nel settore hardware e fra le più innovative in materia di ricerca e sviluppo, offrono soluzioni ingegnerizzate in modo ottimale e ricche di funzionalità intelligenti, con componentistica selezionata e certificata.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className={`${styles.bentoCard} ${styles.cardSmall}`}
                        style={{ gridRow: 'span 2' }}
                        initial={{ opacity: 1, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <div className={styles.cardContent}>
                            <Network size={36} className={styles.cardIcon} style={{ color: '#0160A9' }} />
                            <h3 className={styles.cardTitle}>Intel Gigabit Ethernet</h3>
                            <div className={styles.cardReveal}>
                                <p className={styles.cardTextSmall}>
                                    Da due a quattro connettori (secondo il modello) Intel® Ethernet di classe server con controller I210 e I219, e supporto teaming che estende la larghezza di banda della rete mentre la funzione di failover garantisce una connessione di rete ininterrotta. La soluzione perfetta per applicazioni di virtualizzazione che richiedono una rete ultraveloce e affidabile.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className={`${styles.bentoCard} ${styles.cardMedium} ${styles.cardHighlight}`}
                        initial={{ opacity: 1, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className={styles.cardContent}>
                            <Database size={48} className={styles.cardIcon} style={{ color: '#0160A9' }} />
                            <h3 className={styles.cardTitle}>Flessibilità di espansione per una migliore gestione dello storage</h3>
                            <p className={styles.cardText}>
                                La linea Enterprise 1151 a 5 unità tower convertibile e 1 unità rack, ospitano quattro bay da 2,5”/3,5″ sostituibili a caldo.
                            </p>
                            <div className={styles.cardReveal}>
                                <p className={styles.cardText}>
                                    La versione 5U è inoltre ulteriormente espandibile fino a otto bay per una maggiore capacità di archiviazione opzionale. Due slot M.2 ospitano SSD fino al formato 22110 con supporto al boot del sistema operativo e larghezza di banda PCIe Gen3 – 5,3 volte più veloce rispetto a SATA III da 6 Gb/s – per velocità di avvio più elevate.
                                </p>
                            </div>
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
                            <HardDrive size={48} className={styles.cardIcon} style={{ color: '#0160A9' }} />
                            <h3 className={styles.cardTitle}>Massimizzazione delle prestazioni I/O e della protezione dei dati</h3>
                            <p className={styles.cardText}>
                                La linea Enterprise 1151 a 5 unità tower convertibile e 1 unità rack supportano i controller della serie ASUS PIKE II 3000, la più recente soluzione di storage aziendale.
                            </p>
                            <div className={styles.cardReveal}>
                                <p className={styles.cardText}>
                                    Con supporto per l’archiviazione SAS a 12 Gbit/s e protezione dei dati RAID integrata. I controller hardware ASUS PIKE sono una grande opzione di aggiornamento con le quali è possibile immediatamente migliorare la capacità di memorizzazione e le prestazioni dei server Enterprise 1151.
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
                        { id: 'cpu', title: 'Processori', description: 'Intel Xeon-E 21xx/22xx e Intel® Core™ i3/i5/i7 di 9a generazione “Coffee Lake”', icon: <Cpu size={24} /> },
                        { id: 'chipset', title: 'Chipset', description: 'Intel® C242 per i sistemi server a singolo processore socket 1151 (Tower 4U e Rack 1U) Intel® C246 per i sistemi server a singolo processore socket 1151 (Tower 5U)', icon: <Settings size={24} /> },
                        { id: 'memory', title: 'Memoria', description: 'RAM DDR4 ECC 2666MHz di Classe Enterprise', icon: <Database size={24} /> },
                        { id: 'disk', title: 'Sottosistema Disco', description: 'Moduli M.2 NVMe e SATA da 250GB a 2TB SSD SATA Datacenter Enterprise per carico di lavoro misto 480/960/1920GB SSD NVMe U.2 Datacenter Enterprise per carico di lavoro misto 960/1920/3840GB Dischi meccanici SAS/SATA Enterprise 7200/15000rpm da 1TB a 6TB Espandibilità fino a 12+2+2 unità disco (solo su alcune versioni)', icon: <HardDrive size={24} /> },
                        { id: 'optical', title: 'Lettore Ottico', description: 'Masterizzatore DVD Dual Layer', icon: <Disc size={24} /> },
                        { id: 'controller', title: 'Controller', description: 'Intel® Rapid Storage Technology Enterprise (RSTe) Integrato – SATA RAID 0/1/5/10 (Windows e Linux) Intel® VROC (richiede chiave di attivazione Intel) – NVMe RAID 0/1/5/10 (Windows e Linux) SAS/SATA RAID hardware fino a 8 dischi con controller Asus Pike opzionale', icon: <Settings size={24} /> },
                        { id: 'video', title: 'Sezione Video', description: 'Scheda Video Aspeed AST2500 con 64MB VRAM integrata', icon: <Monitor size={24} /> },
                        { id: 'network', title: 'Schede di Rete', description: 'Da 2 a 4 schede di rete (secondo il modello) integrate Intel® Gigabit LAN I210AT e i219-LM Porta RJ45 di Management dedicata (solo Tower 5U e Rack 1U – richiede modulo ASMB9-iKVM opzionale)', icon: <Network size={24} /> },
                        { id: 'io', title: 'I/O', description: 'Ampia dotazione di interfacce I/O', icon: <Usb size={24} /> },
                        { id: 'software', title: 'Software', description: 'Microsoft® Windows Server 2016/2019, Linux Red Hat 7.x, SUSE Enterprise 12 SP3, CentOS 7.4, Ubuntu 16/17/18, ESXi 6.7 U3 (la compatibilità può essere soggetta a differenze secondo il modello).', icon: <Terminal size={24} /> },
                        { id: 'cabinet', title: 'Cabinet', description: 'Tower 4U con alimentatore 300W 80 Plus BRONZE – 435 x 190 x 423 mm Tower 5U Rackmountable con alimentatore 500W 80 Plus GOLD – 545 x 217,5 x 455 mm Rack 1U con alimentatore ridondante 2x450W 80 Plus GOLD – 615 x 444 x 44 mm', icon: <Box size={24} /> },
                        { id: 'warranty', title: 'Garanzia', description: '24 mesi Carry-in Advanced Replacement estendibile con formula On Site a 24/36 mesi, intervento entro 24 ore lavorative (escluse isole minori)', icon: <Award size={24} /> },
                    ]} />
                </div>
            </section>

            <B2BCTASection />
            <Footer />
        </div>
    );
}
