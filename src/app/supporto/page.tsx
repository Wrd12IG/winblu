import styles from '../linea-t-rok/linea-t-rok.module.css';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function SupportoPage() {
    return (
        <div className={styles.container}>
            <Navbar />
            <section className={styles.hero} style={{ minHeight: '60vh' }}>
                <div className={styles.heroContent} style={{ textAlign: 'center', display: 'block' }}>
                    <h1 className={styles.title}>Supporto Tecnico</h1>
                    <p className={styles.heroDescription} style={{ margin: '0 auto' }}>
                        Il nostro team di esperti è sempre al tuo fianco per risolvere qualsiasi problema.
                    </p>
                </div>
            </section>
            <Footer />
        </div>
    );
}
