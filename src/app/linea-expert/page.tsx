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
            <span className={styles.heroTag}>Winblu Expert</span>
            <h1 className={styles.heroTitle}>
              Potenza e<br />
              <span className={styles.gradient}>Affidabilità</span>
            </h1>
            <p className={styles.heroDesc}>
              Progettato per i professionisti che non si accontentano. La linea Expert offre potenza di calcolo superiore ed un'estetica raffinata per ogni ambiente lavorativo.
            </p>
            <div className={styles.heroCTAs}>
              <Link href="/punti-vendita" className={styles.ctaPrimary}>
                Configura Workstation
              </Link>
              <Link href="/supporto" className={styles.ctaSecondary}>
                Supporto Premium
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
                src="/assets/expert-hero.png"
                alt="Winblu Expert Workstation"
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
              <Settings size={48} className={styles.cardIcon} />
              <h2 className={styles.cardTitle}>Engineered for Professionals</h2>
              <p className={styles.cardText}>
                Dal rendering 3D all'editing video 8K, passando per la simulazione scientifica. La linea Expert è ottimizzata per garantire la massima stabilità con i software professionali più esigenti.
              </p>
              <div className={styles.cardReveal}>
                <p className={styles.cardText}>
                  Il case è progettato per un airflow ottimale e il massimo silenzio, permettendoti di concentrarti solo sul tuo lavoro.
                </p>
              </div>
            </div>
          </div>

          <div className={`${styles.bentoCard} ${styles.cardSmall} ${styles.cardHighlight}`}>
            <div className={styles.cardContent}>
              <Zap size={36} className={styles.cardIcon} style={{ color: '#0160A9' }} />
              <h3 className={styles.cardTitle}>Zero Colli di Bottiglia</h3>
              <div className={styles.cardReveal}>
                <p className={styles.cardTextSmall}>
                  Connessioni Thunderbolt 4, LAN 10Gb e Wi-Fi 6E per trasferire terabyte di dati in pochi istanti.
                </p>
              </div>
            </div>
          </div>

          <div className={`${styles.bentoCard} ${styles.cardMedium}`}>
            <div className={styles.cardContent}>
              <Activity size={48} className={styles.cardIcon} />
              <h3 className={styles.cardTitle}>24/7 Operation</h3>
              <p className={styles.cardText}>
                Componenti di classe server e alimentatori ad alta efficienza per garantire operatività continua senza interruzioni.
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
