'use client'
import React from 'react'
import { HeroComponent } from './hero.component'
import { ProductPresentationComponent } from './productPresentation.component'
import { ProductAdvantagesComponent } from './productAdvantages.component'
 
import { CardBlogComponent } from '@/components/shared/Pages/Blog'
import { DoubtComponent } from './doubt.component'
import { HeroAboutComponent } from '@/components/shared/Pages/About'
import { Title } from '@/components/shared/Title'
import CookieConsent from '@/components/shared/CookieConsent'

export const HomeComponent = () => {
    return (
        <div className='mt-20'>
            <HeroComponent />
            <main className='flex flex-col gap-36 mt-44'>
                <div className='lg:px-32 px-4 md:16'>
                    <HeroAboutComponent/>
                </div>
                <ProductPresentationComponent />
                <ProductAdvantagesComponent />
                <CookieConsent />
                <div>
                    <Title text="Destaques" align="center" className="text-4xl mb-32" />
                    <CardBlogComponent />
                </div>
                <DoubtComponent />
            </main>
        </div>
    )
}