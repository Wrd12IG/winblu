import styles from '../linea-t-rok/linea-t-rok.module.css';
import Link from 'next/link';

export const metadata = {
  title: 'Linea Essential | Winblu',
  description: 'Dimensioni small, prestazioni extra large.',
};

export default function LineaEssentialPage() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Linea Essential</h1>
          <p className={styles.subtitle}>Dimensioni small, prestazioni extra large</p>
          <p className={styles.heroDescription}>
            Soluzioni compatte per ufficio e uso quotidiano con un ottimo rapporto qualità-prezzo. Affidabilità senza compromessi per ogni esigenza.
          </p>
        </div>
      </section>

      <section className={styles.intro}>
        <div className={styles.introContent}>
          <p>
            I computer della linea Essential sono pensati per chi cerca un prodotto affidabile, performante ed economico. Ideali per uffici, scuole e uso domestico, offrono tutto ciò che serve per la produttività quotidiana in un formato compatto.
          </p>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2>Vuoi acquistare un prodotto Essential?</h2>
          <p>Trova il punto vendita più vicino a te</p>
          <Link href="/punti-vendita" className={styles.ctaButton}>
            Punti Vendita
          </Link>
        </div>
      </section>
    </div>
  );
}
