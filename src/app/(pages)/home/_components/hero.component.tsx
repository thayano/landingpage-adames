"use client"

import { Title } from '@/components/shared/Title'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import React, { useEffect, useRef, useState } from 'react'
import logo from '../../../../../public/pasto.png'
import logo1 from '../../../../../public/nova.jpg'
import logo2 from '../../../../../public/d79c5627-e093-4bfa-89da-1124c994676f.jpg'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'

const images = [
    { src: logo, alt: "Imagem 1" },
    { src: logo1, alt: "Imagem 2" },
    { src: logo2, alt: "Imagem 3" },
]

export const HeroComponent = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [api, setApi] = useState<any>(null)
    const autoplayRef = useRef<NodeJS.Timeout | null>(null)

    useEffect(() => {
        if (!api) return

        // Function to scroll to next slide
        const autoplay = () => {
            if (!api) return

            api.scrollNext()
        }

        // Start autoplay with 5 second interval (adjust as needed)
        const interval = 5000
        autoplayRef.current = setInterval(autoplay, interval)

        // Clean up interval when component unmounts
        return () => {
            if (autoplayRef.current) clearInterval(autoplayRef.current)
        }
    }, [api])

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

                <Carousel
                    opts={{
                        loop: true,
                    }}
                    setApi={setApi}
                    className="w-full mx-auto py-14"
                >
                    <CarouselContent>
                        {images.map((image, index) => (
                            <CarouselItem key={index}>
                                <div className="">
                                    <Card className="border-0">
                                        <CardContent className="flex justify-center h-[800px]">
                                            <Image
                                                src={image.src || "/placeholder.svg"}
                                                alt="hero image"
                                                width={1500}
                                                height={800}
                                                sizes="(max-width: 768px) 100vw, (max-width: 1400px) 50vw, 33vw"
                                                className="rounded-3xl"
                                                style={{ objectFit: "cover" }}
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
