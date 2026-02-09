"use client";



import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, Search, ShoppingBag } from "lucide-react";
import styles from "./Navbar.module.css";

export default function Navbar() {
    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={styles.navContainer}
        >
            <div className={styles.navBar}>
                {/* Logo */}
                <Link href="/" className={styles.logo}>
                    <div className={styles.logoImageWrapper}>
                        <Image
                            src="https://www.winblu.it/wp-content/uploads/2021/07/LOGO-WINBLU-BIANCO.png"
                            alt="Winblu Logo"
                            width={120}
                            height={40}
                            style={{ objectFit: 'contain' }}
                        />
                    </div>
                </Link>

                {/* Desktop Menu */}
                <div className={styles.menu}>
                    <Link href="/prodotti" className={styles.menuLink}>Prodotti e soluzioni</Link>
                    <Link href="/perche-sceglierci" className={styles.menuLink}>Perché sceglierci</Link>
                    <Link href="/punti-vendita" className={styles.menuLink}>Punti vendita</Link>
                    <Link href="/garanzia" className={styles.menuLink}>Garanzia</Link>
                    <Link href="/supporto" className={styles.menuLink}>Supporto</Link>
                    <Link href="/news" className={styles.menuLink}>News</Link>
                </div>

                {/* Actions */}
                <div className={styles.actions}>
                    <button className={styles.iconBtn}>
                        <Search size={20} />
                    </button>
                    <button className={styles.iconBtn}>
                        <ShoppingBag size={20} />
                    </button>
                    <button className={`${styles.iconBtn} ${styles.mobileMenuBtn}`}>
                        <Menu size={20} />
                    </button>

                    <Link
                        href="#"
                        className={`${styles.ctaBtn} ${styles.hideMobile}`}
                    >
                        Configura
                    </Link>
                </div>
            </div>
        </motion.nav>
    );
}
