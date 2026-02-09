import styles from '../linea-t-rok/linea-t-rok.module.css';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
    title: 'Winblu Enterprise 1151 | Server Monoprocessore',
    description: 'Server Winblu Enterprise 1151 con CPU Intel Xeon E. Potenza e affidabilità per la tua azienda.',
};

export default function LineaEnterprise1151Page() {
    return (
        <div className={styles.container}>
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1 className={styles.title}>Winblu Enterprise 1151</h1>
                    <p className={styles.subtitle}>Server Monoprocessore performanti</p>
                    <p className={styles.heroDescription}>
                        I server Winblu della linea Enterprise 1151 supportano le più recenti tecnologie con le CPU Intel® Xeon® E. Prestazioni superiori per gestire i carichi di lavoro aziendali critici.
                    </p>
                </div>
            </section>

            <section className={styles.intro}>
                <div className={styles.introContent}>
                    <p>
                        Affidabilità, scalabilità e sicurezza: i server Enterprise 1151 sono la base solida per la tua infrastruttura IT. Ideali per piccole e medie imprese che necessitano di un server robusto e versatile.
                    </p>
                </div>
            </section>

            <section className={styles.gallery}>
                <h2>Galleria</h2>
                <div className={styles.grid}>
                    <div className={styles.card}>
                        <Image src="/products/enterprise-1151/extracted_24.png" alt="Winblu Enterprise 1151 frontale" width={400} height={300} style={{ objectFit: "contain" }} />
                    </div>
                    <div className={styles.card}>
                        <Image src="/products/enterprise-1151/extracted_25.png" alt="Winblu Enterprise 1151 interno" width={400} height={300} style={{ objectFit: "contain" }} />
                    </div>
                    <div className={styles.card}>
                        <Image src="/products/enterprise-1151/extracted_26.png" alt="Winblu Enterprise 1151 retro" width={400} height={300} style={{ objectFit: "contain" }} />
                    </div>
                    <div className={styles.card}>
                        <Image src="/products/enterprise-1151/extracted_27.png" alt="Winblu Enterprise 1151 dettagli" width={400} height={300} style={{ objectFit: "contain" }} />
                    </div>
                </div>
            </section>

            <section className={styles.ctaSection}>
                <div className={styles.ctaContent}>
                    <h2>Configura il tuo server Enterprise</h2>
                    <p>Contattaci per una consulenza personalizzata</p>
                    <Link href="/punti-vendita" className={styles.ctaButton}>
                        Contattaci
                    </Link>
                </div>
            </section>
        </div>
    );
}
