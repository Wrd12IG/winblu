"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "./TestimonialsSection.module.css";

const testimonials = [
    {
        id: 1,
        name: "Marco Santini",
        role: "Pro Gamer - Team Esports Italia",
        image: "👤",
        text: "Sono passato a Winblu dopo anni di problemi con i brand mainstream. Zero microstuttering, zero thermal throttling. Il supporto tecnico risponde in 10 minuti, non in 10 giorni. Una macchina da guerra.",
        rating: 5
    },
    {
        id: 2,
        name: "Giulia Romano",
        role: "Video Editor Freelance",
        image: "👤",
        text: "Lavoro su progetti 4K/8K ogni giorno. La mia workstation Winblu non ha mai crashato, nemmeno in timeline da 200 layer. L'assemblaggio italiano si sente eccome: dettagli curati che fanno la differenza quando hai scadenze strette.",
        rating: 5
    },
    {
        id: 3,
        name: "Alessandro Ferri",
        role: "3D Artist - Studio Architettura",
        image: "👤",
        text: "Rendering V-Ray che prima richiedevano ore, ora in minuti. Ma soprattutto: assistenza che capisce cosa chiedi. Non devi perdere tempo a spiegare cosa sia un raytracing. Persone competenti, prodotto premium.",
        rating: 5
    }
];

export default function TestimonialsSection() {
    return (
        <section className={styles.testimonialsSection}>
            <div className={styles.container}>
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className={styles.sectionTitle}>
                        Chi Si <span className={styles.highlight}>Fida</span> di Noi
                    </h2>
                    <p className={styles.sectionSubtitle}>
                        Dalle arene competitive agli studi professionali: chi sceglie Winblu non torna indietro.
                    </p>
                </motion.div>

                <div className={styles.testimonialsGrid}>
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            className={styles.testimonialCard}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <div className={styles.quoteIcon}>"</div>

                            <p className={styles.testimonialText}>{testimonial.text}</p>

                            <div className={styles.rating}>
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <span key={i} className={styles.star}>★</span>
                                ))}
                            </div>

                            <div className={styles.authorInfo}>
                                <div className={styles.avatar}>{testimonial.image}</div>
                                <div>
                                    <div className={styles.authorName}>{testimonial.name}</div>
                                    <div className={styles.authorRole}>{testimonial.role}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
