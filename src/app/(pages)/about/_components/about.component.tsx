import { HeroAboutComponent } from '@/components/shared/Pages/About'
import React from 'react'
import { ContentAboutComponent } from './content.component'
import { MapsComponent } from '@/components/shared/Maps'

export const AboutComponent = () => {
    return (
        <div className='mt-44 flex flex-col md:px-16 lg:px-32 px-4 gap-32'>
            <HeroAboutComponent/>
            <ContentAboutComponent />
            <MapsComponent />
            <MapsComponent />
        </div>
    )
}
