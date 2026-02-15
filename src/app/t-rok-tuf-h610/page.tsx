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
import { Shield, Zap, Cpu, Monitor, Wifi, Award, Box, Layers, Gauge, Sparkles, Activity, Settings } from 'lucide-react';

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const GridBackground = () => (
    <div className={styles.gridBg} />
);

export default function TRokTufH610Page() {
    const technicalSpecs: SpecCategory[] = [
        {
            id: 'cpu',
            title: 'Processore',
            icon: <Cpu size={24} />,
            items: [
                { label: 'Generazione', value: 'Intel® Core™ Quattordicesima Generazione' },
                { label: 'Architettura', value: 'Raptor Lake Refresh' },
                { label: 'E-core/P-core', value: 'Fino a 24 Core complessivi' },
                { label: 'Turbo Freq', value: 'Fino a 6.0 GHz' },
            ]
        },
        {
            id: 'pba',
            title: 'Powered by ASUS',
            icon: <Award size={24} />,
            items: [
                { label: 'Certificazione', value: 'PBA - Powered By ASUS' },
                { label: 'Scheda Madre', value: 'ASUS serie TUF / Prime H610' },
                { label: 'Qualità', value: 'Componentistica di Grado Militare' },
            ]
        },
        {
            id: 'design',
            title: 'Design Bianco',
            icon: <Box size={24} />,
            items: [
                { label: 'Case', value: 'Bisonte Bianco Special Edition' },
                { label: 'Colore', value: 'Pure White Aesthetic' },
                { label: 'Forma', value: 'Compact Mid-Tower' },
                { label: 'Visual', value: 'Vetro Temperato Laterale' },
            ]
        },
        {
            id: 'memory',
            title: 'Memoria RAM',
            icon: <Gauge size={24} />,
            items: [
                { label: 'Supporto', value: 'DDR5 New Frontier' },
                { label: 'Capacità', value: 'Fino a 128GB (2 slot)' },
                { label: 'Frequenza', value: 'DDR5 Velocità Estrema' },
            ]
        },
        {
            id: 'graphics',
            title: 'Grafica',
            icon: <Monitor size={24} />,
            items: [
                { label: 'Serie', value: 'NVIDIA® GeForce® RTX serie 4000' },
                { label: 'AI Power', value: 'NVIDIA DLSS 3 Support' },
                { label: 'Visual', value: 'Ray Tracing Avanzato' },
            ]
        },
        {
            id: 'software',
            title: 'OS & Security',
            icon: <Shield size={24} />,
            items: [
                { label: 'S.O.', value: 'Windows 11 Professional' },
                { label: 'Antivirus', value: 'Kaspersky Internet Security incluso' },
                { label: 'Sicurezza', value: 'TPM 2.0 Ready' },
            ]
        }
    ];

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
                        <span className={styles.heroTag}>Winblu Powered by ASUS</span>
                        <h1 className={styles.heroTitle}>
                            T-Rok H610:<br />
                            <span className={styles.gradient}>Bisonte Bianco</span>
                        </h1>
                        <p className={styles.heroDesc}>
                            Quando le leggende si fanno realtà. Ricordate il mitologico Bisonte Bianco delle Leggende Indiane? Una creatura fantastica che ora prende la forma di una poderosa game machine firmata Winblu.
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
                                src="/products/t-rok/t-rok-white.png"
                                alt="Winblu T-Rok H610 White"
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
                            <Award size={48} className={styles.cardIcon} />
                            <h2 className={styles.cardTitle}>Powered by ASUS</h2>
                            <p className={styles.cardText}>
                                Progettata congiuntamente dai Laboratori R&D Winblu e ASUS, è certificata ufficialmente dal marchio <strong>PBA</strong>.
                            </p>
                            <div className={styles.cardReveal}>
                                <p className={styles.cardText}>
                                    Un connubio che regala standard prestazionali di assoluta eccellenza e un’esperienza di gioco straordinaria, in un'originale estetica bianca.
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
                            <Cpu size={36} className={styles.cardIcon} />
                            <h3 className={styles.cardTitle}>14ᴬ Gen Intel</h3>
                            <div className={styles.cardReveal}>
                                <p className={styles.cardTextSmall}>
                                    Fino a 24 core e 32 thread per il massimo della capacità elaborativa.
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
                            <h3 className={styles.cardTitle}>RTX Serie 4000</h3>
                            <p className={styles.cardText}>
                                Architettura Ada Lovelace per un'esperienza visiva davvero inimmaginabile.
                            </p>
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
                            <Zap size={48} className={styles.cardIcon} />
                            <h3 className={styles.cardTitle}>DDR5 Memory</h3>
                            <p className={styles.cardText}>
                                La nuova frontiera della velocità con dissipatore ed effetti luce RGB.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Detailed Features Section - New Content */}
            <section style={{ padding: '4rem 2rem', background: '#111', color: '#fff' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{ display: 'grid', gap: '4rem' }}
                    >
                        <div>
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: '#00d2ff' }}>Powered By ASUS: L'eccellenza in Bianco</h2>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#ccc' }}>
                                Progettata congiuntamente dai Laboratori <strong>R&D Winblu e ASUS</strong>, T-ROK GAMING H610 è la nostra nuova proposta basata su hardware ASUS e quindi certificata ufficialmente dal marchio <strong>PBA – Powered By ASUS</strong>. Una soluzione innovativa anche nell’originale colore bianco che contraddistingue l’estetica di questo prodotto: davvero un’irresistibile simbiosi fra alte prestazioni ed esclusività del design. In questa nuova game machine ritroviamo l’indiscussa qualità progettuale e costruttiva Winblu valorizzata al meglio dalla componentistica ASUS, il brand Numero Uno al mondo nel settore Gaming.
                            </p>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                            <div>
                                <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#fff' }}>Performance 14ᴬ Generazione</h3>
                                <p style={{ lineHeight: '1.7', color: '#aaa' }}>
                                    La linea T-ROK H610 supporta la <strong>Quattordicesima generazione</strong> di processori Intel® Core™, nome in codice Raptor Lake Refresh. Una nuova concezione di CPU che eredita le caratteristiche della serie 13, con core aumentati fino a 24 e thread fino a 32. Con i suoi <strong>6.0GHz di frequenza di punta</strong>, è definito come il più veloce processore da gaming al mondo. Il massimo della potenza è garantito anche dalle memorie <strong>DDR5</strong> con dissipatore ed effetti luce RGB.
                                </p>
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#fff' }}>Grafica NVIDIA® RTX serie 4000</h3>
                                <p style={{ lineHeight: '1.7', color: '#aaa' }}>
                                    L’equipaggiamento raggiunge l’apice con le GPU <strong>Nvidia® GeForce® serie 4000</strong> basate su architettura Ada Lovelace. Un enorme passo avanti in termini di prestazioni, efficienza e grafica IA. Mondi virtuali dettagliati, massima libertà nella creazione di contenuti e una produttività senza precedenti, grazie all’accelerazione del flusso-dati nella fase di elaborazione architettonica o ingegneristica.
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
