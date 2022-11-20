import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import silh from '@/images/city-silh.png'
import logo from '@/images/logo.png'
export default function Footer() {
    
    return (
        <>
            <footer className="mt-16">
                <div className="footerSilh"></div>
                <section className='bg-torquise-500 p-4'>
                    <div className="flex flex-row">
                        <div>
                            <Image src={logo} />
                            <p className='copyright'>&copy; {new Date().getFullYear()} {process.env.NEXT_PUBLIC_APP}. All rights reserved</p>
                        </div>
                        <div className='flex-1 text-end'>
                            <ul className="footer-links">
                                <li>
                                    <Link href="#">About us</Link>
                                </li>
                                <li>
                                    <Link href="#">Terms & Conditions</Link>
                                </li>
                                <li>
                                    <Link href="#">Privacy Policy</Link>
                                </li>
                                <li>
                                    <Link href="#">Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </footer>
        </>
    )
}

