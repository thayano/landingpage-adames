import { HeroAboutComponent } from '@/components/shared/Pages/About'
import React from 'react'
import { ContentAboutComponent } from './content.component'
import { LatLngExpression } from 'leaflet'
import { Title } from '@/components/shared/Title'
import ClientMap from '../../../../components/shared/Maps/DynamicMap'

export const AboutComponent = () => {
    const locationMS: LatLngExpression = [-20.55191267569932, -54.669450350283306]
    const locationMT: LatLngExpression = [-15.260242926646013, -59.322473097666204]
    return (
        <div className='mt-24 flex flex-col px-4 gap-32'>
            <HeroAboutComponent/>
            <ContentAboutComponent />
            <div className='flex flex-col gap-4'>
                <ClientMap location={locationMS} >
                    <Title text="Adames MS" subTitle="Campo Grande, MS" className='text-4xl'></Title>
                    <p className="text-sm text-gray-400">
                        Endereço: Av. Edgar Lopes de Farias, 87
                    </p>
                    <p className="text-sm text-gray-400">
                        Telefone: (67) 3378-2100
                    </p>
                </ClientMap>
                <ClientMap location={locationMT} order='order-2'>
                    <Title text="Adames MT" subTitle="Pontes e Lacerda, MT" className='text-4xl'></Title>
                    <p className="text-sm text-gray-400">
                        Endereço: Rodovia BR 174-B
                    </p>
                    <p className="text-sm text-gray-400">
                        Telefone: (65) 3266-1110 / 3266-1957
                    </p>
                </ClientMap>
            </div>
        </div>
    )
}
