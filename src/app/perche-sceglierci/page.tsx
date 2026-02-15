"use client";

import styles from '../linea-t-rok/linea-t-rok.module.css';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from 'framer-motion';
import { Award, Shield, Wrench, Users, TrendingUp, Heart, Zap, HeartHandshake } from 'lucide-react';
import Link from 'next/link';

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.12 }
    }
};

export default function PercheSceglierciPage() {
    const uspFeatures = [
        {
            icon: <Award size={40} />,
            title: "Assemblaggio Artigianale Italiano",
            description: "Ogni sistema è assemblato a mano da tecnici certificati nel nostro laboratorio in Italia. Controllo qualità totale su ogni singolo componente."
        },
        {
            icon: <Shield size={40} />,
            title: "Componenti Premium Selezionati",
            description: "Partnership dirette con ASUS, Intel, NVIDIA e i migliori brand mondiali. Solo hardware testato e certificato per garantire le massime prestazioni."
        },
        {
            icon: <Wrench size={40} />,
            title: "Supporto Tecnico Dedicato",
            description: "Un team di esperti sempre al tuo fianco. Assistenza telefonica, email e ticket in italiano con tempi di risposta rapidissimi."
        },
        {
            icon: <TrendingUp size={40} />,
            title: "Garanzia Estesa 3 Anni",
            description: "Dormi sonni tranquilli con la copertura completa su tutti i componenti. Sostituzioni rapide e assistenza on-site disponibile."
        },
        {
            icon: <Zap size={40} />,
            title: "Logistica Efficiente",
            description: "Spedizioni rapide in tutta Italia e gestione ordini B2B ottimizzata per rivenditori. Consegne puntuali e tracking completo."
        },
        {
            icon: <HeartHandshake size={40} />,
            title: "Personalizzazione Totale",
            description: "Configurazioni su misura per ogni esigenza. Dal gaming estremo alle workstation professionali, creiamo il sistema perfetto per te."
        }
    ];

    const stats = [
        { number: "20+", label: "Anni di Esperienza" },
        { number: "15.000+", label: "Sistemi Assemblati" },
        { number: "500+", label: "Rivenditori Partner" },
        { number: "98%", label: "Clienti Soddisfatti" }
    ];

    return (
        <div className={styles.container}>
            <Navbar />

            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroContent} style={{ textAlign: 'center', display: 'block' }}>
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                    >
                        <motion.div variants={fadeInUp} className={styles.subtitle}>
                            Perché Sceglierci
                        </motion.div>
                        <motion.h1 variants={fadeInUp} className={styles.title}>
                            Qualità <span style={{ color: 'var(--accent-cyan)' }}>Made in Italy</span><br />
                            Tecnologia Mondiale
                        </motion.h1>
                        <motion.p variants={fadeInUp} className={styles.heroDescription} style={{ margin: '0 auto', maxWidth: '700px' }}>
                            Winblu rappresenta l'eccellenza italiana nel settore dei computer assemblati.
                            Uniamo la passione artigianale con i componenti più avanzati al mondo.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* USP Grid */}
            <section className={styles.intro}>
                <div className={styles.introContent}>
                    <motion.h2
                        className={styles.sectionTitle}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Cosa Ci Rende Unici
                    </motion.h2>
                    <motion.div
                        className={styles.featuresGrid}
                        style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                    >
                        {uspFeatures.map((feature, index) => (
                            <motion.div
                                key={index}
                                className={styles.featureItem}
                                variants={fadeInUp}
                                whileHover={{
                                    scale: 1.05,
                                    transition: { duration: 0.2 }
                                }}
                            >
                                <div className={styles.featureIcon}>
                                    {feature.icon}
                                </div>
                                <h4>{feature.title}</h4>
                                <p>{feature.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className={styles.gallery} style={{ background: 'linear-gradient(180deg, rgba(0, 240, 255, 0.05) 0%, transparent 100%)' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
                    <motion.h2
                        className={styles.sectionTitle}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        I Numeri Parlano Chiaro
                    </motion.h2>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '3rem',
                        marginTop: '4rem',
                        textAlign: 'center'
                    }}>
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                            >
                                <div style={{
                                    fontSize: '4rem',
                                    fontWeight: '800',
                                    background: 'linear-gradient(135deg, var(--accent-cyan), var(--accent-blue))',
                                    WebkitBackgroundClip: 'text',
                                    backgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    marginBottom: '0.5rem'
                                }}>
                                    {stat.number}
                                </div>
                                <div style={{
                                    fontSize: '1.1rem',
                                    color: '#94a3b8',
                                    fontWeight: '600',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.1em'
                                }}>
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonial / Trust Section */}
            <section style={{ padding: '8rem 2rem', maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{
                        background: 'var(--bg-card)',
                        border: '1px solid var(--border-card)',
                        borderRadius: '32px',
                        padding: '4rem 3rem',
                        position: 'relative',
                        overflow: 'hidden'
                    }}
                >
                    <div style={{
                        position: 'absolute',
                        top: '-50px',
                        right: '-50px',
                        width: '200px',
                        height: '200px',
                        background: 'radial-gradient(circle, rgba(0, 240, 255, 0.1), transparent)',
                        borderRadius: '50%',
                        filter: 'blur(40px)'
                    }} />

                    <Heart size={50} color="var(--accent-cyan)" style={{ marginBottom: '2rem' }} />
                    <h3 style={{
                        fontSize: '2rem',
                        color: '#fff',
                        marginBottom: '1.5rem',
                        fontWeight: '700'
                    }}>
                        La Nostra Missione
                    </h3>
                    <p style={{
                        fontSize: '1.25rem',
                        color: '#94a3b8',
                        lineHeight: '1.8',
                        marginBottom: '2rem'
                    }}>
                        "Crediamo che ogni cliente meriti un sistema costruito con passione e attenzione ai dettagli.
                        Non vendiamo semplici computer, ma creiamo strumenti che trasformano il modo di lavorare e giocare.
                        La qualità italiana incontra l'innovazione globale."
                    </p>
                    <div style={{
                        display: 'inline-block',
                        padding: '0.75rem 2rem',
                        background: 'rgba(0, 240, 255, 0.1)',
                        border: '1px solid var(--accent-cyan)',
                        borderRadius: '100px',
                        color: 'var(--accent-cyan)',
                        fontWeight: '600',
                        fontSize: '0.9rem',
                        letterSpacing: '0.05em'
                    }}>
                        <Users size={18} style={{ verticalAlign: 'middle', marginRight: '0.5rem' }} />
                        TEAM WINBLU
                    </div>
                </motion.div>
            </section>

            {/* CTA Section */}
            <section className={styles.ctaSection}>
                <motion.div
                    className={styles.ctaContent}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <h2 className={styles.sectionTitle}>Pronto a Fare la Differenza?</h2>
                    <p style={{
                        fontSize: '1.2rem',
                        color: '#94a3b8',
                        marginBottom: '2rem',
                        maxWidth: '600px'
                    }}>
                        Scopri l'intera gamma di prodotti Winblu e trova la soluzione perfetta per le tue esigenze.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link href="/prodotti" className={styles.ctaButton}>
                            Esplora Prodotti
                        </Link>
                        <Link
                            href="/punti-vendita"
                            className={styles.ctaButton}
                            style={{
                                background: 'transparent',
                                border: '2px solid var(--accent-cyan)'
                            }}
                        >
                            Richiedi Listino
                        </Link>
                    </div>
                </motion.div>
            </section>

            <Footer />
        </div>
    );
}
