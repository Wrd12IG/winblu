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
import { Server, Shield, Database, Activity, HardDrive, Network, Lock, Cpu } from 'lucide-react';

const GridBackground = () => (
    <div className={styles.gridBg} />
);

export default function LineaEnterprise1151Page() {
    const technicalSpecs: SpecCategory[] = [
        {
            id: 'processor',
            title: 'Processore',
            icon: <Cpu size={24} />,
            items: [
                { label: 'CPU', value: 'Intel® Xeon® E-2300 Series' },
                { label: 'Socket', value: 'LGA 1200' },
                { label: 'Cores', value: 'Fino a 8 Cores / 16 Threads' },
            ]
        },
        {
            id: 'memory',
            title: 'Memoria',
            icon: <Database size={24} />,
            items: [
                { label: 'RAM', value: 'DDR4 ECC UDIMM' },
                { label: 'Capacità', value: 'Fino a 128GB' },
                { label: 'Speed', value: '2666/3200 MT/s' },
            ]
        },
        {
            id: 'storage',
            title: 'Archiviazione',
            icon: <HardDrive size={24} />,
            items: [
                { label: 'Bays', value: '4x 3.5" Hot-Swap (Espandibile)' },
                { label: 'Boot', value: '2x M.2 NVMe (RAID 1 Support)' },
                { label: 'Controller', value: 'ASUS PIKE II 3000 Series' },
            ]
        },
        {
            id: 'management',
            title: 'Network & Gestione',
            icon: <Network size={24} />,
            items: [
                { label: 'LAN', value: '2-4x Intel® Gigabit Ethernet' },
                { label: 'Features', value: 'Teaming & Failover Support' },
                { label: 'Mgmt', value: 'iKVM / IPMI 2.0' },
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
                        className={styles.heroText}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className={styles.heroTag}>Massima Affidabilità Aziendale</span>
                        <h1 className={styles.heroTitle}>
                            Winblu <span className={styles.gradient}>Enterprise 1151</span>
                        </h1>
                        <p className={styles.heroDesc}>
                            Soluzioni ottimizzate per carichi di lavoro mission-critical. I server Winblu Enterprise 1151 integrano tecnologie Intel® Xeon® E per prestazioni estreme e continuità operativa totale.
                        </p>
                        <div className={styles.heroCTAs}>
                            <Link href="/punti-vendita" className={styles.ctaPrimary}>
                                Configura Server
                            </Link>
                            <Link href="/punti-vendita" className={styles.ctaSecondary}>
                                Trova Rivenditore
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        className={styles.heroVisual}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className={styles.heroImageContainer}>
                            <Image
                                src="/assets/enterprise-1151-hero.png"
                                alt="Winblu Enterprise 1151 Server"
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
                    {/* Row 1 */}
                    <motion.div
                        className={`${styles.bentoCard} ${styles.cardLarge}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className={styles.cardContent}>
                            <Server size={48} className={styles.cardIcon} />
                            <h2 className={styles.cardTitle}>Sicurezza e Continuità</h2>
                            <p className={styles.cardText}>
                                Basati su piattaforma ASUS e microprocessori Intel Xeon E fino a 8 core. Una componentistica selezionata per garantire che la tua azienda non si fermi mai, con efficienza termica ottimizzata.
                            </p>
                            <div className={styles.cardReveal}>
                                <p className={styles.cardText}>
                                    Supporto memorie DDR4 ECC fino a 128GB per elaborazioni sicure e integrità dei dati costante. Disponibile in formati Rack e Tower convertibili.
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
                            <Shield size={36} className={styles.cardIcon} />
                            <h3 className={styles.cardTitle}>Controller PIKE II</h3>
                            <div className={styles.cardReveal}>
                                <p className={styles.cardTextSmall}>
                                    Fino a 12 Gbit/s di trasferimento SAS e protezione RAID hardware integrata per una gestione dello storage di classe enterprise.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Row 2 */}
                    <motion.div
                        className={`${styles.bentoCard} ${styles.cardMedium}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className={styles.cardContent}>
                            <HardDrive size={48} className={styles.cardIcon} />
                            <h3 className={styles.cardTitle}>Storage Flessibile</h3>
                            <p className={styles.cardText}>
                                Fino a 8 bay Hot-Swap (secondo il modello) e doppio slot M.2 NVMe per velocità di avvio fino a 5,3 volte superiori rispetto a SATA III.
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
                            <Network size={48} className={styles.cardIcon} />
                            <h3 className={styles.cardTitle}>Network Failover</h3>
                            <p className={styles.cardText}>
                                Fino a 4 porte Intel® Ethernet con supporto Teaming e Failover per garantire che il tuo business resti sempre connesso.
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
