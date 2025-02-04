"use client"

import React, { useState } from 'react'
import { data } from './data/data'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../../ui/button'
import { Sheet, SheetContent, SheetTrigger } from '../../ui/sheet'
import { Menu } from 'lucide-react'

export const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <nav className="w-full px-4 md:px-8 lg:px-4 py-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <Link href='/home'>
                        <Image src="/logo_adames.svg" alt="logo Adames" width={200} height={50} priority />
                    </Link>
                </div>
                <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
                    {data.map((item) => (
                        <Link
                            key={item.menu}
                            href={item.href}
                            className="font-semibold text-slate-600 border-b-2 border-transparent hover:border-[#0e34635d] p-1 transition duration-300"
                        >
                            {item.menu}
                        </Link>
                    ))}
                </div>
                <div className="hidden md:block">
                    <Button variant="default" className="bg-[#0E3463] hover:bg-[#0c2d56] rounded-full px-6 text-white font-semibold">
                        Contato
                    </Button>
                </div>

                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon" className="md:hidden">
                            <Menu className="h-6 w-6" />
                            <span className="sr-only">Toggle menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                        <nav className="flex flex-col gap-4">
                            {data.map((item) => (
                                <Link
                                    key={item.menu}
                                    href='#'
                                    className="font-semibold text-slate-600 hover:text-[#0E3463] transition duration-300"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.menu}
                                </Link>
                            ))}
                            
                        </nav>
                    </SheetContent>
                </Sheet>
            </div>
        </nav>
    )
}
