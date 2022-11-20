import React from 'react'
import Image from 'next/image'
import hero from '@/images/hero.jpg'
import Navbar from '@/components/Layouts/Navbar'
import Search from '@/comp/Homepage/Search'

export default function Hero() {
    return (
        <>
            <div className="relative h-[32rem]">
                <Navbar />
                <Image
                    src={hero}
                    className="w-full h-full absolute top-0 -z-10 object-cover"
                />
                <div className="flex flex-col justify-center items-center p-4 gap-12">
                    <div>
                        <p
                            className="text-center text-white text-shadow text-2xl
                                    md:text-3xl
                                    lg:text-4xl
                                    xl:text-5xl">
                            Welcome to Malaysia's upcoming website for room
                            rentals listing posted online all across Malaysia
                        </p>
                    </div>
                    <div>
                        <Search />
                    </div>
                </div>
            </div>
        </>
    )
}
