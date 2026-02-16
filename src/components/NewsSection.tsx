"use client";

import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './NewsSection.module.css';

const newsItems = [
    {
        id: 1,
        title: "Winblu e ASUS: Una partnership che si rinnova",
        date: "12 Feb 2024",
        excerpt: "Rafforzata la collaborazione strategica per offrire soluzioni sempre più performanti e all'avanguardia per il mercato italiano.",
        image: "/hero-gaming.png", // Using existing image as placeholder
        category: "Corporate"
    },
    {
        id: 2,
        title: "Nuova Linea Enterprise: Potenza e Sicurezza",
        date: "05 Feb 2024",
        excerpt: "Scopri le nuove soluzioni server progettate per garantire la massima affidabilità e protezione dei dati aziendali.",
        image: "/products/enterprise-3647/extracted_24.png", // Using existing image
        category: "Prodotti"
    },
    {
        id: 3,
        title: "Winblu al Tech Expo 2024",
        date: "28 Gen 2024",
        excerpt: "Venite a trovarci al padiglione 4 per toccare con mano le novità della gamma 2024 e incontrare i nostri esperti.",
        image: "/assets/evision-standard-hero.jpg", // Fixed broken reference
        category: "Eventi"
    }
];

export default function NewsSection() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className={styles.title}>Ultime Novità</h2>
                        <p className={styles.subtitle}>Resta aggiornato sul mondo Winblu</p>
                    </motion.div>
                    <Link href="/news" className={styles.viewAll}>
                        Tutte le news <ArrowRight size={20} />
                    </Link>
                </div>

                <div className={styles.grid}>
                    {newsItems.map((item, index) => (
                        <motion.article
                            key={item.id}
                            className={styles.card}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className={styles.imageContainer}>
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className={styles.image}
                                    style={{ objectFit: 'cover' }}
                                />
                                <span className={styles.category}>{item.category}</span>
                            </div>
                            <div className={styles.content}>
                                <div className={styles.meta}>
                                    <Calendar size={16} />
                                    <span>{item.date}</span>
                                </div>
                                <h3 className={styles.cardTitle}>{item.title}</h3>
                                <p className={styles.excerpt}>{item.excerpt}</p>
                                <Link href={`/news/${item.id}`} className={styles.readMore}>
                                    Leggi tutto <ArrowRight size={16} />
                                </Link>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
