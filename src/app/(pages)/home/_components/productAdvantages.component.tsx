import { Title } from "@/components/shared/Title"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import suporte from '../../../../../public/suporte.svg'
import tecnologia from '../../../../../public/tecnologia.svg'
import sustentabilidade from '../../../../../public/sustentabilidade.svg'
import diamante from '../../../../../public/diamante.svg'

export const ProductAdvantagesComponent = () => {
    return (
        <div>
            <Title
                text="Excelência em Cada Detalhe"
                subTitle="Nosso compromisso é entregar o melhor para o seu rebanho, com qualidade, tecnologia de ponta e resultados reais."
                align="center"
                className="text-4xl"
            />
            <section className="mt-20">
                <div className="gap-16 justify-center text-center grid grid-cols-1 md:grid-cols-4">
                    <Card className="flex flex-col gap-4 items-center border-0 bg-transparent">
                        <Image src={suporte} alt="" width={50}/>
                        <div className="font-bold uppercase h-12">Assistência Técnica</div>
                        <div className="text-gray-500">Suporte especializado para otimizar a produtividade e os resultados do seu rebanho.</div>
                    </Card>
                    <Card className="flex flex-col gap-4 items-center border-0 bg-transparent">
                        <Image src={diamante} alt="" width={50}/>
                        <div className="font-bold uppercase h-12">Matérias-Primas Selecionadas</div>
                        <div className="text-gray-500">Nutrição de alta qualidade, com ingredientes cuidadosamente escolhidos para garantir o melhor desempenho.</div>
                    </Card>
                    <Card className="flex flex-col gap-4 items-center border-0 bg-transparent">
                        <Image src={tecnologia} alt="" width={50}/>
                        <div className="font-bold uppercase h-12">Inovação e Tecnologia</div>
                        <div className="text-gray-500">Tecnologias avançadas para aprimorar a produção e os resultados da pecuária.</div>
                    </Card>
                    <Card className="flex flex-col gap-4 items-center border-0 bg-transparent">
                        <Image src={sustentabilidade} alt="" width={50}/>
                        <div className="font-bold uppercase h-12">Sustentabilidade e Responsabilidade</div>
                        <div className="text-gray-500">Compromisso com a produção sustentável: energia solar, carbono neutro e práticas que respeitam o meio ambiente.</div>
                    </Card>
                </div>
            </section>
        </div>
    )
}