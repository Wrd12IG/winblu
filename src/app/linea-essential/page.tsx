"use client";

import styles from '../styles/product-bento.module.css';
import { motion } from 'framer-motion';
import { Zap, DollarSign, Wrench, Shield, Box, Layout, Cpu, Database, ChevronRight, Monitor, Wifi, HardDrive, Keyboard, Fingerprint, Usb, Settings, Package, Battery, Award, Network } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import B2BCTASection from "@/components/B2BCTASection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SpecsCards from "@/components/SpecsCards";
import { SpecCategory } from "@/components/SpecsAccordion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const GridBackground = () => (
  <div className={styles.gridBg} />
);

export default function LineaEssentialPage() {
  const technicalSpecs: SpecCategory[] = [
    {
      id: 'design',
      title: 'Design & Dimensioni',
      icon: <Box size={24} />,
      items: [
        { label: 'Formato', value: 'SFF (Small Form Factor)' },
        { label: 'Volume', value: '8.3 Litri' },
        { label: 'Dimensioni', value: '336 x 272 x 95 mm' },
        { label: 'Orientamento', value: 'Orizzontale o Verticale' },
      ]
    },
    {
      id: 'cpu',
      title: 'Processore & Chipset',
      icon: <Cpu size={24} />,
      items: [
        { label: 'CPU', value: 'Intel® Core™ 12ª/13ª/14ª Gen (Max 65W)' },
        { label: 'Socket', value: 'LGA1700' },
        { label: 'Chipset', value: 'Intel® H610 / B660 / B760' },
      ]
    },
    {
      id: 'memory',
      title: 'Memoria RAM',
      icon: <HardDrive size={24} />,
      items: [
        { label: 'Tipo', value: 'DDR4 3200MHz' },
        { label: 'Slot', value: '2x DIMM' },
        { label: 'Capacità Max', value: 'Fino a 64GB' },
        { label: 'Canale', value: 'Dual Channel Support' },
      ]
    },
    {
      id: 'storage',
      title: 'Archiviazione',
      icon: <Database size={24} />, // Changed icon
      items: [
        { label: 'M.2', value: '1x M.2 NVMe PCIe 4.0/3.0' },
        { label: 'SATA', value: '1x 2.5" SSD/HDD + 1x 3.5" HDD (opz)' },
        { label: 'ODD', value: 'Supporto Slim ODD 9mm' },
      ]
    },
    {
      id: 'graphics',
      title: 'Grafica',
      icon: <Monitor size={24} />,
      items: [
        { label: 'Integrata', value: 'Intel® UHD Graphics 770/730' },
        { label: 'Risoluzione', value: 'Supporto fino a 4K/8K' },
        { label: 'Espansione', value: 'Supporto GPU Low Profile (es. T400)' },
      ]
    },
    {
      id: 'connectivity',
      title: 'Connettività',
      icon: <Wifi size={24} />,
      items: [
        { label: 'Frontale', value: '2x USB 3.0 + 2x USB 2.0 + Audio' },
        { label: 'Posteriore', value: '2x USB 3.2 + 2x USB 2.0 + RJ45' },
        { label: 'Video Out', value: 'HDMI + VGA + DP (opz)' },
        { label: 'Wireless', value: 'Opzionale (M.2 Key-E)' },
      ]
    },
    {
      id: 'software',
      title: 'Software & OS',
      icon: <Settings size={24} />,
      items: [
        { label: 'OS', value: 'Windows 11 Pro / Home' },
        { label: 'Compatibilità', value: 'Windows 10 Supportato' },
        { label: 'Sicurezza', value: 'TPM 2.0 Firmware' },
      ]
    },
    {
      id: 'warranty',
      title: 'Garanzia',
      icon: <Shield size={24} />,
      items: [
        { label: 'Standard', value: '24 Mesi On-Center' },
        { label: 'Estensioni', value: 'Disponibili su richiesta' },
        { label: 'Supporto', value: 'Assistenza Tecnica Italiana' },
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
            <span className={styles.heroTag}>Performance Extra-Large</span>
            <h1 className={styles.heroTitle}>
              Winblu <span className={styles.gradient}>Essential</span>
            </h1>
            <p className={styles.heroDesc}>
              Dimensioni Small, prestazioni Extra-Large. Un concentrato di potenza in un design ultra-compatto SFF da 8.3 litri, ideale per chi cerca il massimo della funzionalità nel minimo spazio.
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
                src="https://winblu.it/wp-content/uploads/2024/02/winblu_essential.png"
                alt="Winblu Essential SFF"
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
            className={`${styles.bentoCard} ${styles.cardLarge} ${styles.cardWithImage}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className={styles.cardImageContainer}>
              <Image
                src="https://www.winblu.it/wp-content/uploads/2025/07/WINBLU_2025-07_Essential_1280x854-1.jpeg"
                alt="Essential 8.3L Design"
                fill
                className={styles.cardImage}
              />
              <div className={styles.cardOverlay} />
            </div>
            <div className={styles.cardContent}>
              <Box size={48} className={styles.cardIcon} />
              <h2 className={styles.cardTitle}>Solo 8.3 Litri</h2>
              <p className={styles.cardText}>
                Il formato SFF (Small Form Factor) che libera il tuo spazio vitale senza sacrificare l'espandibilità interna e la potenza di calcolo.
              </p>
              <div className={styles.cardReveal}>
                <p className={styles.cardText}>
                  Adattabile ad ogni ambiente grazie al supporto per posizionamento verticale o orizzontale. La soluzione perfetta per uffici dinamici e postazioni home-office.
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
              <h3 className={styles.cardTitle}>Desktop Power</h3>
              <div className={styles.cardReveal}>
                <p className={styles.cardTextSmall}>
                  Supporto completo a processori Intel® Core™ da 65W per gestire carichi di lavoro professionali.
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
              <h3 className={styles.cardTitle}>Performance 14th Gen</h3>
              <p className={styles.cardText}>
                Basato su chipset Intel® di ultima generazione per un multitasking fluido e un'efficienza energetica senza precedenti.
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
              <Monitor size={48} className={styles.cardIcon} />
              <h3 className={styles.cardTitle}>Grafica 8K HDR</h3>
              <p className={styles.cardText}>
                Supporto fino a risoluzione 8K@60Hz e decodifica media a 12-bit per una qualità visiva di grado cinematografico.
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
