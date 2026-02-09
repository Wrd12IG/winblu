import styles from '../linea-t-rok/linea-t-rok.module.css';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NewsPage() {
    return (
        <div className={styles.container}>
            <Navbar />
            <section className={styles.hero} style={{ minHeight: '60vh' }}>
                <div className={styles.heroContent} style={{ textAlign: 'center', display: 'block' }}>
                    <h1 className={styles.title}>Winblu News</h1>
                    <p className={styles.heroDescription} style={{ margin: '0 auto' }}>
                        Resta aggiornato sulle ultime novità, i lanci di nuovi prodotti e gli eventi.
                    </p>
                </div>
            </section>
            <Footer />
        </div>
    );
}
