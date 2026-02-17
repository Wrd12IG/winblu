"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Instagram, Youtube, Twitter, Phone, Mail, MapPin } from "lucide-react";
import styles from "./Footer.module.css";
import Modal from "./Modal";
import PartnerRequestForm from "./PartnerRequestForm";

export default function Footer() {
    const [isPartnerModalOpen, setIsPartnerModalOpen] = useState(false);

    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.container}>
                    <div className={styles.footerGrid}>
                        {/* Brand Column */}
                        <div className={styles.brandColumn}>
                            <div className={styles.logo}>
                                <Image
                                    src="https://www.winblu.it/wp-content/uploads/2021/07/LOGO-WINBLU-BIANCO.png"
                                    alt="Winblu"
                                    width={120}
                                    height={30}
                                    style={{ objectFit: 'contain' }}
                                />
                            </div>
                            <p className={styles.brandDescription}>
                                PC assemblati a mano in Italia. <br />
                                Potenza senza compromessi per professionisti e gamer.
                            </p>
                            <div className={styles.socialLinks}>
                                <a href="#" className={styles.socialLink} aria-label="Facebook">
                                    <span style={{ fontWeight: 'bold' }}>f</span>
                                </a>
                                <a href="#" className={styles.socialLink} aria-label="Instagram">
                                    <Instagram size={18} />
                                </a>
                                <a href="#" className={styles.socialLink} aria-label="YouTube">
                                    <Youtube size={18} />
                                </a>
                                <a href="#" className={styles.socialLink} aria-label="Twitter">
                                    <Twitter size={18} />
                                </a>
                            </div>
                        </div>

                        {/* Products Column */}
                        <div className={styles.linkColumn}>
                            <h4 className={styles.columnTitle}>Prodotti</h4>
                            <ul className={styles.linkList}>
                                <li><Link href="/linea-t-rok" className={styles.footerLink}>PC Gaming</Link></li>
                                <li><Link href="/linea-experience" className={styles.footerLink}>Workstation</Link></li>
                                <li><Link href="/linea-energy" className={styles.footerLink}>Desktop Ufficio</Link></li>
                                <li><Link href="/prodotti" className={styles.footerLink}>Tutti i Prodotti</Link></li>
                            </ul>
                        </div>

                        {/* Support Column */}
                        <div className={styles.linkColumn}>
                            <h4 className={styles.columnTitle}>Supporto</h4>
                            <ul className={styles.linkList}>
                                <li><a href="#" className={styles.footerLink}>Centro Assistenza</a></li>
                                <li><a href="#" className={styles.footerLink}>Garanzia</a></li>
                                <li><a href="#" className={styles.footerLink}>Spedizioni</a></li>
                                <li><a href="#" className={styles.footerLink}>FAQ</a></li>
                            </ul>
                        </div>

                        {/* Company Column */}
                        <div className={styles.linkColumn}>
                            <h4 className={styles.columnTitle}>Azienda</h4>
                            <ul className={styles.linkList}>
                                <li><a href="#" className={styles.footerLink}>Chi Siamo</a></li>
                                <li><a href="#" className={styles.footerLink}>News</a></li>
                                <li><a href="#" className={styles.footerLink}>Partnership</a></li>
                                <li><button onClick={() => setIsPartnerModalOpen(true)} className={styles.footerLink} style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', font: 'inherit' }}>Diventa Rivenditore</button></li>
                            </ul>
                        </div>

                        {/* Contact Column */}
                        <div className={styles.linkColumn}>
                            <h4 className={styles.columnTitle}>Contattaci</h4>
                            <ul className={styles.contactList}>
                                <li className={styles.contactItem}>
                                    <Phone size={18} className={styles.contactIcon} />
                                    <span>+39 02 1234 5678</span>
                                </li>
                                <li className={styles.contactItem}>
                                    <Mail size={18} className={styles.contactIcon} />
                                    <span>info@winblu.it</span>
                                </li>
                                <li className={styles.contactItem}>
                                    <MapPin size={18} className={styles.contactIcon} />
                                    <span>Milano, Italia</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className={styles.footerBottom}>
                        <div className={styles.legalLinks}>
                            <a href="#" className={styles.legalLink}>Privacy Policy</a>
                            <span className={styles.separator}>•</span>
                            <a href="#" className={styles.legalLink}>Termini e Condizioni</a>
                            <span className={styles.separator}>•</span>
                            <a href="#" className={styles.legalLink}>Cookie Policy</a>
                        </div>
                        <p className={styles.copyright}>
                            © 2026 Winblu. Tutti i diritti riservati. P.IVA 12345678901
                        </p>
                    </div>
                </div>
            </footer>

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
