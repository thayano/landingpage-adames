'use client'

import { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";

interface Item {
    indice: string;
    value: string;
    percent: string;
    color: string;
}
export const CommoditiesComponent = () => {
    const [commodities, setCommodities] = useState<Item[]>([])

    useEffect(() => {
        const hasCommodities = sessionStorage.getItem('commodities');
        if (!hasCommodities) {
            fetchCommodities();
        } else {
            
        }
    }, []);

    async function fetchCommodities() {
        try {
            const url = 'api/commodities';
            const response = await fetch(url);

            if (!response.ok) throw new Error('Falha ao buscar commodities');
            const data: Item[] = await response.json();

            data.forEach(item => sessionStorage.setItem(item.indice, JSON.stringify(item)));
            sessionStorage.setItem('commodities', 'true');

            setCommodities(data);
        } catch (error) {
            console.error('Erro ao buscar commodities:', error);
        }
    }

    return (
        <div className="w-full bg-black h-20 fixed z-50 flex items-center">
            <div className="px-8 border-r">
                <FaPlay className="fill-white" />
            </div>
            {commodities && commodities.map((item) => (
                <div className="text-gray-200 text-sm px-8 flex gap-4 font-semibold uppercase" key={item.percent+item.value}>
                    <span>@{item.indice}</span>
                    <span>{item.value}</span>
                    <span className={`text-${item.color}-500`}>{item.percent}</span>
                </div>
            ))}
        </div>
    )
} 