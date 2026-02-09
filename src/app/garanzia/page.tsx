import styles from '../linea-t-rok/linea-t-rok.module.css';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function GaranziaPage() {
    return (
        <div className={styles.container}>
            <Navbar />
            <section className={styles.hero} style={{ minHeight: '60vh' }}>
                <div className={styles.heroContent} style={{ textAlign: 'center', display: 'block' }}>
                    <h1 className={styles.title}>Garanzia Winblu</h1>
                    <p className={styles.heroDescription} style={{ margin: '0 auto' }}>
                        Dormi sonni tranquilli con la nostra garanzia completa e l'assistenza dedicata.
                    </p>
                </div>
            </section>
            <Footer />
        </div>
    );
}
