import styles from './punti-vendita.module.css';

export const metadata = {
    title: 'Punti Vendita | Winblu',
    description: 'Trova il punto vendita Winblu più vicino a te.',
};

export default function PuntiVenditaPage() {
    return (
        <div className={styles.container}>
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1 className={styles.title}>Punti Vendita</h1>
                    <p className={styles.subtitle}>Trova il punto vendita più vicino a te</p>
                </div>
            </section>

            <section className={styles.content}>
                <div className={styles.contentInner}>
                    <p className={styles.intro}>
                        I computer Winblu sono disponibili presso una rete di rivenditori autorizzati su tutto il territorio italiano.
                        Trova il punto vendita più vicino a te per scoprire dal vivo la qualità dei nostri prodotti.
                    </p>

                    <div className={styles.contactInfo}>
                        <h2>Contattaci</h2>
                        <p>Per informazioni sui punti vendita e per richieste commerciali:</p>
                        <ul>
                            <li>Email: <a href="mailto:info@winblu.it">info@winblu.it</a></li>
                            <li>Telefono: <a href="tel:+390258437000">+39 02 58437000</a></li>
                        </ul>
                    </div>

                    <div className={styles.resellerInfo}>
                        <h2>Sei un rivenditore?</h2>
                        <p>
                            Se sei interessato a diventare un rivenditore autorizzato Winblu, contattaci per maggiori informazioni
                            sulle condizioni commerciali e sul supporto che possiamo offrirti.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
