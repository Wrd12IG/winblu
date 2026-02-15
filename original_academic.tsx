"use client";

import styles from '../linea-t-rok/linea-t-rok.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function LineaAcademicPage() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <motion.div
            className={styles.heroText}
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className={styles.subtitle}>
              Winblu Linea Academic
            </motion.div>
            <motion.h1 variants={fadeInUp} className={styles.title}>
              Il Futuro <br /> dell'Istruzione
            </motion.h1>
            <motion.p variants={fadeInUp} className={styles.heroDescription}>
              Soluzioni tecnologiche pensate per la scuola di oggi e di domani.
              Robustezza, sicurezza e facilità d'uso per studenti e insegnanti.
            </motion.p>
          </motion.div>

          <motion.div
            className={styles.heroImageWrapper}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image
              src="/products/academic/extracted_23.png"
              alt="Winblu Academic Hero"
              fill
              className={styles.heroImage}
            />
          </motion.div>
        </div>
      </section>

      <section className={styles.intro}>
        <div className={styles.introContent}>
          <p>
            Progettati pensando alle esigenze specifiche delle scuole e degli studenti, i dispositivi Winblu Academic combinano robustezza, prestazioni e facilità di gestione. Supportiamo la didattica innovativa con tecnologie che abilitano l'apprendimento digitale.
          </p>
        </div>
      </section>

      <section className={styles.gallery}>
        <h2>Galleria</h2>
        <div className={styles.grid}>
          <div className={styles.card}>
            <Image src="/products/academic/extracted_24.jpeg" alt="Winblu Academic notebook" width={400} height={300} style={{ objectFit: "contain" }} />
          </div>
          <div className={styles.card}>
            <Image src="/products/academic/extracted_26.jpeg" alt="Winblu Academic in classe" width={400} height={300} style={{ objectFit: "contain" }} />
          </div>
          <div className={styles.card}>
            <Image src="/products/academic/extracted_29.png" alt="Winblu Academic prodotti" width={400} height={300} style={{ objectFit: "contain" }} />
          </div>
          <div className={styles.card}>
            <Image src="/products/academic/extracted_30.jpeg" alt="Winblu Academic laboratorio" width={400} height={300} style={{ objectFit: "contain" }} />
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2>Sei una scuola o un istituto?</h2>
          <p>Scopri le nostre soluzioni dedicate al mondo education</p>
          <Link href="/punti-vendita" className={styles.ctaButton}>
            Contattaci
          </Link>
        </div>
      </section>
    </div>
  );
}
