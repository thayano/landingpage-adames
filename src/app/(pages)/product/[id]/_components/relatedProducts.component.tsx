import { CardProductComponent } from "@/components/shared/CardProduct"
import { Title } from "@/components/shared/Title"
import { Card } from "@/components/ui/card"
import { ICategoryProduct } from "../../_data/data"

interface RelatedProductComponentProps {
    productList: ICategoryProduct[]
}
export const RelatedProductComponent: React.FC<RelatedProductComponentProps> = ({ productList }) => {
    return (
        <div className='flex flex-col items-center'>
            <Card className="bg-[#222222] rounded-3xl max-w-5xl w-full p-6 text-center text-white">
                <Title text="Produtos Relacionadas" className="text-2xl"></Title>
            </Card>
            <main className="grid grid-cols-1 md:grid-cols-3 gap-20 py-10 px-20">
                {productList.map((product: ICategoryProduct) => (
                    <CardProductComponent
                        link={`${product.id}?type=boi_corte&id=${product.id}&category=${product.type}`}
                        key={product.name}
                        title={product.name}
                        description={product.description}
                        image={product.image}
                    />
                ))}
            </main>
        </div>
    )
}