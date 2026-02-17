"use client";


import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, Search, ShoppingBag, ChevronDown, X } from "lucide-react";
import styles from "./Navbar.module.css";
import MegaMenu from "./MegaMenu";
import Modal from "./Modal";
import PartnerRequestForm from "./PartnerRequestForm";

export default function Navbar() {
    const [isProductsHovered, setIsProductsHovered] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isPartnerModalOpen, setIsPartnerModalOpen] = useState(false);
    const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);

    const handleMouseEnter = () => {
        if (hoverTimeout) {
            clearTimeout(hoverTimeout);
            setHoverTimeout(null);
        }
        setIsProductsHovered(true);
    };

    const handleMouseLeave = () => {
        const timeout = setTimeout(() => {
            setIsProductsHovered(false);
        }, 300); // 300ms delay prevents accidental closes
        setHoverTimeout(timeout);
    };

    return (
        <>
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
                        <div
                            className={styles.menuItemWithDropdown}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <Link href="/prodotti" className={styles.menuLink} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                Prodotti e soluzioni <ChevronDown size={14} />
                            </Link>
                            <AnimatePresence>
                                {isProductsHovered && <MegaMenu />}
                            </AnimatePresence>
                        </div>

                        <Link href="/perche-sceglierci" className={styles.menuLink}>Perché sceglierci</Link>
                        <Link href="/punti-vendita" className={styles.menuLink}>Punti vendita</Link>
                        <Link href="/garanzia" className={styles.menuLink}>Garanzia</Link>
                        <Link href="/supporto" className={styles.menuLink}>Supporto</Link>
                        <Link href="/news" className={styles.menuLink}>News</Link>
                    </div>

                    {/* Actions */}
                    <div className={styles.actions}>
                        <button className={styles.iconBtn} style={{ display: 'none' }}>
                            <Search size={20} />
                        </button>

                        <button
                            className={`${styles.iconBtn} ${styles.mobileMenuBtn}`}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            <Menu size={20} />
                        </button>

                        <button
                            className={`${styles.ctaBtn} ${styles.hideMobile}`}
                            onClick={() => setIsPartnerModalOpen(true)}
                        >
                            Diventa Rivenditore
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Drawer */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className={styles.mobileMenuBackdrop}
                            onClick={() => setIsMobileMenuOpen(false)}
                        />
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className={styles.mobileMenuDrawer}
                        >
                            <div className={styles.mobileMenuHeader}>
                                <Image
                                    src="https://www.winblu.it/wp-content/uploads/2021/07/LOGO-WINBLU-BIANCO.png"
                                    alt="Winblu Logo"
                                    width={120}
                                    height={40}
                                    style={{ objectFit: 'contain' }}
                                />
                                <button
                                    className={styles.closeBtn}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <X size={24} />
                                </button>
                            </div>
                            <nav className={styles.mobileMenuNav}>
                                <Link
                                    href="/prodotti"
                                    className={styles.mobileMenuLink}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Prodotti e soluzioni
                                </Link>
                                <Link
                                    href="/perche-sceglierci"
                                    className={styles.mobileMenuLink}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Perché sceglierci
                                </Link>
                                <Link
                                    href="/punti-vendita"
                                    className={styles.mobileMenuLink}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Punti vendita
                                </Link>
                                <Link
                                    href="/garanzia"
                                    className={styles.mobileMenuLink}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Garanzia
                                </Link>
                                <Link
                                    href="/supporto"
                                    className={styles.mobileMenuLink}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Supporto
                                </Link>
                                <Link
                                    href="/news"
                                    className={styles.mobileMenuLink}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    News
                                </Link>
                                <button
                                    className={styles.mobileMenuCTA}
                                    onClick={() => {
                                        setIsMobileMenuOpen(false);
                                        setIsPartnerModalOpen(true);
                                    }}
                                >
                                    Diventa Rivenditore
                                </button>
                            </nav>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
            <Modal
                isOpen={isPartnerModalOpen}
                onClose={() => setIsPartnerModalOpen(false)}
                title="Diventa Rivenditore Winblu"
            >
                <PartnerRequestForm />
            </Modal>
        </>
    );
}
