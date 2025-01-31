import Image from 'next/image'
import React from 'react'
import logo from '../../../../../public/logo_adames.svg'
import image_empresa from '../../../../../public/image1.png'
import { Title } from '../../Title'

export const About = () => {
    return (
        <div className='flex justify-between px-32'>
            <div className='flex flex-col gap-10 w-1/3'>
                <Image src={logo} width={250} height={150} alt='logo' />
                <Title align='left' text='Conheca nossa historia' />
                <p className='font-semibold'>Sempre sonhando, inovando e empreendendo a fim de oferecer as melhores fórmulas e produtos para todas as raças e portes.</p>
                <p>Desde 1983, nós, da Adames, temos o compromisso em atender nossos parceiros por meio da nutrição animal. Sempre sonhando, inovando e empreendendo a fim de oferecer as melhores fórmulas e produtos para todas as raças e portes.</p>
            </div>
            <div className=''>
                <Image src={image_empresa} alt='imagens da empresa' width={500} height={800} />
            </div>
        </div>
    )
}
