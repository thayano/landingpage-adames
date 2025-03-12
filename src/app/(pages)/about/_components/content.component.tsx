import Image from 'next/image'
import React from 'react'
import images_adames from '../../../../../public/adames_images.png'
import { Title } from '@/components/shared/Title'
import { Check } from 'lucide-react'

export const ContentAboutComponent = () => {
    return (
        <main>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-28'>
                <Image src={images_adames} alt='imagens da empresa' />
                <div className='flex flex-col gap-10'>
                    <Title text='Adames: Excelência em Nutrição Animal'></Title>
                    <p className='text-pretty'>A Adames é uma empresa comprometida com o desenvolvimento da pecuária por meio de soluções nutricionais de alta performance. Com expertise em nutrição animal, tecnologia e inovação, entregamos produtos que impulsionam a eficiência produtiva, garantindo melhores índices zootécnicos e maior retorno sobre o investimento para nossos clientes.
                    Nossa atuação é pautada pela qualidade, pela ciência e pelo compromisso com a sustentabilidade, sempre priorizando soluções que agreguem valor à cadeia produtiva. Mais do que fornecer suplementos, trabalhamos para otimizar a nutrição, fortalecer a produtividade no campo e contribuir para o crescimento sustentável do setor.</p>
                </div>
            </div>
            <div className='mt-44'>
                <div className=''>
                    <Title text='O Que Nos Define: Nossa Razão de Ser '></Title>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 mt-20 gap-20'>
                    <div>
                        <Title text='Missão' className='text-2xl mb-2'></Title>
                        <p className='text-justify'>Contribuir para o resultado financeiro dos nossos clientes por meio das soluções nutricionais de excelência, criando uma relação de respeito e confiança.
                        </p>
                    </div>
                    <div>
                        <Title text='Visão' className='text-2xl mb-2'></Title>
                        <p className='text-justify'>Ser referência como empresa de nutrição animal fornecendo produtos e soluções de alta qualidade e tecnologa.</p>
                    </div>
                    <div>
                        <Title text='Valores' className='text-2xl mb-2'></Title>
                        <p className='text-justify flex gap-2'><Check width={10}/>Ética.</p>
                        <p className='text-justify flex gap-2'><Check width={10}/>Respeito aos clientes e colaboradores.</p>
                        <p className='text-justify flex gap-2'><Check width={10}/>Qualidade dos produtos e serviços.</p>
                        <p className='text-justify flex gap-2'><Check width={10}/>Responsabilidade social e ambiental.</p>
                        <p className='text-justify flex gap-2'><Check width={10}/>Inovação.</p>
                    </div>
                </div>
            </div>
        </main>
    )
}
