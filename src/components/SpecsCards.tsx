"use client";

import { motion } from 'framer-motion';
import styles from './SpecsCards.module.css';
import { ReactNode } from 'react';

export interface SpecCard {
    id: string;
    title: string;
    icon: ReactNode;
    description: string;
}

interface SpecsCardsProps {
    specs: SpecCard[];
}

export default function SpecsCards({ specs }: SpecsCardsProps) {
    return (
        <div className={styles.specsGrid}>
            {specs.map((spec, index) => (
                <motion.div
                    key={spec.id}
                    className={styles.specCard}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                    <div className={styles.cardFront}>
                        <div className={styles.iconContainer}>
                            {spec.icon}
                        </div>
                        <h3 className={styles.specTitle}>{spec.title}</h3>
                    </div>
                    <div className={styles.cardHover}>
                        <p className={styles.specDescription}>{spec.description}</p>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
