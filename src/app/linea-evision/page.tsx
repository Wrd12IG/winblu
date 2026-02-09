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

export default function LineaEVisionPage() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <motion.div
            className={styles.heroText}
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className={styles.subtitle}>
              Winblu Linea eVision
            </motion.div>
            <motion.h1 variants={fadeInUp} className={styles.title}>
              L'arte del <br /> Minimalismo
            </motion.h1>
            <motion.p variants={fadeInUp} className={styles.heroDescription}>
              Un computer All-In-One dove prestazioni ed eleganza si fondono.
              Elimina il superfluo, concentra la potenza, eleva il tuo spazio di lavoro.
            </motion.p>
          </motion.div>

          <motion.div
            className={styles.heroImageWrapper}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image
              src="/products/evision/extracted_23.png"
              alt="Winblu eVision Hero"
              fill
              className={styles.heroImage}
            />
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className={styles.intro}>
        <div className={styles.introContent}>
          <motion.p
            className={styles.introText}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            "La perfezione si ottiene non quando non c'è più nulla da aggiungere,
            ma quando non c'è più nulla da togliere."
          </motion.p>
        </div>
      </section>

      {/* Bento Grid Gallery */}
      <section className={styles.gallery}>
        <motion.h2
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Dettagli che fanno la differenza
        </motion.h2>

        <div className={styles.grid}>
          {/* Large Main Feature */}
          <motion.div
            className={`${styles.card} ${styles.cardLarge}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className={styles.cardImageContainer}>
              <Image src="/products/evision/extracted_24.png" alt="Design Ultra Sottile" width={600} height={400} style={{ objectFit: 'contain' }} />
            </div>
          </motion.div>

          {/* Side Feature */}
          <motion.div
            className={styles.card}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className={styles.cardImageContainer}>
              <Image src="/products/evision/extracted_25.png" alt="Connettività laterale" width={300} height={300} style={{ objectFit: 'contain' }} />
            </div>
          </motion.div>

          {/* Tall Vertical Feature */}
          <motion.div
            className={`${styles.card} ${styles.cardTall}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className={styles.cardImageContainer}>
              <Image src="/products/evision/extracted_26.png" alt="Profilo elegante" width={400} height={600} style={{ objectFit: 'contain' }} />
            </div>
          </motion.div>

          {/* Standard Feature */}
          <motion.div
            className={styles.card}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className={styles.cardImageContainer}>
              <Image src="/products/evision/extracted_23.png" alt="Display Full HD" width={300} height={300} style={{ objectFit: 'contain' }} />
            </div>
          </motion.div>

          {/* Standard Feature */}
          <motion.div
            className={styles.card}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div className={styles.cardImageContainer}>
              <Image src="/products/evision/extracted_1.png" alt="Icona Design" width={300} height={300} style={{ objectFit: 'contain' }} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <motion.div
          className={styles.ctaContent}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.sectionTitle}>Pronto a trasformare la tua scrivania?</h2>
          <Link href="/punti-vendita" className={styles.ctaButton}>
            Trova Rivenditore <span style={{ marginLeft: '10px' }}>→</span>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
