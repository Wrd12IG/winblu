"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Shield, Zap, Cpu, Monitor, Wifi, Award, ChevronRight, Layers, MousePointer2, Eye, LayoutGrid, Smartphone, Box } from 'lucide-react';
import styles from '../styles/product-bento.module.css';

const GridBackground = () => (
  <div className={styles.gridBg} />
);

export default function LineaEVisionPage() {
  return (
    <div className={styles.container}>
      <GridBackground />

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <motion.div
            className={styles.heroText}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className={styles.heroTag}>Winblu eVision Series</span>
            <h1 className={styles.heroTitle}>
              L'Arte del<br />
              <span className={styles.gradient}>Minimalismo</span>
            </h1>
            <p className={styles.heroDesc}>
              Eleganza e potenza in un unico corpo. Elimina l'ingombro dei cavi e trasforma il tuo modo di lavorare con l'All-In-One più evoluto.
            </p>
            <div className={styles.heroCTAs}>
              <Link href="/punti-vendita" className={styles.ctaPrimary}>
                Scopri la Gamma
              </Link>
              <Link href="/supporto" className={styles.ctaSecondary}>
                Supporto Tecnico
              </Link>
            </div>
          </motion.div>

          <motion.div
            className={styles.heroVisual}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className={styles.heroImageContainer}>
              <Image
                src="/assets/evision/hub-hero.png"
                alt="Winblu eVision All-in-One"
                fill
                className={styles.heroProductImage}
                priority
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Models Section - Bento Grid */}
      <section className={styles.bentoSection}>
        <div className={styles.bentoGrid}>
          {/* Main Highlight: eVision Standard */}
          <Link href="/linea-evision/standard" className={`${styles.bentoCard} ${styles.cardLarge}`} style={{ textDecoration: 'none' }}>
            <div className={styles.cardContent}>
              <Monitor size={48} className={styles.cardIcon} />
              <h2 className={styles.cardTitle}>eVision Standard</h2>
              <p className={styles.cardText}>
                La soluzione all-in-one definitiva per ufficio e home-office. Disponibile in 24" e 27" con webcam a scomparsa per la massima privacy.
              </p>
              <div className={styles.cardReveal}>
                <p className={styles.cardText}>
                  Design Zero-Frame, pannello FHD vivido e un set completo di connessioni wireless. Il perfetto equilibrio tra estetica e funzionalità.
                </p>
                <span className={styles.ctaButton} style={{ marginTop: '1rem', display: 'inline-block', fontSize: '0.9rem' }}>
                  Esplora Standard
                </span>
              </div>
            </div>
          </Link>

          {/* Feature: Tech */}
          <div className={`${styles.bentoCard} ${styles.cardSmall} ${styles.cardHighlight}`}>
            <div className={styles.cardContent}>
              <Cpu size={36} className={styles.cardIcon} />
              <h3 className={styles.cardTitle}>Intel® Core™</h3>
              <div className={styles.cardReveal}>
                <p className={styles.cardTextSmall}>
                  Potenza di calcolo senza compromessi con processori Intel Core di ultima generazione.
                </p>
              </div>
            </div>
          </div>

          {/* Secondary Highlight: eVision Touch */}
          <Link href="/linea-evision/touch" className={`${styles.bentoCard} ${styles.cardMedium} ${styles.cardWithImage}`} style={{ textDecoration: 'none' }}>
            <div className={styles.cardImageContainer}>
              <Image
                src="/assets/evision/touch-hero.png"
                alt="eVision Touch"
                fill
                style={{ objectFit: 'cover' }}
              />
              <div className={styles.cardOverlay} />
            </div>
            <div className={styles.cardContent} style={{ position: 'absolute', bottom: 0 }}>
              <MousePointer2 size={40} className={styles.cardIcon} style={{ color: '#fff' }} />
              <h3 className={styles.cardTitle}>eVision Touch</h3>
              <p className={styles.cardText} style={{ color: '#eee' }}>
                Interazione naturale con display multi-touch a 10 punti. Ideale per chioschi, creatività e interazione diretta.
              </p>
            </div>
          </Link>

          {/* Feature: Design */}
          <div className={`${styles.bentoCard} ${styles.cardMedium}`}>
            <div className={styles.cardContent}>
              <LayoutGrid size={48} className={styles.cardIcon} style={{ color: '#0160A9' }} />
              <h3 className={styles.cardTitle}>Workspace Elegance</h3>
              <p className={styles.cardText}>
                Riduci l'ingombro. Un solo cavo per l'alimentazione, mouse e tastiera wireless inclusi. La tua scrivania non è mai stata così pulita.
              </p>
            </div>
          </div>

          {/* Feature: Webcam */}
          <div className={`${styles.bentoCard} ${styles.cardSmall} ${styles.cardHighlight}`}>
            <div className={styles.cardContent}>
              <Eye size={36} className={styles.cardIcon} />
              <h3 className={styles.cardTitle}>Privacy-First</h3>
              <div className={styles.cardReveal}>
                <p className={styles.cardTextSmall}>
                  Webcam pop-up a scomparsa fisica. Sei tu a decidere quando essere visto.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
