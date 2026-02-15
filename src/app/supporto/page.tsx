"use client";

import styles from '../linea-t-rok/linea-t-rok.module.css';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from 'framer-motion';
import { Phone, Mail, MessageCircle, Clock, MapPin, ChevronDown, FileText, Headphones } from 'lucide-react';
import { useState } from 'react';

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

export default function SupportoPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const supportChannels = [
        {
            icon: <Phone size={40} />,
            title: "Supporto Telefonico",
            description: "Parla direttamente con i nostri tecnici esperti",
            info: "+39 02 58437000",
            hours: "Lun-Ven: 9:00 - 18:00"
        },
        {
            icon: <Mail size={40} />,
            title: "Email Dedicata",
            description: "Invia una richiesta dettagliata al nostro team",
            info: "supporto@winblu.it",
            hours: "Risposta entro 24h"
        },
        {
            icon: <MessageCircle size={40} />,
            title: "Sistema Ticket",
            description: "Apri un ticket per problematiche complesse",
            info: "Portale Online",
            hours: "Tracciamento completo"
        },
        {
            icon: <Headphones size={40} />,
            title: "Assistenza On-Site",
            description: "Intervento diretto presso la tua sede",
            info: "Solo per aziende",
            hours: "Entro 24-48h"
        }
    ];

    const faqs = [
        {
            question: "Come posso richiedere assistenza in garanzia?",
            answer: "Contatta il nostro supporto tecnico via telefono o email fornendo il numero di serie del prodotto. Il nostro team verificherà la copertura e ti guiderà nel processo di riparazione o sostituzione."
        },
        {
            question: "Quali sono i tempi di intervento?",
            answer: "Per assistenza telefonica la risposta è immediata. Per interventi on-site garantiamo un tempo di arrivo entro 24-48 ore lavorative. Le riparazioni in laboratorio richiedono mediamente 5-7 giorni lavorativi."
        },
        {
            question: "Posso estendere la garanzia oltre i 3 anni?",
            answer: "Sì, offriamo piani di estensione garanzia fino a 5 anni totali. Contatta il nostro reparto commerciale per maggiori informazioni sui prezzi e le condizioni."
        },
        {
            question: "Dove posso scaricare i driver?",
            answer: "I driver specifici per il tuo sistema sono disponibili sul sito dei produttori dei componenti (Intel, NVIDIA, ASUS, etc.). Per assistenza nella ricerca dei driver corretti, contatta il nostro supporto."
        },
        {
            question: "Offrite supporto per configurazioni personalizzate?",
            answer: "Assolutamente sì. Il nostro team è specializzato in configurazioni su misura. Che tu abbia bisogno di una workstation professionale o di un gaming PC estremo, possiamo aiutarti a scegliere i componenti ideali."
        },
        {
            question: "Come funziona l'assistenza per i rivenditori?",
            answer: "I rivenditori autorizzati hanno accesso a un portale dedicato con supporto prioritario, materiale marketing e condizioni commerciali speciali. Contatta il reparto B2B per maggiori dettagli."
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
                            Centro Assistenza
                        </motion.div>
                        <motion.h1 variants={fadeInUp} className={styles.title}>
                            Siamo Qui <br />
                            Per Aiutarti
                        </motion.h1>
                        <motion.p variants={fadeInUp} className={styles.heroDescription} style={{ margin: '0 auto', maxWidth: '700px' }}>
                            Il nostro team di esperti è sempre al tuo fianco per risolvere qualsiasi problema.
                            Assistenza professionale italiana, rapida ed efficace.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Support Channels Grid */}
            <section className={styles.intro}>
                <div className={styles.introContent}>
                    <motion.h2
                        className={styles.sectionTitle}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        I Nostri Canali di Supporto
                    </motion.h2>
                    <motion.div
                        className={styles.featuresGrid}
                        style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                    >
                        {supportChannels.map((channel, index) => (
                            <motion.div
                                key={index}
                                className={styles.featureItem}
                                variants={fadeInUp}
                                whileHover={{ scale: 1.05 }}
                            >
                                <div className={styles.featureIcon}>
                                    {channel.icon}
                                </div>
                                <h4>{channel.title}</h4>
                                <p style={{ marginBottom: '1rem' }}>{channel.description}</p>
                                <div style={{
                                    padding: '0.75rem 1.5rem',
                                    background: 'rgba(0, 240, 255, 0.1)',
                                    border: '1px solid var(--accent-cyan)',
                                    borderRadius: '12px',
                                    color: 'var(--accent-cyan)',
                                    fontWeight: '600',
                                    fontSize: '0.95rem',
                                    marginBottom: '0.5rem'
                                }}>
                                    {channel.info}
                                </div>
                                <div style={{
                                    fontSize: '0.85rem',
                                    color: '#94a3b8',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    justifyContent: 'center'
                                }}>
                                    <Clock size={14} />
                                    {channel.hours}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className={styles.gallery} style={{ background: 'rgba(0, 240, 255, 0.02)' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 2rem' }}>
                    <motion.h2
                        className={styles.sectionTitle}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Domande Frequenti
                    </motion.h2>

                    <div style={{ marginTop: '4rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                style={{
                                    background: 'var(--bg-card)',
                                    border: '1px solid var(--border-card)',
                                    borderRadius: '16px',
                                    overflow: 'hidden',
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                <button
                                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                    style={{
                                        width: '100%',
                                        padding: '1.5rem 2rem',
                                        background: 'transparent',
                                        border: 'none',
                                        color: '#fff',
                                        fontSize: '1.1rem',
                                        fontWeight: '600',
                                        textAlign: 'left',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        transition: 'color 0.2s'
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-cyan)'}
                                    onMouseLeave={(e) => e.currentTarget.style.color = '#fff'}
                                >
                                    <span>{faq.question}</span>
                                    <ChevronDown
                                        size={24}
                                        style={{
                                            transform: openFaq === index ? 'rotate(180deg)' : 'rotate(0)',
                                            transition: 'transform 0.3s ease',
                                            color: 'var(--accent-cyan)'
                                        }}
                                    />
                                </button>
                                <div style={{
                                    maxHeight: openFaq === index ? '500px' : '0',
                                    overflow: 'hidden',
                                    transition: 'max-height 0.3s ease'
                                }}>
                                    <div style={{
                                        padding: '0 2rem 1.5rem 2rem',
                                        color: '#94a3b8',
                                        lineHeight: '1.7',
                                        fontSize: '1rem'
                                    }}>
                                        {faq.answer}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Info Section */}
            <section style={{ padding: '8rem 2rem', maxWidth: '1000px', margin: '0 auto' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{
                        background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.1), rgba(59, 130, 246, 0.1))',
                        border: '1px solid var(--border-card)',
                        borderRadius: '32px',
                        padding: '4rem 3rem',
                        textAlign: 'center'
                    }}
                >
                    <MapPin size={50} color="var(--accent-cyan)" style={{ marginBottom: '2rem' }} />
                    <h3 style={{
                        fontSize: '2rem',
                        color: '#fff',
                        marginBottom: '1rem',
                        fontWeight: '700'
                    }}>
                        Orari di Assistenza
                    </h3>
                    <div style={{
                        color: '#94a3b8',
                        fontSize: '1.1rem',
                        lineHeight: '2',
                        marginBottom: '2rem'
                    }}>
                        <p><strong style={{ color: 'var(--accent-cyan)' }}>Lunedì - Venerdì:</strong> 9:00 - 18:00</p>
                        <p><strong style={{ color: 'var(--accent-cyan)' }}>Sabato - Domenica:</strong> Chiuso</p>
                        <p style={{ marginTop: '1.5rem', fontSize: '0.95rem' }}>
                            Per emergenze fuori orario, apri un ticket online e sarai ricontattato il primo giorno lavorativo utile.
                        </p>
                    </div>
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        padding: '1rem 2rem',
                        background: 'var(--bg-card)',
                        border: '1px solid var(--accent-cyan)',
                        borderRadius: '100px',
                        color: 'var(--accent-cyan)',
                        fontWeight: '600'
                    }}>
                        <FileText size={20} />
                        <span>Scarica Manuale Utente</span>
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
                    <h2 className={styles.sectionTitle}>Non Hai Trovato Risposta?</h2>
                    <p style={{
                        fontSize: '1.2rem',
                        color: '#94a3b8',
                        marginBottom: '2rem',
                        maxWidth: '600px'
                    }}>
                        Il nostro team è pronto ad assisterti. Contattaci ora per ricevere supporto immediato.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a
                            href="mailto:supporto@winblu.it"
                            className={styles.ctaButton}
                        >
                            <Mail size={20} /> Invia Email
                        </a>
                        <a
                            href="tel:+390258437000"
                            className={styles.ctaButton}
                            style={{
                                background: 'transparent',
                                border: '2px solid var(--accent-cyan)'
                            }}
                        >
                            <Phone size={20} /> Chiama Ora
                        </a>
                    </div>
                </motion.div>
            </section>

            <Footer />
        </div>
    );
}
