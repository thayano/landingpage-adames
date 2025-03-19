import { HeroAboutComponent } from '@/components/shared/Pages/About'
import Link from 'next/link'
import React from 'react'
import { ProductPresentationComponent } from '../(pages)/home/_components/productPresentation.component'
import { ProductAdvantagesComponent } from '../(pages)/home/_components/productAdvantages.component'
import CookieConsent from '@/components/shared/CookieConsent'
import { DoubtComponent } from '../(pages)/home/_components/doubt.component'
import { Title } from '@/components/shared/Title'

export default function Home() {
  return (
    <><section className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
        <source src="/2766950-hd_1920_1080_30fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white max-w-4xl mb-6">
          Transforme sua visão em realidade
        </h1>
        <p className="text-xl md:text-2xl text-white/90 max-w-2xl mb-8">
          Soluções inovadoras para impulsionar seu negócio e alcançar novos patamares de sucesso.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="#saiba-mais"
            className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-base font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            Saiba Mais
          </Link>
          <Link
            href="#contato"
            className="inline-flex h-12 items-center justify-center rounded-md border border-white bg-transparent px-8 text-base font-medium text-white shadow-sm transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            Entre em Contato
          </Link>
        </div>
      </div>
    </section>
      <div className='className="container mx-auto flex-1 px-4 md:px-8 lg:px-4 max-w-screen-2xl md:mt-12"'>
        <main className='flex flex-col gap-36 mt-20'>
          <div className='px-4 md:16'>
            <HeroAboutComponent />
          </div>
          <ProductPresentationComponent />
          <ProductAdvantagesComponent />
          <CookieConsent />
          <div>
            <header className='mb-24'>
              <Title text="Adames Conecta!" subTitle='O Mundo da Nutrição Animal e Gestão Pecuária.' align="center" className="text-4xl" />
            </header>
          </div>
          <DoubtComponent />
        </main>
      </div>
    </>
  )
}
