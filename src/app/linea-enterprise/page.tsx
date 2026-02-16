"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Server, Shield, Zap, Award, ChevronRight, Layers, Database, Network } from 'lucide-react';
import styles from '../styles/product-bento.module.css';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import B2BCTASection from "@/components/B2BCTASection";

const GridBackground = () => (
  <div className={styles.gridBg} />
);

export default function LineaEnterprisePage() {
  const serverModels = [
    {
      name: "Enterprise 1151",
      slug: "linea-enterprise-1151",
      subtitle: "Server Monoprocessore",
      description: "Intel® Xeon® E-2300 series, ideale per piccole-medie imprese che cercano affidabilità e prestazioni in un formato compatto.",
      image: "/assets/enterprise-1151-hero.png",
      specs: ["Xeon E-2300", "128GB ECC", "RAID HW", "PSU Ridondata"]
    },
    {
      name: "Enterprise 3647",
      slug: "linea-enterprise-3647",
      subtitle: "Server Dual-Socket",
      description: "Intel® Xeon® Scalable, per datacenter e carichi intensivi. Massima espandibilità e potenza di calcolo senza compromessi.",
      image: "/assets/enterprise-3647-hero.png",
      specs: ["Dual Xeon Scalable", "Fino a 2TB ECC", "NVMe RAID", "Hot-Swap Ops"]
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
            <span className={styles.heroTag}>Potenza e Affidabilità No-Stop</span>
            <h1 className={styles.heroTitle}>
              Winblu <span className={styles.gradient}>Enterprise</span>
            </h1>
            <p className={styles.heroDesc}>
              Soluzioni server scalabili, affidabili e certificate per ambienti professionali e datacenter. Progettati per garantire la continuità del tuo business con hardware di classe enterprise.
            </p>
            <div className={styles.heroCTAs}>
              <Link href="/punti-vendita" className={styles.ctaPrimary}>
                Richiedi Progetto
              </Link>
              <Link href="#modelli" className={styles.ctaSecondary}>
                Scopri la Gamma
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
                src="/assets/enterprise-3647-hero.png"
                alt="Winblu Enterprise Server"
                fill
                className={styles.heroProductImage}
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Models Section - Bento Grid */}
      <section id="modelli" className={styles.bentoSection}>
        <div className={styles.bentoGrid}>
          {/* Main Model 1 - 1151 */}
          <motion.div
            className={`${styles.bentoCard} ${styles.cardLarge}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link href="/linea-enterprise-1151" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className={styles.cardContent}>
                <Server size={48} className={styles.cardIcon} />
                <h2 className={styles.cardTitle}>{serverModels[0].name}</h2>
                <p className={styles.cardText}>{serverModels[0].description}</p>
                <div className={styles.cardReveal}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1rem' }}>
                    {serverModels[0].specs.map((spec, i) => (
                      <span key={i} style={{
                        background: 'rgba(255,255,255,0.05)',
                        padding: '4px 10px',
                        borderRadius: '20px',
                        fontSize: '0.75rem',
                        border: '1px solid rgba(255,255,255,0.1)'
                      }}>
                        {spec}
                      </span>
                    ))}
                  </div>
                  <span className={styles.ctaButton} style={{ marginTop: '1.5rem', display: 'inline-block' }}>
                    Dettagli Tecnici
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Feature: Reliability */}
          <motion.div
            className={`${styles.bentoCard} ${styles.cardSmall} ${styles.cardHighlight}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className={styles.cardContent}>
              <Shield size={36} className={styles.cardIcon} />
              <h3 className={styles.cardTitle}>24/7 Ops</h3>
              <div className={styles.cardReveal}>
                <p className={styles.cardTextSmall}>
                  Testati per operare 365 giorni l'anno senza interruzioni.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Model 2 - 3647 */}
          <motion.div
            className={`${styles.bentoCard} ${styles.cardMedium} ${styles.cardHighlight}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link href="/linea-enterprise-3647" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className={styles.cardContent}>
                <Database size={40} className={styles.cardIcon} />
                <h3 className={styles.cardTitle}>{serverModels[1].name}</h3>
                <p className={styles.cardText}>{serverModels[1].description}</p>
                <div className={styles.cardReveal}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1rem' }}>
                    {serverModels[1].specs.map((spec, i) => (
                      <span key={i} style={{
                        background: 'rgba(255,255,255,0.05)',
                        padding: '4px 10px',
                        borderRadius: '20px',
                        fontSize: '0.75rem',
                        border: '1px solid rgba(255,255,255,0.1)'
                      }}>
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Feature: Growth */}
          <motion.div
            className={`${styles.bentoCard} ${styles.cardMedium}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className={styles.cardContent}>
              <Zap size={48} className={styles.cardIcon} />
              <h3 className={styles.cardTitle}>Scalabilità</h3>
              <p className={styles.cardText}>
                Soluzioni pensate per crescere con la tua infrastruttura IT.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Comparison Table */}
      <section style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            fontSize: '2.5rem',
            fontWeight: '800',
            textAlign: 'center',
            marginBottom: '4rem',
            background: 'linear-gradient(135deg, #fff 0%, #0160A9 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          Confronto Rapido
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '24px',
            padding: '2rem',
            overflow: 'auto',
            backdropFilter: 'blur(10px)'
          }}
        >
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid rgba(255,255,255,0.1)' }}>
                <th style={{ textAlign: 'left', padding: '1rem', color: '#fff' }}>Caratteristica</th>
                <th style={{ textAlign: 'center', padding: '1rem', color: '#00d2ff' }}>Enterprise 1151</th>
                <th style={{ textAlign: 'center', padding: '1rem', color: '#00d2ff' }}>Enterprise 3647</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <td style={{ padding: '1rem', color: '#94a3b8' }}>Processori</td>
                <td style={{ padding: '1rem', textAlign: 'center', color: '#fff' }}>Singolo (Xeon E)</td>
                <td style={{ padding: '1rem', textAlign: 'center', color: '#fff' }}>Dual-Socket (Xeon Scalable)</td>
              </tr>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <td style={{ padding: '1rem', color: '#94a3b8' }}>RAM Massima</td>
                <td style={{ padding: '1rem', textAlign: 'center', color: '#fff' }}>128GB ECC</td>
                <td style={{ padding: '1rem', textAlign: 'center', color: '#fff' }}>Fino a 2TB ECC</td>
              </tr>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <td style={{ padding: '1rem', color: '#94a3b8' }}>Virtualizzazione</td>
                <td style={{ padding: '1rem', textAlign: 'center', color: '#fff' }}>✓ Fino a 10 VM</td>
                <td style={{ padding: '1rem', textAlign: 'center', color: '#fff' }}>✓ Oltre 50 VM</td>
              </tr>
              <tr>
                <td style={{ padding: '1rem', color: '#94a3b8' }}>Ideale Per</td>
                <td style={{ padding: '1rem', textAlign: 'center', color: '#fff' }}>PMI, File Server</td>
                <td style={{ padding: '1rem', textAlign: 'center', color: '#fff' }}>Datacenter, Cloud</td>
              </tr>
            </tbody>
          </table>
        </motion.div>
      </section>

      <B2BCTASection />
      <Footer />
    </div>
  );
}
