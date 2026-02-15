"use client";

import { motion } from 'framer-motion';
import { Building2, FileText, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import styles from './B2BCTASection.module.css';

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

export default function B2BCTASection() {
    return (
        <section className={styles.container}>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className={styles.wrapper}
            >
                <h2 className={styles.title}>Soluzioni B2B su Misura</h2>
                <p className={styles.subtitle}>
                    Partner commerciali, rivenditori e aziende: scopri i vantaggi dedicati
                </p>

                <div className={styles.ctaGrid}>
                    {/* CTA 1: Diventa Rivenditore */}
                    <motion.div
                        className={styles.ctaCard}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        whileHover={{ scale: 1.02 }}
                    >
                        <div className={styles.cardIcon}>
                            <Building2 size={40} />
                        </div>
                        <h3 className={styles.cardTitle}>Diventa Rivenditore Winblu</h3>
                        <ul className={styles.cardFeatures}>
                            <li>Offri ai tuoi clienti tecnologia Made in Italy</li>
                            <li>Supporto commerciale e marketing dedicato</li>
                            <li>Margini competitivi e listini riservati</li>
                            <li>Formazione tecnica e certificazione</li>
                        </ul>
                        <Link href="/punti-vendita?tipo=rivenditore" className={styles.ctaButton}>
                            Richiedi Informazioni Partnership
                            <ArrowRight size={20} />
                        </Link>
                    </motion.div>

                    {/* CTA 2: Fornitura Aziendale */}
                    <motion.div
                        className={styles.ctaCard}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        whileHover={{ scale: 1.02 }}
                    >
                        <div className={styles.cardIcon}>
                            <FileText size={40} />
                        </div>
                        <h3 className={styles.cardTitle}>Richiesta Fornitura Aziendale</h3>
                        <ul className={styles.cardFeatures}>
                            <li>Configurazioni personalizzate per la tua azienda</li>
                            <li>Listini dedicati per ordini volume</li>
                            <li>Assistenza prioritaria e SLA garantiti</li>
                            <li>Gestione flotte e deploy on-site</li>
                        </ul>
                        <Link href="/punti-vendita?tipo=fornitura" className={styles.ctaButton}>
                            Richiedi Preventivo B2B
                            <ArrowRight size={20} />
                        </Link>
                    </motion.div>
                </div>

                <div className={styles.benefits}>
                    <div className={styles.benefit}>
                        <div className={styles.benefitNumber}>24/7</div>
                        <div className={styles.benefitText}>Supporto Tecnico Dedicato</div>
                    </div>
                    <div className={styles.benefit}>
                        <div className={styles.benefitNumber}>3 Anni</div>
                        <div className={styles.benefitText}>Garanzia Pick up & Return</div>
                    </div>
                    <div className={styles.benefit}>
                        <div className={styles.benefitNumber}>100%</div>
                        <div className={styles.benefitText}>Assemblato in Italia</div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
