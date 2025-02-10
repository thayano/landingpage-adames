import { ImageCardComponent } from "@/components/shared/ImageCard"
import { Title } from "@/components/shared/Title"
import cavalo from "../../../../../public/cavalo.jpg"
import bezerro from "../../../../../public/bezerro.jpg"
import ovelha from "../../../../../public/ovelha.jpg"
import clube_das_vacas from "../../../../../public/clube_das_vacas.jpg"
import Image from "next/image"

export const ProductPresentationComponent = () => {
    return (
        <div className="block min-h-fit">
            <header className="py-2">
                <Title
                    text="Nossos Produtos"
                    subTitle="Lorem ipsum dolor sit amet consectetur."
                    align="center"
                    className="text-4xl"
                />
            </header>
            <section className="grid grid-cols-1 md:grid-cols-3 grid-rows-[1fr] mt-20 h-[600px] gap-6">
                <div className="flex flex-col gap-6">
                    <ImageCardComponent title="Cavalo" link={'product?prod=equinos'}>
                        <Image src={cavalo} alt="Cavalo" fill style={{ objectFit: 'cover' }} />
                    </ImageCardComponent>
                    <ImageCardComponent title="ovelha" link={'product?prod=ovinos'}>
                        <Image src={ovelha} alt="ovelha" fill style={{ objectFit: 'cover' }} />
                    </ImageCardComponent>
                </div>
                <div className="h-full flex">
                    <ImageCardComponent title="gado de corte e leite" link={'product?prod=boi_corte'}>
                        <Image src={clube_das_vacas} fill alt="clube_das_vacas" style={{ objectFit: 'cover'}} />
                    </ImageCardComponent>
                </div>
                <div className="flex flex-col gap-6">
                <ImageCardComponent title="Bezerro" link={'product?prod=bezerros'}>
                        <Image src={bezerro} alt="bezerro" fill style={{ objectFit: 'cover' }} />
                    </ImageCardComponent>
                    <ImageCardComponent title="ovelha" link={'product?prod=ovelha'}>
                        <Image src={ovelha} alt="ovelha" fill style={{ objectFit: 'cover' }} />
                    </ImageCardComponent>
                </div>
            </section>
        </div>
    )
} 