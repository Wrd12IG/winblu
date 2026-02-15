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
              Un TOP computer travestito da Mini-PC. Se nella botte piccola sta il vino buono, nel nuovo Winblu EASY Pro il formato da 1 litro si sposa con la tecnologia più avanzata.
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
              <h2 className={styles.cardTitle}>Vero "Salvaspazio"</h2>
              <p className={styles.cardText}>
                Solo 20.5 cm di base, 17.6 cm di profondità ed un’altezza di 3.3 cm. EASY Pro è progettato per occupare il minimo spazio per il massimo dell’ergonomia.
              </p>
              <div className={styles.cardReveal}>
                <p className={styles.cardText}>
                  Posizionalo in verticale con il piedistallo, o applicalo sul retro del monitor con il supporto VESA. Perfetto per digital signage e postazioni minimal.
                </p>
              </div>
            </div>
          </div>

          <div className={`${styles.bentoCard} ${styles.cardSmall} ${styles.cardHighlight}`}>
            <div className={styles.cardContent}>
              <Layout size={36} className={styles.cardIcon} style={{ color: '#0160A9' }} />
              <h3 className={styles.cardTitle}>3 Monitor 4K</h3>
              <div className={styles.cardReveal}>
                <p className={styles.cardTextSmall}>
                  Grafica Intel® UHD per risoluzione 4K UHD su fino a 3 display contemporaneamente (2x DP + 1x HDMI).
                </p>
              </div>
            </div>
          </div>

          <div className={`${styles.bentoCard} ${styles.cardMedium}`}>
            <div className={styles.cardContent}>
              <Cpu size={48} className={styles.cardIcon} />
              <h3 className={styles.cardTitle}>Performance da Desktop</h3>
              <p className={styles.cardText}>
                Equipaggiato con CPU Intel® Core™ di 12ᴬ e 13ᴬ Gen (i3, i5, i7 a 65W) per velocità da autentico fuoriserie.
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
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: '#00d2ff' }}>Performance da Desktop e completa espandibilità</h2>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#ccc' }}>
                Performance potenti con i Mini EASY Pro grazie ai processori <strong>Intel® Core™ di 12A e 13A generazione</strong> per desktop, che offrono notevoli miglioramenti delle prestazioni per una maggiore produttività e un intrattenimento sbalorditivo.
                Easy Pro supporta <strong>CPU da 65 watt</strong> ed è in grado quindi di gestire compiti di calcolo intensivi. Supporta fino a <strong>64GB di memoria veloce DDR4 3200Mhz</strong> che assicura un multitasking fluido e un design a due unità di archiviazione con un <strong>SSD M.2 PCIe® 3.0 x4</strong> e un drive da 2.5’’, il mix perfetto di trasferimenti di dati veloci e alta capacità di archiviazione.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
              <div>
                <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#fff' }}>Connettività Flessibile</h3>
                <p style={{ lineHeight: '1.7', color: '#aaa' }}>
                  EASY Pro offre una connettività veloce e completa con n°2 porte <strong>USB 3.2 Gen2 Type C®</strong> e n°2 porte USB 3.2 Gen1 Type A sul pannello frontale, più n°2 porte USB 3.2 Gen1 e n°2 porte USB 2.0 Type A sul pannello posteriore. Il massimo della connettività è assicurato dalla <strong>LAN 2.5Gb</strong> e dal <strong>Wi-Fi 6 con Bluetooth 5.2</strong>, il quale permette velocità di trasferimento fino a 2.4Gbps. Inoltre la porta configurabile consente di aggiungere un connettore VGA oppure una porta COM/Seriale a scelta.
                </p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#fff' }}>Risoluzione 4K UHD</h3>
                <p style={{ lineHeight: '1.7', color: '#aaa' }}>
                  Il mini Pc EASY Pro è dotato di grafica <strong>Intel® UHD integrata</strong> per visualizzare video e immagini con una risoluzione <strong>4K UHD</strong> sorprendente. Con n°2 connettori DisplayPort e una porta HDMI (porta VGA opzionale), vi permette di estendere il vostro spazio di lavoro fino a <strong>n°3 display</strong>.
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
