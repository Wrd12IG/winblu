"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { LayoutGrid, Gamepad2, Monitor } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./prodotti.module.css";

// Product data
// Product data
const products = [
    {
        id: "t-rok",
        name: "Linea T-Rok",
        category: "gaming",
        price: "1.200",
        image: "/products/t-rok/t-rok-black.png",
        tag: "GAMING",
        description: "Potenza pura per il gaming senza compromessi.",
        link: "/linea-t-rok",
        features: ["Gaming Estremo", "Design Aggressivo"],
        specs: { cpu: "Intel/AMD", gpu: "NVIDIA RTX", ram: "Up to 64GB", storage: "NVMe" }
    },
    {
        id: "experience",
        name: "Linea Experience",
        category: "gaming",
        price: "1.500",
        image: "/products/experience/experience-hero.png",
        tag: "PERFORMANCE",
        description: "Per chi cerca qualcosa in più. Esperienza utente superiore.",
        link: "/linea-experience",
        features: ["Performance", "Stile"],
        specs: { cpu: "High End", gpu: "High End", ram: "High Speed", storage: "NVMe" }
    },
    {
        id: "e-motion",
        name: "Linea e-Motion",
        category: "workstation",
        price: "800",
        image: "/products/e-motion/extracted_24.jpeg",
        tag: "NOTEBOOK",
        description: "L'evoluzione della specie. Notebook performanti per professionisti in movimento.",
        link: "/linea-e-motion",
        features: ["Mobilità", "Eleganza"],
        specs: { cpu: "Intel Core", gpu: "Hybrid", ram: "Up to 32GB", storage: "SSD" }
    },
    {
        id: "evision",
        name: "Linea eVision",
        category: "workstation",
        price: "900",
        image: "/products/evision/extracted_23.png",
        tag: "ALL-IN-ONE",
        description: "Eleganza e prestazioni in un design All-In-One salvaspazio.",
        link: "/linea-evision",
        features: ["Design Pulito", "Display Integrato"],
        specs: { cpu: "Intel Core", gpu: "Integrated", ram: "Up to 32GB", storage: "SSD" }
    },
    {
        id: "easy-pro",
        name: "Linea Easy Pro",
        category: "workstation",
        price: "600",
        image: "/products/easy-pro/extracted_24.png",
        tag: "MINI-PC",
        description: "Un TOP computer travestito da Mini-PC. Potenza in formato ridotto.",
        link: "/linea-easy-pro",
        features: ["Compattezza", "Versatilità"],
        specs: { cpu: "Intel Core", gpu: "Integrated", ram: "Up to 32GB", storage: "SSD" }
    },
    {
        id: "expert",
        name: "Linea Expert",
        category: "workstation",
        price: "1.000",
        image: "/products/expert/extracted_26.png",
        tag: "PROFESSIONAL",
        description: "Prestazioni professionali al top per il tuo business.",
        link: "/linea-expert",
        features: ["Affidabilità", "Espandibilità"],
        specs: { cpu: "Intel Core", gpu: "Vari", ram: "Up to 64GB", storage: "SSD/HDD" }
    },
    {
        id: "academic",
        name: "Linea Academic",
        category: "workstation",
        price: "500",
        image: "/products/academic/extracted_23.png",
        tag: "EDUCATION",
        description: "Soluzioni dedicate al mondo della scuola e dell'istruzione.",
        link: "/linea-academic",
        features: ["Robustezza", "Convenienza"],
        specs: { cpu: "Intel/AMD", gpu: "Integrated", ram: "Up to 16GB", storage: "SSD" }
    },
    {
        id: "enterprise-1151",
        name: "Enterprise 1151",
        category: "workstation",
        price: "1.800",
        image: "/products/enterprise-1151/extracted_23.png",
        tag: "SERVER 1151",
        description: "Server Monoprocessore potenti e affidabili su piattaforma Intel Xeon E.",
        link: "/linea-enterprise-1151",
        features: ["Xeon E", "Affidabilità 24/7"],
        specs: { cpu: "Intel Xeon E", gpu: "-", ram: "ECC", storage: "RAID" }
    },
    {
        id: "enterprise-3647",
        name: "Enterprise 3647",
        category: "workstation",
        price: "3.500",
        image: "/products/enterprise-3647/extracted_23.png",
        tag: "SERVER 3647",
        description: "Massima potenza di calcolo con sistemi Dual Processor Intel Xeon Scalable.",
        link: "/linea-enterprise-3647",
        features: ["Dual Xeon", "Max Performance"],
        specs: { cpu: "2x Xeon Scalable", gpu: "-", ram: "ECC Reg", storage: "Hot-Swap" }
    }
];

