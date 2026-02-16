"use client";

import { motion } from 'framer-motion';
import { Instagram, Heart, MessageCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './SocialWall.module.css';

const socialPosts = [
    {
        id: 1,
        image: "/social/post-1.png",
        likes: 124,
        comments: 8,
        link: "https://www.instagram.com/winblu_personal_computer/"
    },
    {
        id: 2,
        image: "/social/post-2.png",
        likes: 89,
        comments: 5,
        link: "https://www.instagram.com/winblu_personal_computer/"
    },
    {
        id: 3,
        image: "/social/post-3.png",
        likes: 156,
        comments: 12,
        link: "https://www.instagram.com/winblu_personal_computer/"
    },
    {
        id: 4,
        image: "/social/post-4.png",
        likes: 210,
        comments: 18,
        link: "https://www.instagram.com/winblu_personal_computer/"
    },
    {
        id: 5,
        image: "/social/post-5.png",
        likes: 95,
        comments: 6,
        link: "https://www.instagram.com/winblu_personal_computer/"
    }
];

export default function SocialWall() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={styles.headerContent}
                    >
                        <div className={styles.iconWrapper}>
                            <Instagram size={32} />
                        </div>
                        <h2 className={styles.title}>@winblu_personal_computer</h2>
                        <p className={styles.subtitle}>Seguici su Instagram per setup da sogno e novità</p>
                    </motion.div>
                </div>

                <div className={styles.grid}>
                    {socialPosts.map((post, index) => (
                        <motion.a
                            key={post.id}
                            href={post.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.post}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Image
                                src={post.image}
                                alt="Instagram Post"
                                fill
                                className={styles.image}
                                style={{ objectFit: 'cover' }}
                            />
                            <div className={styles.overlay}>
                                <div className={styles.stats}>
                                    <div className={styles.stat}>
                                        <Heart size={20} fill="white" />
                                        <span>{post.likes}</span>
                                    </div>
                                    <div className={styles.stat}>
                                        <MessageCircle size={20} fill="white" />
                                        <span>{post.comments}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                    <motion.a
                        href="https://www.instagram.com/winblu_personal_computer/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.post} ${styles.followCard}`}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                    >
                        <div className={styles.followContent}>
                            <Instagram size={48} />
                            <span>Seguici</span>
                        </div>
                    </motion.a>
                </div>
            </div>
        </section>
    );
}
