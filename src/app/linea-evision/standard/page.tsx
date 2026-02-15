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
                        <span className={styles.heroTag}>Winblu eVision Standard</span>
                        <h1 className={styles.heroTitle}>
                            Qualità ed<br />
                            <span className={styles.gradient}>Eleganza</span>
                        </h1>
                        <p className={styles.heroDesc}>
                            Bello da vedere, facile da utilizzare. Un’innovativa soluzione che abbina gli elevati livelli prestazionali dei PC Winblu con l’alta qualità di uno schermo Full HD integrato.
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
                            <Monitor size={48} className={styles.cardIcon} />
                            <h2 className={styles.cardTitle}>Parola d’ordine: Nitidezza</h2>
                            <p className={styles.cardText}>
                                Grazie al display Full HD e WEBCAM 5MP. Uno schermo da 23.8” o 27” LED retroilluminato con risoluzione 1920×1080 per immagini nitide e brillanti.
                            </p>
                            <div className={styles.cardReveal}>
                                <p className={styles.cardText}>
                                    Perfetto per rendere prestigiosa la tua scrivania, la tua zona entertainment di casa o per ambienti space-saving come negozi e ristoranti.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.bentoCard} ${styles.cardMedium} ${styles.cardHighlight}`}>
                        <div className={styles.cardContent}>
                            <Cpu size={48} className={styles.cardIcon} style={{ color: '#0160A9' }} />
                            <h3 className={styles.cardTitle}>14ᴬ Generazione</h3>
                            <p className={styles.cardText}>
                                Prestazioni al top con Intel® Core™ i3, i5 e i7.
                            </p>
                            <div className={styles.cardReveal}>
                                <p className={styles.cardTextSmall}>
                                    Capacità computazionale di primo livello, versatile e potente per ogni esigenza desktop.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.bentoCard} ${styles.cardMedium}`}>
                        <div className={styles.cardContent}>
                            <Camera size={48} className={styles.cardIcon} />
                            <h3 className={styles.cardTitle}>Multimedialità Totale</h3>
                            <p className={styles.cardText}>
                                Webcam 5MP pull-up, speaker 2x2W e microfono integrati.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Detailed Features Section - Restored Original Content */}
            <section style={{ padding: '4rem 2rem', background: '#111', color: '#fff' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{ display: 'grid', gap: '4rem' }}
                    >
                        <div>
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: '#00d2ff' }}>Prestazioni al top di gamma</h2>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#ccc' }}>
                                <strong>Winblu LCDPC eVision</strong> è capacità computazionale di primo livello, ancora più potente e versatile, grazie all’intera gamma dei processori <strong>Intel® Core™ fino alla 14A generazione</strong> versione desktop – i3, i5 e i7. Altrettanto completo il resto dell’architettura hardware, con possibilità di ospitare fino a <strong>64 GB di RAM DDR4</strong>, un Solid State Disk <strong>M.2 NVMe</strong> ultra veloce, più un ulteriore disco Sata3 – tradizionale o allo stato solido. Ottima anche la connettività con Gigabit LAN, Wifi, Bluetooth e lettore SD card integrati.
                            </p>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                            <div>
                                <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#fff' }}>Design & Space Saving</h3>
                                <p style={{ lineHeight: '1.7', color: '#aaa' }}>
                                    Come descrivere la combo LCDPC in soli due aggettivi? Winblu eVision è tutta la compattezza di una piattaforma hardware che si esprime al meglio attraverso la nitidezza di un display Full HD integrato. Un computer All-In-One performante, ergonomico ed elegante, perfetto per rendere prestigiosa la tua scrivania, la tua zona entertainment di casa o come soluzione tutta-in-uno particolarmente adatta per specifiche ambientazioni, ad esempio negozi, ristoranti o situazioni che richiedono prodotti space-saving ovvero a minimo ingombro.
                                </p>
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#fff' }}>Display & Multimedialità</h3>
                                <p style={{ lineHeight: '1.7', color: '#aaa' }}>
                                    La soluzione eVision è dotata di uno schermo da <strong>23.8” o 27” LED retroilluminato</strong> con risoluzione 1920×1080, in grado di restituire immagini nitide e brillanti. La linea eVision standard è disponibile in 2 colori a scelta, bianco/argento e nero. La grafica integrata <strong>Intel® UHD</strong> (in base alla CPU scelta), con connettore HDMI, permette la gestione simultanea di un ulteriore monitor. Completano il quadro un sistema audio con altoparlanti 2x2W, luce di cortesia, <strong>webcam 5MP pull-up</strong>, microfono e porta seriale/COM.
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
