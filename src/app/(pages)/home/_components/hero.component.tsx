import { Title } from '@/components/shared/Title'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import React from 'react'
import logo from '../../../../../public/home.jpg'
import logo1 from '../../../../../public/home1.jpg'
import logo2 from '../../../../../public/home2.jpg'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'

const images = [
    { src: logo, alt: "Imagem 1" },
    { src: logo1, alt: "Imagem 2" },
    { src: logo2, alt: "Imagem 3" },
]

export const HeroComponent = () => {
    return (
        <div className='w-full flex flex-col flex-1 items-center'>
            <header className='flex flex-1 items-center max-w-3xl'>
                <Title
                    align='center'
                    text='Tradição, inovação e confiança em nutrição animal'
                    subTitle='Desde 1983, nós, da Adames, temos o compromisso em atender nossos parceiros por meio da nutrição animal'
                />
            </header>
            <Carousel className="w-full mx-auto py-14">
                <CarouselContent>
                    {images.map((image, index) => (
                        <CarouselItem key={index}>
                            <div className="">
                                <Card className='border-0'>
                                    <CardContent className="flex justify-center h-[800px]">
                                        <Image
                                            src={image.src || "/placeholder.svg"}
                                            alt="hero image"
                                            width={2000}
                                            height={800}
                                            className="rounded-3xl"
                                        />
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}
