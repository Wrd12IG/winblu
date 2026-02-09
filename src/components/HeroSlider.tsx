"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./HeroSlider.module.css";
import { ChevronRight } from "lucide-react";
import PantherAnimation from "./PantherAnimation";

// Product Data Type
interface Product {
    id: number;
    name: string;
    subtitle: string;
    description: string;
    specs: {
        cpu: string;
        gpu: string;
        ram: string;
    };
    image: string;
}

const products: Product[] = [
    {
        id: 1,
        name: "T-ROK Z790",
        subtitle: "Ultimate Power",
        description: "Scatena la tua furia di gioco. Il PC gaming che non conosce compromessi, progettato per dominare ogni arena competitiva.",
        specs: {
            cpu: "Intel Core i9-14900K",
            gpu: "NVIDIA RTX 4090",
            ram: "64GB DDR5 7200MT/s"
        },
        image: "/gaming-pc.png"
    },
    {
        id: 2,
        name: "T-ROK Workstation",
        subtitle: "Creator Excellence",
        description: "Potenza di calcolo bruta per rendering, 3D modeling e AI development. L'alleato perfetto per i professionisti.",
        specs: {
            cpu: "Intel Xeon W-3400",
            gpu: "NVIDIA RTX 6000 Ada",
            ram: "128GB ECC DDR5"
        },
        image: "/workstation.png"
    },
    {
        id: 3,
        name: "T-ROK H610 White",
        subtitle: "Compact Style",
        description: "Un gioiello di design compatto. Performance straordinarie in un case bianco elegante che si adatta a ogni setup.",
        specs: {
            cpu: "Intel Core i7-14700K",
            gpu: "NVIDIA RTX 4070 Ti",
            ram: "32GB DDR5 RGB"
        },
        image: "/gaming-pc.png"
    }
];

export default function HeroSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Auto-advance slides every 8 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % products.length);
        }, 8000);
        return () => clearInterval(timer);
    }, []);

    const handleNext = () => {
        setCurrentSlide((prev) => (prev + 1) % products.length);
    };

    const product = products[currentSlide];

    return (
        <div className={styles.sliderContainer}>
            <div className={styles.gridBg} />

            {/* 
        LAYER 1: Animated Panther 
        Moves across the screen with organic walking animation
      */}
            <div className={styles.pantherWrapper}>
                <PantherAnimation />
            </div>

            {/* LAYER 2: Main Slider Content */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={product.id}
                    className={styles.slideContent}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                >

                    {/* Text Column */}
                    <div className={styles.textContent}>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <span className={styles.eyebrow}>{product.subtitle}</span>
                            <h1 className={styles.headline}>
                                {product.name}
                            </h1>
                        </motion.div>

                        <motion.p
                            className={styles.description}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            {product.description}
                        </motion.p>

                        <motion.div
                            className={styles.specsContainer}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            <div className={styles.specItem}>
                                <span className={styles.specLabel}>PROCESSOR</span>
                                <span className={styles.specValue}>{product.specs.cpu}</span>
                            </div>
                            <div className={styles.specItem}>
                                <span className={styles.specLabel}>GRAPHICS</span>
                                <span className={styles.specValue}>{product.specs.gpu}</span>
                            </div>
                            <div className={styles.specItem}>
                                <span className={styles.specLabel}>MEMORY</span>
                                <span className={styles.specValue}>{product.specs.ram}</span>
                            </div>
                        </motion.div>

                        <div className={styles.ctaGroup}>
                            <button className={styles.primaryBtn} onClick={handleNext}>
                                Prossimo Modello
                            </button>
                            <button className={styles.secondaryBtn}>
                                Configura <ChevronRight size={16} style={{ display: 'inline', verticalAlign: 'middle' }} />
                            </button>
                        </div>
                    </div>

                    {/* Image Column */}
                    <motion.div
                        className={styles.visualContent}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className={styles.productImage}
                            priority
                        />
                    </motion.div>

                </motion.div>
            </AnimatePresence>

            {/* Pagination / Controls */}
            <div className={styles.controls}>
                {products.map((p, index) => (
                    <div
                        key={p.id}
                        className={`${styles.controlDot} ${index === currentSlide ? styles.active : ''}`}
                        onClick={() => setCurrentSlide(index)}
                    />
                ))}
            </div>
        </div>
    );
}
