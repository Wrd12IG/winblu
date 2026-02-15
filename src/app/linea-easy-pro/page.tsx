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
      <Navbar />
      <section className={styles.hero}>
        <GridBackground />
        <div className={styles.heroContent}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className={styles.heroText}
          >
            <span className={styles.heroTag}>Ultra-Compact Business PC</span>
            <h1 className={styles.heroTitle}>
              Winblu <span className={styles.gradient}>Easy Pro</span>
            </h1>
            <p className={styles.heroDesc}>
              Piccolo fuori, grande dentro. La potenza di un desktop professionale racchiusa in un formato ultra-compatto da 1 litro. Il massimo dell'ergonomia senza compromessi.
            </p>
            <div className={styles.heroCTAs}>
              <Link href="/punti-vendita?tipo=fornitura" className={styles.ctaPrimary}>
                Configura Ora
              </Link>
              <Link href="/punti-vendita" className={styles.ctaSecondary}>
                Trova Rivenditore
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={styles.heroVisual}
          >
            <div className={styles.heroImageContainer}>
              <Image
                src="/assets/easy-pro-hero.png"
                alt="Winblu Easy Pro"
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
          <motion.div
            className={`${styles.bentoCard} ${styles.cardLarge}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className={styles.cardContent}>
              <Minimize2 size={48} className={styles.cardIcon} />
              <h2 className={styles.cardTitle}>Vero "Salvaspazio"</h2>
              <p className={styles.cardText}>
                Solo 20.5 cm di base e 17.6 cm di profondità. EASY Pro è progettato per ottimizzare ogni centimetro della tua scrivania, offrendo il massimo della produttività in spazi ridotti.
              </p>
              <div className={styles.cardReveal}>
                <p className={styles.cardText}>
                  Installabile in verticale con il suo piedistallo o sul retro del monitor tramite supporto VESA. La soluzione ideale per uffici moderni, digital signage e workstation minimaliste.
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
              <Layout size={36} className={styles.cardIcon} />
              <h3 className={styles.cardTitle}>Multi-Display 4K</h3>
              <div className={styles.cardReveal}>
                <p className={styles.cardTextSmall}>
                  Grafica Intel® High Definition per gestire fino a 3 monitor contemporaneamente in risoluzione 4K UHD.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className={`${styles.bentoCard} ${styles.cardMedium}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className={styles.cardContent}>
              <Cpu size={48} className={styles.cardIcon} />
              <h3 className={styles.cardTitle}>Performance Desktop</h3>
              <p className={styles.cardText}>
                Equipaggiato con CPU Intel® Core™ di 13ᴬ e 14ᴬ Gen (fino a 65W TDP) per prestazioni da workstation in formato ridotto.
              </p>
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
              <Wifi size={48} className={styles.cardIcon} />
              <h3 className={styles.cardTitle}>Connectivity Pro</h3>
              <p className={styles.cardText}>
                LAN 2.5Gb e Wi-Fi 6 di ultima generazione. Connettività completa con USB-C e porte configurabili (VGA/Seriale).
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
