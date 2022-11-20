import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import kl from '@/images/places/kl.png'
import { motion } from 'framer-motion'

export default function Places() {
    return (
        <>
            <motion.div 
            initial={{ y: 250, opacity: 0}}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration:1 }}
            className="px-12 md:px-36">
                <h2 className="mb-4 text-torquise-500 font-bold text-2xl underline">
                    Here are some cool places
                </h2>
                <div
                    className="grid grid-cols-2 gap-4
                        lg:grid-cols-4 lg:gap-8">
                    {[...Array(8)].map(() => (
                        <div className="group">
                            <Image
                                src={kl}
                                className="w-full object-cover mb-2 transition-all rounded-lg
                                        group-hover:scale-105"
                            />
                            <Link
                                href="#"
                                className="text-teal-500 text-xl font-semibold text-center">
                                Kuala Lumpur
                            </Link>
                        </div>
                    ))}
                </div>
            </motion.div>
        </>
    )
}
