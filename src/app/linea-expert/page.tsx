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
import { Cpu, HardDrive, Monitor, Shield, Zap, Layout, Settings, Activity, Box, Lock, Award, Wifi, PenTool, Speaker } from 'lucide-react';

const GridBackground = () => (
  <div className={styles.gridBg} />
);

export default function LineaExpertPage() {
  // Specs now handled directly in SpecsCards
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
            <span className={styles.heroTag}>Linea Expert</span>
            <h1 className={styles.heroTitle}>
              Winblu <span className={styles.gradient}>Expert</span>
            </h1>
            <h2 className={styles.heroSubtitle}>Il professional computer pensato per garantirti prestazioni al top</h2>
            <div className={styles.heroDesc}>
              <p>
                La Linea Expert è dedicata agli utilizzatori più esigenti. Le sue componenti di ultima generazione, inserite in uno spazioso case, sono ideali per l’utente professionale così come quello privato alla ricerca di prestazioni sempre al top.
              </p>
              <p>
                Questa workstation di categoria Expert è dotata di pannelli fonoassorbenti che la rendono estremamente silenziosa e di filtri antipolvere frontali e posteriori facilmente accessibili e rimovibili per la pulizia.
              </p>
            </div>
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
              <Cpu size={48} className={styles.cardIcon} style={{ color: '#0160A9' }} />
              <h2 className={styles.cardTitle}>Intel® “Raptor Lake Refresh” e DDR5</h2>
              <p className={styles.cardText}>
                La linea EXPERT Z790 supporta la Quattordicesima generazione di processori Intel® Core™, nome in codice Raptor Lake Refresh, una nuova concezione di CPU che eredita tutte le strabilianti caratteristiche della serie 13.
              </p>
              <div className={styles.cardReveal}>
                <p className={styles.cardText}>
                  Vede il numero di core aumentato fino a 24 (8 P-core + 16 E-core) e il numero di thread fino a 32. Con i suoi 6.0GHz di frequenza di punta sul modello i9-14900K, è definito come “il più veloce processore da gaming al mondo”. Il massimo della potenza è garantito anche dalle memorie DDR5 con frequenza fino a 7200MT/s.
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
              <h3 className={styles.cardTitle}>Alimentatore ATX 3.0</h3>
              <div className={styles.cardReveal}>
                <p className={styles.cardTextSmall}>
                  La linea Expert è equipaggiata con gli alimentatori Multi-Rail ATX versione 3.0 (ATX 3.0), in grado di soddisfare le esigenze di potenza dell’hardware più recente come i processori Intel® Raptor Lake Refresh e le GPU Nvidia® serie 4000. Dotati del connettore 12VHPWR per fornire fino a 600W di potenza grezza alla scheda grafica.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Row 2 */}
          <motion.div
            className={`${styles.bentoCard} ${styles.cardMedium} ${styles.cardHighlight}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className={styles.cardContent}>
              <Monitor size={48} className={styles.cardIcon} />
              <h3 className={styles.cardTitle}>Grafica NVIDIA® RTX serie 4000</h3>
              <p className={styles.cardText}>
                Sbarcano finalmente all’interno della linea Expert le nuovissime GPU Nvidia® GeForce® serie 4000, un enorme passo avanti in termini di prestazioni, efficienza e grafica basata su IA.
              </p>
              <div className={styles.cardReveal}>
                <p className={styles.cardText}>
                  Progettate sulla nuova architettura Nvidia® Ada Lovelace, integrano fino a 16384 cuda cores, con Tensor core di 4a generazione e Ray Tracing core di 3a generazione. Ideali per rendering cinematografico, modellazione fotorealistica e accelerazione di flussi AEC.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className={`${styles.bentoCard} ${styles.cardMedium}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className={styles.cardContent}>
              <PenTool size={48} className={styles.cardIcon} style={{ color: '#0160A9' }} />
              <h3 className={styles.cardTitle}>Creatività senza confini</h3>
              <p className={styles.cardText}>
                L’esclusivo codec High Definition Audio progettato in stretta collaborazione con Realtek®, è in grado di offrire il massimo della qualità audio per tutti i creatori di contenuti.
              </p>
              <div className={styles.cardReveal}>
                <p className={styles.cardText}>
                  Il massimo della connettività è assicurato dal Wi-Fi 6 con Bluetooth 5.2 (opzionali), per velocità fino a 2.4Gbps. Insieme alla LAN 2.5G di Realtek®, consentono un networking ultraveloce per non sprecare nemmeno un secondo di creatività.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Row 3 */}
          <motion.div
            className={`${styles.bentoCard} ${styles.cardLarge}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div className={styles.cardContent}>
              <Lock size={48} className={styles.cardIcon} />
              <h2 className={styles.cardTitle}>Windows 11 e Sicurezza</h2>
              <p className={styles.cardText}>
                Winblu Expert suggerisce Windows 11 Professional, l’ideale per gestire al meglio il proprio computer, specialmente in un contesto d'uso lavorativo.
              </p>
              <div className={styles.cardReveal}>
                <p className={styles.cardText}>
                  Un sistema operativo progettato per migliorare produttività, prestazioni e sicurezza dei computer su cui è installato, oggi più che mai indispensabili con l’evoluzione della tecnologia. Perché Windows 11 Pro è sinonimo di business.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className={`${styles.bentoCard} ${styles.cardSmall} ${styles.cardHighlight}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <div className={styles.cardContent}>
              <Award size={36} className={styles.cardIcon} />
              <h3 className={styles.cardTitle}>Soddisfatti e Garantiti</h3>
              <div className={styles.cardReveal}>
                <p className={styles.cardTextSmall}>
                  I Pc professionali Expert sono garantiti 24 mesi con formula On Site, con possibilità di estensione di 12 mesi. Intervento a domicilio di un tecnico specializzato per la riparazione del dispositivo (escluse isole minori).
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
          <SpecsCards specs={[
            { id: 'cpu', title: 'Processori', description: 'Intel® Core™ i5, i7, i9 serie Alder Lake 12A Generazione e serie Raptor Lake Refresh 13A e 14A Generazione, supporta serie K 125W, Dissipatore heat pipe o raffreddamento a liquido', icon: <Cpu size={24} /> },
            { id: 'chipset', title: 'Chipset', description: 'Intel® Z790', icon: <Settings size={24} /> },
            { id: 'memory', title: 'Memoria', description: 'RAM DDR5, frequenza fino a 7200MT/s, massimo 192GB', icon: <HardDrive size={24} /> },
            { id: 'storage', title: 'Archiviazione', description: 'Fino a n°2 SSD M.2 PCIe 4.0 NVME, fino a n°3 HD/SSD SATA3 3.5”/2.5”, Intel® Rapid Storage Technology, supporta RAID 0,1 per SATA3 e NVMe, Lettore SD/Micro SD, Masterizzatore DVD opzionale', icon: <HardDrive size={24} /> },
            { id: 'video', title: 'Sezione Video', description: 'Schede Video Professionali Nvidia® Geforce® RTX serie 4000 e 3000, slot PCIe 5.0/4.0 x16', icon: <Monitor size={24} /> },
            { id: 'audio', title: 'Sezione Audio', description: 'Realtek® 7.1 HD Audio CODEC, porte per cuffie e microfono anteriori', icon: <Speaker size={24} /> },
            { id: 'connectivity', title: 'Connettività e Sicurezza', description: 'Lan Realtek® 2.5Gb, Wi-fi 6 + Bluetooth opzionale, seconda LAN Gigabit opzionale, Firmware TPM 2.0 integrato, Modulo TPM hardware opzionale, Porte USB multiple frontali e posteriori (USB 3.2 Gen2x2 Type-C incluse)', icon: <Wifi size={24} /> },
            { id: 'software', title: 'Compatibilità Software', description: 'Windows 11 versione Professional', icon: <Settings size={24} /> },
            { id: 'case', title: 'Case e Alimentatore', description: 'Mid-tower nero, Alimentatori 750W/850W/1000W 80Plus Bronze/Gold, 475x230x455mm, ventole 120mm frontali, Pannelli fonoassorbenti, Filtri antipolvere estraibili', icon: <Box size={24} /> },
            { id: 'included', title: 'In Dotazione', description: 'Tastiera e Mouse USB (opzionali), Kit Drivers e Manuali Utente (dove previsto)', icon: <Box size={24} /> },
            { id: 'energy', title: 'Efficienza Energetica', description: 'ETEC: 320.56 kWh/year, ETEC Max: 329.4 kWh/year. Consumi ottimizzati in varie modalità (Sleep, Idle, Off). Configurazione di riferimento Z790/i9-14900K.', icon: <Activity size={24} /> },
            { id: 'warranty', title: 'Garanzia', description: 'Garanzia di 24/36 mesi On Site con intervento a domicilio entro 48 ore lavorative (escluse isole minori)', icon: <Award size={24} /> },
          ]} />
        </div>
      </section>

      <B2BCTASection />
      <Footer />
    </div>
  );
}
