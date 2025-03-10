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
        <main className="grid grid-cols-1 lg:grid-cols-3 bg-white rounded-3xl shadow-lg border-neutral-100 py-16">
            <div className="flex px-2 items-center justify-center md:px-10">
                <article className="flex flex-col gap-6 w-4/5 py-4">
                    <div>
                        <Badge variant="default" className="bg-red-500">{titleCategory[badge]}</Badge>
                    </div>
                    <Title text={title} className="md:text-5xl text-4xl" />
                    <p className="text-justify">{description}</p>
                    <span className="border"></span>
                    {indication && (
                        <p className="text-justify text-sm"><span className="font-semibold">Indicado para:</span> {indication}</p>
                    )}
                </article>
            </div>
            <div className="flex justify-center items-center bg-gradient-to-r from-slate-100 to-slate-200 rounded-3xl h-[560px]">
                <Image src={image} width={400} height={400} alt="product description" className="absolute"></Image>
                <div className="w-[400px] h-[400px] bg-gray-100 rounded-full"></div>
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