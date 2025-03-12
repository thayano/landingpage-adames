"use client"
import Image from 'next/image'
import React from 'react'
import logo from '../../../../../public/logo_adames.svg'
import image_empresa from '../../../../../public/image1.png'
import { Title } from '../../Title'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { usePathname } from 'next/navigation'

export const HeroAboutComponent = () => {
    const path = usePathname()

    function verifyPath() {
        if (path == '/about') return true

        return false
    }
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-20'>
            <div className='flex flex-col gap-10 md:w-11/12'>
                <Image src={logo} width={250} height={150} alt='logo' />
                <Title align='left' text='Conheca nossa historia' />
                <p className='font-medium text-pretty'>Desde 1985, a Adames tem nutrido o crescimento do agronegócio brasileiro com dedicação e inovação. Somos uma empresa familiar, pioneira em nutrição animal no estado do Mato Grosso do Sul, construindo uma história sólida baseada em conhecimento, qualidade e compromisso com o produtor rural. Com quatro décadas de experiência, desenvolvemos soluções nutricionais que impulsionam o desempenho dos rebanhos, sempre aliando tecnologia de ponta às necessidades do campo.
                    </p><p>
                    Nosso compromisso é fortalecer a pecuária com produtos de excelência, promovendo eficiência produtiva e sustentabilidade. Na Adames, tradição e inovação caminham juntas para alimentar o futuro do agronegócio.
                    Com uma trajetória construída com seriedade e compromisso com a qualidade, desenvolvemos produtos de excelência em tecnologia nutricional para a produção de proteína vermelha. Nossos produtos seguem rigorosos padrões de controle, desde a produção até a entrega, garantindo desempenho superior e máxima produtividade para o seu rebanho. Nosso principal ingrediente é a confiança.</p>
                {!verifyPath() && (
                    <Link href='/about'>
                        <Button className='px-6 rounded-full font-bold opacity-80 hover:opacity-100'>Saiba mais</Button>
                    </Link>
                )}

            </div>
            <div className='flex items-center justify-center'>
                <Image src={image_empresa} alt='imagens da empresa' width={550} height={800} />
            </div>
        </div>
    )
}
