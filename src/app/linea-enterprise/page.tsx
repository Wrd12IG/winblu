import styles from '../linea-t-rok/linea-t-rok.module.css';
import Link from 'next/link';

export const metadata = {
  title: 'Linea Enterprise | Winblu',
  description: 'Soluzioni server ottimizzate per il tuo lavoro.',
};

export default function LineaEnterprisePage() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Linea Enterprise</h1>
          <p className={styles.subtitle}>Soluzioni server ottimizzate per il tuo lavoro</p>
          <p className={styles.heroDescription}>
            Server professionali per aziende che richiedono soluzioni affidabili e performanti. Configurazioni personalizzate per ogni esigenza aziendale.
          </p>
        </div>
      </section>

      <section className={styles.intro}>
        <div className={styles.introContent}>
          <p>
            La linea Enterprise offre server rack e tower configurabili per ogni necessità aziendale. Scegli tra le nostre soluzioni basate su architetture Intel Xeon.
          </p>
        </div>
      </section>

      <section className={styles.gallery}>
        <h2>I nostri modelli</h2>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Enterprise 1151</h3>
            <p>Server Monoprocessore con Intel Xeon E</p>
            <Link href="/linea-enterprise-1151" className={styles.ctaButton}>Scopri di più</Link>
          </div>
          <div className={styles.card}>
            <h3>Enterprise 3647</h3>
            <p>Server Dual Processor con Intel Xeon Scalable</p>
            <Link href="/linea-enterprise-3647" className={styles.ctaButton}>Scopri di più</Link>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2>Hai bisogno di una soluzione server?</h2>
          <p>Contattaci per una consulenza personalizzata</p>
          <Link href="/punti-vendita" className={styles.ctaButton}>
            Contattaci
          </Link>
        </div>
      </section>
    </div>
  );
}
