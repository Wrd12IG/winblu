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
import { Zap, Monitor, HardDrive, Wifi, Shield, Award, Cpu, Boxes, Wind, Gauge, Sparkles, Activity, TrendingUp, Package } from 'lucide-react';

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const GridBackground = () => (
    <div className={styles.gridBg} />
);

export default function TRokB760SEPage() {
    const technicalSpecs: SpecCategory[] = [
        {
            id: 'cpu',
            title: 'Processori',
            icon: <Cpu size={24} />,
            items: [
                { label: 'Supporto', value: 'Intel® Core™ i5, i7, i9' },
                { label: 'Generazione', value: '12ᵃ, 13ᵃ e 14ᵃ Gen (Raptor Lake Refresh)' },
                { label: 'Serie', value: 'Supporta Serie K 125W' },
                { label: 'Raffreddamento', value: 'Liquido RGB con radiatore 240mm' },
            ]
        },
        {
            id: 'chipset',
            title: 'Chipset',
            icon: <Cpu size={24} />,
            items: [
                { label: 'Modello', value: 'Intel® B760' },
            ]
        },
        {
            id: 'case_psu',
            title: 'Case e Alimentatore',
            icon: <Boxes size={24} />,
            items: [
                { label: 'Formato', value: 'Mid-tower nero, vetro frontale/laterale' },
                { label: 'Alimentatore', value: '850W 80Plus Bronze' },
                { label: 'Dimensioni', value: '420x285x380mm' },
                { label: 'Ventole', value: '3x 120mm ARGB + controller' },
            ]
        },
        {
            id: 'memory',
            title: 'Memoria RAM',
            icon: <Gauge size={24} />,
            items: [
                { label: 'Tecnologia', value: 'DDR5 RGB' },
                { label: 'Velocità', value: 'Fino a 7200MT/s' },
                { label: 'Capacità', value: 'Massimo 128GB' },
            ]
        },
        {
            id: 'storage',
            title: 'Archiviazione',
            icon: <HardDrive size={24} />,
            items: [
                { label: 'M.2', value: '2x PCIe 4.0 NVMe' },
                { label: 'SATA', value: '2x SATA3 3.5”/2.5”' },
            ]
        },
        {
            id: 'graphics',
            title: 'Sezione Video',
            icon: <Monitor size={24} />,
            items: [
                { label: 'Modelli', value: 'NVIDIA® GeForce® RTX 4000 / 3000' },
                { label: 'Slot', value: 'PCIe 5.0/4.0/3.0 x16' },
            ]
        },
        {
            id: 'audio',
            title: 'Sezione Audio',
            icon: <Activity size={24} />,
            items: [
                { label: 'Codec', value: 'Realtek® 7.1 HD Audio' },
                { label: 'Uscite', value: 'Optical S/PDIF, 5 jacks audio' },
            ]
        },
        {
            id: 'connectivity',
            title: 'Connettività',
            icon: <Wifi size={24} />,
            items: [
                { label: 'LAN', value: 'Realtek® 2.5Gb' },
                { label: 'Wireless', value: 'Wi-Fi 6 2×2 + Bluetooth 5.2' },
                { label: 'USB Top', value: '2x USB3.0, 1x USB3.2 Gen2 Type-C' },
                { label: 'USB Rear', value: '1x Gen2x2 Type-C, 1x Gen2, 3x Gen1, 1x USB2.0' },
                { label: 'Sicurezza', value: 'Firmware TPM 2.0' },
            ]
        },
        {
            id: 'software',
            title: 'Software',
            icon: <Shield size={24} />,
            items: [
                { label: 'OS', value: 'Windows 11 Professional o Home' },
            ]
        },
        {
            id: 'peripherals',
            title: 'Periferiche',
            icon: <Package size={24} />,
            items: [
                { label: 'Disponibilità', value: 'Opzionali su richiesta' },
            ]
        },
        {
            id: 'energy',
            title: 'Efficienza Energetica',
            icon: <Zap size={24} />,
            items: [
                { label: 'Stato', value: 'In fase di aggiornamento' },
            ]
        },
        {
            id: 'warranty',
            title: 'Garanzia',
            icon: <Award size={24} />,
            items: [
                { label: 'Copertura', value: '24 mesi On Site (escluse isole minori)' },
            ]
        }
    ];

    return (
        <div
            className={styles.container}
            style={{
                '--accent-primary': '#00d2ff',
                '--accent-rgb': '0, 210, 255',
                '--accent-gradient': 'linear-gradient(135deg, #00d2ff 0%, #0056b3 100%)'
            } as any}
        >
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
                        <span className={styles.heroTag}>Linea Gaming Winblu</span>
                        <h1 className={styles.heroTitle}>
                            T-ROK B760 SE:<br />
                            <span className={styles.gradient}>Senza Compromessi</span>
                        </h1>
                        <p className={styles.heroDesc}>
                            Pronto a vivere un’esperienza di gioco straordinaria? Il nuovo T-Rok B760 SE apre le porte al futuro del gaming, pronto a ridefinire le regole del gioco, grazie anche al suo equipaggiamento d’avanguardia. Il restyling di linea, prende infatti tutto il meglio del suo predecessore, per amplificarne le prestazioni e il pregio estetico.
                        </p>
                        <div className={styles.heroCTAs}>
                            <Link href="/punti-vendita?tipo=fornitura" className={styles.ctaPrimary}>
                                Configura
                            </Link>
                            <Link href="/punti-vendita" className={styles.ctaSecondary}>
                                Rivenditori
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
                                src="https://www.winblu.it/wp-content/uploads/2024/07/winblu-0143-1872x2048.png"
                                alt="Winblu T-Rok B760 SE"
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
                                src="https://www.winblu.it/wp-content/uploads/2024/07/winblu-0143-1872x2048.png"
                                alt="T-Rok B760 SE Design"
                                fill
                                className={styles.cardImage}
                                sizes="(max-width: 768px) 100vw, 66vw"
                            />
                            <div className={styles.cardOverlay} />
                        </div>
                        <div className={styles.cardContent}>
                            <Sparkles size={48} className={styles.cardIcon} style={{ color: '#00d2ff' }} />
                            <h2 className={styles.cardTitle}>Premio Oscar per gli effetti speciali</h2>
                            <p className={styles.cardText}>
                                Design a “doppia camera” completamente rinnovato, con disposizione modificata per favorire la dissipazione e doppio vetro temperato a trasparenza totale.
                            </p>
                            <div className={styles.cardReveal}>
                                <p className={styles.cardText}>
                                    Un’evoluzione estetica per godere dello straordinario spettacolo degli effetti luminosi gestiti dal sistema AURA, con n°5 FAN di serie e un angolo di visuale da “prima fila”.
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
                            <Cpu size={36} className={styles.cardIcon} style={{ color: '#00d2ff' }} />
                            <h3 className={styles.cardTitle}>14ᴬ Gen Intel</h3>
                            <div className={styles.cardReveal}>
                                <p className={styles.cardTextSmall}>
                                    Nome in codice Raptor Lake Refresh: fino a 24 Core (8 P-core + 16 E-core) e 32 Thread per una potenza di calcolo estrema.
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
                            <Monitor size={48} className={styles.cardIcon} style={{ color: '#00d2ff' }} />
                            <h3 className={styles.cardTitle}>NVIDIA® RTX 4000</h3>
                            <p className={styles.cardText}>
                                Basate su architettura Ada Lovelace, con Tensor core di quarta generazione e Ray Tracing di terza generazione.
                            </p>
                            <div className={styles.cardReveal}>
                                <p className={styles.cardText}>
                                    Un’esperienza visiva inimmaginabile: mondi virtuali dettagliati, rendering real-time cinematografico e produttività senza precedenti.
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
                            <Zap size={48} className={styles.cardIcon} style={{ color: '#00d2ff' }} />
                            <h3 className={styles.cardTitle}>Giocare al massimo</h3>
                            <p className={styles.cardText}>
                                Realtek 7.1 Surround (SNR 98dB) e DTS® Audio Processing per un suono incontaminato e bassi profondi.
                            </p>
                            <div className={styles.cardReveal}>
                                <p className={styles.cardText}>
                                    Connettività fulminea con WI-FI 6 e LAN 2.5Gb per dominare ogni partita online senza lag.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className={`${styles.bentoCard} ${styles.cardSmall}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <div className={styles.cardContent}>
                            <Shield size={36} className={styles.cardIcon} style={{ color: '#00d2ff' }} />
                            <h3 className={styles.cardTitle}>Windows 11</h3>
                            <div className={styles.cardReveal}>
                                <p className={styles.cardTextSmall}>
                                    L’ideale per gestire al meglio la propria postazione gaming: migliora produttività, prestazioni e sicurezza.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className={`${styles.bentoCard} ${styles.cardMedium} ${styles.cardHighlight}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                    >
                        <div className={styles.cardContent}>
                            <Award size={48} className={styles.cardIcon} style={{ color: '#00d2ff' }} />
                            <h3 className={styles.cardTitle}>Soddisfatti e Garantiti</h3>
                            <p className={styles.cardText}>
                                24 mesi di Garanzia On Site con intervento a domicilio di tecnico specializzato.
                            </p>
                            <div className={styles.cardReveal}>
                                <p className={styles.cardText}>
                                    In più, con Windows 11 Home, un mese di accesso gratuito al catalogo XBOX Game Pass!
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
                        initial={{ opacity: 0, y: 20 }}
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
