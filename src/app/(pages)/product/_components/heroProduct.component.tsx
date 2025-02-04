'use client'

import { Title } from "@/components/shared/Title"
import Image from "next/image"
import cavalo from '../../../../../public/cavalo.jpg'
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { CardProductComponent } from "@/components/shared/CardProduct"

export interface IHeroProduct {
    title: string,
    image: any,
    types: string[]

}
export const HeroProductComponent = () => {
    const listTypesProduct: IHeroProduct[] = [
        {
            title: 'Bovinos de corte',
            image: cavalo,
            types: ['Mineral Aditivado', 'Racao', 'Nucleo', 'Proteico Energetico', 'Mineral']
        },
        {
            title: 'Bovinos de leite',
            image: cavalo,
            types: []
        },
        {
            title: 'Bezerros',
            image: cavalo,
            types: []
        },
        {
            title: 'Ovelhas',
            image: cavalo,
            types: []
        },
        {
            title: 'Cavalos',
            image: cavalo,
            types: []
        }
    ]
    const [selectProduct, setSelectProduct] = useState<IHeroProduct>(listTypesProduct[0]);

    function setProductSelect(product: IHeroProduct) {
        setSelectProduct(product)
    }

    return (
        <div className=''>
            <Title
                text="Nossos Produtos"
                subTitle="Lorem ipsum dolor sit amet consectetur"
                align="center"
            />
            <section className="w-full flex flex-col items-center mt-20">
                <div className="flex justify-between w-full">
                    {listTypesProduct.map((product) => (
                        <div key={product.title} className="flex flex-col items-center gap-8" onClick={() => setProductSelect(product)}>
                            <div className="w-32 h-32 rounded-full overflow-hidden">
                                <Image src={product.image || "/placeholder.svg"} alt={product.title} width={64} height={64} className="object-cover w-full h-full" />
                            </div>
                            <h3 className="text-center font-semibold">{product.title}</h3>
                        </div>
                    ))}
                </div>
                <div className="flex justify-between w-full mt-20">
                    {selectProduct && selectProduct.types.map((item) => (
                        <div key={item} className="">
                            <Button className="rounded-full px-8 py-6 font-semibold text-lg" variant={"outline"}>{item}</Button>
                        </div>
                    ))}
                    <div className="">
                        <Button className="rounded-full px-6 py-6 font-semibold text-lg" variant={"default"}>Ver Todos</Button>
                    </div>
                </div>
            </section>
            <section className="mt-20 grid grid-cols-3 gap-20">
               <CardProductComponent/> 
               <CardProductComponent/> 
               <CardProductComponent/> 
               
            </section>
        </div>
    )
}