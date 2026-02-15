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
              <Link href="/supporto" className={styles.ctaSecondary}>
                Contatta Education Team
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
                src="/assets/academic-hero.png"
                alt="Winblu Academic Solutions"
                fill
                className={styles.heroProductImage}
                priority
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Shape The Future Section */}
      <section className={styles.bentoSection}>
        <div className={styles.bentoGrid}>
          <div className={`${styles.bentoCard} ${styles.cardLarge}`} style={{ background: 'linear-gradient(145deg, #1e1e1e, #111)' }}>
            <div className={styles.cardContent}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <Award size={48} className={styles.cardIcon} style={{ color: '#00d2ff', marginBottom: 0 }} />
                <h2 className={styles.cardTitle} style={{ fontSize: '2rem', margin: 0 }}>Il Progetto "Shape The Future"</h2>
              </div>
              <p className={styles.cardText} style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
                Winblu Academic è la linea dedicata al mondo della Scuola a un prezzo agevolato, grazie alle condizioni speciali di Microsoft per Windows 11 Professional.
                Winblu è Partner Autorizzato per questo progetto, offrendo soluzioni certificate ISO 9001:2015 per rinnovare il parco macchine di scuole primarie e secondarie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase Grid */}
      <section style={{ padding: '2rem 2rem', background: 'transparent' }}>
        <div style={{ maxWidth: '1600px', margin: '0 auto' }}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              textAlign: 'center',
              marginBottom: '3rem',
              color: '#fff'
            }}
          >
            La Gamma Winblu Academic
          </motion.h2>

          <div className={styles.bentoGrid}>
            {/* e-Motion */}
            <div className={`${styles.bentoCard} ${styles.cardMedium}`}>
              <div className={styles.cardContent}>
                <Laptop size={48} className={styles.cardIcon} />
                <h3 className={styles.cardTitle}>Linea e-Motion</h3>
                <p className={styles.cardText}>
                  Notebook 15.6” che unisce performance e design. Piccolo, leggero e funzionale: il compagno ideale per la DAD e la lezione in presenza. Sintesi perfetta tra eleganza e hardware di ultima generazione.
                </p>
              </div>
            </div>

            {/* Easy Pro */}
            <div className={`${styles.bentoCard} ${styles.cardMedium}`}>
              <div className={styles.cardContent}>
                <Box size={48} className={styles.cardIcon} />
                <h3 className={styles.cardTitle}>Linea Easy Pro</h3>
                <p className={styles.cardText}>
                  PC ultracompatto (solo 1 Lt.) installabile anche dietro al monitor (VESA). Dimensioni minime, zero compromessi sulle prestazioni con processori Intel® Core™. Una scelta di... classe!
                </p>
              </div>
            </div>

            {/* eVision */}
            <div className={`${styles.bentoCard} ${styles.cardLarge}`}>
              <div className={styles.cardContent}>
                <Monitor size={48} className={styles.cardIcon} />
                <h3 className={styles.cardTitle}>Linea eVision AIO</h3>
                <p className={styles.cardText}>
                  All-In-One 23.8” Full HD, disponibile anche in versione TOUCH. La soluzione space-saving perfetta per i laboratori, con grafica Intel UHD e supporto fino a 2 monitor aggiuntivi per la massima produttività.
                </p>
                <div className={styles.cardReveal}>
                  <p className={styles.cardText}>
                    Potenza computazionale di primo livello con CPU Intel® Core™ i3, i5, i7 desktop per gestire qualsiasi software didattico.
                  </p>
                </div>
              </div>
            </div>

            {/* Essential */}
            <div className={`${styles.bentoCard} ${styles.cardMedium}`}>
              <div className={styles.cardContent}>
                <Cpu size={48} className={styles.cardIcon} />
                <h3 className={styles.cardTitle}>Linea Essential</h3>
                <p className={styles.cardText}>
                  Concentrato di potenza in formato SFF da 8.3 Lt. Posizionabile in verticale o orizzontale, offre massima funzionalità e prezzi convenienti. Promossi a pieni voti!
                </p>
              </div>
            </div>

            {/* Energy */}
            <div className={`${styles.bentoCard} ${styles.cardMedium}`}>
              <div className={styles.cardContent}>
                <Zap size={48} className={styles.cardIcon} />
                <h3 className={styles.cardTitle}>Linea Energy</h3>
                <p className={styles.cardText}>
                  Il best-seller Winblu: desktop tradizionale robusto e instancabile. Affidabilità totale per la Scuola 2.0, pronto a primeggiare sui banchi di studio con prestazioni brillanti.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section for Teachers & Resellers */}
      <section style={{ padding: '4rem 2rem', background: '#111' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
          <div style={{ padding: '2rem', background: 'rgba(255,255,255,0.05)', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.1)' }}>
            <Users size={32} style={{ color: '#00d2ff', marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#fff' }}>Per Docenti e Scuole</h3>
            <p style={{ color: '#ccc', lineHeight: '1.6', marginBottom: '1.5rem' }}>
              Sei un Docente o Responsabile Acquisti? Scopri tutte le soluzioni Winblu Academic e scegli quelle adatte al tuo Istituto.
            </p>
            <Link href="/punti-vendita" className={styles.ctaPrimary} style={{ width: '100%', textAlign: 'center' }}>
              Trova Rivenditore
            </Link>
          </div>

          <div style={{ padding: '2rem', background: 'rgba(255,255,255,0.05)', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.1)' }}>
            <Shield size={32} style={{ color: '#00d2ff', marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#fff' }}>Per Rivenditori IT</h3>
            <p style={{ color: '#ccc', lineHeight: '1.6', marginBottom: '1.5rem' }}>
              Proponiti alle scuole con un'offerta vincente! Configurazione di serie o su misura, sempre in linea con i requisiti Microsoft.
            </p>
            <Link href="/diventa-partner" className={styles.ctaSecondary} style={{ width: '100%', textAlign: 'center' }}>
              Diventa Partner Academic
            </Link>
          </div>
        </div>
      </section>

      <B2BCTASection />
    </div>
  );
}
