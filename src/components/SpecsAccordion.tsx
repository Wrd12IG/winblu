"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Cpu, Monitor, HardDrive, Wifi, Keyboard, Fingerprint, Usb, Package, Battery, Award, Settings } from 'lucide-react';
import styles from './SpecsAccordion.module.css';

export interface SpecCategory {
    id: string;
    title: string;
    icon: React.ReactNode;
    items: { label: string; value: string }[];
}

interface SpecsAccordionProps {
    categories: SpecCategory[];
}

const iconMap: Record<string, React.ReactNode> = {
    cpu: <Cpu size={24} />,
    monitor: <Monitor size={24} />,
    memory: <HardDrive size={24} />,
    storage: <HardDrive size={24} />,
    connectivity: <Wifi size={24} />,
    keyboard: <Keyboard size={24} />,
    fingerprint: <Fingerprint size={24} />,
    interfaces: <Usb size={24} />,
    dimensions: <Package size={24} />,
    battery: <Battery size={24} />,
    warranty: <Award size={24} />,
    software: <Settings size={24} />,
};

export default function SpecsAccordion({ categories }: SpecsAccordionProps) {
    const [openCategory, setOpenCategory] = useState<string | null>(null);

    const toggleCategory = (id: string) => {
        setOpenCategory(openCategory === id ? null : id);
    };

    return (
        <div className={styles.accordion}>
            {categories.map((category) => {
                const isOpen = openCategory === category.id;

                return (
                    <div key={category.id} className={styles.category}>
                        <button
                            className={`${styles.categoryHeader} ${isOpen ? styles.active : ''}`}
                            onClick={() => toggleCategory(category.id)}
                            aria-expanded={isOpen}
                        >
                            <div className={styles.categoryTitle}>
                                <span className={styles.categoryIcon}>
                                    {category.icon || iconMap[category.id] || <Settings size={24} />}
                                </span>
                                <h3>{category.title}</h3>
                            </div>
                            <ChevronDown
                                className={`${styles.chevron} ${isOpen ? styles.rotated : ''}`}
                                size={20}
                            />
                        </button>

                        <AnimatePresence initial={false}>
                            {isOpen && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                                    className={styles.categoryContent}
                                >
                                    <div className={styles.specsList}>
                                        {category.items.map((item, index) => (
                                            <div key={index} className={styles.specItem}>
                                                <span className={styles.specLabel}>{item.label}</span>
                                                <span className={styles.specValue}>{item.value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                );
            })}
        </div>
    );
}