export default function ProdottiPage() {
    const [filter, setFilter] = useState<"all" | "gaming" | "workstation">("all");

    const filteredProducts = filter === "all"
        ? products
        : products.filter(p => p.category === filter);

    return (
        <main className={styles.page}>
            <Navbar />

            {/* Hero Header */}
            <section className={styles.hero}>
                <motion.div
                    className={styles.heroContent}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className={styles.heroTitle}>
                        Il Tuo <span className={styles.highlight}>Arsenale</span> Perfetto
                    </h1>
                    <p className={styles.heroSubtitle}>
                        Ogni configurazione è assemblata, testata e certificata in Italia.
                        Zero compromessi, massima affidabilità.
                    </p>
                </motion.div>
            </section>

            {/* Filters */}
            <section className={styles.filtersSection}>
                <div className={styles.filters}>
                    <button
                        className={`${styles.filterBtn} ${filter === "all" ? styles.active : ""}`}
                        onClick={() => setFilter("all")}
                    >
                        <LayoutGrid size={18} /> Tutti i Prodotti
                    </button>
                    <button
                        className={`${styles.filterBtn} ${filter === "gaming" ? styles.active : ""}`}
                        onClick={() => setFilter("gaming")}
                    >
                        <Gamepad2 size={18} /> Gaming
                    </button>
                    <button
                        className={`${styles.filterBtn} ${filter === "workstation" ? styles.active : ""}`}
                        onClick={() => setFilter("workstation")}
                    >
                        <Monitor size={18} /> Workstation
                    </button>
                </div>
            </section>

            {/* Products Grid */}
            <section className={styles.productsSection}>
                <div className={styles.container}>
                    <div className={styles.productsGrid}>
                        {filteredProducts.map((product, index) => (
                            <motion.div
                                key={product.id}
                                className={styles.productCard}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                            >
                                <Link href={product.link || '#'} className={styles.cardLinkPlaceholder} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }} aria-label={product.name}></Link>
                                <div className={styles.productTag}>{product.tag}</div>

                                <div className={styles.productImage}>
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className={styles.realProductImage}
                                        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                    />
                                </div>

                                <h3 className={styles.productName}>{product.name}</h3>
                                <p className={styles.productDescription}>{product.description}</p>

                                <div className={styles.specs}>
                                    <div className={styles.specItem}>
                                        <span className={styles.specLabel}>CPU</span>
                                        <span className={styles.specValue}>{product.specs.cpu}</span>
                                    </div>
                                    <div className={styles.specItem}>
                                        <span className={styles.specLabel}>GPU</span>
                                        <span className={styles.specValue}>{product.specs.gpu}</span>
                                    </div>
                                    <div className={styles.specItem}>
                                        <span className={styles.specLabel}>RAM</span>
                                        <span className={styles.specValue}>{product.specs.ram}</span>
                                    </div>
                                    <div className={styles.specItem}>
                                        <span className={styles.specLabel}>Storage</span>
                                        <span className={styles.specValue}>{product.specs.storage}</span>
                                    </div>
                                </div>

                                <div className={styles.features}>
                                    {product.features.map((feature, i) => (
                                        <span key={i} className={styles.featureBadge}>✓ {feature}</span>
                                    ))}
                                </div>

                                <div className={styles.productFooter} style={{ position: 'relative', zIndex: 2 }}>
                                    <div className={styles.price}>
                                        <span className={styles.priceLabel}>Da</span>
                                        <span className={styles.priceValue}>€{product.price}</span>
                                    </div>
                                    <span className={styles.ctaButton}>
                                        Scopri <span className={styles.arrow}>→</span>
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
