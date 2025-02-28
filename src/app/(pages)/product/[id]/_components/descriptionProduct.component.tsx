import Image, { StaticImageData } from "next/image"
import { Badge } from "@/components/ui/badge"
import { Title } from "@/components/shared/Title"
import { typesProducts } from "../../_data/data"

interface DescriptionProductComponentProps {
    title: string,
    image: StaticImageData,
    description: string,
    type?: string,
    category?: string,
    badge: typesProducts,
    list: string[]
    indication: string
}

const titleCategory: Record<typesProducts, string> = {
    mineral_aditivado: 'Mineral Aditivado',
    racoes: 'Rações',
    nucleos: 'Núcleos',
    proteico_energetico: 'Proteíco Energético',
    mineral: 'Mineral',
    todos: 'Todos',
}

export const DescriptionProductComponent: React.FC<DescriptionProductComponentProps> = ({ title, image, description, badge, list, indication }) => {
    return (
        <div className='mt-40'>
            <main className="grid grid-cols-1 md:grid-cols-2 gap-20">
                <div className="flex justify-center items-center">
                    <Image src={image} alt="product description"></Image>
                </div>
                <div className="flex justify-center">
                    <article className="flex flex-col gap-4 w-4/5">
                        <div>
                            <Badge variant="default" className="bg-red-500">{titleCategory[badge]}</Badge>
                        </div>
                        <Title text={title} />
                        <p className="text-justify">{description}</p>
                        {list.map((item) => {
                            return <span key={Math.random()} className="text-sm">✔️ {item}</span>
                        })}
                        <p className="text-justify text-sm"><span className="font-semibold">Indicado para:</span> {indication}</p>
                    </article>
                </div>
            </main>
        </div>
    )
}