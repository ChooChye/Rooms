import Image from 'next/image'
import React from 'react'
import logo from '../../images/logo.png'

export default function NavbarPage() {
    return (
        <nav className="p-4 mb-8 bg-torquise-500">
            <div className="flex">
                <div className="">
                    <Image src={logo} className="w-[80%] md:w-full" alt="logo" />
                </div>
                <div className="flex-1">
                    <div className="flex gap-4 justify-end ">
                        <div>
                            <button className="btn-outline-primary border-teal-500 hover:bg-teal-500">
                                Login / Register
                            </button>
                        </div>
                        <div>
                            <button className="btn-primary bg-teal-500 hover:bg-teal-600">
                                Post an Ad
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
