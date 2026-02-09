import Link from 'next/link';
import Image from 'next/image';
import styles from '../linea-t-rok/linea-t-rok.module.css'; // Reusing styles for consistency
import { Shield, Zap, Cpu, Monitor, Wifi, Award } from 'lucide-react';

export const metadata = {
    title: 'Linea Energy | Winblu',
    description: 'Winblu Energy rappresenta il best-seller della gamma Winblu: robustezza, qualità e design elegante.',
};

export default function LineaEnergy() {
    const features = [
        {
            title: "Processori Intel Core",
            description: "Equipaggiata con Intel Core i3, i5 e i7 di 12esima generazione per la massima produttività.",
            icon: <Cpu />
        },
        {
            title: "Grafica 4K/8K",
            description: "Intel UHD Graphics con supporto HDR fino a 8K o GPU NVIDIA GTX dedicata.",
            icon: <Monitor />
        },
        {
            title: "Connettività Completa",
            description: "USB 3.1 frontali, USB 3.2 posteriori e supporto Wi-Fi 6 opzionale.",
            icon: <Wifi />
        }
    ];

    return (
        <div className={styles.container}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>Linea Energy</h1>
                    <h2 className={styles.heroSubtitle}>Qualità e Affidabilità</h2>
                    <p className={styles.heroDescription}>
                        Il best-seller della gamma Winblu che combina robustezza e qualità dei materiali con l&apos;eleganza e l&apos;ergonomia del design.
                    </p>
                </div>
            </section>

            {/* Main Image Setup */}
            <div style={{ padding: '0 20px', maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}>
                    <Image
                        src="/products/energy/energy-hero.jpg"
                        alt="Winblu Energy Setup"
                        fill
                        style={{ objectFit: 'cover' }}
                    />
                </div>
            </div>

            {/* Features Section */}
            <section className={styles.features}>
                <div className={styles.featuresContent}>
                    <h2>Prestazioni e Versatilità</h2>
                    <div className={styles.featuresGrid}>
                        <div className={styles.featureItem}>
                            <Cpu className={styles.featureIcon} />
                            <h4>Standard Energy</h4>
                            <p>Ideale per ufficio e casa con processori Intel Core di 12a generazione.</p>
                        </div>
                        <div className={styles.featureItem}>
                            <Monitor className={styles.featureIcon} />
                            <h4>Energy 2</h4>
                            <p>Potenziata con GPU NVIDIA GeForce GTX per creator e media streamer.</p>
                        </div>
                        <div className={styles.featureItem}>
                            <Shield className={styles.featureIcon} />
                            <h4>Garanzia On-Site</h4>
                            <p>24 mesi di assistenza presso il tuo domicilio o ufficio, estendibile a 36.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Detail Showcase */}
            <section style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', alignItems: 'center' }}>
                    <div>
                        <Image
                            src="/products/energy/energy-tower.jpg"
                            alt="Energy Tower"
                            width={500}
                            height={500}
                            style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
                        />
                    </div>
                    <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', lineHeight: '1.8' }}>
                        <h3 style={{ color: '#00d2ff', fontSize: '2rem', marginBottom: '1.5rem' }}>Design ed Ergonomia</h3>
                        <p>
                            Il case della linea Energy è progettato per essere funzionale ed elegante.
                            Il pannello frontale con texture carbon-fiber garantisce un look moderno,
                            mentre l&apos;accesso facilitato alle porte I/O permette un utilizzo quotidiano senza stress.
                        </p>
                        <div style={{ marginTop: '20px', borderRadius: '12px', overflow: 'hidden' }}>
                            <Image
                                src="/products/energy/energy-io.jpg"
                                alt="Energy I/O Detail"
                                width={400}
                                height={200}
                                style={{ width: '100%', height: 'auto' }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <div className={styles.ctaSection}>
                <Link href="/punti-vendita" className={styles.ctaButton}>
                    Trova un punto vendita
                </Link>
            </div>
        </div>
    );
}
