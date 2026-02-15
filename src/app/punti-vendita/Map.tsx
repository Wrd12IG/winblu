"use client";

import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Store } from '@/data/stores';
import L from 'leaflet';

// Fix Leaflet clean default icon issues
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: '/markers/marker-icon-2x.png',
    iconUrl: '/markers/marker-icon.png',
    shadowUrl: '/markers/marker-shadow.png',
});

// Component to handle map center changes
function RecenterMap({ store }: { store: Store | null }) {
    const map = useMap();
    useEffect(() => {
        if (store) {
            map.flyTo([store.lat, store.lng], 15);
        }
    }, [store, map]);
    return null;
}

export interface MapProps {
    stores: Store[];
    selectedStore: Store | null;
    onSelectStore: (store: Store | null) => void;
}

export default function Map({ stores, selectedStore, onSelectStore }: MapProps) {
    const center: [number, number] = selectedStore
        ? [selectedStore.lat, selectedStore.lng]
        : [41.8719, 12.5674]; // Default to center of Italy

    const zoom = selectedStore ? 15 : 6;

    return (
        <MapContainer
            center={center}
            zoom={zoom}
            style={{ height: '100%', width: '100%' }}
            scrollWheelZoom={false}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <RecenterMap store={selectedStore} />
            {stores.map(store => (
                <Marker
                    key={store.id}
                    position={[store.lat, store.lng]}
                    eventHandlers={{
                        click: () => onSelectStore(store),
                    }}
                >
                    <Popup>
                        <div style={{ padding: '0.5rem' }}>
                            <strong style={{ display: 'block', marginBottom: '0.25rem', fontSize: '1rem' }}>{store.name}</strong>
                            <span style={{ display: 'block', marginBottom: '0.5rem', color: '#666' }}>{store.address}, {store.city}</span>
                            <a
                                href={`https://www.google.com/maps/dir/?api=1&destination=${store.lat},${store.lng}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: '#00d2ff', textDecoration: 'none', fontWeight: 600 }}
                            >
                                Ottieni indicazioni
                            </a>
                        </div>
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
}
