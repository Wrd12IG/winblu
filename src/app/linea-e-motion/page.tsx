"use client";

import styles from './emotion-bento.module.css';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SpecsCards from "@/components/SpecsCards";
import { SpecCategory } from "@/components/SpecsAccordion";
import B2BCTASection from "@/components/B2BCTASection";
import { motion } from 'framer-motion';
import { Zap, Monitor, HardDrive, Wifi, Shield, Award, Cpu, Keyboard, Fingerprint, Usb, Package, Battery, Settings, TrendingUp, Lock, Sparkles, Network } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const GridBackground = () => (
    <div className={styles.gridBg} />
);

export default function LineaEMotionPage() {
    const technicalSpecs: SpecCategory[] = [
        {
            id: 'cpu',
            title: 'Processore',
            icon: <Cpu size={24} />,
            items: [
                { label: 'Modello', value: 'Intel® Core™ i5-1235U (Dodicesima Generazione)' },
                { label: 'Core/Thread', value: '10 Core / 12 Thread' },
                { label: 'Frequenza Base', value: 'P-core: 1.3 GHz, E-core: 0.9 GHz' },
                { label: 'Turbo Boost', value: 'Fino a 4.4 GHz' },
                { label: 'Cache', value: '12 MB Intel® Smart Cache' },
            ]
        },
        {
            id: 'display',
            title: 'Display e Webcam',
            icon: <Monitor size={24} />,
            items: [
                { label: 'Dimensioni', value: '15.6" IPS Full HD' },
                { label: 'Risoluzione', value: '1920 x 1080 pixel' },
                { label: 'Tipo Pannello', value: 'IPS Antiriflesso' },
                { label: 'Webcam', value: '2 MP integrata' },
                { label: 'Scheda Grafica', value: 'Intel® Iris® Xe Graphics' },
            ]
        },
        {
            id: 'memory',
            title: 'Memoria RAM',
            icon: <HardDrive size={24} />,
            items: [
                { label: 'Tipo', value: 'DDR4 SO-DIMM 3200 MHz' },
                { label: 'Slot', value: 'n°2 slot disponibili' },
                { label: 'Espandibilità', value: 'Fino a 64GB' },
                { label: 'Dual Channel', value: 'Supportato' },
            ]
        },
        {
            id: 'storage',
            title: 'Archiviazione e Lettori',
            icon: <HardDrive size={24} />,
            items: [
                { label: 'SSD Primario', value: 'M.2 2280 (single sided) PCIe 4.0 NVMe/SATA3' },
                { label: 'Storage Secondario', value: 'Alloggiamento 2.5" SATA3 (HDD/SSD)' },
                { label: 'Card Reader', value: 'Lettore SD integrato' },
            ]
        },
        {
            id: 'connectivity',
            title: 'Connettività e Audio',
            icon: <Wifi size={24} />,
            items: [
                { label: 'WiFi', value: 'Intel® 9462/9560, 802.11ac (Dual Band)' },
                { label: 'Bluetooth', value: 'Bluetooth 5.1' },
                { label: 'Ethernet', value: 'Realtek® Gigabit RJ45' },
                { label: 'Audio', value: 'Altoparlanti 2×8Ω 1W con codec Realtek®' },
            ]
        },
        {
            id: 'keyboard',
            title: 'Tastiera e Touchpad',
            icon: <Keyboard size={24} />,
            items: [
                { label: 'Tastiera', value: 'Full size retroilluminata con tastierino numerico' },
                { label: 'Layout', value: 'Italiano QWERTY' },
                { label: 'Retroilluminazione', value: 'Sì, regolabile' },
                { label: 'Touchpad', value: 'Ampio touchpad multi-touch' },
            ]
        },
        {
            id: 'fingerprint',
            title: 'Lettore Impronte Digitali',
            icon: <Fingerprint size={24} />,
            items: [
                { label: 'Tecnologia', value: 'Integrato nel Touchpad' },
                { label: 'Compatibilità', value: 'Windows Hello' },
                { label: 'Sicurezza', value: 'Autenticazione biometrica veloce' },
            ]
        },
        {
            id: 'interfaces',
            title: 'Interfacce e Sicurezza',
            icon: <Usb size={24} />,
            items: [
                { label: 'USB 3.2 Gen1', value: '4 × Tipo A' },
                { label: 'USB Type-C', value: '1 × USB 3.2 Gen1 con Power Delivery e DisplayPort' },
                { label: 'HDMI', value: '1 × HDMI (fino a 4K@30Hz)' },
                { label: 'Ethernet', value: '1 × RJ45 Gigabit' },
                { label: 'Audio', value: '1 × Combo Cuffie/Microfono' },
                { label: 'Sicurezza', value: 'TPM 2.0, Kensington Lock' },
            ]
        },
        {
            id: 'software',
            title: 'Compatibilità Software',
            icon: <Settings size={24} />,
            items: [
                { label: 'Sistema Operativo', value: 'Windows 11 Professional / Home' },
                { label: 'Versione Education', value: 'Disponibile per Scuole' },
                { label: 'Driver', value: 'Pre-installati e ottimizzati' },
            ]
        },
        {
            id: 'dimensions',
            title: 'Dimensioni e Peso',
            icon: <Package size={24} />,
            items: [
                { label: 'Dimensioni', value: '375 × 243 × 22 mm' },
                { label: 'Peso', value: 'Da 1.8 kg' },
                { label: 'Colore', value: 'Silver' },
                { label: 'Design', value: 'Clamshell premium' },
            ]
        },
        {
            id: 'battery',
            title: 'Batteria e Alimentazione',
            icon: <Battery size={24} />,
            items: [
                { label: 'Tipo Batteria', value: 'Polimeri di Litio 45.6 Wh (7.6V 6000mAh)' },
                { label: 'Adattatore', value: '65W incluso' },
                { label: 'Autonomia', value: 'Fino a 8 ore (uso misto)' },
                { label: 'Ricarica USB-C', value: 'Power Delivery supportato' },
            ]
        },
        {
            id: 'warranty',
            title: 'Garanzia',
            icon: <Award size={24} />,
            items: [
                { label: 'Durata', value: '24 Mesi Pick up & Return' },
                { label: 'Modalità', value: 'Ritiro e riparazione presso fabbrica Winblu' },
                { label: 'Copertura Batteria', value: '6 mesi' },
                { label: 'Copertura Accessori', value: '6 mesi' },
            ]
        },
    ];

    return (
        <div className={styles.container}>

            {/* Hero Section - Full Width */}
            {/* Hero Section - 2 Column Layout */}
            <section className={styles.hero}>
                <GridBackground />
                <div className={styles.heroContent}>
                    <motion.div
                        initial={{ opacity: 1, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className={styles.heroText}
                    >
                        <span className={styles.heroTag}>Progettato per l'Eccellenza</span>
                        <h1 className={styles.heroTitle}>
                            Winblu <span className={styles.gradient}>e-motion</span>
                        </h1>
                        <p className={styles.heroDesc}>
                            Ancora più potenti e funzionali, più eleganti e portatili, più performanti e vantaggiosi: si rinnova alla grande la linea notebook Winblu e-Motion, con una soluzione mainstream dalle prestazioni potenziate e dal design ancora più stiloso ed ergonomico.
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
                        initial={{ opacity: 1, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className={styles.heroVisual}
                    >
                        <div className={styles.heroImageContainer}>
                            <Image
                                src="/assets/emotion/hero-product-v3.png"
                                alt="Winblu e-motion Laptop"
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
                    {/* Row 1: Overview (8) + Design (4) */}
                    <motion.div
                        className={`${styles.bentoCard} ${styles.cardLarge} ${styles.cardWithImage}`}
                        initial={{ opacity: 1, y: 0 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className={styles.cardImageContainer}>
                            <Image
                                src="/assets/emotion/product-main-v3.png"
                                alt="Notebook Winblu e-Motion"
                                fill
                                className={styles.cardImage}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 50vw"
                            />
                            <div className={styles.cardOverlay} />
                        </div>
                        <div className={styles.cardContent}>
                            <Sparkles size={48} className={styles.cardIcon} />
                            <h2 className={styles.cardTitle}>L'evoluzione della specie</h2>
                            <p className={styles.cardText}>
                                I nuovi notebook e-Motion serie WBDN1C si rivolgono al grande pubblico di utilizzatori aziendali e privati, ma anche alle Scuole con una soluzione all’insegna del <strong>miglior rapporto prezzo/prestazioni</strong>, con processore Intel® Core™ i5-1235U di Dodicesima Generazione, schermo 15.6″ Full HD, RAM DDR4 da 3200 MHz fino a 64 GB, SSD M.2 PCIe 4.0 con la possibilità di un secondo storage da 2.5″ e un’ampia disponibilità di interfacce I/O.
                            </p>
                            <div className={styles.cardReveal}>
                                <p className={styles.cardText}>
                                    Una piattaforma hardware ottimizzata per offrire all’utilizzatore performance di alto livello ad un prezzo più che vantaggioso. Con alcune peculiarità aggiuntive che lo rendono ancora più esclusivo: LA TASTIERA RETROILLUMINATA, per una perfetta funzionalità del prodotto anche in scarse condizioni di luce; il lettore FINGERPRINT per l’autenticazione tramite impronta digitale; il DOPPIO SLOT DI MEMORIA; un’estetica più ricercata, anche grazie al colore silver, originale e accattivante.
                                </p>
                                <p className={styles.cardText} style={{ marginTop: '1rem' }}>
                                    Il nuovo notebook e-Motion offre ampia modularità di configurazione, ovvero la possibilità per il Cliente di scegliere Ram, Storage e Software, inclusa la special edition di Windows Educational per le scuole.
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
                            <h3 className={styles.cardTitle}>Eleganza in movimento</h3>
                            <div className={styles.cardReveal}>
                                <p className={styles.cardTextSmall}>
                                    Con i notebook Winblu e Motion serie WBDN1C l’alta tecnologia si fa stile: per l’armonia delle forme, nella ricercata versione “clamshell”, la cura dei dettagli e la finitura dei particolari, i materiali pregiati e l’eleganza del colore silver. Un design unico ed esclusivo, finalizzato anche alla massima ergonomia e portabilità del prodotto: i notebook e-Motion sono soluzioni slim a partire da 1.8 kg di peso, in grado di offrirti grande praticità d’uso e funzionalità avanzate, con tastierino numerico integrato, ampio Touchpad multi-touch, riconoscimento fingerprint e tastiera retroilluminata.
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
                            <h3 className={styles.cardTitle}>Designed To Perform</h3>
                            <p className={styles.cardText}>
                                I notebook Winblu e-Motion serie WBDN1C sono in grado di sviluppare prestazioni ai vertici della categoria, grazie ad un equipaggiamento davvero coi fiocchi: processore Intel® Core™ i5 di dodicesima generazione, memoria RAM a 3200 MHz e sezione storage basata su SSD di categoria M.2 NVMe PCIe Gen 4.0, i migliori oggi in commercio.
                            </p>
                            <div className={styles.cardReveal}>
                                <p className={styles.cardText}>
                                    Una piattaforma hardware equilibrata e completa, ma al tempo stesso espandibile per potenziare – da subito o in un secondo momento – la dotazione di serie: ad esempio con memoria aggiuntiva (fino a 64 GB) o un secondo disco di archiviazione, SSD o meccanico. Veloci, grintosi e performanti, anche di fronte a sollecitazioni elaborative complesse, ma al tempo stesso robusti e affidabili: i notebook Winblu e-Motion non smetteranno mai di stupirti. Grazie alla modularità della linea e-Motion, potrai ordinare configurazioni personalizzate, scegliendo – fra le componenti principali (RAM, Storage, Sistema Operativo) il mix che fa al caso tuo, nelle varianti a disposizione.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className={`${styles.bentoCard} ${styles.cardMedium} ${styles.cardWithImage}`}
                        initial={{ opacity: 1, y: 0 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <div className={styles.cardImageContainerSmall}>
                            <Image
                                src="/assets/emotion/product-angle-v4.png"
                                alt="Display e-Motion"
                                fill
                                className={styles.cardImage}
                                sizes="(max-width: 768px) 100vw, 33vw"
                            />
                            <div className={styles.cardOverlay} />
                        </div>
                        <div className={styles.cardContent}>
                            <Monitor size={40} className={styles.cardIcon} />
                            <h3 className={styles.cardTitle}>Anche l’occhio vuole la sua parte</h3>
                            <p className={styles.cardText}>
                                La sezione video della linea e-Motion serie WBDN1C non lascia nulla al caso il chip grafico integrato Intel® Iris® Xe si esprime al meglio attraverso un display 15.6″ IPS Full HD: uno schermo antiriflesso in grado di restituirti immagini nitide e brillanti e una resa grafica ottimale.
                            </p>
                            <div className={styles.cardReveal}>
                                <p className={styles.cardText}>
                                    Anche la webcam incorporata, con risoluzione a 2 Mp, è di ottimo livello, perfetta per le video-connessioni. Immagini di qualità ma non solo: l’eccellenza dell’entertainment è garantita anche dal chip audio HD integrato, che consente di ottenere una perfetta riproduzione digitale del suono… Ma non è tutto: grazie alle porte HDMI e USB di tipo C, potrai espandere la tua area di lavoro collegando ulteriori due display fino all’incredibile risoluzione 4 K alla frequenza di 60 Hz (DisplayPort via USB-C / HDMI fino a 4 K@30 Hz)
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
                                Il sistema operativ ideale per gestire al meglio il proprio computer in contesto lavorativo. Progettato per migliorare produttività, prestazioni e sicurezza.
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
                            <h3 className={styles.cardTitle}>Sempre Connesso</h3>
                            <p className={styles.cardTextSmall}>
                                Restare sempre collegati, in sicurezza: per un portatile moderno, un autentico must. Per questo Winblu e-Motion serie WBDN1C assicura all’utilizzatore piena connettività sia Wi-fi che Bluetooth che Gigabit LAN, con connettore RJ-45 integrato.
                            </p>
                            <div className={styles.cardReveal}>
                                <p className={styles.cardTextSmall}>
                                    Alle caratteristiche tecniche principali si abbina una dotazione di serie davvero completa: si va dalla tastiera full size retroilluminata al Card Reader SD integrato; dal connettore USB di tipo C con funzione di ricarica e Power Delivery, alle ulteriori 4 prese USB 3.2 tipo A, dal connettore HDMI al connettore Cuffie/Microfono.
                                </p>
                            </div>
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
                            <Shield size={40} className={styles.cardIcon} />
                            <h3 className={styles.cardTitle}>Sicurezza e Autonomia</h3>
                            <p className={styles.cardText}>
                                Dispositivi avanzati di sicurezza con protezione fingerprint compatibile Windows Hello, protocollo hardware Trusted Platform Module (TPM) 2.0 e Kensington Security Lock; prolungata autonomia, grazie alla batteria long-life ai polimeri di Litio da 45.6 Wh.
                            </p>
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
                            <h3 className={styles.cardTitle}>Soddisfatti e Garantiti</h3>
                            <p className={styles.cardText}>
                                Garanzia <strong>24 mesi Pick up & Return</strong>: ritiro e riparazione presso fabbrica Winblu senza spese.
                            </p>
                            <div className={styles.cardReveal}>
                                <p className={styles.cardText}>
                                    Copertura batteria e accessori: 6 mesi. Assistenza diretta dal produttore italiano.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Specs Cards Grid 6 cols */}
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
                    <SpecsCards specs={technicalSpecs.map(spec => ({
                        id: spec.id,
                        title: spec.title,
                        icon: spec.icon,
                        description: spec.items.map(i => `${i.label}: ${i.value}`).join(' • ')
                    }))} />
                </div>
            </section>

            {/* B2B CTA Section */}
            <B2BCTASection />
        </div>
    );
}
