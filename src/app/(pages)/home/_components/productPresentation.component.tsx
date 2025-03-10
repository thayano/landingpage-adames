import { ImageCardComponent } from "@/components/shared/ImageCard"
import { Title } from "@/components/shared/Title"
import cavalo from "../../../../../public/cavalo.jpg"
import bezerro from "../../../../../public/bezerro.jpg"
import mini_vaca from "../../../../../public/mini_vaca.jpg"
import red_card from "../../../../../public/Subtract.svg"
import clube_das_vacas from "../../../../../public/clube_das_vacas.jpg"
import Image from "next/image"
import { Button } from "@/components/ui/button"

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
                    <ImageCardComponent title="Equinos" link={'product?prod=equinos'}>
                        <Image src={cavalo} alt="Cavalo" fill style={{ objectFit: 'cover' }} className="h-24" />
                    </ImageCardComponent>
                    <ImageCardComponent title="bovinos de leite" link={'product?prod=boi_leite'}>
                        <Image src={mini_vaca} alt="mini_vaca" fill style={{ objectFit: 'cover' }} className="h-24" />
                    </ImageCardComponent>
                </div>
                <div className="h-full flex">
                    <ImageCardComponent title="bovinos de corte" link={'product?prod=boi_corte'}>
                        <Image src={clube_das_vacas} fill alt="clube_das_vacas" style={{ objectFit: 'cover' }} className="h-24" />
                    </ImageCardComponent>
                </div>
                <div className="flex flex-col gap-6">
                    <ImageCardComponent title="Bezerro" link={'product?prod=bezerros'}>
                        <Image src={bezerro} alt="bezerro" fill style={{ objectFit: 'cover' }} />
                    </ImageCardComponent>
                    <div className="flex-grow relative rounded-2xl hidden md:block">
                        <Image src={red_card} alt="todos" fill style={{ objectFit: 'cover' }} className=" rounded-2xl" />
                        <div className="absolute px-4 py-2 md:p-8">
                            <p className="md:text-2xl text-md font-semibold text-white">Veja todos nossos</p>
                            <p className="md:text-2xl text-md font-semibold text-white">produtos</p>
                            <Button className="mt-2 rounded-full px-6 bg-[#0E3463] font-medium">Veja mais</Button>
                        </div>
                    </div>
                    <div className="md:hidden py-4">
                        <p className="md:text-2xl text-md font-semibold">Veja todos nossos produtos</p>
                        <Button className="mt-2 rounded-full px-6 bg-[#0E3463] font-medium md:hidden" size={"sm"}>
                            Conheça todos produtos
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
} 