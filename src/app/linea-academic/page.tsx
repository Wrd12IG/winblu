"use client";

import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/product-bento.module.css';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import B2BCTASection from "@/components/B2BCTASection";
import { motion } from 'framer-motion';
import { BookOpen, Shield, Users, Wifi, Box, Lock, Laptop, Monitor, Zap, Cpu, Award, School } from 'lucide-react';

const GridBackground = () => (
  <div className={styles.gridBg} />
);

export default function LineaAcademicPage() {
  return (
    <div className={styles.container}>
      <Navbar />
      <section className={styles.hero}>
        <GridBackground />
        <div className={styles.heroContent}>
          <motion.div
            className={styles.heroText}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className={styles.heroTag}>Winblu Academic</span>
            <h1 className={styles.heroTitle}>
              Ideali per la Scuola<br />
              <span className={styles.gradient}>di Oggi e Domani</span>
            </h1>
            <p className={styles.heroDesc}>
              L’informatizzazione delle Scuole è un obiettivo prioritario. Approfitta dei finanziamenti statali con i computer Winblu Academic: tecnologie di ultima generazione con Windows 11 Professional per mettere studenti e insegnanti al centro dell'apprendimento.
            </p>
            <div className={styles.heroCTAs}>
              <Link href="/punti-vendita" className={styles.ctaPrimary}>
                Trova Rivenditore
              </Link>
              <Link href="/punti-vendita" className={styles.ctaSecondary}>
                Contatta Team Education
              </Link>
            </div>
          </motion.div>

          <motion.div
            className={styles.heroVisual}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className={styles.heroImageContainer}>
              <Image
                src="/assets/academic-hero.png"
                alt="Winblu Academic Solutions"
                fill
                className={styles.heroProductImage}
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Shape The Future Section */}
      <section className={styles.bentoSection}>
        <div className={styles.bentoGrid}>
          <motion.div
            className={`${styles.bentoCard} ${styles.cardLarge} ${styles.cardHighlight}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className={styles.cardContent}>
              <Award size={48} className={styles.cardIcon} />
              <h2 className={styles.cardTitle}>Il Progetto "Shape The Future"</h2>
              <p className={styles.cardText}>
                Winblu Academic è la linea dedicata al mondo della Scuola a un prezzo agevolato, grazie alle condizioni speciali di Microsoft per Windows 11 Professional Education.
              </p>
              <div className={styles.cardReveal}>
                <p className={styles.cardText}>
                  Winblu è Partner Autorizzato per questo progetto, offrendo soluzioni certificate ISO 9001:2015 per rinnovare il parco macchine di scuole primarie e secondarie con tecnologie moderne e sicure.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Showcase Grid */}
      <section style={{ padding: '4rem 2rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              fontSize: '3rem',
              fontWeight: '800',
              textAlign: 'center',
              marginBottom: '4rem',
              background: 'linear-gradient(135deg, #fff 0%, #0160A9 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            La Gamma Winblu Academic
          </motion.h2>

          <div className={styles.bentoGrid}>
            <motion.div
              className={`${styles.bentoCard} ${styles.cardMedium}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className={styles.cardContent}>
                <Laptop size={48} className={styles.cardIcon} />
                <h3 className={styles.cardTitle}>Linea e-Motion</h3>
                <p className={styles.cardText}>
                  Notebook 15.6” che unisce performance e design. Piccolo, leggero e funzionale: il compagno ideale per l'apprendimento ovunque.
                </p>
              </div>
            </motion.div>

            <motion.div
              className={`${styles.bentoCard} ${styles.cardMedium}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className={styles.cardContent}>
                <Box size={48} className={styles.cardIcon} />
                <h3 className={styles.cardTitle}>Linea Easy Pro</h3>
                <p className={styles.cardText}>
                  PC ultracompatto da 1 Litro installabile dietro al monitor. Zero ingombro, massima concentrazione in classe.
                </p>
              </div>
            </motion.div>

            <motion.div
              className={`${styles.bentoCard} ${styles.cardLarge} ${styles.cardHighlight}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className={styles.cardContent}>
                <Monitor size={48} className={styles.cardIcon} />
                <h3 className={styles.cardTitle}>Linea eVision AIO</h3>
                <p className={styles.cardText}>
                  All-In-One 23.8” Full HD, disponibile anche TOUCH. La soluzione space-saving perfetta per laboratori interattivi e multimediali.
                </p>
                <div className={styles.cardReveal}>
                  <p className={styles.cardText}>
                    Potenza computazionale con CPU Intel® Core™ desktop per gestire senza sforzo i software didattici più avanzati.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className={`${styles.bentoCard} ${styles.cardMedium}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className={styles.cardContent}>
                <Cpu size={48} className={styles.cardIcon} />
                <h3 className={styles.cardTitle}>Linea Essential</h3>
                <p className={styles.cardText}>
                  Potenza SFF da 8.3 Lt. Flessibilità di posizionamento e affidabilità per ogni postazione scolastica.
                </p>
              </div>
            </motion.div>

            <motion.div
              className={`${styles.bentoCard} ${styles.cardMedium}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className={styles.cardContent}>
                <Zap size={48} className={styles.cardIcon} />
                <h3 className={styles.cardTitle}>Linea Energy</h3>
                <p className={styles.cardText}>
                  Il desktop tradizionale instancabile. Robustezza e prestazioni brillanti per la formazione di alto livello.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <B2BCTASection />
      <Footer />
    </div>
  );
}
