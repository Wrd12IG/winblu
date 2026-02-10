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


export default function LineaEasyProPage() {
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
              Winblu Easy Pro
            </motion.div>
            <motion.h1 variants={fadeInUp} className={styles.title}>
              Piccolo Fuori, <br /> Grande Dentro
            </motion.h1>
            <motion.p variants={fadeInUp} className={styles.heroDescription}>
              Un TOP computer travestito da Mini-PC. Potenza, versatilità e compattezza per ogni esigenza, dall'ufficio all'home entertainment.
            </motion.p>
          </motion.div>

          <motion.div
            className={styles.heroImageWrapper}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image
              src="/products/easy-pro/extracted_24.png"
              alt="Winblu Easy Pro Hero"
              fill
              className={styles.heroImage}
            />
          </motion.div>
        </div>
      </section>

      <section className={styles.intro}>
        <div className={styles.introContent}>
          <p>
            Winblu Easy Pro ridefinisce il concetto di spazio e potenza. Nonostante le dimensioni ridotte, offre prestazioni paragonabili a un desktop tower tradizionale, rendendolo ideale per scrivanie minimaliste, sale riunioni e postazioni di lavoro flessibili.
          </p>
        </div>
      </section>

      <section className={styles.gallery}>
        <h2>Galleria</h2>
        <div className={styles.grid}>
          <div className={styles.card}>
            <Image src="/products/easy-pro/extracted_25.png" alt="Winblu Easy Pro design compatto" width={400} height={300} style={{ objectFit: "contain" }} />
          </div>
          <div className={styles.card}>
            <Image src="/products/easy-pro/extracted_26.png" alt="Winblu Easy Pro connettività" width={400} height={300} style={{ objectFit: "contain" }} />
          </div>
          <div className={styles.card}>
            <Image src="/products/easy-pro/extracted_27.png" alt="Winblu Easy Pro vista laterale" width={400} height={300} style={{ objectFit: "contain" }} />
          </div>
          <div className={styles.card}>
            <Image src="/products/easy-pro/extracted_29.png" alt="Winblu Easy Pro porte" width={400} height={300} style={{ objectFit: "contain" }} />
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2>Vuoi acquistare un Winblu Easy Pro?</h2>
          <p>Trova il punto vendita più vicino a te</p>
          <Link href="/punti-vendita" className={styles.ctaButton}>
            Punti Vendita
          </Link>
        </div>
      </section>
    </div>
  );
}
