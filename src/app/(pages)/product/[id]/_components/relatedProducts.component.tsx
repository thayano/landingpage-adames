import { CardProductComponent } from "@/components/shared/CardProduct"
import { Title } from "@/components/shared/Title"
import { ICategoryProduct } from "../../_data/data"

interface RelatedProductComponentProps {
    productList: ICategoryProduct[]
}
export const RelatedProductComponent: React.FC<RelatedProductComponentProps> = ({ productList }) => {
    return (
        <div className='flex flex-col items-center border rounded-3xl lg:px-16 px-4'>
            <header className="w-full py-8 border-b">
                <Title text="Produtos Relacionados" className="text-lg font-bold text-start" />
            </header>
            <div className=" rounded-3xl">
            <main className="grid grid-cols-1 md:grid-cols-3 lg:gap-16 gap-4 py-10">
                {productList.map((product: ICategoryProduct) => (
                    <div key={product.name} className="rounded-2xl bg-slate-100 shadow-sm hover:bg-white transition-all">
                        <CardProductComponent
                            link={`${product.id}?type=boi_corte&id=${product.id}&category=${product.type}`}
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