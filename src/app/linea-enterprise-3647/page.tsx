import styles from '../linea-t-rok/linea-t-rok.module.css';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
    title: 'Winblu Enterprise 3647 | Server Dual Processor',
    description: 'Server Winblu Enterprise 3647 con CPU Intel Xeon Scalable di 2nd generazione. Potenza senza compromessi.',
};

export default function LineaEnterprise3647Page() {
    return (
        <div className={styles.container}>
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1 className={styles.title}>Winblu Enterprise 3647</h1>
                    <p className={styles.subtitle}>Server Dual Processor per carichi intensivi</p>
                    <p className={styles.heroDescription}>
                        Nessun compromesso per la serie Winblu Enterprise 3647: equipaggiate con le più recenti tecnologie dei microprocessori Intel Xeon Scalable di 2nd generazione. Progettati per data center, virtualizzazione avanzata e calcolo ad alte prestazioni.
                    </p>
                </div>
            </section>

            <section className={styles.intro}>
                <div className={styles.introContent}>
                    <p>
                        Massima densità di calcolo e affidabilità mission-critical. I server Enterprise 3647 offrono configurazioni dual socket per gestire applicazioni aziendali complesse, database e infrastrutture cloud.
                    </p>
                </div>
            </section>

            <section className={styles.gallery}>
                <h2>Galleria</h2>
                <div className={styles.grid}>
                    <div className={styles.card}>
                        <Image src="/products/enterprise-3647/extracted_24.png" alt="Winblu Enterprise 3647 frontale" width={400} height={300} style={{ objectFit: "contain" }} />
                    </div>
                    <div className={styles.card}>
                        <Image src="/products/enterprise-3647/extracted_25.png" alt="Winblu Enterprise 3647 interno" width={400} height={300} style={{ objectFit: "contain" }} />
                    </div>
                    <div className={styles.card}>
                        <Image src="/products/enterprise-3647/extracted_26.png" alt="Winblu Enterprise 3647 retro" width={400} height={300} style={{ objectFit: "contain" }} />
                    </div>
                    <div className={styles.card}>
                        <Image src="/products/enterprise-3647/extracted_27.png" alt="Winblu Enterprise 3647 dettagli" width={400} height={300} style={{ objectFit: "contain" }} />
                    </div>
                </div>
            </section>

            <section className={styles.ctaSection}>
                <div className={styles.ctaContent}>
                    <h2>Soluzioni Enterprise su misura</h2>
                    <p>Parla con i nostri specialisti per configurare il tuo server</p>
                    <Link href="/punti-vendita" className={styles.ctaButton}>
                        Contattaci
                    </Link>
                </div>
            </section>
        </div>
    );
}
