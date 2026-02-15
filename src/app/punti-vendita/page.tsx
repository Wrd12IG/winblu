import styles from './punti-vendita.module.css';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
    title: 'Punti Vendita | Winblu',
    description: 'Trova il punto vendita Winblu più vicino a te.',
};

export default function PuntiVenditaPage() {
    return (
        <div className={styles.container}>
            <Navbar />
            <section className={styles.hero} style={{ minHeight: '60vh' }}>
                <div className={styles.heroContent} style={{ textAlign: 'center', display: 'block' }}>
                    <h1 className={styles.title}>Punti Vendita</h1>
                    <p className={styles.heroDescription} style={{ margin: '0 auto' }}>
                        Trova il rivenditore Winblu più vicino a te oppure contattaci per diventare partner.
                    </p>
                </div>
            </section>

            <section style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{ marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2rem', color: '#fff', marginBottom: '1.5rem' }}>
                        Rete di Rivenditori Autorizzati
                    </h2>
                    <p style={{ color: '#94a3b8', fontSize: '1.1rem', lineHeight: '1.8' }}>
                        Winblu è distribuito attraverso una rete selezionata di rivenditori autorizzati su tutto il territorio nazionale.
                        I nostri partner garantiscono lo stesso standard di qualità e assistenza che ci contraddistingue.
                    </p>
                </div>

                <div style={{ marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2rem', color: '#fff', marginBottom: '1.5rem' }}>
                        Contattaci
                    </h2>
                    <div style={{ color: '#94a3b8', fontSize: '1.1rem', lineHeight: '2' }}>
                        <p><strong style={{ color: 'var(--accent-cyan)' }}>Email:</strong> info@winblu.it</p>
                        <p><strong style={{ color: 'var(--accent-cyan)' }}>Telefono:</strong> +39 02 58437000</p>
                        <p><strong style={{ color: 'var(--accent-cyan)' }}>Orari:</strong> Lun-Ven 9:00-18:00</p>
                    </div>
                </div>

                <div>
                    <h2 style={{ fontSize: '2rem', color: '#fff', marginBottom: '1.5rem' }}>
                        Diventa Rivenditore
                    </h2>
                    <p style={{ color: '#94a3b8', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
                        Sei interessato a diventare un rivenditore autorizzato Winblu? Contattaci per scoprire le condizioni commerciali,
                        il supporto dedicato e i vantaggi riservati ai nostri partner.
                    </p>
                    <a
                        href="mailto:info@winblu.it"
                        className={styles.ctaButton}
                        style={{ display: 'inline-block' }}
                    >
                        Richiedi Informazioni
                    </a>
                </div>
            </section>

            <Footer />
        </div>
    );
}
