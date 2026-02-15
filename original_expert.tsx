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

export default function LineaExpertPage() {
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
              Winblu Linea Expert
            </motion.div>
            <motion.h1 variants={fadeInUp} className={styles.title}>
              Potenza e <br /> Affidabilità
            </motion.h1>
            <motion.p variants={fadeInUp} className={styles.heroDescription}>
              Progettato per i professionisti che non si accontentano.
              La linea Expert offre potenza di calcolo superiore ed un'estetica raffinata per ogni ambiente lavorativo.
            </motion.p>
          </motion.div>

          <motion.div
            className={styles.heroImageWrapper}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image
              src="/products/expert/extracted_26.png"
              alt="Winblu Expert Hero"
              fill
              className={styles.heroImage}
            />
          </motion.div>
        </div>
      </section>

      <section className={styles.intro}>
        <div className={styles.introContent}>
          <motion.p
            className={styles.introText}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            "Massima produttività e silenziosità: la workstation ideale per chi gestisce carichi di lavoro intensi con stile."
          </motion.p>
        </div>
      </section>

      <section className={styles.gallery}>
        <motion.h2
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Performance senza compromessi
        </motion.h2>

        <div className={styles.grid}>
          <motion.div
            className={`${styles.card} ${styles.cardLarge}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className={styles.cardImageContainer}>
              <Image src="/products/expert/extracted_24.jpeg" alt="Tower Design" width={600} height={400} style={{ objectFit: 'contain' }} />
            </div>
          </motion.div>

          <motion.div
            className={styles.card}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className={styles.cardImageContainer}>
              <Image src="/products/expert/extracted_29.png" alt="Connettività" width={300} height={300} style={{ objectFit: 'contain' }} />
            </div>
          </motion.div>

          <motion.div
            className={`${styles.card} ${styles.cardTall}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className={styles.cardImageContainer}>
              <Image src="/products/expert/extracted_27.png" alt="Interni" width={400} height={600} style={{ objectFit: 'contain' }} />
            </div>
          </motion.div>

          <motion.div
            className={styles.card}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className={styles.cardImageContainer}>
              <Image src="/products/expert/extracted_26.png" alt="Design" width={300} height={300} style={{ objectFit: 'contain' }} />
            </div>
          </motion.div>

          <motion.div
            className={styles.card}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div className={styles.cardImageContainer}>
              <Image src="/products/expert/extracted_23.png" alt="Logo" width={300} height={300} style={{ objectFit: 'contain' }} />
            </div>
          </motion.div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <motion.div
          className={styles.ctaContent}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.sectionTitle}>Potenzia il tuo business</h2>
          <Link href="/punti-vendita" className={styles.ctaButton}>
            Trova Rivenditore <span style={{ marginLeft: '10px' }}>→</span>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
