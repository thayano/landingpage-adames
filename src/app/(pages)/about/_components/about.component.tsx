import { HeroAboutComponent } from '@/components/shared/Pages/About'
import React from 'react'
import { ContentAboutComponent } from './content.component'
import { LatLngExpression } from 'leaflet'
import { Title } from '@/components/shared/Title'
import ClientMap from '../../../../components/shared/Maps/DynamicMap'

export const AboutComponent = () => {
    const locationMS: LatLngExpression = [-20.519206, -54.715653]
    const locationMT: LatLngExpression = [-2.949650, -60.033057]
    return (
        <div className='mt-44 flex flex-col md:px-16 lg:px-32 px-4 gap-32'>
            <HeroAboutComponent/>
            <ContentAboutComponent />
            <div className='flex flex-col gap-4'>
                <ClientMap location={locationMS} >
                    <Title text="Adames MS" subTitle="Campo Grande, MS" className='text-4xl'></Title>
                    <p className="text-sm text-gray-400">
                        Endereço: Av. Edgar Lopes de Farias, 87
                    </p>
                </ClientMap>
                <ClientMap location={locationMT} order='order-2'>
                    <Title text="Adames MT" subTitle="Pontes e Lacerda, MT" className='text-4xl'></Title>
                    <p className="text-sm text-gray-400">
                        Endereço: Rodovia BR 174-B
                    </p>
                </ClientMap>
            </div>
        </div>
    )
}
