"use client";

import Link from 'next/link';
import Image from 'next/image';
import styles from '../t-rok-styles/trok-premium.module.css';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SpecsCards from "@/components/SpecsCards";
import { SpecCategory } from "@/components/SpecsAccordion";
import B2BCTASection from "@/components/B2BCTASection";
import { motion } from 'framer-motion';
import { Shield, Zap, Cpu, Monitor, Wifi, Award, Box, Layers, Gauge, Sparkles, Activity, Settings, TrendingUp, Package } from 'lucide-react';

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const GridBackground = () => (
    <div className={styles.gridBg} />
);

export default function TRokZ790Page() {
    const technicalSpecs: SpecCategory[] = [
        {
            id: 'cpu',
            title: 'Processori',
            icon: <Cpu size={24} />,
            items: [
                { label: 'Modelli', value: 'Intel® Core™ i7, i9 serie Alder Lake 12A Generazione e serie Raptor Lake Refresh 13A e 14A Generazione' },
                { label: 'Supporto', value: 'Supporta Serie K 125W' },
                { label: 'Raffreddamento', value: 'Dissipatore RGB con sistema di raffreddamento a liquido' },
            ]
        },
        {
            id: 'chipset',
            title: 'Chipset',
            icon: <Settings size={24} />,
            items: [
                { label: 'Modello', value: 'Intel® Z790' },
            ]
        },
        {
            id: 'case_psu',
            title: 'Case e Alimentatore',
            icon: <Box size={24} />,
            items: [
                { label: 'Design', value: 'Mid-tower colore nero con frontale e n°2 pannelli laterali in vetro' },
                { label: 'Alimentatore', value: 'Alimentatore 1000W ATX 3.0 PCIe 5.0 ready 80Plus Gold Full Modular' },
                { label: 'Dimensioni', value: 'Dimensioni (PxLxA) 450x210x470mm' },
                { label: 'Porte/Ventole', value: 'n°2 porte Audio, n°4 ventola di raffreddamento 120mm ARGB' },
                { label: 'Controllo', value: 'Illuminazione ARGB personalizzabile con switch di controllo delle ventole sul frontale' },
            ]
        },
        {
            id: 'memory',
            title: 'Memoria',
            icon: <Gauge size={24} />,
            items: [
                { label: 'RAM', value: 'RAM DDR5 fino a 7200MT/s RGB, massimo 192GB' },
            ]
        },
        {
            id: 'storage',
            title: 'Archiviazione e Lettori',
            icon: <Layers size={24} />,
            items: [
                { label: 'Dischi', value: 'Supporta n°2 Solid State Disk M.2 PCIe 4.0 NVMe, n°2 HD/SSD SATA3 3.5”/2.5”' },
                { label: 'RAID', value: 'Supporta RAID 0,1,5,10' },
            ]
        },
        {
            id: 'graphics',
            title: 'Sezione Video',
            icon: <Monitor size={24} />,
            items: [
                { label: 'Schede Video', value: 'Schede Video Nvidia® Geforce® RTX serie 4000, slot PCIe 5.0/4.0 x16' },
            ]
        },
        {
            id: 'audio',
            title: 'Sezione Audio',
            icon: <Activity size={24} />,
            items: [
                { label: 'Codec', value: 'ROG Supreme FX 7.1 Surround Sound HD Audio Codec ALC4080' },
                { label: 'Uscite', value: 'Optical S/PDIF out e n°5 jacks audio' },
            ]
        },
        {
            id: 'connectivity',
            title: 'Connettività e Sicurezza',
            icon: <Wifi size={24} />,
            items: [
                { label: 'Rete', value: 'Lan Intel® 2.5Gb, Wi-Fi 6E 2×2 Tri-Band + Bluetooth 5.3' },
                { label: 'USB Frontali', value: 'n°2 porte USB3.0 frontali – n°1 porta USB3.2 Gen2x2 Tipo C' },
                { label: 'USB Posteriori', value: 'n°3 porte USB3.2 Gen2 (n°2 Tipo A e n°1 Tipo C), n°4 porte USB3.2 Gen1, n°4 porte USB2.0 posteriori' },
                { label: 'Sicurezza', value: 'Firmware TPM 2.0' },
            ]
        },
        {
            id: 'software',
            title: 'Compatibilità Software',
            icon: <Monitor size={24} />,
            items: [
                { label: 'Sistema Operativo', value: 'Windows 11 in versione Professional o Home' },
            ]
        },
        {
            id: 'accessories',
            title: 'Tastiera, Mouse, Cuffie',
            icon: <Package size={24} />,
            items: [
                { label: 'Opzioni', value: 'Opzionali su richiesta' },
            ]
        },
        {
            id: 'energy',
            title: 'Efficienza Energetica',
            icon: <Zap size={24} />,
            items: [
                { label: 'Indici ETEC', value: 'ETEC: 268.55 kWh/year, ETEC Max: 357.00 kWh/year' },
                { label: 'Consumi', value: 'Sleep Mode: 5.43 W, Idle Mode: 75.48 W, Off Mode: 0.35 W' },
                { label: 'Acustica', value: 'Potenza Sonora: 44.6 Lw(dB)' },
                { label: 'Reference', value: 'Z790/Intel® i7-13700K/64GB DDR5 RGB/512GB SSD M.2+4000GB SATA3/RTX4080 16GB/1000W ATX 3.0' },
            ]
        },
        {
            id: 'warranty',
            title: 'Garanzia',
            icon: <Shield size={24} />,
            items: [
                { label: 'Formula', value: '24 mesi On Site con intervento a domicilio (escluse isole minori)' },
            ]
        }
    ];

    return (
        <div
            className={styles.container}
            style={{
                '--accent-primary': '#0160A9',
                '--accent-rgb': '1, 96, 169',
                '--accent-gradient': 'linear-gradient(135deg, #0160A9 0%, #004e8a 100%)'
            } as any}
        >
            <Navbar />
            <section className={styles.hero}>
                <GridBackground />
                <div className={styles.heroContent}>
                    <motion.div
                        initial={{ opacity: 1, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className={styles.heroText}
                    >
                        <span className={styles.heroTag}>Performance no limits per TOP Gamer</span>
                        <h1 className={styles.heroTitle}>
                            Winblu <span className={styles.gradient}>T-ROK Z790</span>
                        </h1>
                        <div className={styles.heroDesc}>
                            <p><strong>Pronto a vivere un’esperienza di gioco straordinaria?</strong></p>
                            <p>Varca i confini dell’immaginazione con il Gaming T-ROK Z790: potrai vivere esperienze di gioco a livelli impensabili fino a poco tempo fa. Una bomba di tecnologia indirizzata all’appassionato di gaming estremo, che cerca solo ed esclusivamente il top.</p>
                        </div>
                        <div className={styles.heroCTAs}>
                            <Link href="/punti-vendita?tipo=fornitura" className={styles.ctaPrimary}>
                                Configura il Top
                            </Link>
                            <Link href="/punti-vendita" className={styles.ctaSecondary}>
                                Rivenditori
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
                                src="https://www.winblu.it/wp-content/uploads/2024/07/winblu-0323-1872x2048.png"
                                alt="Winblu T-Rok Z790 Extreme"
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
                        initial={{ opacity: 1, y: 0 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className={styles.cardImageContainer}>
                            <Image
                                src="https://www.winblu.it/wp-content/uploads/2024/07/winblu-0323-1872x2048.png"
                                alt="T-Rok Z790 Overview"
                                fill
                                className={styles.cardImage}
                                sizes="(max-width: 768px) 100vw, 66vw"
                            />
                            <div className={styles.cardOverlay} />
                        </div>
                        <div className={styles.cardContent}>
                            <Sparkles size={48} className={styles.cardIcon} />
                            <h2 className={styles.cardTitle}>Eleganza, luminosità ARGB e massima Potenza</h2>
                            <p className={styles.cardText}>
                                Un case d’eccezione per la massima eleganza, con pannelli in vetro temperato da 4mm sul frontale e sui due lati. Le quattro ventole Addressable-RGB servono un totale di 20 incredibili diversi effetti luminosi, selezionabili tramite lo switch sul pannello superiore.
                            </p>
                            <div className={styles.cardReveal}>
                                <p className={styles.cardText}>
                                    È naturalmente inclusa anche la modalità di sincronizzazione con Aura RGB lighting per una sinfonia di luci in armonia con gli altri componenti, gestibile comodamente dall’app in Windows. La serie T-ROK Z790 prevede il nuovo alimentatore in formato ATX 3.0 PCIe 5.0 80Plus Gold, per garantire la massima potenza, stabilità e un’esperienza di gioco senza compromessi.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className={`${styles.bentoCard} ${styles.cardSmall} ${styles.cardHighlight}`}
                        initial={{ opacity: 1, y: 0 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        style={{ background: 'linear-gradient(135deg, rgba(1, 96, 169, 0.08), rgba(1, 96, 169, 0.02))', borderColor: 'rgba(1, 96, 169, 0.2)' }}
                    >
                        <div className={styles.cardContent}>
                            <Activity size={36} className={styles.cardIcon} />
                            <h3 className={styles.cardTitle}>Giocare al massimo</h3>
                            <div className={styles.cardReveal}>
                                <p className={styles.cardTextSmall}>
                                    Audio ROG Supreme FX 7.1 con codec ALC4080 e condensatori Nichicon™ per un suono caldo e coinvolgente. Connettività fulminea con WI-FI 6E tri-band e LAN 2.5Gb.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className={`${styles.bentoCard} ${styles.cardMedium}`}
                        initial={{ opacity: 1, y: 0 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className={styles.cardContent}>
                            <Cpu size={48} className={styles.cardIcon} style={{ color: '#0160A9' }} />
                            <h3 className={styles.cardTitle}>14ᴬ Generazione Intel® Core™</h3>
                            <p className={styles.cardText}>
                                Supporta la 14a generazione Intel® Core™ (Raptor Lake Refresh), con un massimo di 24 Core (8P+16E) e frequenze fino a 6.0GHz.
                            </p>
                            <div className={styles.cardReveal}>
                                <p className={styles.cardText}>
                                    Definito “il più veloce processore da gaming al mondo”, offre un sensibile aumento della cache L3 e una ampliata integrazione con le periferiche.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className={`${styles.bentoCard} ${styles.cardMedium} ${styles.cardHighlight}`}
                        initial={{ opacity: 1, y: 0 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        style={{ background: 'linear-gradient(135deg, rgba(1, 96, 169, 0.08), rgba(1, 96, 169, 0.02))', borderColor: 'rgba(1, 96, 169, 0.2)' }}
                    >
                        <div className={styles.cardContent}>
                            <Monitor size={48} className={styles.cardIcon} style={{ color: '#0160A9' }} />
                            <h3 className={styles.cardTitle}>NVIDIA® RTX Serie 4000</h3>
                            <p className={styles.cardText}>
                                Basate su architettura Ada Lovelace, offrono Ray Tracing di 3a generazione e DLSS 3 per prestazioni inimmaginabili.
                            </p>
                            <div className={styles.cardReveal}>
                                <p className={styles.cardText}>
                                    Mondi virtuali fotorealistici, riflessi istantanei e una produttività senza precedenti per i creator. L'apice della grafica moderna.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className={`${styles.bentoCard} ${styles.cardSmall}`}
                        initial={{ opacity: 1, y: 0 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <div className={styles.cardContent}>
                            <Gauge size={36} className={styles.cardIcon} style={{ color: '#0160A9' }} />
                            <h3 className={styles.cardTitle}>DDR5 7200MT/s</h3>
                            <div className={styles.cardReveal}>
                                <p className={styles.cardTextSmall}>
                                    Memorie DDR5 con frequenza fino a 7200MT/s, dissipatore ed effetti luce RGB. La nuova frontiera della velocità.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className={`${styles.bentoCard} ${styles.cardMedium} ${styles.cardHighlight}`}
                        initial={{ opacity: 1, y: 0 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        style={{ background: 'linear-gradient(135deg, rgba(1, 96, 169, 0.08), rgba(1, 96, 169, 0.02))', borderColor: 'rgba(1, 96, 169, 0.2)' }}
                    >
                        <div className={styles.cardContent}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                                <Award size={48} className={styles.cardIcon} style={{ color: '#0160A9', marginBottom: 0 }} />
                                <h3 className={styles.cardTitle} style={{ marginBottom: 0 }}>XBOX Game Pass</h3>
                            </div>
                            <p className={styles.cardText}>
                                Un mese di accesso gratuito all'intero catalogo XBOX Game Pass Incluso!
                            </p>
                            <div className={styles.cardReveal}>
                                <p className={styles.cardText}>
                                    Esclusiva per T-ROK con Windows 11 Home. Gioca ai titoli Activision, Blizzard e King dal primo giorno. Garanzia On Site 24 Mesi inclusa.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Specs Cards Section */}
            <section className={styles.specsSection}>
                <div style={{ maxWidth: '1600px', margin: '0 auto' }}>
                    <motion.h2
                        initial={{ opacity: 1, y: 0 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={styles.specsTitle}
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
            <Footer />
        </div>
    );
}
