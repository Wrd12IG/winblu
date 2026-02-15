"use client";

import { useState, useMemo } from 'react';
import dynamic from 'next/dynamic';
import { stores, Store } from '@/data/stores';
import { MapPin, Phone, Mail, Navigation } from 'lucide-react';
import styles from './StoreLocator.module.css';
import type { MapProps } from './Map';

// Dynamically import Map component to avoid SSR issues with Leaflet
const Map = dynamic<MapProps>(() => import('./Map'), {
    ssr: false,
    loading: () => <div className={styles.mapLoading}>Caricamento mappa...</div>
});

export default function StoreLocator() {
    const [selectedStore, setSelectedStore] = useState<Store | null>(null);
    const [searchTerm, setSearchTerm] = useState('');

    const filteredStores = useMemo(() => {
        return stores.filter(store =>
            store.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
            store.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            store.zip.includes(searchTerm)
        );
    }, [searchTerm]);

    return (
        <div className={styles.locatorContainer}>
            <div className={styles.sidebar}>
                <div className={styles.searchBox}>
                    <input
                        type="text"
                        placeholder="Cerca per città, CAP o nome..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className={styles.searchInput}
                    />
                </div>
                <div className={styles.storeList}>
                    {filteredStores.map(store => (
                        <div
                            key={store.id}
                            className={`${styles.storeItem} ${selectedStore?.id === store.id ? styles.active : ''}`}
                            onClick={() => setSelectedStore(store)}
                        >
                            <h3 className={styles.storeName}>{store.name}</h3>
                            <p className={styles.storeAddress}>{store.address}, {store.city} {store.zip}</p>
                            <div className={styles.storeActions}>
                                {store.phone && (
                                    <a href={`tel:${store.phone}`} className={styles.actionLink}>
                                        <Phone size={14} /> {store.phone}
                                    </a>
                                )}
                                <a
                                    href={`https://www.google.com/maps/dir/?api=1&destination=${store.lat},${store.lng}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.actionLink}
                                >
                                    <Navigation size={14} /> Indicazioni
                                </a>
                            </div>
                        </div>
                    ))}
                    {filteredStores.length === 0 && (
                        <div className={styles.noResults}>
                            Nessun punto vendita trovato.
                        </div>
                    )}
                </div>
            </div>
            <div className={styles.mapContainer}>
                <Map stores={filteredStores} selectedStore={selectedStore} onSelectStore={setSelectedStore} />
            </div>
        </div>
    );
}
