import Link from 'next/link';
import Image from 'next/image';
import styles from '../linea-t-rok/linea-t-rok.module.css'; // Reusing styles
import { Shield, Zap, Cpu, Monitor, Wifi, Award, Database, Activity } from 'lucide-react';

export const metadata = {
    title: 'Linea Experience | Winblu',
    description: 'Winblu Experience: la workstation su misura per te. Prestazioni estreme per grafica, BIM, CAD e rendering.',
};

export default function LineaExperience() {
    const specs = [
        {
            title: "Processori Xeon & Core-X",
            description: "Supporto Intel Xeon-W e Core-X fino a 18 core/36 thread per rendering cinematografico.",
            icon: <Cpu />
        },
        {
            title: "Memoria ECC fino a 1TB",
            description: "Affidabilità server-grade con memoria Error Correction Code per flussi di lavoro critici.",
            icon: <Database />
        },
        {
            title: "Grafica Professionale",
            description: "Certified support per NVIDIA QUADRO e GEFORCE con supporto SLI multi-GPU.",
            icon: <Monitor />
        }
    ];

    return (
        <div className={styles.container}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>Linea Experience</h1>
                    <h2 className={styles.heroSubtitle}>La Workstation su misura per te</h2>
                    <p className={styles.heroDescription}>
                        Progettata per i professionisti più esigenti: grafica 3D, BIM, CAD e rendering avanzato.
                        Potenza certificata e affidabilità senza compromessi.
                    </p>
                </div>
            </section>

            {/* Hero Image */}
            <div style={{ padding: '0 20px', maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{ position: 'relative', width: '100%', aspectRatio: '21/9', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}>
                    <Image
                        src="/products/experience/experience-hero.png"
                        alt="Winblu Experience Workstations"
                        fill
                        style={{ objectFit: 'cover' }}
                    />
                </div>
            </div>

            {/* Features Section */}
            <section className={styles.features}>
                <div className={styles.featuresContent}>
                    <h2>Tecnologia Professionale</h2>
                    <div className={styles.featuresGrid}>
                        <div className={styles.featureItem}>
                            <Cpu className={styles.featureIcon} />
                            <h4>Calcolo Estremo</h4>
                            <p>Workstation scalabili con Intel Xeon per prestazioni multitasking senza precedenti.</p>
                        </div>
                        <div className={styles.featureItem}>
                            <Activity className={styles.featureIcon} />
                            <h4>Affidabilità 24/7</h4>
                            <p>Componenti testati per carichi di lavoro continui e sistemi di raffreddamento silenziosi.</p>
                        </div>
                        <div className={styles.featureItem}>
                            <Database className={styles.featureIcon} />
                            <h4>Storage Ultra-Fast</h4>
                            <p>Dual NVMe M.2 SSD con dissipatori integrati, fino a 5 volte più veloci dei normali SSD.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Showcase */}
            <section style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center' }}>
                    <div style={{ display: 'flex', gap: '20px' }}>
                        <Image
                            src="/products/experience/experience-tower-left.png"
                            alt="Workstation Front"
                            width={250}
                            height={450}
                            style={{ height: 'auto', borderRadius: '12px' }}
                        />
                        <Image
                            src="/products/experience/experience-tower-right.png"
                            alt="Workstation Perspective"
                            width={250}
                            height={450}
                            style={{ height: 'auto', borderRadius: '12px' }}
                        />
                    </div>
                    <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', lineHeight: '1.8' }}>
                        <h3 style={{ color: '#00d2ff', fontSize: '2.5rem', marginBottom: '1.5rem' }}>Evoluzione Continua</h3>
                        <p>
                            Le workstation Winblu Experience sono il risultato di anni di ottimizzazione.
                            Dalla connettività dual server-class Intel LAN alla gestione dell&apos;audio professionale ad alta fedeltà,
                            ogni dettaglio è pensato per chi trasforma le idee in realtà.
                        </p>
                        <div style={{ marginTop: '40px', padding: '20px', background: 'rgba(0, 210, 255, 0.05)', borderRadius: '12px', border: '1px solid rgba(0, 210, 255, 0.2)' }}>
                            <h4 style={{ color: '#00d2ff', marginBottom: '10px' }}>Servizio Premium On-Site</h4>
                            <p style={{ fontSize: '0.95rem' }}>
                                Intervento garantito entro 24 ore lavorative. La tua produttività è la nostra priorità.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Promo Banner */}
            <div style={{ padding: '80px 20px', textAlign: 'center' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto', borderRadius: '20px', overflow: 'hidden' }}>
                    <Image
                        src="/products/experience/experience-promo.png"
                        alt="Experience Promo"
                        width={1000}
                        height={400}
                        style={{ width: '100%', height: 'auto' }}
                    />
                </div>
            </div>

            <div className={styles.ctaSection}>
                <Link href="/punti-vendita" className={styles.ctaButton}>
                    Richiedi un preventivo
                </Link>
            </div>
        </div>
    );
}
