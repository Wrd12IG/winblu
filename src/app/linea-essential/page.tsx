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
            <span className={styles.heroTag}>Winblu Essential</span>
            <h1 className={styles.heroTitle}>
              Dimensioni Small<br />
              <span className={styles.gradient}>Prestazioni Extra-Large</span>
            </h1>
            <p className={styles.heroDesc}>
              Un autentico concentrato di potenza e tecnologia al servizio delle tue necessità. Grazie al design ultra-compatto SFF da 8.3 litri, la nuova Linea Essential è la soluzione ideale per chi predilige il massimo della funzionalità.
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
              <h2 className={styles.cardTitle}>Solo 8.3 Litri</h2>
              <p className={styles.cardText}>
                27.2cm x 33.6cm x 9.5cm. Il formato SFF ultra-compatto che libera il tuo spazio vitale.
              </p>
              <div className={styles.cardReveal}>
                <p className={styles.cardText}>
                  Grazie al pratico supporto in dotazione, può essere posizionato anche in verticale, adattandosi a qualsiasi ambiente di lavoro, anche i più ristretti.
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
              <Zap className={styles.cardIcon} size={36} />
              <h3 className={styles.cardTitle}>65 Watt</h3>
              <div className={styles.cardReveal}>
                <p className={styles.cardTextSmall}>
                  Supporto pieno a CPU desktop Intel Core da 65W per gestire compiti di calcolo intensivi.
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
              <h3 className={styles.cardTitle}>Performance 13ᴬ Gen</h3>
              <p className={styles.cardText}>
                Intel® Core™ di 12ᴬ e 13ᴬ generazione per produttività senza interruzioni e intrattenimento sbalorditivo.
              </p>
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
              <Layout className={styles.cardIcon} size={48} />
              <h3 className={styles.cardTitle}>Grafica 8K HDR</h3>
              <p className={styles.cardText}>
                Intel® UHD 770/730 con supporto fino a 8K@60Hz HDR e media decoding a 12-bit per complessità visiva amplificata.
              </p>
            </div>
          </motion.div>

          {/* Card Large: Connectivity */}
          <motion.div
            className={`${styles.bentoCard} ${styles.cardLarge}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className={styles.cardContent}>
              <Network className={styles.cardIcon} size={48} />
              <h2 className={styles.cardTitle}>Centro di Gravità Digitale</h2>
              <p className={styles.cardText}>
                Connessioni frontali e posteriori complete per tutte le tue periferiche. La soluzione perfetta per l'interconnessione avanzata.
              </p>
              <div className={styles.cardReveal}>
                <p className={styles.cardText}>
                  Frontale: 2x USB 3.0, 2x USB 2.0, Audio. Retro: 2x USB 3.2, 2x USB 2.0, HDMI, VGA, e opzionali COM/Seriale. Espandibile con GPU Low Profile.
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
              <h3 className={styles.cardTitle}>Affidabilità</h3>
              <div className={styles.cardReveal}>
                <p className={styles.cardTextSmall}>
                  Design a due unità (SSD M.2 PCIe 4.0 + SSD/HDD 2.5") per velocità e capacità senza compromessi.
                </p>
              </div>
            </div>
          </motion.div>
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
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: '#00d2ff' }}>Performance al Top e completa espandibilità</h2>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#ccc' }}>
                Performance potenti con il nuovo Essential 8.3L grazie ai processori <strong>Intel® Core™ di dodicesima e tredicesima generazione</strong>, che offrono notevoli miglioramenti delle prestazioni per una maggiore produttività e un intrattenimento sbalorditivo. La nuova linea supporta <strong>CPU da 65 watt</strong> ed è in grado quindi di gestire compiti di calcolo intensivi.
                Supporta fino a <strong>64GB di memoria DDR4 3200Mhz</strong> che assicura un multitasking fluido e un design a due unità di archiviazione con un <strong>SSD M.2 PCIe® 4.0 x4</strong> e un drive SSD/HD da 2.5’’, il mix perfetto di trasferimenti di dati veloci e alta capacità di archiviazione.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
              <div>
                <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#fff' }}>Connettività & Flexibilità</h3>
                <p style={{ lineHeight: '1.7', color: '#aaa' }}>
                  Grazie alla molteplicità di porte di connessione, i Pc Essential sono perfetti come <em>centro di gravità del tuo universo digitale</em>. Sul lato frontale sono agevolmente accessibili n°2 porte USB 3.0, n°2 porte USB 2.0 e le porte Audio. Sul retro sono fruibili ulteriori porte USB 3.2 e USB 2.0, e le uscite <strong>D-SUB (VGA) e HDMI</strong>, per sfruttare al meglio l’interconnessione con dispositivi di visualizzazione digitale. Configurabile anche con Masterizzatore Slim e porta COM/Seriale opzionali.
                </p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#fff' }}>Core Grafico Avanzato</h3>
                <p style={{ lineHeight: '1.7', color: '#aaa' }}>
                  Winblu Essential 8.3L integra il core grafico <strong>Intel® UHD 770/730</strong> basato su architettura Intel Xe, supportando fino all’incredibile risoluzione di <strong>8k@60Hz HDR</strong>, con migliorato supporto alla codifica/decodifica dei media a 12-bit. Per gli utilizzatori più esigenti, è possibile integrare una <strong>scheda video discreta</strong> su slot PCIe 4.0 x16 Low Profile (es. Nvidia® RTX T400), potenziando ulteriormente le capacità 3D e di elaborazione immagini.
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
