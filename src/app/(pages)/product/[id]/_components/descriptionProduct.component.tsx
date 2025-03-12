import Image, { StaticImageData } from "next/image"
import { Badge } from "@/components/ui/badge"
import { Title } from "@/components/shared/Title"
import { typesProducts } from "../../_data/data"
import { FaRegCircleCheck } from "react-icons/fa6";
import { Button } from "@/components/ui/button";

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
        <main className="grid grid-cols-1 lg:grid-cols-3 bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl shadow-2xl py-16">
            <div className="flex px-2 items-center justify-center md:px-10">
                <article className="flex flex-col gap-6 w-4/5 py-4 text-gray-300">
                    <div>
                        <Badge variant="default" className="bg-blue-500">{titleCategory[badge]}</Badge>
                    </div>
                    <Title text={title} className="md:text-5xl text-4xl text-gray-200" />
                    <p className="text-justify">{description}</p>
                    <span className="border border-gray-500"></span>
                    {indication && (
                        <p className="text-justify text-sm"><span className="font-semibold">Indicado para:</span> {indication}</p>
                    )}
                </article>
            </div>
            <div className="flex justify-center items-center bg-gradient-to-b from-blue-50 to-blue-100 rounded-3xl h-[560px]">
                <Image src={image} width={400} height={400} alt="product description" className="absolute"></Image>
            </div>
            <div className="flex px-2 items-center justify-center md:px-10">
                <article className="flex flex-col gap-6 w-4/5 py-4">
                    {list.map((item) => {
                        return (
                            <div key={Math.random()} className="text-sm flex gap-2 items-center p-4 bg-slate-50 border border-slate-100 rounded-xl">
                                <div>
                                    <FaRegCircleCheck className="fill-blue-800" size={14} />
                                </div>
                                {item}
                            </div>
                        )
                    })}
                    <div>
                        <Button className="w-full rounded-full bg-[#0E3463] py-6 hover:bg-[#285994] font-semibold after:content-['_↗']">Consulte um de nossos especialistas</Button>
                    </div>
                </article>
            </div>
        </main>
    )
}