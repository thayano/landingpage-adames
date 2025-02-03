import React from 'react'
import { HeroComponent } from './hero.component'
import { ProductPresentationComponent } from './productPresentation.component'
import { FooterComponent } from '@/components/shared/Footer'
import { ProductAdvantagesComponent } from './productAdvantages.component'
import { AboutComponent } from '../../about/_components/about.component'
import { HeroBlogComponent } from '@/components/shared/Pages/Blog'
import { DoubtComponent } from './doubt.component'

export const HomeComponent = () => {
    return (
        <div className='flex flex-col gap-36 mt-20'>
            <HeroComponent />
            <AboutComponent />
            <ProductPresentationComponent />
            <ProductAdvantagesComponent />
            <HeroBlogComponent />
            <DoubtComponent />
            <FooterComponent/> 
        </div>
    )
}