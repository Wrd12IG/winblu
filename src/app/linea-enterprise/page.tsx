"use client";

import styles from '../linea-t-rok/linea-t-rok.module.css';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from 'framer-motion';
import { Server, Shield, Zap, Award, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
};

export default function LineaEnterprisePage() {
  const features = [
    {
      icon: <Shield size={40} />,
      title: "Affidabilità 24/7",
      description: "Progettati per funzionare ininterrottamente con componenti server-grade certificati."
    },
    {
      icon: <Zap size={40} />,
      title: "Espandibilità Massima",
      description: "Architetture scalabili per crescere con le esigenze della tua azienda."
    },
    {
      icon: <Server size={40} />,
      title: "Supporto Enterprise",
      description: "Assistenza prioritaria, SLA garantiti e intervento on-site disponibile."
    },
    {
      icon: <Award size={40} />,
      title: "Certificazioni",
      description: "Componenti certificati per virtualizzazione e ambienti mission-critical."
    }
  ];

  const serverModels = [
    {
      name: "Enterprise 1151",
      slug: "linea-enterprise-1151",
      subtitle: "Server Monoprocessore",
      description: "Intel Xeon E-2300 series, ideale per piccole-medie imprese",
      specs: {
        cpu: "Xeon E-2300",
        ram: "Fino a 128GB ECC",
        storage: "RAID hardware",
        psu: "Ridondante"
      }
    },
    {
      name: "Enterprise 3647",
      slug: "linea-enterprise-3647",
      subtitle: "Server Dual-Socket",
      description: "Intel Xeon Scalable 4th Gen, per datacenter e carichi intensivi",
      specs: {
        cpu: "Xeon Scalable (x2)",
        ram: "Fino a 2TB ECC",
        storage: "SAS/NVMe RAID",
        psu: "Ridondante Hot-Swap"
      }
    }
  ];

  return (
    <div className={styles.container}>
      <Navbar />

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className={styles.subtitle}>
              Linea Enterprise
            </motion.div>
            <motion.h1 variants={fadeInUp} className={styles.title}>
              Server Professionali <br />
              Per Aziende
            </motion.h1>
            <motion.p variants={fadeInUp} className={styles.description}>
              Soluzioni server scalabili, affidabili e certificate per ambienti enterprise e datacenter.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className={styles.intro}>
        <div className={styles.introContent}>
          <motion.h2
            className={styles.sectionTitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Perché Scegliere i Server Winblu
          </motion.h2>
          <motion.div
            className={styles.featuresGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className={styles.featureItem}
                variants={fadeInUp}
              >
                <div className={styles.featureIcon}>
                  {feature.icon}
                </div>
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Server Models */}
      <section className={styles.gallery}>
        <motion.h2
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          I Nostri Modelli Server
        </motion.h2>

        <div className={styles.grid} style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))' }}>
          {serverModels.map((server, index) => (
            <motion.div
              key={index}
              className={styles.card}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
            >
              <div style={{
                height: '250px',
                background: `linear-gradient(135deg, rgba(0, 240, 255, ${0.1 + index * 0.05}), rgba(59, 130, 246, ${0.1 + index * 0.05}))`,
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '2rem',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{
                  position: 'absolute',
                  width: '250px',
                  height: '250px',
                  background: 'radial-gradient(circle, rgba(0, 240, 255, 0.3), transparent)',
                  borderRadius: '50%',
                  filter: 'blur(80px)'
                }} />
                <Server size={100} color="var(--accent-cyan)" />
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <div style={{
                  color: 'var(--accent-cyan)',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  marginBottom: '0.5rem'
                }}>
                  {server.subtitle}
                </div>
                <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
                  {server.name}
                </h3>
                <p style={{ color: '#94a3b8', marginBottom: '2rem', lineHeight: '1.7' }}>
                  {server.description}
                </p>
              </div>

              <div className={styles.specs} style={{ marginBottom: '2rem' }}>
                <div className={styles.spec}>
                  <span>Processore</span>
                  <span>{server.specs.cpu}</span>
                </div>
                <div className={styles.spec}>
                  <span>RAM</span>
                  <span>{server.specs.ram}</span>
                </div>
                <div className={styles.spec}>
                  <span>Storage</span>
                  <span>{server.specs.storage}</span>
                </div>
                <div className={styles.spec}>
                  <span>Alimentazione</span>
                  <span>{server.specs.psu}</span>
                </div>
              </div>

              <Link
                href={`/${server.slug}`}
                className={styles.ctaButton}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  width: '100%'
                }}
              >
                Scopri {server.name} <ArrowRight size={20} />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <motion.h2
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Confronto Rapido
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-card)',
            borderRadius: '24px',
            padding: '2rem',
            overflow: 'auto'
          }}
        >
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid var(--border-card)' }}>
                <th style={{ textAlign: 'left', padding: '1rem', color: '#fff' }}>Caratteristica</th>
                <th style={{ textAlign: 'center', padding: '1rem', color: 'var(--accent-cyan)' }}>Enterprise 1151</th>
                <th style={{ textAlign: 'center', padding: '1rem', color: 'var(--accent-cyan)' }}>Enterprise 3647</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid var(--border-card)' }}>
                <td style={{ padding: '1rem', color: '#94a3b8' }}>Processori</td>
                <td style={{ padding: '1rem', textAlign: 'center', color: '#fff' }}>Singolo</td>
                <td style={{ padding: '1rem', textAlign: 'center', color: '#fff' }}>Dual-Socket</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--border-card)' }}>
                <td style={{ padding: '1rem', color: '#94a3b8' }}>RAM Massima</td>
                <td style={{ padding: '1rem', textAlign: 'center', color: '#fff' }}>128GB ECC</td>
                <td style={{ padding: '1rem', textAlign: 'center', color: '#fff' }}>2TB ECC</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--border-card)' }}>
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

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <motion.div
          className={styles.ctaContent}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.sectionTitle}>Configurazione Su Misura</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>
            Ogni server può essere personalizzato per le tue esigenze specifiche. Contattaci per un preventivo.
          </p>
          <Link href="/punti-vendita" className={styles.ctaButton}>
            Richiedi Preventivo
          </Link>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
