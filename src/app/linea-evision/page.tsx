"use client";

import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/product-bento.module.css';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import B2BCTASection from "@/components/B2BCTASection";
import { motion } from 'framer-motion';
import { Monitor, MousePointerClick, ChevronRight } from 'lucide-react';

const GridBackground = () => (
  <div className={styles.gridBg} />
);

export default function LineaEVisionHub() {
  return (
    <div className={styles.container}>
      <Navbar />
      <section className={styles.hero}>
        <GridBackground />
        <div className={styles.heroContent}>
          <motion.div
            className={styles.heroText}
            initial={{ opacity: 1, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className={styles.heroTag}>All-In-One</span>
            <h1 className={styles.heroTitle}>
              Winblu <span className={styles.gradient}>eVision</span>
            </h1>
            <p className={styles.heroDesc}>
              L'eleganza incontra la performance. Soluzioni All-In-One perfette per ogni ambiente, dal business all'entertainment, con design space-saving e tecnologia di ultima generazione.
            </p>
            <div className={styles.heroCTAs}>
              <Link href="/punti-vendita" className={styles.ctaPrimary}>
                Trova Rivenditore
              </Link>
            </div>
          </motion.div>

          <motion.div
            className={styles.heroVisual}
            initial={{ opacity: 1, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className={styles.heroImageContainer}>
              <Image
                src="/assets/evision-hub-hero.png"
                alt="Winblu eVision Hub"
                fill
                className={styles.heroProductImage}
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className={styles.bentoSection}>
        <div className={styles.bentoGrid}>
          <motion.div
            className={`${styles.bentoCard} ${styles.cardMedium} ${styles.cardWithImage}`}
            initial={{ opacity: 1, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link href="/linea-evision-standard" className={styles.cardLink}>
              <div className={styles.cardImageContainer}>
                <Image
                  src="/assets/evision-standard-hero.jpg"
                  alt="eVision Standard"
                  fill
                  className={styles.cardImage}
                  sizes="(max-width: 768px) 100vw, 800px"
                />
                <div className={styles.cardOverlay} />
              </div>
              <div className={styles.cardContent}>
                <Monitor size={48} className={styles.cardIcon} style={{ color: '#fff' }} />
                <h2 className={styles.cardTitle} style={{ color: '#fff' }}>eVision Standard</h2>
                <p className={styles.cardText} style={{ color: 'rgba(255,255,255,0.9)' }}>
                  Un computer All-In-One performante, ergonomico ed elegante, perfetto per rendere prestigiosa la tua scrivania.
                </p>
                <div className={styles.cardReveal}>
                  <div style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', color: '#fff', fontWeight: '800' }}>
                    Scopri eVision Standard <ChevronRight size={16} style={{ marginLeft: '0.5rem' }} />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          <motion.div
            className={`${styles.bentoCard} ${styles.cardMedium} ${styles.cardWithImage}`}
            initial={{ opacity: 1, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Link href="/linea-evision-m-touch" className={styles.cardLink}>
              <div className={styles.cardImageContainer}>
                <Image
                  src="/assets/evision-touch-hero.jpg"
                  alt="eVision M-TOUCH"
                  fill
                  className={styles.cardImage}
                  sizes="(max-width: 768px) 100vw, 800px"
                />
                <div className={styles.cardOverlay} />
              </div>
              <div className={styles.cardContent}>
                <MousePointerClick size={48} className={styles.cardIcon} style={{ color: '#fff' }} />
                <h2 className={styles.cardTitle} style={{ color: '#fff' }}>eVision M-TOUCH</h2>
                <p className={styles.cardText} style={{ color: 'rgba(255,255,255,0.9)' }}>
                  Innovativa soluzione con schermo Touch Full HD. Prestazioni ad hoc e linee pulite, perfette per abbellire ogni ambiente con il minimo ingombro.
                </p>
                <div className={styles.cardReveal}>
                  <div style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', color: '#fff', fontWeight: '800' }}>
                    Scopri eVision M-TOUCH <ChevronRight size={16} style={{ marginLeft: '0.5rem' }} />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      <B2BCTASection />
      <Footer />
    </div>
  );
}
