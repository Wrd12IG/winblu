"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import WorldsSection from "@/components/WorldsSection";
import USPSection from "@/components/USPSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import styles from "./page.module.css";
import { motion, AnimatePresence } from "framer-motion";

// Hero slides data
const heroSlides = [
  {
    id: 1,
    eyebrow: "Ultimate Gaming Power",
    title: "Domina Ogni Arena",
    subtitle: "Competitiva",
    description: "PC da gaming estremo con illuminazione RGB personalizzabile. Potenza bruta per 4K, ray tracing e streaming simultaneo.",
    image: "/hero-gaming.png",
    ctaPrimary: "Esplora Gaming",
    ctaSecondary: "Configura Ora"
  },
  {
    id: 2,
    eyebrow: "Professional Workstation",
    title: "Creato per",
    subtitle: "i Professionisti",
    description: "Workstation certificate per rendering 3D, editing video 8K e sviluppo AI. Componentistica enterprise, affidabilità garantita.",
    image: "/hero-workstation.png",
    ctaPrimary: "Scopri Workstation",
    ctaSecondary: "Richiedi Preventivo"
  },
  {
    id: 3,
    eyebrow: "Compact Excellence",
    title: "Potenza in",
    subtitle: "Formato Mini",
    description: "Design compatto senza compromessi. Perfetto per setup minimalisti che richiedono massime prestazioni in spazi ridotti.",
    image: "/hero-compact.png",
    ctaPrimary: "Vedi Compatti",
    ctaSecondary: "Configura Ora"
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slides every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = heroSlides[currentSlide];

  return (
    <main className={styles.main}>
      <Navbar />

      <section className={styles.hero}>
        <div className={styles.gridBg} />

        <div className={styles.heroContent}>
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              className={styles.heroText}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.6 }}
            >
              <div className={styles.eyebrow}>{slide.eyebrow}</div>
              <h1 className={styles.headline}>
                {slide.title} <br />
                <span className={styles.highlight}>{slide.subtitle}</span>
              </h1>
              <p className={styles.description}>
                {slide.description}
              </p>

              <div className={styles.ctaGroup}>
                <button className={styles.primaryBtn}>{slide.ctaPrimary}</button>
                <button className={styles.secondaryBtn}>{slide.ctaSecondary}</button>
              </div>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id + "-image"}
              className={styles.heroVisual}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative w-full h-full">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: 'contain', filter: 'drop-shadow(0 0 50px rgba(0,240,255,0.3))' }}
                  priority
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Slide indicators */}
        <div className={styles.slideIndicators}>
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`${styles.indicator} ${index === currentSlide ? styles.activeIndicator : ''}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      <WorldsSection />
      <USPSection />
      <TestimonialsSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}
