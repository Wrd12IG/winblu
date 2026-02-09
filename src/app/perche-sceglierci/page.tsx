import styles from '../linea-t-rok/linea-t-rok.module.css';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PercheSceglierciPage() {
    return (
        <div className={styles.container}>
            <Navbar />
            <section className={styles.hero} style={{ minHeight: '60vh' }}>
                <div className={styles.heroContent} style={{ textAlign: 'center', display: 'block' }}>
                    <h1 className={styles.title}>Perché Sceglierci</h1>
                    <p className={styles.heroDescription} style={{ margin: '0 auto' }}>
                        Qualità, affidabilità e assistenza italiana. Ecco cosa rende Winblu unica.
                    </p>
                </div>
            </section>
            <Footer />
        </div>
    );
}
