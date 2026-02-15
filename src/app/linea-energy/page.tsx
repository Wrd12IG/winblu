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
import { Shield, Zap, Cpu, Monitor, Wifi, Award, Settings, HardDrive, Box } from 'lucide-react';

const GridBackground = () => (
    <div className={styles.gridBg} />
);

export default function LineaEnergyPage() {
    const technicalSpecs: SpecCategory[] = [
        {
            id: 'cpu',
            title: 'Processore',
            icon: <Cpu size={24} />,
            items: [
                { label: 'Generazione', value: 'Intel® Core™ 13a/14a Gen' },
                { label: 'Modelli', value: 'i3 / i5 / i7' },
                { label: 'Performance', value: 'Hybrid Architecture' },
            ]
        },
        {
            id: 'graphics',
            title: 'Grafica',
            icon: <Monitor size={24} />,
            items: [
                { label: 'Integrata', value: 'Intel® UHD Graphics 700' },
                { label: 'Opzionale', value: 'NVIDIA® GeForce® GTX Legacy' },
                { label: 'Output', value: 'HDMI 2.1 / DisplayPort' },
            ]
        },
        {
            id: 'warranty',
            title: 'Garanzia On-Site',
            icon: <Shield size={24} />,
            items: [
                { label: 'Durata', value: '24 Mesi Standard' },
                { label: 'Estensione', value: 'Opzionale fino a 36 Mesi' },
                { label: 'Servizio', value: 'Intervento a Domicilio' },
            ]
        },
        {
            id: 'design',
            title: 'Design & Build',
            icon: <Box size={24} />,
            items: [
                { label: 'Case', value: 'Mid-Tower ATX' },
                { label: 'Frontale', value: 'Carbon Fiber Texture' },
                { label: 'Materiali', value: 'Acciaio SGCC 0.6mm' },
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
                        <span className={styles.heroTag}>Efficienza Quotidiana</span>
                        <h1 className={styles.heroTitle}>
                            Winblu <span className={styles.gradient}>Energy</span>
                        </h1>
                        <p className={styles.heroDesc}>
                            Il best-seller della gamma Winblu. Una combinazione perfetta di robustezza, qualità dei materiali ed eleganza per ogni ambiente lavorativo e domestico.
                        </p>
                        <div className={styles.heroCTAs}>
                            <Link href="/punti-vendita?tipo=fornitura" className={styles.ctaPrimary}>
                                Configura Ora
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
                                src="/assets/energy-hero.png"
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
                            <Award size={48} className={styles.cardIcon} />
                            <h2 className={styles.cardTitle}>Il Best-Seller Winblu</h2>
                            <p className={styles.cardText}>
                                Un compagno dinamico e instancabile. Disinvolti nei programmi di produttività, agili sul web, pronti a supportare ogni tua attività quotidiana con affidabilità totale.
                            </p>
                            <div className={styles.cardReveal}>
                                <p className={styles.cardText}>
                                    Robustezza e qualità dei materiali si fondono con l'eleganza del design Carbon Fiber. Perfetti per l'ufficio e la casa, garantiscono longevità e silenziosità operativa.
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
                            <Wifi size={36} className={styles.cardIcon} />
                            <h3 className={styles.cardTitle}>Fast Wireless</h3>
                            <div className={styles.cardReveal}>
                                <p className={styles.cardTextSmall}>
                                    Supporto opzionale per Wi-Fi 6 e Bluetooth 5.0 per velocità fino a 2.4Gbps e connessioni stabili.
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
                            <h3 className={styles.cardTitle}>Intel Xe Graphics</h3>
                            <p className={styles.cardText}>
                                Core grafico Intel UHD integrato con supporto 8K@60Hz HDR per una chiarezza visiva assoluta in ogni scenario.
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
                            <Shield size={48} className={styles.cardIcon} />
                            <h3 className={styles.cardTitle}>On-Site Support</h3>
                            <p className={styles.cardText}>
                                24 mesi di garanzia standard on-site inclusi. Interventi tecnici direttamente presso la tua sede per la massima continuità.
                            </p>
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
