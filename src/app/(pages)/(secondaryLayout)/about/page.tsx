import React from 'react'
import { AboutComponent } from './_components/about.component'
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: "Quem somos - Adames",
	description: "...",
};

export default function About() {
  return (
    <AboutComponent />
  )
}
