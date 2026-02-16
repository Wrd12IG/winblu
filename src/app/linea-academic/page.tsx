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
              L’informatizzazione delle Scuole è uno degli obiettivi prioritari del nostro Paese e per raggiungerlo sono stati stanziati dallo Stato molti finanziamenti: è arrivato il momento di approfittarne, e i computer Winblu della linea Academic sono la scelta ideale per mettere a disposizione di studenti e insegnanti tecnologie di ultima generazione con il sistema operativo Windows 11 Professional.
            </p>
            <div className={styles.heroCTAs}>
              <Link href="/punti-vendita" className={styles.ctaPrimary}>
                Trova Rivenditore
              </Link>
              <Link href="/punti-vendita" className={styles.ctaSecondary}>
                Sei una Scuola?
              </Link>
            </div>
          </motion.div>

          {/* New Hero Image */}
          <motion.div
            className={styles.heroVisual}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className={styles.heroImageContainer}>
              <Image
                src="/assets/academic-hero-new.jpg"
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
              <School size={48} className={styles.cardIcon} style={{ color: '#0160A9' }} />
              <h2 className={styles.cardTitle}>Il progetto “Shape The Future”</h2>
              <p className={styles.cardText}>
                Winblu Academic è la linea dedicata al mondo della Scuola ad un prezzo agevolato, derivante dalle speciali condizioni praticate da Microsoft al sistema operativo Windows 11 Professional.
              </p>
              <div className={styles.cardReveal}>
                <p className={styles.cardText}>
                  Winblu è ufficialmente riconosciuto da Microsoft come Partner Autorizzato per la realizzazione di questo progetto. Un prezzo particolarmente vantaggioso per le Scuole pubbliche primarie e secondarie Italiane.
                </p>
              </div>
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
              <Users size={48} className={styles.cardIcon} />
              <h3 className={styles.cardTitle}>Per Rivenditori</h3>
              <p className={styles.cardText}>
                Winblu Academic offre al Rivenditore IT un’opportunità di business accattivante. Proponiti alle Scuole della tua zona con un’offerta vincente in termini di qualità e prezzo.
              </p>
            </div>
          </motion.div>

          <motion.div
            className={`${styles.bentoCard} ${styles.cardMedium} ${styles.cardHighlight}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className={styles.cardContent}>
              <Award size={48} className={styles.cardIcon} />
              <h3 className={styles.cardTitle}>Qualità Certificata</h3>
              <p className={styles.cardText}>
                Prodotti in Italia da una fabbrica con sistema di qualità certificato ISO 9001:2015. Potenti, affidabili e a prezzi imbattibili.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Showcase Grid - Updated with downloaded images */}
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
            I Prodotti Winblu Academic
          </motion.h2>

          <div className={styles.bentoGrid}>
            <motion.div
              className={`${styles.bentoCard} ${styles.cardLarge} ${styles.cardWithImage}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className={styles.cardImageContainer}>
                <Image src="/assets/academic-emotion.jpg" alt="Linea e-Motion" fill className={styles.cardImage} />
                <div className={styles.cardOverlay} />
              </div>
              <div className={styles.cardContent}>
                <Laptop size={48} className={styles.cardIcon} />
                <h3 className={styles.cardTitle}>Linea e-Motion</h3>
                <p className={styles.cardText}>
                  Notebook 15.6” che è la sintesi perfetta tra performance e design. Piccolo, leggero e funzionale.
                </p>
                <div className={styles.cardReveal}>
                  <p className={styles.cardText}>
                    Che sia una lezione in presenza o in DAD, Winblu e-Motion è il top di gamma per un’esperienza scolastica di classe!
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className={`${styles.bentoCard} ${styles.cardLarge} ${styles.cardWithImage}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className={styles.cardImageContainer}>
                <Image src="/assets/academic-easypro.png" alt="Linea Easy Pro" fill className={styles.cardImage} style={{ objectFit: 'contain', padding: '20px' }} />
                <div className={styles.cardOverlay} />
              </div>
              <div className={styles.cardContent}>
                <Box size={48} className={styles.cardIcon} />
                <h3 className={styles.cardTitle}>Linea Easy Pro</h3>
                <p className={styles.cardText}>
                  PC ultracompatto da 1 Litro (176 x 205 x 33 mm), installabile anche dietro al monitor (VESA).
                </p>
                <div className={styles.cardReveal}>
                  <p className={styles.cardText}>
                    Zero ingombro, massima concentrazione. Basato su processori Intel® Core™ di ultima generazione.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className={`${styles.bentoCard} ${styles.cardLarge} ${styles.cardHighlight} ${styles.cardWithImage}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className={styles.cardImageContainer}>
                <Image src="/assets/academic-evision.jpg" alt="Linea eVision" fill className={styles.cardImage} />
                <div className={styles.cardOverlay} />
              </div>
              <div className={styles.cardContent}>
                <Monitor size={48} className={styles.cardIcon} />
                <h3 className={styles.cardTitle}>Linea eVision AIO</h3>
                <p className={styles.cardText}>
                  All-In-One 23.8” Full HD, anche TOUCH. Perfetto per gli Istituti scolastici che richiedono prodotti space-saving.
                </p>
                <div className={styles.cardReveal}>
                  <p className={styles.cardText}>
                    Dotato di CPU Intel® Core™ desktop (i3, i5, i7) per gestire senza sforzo i software didattici più avanzati. Grafica integrata con supporto multi-monitor.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className={`${styles.bentoCard} ${styles.cardMedium} ${styles.cardWithImage}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className={styles.cardImageContainer}>
                <Image src="/assets/academic-essential.jpg" alt="Linea Essential" fill className={styles.cardImage} />
                <div className={styles.cardOverlay} />
              </div>
              <div className={styles.cardContent}>
                <Cpu size={48} className={styles.cardIcon} />
                <h3 className={styles.cardTitle}>Linea Essential</h3>
                <p className={styles.cardText}>
                  Concentrato di potenza in formato SFF (8.3 Lt). Posizionabile in orizzontale o verticale.
                </p>
                <div className={styles.cardReveal}>
                  <p className={styles.cardText}>
                    Versatili, performanti e a prezzi convenienti. I PC Essential sono promossi a pieni voti.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className={`${styles.bentoCard} ${styles.cardMedium} ${styles.cardWithImage}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className={styles.cardImageContainer}>
                <Image src="/assets/academic-energy.jpg" alt="Linea Energy" fill className={styles.cardImage} />
                <div className={styles.cardOverlay} />
              </div>
              <div className={styles.cardContent}>
                <Zap size={48} className={styles.cardIcon} />
                <h3 className={styles.cardTitle}>Linea Energy</h3>
                <p className={styles.cardText}>
                  Il compagno di banco dinamico ed instancabile. Robustezza e prestazioni brillanti per la Scuola 2.0.
                </p>
                <div className={styles.cardReveal}>
                  <p className={styles.cardText}>
                    Il master in Tecnologia! Un classico desktop di ultima generazione, robusto e affidabile.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className={`${styles.bentoCard} ${styles.cardSmall} ${styles.cardHighlight}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <div className={styles.cardContent}>
                <Lock size={36} className={styles.cardIcon} />
                <h3 className={styles.cardTitle}>Windows 11 Pro Edu</h3>
                <div className={styles.cardReveal}>
                  <p className={styles.cardTextSmall}>
                    Soluzione ideale per le Scuole. Progettato per migliorare produttività, prestazioni e sicurezza.
                  </p>
                </div>
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
