import React from 'react'
import { HeroComponent } from './hero.component'
import { ProductPresentationComponent } from './productPresentation.component'
import { ProductAdvantagesComponent } from './productAdvantages.component'
import { CardBlogComponent } from '@/components/shared/Pages/Blog'
import { DoubtComponent } from './doubt.component'
import { HeroAboutComponent } from '@/components/shared/Pages/About'

export const HomeComponent = () => {
    return (
        <div className='mt-20'>
            <HeroComponent />
            <main className='flex flex-col gap-36 mt-44'>
                <div className='px-32'>
                    <HeroAboutComponent/>
                </div>
                <ProductPresentationComponent />
                <ProductAdvantagesComponent />
                <CardBlogComponent />
                <DoubtComponent />
            </main>
        </div>
    )
}