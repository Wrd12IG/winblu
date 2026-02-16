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
import { Box, Layers, Cpu, Monitor, Wifi, Shield, Layout, Minimize2, HardDrive, Zap, Lock, Award, Speaker, Settings, Activity } from 'lucide-react';

const GridBackground = () => (
  <div className={styles.gridBg} />
);

export default function LineaEasyProPage() {
  // Specs now handled directly in SpecsCards
  return (
    <div className={styles.container}>
      <Navbar />
      <section className={styles.hero}>
        <GridBackground />
        <div className={styles.heroContent}>
          <motion.div
            initial={{ opacity: 1, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className={styles.heroText}
          >
            <span className={styles.heroTag}>Linea Easy Pro</span>
            <h1 className={styles.heroTitle}>
              Winblu <span className={styles.gradient}>Easy Pro</span>
            </h1>
            <h2 className={styles.heroSubtitle}>Nuovo Winblu Easy Pro: un TOP computer travestito da Mini-PC</h2>
            <div className={styles.heroDesc}>
              <p>
                Se nella botte piccola sta il vino buono, nel nuovo Winblu EASY Pro il formato da 1 litro si sposa con la tecnologia più avanzata. Una serie di successo che ora si rinnova con una versione ancora più esaltante: il nuovo mini-PC di casa Winblu ti offre il meglio del personal computing in versione compatta.
              </p>
              <p>
                EASY Pro è progettato per occupare il minimo spazio: solo 20.5 cm di base, 17.6 cm di profondità ed un’altezza di 3.3 cm davvero minima per il massimo dell’ergonomia e dello space saving.
              </p>
            </div>
            <div className={styles.heroCTAs}>
              <Link href="/punti-vendita?tipo=fornitura" className={styles.ctaPrimary}>
                Configura Winblu
              </Link>
              <Link href="/punti-vendita" className={styles.ctaSecondary}>
                Trova Rivenditore
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 1, x: 50 }}
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
            initial={{ opacity: 1, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className={styles.cardContent}>
              <Minimize2 size={48} className={styles.cardIcon} style={{ color: '#0160A9' }} />
              <h2 className={styles.cardTitle}>Design versatile: il vero "salvaspazio"</h2>
              <p className={styles.cardText}>
                Un computer progettato per stare sul palmo della tua mano. Le dimensioni ridotte di Winblu Easy Pro 1LT non penalizzano affatto la qualità delle prestazioni, ma rispondono alle esigenze di design ed ergonomia.
              </p>
              <div className={styles.cardReveal}>
                <p className={styles.cardText}>
                  Può essere collocato ovunque, posizionato in verticale con il piedistallo, applicato sul retro del monitor con supporto VESA, o portato con te. Perfetto per digital signage, home theater e ambienti retail.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className={`${styles.bentoCard} ${styles.cardSmall} ${styles.cardHighlight}`}
            initial={{ opacity: 1, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className={styles.cardContent}>
              <Cpu size={36} className={styles.cardIcon} />
              <h3 className={styles.cardTitle}>Performance Desktop</h3>
              <div className={styles.cardReveal}>
                <p className={styles.cardTextSmall}>
                  Performance potenti grazie ai processori Intel® Core™ di 12A e 13A generazione (fino a 65W). Supporta fino a 64GB DDR4 3200Mhz e doppio storage (M.2 PCIe 3.0 + SSD 2.5”).
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className={`${styles.bentoCard} ${styles.cardMedium}`}
            initial={{ opacity: 1, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className={styles.cardContent}>
              <Monitor size={48} className={styles.cardIcon} />
              <h3 className={styles.cardTitle}>Risoluzione 4K UHD e 3 Monitor</h3>
              <p className={styles.cardText}>
                Il mini Pc EASY Pro è dotato di grafica Intel® UHD integrata per visualizzare video e immagini con una risoluzione 4K UHD sorprendente.
              </p>
              <div className={styles.cardReveal}>
                <p className={styles.cardText}>
                  Con n°2 connettori DisplayPort e una porta HDMI (porta VGA opzionale), vi permette di estendere il vostro spazio di lavoro fino a n°3 display.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className={`${styles.bentoCard} ${styles.cardMedium} ${styles.cardHighlight}`}
            initial={{ opacity: 1, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className={styles.cardContent}>
              <Wifi size={48} className={styles.cardIcon} />
              <h3 className={styles.cardTitle}>Piena connettività</h3>
              <p className={styles.cardText}>
                EASY Pro offre connettività veloce con USB 3.2 Gen2 Type C, USB 3.2 Gen1, LAN 2.5Gb e Wi-Fi 6 con Bluetooth 5.2.
              </p>
              <div className={styles.cardReveal}>
                <p className={styles.cardText}>
                  Espandibilità garantita dalla porta configurabile che consente di aggiungere un connettore VGA o una porta COM/Seriale a scelta.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Row 3 */}
          <motion.div
            className={`${styles.bentoCard} ${styles.cardLarge}`}
            initial={{ opacity: 1, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div className={styles.cardContent}>
              <Shield size={48} className={styles.cardIcon} style={{ color: '#0160A9' }} />
              <h2 className={styles.cardTitle}>Prestazioni, Sicurezza e Risparmio</h2>
              <p className={styles.cardText}>
                Costruito con molteplici garanzie di sicurezza come slot Kensington e allarme intrusione chassis. Design ad alta efficienza energetica per ridurre costi e impatto ambientale.
              </p>
              <div className={styles.cardReveal}>
                <p className={styles.cardText}>
                  Winblu EASY Pro suggerisce Windows 11 Professional per migliorare produttività e sicurezza. I Pc EASY Pro sono garantiti 24 mesi On Site, estendibili a 36.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Specs Cards Section */}
      <section style={{ padding: '6rem 2rem', background: 'rgba(0,0,0,0.2)' }}>
        <div style={{ maxWidth: '1600px', margin: '0 auto' }}>
          <motion.h2
            initial={{ opacity: 1, y: 20 }}
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
          <SpecsCards specs={[
            { id: 'cpu', title: 'Processori', description: 'Intel® Core™ i3, i5, i7 di 12A e 13A Generazione – Socket LGA1700 65W', icon: <Cpu size={24} /> },
            { id: 'chipset', title: 'Chipset', description: 'Intel® H610', icon: <Settings size={24} /> },
            { id: 'memory', title: 'Memoria', description: 'RAM DDR4 SO-DIMM 3200MHz, massimo 64GB', icon: <HardDrive size={24} /> },
            { id: 'storage', title: 'Archiviazione', description: 'Supporta n°1 SSD M.2 PCIe® 3.0 x4, n°1 HD/SSD 2,5’’ Sata3, Unità ottica e Lettore card non presenti', icon: <HardDrive size={24} /> },
            { id: 'video', title: 'Sezione Video', description: 'Intel® UHD 4K (in base al processore), connettori n°2 DisplayPort 1.4a e n°1 HDMI 2.0b, connettore D-SUB/VGA opzionale, supporta fino a n°3 monitor', icon: <Monitor size={24} /> },
            { id: 'audio', title: 'Sezione Audio', description: 'Audio Integrata, n°2 Audio Jack per cuffie e microfono anteriori', icon: <Speaker size={24} /> },
            { id: 'connectivity', title: 'Connettività e Sicurezza', description: '2.5Gb LAN, Wi-Fi 6, Bluetooth 5.2, Firmware TPM 2.0 integrato, Porta COM/Seriale opzionale, n°2 USB3.2 Gen2 Type C e n°2 USB3.2 Gen1 Type A anteriori – n°2 USB3.2 Gen1 e n°2 USB2.0 Type A posteriori', icon: <Wifi size={24} /> },
            { id: 'software', title: 'Compatibilità Software', description: 'Windows 11 in versione Professional o Home, anche in versione Educational per le scuole', icon: <Settings size={24} /> },
            { id: 'case', title: 'Case e Alimentatore', description: 'Mini-Pc ultracompatto 1 Litro nero, 176x205x33mm, posizionabile orizzontale o verticale (piedistallo incluso), supporto VESA 75x75-100x100 incluso, Kensington lock, Alimentatore 120W', icon: <Box size={24} /> },
            { id: 'included', title: 'In Dotazione', description: 'Tastiera e Mouse USB (opzionali), Kit Drivers e Manuali Utente (dove previsto)', icon: <Box size={24} /> },
            { id: 'energy', title: 'Efficienza Energetica', description: 'ETEC: 81.43 kWh/year, ETEC Max: 186.6 kWh/year. Consumi ottimizzati (Sleep 1.31W, Off 1.01W). Configurazione rif: H610/i7-13700/32GB/SSD 500GB+512GB/120W', icon: <Activity size={24} /> },
            { id: 'warranty', title: 'Garanzia', description: 'Garanzia di 24/36 mesi On Site con intervento a domicilio entro 48 ore lavorative (escluse isole minori)', icon: <Award size={24} /> },
          ]} />
        </div>
      </section>

      <B2BCTASection />
      <Footer />
    </div>
  );
}
