import { DescriptionProductComponent } from "./_components/descriptionProduct.component";
import { RelatedProductComponent } from "./_components/relatedProducts.component";


export default function ProductDescription() {
    return (
        <div className="flex flex-col gap-40">
            <DescriptionProductComponent/>
            <RelatedProductComponent />
        </div>
    );
}