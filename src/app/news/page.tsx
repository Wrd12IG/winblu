"use client";

import styles from '../linea-t-rok/linea-t-rok.module.css';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from 'framer-motion';
import { Calendar, Tag, ArrowRight, TrendingUp, Rocket, Award } from 'lucide-react';
import Link from 'next/link';

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

export default function NewsPage() {
    const newsArticles = [
        {
            id: 1,
            category: "Lanci Prodotto",
            icon: <Rocket size={24} />,
            title: "Nuova Linea T-ROK Z890: Arrow Lake è Qui",
            excerpt: "Scopri la potenza della nuova generazione gaming con Intel Core Ultra 2, Wi-Fi 7 e design panoramico a 270°.",
            date: "15 Gen 2026",
            large: true
        },
        {
            id: 2,
            category: "Partnership",
            icon: <Award size={24} />,
            title: "Winblu Partner Ufficiale ASUS",
            excerpt: "Siglato accordo strategico per l'utilizzo esclusivo di componenti premium certificati.",
            date: "8 Gen 2026",
            large: false
        },
        {
            id: 3,
            category: "Aggiornamenti",
            icon: <TrendingUp size={24} />,
            title: "Estensione Garanzia a 3 Anni Standard",
            excerpt: "Da oggi tutti i sistemi Winblu includono 3 anni di garanzia senza costi aggiuntivi.",
            date: "2 Gen 2026",
            large: false
        },
        {
            id: 4,
            category: "Eventi",
            icon: <Calendar size={24} />,
            title: "Winblu a Gitex Technology Week 2026",
            excerpt: "Vi aspettiamo al nostro stand per scoprire in anteprima le novità della stagione.",
            date: "20 Dic 2025",
            large: false
        },
        {
            id: 5,
            category: "Lanci Prodotto",
            icon: <Rocket size={24} />,
            title: "Linea eVision DDR5: Evoluzione All-in-One",
            excerpt: "Il nuovo standard per postazioni di lavoro minimali con prestazioni massime.",
            date: "10 Dic 2025",
            large: false
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
                            Winblu News
                        </motion.div>
                        <motion.h1 variants={fadeInUp} className={styles.title}>
                            Novità e<br />
                            <span style={{ color: 'var(--accent-cyan)' }}>Aggiornamenti</span>
                        </motion.h1>
                        <motion.p variants={fadeInUp} className={styles.heroDescription} style={{ margin: '0 auto', maxWidth: '700px' }}>
                            Resta aggiornato sulle ultime novità, i lanci di nuovi prodotti, gli eventi e le partnership di Winblu.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* News Grid */}
            <section style={{ padding: '4rem 2rem 8rem', maxWidth: '1400px', margin: '0 auto' }}>
                <motion.div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                        gap: '2rem'
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                >
                    {newsArticles.map((article, index) => (
                        <motion.article
                            key={article.id}
                            className={article.large ? styles.cardLarge : ''}
                            style={{
                                gridColumn: article.large ? 'span 2' : 'span 1',
                                background: 'var(--bg-card)',
                                border: '1px solid var(--border-card)',
                                borderRadius: '24px',
                                overflow: 'hidden',
                                position: 'relative',
                                transition: 'all 0.4s ease',
                                display: 'flex',
                                flexDirection: 'column',
                                cursor: 'pointer'
                            }}
                            variants={fadeInUp}
                            whileHover={{
                                borderColor: 'var(--accent-cyan)',
                                transform: 'translateY(-8px)',
                                boxShadow: '0 20px 40px rgba(0, 240, 255, 0.15)'
                            }}
                        >
                            {/* Category Badge */}
                            <div style={{
                                position: 'absolute',
                                top: '1.5rem',
                                left: '1.5rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                padding: '0.5rem 1rem',
                                background: 'rgba(0, 240, 255, 0.1)',
                                border: '1px solid var(--accent-cyan)',
                                borderRadius: '100px',
                                color: 'var(--accent-cyan)',
                                fontSize: '0.85rem',
                                fontWeight: '600',
                                zIndex: 2
                            }}>
                                {article.icon}
                                <span>{article.category}</span>
                            </div>

                            {/* Gradient Overlay */}
                            <div style={{
                                height: article.large ? '400px' : '250px',
                                background: `linear-gradient(135deg, rgba(0, 240, 255, 0.1), rgba(59, 130, 246, 0.1))`,
                                position: 'relative',
                                display: 'flex',
                                alignItems: 'flex-end',
                                padding: '2rem',
                                paddingTop: '4rem'
                            }}>
                                <div style={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    width: '80%',
                                    height: '80%',
                                    background: 'radial-gradient(circle, rgba(0, 240, 255, 0.2), transparent)',
                                    borderRadius: '50%',
                                    filter: 'blur(60px)'
                                }} />
                            </div>

                            {/* Content */}
                            <div style={{ padding: '2rem', flex: 1 }}>
                                <h3 style={{
                                    fontSize: article.large ? '2rem' : '1.5rem',
                                    fontWeight: '700',
                                    color: '#fff',
                                    marginBottom: '1rem',
                                    lineHeight: '1.3'
                                }}>
                                    {article.title}
                                </h3>
                                <p style={{
                                    color: '#94a3b8',
                                    lineHeight: '1.7',
                                    marginBottom: '1.5rem',
                                    fontSize: article.large ? '1.1rem' : '1rem'
                                }}>
                                    {article.excerpt}
                                </p>

                                {/* Footer */}
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    paddingTop: '1rem',
                                    borderTop: '1px solid var(--border-card)'
                                }}>
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        color: '#94a3b8',
                                        fontSize: '0.9rem'
                                    }}>
                                        <Calendar size={16} />
                                        {article.date}
                                    </div>
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        color: 'var(--accent-cyan)',
                                        fontWeight: '600',
                                        fontSize: '0.95rem'
                                    }}>
                                        Leggi di più <ArrowRight size={18} />
                                    </div>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </motion.div>
            </section>

            {/* CTA Section */}
            <section className={styles.ctaSection}>
                <motion.div
                    className={styles.ctaContent}
                    initial={{ opacity: 1, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <h2 className={styles.sectionTitle}>Vuoi Ricevere le Nostre News?</h2>
                    <p style={{
                        fontSize: '1.2rem',
                        color: '#94a3b8',
                        marginBottom: '2rem',
                        maxWidth: '600px'
                    }}>
                        Iscriviti alla newsletter per restare aggiornato su lanci prodotti, eventi e offerte esclusive.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link href="/punti-vendita" className={styles.ctaButton}>
                            Iscriviti alla Newsletter
                        </Link>
                    </div>
                </motion.div>
            </section>

            <Footer />
        </div>
    );
}
