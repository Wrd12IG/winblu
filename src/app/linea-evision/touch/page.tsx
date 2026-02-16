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
import { MousePointer2, Layout, Sliders, Cpu, Move, PenTool } from 'lucide-react';

const GridBackground = () => (
    <div className={styles.gridBg} />
);

export default function EVisionTouchPage() {
    const technicalSpecs: SpecCategory[] = [
        {
            id: 'touch',
            title: 'Display Interattivo',
            icon: <MousePointer2 size={24} />,
            items: [
                { label: 'Tipologia', value: 'Capacitive Multi-Touch' },
                { label: 'Punti', value: '10 Punti di Tocco Simultanei' },
                { label: 'Superficie', value: 'Vetro Edge-to-Edge 7H' },
            ]
        },
        {
            id: 'ergonomics',
            title: 'Ergonomia',
            icon: <Move size={24} />,
            items: [
                { label: 'Stand', value: 'Dual-Hinge Stand' },
                { label: 'Inclinazione', value: 'Da -5° a +60°' },
                { label: 'Utilizzo', value: 'Desktop & Drafting Mode' },
            ]
        },
        {
            id: 'performance',
            title: 'Potenza Creativa',
            icon: <Cpu size={24} />,
            items: [
                { label: 'CPU', value: 'Intel® Core™ i5 / i7' },
                { label: 'Grafica', value: 'Intel® Iris® Xe Graphics' },
                { label: 'RAM', value: 'DDR4/DDR5 fino a 64GB' },
            ]
        },
        {
            id: 'connectivity',
            title: 'IO & Porte',
            icon: <Layout size={24} />,
            items: [
                { label: 'USB Laterali', value: '2x USB 3.0 (Accesso Rapido)' },
                { label: 'Video Out', value: 'HDMI + Daisy Chain Support' },
                { label: 'Lettore', value: 'SD Card Reader Integrato' },
            ]
        }
    ];

    return (
        <div className={styles.container}>
            <Navbar />
            <GridBackground />

            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <motion.div
                        className={styles.heroText}
                        initial={{ opacity: 1, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className={styles.heroTag}>eVision M-TOUCH</span>
                        <h1 className={styles.heroTitle}>
                            Il Tuo Tocco<br />
                            <span className={styles.gradient}>Creativo</span>
                        </h1>
                        <p className={styles.heroDesc}>
                            Bello da vedere, facile da utilizzare...con un dito. eVision è un’innovativa soluzione che abbina gli elevati livelli prestazionali dei PC Winblu con l’alta qualità di uno schermo Full HD con tecnologia M-TOUCH.
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
                        initial={{ opacity: 1, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className={styles.heroImageContainer}>
                            <Image
                                src="/assets/evision/touch-hero.png"
                                alt="Winblu eVision Touch"
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
                            <PenTool size={48} className={styles.cardIcon} />
                            <h2 className={styles.cardTitle}>Semplicità in punta di dita</h2>
                            <p className={styles.cardText}>
                                La soluzione eVision è dotata di uno schermo da 23.8” M-TOUCH (10-point) LED retroilluminato con risoluzione 1920×1080.
                            </p>
                            <div className={styles.cardReveal}>
                                <p className={styles.cardText}>
                                    Ideale per negozi, ristoranti o situazioni che richiedono prodotti space-saving e la semplicità di utilizzo immediata.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.bentoCard} ${styles.cardMedium} ${styles.cardHighlight}`}>
                        <div className={styles.cardContent}>
                            <Cpu size={48} className={styles.cardIcon} style={{ color: '#0160A9' }} />
                            <h3 className={styles.cardTitle}>13ᴬ Generazione</h3>
                            <p className={styles.cardText}>
                                Potenza Intel® Core™ i3, i5 e i7 di 12ᴬ e 13ᴬ generazione.
                            </p>
                            <div className={styles.cardReveal}>
                                <p className={styles.cardTextSmall}>
                                    Capacità computazionale di primo livello, ancora più potente e versatile per ogni carico di lavoro.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.bentoCard} ${styles.cardMedium}`}>
                        <div className={styles.cardContent}>
                            <Layout size={48} className={styles.cardIcon} />
                            <h3 className={styles.cardTitle}>Space Saving</h3>
                            <p className={styles.cardText}>
                                Un computer All-In-One performante, ergonomico ed elegante, perfetto per rendere prestigiosa la tua scrivania.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Detailed Features Section - Restored Original Content */}
            <section style={{ padding: '4rem 2rem', background: '#111', color: '#fff' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <motion.div
                        initial={{ opacity: 1, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{ display: 'grid', gap: '4rem' }}
                    >
                        <div>
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: '#00d2ff' }}>Prestazioni al top di gamma</h2>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#ccc' }}>
                                <strong>Winblu LCDPC eVision</strong> è capacità computazionale di primo livello, ancora più potente e versatile, grazie all’intera gamma dei processori <strong>Intel® Core™ di 12A e 13A generazione</strong> versione desktop – i3, i5 e i7; altrettanto completo il resto dell’architettura hardware, con possibilità di ospitare fino a <strong>64 GB di RAM DDR4</strong>, un Solid State Disk <strong>M.2 NVMe</strong> ultra veloce, più un ulteriore disco Sata3 – tradizionale o allo stato solido. Ottima anche la connettività con Gigabit LAN, Wifi, Bluetooth e lettore SD card integrati.
                            </p>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                            <div>
                                <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#fff' }}>Parola d'ordine: Nitidezza</h3>
                                <p style={{ lineHeight: '1.7', color: '#aaa' }}>
                                    Come descrivere la combo LCDPC in soli due aggettivi? Winblu eVision M-TOUCH è tutta la compattezza di una piattaforma hardware che si esprime al meglio attraverso la nitidezza di un display Full HD integrato. La soluzione eVision è dotata di uno schermo da <strong>23.8” M-TOUCH (10-point) LED retroilluminato</strong> con risoluzione 1920×1080, in grado di restituire immagini nitide e brillanti.
                                </p>
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#fff' }}>Design & Multimedialità</h3>
                                <p style={{ lineHeight: '1.7', color: '#aaa' }}>
                                    La linea eVision M-TOUCH è disponibile nel colore <strong>bianco/argento</strong>, soluzione perfetta per abbellire ogni ambiente. La grafica integrata <strong>Intel® UHD</strong> (in base alla CPU scelta), con connettore HDMI, permette la gestione simultanea di un ulteriore monitor. Completano il quadro un sistema audio con altoparlanti 2x2W, luce di cortesia, <strong>webcam 5MP pull-up</strong>, microfono e porta seriale/COM, per il massimo della multimedialità.
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
                        initial={{ opacity: 1, y: 20 }}
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
            <Footer />
        </div>
    );
}
