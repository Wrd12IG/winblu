"use client";

import { useState } from "react";
import styles from "./PartnerRequestForm.module.css";
import { Send, CheckCircle2 } from "lucide-react";

export default function PartnerRequestForm() {
    const [formData, setFormData] = useState({
        nome: "",
        cognome: "",
        azienda: "",
        piva: "",
        telefono: "",
        email: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        console.log("Form Data Submitted:", formData);
        await new Promise((resolve) => setTimeout(resolve, 1500));

        setIsSuccess(true);
        setIsSubmitting(false);
    };

    if (isSuccess) {
        return (
            <div className={styles.successMessage}>
                <CheckCircle2 size={48} style={{ marginBottom: '1rem' }} />
                <h3>Richiesta Inviata!</h3>
                <p>Grazie per l'interesse. Il nostro team commerciale ti contatterà al più presto.</p>
            </div>
        );
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
                <label htmlFor="nome" className={styles.label}>Nome</label>
                <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                    className={styles.input}
                    placeholder="Mario"
                />
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="cognome" className={styles.label}>Cognome</label>
                <input
                    type="text"
                    id="cognome"
                    name="cognome"
                    value={formData.cognome}
                    onChange={handleChange}
                    required
                    className={styles.input}
                    placeholder="Rossi"
                />
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="azienda" className={styles.label}>Azienda</label>
                <input
                    type="text"
                    id="azienda"
                    name="azienda"
                    value={formData.azienda}
                    onChange={handleChange}
                    required
                    className={styles.input}
                    placeholder="Nome Azienda SRL"
                />
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="piva" className={styles.label}>Partita IVA</label>
                <input
                    type="text"
                    id="piva"
                    name="piva"
                    value={formData.piva}
                    onChange={handleChange}
                    required
                    className={styles.input}
                    placeholder="IT12345678901"
                />
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="telefono" className={styles.label}>Telefono</label>
                <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    required
                    className={styles.input}
                    placeholder="+39 333 1234567"
                />
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>Email Aziendale</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={styles.input}
                    placeholder="email@azienda.it"
                />
            </div>

            <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
                {isSubmitting ? "Invio in corso..." : (
                    <>
                        Invia Richiesta <Send size={18} />
                    </>
                )}
            </button>
        </form>
    );
}
