"use client";

import styles from '../linea-t-rok/linea-t-rok.module.css';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from 'framer-motion';
import { Shield, Clock, Wrench, Phone, CheckCircle, Award } from 'lucide-react';

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 }
    }
};

export default function GaranziaPage() {
    const features = [
        {
            icon: <Shield size={40} />,
            title: "3 Anni di Garanzia",
            description: "Copertura estesa su tutti i componenti hardware per la massima tranquillità."
        },
        {
            icon: <Wrench size={40} />,
            title: "Assistenza Tecnica Diretta",
            description: "Supporto professionale italiano disponibile via telefono, email e ticket."
        },
        {
            icon: <Clock size={40} />,
            title: "Sostituzione Rapida",
            description: "Intervento entro 24-48 ore per componenti difettosi in garanzia."
        },
        {
            icon: <Award size={40} />,
            title: "Centro Assistenza Italiano",
            description: "Laboratorio certificato con tecnici specializzati sul territorio nazionale."
        }
    ];

    const processSteps = [
        {
            number: "01",
            title: "Contattaci",
            description: "Apri un ticket o chiama il nostro supporto tecnico per segnalare il problema."
        },
        {
            number: "02",
            title: "Diagnosi",
            description: "I nostri tecnici identificano il componente difettoso e verificano la copertura."
        },
        {
            number: "03",
            title: "Riparazione",
            description: "Sostituiamo o ripariamo il componente presso il nostro centro autorizzato."
        },
        {
            number: "04",
            title: "Restituzione",
            description: "Il sistema viene testato e rispedito in perfette condizioni di funzionamento."
        }
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
                            Garanzia Winblu
                        </motion.div>
                        <motion.h1 variants={fadeInUp} className={styles.title}>
                            Proteggi il Tuo <br />
                            Investimento
                        </motion.h1>
                        <motion.p variants={fadeInUp} className={styles.heroDescription} style={{ margin: '0 auto', maxWidth: '700px' }}>
                            Dormi sonni tranquilli con la nostra garanzia completa e l'assistenza dedicata.
                            Ogni sistema Winblu è coperto da 3 anni di garanzia estesa.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Features Grid */}
            <section className={styles.intro}>
                <div className={styles.introContent}>
                    <motion.h2
                        className={styles.sectionTitle}
                        initial={{ opacity: 1, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        I Vantaggi della Garanzia Winblu
                    </motion.h2>
                    <motion.div
                        className={styles.featuresGrid}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                    >
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                className={styles.featureItem}
                                variants={fadeInUp}
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

            {/* Process Timeline */}
            <section className={styles.gallery} style={{ background: 'rgba(0, 240, 255, 0.02)' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
                    <motion.h2
                        className={styles.sectionTitle}
                        initial={{ opacity: 1, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Processo di Assistenza
                    </motion.h2>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginTop: '4rem' }}>
                        {processSteps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 1, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                style={{
                                    background: 'var(--bg-card)',
                                    border: '1px solid var(--border-card)',
                                    borderRadius: '24px',
                                    padding: '2rem',
                                    position: 'relative',
                                    transition: 'all 0.3s ease'
                                }}
                                whileHover={{
                                    borderColor: 'var(--accent-cyan)',
                                    transform: 'translateY(-5px)',
                                    boxShadow: '0 20px 40px rgba(0, 240, 255, 0.1)'
                                }}
                            >
                                <div style={{
                                    fontSize: '3rem',
                                    fontWeight: '800',
                                    color: 'var(--accent-cyan)',
                                    opacity: 0.2,
                                    marginBottom: '1rem'
                                }}>
                                    {step.number}
                                </div>
                                <h3 style={{
                                    fontSize: '1.5rem',
                                    color: '#fff',
                                    marginBottom: '1rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem'
                                }}>
                                    <CheckCircle size={24} color="var(--accent-cyan)" />
                                    {step.title}
                                </h3>
                                <p style={{ color: '#94a3b8', lineHeight: '1.7' }}>
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className={styles.ctaSection}>
                <motion.div
                    className={styles.ctaContent}
                    initial={{ opacity: 1, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <h2 className={styles.sectionTitle}>Hai Bisogno di Assistenza?</h2>
                    <p style={{
                        fontSize: '1.2rem',
                        color: '#94a3b8',
                        marginBottom: '2rem',
                        maxWidth: '600px'
                    }}>
                        Il nostro team di esperti è pronto ad aiutarti. Contattaci per qualsiasi problema o domanda.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href="/supporto" className={styles.ctaButton}>
                            <Phone size={20} /> Contatta Supporto
                        </a>
                        <a
                            href="/punti-vendita"
                            className={styles.ctaButton}
                            style={{
                                background: 'transparent',
                                border: '2px solid var(--accent-cyan)'
                            }}
                        >
                            Trova Rivenditore
                        </a>
                    </div>
                </motion.div>
            </section>

            <Footer />
        </div>
    );
}
