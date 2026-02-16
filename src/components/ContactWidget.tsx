"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Mail, Phone, X, Calculator, HelpCircle, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import styles from '../app/styles/contact-widget.module.css';

export default function ContactWidget() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);

    const containerVariants = {
        hidden: { opacity: 0, scale: 0.8, y: 20, pointerEvents: 'none' as const },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            pointerEvents: 'auto' as const,
            transition: { type: 'spring', stiffness: 300, damping: 25 }
        },
        exit: { opacity: 0, scale: 0.8, y: 20, transition: { duration: 0.2 } }
    };

    return (
        <div className={styles.widgetContainer}>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className={styles.menuPanel}
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <div className={styles.menuHeader}>
                            <h3>Hai bisogno di aiuto?</h3>
                            <p>Siamo qui per supportare il tuo business.</p>
                        </div>

                        <div className={styles.menuOptions}>
                            <Link href="/contatti" className={`${styles.optionCard} ${styles.highlight}`}>
                                <div className={styles.iconWrapperHighlight}>
                                    <Calculator size={20} />
                                </div>
                                <div className={styles.optionContent}>
                                    <h4>Richiedi Preventivo</h4>
                                    <span>Soluzioni su misura per te</span>
                                </div>
                                <ChevronRight size={16} className={styles.arrow} />
                            </Link>

                            <a href="mailto:commerciale@winblu.it" className={styles.optionCard}>
                                <div className={styles.iconWrapper}>
                                    <Mail size={20} />
                                </div>
                                <div className={styles.optionContent}>
                                    <h4>Scrivici Email</h4>
                                    <span>Risposta in 24h lavorative</span>
                                </div>
                            </a>

                            <Link href="/supporto" className={styles.optionCard}>
                                <div className={styles.iconWrapper}>
                                    <HelpCircle size={20} />
                                </div>
                                <div className={styles.optionContent}>
                                    <h4>Supporto Tecnico</h4>
                                    <span>Assistenza dedicata</span>
                                </div>
                            </Link>
                        </div>

                        <div className={styles.menuFooter}>
                            <span className={styles.onlineStatus}></span> Risposta garantita entro 24 ore
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                className={styles.fab}
                onClick={toggleOpen}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.div
                            key="close"
                            initial={{ opacity: 0, rotate: -90 }}
                            animate={{ opacity: 1, rotate: 0 }}
                            exit={{ opacity: 0, rotate: 90 }}
                        >
                            <X size={28} />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="open"
                            initial={{ opacity: 0, rotate: 90 }}
                            animate={{ opacity: 1, rotate: 0 }}
                            exit={{ opacity: 0, rotate: -90 }}
                        >
                            <MessageCircle size={28} />
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.button>
        </div>
    );
}
