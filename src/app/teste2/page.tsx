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
    <><section className="w-full py-24 md:py-32 bg-background">
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center text-center space-y-8 max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter text-foreground">
          Transforme sua visão em realidade
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
          Soluções inovadoras para impulsionar seu negócio e alcançar novos patamares de sucesso.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <Link
            href="#saiba-mais"
            className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-base font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            Saiba Mais
          </Link>
          <Link
            href="#contato"
            className="inline-flex h-12 items-center justify-center rounded-md border border-input bg-background px-8 text-base font-medium text-foreground shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            Entre em Contato
          </Link>
        </div>
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
