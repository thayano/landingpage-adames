import React, { Suspense } from "react";
import { ProductComponent } from "./_components/product.component";

export default function Product() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ProductComponent />
        </Suspense>
    );
}