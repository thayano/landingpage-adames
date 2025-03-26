import { CardProductComponent } from "@/components/shared/CardProduct"
import { Title } from "@/components/shared/Title"
import { ICategoryProduct } from "../../_data/data"

interface RelatedProductComponentProps {
    productList: ICategoryProduct[],
    type: string, // Type of product (boi_corte, boi_fatiado, etc.)
}
export const RelatedProductComponent: React.FC<RelatedProductComponentProps> = ({ productList, type }) => {
    return (
        <div className='flex flex-col items-center  rounded-3xl lg:px-16 px-4 shadow'>
            <header className="w-full py-8 border-b">
                <Title text="Produtos Relacionados" className="text-2xl font-bold text-start" />
            </header>
            <div className=" rounded-3xl">
                <main className="grid grid-cols-1 md:grid-cols-3 lg:gap-16 gap-4 py-10">
                    {productList.map((product: ICategoryProduct) => (
                        <div key={product.name} className="rounded-2xl bg-slate-100 shadow-sm hover:bg-slate-200 transition-all">
                            <CardProductComponent
                                link={`${product.id}?type=${type}&id=${product.id}&category=${product.type}`}
                                title={product.name}
                                description={product.description}
                                image={product.image}
                            />
                        </div>
                    ))}
                </main>
            </div>
        </div>
    )
}