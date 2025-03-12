import { Title } from '@/components/shared/Title'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
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
                    text='Nutrição de Alta Performance para Pecuária'
                    className='text-5xl'
                    subTitle='Soluções inovadoras e de qualidade para impulsionar a produtividade e os resultados do seu negócio.'
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
                      
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            className="rounded-3xl"
                                            style={{ 'objectFit': "cover" }}
                                        />
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>

            </Carousel>
        </div>
    )
}
