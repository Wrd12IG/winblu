"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { Gamepad2, Monitor, Cpu, Server, ChevronRight, Laptop, Minimize2, Zap, Box, Award, BookOpen, MessageCircle, LifeBuoy } from "lucide-react";
import styles from "./MegaMenu.module.css";

const menuItems = [
    {
        icon: Gamepad2,
        title: "Gaming",
        subtitle: "T-Rok Series",
        desc: "Domina il gioco con prestazioni estreme.",
        href: "/linea-t-rok",
        color: "#00f0ff"
    },
    {
        icon: Monitor,
        title: "All-in-One",
        subtitle: "eVision Series",
        desc: "Design elegante e potenza integrata.",
        href: "/linea-evision",
        color: "#10b981"
    },
    {
        icon: Cpu,
        title: "Workstation",
        subtitle: "Experience Series",
        desc: "Certificata per professionisti e creativi.",
        href: "/linea-experience",
        color: "#f59e0b"
    },
    {
        icon: Server,
        title: "Server",
        subtitle: "Enterprise Series",
        desc: "Infrastrutture scalabili per il data center.",
        href: "/linea-enterprise-3647",
        color: "#3b82f6"
    },
    {
        icon: Laptop,
        title: "Notebook",
        subtitle: "e-motion Series",
        desc: "Eleganza e potenza in movimento.",
        href: "/linea-e-motion",
        color: "#a855f7"
    },
    {
        icon: Minimize2,
        title: "Mini PC",
        subtitle: "Easy Pro Series",
        desc: "La potenza di un desktop in 1 litro.",
        href: "/linea-easy-pro",
        color: "#06b6d4"
    },
    {
        icon: Zap,
        title: "Home & Office",
        subtitle: "Energy Series",
        desc: "Affidabilità quotidiana per ogni task.",
        href: "/linea-energy",
        color: "#eab308"
    },
    {
        icon: Box,
        title: "Small Form Factor",
        subtitle: "Essential Series",
        desc: "Compattezza ed efficienza (8.3L).",
        href: "/linea-essential",
        color: "#84cc16"
    },
    {
        icon: Award,
        title: "Professional",
        subtitle: "Expert Series",
        desc: "Prestazioni top per professionisti.",
        href: "/linea-expert",
        color: "#ef4444"
    },
    {
        icon: BookOpen,
        title: "Education",
        subtitle: "Academic Series",
        desc: "Soluzioni digitali per la scuola.",
        href: "/linea-academic",
        color: "#4f46e5"
    }
];

export default function MegaMenu() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return createPortal(
        <motion.div
            className={styles.megaMenu}
            initial={{ opacity: 0, y: 10, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 10, x: "-50%" }}
            transition={{ duration: 0.2 }}
        >
            <div className={styles.grid}>
                {menuItems.map((item, index) => (
                    <Link key={index} href={item.href} className={styles.card}>
                        <div className={styles.iconWrapper} style={{ color: item.color, borderColor: `${item.color}30`, background: `${item.color}10` }}>
                            <item.icon size={24} />
                        </div>
                        <div className={styles.content}>
                            <div className={styles.header}>
                                <span className={styles.title}>{item.title}</span>
                                <span className={styles.subtitle}>{item.subtitle}</span>
                            </div>
                            <p className={styles.desc}>{item.desc}</p>
                        </div>
                        <ChevronRight size={16} className={styles.arrow} />
                    </Link>
                ))}
                <div style={{ display: 'contents' }}>
                    <Link href="/contatti" className={styles.actionCard}>
                        <MessageCircle size={28} />
                        <span>Contattaci</span>
                    </Link>
                    <Link href="/supporto" className={styles.actionCard}>
                        <LifeBuoy size={28} />
                        <span>Supporto Tecnico</span>
                    </Link>
                </div>
            </div>
        </motion.div>,
        document.body
    );
}

