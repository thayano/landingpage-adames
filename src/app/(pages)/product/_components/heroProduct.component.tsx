'use client'

import { Title } from "@/components/shared/Title"
import Image from "next/image"
import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { CardProductComponent } from "@/components/shared/CardProduct"
import { listTypesProduct, IHeroProduct, typesDescript, products } from '../_data/data'
import { useSearchParams } from "next/navigation"
import { cn } from "@/lib/utils"

export const HeroProductComponent = () => {
    const searchParams = useSearchParams();
    const initialProductKey = searchParams.get('prod');

    const initialProduct = useMemo(() => {
        return initialProductKey
            ? listTypesProduct.find(p => p.key === initialProductKey) || listTypesProduct[0]
            : listTypesProduct[0];
    }, [initialProductKey]);


    const [selectedProduct, setSelectedProduct] = useState<IHeroProduct>(initialProduct);
    const [selectedCategory, setSelectedCategory] = useState<typesDescript>({ name: '', key: 'todos' });
    const [showAll, setShowAll] = useState(true);

    const handleProductSelect = (product: IHeroProduct) => {
        setShowAll(true);
        setSelectedProduct(product);
    };

    const handleCategorySelect = (category: typesDescript) => {
        setShowAll(false);
        setSelectedCategory(category);
    };

    const filteredProducts = useMemo(() => {
        const productList = products[selectedProduct.key] || [];

        if (showAll || selectedCategory?.key === 'todos') {
            return productList;
        } else {
            return productList.filter(product => product.type === selectedCategory?.key);
        }
    }, [selectedProduct, selectedCategory, showAll]);

    function handlerOptionProductSelect(option: string) {
        if (option == selectedProduct.key) {
            return 'scale-110 -translate-y-1 text-gray-700 font-semibold'
        }
    }

    function handlerBtnProduct(option: string) {
        if (option == selectedProduct.key) {
            return 'border-2 border-gray-300'
        }
    }

    function handlerOptionCategorySelect(option: string) {
        if (option == selectedCategory.key && !showAll) {
            return 'bg-blue-950 text-white'
        }
    }

    return (
        <div>
            <Title
                text="Nossos Produtos"
                subTitle="Tecnologias avançadas e soluções personalizadas para atender às necessidades específicas do seu rebanho."
                align="center"
                className="text-4xl"
            />
            <section className="w-full mt-20">
                <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:px-44 gap-8">
                    {listTypesProduct.map((product) => (
                        <button
                            key={product.title}
                            className={cn("flex flex-col gap-4 items-center cursor-pointer transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 overflow-hidden text-gray-500", handlerOptionProductSelect(product.key))}
                            onClick={() => handleProductSelect(product)}
                        >
                            <div className={cn("w-28 h-28 rounded-full overflow-hidden p-1", handlerBtnProduct(product.key))}>
                                <Image src={product.image || "/placeholder.svg"} alt={product.title} width={100} height={100} className="object-cover w-full h-full" />
                            </div>
                            <h3 className="text-center ">{product.title}</h3>
                        </button>
                    ))}
                </div>
                <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 mt-20 md:gap-4 gap-2">
                    {selectedProduct.types.map((item) => (
                        <div key={item.name} className="flex justify-center">
                            <Button
                                className={cn("rounded-full w-full px-4 font-semibold bg-transparent delay-50 duration-150 ease-in-out text-muted-foreground hover:bg-blue-950 hover:text-white", handlerOptionCategorySelect(item.key))}
                                variant={"outline"}
                                onClick={() => handleCategorySelect(item)}
                            >
                                {item.name}
                            </Button>
                        </div>
                    ))}
                    <div className="flex justify-center">
                        <Button className={cn("rounded-full w-full px-4 font-semibold hover:text-white",
                            showAll ? 'bg-[#B62234]' : 'bg-gray-300 text-gray-800')}
                            variant={"default"}
                            onClick={() => setShowAll(true)}>
                            Ver Todos
                        </Button>
                    </div>
                </div>
            </section>
            <Title text={showAll ? 'Todos' : selectedCategory.name} align="center" className="mt-20 text-2xl" />
            <section className="mt-20 grid md:grid-cols-4 grid-cols-1 lg:gap-10 gap-4">
                {filteredProducts.map(product => (
                    <CardProductComponent
                        link={`product/${product.id}?type=${selectedProduct.key}&id=${product.id}&category=${product.type}`}
                        key={product.name}
                        title={product.name}
                        description={product.description}
                        image={product.image}
                    />
                ))}
            </section>
        </div>
    );
};