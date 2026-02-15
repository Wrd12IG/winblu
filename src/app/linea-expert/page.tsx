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
              Eleganza, Silenziosità<br />
              <span className={styles.gradient}>e Praticità</span>
            </h1>
            <p className={styles.heroDesc}>
              Il professional computer pensato per garantirti prestazioni al top. Ideale per l’utente professionale e privato alla ricerca di componenti di ultima generazione in un case spazioso e silenzioso.
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
              <h2 className={styles.cardTitle}>Prestazioni al Top</h2>
              <p className={styles.cardText}>
                La Linea Expert è dedicata agli utilizzatori più esigenti. Dotata di pannelli fonoassorbenti che la rendono estremamente silenziosa.
              </p>
              <div className={styles.cardReveal}>
                <p className={styles.cardText}>
                  Filtri antipolvere frontali e posteriori facilmente accessibili e rimovibili per la pulizia, garantendo longevità e affidabilità nel tempo.
                </p>
              </div>
            </div>
          </div>

          <div className={`${styles.bentoCard} ${styles.cardSmall} ${styles.cardHighlight}`}>
            <div className={styles.cardContent}>
              <Zap size={36} className={styles.cardIcon} style={{ color: '#0160A9' }} />
              <h3 className={styles.cardTitle}>ATX 3.0 Ready</h3>
              <div className={styles.cardReveal}>
                <p className={styles.cardTextSmall}>
                  Alimentatori Multi-Rail ATX 3.0 con connettore 12VHPWR per fornire fino a 600W di potenza pura alle GPU di nuova generazione.
                </p>
              </div>
            </div>
          </div>

          <div className={`${styles.bentoCard} ${styles.cardMedium}`}>
            <div className={styles.cardContent}>
              <Activity size={48} className={styles.cardIcon} />
              <h3 className={styles.cardTitle}>Raptor Lake Refresh</h3>
              <p className={styles.cardText}>
                Supporto Intel® Core™ 14ᴬ Gen fino a 24 core (8P+16E) e 6.0GHz. Il processore desktop più veloce al mondo per creativi e pro.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Features Section - Restored Original Content */}
      <section style={{ padding: '4rem 2rem', background: '#111', color: '#fff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ display: 'grid', gap: '4rem' }}
          >
            <div>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: '#00d2ff' }}>Creatività senza confini con NVIDIA® RTX Serie 4000</h2>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#ccc' }}>
                Sbarcano nella linea Expert le nuovissime GPU <strong>Nvidia® GeForce® serie 4000</strong>. Progettate sull'architettura <strong>Ada Lovelace</strong>, integrano fino a 16384 CUDA cores, Tensor core di 4a gen e Ray Tracing di 3a gen. Perfette per il rendering cinematografico in tempo reale, modellazione fotorealistica e per accelerare i flussi di lavoro AEC (BIM e CAD) con la massima precisione.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
              <div>
                <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#fff' }}>Audio & Networking Premium</h3>
                <p style={{ lineHeight: '1.7', color: '#aaa' }}>
                  Esclusivo codec <strong>High Definition Audio</strong> con schermatura dedicata per una fedeltà eccezionale, ideale per creator. Networking ultraveloce garantito da <strong>LAN 2.5G</strong> e <strong>Wi-Fi 6 con Bluetooth 5.2</strong> (opzionali) per velocità fino a 2.4Gbps.
                </p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#fff' }}>Potenza Intel® 14ᴬ Gen & DDR5</h3>
                <p style={{ lineHeight: '1.7', color: '#aaa' }}>
                  La linea Expert Z790 supporta la 14ᴬ generazione <strong>Intel® Core™ (Raptor Lake Refresh)</strong> con frequenze fino a <strong>6.0GHz</strong> e memorie <strong>DDR5 fino a 7200MT/s</strong>. Un salto prestazionale per digital art, animazione, video editing e modellazione 3D.
                </p>
              </div>
            </div>
          </motion.div>
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
