import React from 'react'
import { HeroComponent } from './hero.component'
import { About } from '@/components/shared/Pages/About'
import { ProductPresentationComponent } from './productPresentation.component'
import { FooterComponent } from '@/components/shared/Footer'

export const HomeComponent = () => {
    return (
        <div className='flex flex-col gap-36 mt-20'>
            <HeroComponent />
            <About />
            <ProductPresentationComponent />
            <FooterComponent/> 
        </div>
    )
}