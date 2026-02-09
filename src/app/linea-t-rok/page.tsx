import Link from 'next/link';
import Image from 'next/image';
import styles from './linea-t-rok.module.css';
import { Shield, Zap, Cpu, Monitor, Wifi, Award } from 'lucide-react';

export const metadata = {
    title: 'Linea T-ROK | Winblu',
    description: 'Un Gaming dalle piccole dimensioni, di un elegante color bianco, per il gamer che vuole il massimo!',
};

export default function LineaTRok() {
    const models = [
        {
            name: "T-ROK H610",
            description: "Powered By ASUS - Design elegante e compatto in color bianco per il gamer che vuole il massimo.",
            image: "/products/t-rok/t-rok-white.png",
            specs: ["Elegant & Compact", "White Aesthetic", "Asus Powered"]
        },
        {
            name: "T-ROK B760 SE",
            description: "Il PC per tutti, dai principianti agli esperti. Entra nel gioco come mai prima d'ora.",
            image: "/products/t-rok/t-rok-black.png",
            specs: ["Performance", "Versatility", "Gaming Ready"]
        },
        {
            name: "T-ROK Z790",
            description: "Scatena la furia del gaming con la massima potenza di calcolo e grafica next-gen.",
            image: "/products/t-rok/t-rok-strix.png",
            specs: ["Extreme Power", "Next-Gen Graphics", "Top Hardware"]
        }
    ];

    return (
        <div className={styles.container}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <div className={styles.logoWrapper}>
                        <Image
                            src="/products/t-rok/logo-t-rok.png"
                            alt="Linea T-ROK"
                            width={400}
                            height={200}
                            style={{ objectFit: 'contain' }}
                        />
                    </div>
                    <h1 className={styles.heroTitle}>Linea Gaming</h1>
                    <h2 className={styles.heroSubtitle}>Performance no limits!</h2>
                    <p className={styles.heroDescription}>
                        Un Gaming dalle piccole dimensioni, di un elegante color bianco, per il gamer che vuole il massimo!
                    </p>
                </div>
            </section>

            {/* Models Section */}
            <section className={styles.modelsGrid}>
                {models.map((model, index) => (
                    <div key={index} className={styles.modelCard}>
                        <div className={styles.modelImageWrapper}>
                            <Image
                                src={model.image}
                                alt={model.name}
                                fill
                                className={styles.modelImage}
                            />
                        </div>
                        <div className={styles.modelDetails}>
                            <h3>{model.name}</h3>
                            <p>{model.description}</p>
                            <div className={styles.specs}>
                                {model.specs.map((spec, i) => (
                                    <span key={i} className={styles.specTag}>{spec}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </section>

            {/* Tech Features Section */}
            <section className={styles.features}>
                <div className={styles.featuresContent}>
                    <h2>Tecnologia all&apos;avanguardia</h2>
                    <div className={styles.featuresGrid}>
                        <div className={styles.featureItem}>
                            <Cpu className={styles.featureIcon} />
                            <h4>Design Elegante e Compatto</h4>
                            <p>Estetica moderna con spazi ottimizzati.</p>
                        </div>
                        <div className={styles.featureItem}>
                            <Zap className={styles.featureIcon} />
                            <h4>Prestazioni Senza Compromessi</h4>
                            <p>Hardware di alto livello per un&apos;esperienza di gioco estrema.</p>
                        </div>
                        <div className={styles.featureItem}>
                            <Monitor className={styles.featureIcon} />
                            <h4>Grafica Next-Gen</h4>
                            <p>Ottimizzato per gli ultimi e più esigenti titoli.</p>
                        </div>
                        <div className={styles.featureItem}>
                            <Wifi className={styles.featureIcon} />
                            <h4>Audio & Connettività</h4>
                            <p>Esperienza audio immersiva e connessione avanzata e stabile.</p>
                        </div>
                        <div className={styles.featureItem}>
                            <Shield className={styles.featureIcon} />
                            <h4>Sicurezza & Supporto</h4>
                            <p>Windows preinstallato con funzioni di sicurezza e supporto dedicato.</p>
                        </div>
                        <div className={styles.featureItem}>
                            <Award className={styles.featureIcon} />
                            <h4>Garanzia Winblu</h4>
                            <p>Assistenza e servizi post-vendita certificati.</p>
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
