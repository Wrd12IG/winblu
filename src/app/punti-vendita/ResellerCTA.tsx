"use client";

import { useState } from "react";
import Modal from "@/components/Modal";
import PartnerRequestForm from "@/components/PartnerRequestForm";
import styles from "./punti-vendita.module.css";

export default function ResellerCTA() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className={styles.ctaButton}
                style={{ display: 'inline-block' }}
            >
                Richiedi Informazioni
            </button>

            <Modal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                title="Diventa Rivenditore Winblu"
            >
                <PartnerRequestForm />
            </Modal>
        </>
    );
}
