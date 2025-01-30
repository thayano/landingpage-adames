import React from 'react'
import { Hero } from './hero'
import { About } from '@/components/shared/Pages/About'

export function HomeComponent() {
    return (
        <>
            <Hero />
            <About />
        </>
    )
}