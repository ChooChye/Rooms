import Image from 'next/image'
import React from 'react'
import logo from '../../images/logo.png'

export default function Navbar() {
    return (
        <nav className="p-4 mb-8">
            <div className="flex">
                <div className="">
                    <Image src={logo} className="w-full" />
                </div>
                <div className="flex-1">
                    <div className="flex gap-4 justify-end ">
                        <div>
                            <button className="btn-outline-primary">
                                Login / Register
                            </button>
                        </div>
                        <div>
                            <button className="btn-primary">Post an Ad</button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
