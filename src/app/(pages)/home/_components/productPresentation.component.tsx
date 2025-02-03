import { ImageCardComponent } from "@/components/shared/ImageCard"
import { Title } from "@/components/shared/Title"
import cavalo from "../../../../../public/cavalo.jpg"
import ovelha from "../../../../../public/ovelha.jpg"
import clube_das_vacas from "../../../../../public/clube_das_vacas.jpg"
import bezerro from "../../../../../public/bezerro.jpg"
import Image from "next/image"

export const ProductPresentationComponent = () => {
    return (
        <div className="">
            <header className="py-2">
                <Title
                    text="Nossos Produtos"
                    subTitle="Lorem ipsum dolor sit amet consectetur."
                    align="center"
                />
            </header>
            <section className="grid grid-cols-3 grid-rows-[1fr] mt-20 h-[600px] gap-6">
                <div className="flex flex-col gap-6">
                    <ImageCardComponent title="Cavalo" link={'#'}>
                        <Image src={cavalo} alt="Cavalo" fill style={{ objectFit: 'cover' }} />
                    </ImageCardComponent>
                    <ImageCardComponent title="ovelha" link={'#'}>
                        <Image src={ovelha} alt="ovelha" fill style={{ objectFit: 'cover' }} />
                    </ImageCardComponent>
                </div>
                <div className="h-full flex">
                    <ImageCardComponent title="gado de corte e leite" link={'#'}>
                        <Image src={clube_das_vacas} fill alt="clube_das_vacas" style={{ objectFit: 'cover'}} />
                    </ImageCardComponent>
                </div>
                <div className="flex flex-col gap-6">
                    <ImageCardComponent title="bezerro" link={'#'}>
                        <Image src={bezerro} alt="bezerro" fill style={{ objectFit: 'cover' }} />
                    </ImageCardComponent>
                    <ImageCardComponent title="bezerro" link={'#'}>
                        <div className="h-full bg-red-400 p-8">
                            <h3 className="text-2xl font-bold w-64 text-white">Veja todos nossos produtos</h3>
                            <button className="py-2 px-6 bg-[#0E3463] rounded-full text-white text-sm font-bold mt-4">Veja mais</button>
                        </div>
                    </ImageCardComponent>
                </div>
            </section>
        </div>
    )
} 