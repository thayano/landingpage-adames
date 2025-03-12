
import React from 'react'
import { HeroComponent } from './hero.component'
import { ProductPresentationComponent } from './productPresentation.component'
import { ProductAdvantagesComponent } from './productAdvantages.component'

import { CardBlogComponent } from '@/components/shared/Pages/Blog'
import { DoubtComponent } from './doubt.component'
import { HeroAboutComponent } from '@/components/shared/Pages/About'
import { Title } from '@/components/shared/Title'
import CookieConsent from '@/components/shared/CookieConsent'
import { BlogProvider } from '../../blog/context/blog.context'

export const HomeComponent = () => {
    return (
        <div className='mt-20'>
            <HeroComponent />
            <main className='flex flex-col gap-36 mt-44'>
                <div className='lg:px-32 px-4 md:16'>
                    <HeroAboutComponent />
                </div>
                <ProductPresentationComponent />
                <ProductAdvantagesComponent />
                <CookieConsent />
                <div>
                    <header className='mb-24'>
                        <Title text="Adames Conecta!" subTitle='O Mundo da Nutrição Animal e Gestão Pecuária.' align="center" className="text-4xl" />
                    </header>
                    <BlogProvider>
                        <CardBlogComponent />
                    </ BlogProvider>
                </div>
                <DoubtComponent />
            </main>
        </div>
    )
}