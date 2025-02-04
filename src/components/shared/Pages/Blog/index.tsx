import { Card } from "@/components/ui/card"
import { Title } from "../../Title"
import Image from "next/image"
import mini_vaca from "../../../../../public/mini_vaca.jpg"
import { ImageCardComponent } from "../../ImageCard"

export const CardBlogComponent = () => {
    return (
        <div>
            <Title text="Destaques" align="center" />
            <section className="grid grid-cols-3 gap-20 h-[800px] mt-20">
                <Card className="flex flex-col border-0 gap-6">
                    <ImageCardComponent title="" link={'#'}>
                        <Image src={mini_vaca} alt="" fill style={{ objectFit: 'cover' }} />
                    </ImageCardComponent>
                    <h3 className="text-2xl">Titulo</h3>
                    <p className="text-justify line-clamp-4 text-muted-foreground font-medium">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse quas sapiente libero dignissimos, ullam repudiandae totam officiis aspernatur maiores voluptates dolore tempora quos deserunt amet sed quod fuga et aut.</p>
                </Card>
                <Card className="flex flex-col border-0 gap-6">
                    <ImageCardComponent title="" link={'#'}>
                        <Image src={mini_vaca} alt="" fill style={{ objectFit: 'cover' }} />
                    </ImageCardComponent>
                    <h3 className="text-2xl">Titulo</h3>
                    <p className="text-justify line-clamp-4 text-muted-foreground font-medium">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse quas sapiente libero dignissimos, ullam repudiandae totam officiis aspernatur maiores voluptates dolore tempora quos deserunt amet sed quod fuga et aut.</p>
                </Card>
                <Card className="flex flex-col border-0 gap-6">
                    <ImageCardComponent title="" link={'#'}>
                        <Image src={mini_vaca} alt="" fill style={{ objectFit: 'cover' }} />
                    </ImageCardComponent>
                    <h3 className="text-2xl">Titulo</h3>
                    <p className="text-justify line-clamp-4 text-muted-foreground font-medium">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse quas sapiente libero dignissimos, ullam repudiandae totam officiis aspernatur maiores voluptates dolore tempora quos deserunt amet sed quod fuga et aut.</p>
                </Card>
            </section>
        </div>
    )
}