import React, { Suspense } from "react";
import { ProductComponent } from "./_components/product.component";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Produtos - Adames",
    description: "...",
};

export default function Product() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ProductComponent />
        </Suspense>
    );
}