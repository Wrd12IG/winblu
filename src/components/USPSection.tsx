"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "./USPSection.module.css";

const uspData = [
    {
        id: 1,
        icon: "🇮🇹",
        title: "Assemblaggio Italiano Certificato",
        description: "Ogni PC è assemblato e testato a mano nel nostro laboratorio in Italia. Non semplice assemblaggio: cura artigianale e controllo qualità totale.",
        features: ["100% Made in Italy", "Test individuale 48h", "Certificato di autenticità"]
    },
    {
        id: 2,
        icon: "⚡",
        title: "Componenti Zero Compromessi",
        description: "Solo brand Tier-1 selezionati. ASUS, MSI, Corsair, Noctua. Niente componenti generici: ogni parte è scelta per affidabilità e prestazioni.",
        features: ["Garanzia estesa", "Componentistica premium", "Partnership dirette"]
    },
    {
        id: 3,
        icon: "🎯",
        title: "Assistenza Diretta, Non un Call Center",
        description: "Quando chiami, parli con i tecnici che conoscono le macchine. Supporto italiano, competente, rapido. Non ticket anonimi.",
        features: ["Supporto tecnico H24", "Tecnici certificati", "Intervento remoto"]
    }
];

export default function USPSection() {
    return (
        <section className={styles.uspSection}>
            <div className={styles.container}>
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className={styles.sectionTitle}>
                        La Differenza <span className={styles.highlight}>Winblu</span>
                    </h2>
                    <p className={styles.sectionSubtitle}>
                        Non vendiamo solo hardware. Costruiamo strumenti di precisione per passione e lavoro.
                    </p>
                </motion.div>

                <div className={styles.uspGrid}>
                    {uspData.map((usp, index) => (
                        <motion.div
                            key={usp.id}
                            className={styles.uspCard}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                        >
                            <div className={styles.iconWrapper}>
                                <div className={styles.iconBg} />
                                <span className={styles.icon}>{usp.icon}</span>
                            </div>

                            <h3 className={styles.uspTitle}>{usp.title}</h3>
                            <p className={styles.uspDescription}>{usp.description}</p>

                            <ul className={styles.featureList}>
                                {usp.features.map((feature, idx) => (
                                    <li key={idx} className={styles.featureItem}>
                                        <span className={styles.checkmark}>✓</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
