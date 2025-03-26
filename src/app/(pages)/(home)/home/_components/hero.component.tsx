"use client"

// import { Title } from '@/components/shared/Title'
import React from 'react'
import Link from 'next/link'

export const HeroComponent = () => {

    return (
        <div className='w-full flex-1 items-center'>
            <section className="relative w-full h-screen overflow-hidden">
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
                        Nutrição de Alta Performance para Pecuária
                    </h1>
                    <p className="text-xl md:text-2xl text-white/90 max-w-2xl mb-8">
                        Soluções inovadoras e de qualidade para impulsionar a produtividade e os resultados do seu negócio.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            href="product"
                            className="inline-flex h-12 items-center justify-center rounded-md border border-white bg-transparent px-8 text-base font-medium text-white shadow-sm transition-colors hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                        >
                            Conheça nossos produtos
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
