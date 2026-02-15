"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Shield, Zap, Cpu, Monitor, Wifi, Award, ChevronRight, Layers, MousePointer2, Eye, LayoutGrid, Smartphone, Box } from 'lucide-react';
import styles from '../styles/product-bento.module.css';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import B2BCTASection from "@/components/B2BCTASection";

const GridBackground = () => (
  <div className={styles.gridBg} />
);

export default function LineaEVisionPage() {
  return (
    <div className={styles.container}>
      <Navbar />
      <section className={styles.hero}>
        <GridBackground />
        <div className={styles.heroContent}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className={styles.heroText}
          >
            <span className={styles.heroTag}>L'Arte del Minimalismo</span>
            <h1 className={styles.heroTitle}>
              Winblu <span className={styles.gradient}>eVision</span>
            </h1>
            <p className={styles.heroDesc}>
              Eleganza e potenza in un unico corpo All-In-One. Elimina l'ingombro dei cavi e trasforma il tuo spazio di lavoro con la serie eVision, dove il design incontra la tecnologia più evoluta.
            </p>
            <div className={styles.heroCTAs}>
              <Link href="/punti-vendita?tipo=fornitura" className={styles.ctaPrimary}>
                Configura Ora
              </Link>
              <Link href="/punti-vendita" className={styles.ctaSecondary}>
                Trova Rivenditore
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={styles.heroVisual}
          >
            <div className={styles.heroImageContainer}>
              <Image
                src="/assets/evision/hub-hero.png"
                alt="Winblu eVision All-in-One"
                fill
                className={styles.heroProductImage}
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Models Section - Bento Grid */}
      <section className={styles.bentoSection}>
        <div className={styles.bentoGrid}>
          <motion.div
            className={`${styles.bentoCard} ${styles.cardLarge}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link href="/linea-evision/standard" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className={styles.cardContent}>
                <Monitor size={48} className={styles.cardIcon} />
                <h2 className={styles.cardTitle}>eVision Standard</h2>
                <p className={styles.cardText}>
                  La soluzione definitiva per ufficio e home-office. Display Zero-Frame da 24" e 27" con webcam pop-up a scomparsa per la massima privacy.
                </p>
                <div className={styles.cardReveal}>
                  <p className={styles.cardText}>
                    Pannelli IPS vividi, set completo di connessioni e un design pulito che trasforma ogni scrivania in un workspace d'eccellenza.
                  </p>
                  <span className={styles.ctaButton} style={{ marginTop: '1rem', display: 'inline-block' }}>
                    Scopri Standard
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>

          <motion.div
            className={`${styles.bentoCard} ${styles.cardSmall} ${styles.cardHighlight}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className={styles.cardContent}>
              <Eye size={36} className={styles.cardIcon} />
              <h3 className={styles.cardTitle}>Privacy-First</h3>
              <div className={styles.cardReveal}>
                <p className={styles.cardTextSmall}>
                  Webcam fisica a scomparsa meccanica. Tu decidi quando essere visto, senza compromessi.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className={`${styles.bentoCard} ${styles.cardMedium} ${styles.cardWithImage}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link href="/linea-evision/touch" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className={styles.cardImageContainer}>
                <Image
                  src="/assets/evision/touch-hero.png"
                  alt="eVision Touch"
                  fill
                  className={styles.cardImage}
                />
                <div className={styles.cardOverlay} />
              </div>
              <div className={styles.cardContent} style={{ position: 'relative', zIndex: 2 }}>
                <MousePointer2 size={40} className={styles.cardIcon} />
                <h3 className={styles.cardTitle}>eVision Touch</h3>
                <p className={styles.cardText}>
                  Interazione naturale 10-point multi-touch. Ideale per chioschi informativi e creatività interattiva.
                </p>
              </div>
            </Link>
          </motion.div>

          <motion.div
            className={`${styles.bentoCard} ${styles.cardMedium} ${styles.cardHighlight}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className={styles.cardContent}>
              <LayoutGrid size={48} className={styles.cardIcon} />
              <h3 className={styles.cardTitle}>Zero Cavi</h3>
              <p className={styles.cardText}>
                Alimentazione singola e periferiche wireless incluse. Un'estetica pulita per una mente più focalizzata sul lavoro.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <B2BCTASection />
      <Footer />
    </div>
  );
}
