'use client'

import { useSearchParams } from "next/navigation";
import { DescriptionProductComponent } from "./descriptionProduct.component";
import { RelatedProductComponent } from "./relatedProducts.component";
import { products, typesCategory, typesProducts } from '../../_data/data'
import { useMemo } from "react";

export const ContainerComponent = () => {
    const searchParams = useSearchParams();
    const id = Number(searchParams.get('id')); // Convert to number directly
    const category = searchParams.get('category') as typesProducts;
    const type = searchParams.get('type') as typesCategory;

    const product = useMemo(() => {
        if (!type || !id) { 
            return null;
        }
        return products[type]?.find(p => p.id === id);
    }, [type, id]); 

    const relatedProducts = useMemo(() => {
        if (!type) return []; 
        const allProducts = [...products[type]]; 
        return allProducts.slice(0, 3);
    }, [type]);


    if (!product) {
        return <div>Produto não encontrado.</div>;
    }

    return (
        <div className="flex flex-col gap-40">
            <DescriptionProductComponent
                title={product.name}
                image={product.image}
                description={product.description}
                badge={category}
            />
            <RelatedProductComponent productList={relatedProducts} /> 
        </div>
    );
};

