'use client'

import { Button } from "@/components/ui/button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import animation from '../../../../public/animation.gif'

interface Item {
    indice: string;
    value: string;
    percent: string;
    color: string;
}
export const CommoditiesComponent = () => {
    const list = ['bezerro', 'boi-gordo', 'milho', 'soja']

    const [commodities, setCommodities] = useState<Item[]>([])

    useEffect(() => {
        const hasCommodities = sessionStorage.getItem('commodities');
        if (!hasCommodities) {
            fetchCommodities();
        } else {
            const storedCommodities = getIndices()
            setCommodities(storedCommodities)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function getIndices() {
        const result = list.map((item) => {
            const jsonString = sessionStorage.getItem(item);
            if (jsonString) {
                try {
                    return JSON.parse(jsonString);
                } catch (error) {
                    console.error("Erro ao analisar JSON para item:", item, error);
                    return null;
                }
            }
            return null;
        })
        return result
    }

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
        <div className="w-full px-8 bg-black h-12 fixed z-50 flex items-center justify-between">
            <div className="">
                <Image src={animation} alt="" width={20} />
            </div>
            <div className="flex ">
                {commodities && commodities.map((item) => (
                    <div className="text-gray-200 text-xs px-8 flex gap-4 font-semibold uppercase" key={item.percent + item.value}>
                        <span>{item.indice == 'boi-gordo' ? `@${item.indice}` : item.indice}</span>
                        <span>{item.value}</span>
                        <span className={cn(item.color == 'red' ? 'rotate-180' : '')}>&#9652;</span>
                        <span className='text-white'>{item.percent}</span>
                    </div>
                ))}
            </div>
            <div className="text-[10px]">
                <div className="text-muted-foreground">
                    Fonte:

                    <HoverCard>
                        <HoverCardTrigger asChild>
                            <Button variant="link" className="text-white text-[10px]">CEPEA</Button>
                        </HoverCardTrigger>
                        <HoverCardContent className="w-80">
                            <div className="flex justify-between space-x-4">
                                <div className="space-y-1">
                                    <div className="text-xs font-semibold">
                                        Fonte:
                                        <Link
                                            href="https://www.cepea.esalq.usp.br/br"
                                            target="_blank"
                                            className="underline px-1">
                                            CEPEA
                                        </Link>
                                    </div>
                                    <p className="text-xs text-gray-800">
                                        Informações de cotação obtidas diretamente da base de dados da Cepea.
                                    </p>
                                    <div className="flex items-center pt-2">
                                        <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />{" "}
                                        <span className="text-[10px] text-muted-foreground">
                                            Atualizado há 7hr
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </HoverCardContent>
                    </HoverCard>
                </div>
            </div>
        </div>
    )
} 