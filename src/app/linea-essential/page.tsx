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
import { Zap, Shield, Box, Layout, Cpu, Monitor, Wifi, HardDrive, Settings, Activity, Lock, Speaker, Award } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const GridBackground = () => (
  <div className={styles.gridBg} />
);

export default function LineaEssentialPage() {
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
            <span className={styles.heroTag}>Linea Essential</span>
            <h1 className={styles.heroTitle}>
              Winblu <span className={styles.gradient}>Essential</span>
            </h1>
            <h2 className={styles.heroSubtitle}>Dimensioni Small in soli 8.3L… prestazioni Extra-Large</h2>
            <div className={styles.heroDesc}>
              <p>
                Un autentico concentrato di potenza e tecnologia al servizio delle tue necessità. Grazie al design ultra-compatto SFF da 8.3 litri, la nuova Linea Essential di Winblu è la soluzione ideale per chi ha problemi di spazio e predilige il massimo della funzionalità, nel design e nei contenuti tecnici.
              </p>
              <p>
                Il nuovo Winblu Essential misura, in posizione orizzontale, 27.2 centimetri di profondità, solo 33.6 di larghezza e 9.5 in altezza. Grazie al pratico supporto in dotazione, può essere posizionato anche in verticale.
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
            className={`${styles.bentoCard} ${styles.cardLarge}`}
            initial={{ opacity: 1, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className={styles.cardContent}>
              <Cpu size={48} className={styles.cardIcon} style={{ color: '#0160A9' }} />
              <h2 className={styles.cardTitle}>Performance al Top</h2>
              <p className={styles.cardText}>
                Performance potenti con il nuovo Essential 8.3L grazie ai processori Intel® Core™ di 12A e 13A generazione, che offrono notevoli miglioramenti delle prestazioni per una maggiore produttività.
              </p>
              <div className={styles.cardReveal}>
                <p className={styles.cardText}>
                  La nuova linea supporta CPU da 65 watt per gestire compiti di calcolo intensivi. Supporta fino a 64GB di memoria DDR4 3200Mhz e design a due unità di archiviazione (SSD M.2 PCIe 4.0 + SSD/HD 2.5”).
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className={`${styles.bentoCard} ${styles.cardSmall} ${styles.cardHighlight}`}
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className={styles.cardContent}>
              <Wifi size={36} className={styles.cardIcon} />
              <h3 className={styles.cardTitle}>Piena connettività</h3>
              <div className={styles.cardReveal}>
                <p className={styles.cardTextSmall}>
                  Sul lato frontale 2x USB 3.0, 2x USB 2.0 e Audio. Sul retro ulteriori USB, uscite D-SUB (VGA) e HDMI (in base al modello). Opzionali Masterizzatore Slim e porta COM/Seriale.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className={`${styles.bentoCard} ${styles.cardMedium}`}
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className={styles.cardContent}>
              <Monitor size={48} className={styles.cardIcon} />
              <h3 className={styles.cardTitle}>Core grafico eccellente</h3>
              <p className={styles.cardText}>
                Winblu Essential 8.3L integra il core grafico Intel® UHD 770/730 con supporto fino a 8k@60Hz HDR e media a 12-bit.
              </p>
              <div className={styles.cardReveal}>
                <p className={styles.cardText}>
                  Per gli utilizzatori più esigenti, è possibile integrare una scheda video discreta su slot PCIe 4.0 x16 Low Profile, come ad esempio una Nvidia® RTX T400.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className={`${styles.bentoCard} ${styles.cardMedium} ${styles.cardHighlight}`}
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className={styles.cardContent}>
              <Lock size={48} className={styles.cardIcon} />
              <h3 className={styles.cardTitle}>Windows 11 e Sicurezza</h3>
              <p className={styles.cardText}>
                Winblu Essential suggerisce Windows 11 Professional, l’ideale per gestire al meglio il proprio computer in contesto lavorativo.
              </p>
              <div className={styles.cardReveal}>
                <p className={styles.cardText}>
                  Un sistema operativo progettato per migliorare produttività, prestazioni e sicurezza. Windows 11 Pro è sinonimo di business.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Row 3 */}
          <motion.div
            className={`${styles.bentoCard} ${styles.cardLarge}`}
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div className={styles.cardContent}>
              <Award size={48} className={styles.cardIcon} style={{ color: '#0160A9' }} />
              <h2 className={styles.cardTitle}>Soddisfatti e Garantiti</h2>
              <p className={styles.cardText}>
                I Pc Essential sono garantiti 24 mesi con formula On Site, con la possibilità di estendere il servizio di ulteriori 12 mesi.
              </p>
              <div className={styles.cardReveal}>
                <p className={styles.cardText}>
                  Questa specifica formula prevede l’intervento a domicilio di un tecnico specializzato e altamente qualificato per la riparazione del dispositivo (escluse isole minori).
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className={`${styles.bentoCard} ${styles.cardSmall} ${styles.cardHighlight}`}
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <div className={styles.cardContent}>
              <Activity size={36} className={styles.cardIcon} />
              <h3 className={styles.cardTitle}>Efficienza Energetica</h3>
              <div className={styles.cardReveal}>
                <p className={styles.cardTextSmall}>
                  In fase di aggiornamento. Il design compatto e l'uso di componenti efficienti contribuiscono a ridurre i consumi e l'impatto ambientale.
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
            initial={{ opacity: 1, y: 0 }}
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
            { id: 'cpu', title: 'Processori', description: 'Intel® Core™ i3, i5, i7 serie Alder Lake 12A Generazione e serie Raptor Lake 13A Generazione, Socket LGA1700 65W', icon: <Cpu size={24} /> },
            { id: 'chipset', title: 'Chipset', description: 'Intel® H610', icon: <Settings size={24} /> },
            { id: 'memory', title: 'Memoria', description: 'RAM DDR4 3200MHz su n°2 alloggiamenti, massimo 64GB', icon: <HardDrive size={24} /> },
            { id: 'storage', title: 'Archiviazione', description: 'Supporta n°1 SSD M.2 PCIe® 4.0 x4 e n°1 HD/SSD 2.5’’ Sata3, Unità ottica slim opzionale, Lettore card non presenti', icon: <HardDrive size={24} /> },
            { id: 'video', title: 'Sezione Video', description: 'Core grafico Intel® UHD 770/730 (in base alla cpu), connettori D-SUB (VGA) e HDMI 2.1 (4K@60Hz), possibilità di scheda video aggiuntiva su slot PCIe 4.0/3.0 x16 Low Profile', icon: <Monitor size={24} /> },
            { id: 'audio', title: 'Sezione Audio', description: 'Realtek® ALC897, 7.1 canali HD, n°3 jacks audio posteriori', icon: <Speaker size={24} /> },
            { id: 'connectivity', title: 'Connettività e Sicurezza', description: 'LAN Gigabit Realtek® 8111H integrata, scheda Wi-fi 6 + Bluetooth 5.0 PCIe opzionale, scheda LAN Gigabit PCIe opzionale, n°2 USB3.0 e n°2 USB2.0 frontali, n°2 USB3.2 Gen1 e n°4 USB2.0 posteriori, Firmware TPM 2.0 integrato, Modulo TPM hardware opzionale', icon: <Wifi size={24} /> },
            { id: 'software', title: 'Compatibilità Software', description: 'Windows 11 in versione Professional o Home, anche in versione Educational per le scuole', icon: <Settings size={24} /> },
            { id: 'case', title: 'Case e Alimentatore', description: 'Desktop Small Form Factor 8.3 litri nero, Alimentatore 350W 80Plus Bronze, 272x336x95mm, n°2 porte Audio frontali, piedistallo in dotazione, Kensington slot per chiusura di sicurezza posteriore', icon: <Box size={24} /> },
            { id: 'included', title: 'In Dotazione', description: 'Tastiera e Mouse USB (opzionali), Kit Drivers e Manuali Utente (dove previsto)', icon: <Box size={24} /> },
            { id: 'energy', title: 'Efficienza Energetica', description: 'In fase di aggiornamento', icon: <Activity size={24} /> },
            { id: 'warranty', title: 'Garanzia', description: 'Garanzia di 24/36 mesi On Site con intervento a domicilio entro 48 ore lavorative (escluse isole minori)', icon: <Award size={24} /> },
          ]} />
        </div>
      </section>

      <B2BCTASection />
      <Footer />
    </div>
  );
}
