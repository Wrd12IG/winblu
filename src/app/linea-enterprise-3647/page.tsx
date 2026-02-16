"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ShieldCheck, Cpu, Network, Settings, Server, Activity, Database, Shield, Zap, Monitor, HardDrive, Disc, Usb, Terminal, Box, Award } from 'lucide-react';
import styles from '../styles/product-bento.module.css';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SpecsCards from "@/components/SpecsCards";
import { SpecCategory } from "@/components/SpecsAccordion";
import B2BCTASection from "@/components/B2BCTASection";

const GridBackground = () => (
    <div className={styles.gridBg} />
);

export default function LineaEnterprise3647Page() {
    // Specs configuration moved directly to component

    return (
        <div className={styles.container}>
            <Navbar />
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className={styles.heroText}
                    >
                        <span className={styles.heroTag}>Enterprise Series</span>
                        <h1 className={styles.heroTitle}>
                            Winblu <span className={styles.gradient}>Enterprise 3647 Dual</span>
                        </h1>
                        <h2 className={styles.heroSubtitle}>Scalabilità e versatilità estreme</h2>
                        <div className={styles.heroDesc}>
                            <p>
                                Nessun compromesso per la serie Winblu Enterprise 3647: equipaggiate con le più recenti tecnologie dei microprocessori Intel Xeon Scalable di 2nd generazione, queste soluzioni supportano fino a un massimo di 56 core e 112 thread totali, e fino 3 Terabyte di memoria RAM ECC, per una estrema capacità computazionale complessiva.
                            </p>
                            <p>
                                La linea Enterprise 3647 offre le piattaforme ideali per integrare la macchina perfetta in grado di soddisfare esigenze professionali e enterprise, siano esse orientate all’analisi dei dati, al machine learning, all’elaborazione multimediale, oppure alla virtualizzazione, al web-hosting o all’High-Performance-Computing (HPC). I server Winblu Enterprise 3647 sono disponibili in formato 1 unità, 2 unità e 5 unità.
                            </p>
                        </div>
                        <div className={styles.heroCTAs}>
                            <Link href="/punti-vendita?tipo=fornitura" className={styles.ctaPrimary}>
                                Configura Soluzione
                            </Link>
                            <Link href="/punti-vendita" className={styles.ctaSecondary}>
                                Contatta Esperto
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
                                src="/products/enterprise-3647_hero_v4.png"
                                alt="Winblu Enterprise 3647"
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
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className={styles.cardImageContainer}>
                            <Image
                                src="/enterprise_3647-extracted/extracted_26.png"
                                alt="Server Enterprise Sicurezza"
                                fill
                                className={styles.cardImage}
                                style={{ objectFit: 'contain', padding: '1rem' }}
                                sizes="(max-width: 768px) 100vw, 66vw"
                            />
                            <div className={styles.cardOverlay} />
                        </div>
                        <div className={styles.cardContent}>
                            <ShieldCheck size={48} className={styles.cardIcon} />
                            <h2 className={styles.cardTitle}>La sicurezza di non fermarsi mai</h2>
                            <p className={styles.cardText}>
                                I sistemi Winblu Enterprise 3647 rispondono al meglio al bisogno di totale sicurezza e affidabilità, caratteristiche imprescindibili per un server.
                            </p>
                            <div className={styles.cardReveal}>
                                <p className={styles.cardText}>
                                    Basati su piattaforma Asus, azienda leader nel settore hardware e fra le più innovative in materia di ricerca e sviluppo, offrono soluzioni ingegnerizzate in modo ottimale e ricche di funzionalità intelligenti, con componentistica selezionata e certificata.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className={`${styles.bentoCard} ${styles.cardSmall} ${styles.cardHighlight}`}
                        style={{ background: 'linear-gradient(135deg, rgba(1, 96, 169, 0.08), rgba(1, 96, 169, 0.02))', borderColor: 'rgba(1, 96, 169, 0.2)', gridRow: 'span 2' }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <div className={styles.cardContent}>
                            <Settings size={36} className={styles.cardIcon} />
                            <h3 className={styles.cardTitle}>Gestione completa dell'infrastruttura IT</h3>
                            <div className={styles.cardReveal}>
                                <p className={styles.cardTextSmall}>
                                    Il modulo integrato ASMB9-iKVM supporta aggiornamento del BIOS da remoto, gestione completa delle ventole, KVM stand-alone, registrazione video e acquisizione BSOD, fornendo monitoraggio e diagnostica in modalità remota 24 ore su 24, anche se il sistema operativo è inattivo, attraverso un sistema user-friendly con interfaccia grafica basata sul web che funziona con tutti i principali browser.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className={`${styles.bentoCard} ${styles.cardMedium} ${styles.cardHighlight}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className={styles.cardContent}>
                            <Cpu size={48} className={styles.cardIcon} style={{ color: '#0160A9' }} />
                            <h3 className={styles.cardTitle}>Accelera i flussi di lavoro in applicazioni AEC e multimedia</h3>
                            <div className={styles.cardReveal}>
                                <p className={styles.cardTextSmall}>
                                    Winblu Enterprise 3647 5U ha il potenziale per accelerare i flussi di lavoro relativi ad architettura, ingegneria e costruzione (AEC), con supporto fino a un massimo di quattro GPU NVIDA® o AMD®. Questa caratteristica estrema consente di completare progetti BIM e CAD in tempi record e con la massima affidabilità e precisione. In ambito multimediale è possibile eseguire rendering di qualità cinematografica in tempo reale o modellazione fotorealistica di oggetti e ambienti complessi – con ombre, riflessi e rifrazioni istantanei.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className={`${styles.bentoCard} ${styles.cardMedium}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <div className={styles.cardContent}>
                            <Network size={48} className={styles.cardIcon} style={{ color: '#0160A9' }} />
                            <h3 className={styles.cardTitle}>Intel® Gigabit Ethernet</h3>
                            <p className={styles.cardText}>
                                I server Winblu Enterprise 3647 integrano schede di rete Intel® Ethernet di classe server con controller I350 (I210 sul modello 5U), con supporto al teaming.
                            </p>
                            <div className={styles.cardReveal}>
                                <p className={styles.cardText}>
                                    Estende la larghezza di banda della rete mentre la funzione di failover garantisce una connessione di rete ininterrotta. Tutte le soluzioni Winblu Enterprise 3647 offrono inoltre la possibilità di espandere il comparto network con il controller Asus PEB-10Gb/s. La soluzione perfetta per applicazioni di virtualizzazione che richiedono una rete ultraveloce e affidabile.
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
                        { id: 'cpu', title: 'Processori', description: 'Intel® Xeon® Scalable di 2a generazione “Cascade Lake” – fino a 28 core e 56 thread per socket', icon: <Cpu size={24} /> },
                        { id: 'chipset', title: 'Chipset', description: 'Intel® Lewisburg PCH C621 per i sistemi server/workstation a doppio processore socket 3647', icon: <Settings size={24} /> },
                        { id: 'memory', title: 'Memoria', description: 'RAM DDR4 2933/2666MHz RDIMM, LRDIMM e LR-DIMM 3DS di Classe Enterprise, fino a 3TB (secondo il modello)', icon: <Database size={24} /> },
                        { id: 'disk', title: 'Sottosistema Disco', description: 'Moduli M.2 NVMe e SATA da 250GB a 2TB SSD SATA Datacenter Enterprise per carico di lavoro misto 480/960/1920GB SSD NVMe U.2 Datacenter Enterprise per carico di lavoro misto 960/1920/3840GB Dischi meccanici SAS/SATA Enterprise 7200/15000rpm da 1TB a 6TB Espandibilità fino a 12+2+2 unità disco (solo su alcune versioni)', icon: <HardDrive size={24} /> },
                        { id: 'optical', title: 'Lettore Ottico', description: 'Masterizzatore DVD Dual Layer', icon: <Disc size={24} /> },
                        { id: 'controller', title: 'Controller', description: 'Intel® Rapid Storage Technology Enterprise (RSTe) Integrato – SATA RAID 0/1/5/10 (Windows e Linux) Intel® VROC (richiede chiave di attivazione Intel) – NVMe RAID 0/1/5/10 (Windows e Linux) SAS/SATA RAID hardware fino a 8 dischi con controller Asus Pike opzionale', icon: <Settings size={24} /> },
                        { id: 'video', title: 'Sezione Video', description: 'Scheda Video Aspeed AST2500 con 64MB VRAM integrata', icon: <Monitor size={24} /> },
                        { id: 'network', title: 'Schede di Rete', description: 'Schede di rete integrate Intel® Gigabit Dual LAN I350-BT2 (1U), I350-AM2 (2U), I210AT (5U) Porta RJ45 di Management dedicata (solo 2U e 1U) Opzionale Lan 10 Gigabit/s', icon: <Network size={24} /> },
                        { id: 'io', title: 'I/O', description: 'Ampia dotazione di interfacce I/O', icon: <Usb size={24} /> },
                        { id: 'software', title: 'Software', description: 'Microsoft® Windows Server 2016/2019, Linux Red Hat 7.3, SUSE Enterprise 12, CentOS 7.4, Ubuntu 16/17/18, ESXi 6.7 U3 (la compatibilità può essere soggetta a differenze secondo il modello).', icon: <Terminal size={24} /> },
                        { id: 'cabinet', title: 'Cabinet', description: 'Tower 5U Rackmountable (kit rack opzionale) con alimentatore ridondante 2x800W 80 Plus PLATINUM – 545 x 217,5 x 455 mm Rack 2U con alimentatore ridondante 2x800W 80 Plus PLATINUM – 615 x 444 x 88 mm Rack 1U con alimentatore ridondante 2x800W 80 Plus PLATINUM – 686 x 444 x 44 mm', icon: <Box size={24} /> },
                        { id: 'warranty', title: 'Garanzia', description: '24 mesi Carry-in Advanced Replacement estendibile con formula On Site a 24/36 mesi, intervento entro 24 ore lavorative (escluse isole minori)', icon: <Award size={24} /> },
                    ]} />
                </div>
            </section>

            <B2BCTASection />
            <Footer />
        </div>
    );
}
