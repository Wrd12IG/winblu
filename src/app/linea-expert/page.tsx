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
import { Cpu, HardDrive, Monitor, Shield, Zap, Layout, Settings, Activity, Box, Lock } from 'lucide-react';

const GridBackground = () => (
  <div className={styles.gridBg} />
);

export default function LineaExpertPage() {
  const technicalSpecs: SpecCategory[] = [
    {
      id: 'workstation-performance',
      title: 'Workstation Power',
      icon: <Cpu size={24} />,
      items: [
        { label: 'CPU', value: 'Intel® Core™ i7 / i9 Extreme' },
        { label: 'Chipset', value: 'Z790 / W680 Workstation' },
        { label: 'Raffreddamento', value: 'Liquid Cooling Ready' },
      ]
    },
    {
      id: 'graphics',
      title: 'Grafica Professionale',
      icon: <Monitor size={24} />,
      items: [
        { label: 'GPU', value: 'NVIDIA® RTX™ Professional / GeForce RTX' },
        { label: 'Multi-Monitor', value: 'Supporto fino a 4 Display 4K' },
        { label: 'Rendering', value: 'CUDA Accelerated' },
      ]
    },
    {
      id: 'storage',
      title: 'Archiviazione & Memoria',
      icon: <HardDrive size={24} />,
      items: [
        { label: 'RAM', value: 'Fino a 128GB DDR5 ECC Opt.' },
        { label: 'SSD', value: 'RAID 0/1 NVMe Gen4/5' },
        { label: 'Espansibilità', value: 'Hot-Swap Bays support' },
      ]
    },
    {
      id: 'reliability',
      title: 'Affidabilità',
      icon: <Shield size={24} />,
      items: [
        { label: 'Certificazione', value: 'ISV Certified' },
        { label: 'PSU', value: '80Plus Gold/Platinum' },
        { label: 'Garanzia', value: '3 Anni On-Site NBD' },
      ]
    }
  ];

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
            <span className={styles.heroTag}>Progettato per Professionisti</span>
            <h1 className={styles.heroTitle}>
              Winblu <span className={styles.gradient}>Expert</span>
            </h1>
            <p className={styles.heroDesc}>
              Il professional computer pensato per garantirti prestazioni al top. Ideale per l’utente professionale e privato alla ricerca di componenti di ultima generazione in un case spazioso e silenzioso.
            </p>
            <div className={styles.heroCTAs}>
              <Link href="/punti-vendita" className={styles.ctaPrimary}>
                Configura Winblu
              </Link>
              <Link href="/punti-vendita" className={styles.ctaSecondary}>
                Trova Rivenditore
              </Link>
            </div>
          </motion.div>

          <motion.div
            className={styles.heroVisual}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className={styles.heroImageContainer}>
              <Image
                src="/assets/expert-hero.png"
                alt="Winblu Expert Workstation"
                fill
                className={styles.heroProductImage}
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bento Grid Section */}
      <section className={styles.bentoSection}>
        <div className={styles.bentoGrid}>
          {/* Row 1 */}
          <motion.div
            className={`${styles.bentoCard} ${styles.cardLarge}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className={styles.cardContent}>
              <Settings size={48} className={styles.cardIcon} />
              <h2 className={styles.cardTitle}>Eleganza e Silenziosità</h2>
              <p className={styles.cardText}>
                La Linea Expert è dedicata agli utilizzatori più esigenti. Dotata di pannelli fonoassorbenti che la rendono estremamente silenziosa, è ideale per ambienti di lavoro che richiedono massima concentrazione.
              </p>
              <div className={styles.cardReveal}>
                <p className={styles.cardText}>
                  Filtri antipolvere frontali e posteriori facilmente accessibili e rimovibili per la pulizia, garantendo longevità e affidabilità nel tempo. Un design sobrio che nasconde una potenza straordinaria.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className={`${styles.bentoCard} ${styles.cardSmall} ${styles.cardHighlight}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className={styles.cardContent}>
              <Zap size={36} className={styles.cardIcon} />
              <h3 className={styles.cardTitle}>ATX 3.0 Ready</h3>
              <div className={styles.cardReveal}>
                <p className={styles.cardTextSmall}>
                  Alimentatori Multi-Rail ATX 3.0 con connettore 12VHPWR per fornire fino a 600W di potenza pura alle GPU di nuova generazione. Stabilità garantita anche sotto carichi pesanti.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Row 2 */}
          <motion.div
            className={`${styles.bentoCard} ${styles.cardMedium}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className={styles.cardContent}>
              <Cpu size={48} className={styles.cardIcon} />
              <h3 className={styles.cardTitle}>Raptor Lake Refresh</h3>
              <p className={styles.cardText}>
                Supporto Intel® Core™ 14ᴬ Gen fino a 24 core (8P+16E) e 6.0GHz. La piattaforma desktop perfetta per il multitasking estremo e i carichi di lavoro professionali.
              </p>
              <div className={styles.cardReveal}>
                <p className={styles.cardText}>
                  Memorie DDR5 fino a 7200MT/s per un salto prestazionale netto in digital art, animazione, video editing e modellazione 3D.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className={`${styles.bentoCard} ${styles.cardMedium} ${styles.cardHighlight}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className={styles.cardContent}>
              <Monitor size={48} className={styles.cardIcon} />
              <h3 className={styles.cardTitle}>NVIDIA® RTX Serie 4000</h3>
              <p className={styles.cardText}>
                Grafica professionale basata su architettura Ada Lovelace. Accelerazione Ray Tracing e AI per modellazione fotorealistica e flussi AEC.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Specs Cards Section */}
      <section style={{ padding: '6rem 2rem', background: 'rgba(0,0,0,0.2)' }}>
        <div style={{ maxWidth: '1600px', margin: '0 auto' }}>
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
      <Footer />
    </div>
  );
}
