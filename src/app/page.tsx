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
    eyebrow: "Partnership Strategica",
    title: "Cresci con",
    subtitle: "Winblu B2B",
    description: "Siamo il partner tecnologico ideale per il tuo business. PC assemblati a mano in Italia, supporto dedicato e logistica efficiente per rivenditori.",
    image: "/hero-gaming.png",
    ctaPrimary: "Diventa Rivenditore",
    ctaSecondary: "Richiedi Listino"
  },
  {
    id: 2,
    eyebrow: "Professional Solutions",
    title: "Forniture",
    subtitle: "High-Performance",
    description: "Workstation certificate e server enterprise per i tuoi clienti più esigenti. Qualità garantita 3 anni e assistenza tecnica diretta 🇮🇹.",
    image: "/hero-workstation.png",
    ctaPrimary: "Canale Rivenditori",
    ctaSecondary: "Richiedi Info B2B"
  },
  {
    id: 3,
    eyebrow: "Custom Manufacturing",
    title: "Progetti",
    subtitle: "Su Misura",
    description: "Dalle forniture per il settore Educational ai setup per uffici professionali. Progettiamo e assembliamo la soluzione perfetta per ogni azienda.",
    image: "/hero-compact.png",
    ctaPrimary: "Contattaci Ora",
    ctaSecondary: "Richiedi Consulenza"
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
