import Image from 'next/image'
import React from 'react'
import images_adames from '../../../../../public/adames_images.png'
import { Title } from '@/components/shared/Title'

export const ContentAboutComponent = () => {
    return (
        <main>
            <div className='grid grid-cols-2 gap-28'>
                <Image src={images_adames} alt='imagens da empresa' />
                <div className='flex flex-col gap-10'>
                    <Title text='Titulo de teste'></Title>
                    <p className='text-justify'>Pioneiros no Centro-Oeste em tecnologia nutricional para a produção de proteína vermelha de ponta, construímos nossa história com base na seriedade e alto nível de qualidade.
                        Nossos produtos são desenvolvidos seguindo rigorosos controles de qualidade desde a produção à entrega, tendo como ingrediente principal a confiança para alcançar produtividade máxima do seu rebanho.</p>
                </div>
            </div>
            <div className='mt-44'>
                <div className=''>
                    <Title text='Lorem ipsum dolor sit amet consectetur'></Title>
                </div>
                <div className='grid grid-cols-3 mt-20 gap-20'>
                    <div>
                        <Title text='Lorem'></Title>
                        <p className='text-justify'>Nós somos um time de especialistas em tecnologia nutricional, focados em proporcionar aos nossos clientes a melhor experiência e a garantir que todos os seus animais possam alcançar os melhores resultados.</p>
                    </div>
                    <div>
                        <Title text='Lorem'></Title>
                        <p className='text-justify'>Nós somos um time de especialistas em tecnologia nutricional, focados em proporcionar aos nossos clientes a melhor experiência e a garantir que todos os seus animais possam alcançar os melhores resultados.</p>
                    </div>
                    <div>
                        <Title text='Lorem'></Title>
                        <p className='text-justify'>Nós somos um time de especialistas em tecnologia nutricional, focados em proporcionar aos nossos clientes a melhor experiência e a garantir que todos os seus animais possam alcançar os melhores resultados.</p>
                    </div>
                </div>
            </div>
        </main>
    )
}
