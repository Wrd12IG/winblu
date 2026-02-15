"use client";

import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/product-bento.module.css';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SpecsCards from "@/components/SpecsCards";
import { SpecCategory } from "@/components/SpecsAccordion";
import B2BCTASection from "@/components/B2BCTASection";
import { motion } from 'framer-motion';
import { BookOpen, Shield, Users, Wifi, Box, Lock, Laptop } from 'lucide-react';

const GridBackground = () => (
  <div className={styles.gridBg} />
);

export default function LineaAcademicPage() {
  const technicalSpecs: SpecCategory[] = [
    {
      id: 'durability',
      title: 'Robustezza',
      icon: <Box size={24} />,
      items: [
        { label: 'Chassis', value: 'Rinforzato Anti-Shock' },
        { label: 'Tastiera', value: 'Spill-Resistant (Opzionale)' },
        { label: 'Durata', value: 'Testato per uso intensivo' },
      ]
    },
    {
      id: 'software',
      title: 'Edu Software',
      icon: <BookOpen size={24} />,
      items: [
        { label: 'OS', value: 'Windows 11 Pro Education' },
        { label: 'Suite', value: 'Office 365 A1 Ready' },
        { label: 'Management', value: 'Intune for Education' },
      ]
    },
    {
      id: 'security',
      title: 'Sicurezza & Privacy',
      icon: <Lock size={24} />,
      items: [
        { label: 'Filtro', value: 'Web/Content Filtering' },
        { label: 'Hardware', value: 'TPM 2.0 / Kensington Lock' },
        { label: 'Privacy', value: 'Webcam Shutter' },
      ]
    },
    {
      id: 'connectivity',
      title: 'Connettività Aula',
      icon: <Wifi size={24} />,
      items: [
        { label: 'Wi-Fi', value: 'Wi-Fi 6 (Alta Densità)' },
        { label: 'Proiezione', value: 'Miracast Support' },
        { label: 'Porte', value: 'USB-C / HDMI per LIM' },
      ]
    }
  ];

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
            <span className={styles.heroTag}>Linea Academic</span>
            <h1 className={styles.heroTitle}>
              Il Futuro<br />
              <span className={styles.gradient}>dell'Istruzione</span>
            </h1>
            <p className={styles.heroDesc}>
              Soluzioni tecnologiche pensate per la scuola di oggi e di domani. Robustezza, sicurezza e facilità d'uso per studenti e insegnanti.
            </p>
            <div className={styles.heroCTAs}>
              <Link href="/punti-vendita" className={styles.ctaPrimary}>
                Soluzioni Scuole
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
                alt="Winblu Academic PC"
                fill
                className={styles.heroProductImage}
                priority
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bento Grid Section */}
      <section className={styles.bentoSection}>
        <div className={styles.bentoGrid}>
          <div className={`${styles.bentoCard} ${styles.cardLarge}`}>
            <div className={styles.cardContent}>
              <Users size={48} className={styles.cardIcon} />
              <h2 className={styles.cardTitle}>Il Futuro dell'Istruzione</h2>
              <p className={styles.cardText}>
                Soluzioni tecnologiche pensate per la scuola di oggi e di domani. Robustezza, sicurezza e facilità d'uso per studenti e insegnanti.
              </p>
              <div className={styles.cardReveal}>
                <p className={styles.cardText}>
                  Progettati pensando alle esigenze specifiche delle scuole, i dispositivi Winblu Academic combinano robustezza, prestazioni e facilità di gestione centralizzata.
                </p>
              </div>
            </div>
          </div>

          <div className={`${styles.bentoCard} ${styles.cardSmall} ${styles.cardHighlight}`}>
            <div className={styles.cardContent}>
              <Shield size={36} className={styles.cardIcon} style={{ color: '#0160A9' }} />
              <h3 className={styles.cardTitle}>A Prova di Studente</h3>
              <div className={styles.cardReveal}>
                <p className={styles.cardTextSmall}>
                  Chassis rinforzati e componenti testati per resistere all'uso quotidiano intenso in classe e nei laboratori.
                </p>
              </div>
            </div>
          </div>

          <div className={`${styles.bentoCard} ${styles.cardMedium}`}>
            <div className={styles.cardContent}>
              <Laptop size={48} className={styles.cardIcon} />
              <h3 className={styles.cardTitle}>Didattica Innovativa</h3>
              <p className={styles.cardText}>
                Supportiamo la didattica innovativa con tecnologie che abilitano l'apprendimento digitale, dalla realtà aumentata al coding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Specs Cards Section */}
      <section style={{ padding: '4rem 2rem', background: 'rgba(0,0,0,0.2)' }}>
        <div style={{ maxWidth: '1600px', margin: '0 auto' }}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              textAlign: 'center',
              marginBottom: '4rem',
              background: 'linear-gradient(135deg, #fff 0%, #0160A9 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Specifiche Tecniche
          </motion.h2>
          <SpecsCards specs={technicalSpecs.map(spec => ({
            id: spec.id,
            title: spec.title,
            icon: spec.icon,
            description: spec.items.map(i => `${i.label}: ${i.value}`).join(' • ')
          }))} />
        </div>
      </section>

      <B2BCTASection />
    </div>
  );
}
