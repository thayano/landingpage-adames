'use client'

import { useEffect, useRef } from 'react';
import L, { LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { cn } from "@/lib/utils";

interface mapProps {
    location: LatLngExpression;
    order?: string;
    children: React.ReactNode;
}

export default function Map({ location, order = '', children }: mapProps) {
    const mapRef = useRef(null);

    useEffect(() => {
        if (mapRef.current && location) {
            const map = L.map(mapRef.current).setView(location, 13);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);
            L.marker(location).addTo(map);
            return () => {
                map.remove();
            };
        }
    }, [location]);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className={cn('bg-[#222222] w-full rounded-2xl text-gray-200 md:p-10 p-8', order )}>
                {children}
            </div>
            <div className="bg-yellow-300 rounded-2xl">
                <div ref={mapRef} style={{ height: '200px', width: '100%', borderRadius: '16px' }} />
            </div>
        </div>
    )
};
