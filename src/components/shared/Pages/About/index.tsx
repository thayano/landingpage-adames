import Image from 'next/image'
import React from 'react'
import logo from '../../../../../public/logo_adames.svg'
import { Title } from '../../Title'

export function About() {
    return (
        <div className='flex justify-between'>
            <div className='flex flex-col gap-10 w-1/2'>
                <Image src={logo} width={150} height={150} alt='logo' />
                <Title align='left' text='Conheca nossa historia' />
                <p>Sempre sonhando, inovando e empreendendo a fim de oferecer as melhores fórmulas e produtos para todas as raças e portes.</p>
                <p>Desde 1983, nós, da Adames, temos o compromisso em atender nossos parceiros por meio da nutrição animal. Sempre sonhando, inovando e empreendendo a fim de oferecer as melhores fórmulas e produtos para todas as raças e portes.</p>
            </div>
            <div>
                imagem
            </div>
        </div>
    )
}
