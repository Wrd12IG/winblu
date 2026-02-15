"use client";

import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/product-bento.module.css';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SpecsCards from "@/components/SpecsCards";
import { SpecCategory } from "@/components/SpecsAccordion";
import B2BCTASection from "@/components/B2BCTASection";
import { motion } from 'framer-motion';
import { Monitor, Camera, Wifi, Cpu, Layers, MousePointer2 } from 'lucide-react';

const GridBackground = () => (
    <div className={styles.gridBg} />
);

export default function EVisionStandardPage() {
    const technicalSpecs: SpecCategory[] = [
        {
            id: 'display',
            title: 'Display Zero-Frame',
            icon: <Monitor size={24} />,
            items: [
                { label: 'Dimensioni', value: '23.8" o 27" Full HD (1920x1080)' },
                { label: 'Tecnologia', value: 'IPS Level, Anti-Glare' },
                { label: 'Design', value: '3-Side Borderless' },
            ]
        },
        {
            id: 'performance',
            title: 'Performance',
            icon: <Cpu size={24} />,
            items: [
                { label: 'CPU', value: 'Intel® Core™ i3 / i5 / i7' },
                { label: 'RAM', value: 'Fino a 64GB DDR4/DDR5' },
                { label: 'Storage', value: 'M.2 NVMe SSD + 2.5" SATA' },
            ]
        },
        {
            id: 'multimedia',
            title: 'Multimedia',
            icon: <Camera size={24} />,
            items: [
                { label: 'Webcam', value: '5MP Pop-up Privacy Camera' },
                { label: 'Audio', value: 'Speaker Stereo Integrati 2x3W' },
                { label: 'Microfono', value: 'Dual Array Digital Mic' },
            ]
        },
        {
            id: 'connectivity',
            title: 'Connettività',
            icon: <Wifi size={24} />,
            items: [
                { label: 'Wireless', value: 'Wi-Fi 6 + Bluetooth 5.2' },
                { label: 'LAN', value: 'Gigabit Ethernet' },
                { label: 'Porte', value: 'USB 3.2, HDMI, Audio Jack' },
            ]
        }
    ];

    return (
        <div className={styles.container}>
            <GridBackground />

            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <motion.div
                        className={styles.heroText}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className={styles.heroTag}>eVision Standard</span>
                        <h1 className={styles.heroTitle}>
                            L'Eccellenza<br />
                            <span className={styles.gradient}>Quotidiana</span>
                        </h1>
                        <p className={styles.heroDesc}>
                            Il perfetto equilibrio tra design minimalista e potenza operativa. La scelta ideale per uffici moderni e home office di stile.
                        </p>
                        <div className={styles.heroCTAs}>
                            <Link href="/punti-vendita" className={styles.ctaPrimary}>
                                Configura
                            </Link>
                            <Link href="/linea-evision" className={styles.ctaSecondary}>
                                Torna alla Serie
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        className={styles.heroVisual}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className={styles.heroImageContainer}>
                            <Image
                                src="/assets/evision/standard-hero.png"
                                alt="Winblu eVision Standard"
                                fill
                                className={styles.heroProductImage}
                                priority
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Bento Grid Section */}
            <section className={styles.bentoSection}>
                <div className={styles.bentoGrid}>
                    <div className={`${styles.bentoCard} ${styles.cardLarge}`}>
                        <div className={styles.cardContent}>
                            <Layers size={48} className={styles.cardIcon} />
                            <h2 className={styles.cardTitle}>Minimalismo Funzionale</h2>
                            <p className={styles.cardText}>
                                Dimentica i cavi. Con il mouse e la tastiera wireless inclusi e il design ultra-compatto, la tua scrivania sarà sempre ordinata e pronta per la produttività.
                            </p>
                            <div className={styles.cardReveal}>
                                <p className={styles.cardText}>
                                    Lo stand in metallo satinato garantisce stabilità ed eleganza, mentre il sistema di cable management nasconde ogni distrazione.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.bentoCard} ${styles.cardMedium} ${styles.cardHighlight}`}>
                        <div className={styles.cardContent}>
                            <Camera size={48} className={styles.cardIcon} style={{ color: '#0160A9' }} />
                            <h3 className={styles.cardTitle}>Privacy Garantita</h3>
                            <p className={styles.cardText}>
                                La webcam pop-up da 5MP appare solo quando ne hai bisogno.
                            </p>
                            <div className={styles.cardReveal}>
                                <p className={styles.cardTextSmall}>
                                    Spingila verso il basso per disattivarla fisicamente. Nessuno potrà spiarti.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.bentoCard} ${styles.cardMedium}`}>
                        <div className={styles.cardContent}>
                            <Monitor size={48} className={styles.cardIcon} />
                            <h3 className={styles.cardTitle}>Visuale Immersiva</h3>
                            <p className={styles.cardText}>
                                Pannello IPS con bordi ultrasottili su tre lati per un'esperienza visiva senza interruzioni.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Specs Cards Section */}
            <section style={{ padding: '4rem 2rem', background: 'rgba(0,0,0,0.2)' }}>
                <div style={{ maxWidth: '1600px', margin: '0 auto' }}>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
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

            <B2BCTASection />
        </div>
    );
}
