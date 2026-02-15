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
import { Box, Layers, Cpu, Monitor, Wifi, Shield, Layout, Minimize2, HardDrive } from 'lucide-react';

const GridBackground = () => (
  <div className={styles.gridBg} />
);

export default function LineaEasyProPage() {
  const technicalSpecs: SpecCategory[] = [
    {
      id: 'form-factor',
      title: 'Formato & Design',
      icon: <Box size={24} />,
      items: [
        { label: 'Volume', value: 'Ultra-Compact 1L Chassis' },
        { label: 'Materiale', value: 'Brushed Metal Finish' },
        { label: 'VESA', value: 'Mounting Kit Incluso' },
      ]
    },
    {
      id: 'performance',
      title: 'Potenza di Calcolo',
      icon: <Cpu size={24} />,
      items: [
        { label: 'CPU', value: 'Intel® Core™ i3 / i5 / i7' },
        { label: 'TDP', value: 'Ottimizzato per Efficienza' },
        { label: 'Chipset', value: 'Intel® Q-Series Business' },
      ]
    },
    {
      id: 'memory-storage',
      title: 'Memoria & Archiviazione',
      icon: <HardDrive size={24} />,
      items: [
        { label: 'RAM', value: 'Fino a 32GB DDR4 SO-DIMM' },
        { label: 'Storage', value: 'SSD NVMe PCIe Gen4' },
        { label: 'Espansione', value: 'Slot SATA 2.5" Libero' },
      ]
    },
    {
      id: 'connectivity',
      title: 'Connettività',
      icon: <Wifi size={24} />,
      items: [
        { label: 'Wireless', value: 'Intel® Wi-Fi 6' },
        { label: 'Porte', value: 'USB-C, HDMI, DisplayPort' },
        { label: 'LAN', value: 'Gigabit Ethernet' },
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
            <span className={styles.heroTag}>Winblu Easy Pro</span>
            <h1 className={styles.heroTitle}>
              Piccolo Fuori,<br />
              <span className={styles.gradient}>Grande Dentro</span>
            </h1>
            <p className={styles.heroDesc}>
              Un TOP computer travestito da Mini-PC. Potenza, versatilità e compattezza per ogni esigenza, dall'ufficio all'home entertainment.
            </p>
            <div className={styles.heroCTAs}>
              <Link href="/punti-vendita" className={styles.ctaPrimary}>
                Acquista Ora
              </Link>
              <Link href="/supporto" className={styles.ctaSecondary}>
                Scheda Tecnica
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
                src="/assets/easy-pro-hero.png"
                alt="Winblu Easy Pro"
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
              <Minimize2 size={48} className={styles.cardIcon} />
              <h2 className={styles.cardTitle}>Spazio e Potenza Ridefiniti</h2>
              <p className={styles.cardText}>
                Winblu Easy Pro sfida le leggi della fisica. Nonostante le dimensioni ridotte, offre prestazioni paragonabili a un desktop tower tradizionale.
              </p>
              <div className={styles.cardReveal}>
                <p className={styles.cardText}>
                  Ideale per scrivanie minimaliste, sale riunioni e postazioni di lavoro flessibili. Può essere montato direttamente dietro un monitor grazie al supporto VESA incluso.
                </p>
              </div>
            </div>
          </div>

          <div className={`${styles.bentoCard} ${styles.cardSmall} ${styles.cardHighlight}`}>
            <div className={styles.cardContent}>
              <Layout size={36} className={styles.cardIcon} style={{ color: '#0160A9' }} />
              <h3 className={styles.cardTitle}>Full I/O</h3>
              <div className={styles.cardReveal}>
                <p className={styles.cardTextSmall}>
                  Non rinunciare a nulla: USB-C, HDMI, DisplayPort e connettori audio per collegare tutte le tue periferiche.
                </p>
              </div>
            </div>
          </div>

          <div className={`${styles.bentoCard} ${styles.cardMedium}`}>
            <div className={styles.cardContent}>
              <Cpu size={48} className={styles.cardIcon} />
              <h3 className={styles.cardTitle}>Intel Core Power</h3>
              <p className={styles.cardText}>
                Equipaggiato con processori Intel Core fino all'i7, Easy Pro gestisce multitasking e carichi di lavoro intensi con facilità.
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
