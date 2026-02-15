"use client";

import styles from '../styles/product-bento.module.css';
import { motion } from 'framer-motion';
import { Zap, DollarSign, Wrench, Shield, Box, Layout, Cpu, Database, ChevronRight, Monitor, Wifi, HardDrive, Keyboard, Fingerprint, Usb, Settings, Package, Battery, Award, Network } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import B2BCTASection from "@/components/B2BCTASection";
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
      {/* Hero Section */}
      <section className={styles.hero}>
        <GridBackground />
        <div className={styles.heroContent}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className={styles.heroText}
          >
            <span className={styles.heroTag}>Linea Essential</span>
            <h1 className={styles.heroTitle}>
              Dimensioni Small<br />
              <span className={styles.gradient}>Prestazioni Extra</span>
            </h1>
            <p className={styles.heroDesc}>
              Un autentico concentrato di potenza e tecnologia in soli 8.3 litri. La soluzione ideale per chi ha problemi di spazio e predilige il massimo della funzionalità senza compromessi.
            </p>
            <div className={styles.heroCTAs}>
              <Link href="/punti-vendita" className={styles.ctaPrimary}>
                Scopri la Gamma
              </Link>
              <Link href="/punti-vendita?tipo=fornitura" className={styles.ctaSecondary}>
                Richiedi Preventivo
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
                alt="Linea Essential Product"
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
          {/* Card Large: Design & Dimensioni */}
          <motion.div
            className={`${styles.bentoCard} ${styles.cardLarge} ${styles.cardWithImage}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.cardImageContainer}>
              <Image
                src="https://www.winblu.it/wp-content/uploads/2025/07/WINBLU_2025-07_Essential_1280x854-1.jpeg"
                alt="Essential SFF 8.3L Design"
                fill
                className={styles.cardImage}
              />
              <div className={styles.cardOverlay} />
            </div>
            <div className={styles.cardContent}>
              <Box className={styles.cardIcon} size={48} />
              <h2 className={styles.cardTitle}>Design Ultra-Compatto SFF</h2>
              <p className={styles.cardText}>
                Il nuovo Winblu Essential misura solo 33.6cm di larghezza e 9.5cm di altezza (in orizzontale), per un volume totale di 8.3 litri.
              </p>
              <div className={styles.cardReveal}>
                <p className={styles.cardText}>
                  Grazie al pratico supporto in dotazione, può essere posizionato anche in verticale, adattandosi a qualsiasi ambiente di lavoro, anche i più ristretti, mantenendo un'eleganza professionale.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card Small: Value */}
          <motion.div
            className={`${styles.bentoCard} ${styles.cardSmall}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className={styles.cardContent}>
              <DollarSign className={styles.cardIcon} size={36} />
              <h3 className={styles.cardTitle}>Convenienza</h3>
              <div className={styles.cardReveal}>
                <p className={styles.cardTextSmall}>
                  Massima funzionalità nel design e nei contenuti tecnici con il miglior rapporto qualità-prezzo della categoria.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card Medium: Performance */}
          <motion.div
            className={`${styles.bentoCard} ${styles.cardMedium}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={styles.cardContent}>
              <Cpu className={styles.cardIcon} size={48} style={{ color: '#0160A9' }} />
              <h3 className={styles.cardTitle}>Performance al Top</h3>
              <p className={styles.cardText}>
                Equipaggiato con processori Intel® Core™ di 12ª, 13ª e 14ª generazione (fino a 65W) per una produttività senza interruzioni.
              </p>
              <div className={styles.cardReveal}>
                <p className={styles.cardText}>
                  Nonostante le dimensioni ridotte, non rinuncia alla potenza: supporto RAM fino a 64GB DDR4 e storage ibrido SSD ultra-veloce + HDD capiente per gestire ogni carico di lavoro.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card Medium: Connectivity */}
          <motion.div
            className={`${styles.bentoCard} ${styles.cardMedium} ${styles.cardHighlight}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className={styles.cardContent}>
              <Zap className={styles.cardIcon} size={48} />
              <h3 className={styles.cardTitle}>Piena Connettività</h3>
              <p className={styles.cardText}>
                Perfetto come centro di gravità del tuo ufficio. Accesso rapido frontale a 4 porte USB e Audio per la massima comodità.
              </p>
              <ul className={styles.featureList} style={{ marginTop: '1rem', gridTemplateColumns: '1fr' }}>
                <li>4x USB Frontali (2x 3.0)</li>
                <li>Video: HDMI + VGA + DP (opt)</li>
                <li>Supporto Porta Seriale COM</li>
              </ul>
            </div>
          </motion.div>


          {/* Card Large: Graphics & Trust (Merging somewhat or keeping Layout) */}
          <motion.div
            className={`${styles.bentoCard} ${styles.cardLarge}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className={styles.cardContent}>
              <Layout className={styles.cardIcon} size={48} />
              <h2 className={styles.cardTitle}>Versatilità Multimediale</h2>
              <p className={styles.cardText}>
                Core grafico Intel® UHD (architettura Xe) con supporto fino a 8K@60Hz HDR per video cristallini e supporto multi-monitor.
              </p>
              <div className={styles.cardReveal}>
                <p className={styles.cardText}>
                  Possibilità di integrare schede video dedicate Low Profile (es. NVIDIA T400/T1000) per accelerare i flussi di lavoro creativi e CAD 2D/3D leggeri, rendendo Essential una workstation compatta.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card Small: Trust */}
          <motion.div
            className={`${styles.bentoCard} ${styles.cardSmall} ${styles.cardHighlight}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className={styles.cardContent}>
              <Shield className={styles.cardIcon} size={36} />
              <h3 className={styles.cardTitle}>3 Anni Garanzia</h3>
              <div className={styles.cardReveal}>
                <p className={styles.cardTextSmall}>
                  La sicurezza di un prodotto certificato con assistenza tecnica dedicata Winblu.
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
