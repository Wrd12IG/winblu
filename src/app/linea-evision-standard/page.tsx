"use client";

import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/product-bento.module.css';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SpecsCards from "@/components/SpecsCards";
import B2BCTASection from "@/components/B2BCTASection";
import { motion } from 'framer-motion';
import { Monitor, Cpu, Box, Zap, Share2, Layers, HardDrive } from 'lucide-react';

const GridBackground = () => (
    <div className={styles.gridBg} />
);

export default function LineaEVisionStandardPage() {
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
                        <span className={styles.heroTag}>All-In-One Standard</span>
                        <h1 className={styles.heroTitle}>
                            Winblu <span className={styles.gradient}>eVision</span>
                        </h1>
                        <p className={styles.heroDesc}>
                            Un computer All-In-One performante, ergonomico ed elegante, perfetto per rendere prestigiosa la tua scrivania, la tua zona entertainment di casa o come soluzione tutta-in-uno particolarmente adatta per specifiche ambientazioni, ad esempio negozi, ristoranti o situazioni che richiedono prodotti space-saving ovvero a minimo ingombro.
                        </p>
                        <div className={styles.heroCTAs}>
                            <Link href="/punti-vendita" className={styles.ctaPrimary}>
                                Configura Ora
                            </Link>
                            <Link href="/linea-evision" className={styles.ctaSecondary}>
                                Torna a eVision
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
                                src="/assets/evision-standard-hero.jpg"
                                alt="Winblu eVision Standard"
                                fill
                                className={styles.heroProductImage}
                                priority
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Specs Cards Section - Using placeholder/general specs as user provided limited text */}
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
                        { id: 'display', title: 'Display', description: '23.8" Full HD (1920x1080) LED Backlight', icon: <Monitor size={24} /> },
                        { id: 'cpu', title: 'Processore', description: 'Intel® Core™ i3 / i5 / i7 Desktop', icon: <Cpu size={24} /> },
                        { id: 'storage', title: 'Archiviazione', description: 'SSD NVMe PCIe + 2.5" SATA Slot', icon: <HardDrive size={24} /> },
                        { id: 'connectivity', title: 'Connettività', description: 'Wi-Fi integrato, Bluetooth, LAN Gigabit', icon: <Share2 size={24} /> },
                        { id: 'design', title: 'Design', description: 'Ultra-slim, piedistallo in metallo, VESA Mount', icon: <Box size={24} /> },
                        { id: 'multimedia', title: 'Multimedia', description: 'Webcam integrata (opzionale), Speaker stereo', icon: <Layers size={24} /> },
                    ]} />
                </div>
            </section>

            <B2BCTASection />
            <Footer />
        </div>
    );
}
