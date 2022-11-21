import Image from 'next/image'
import React from 'react'
import image from '@/images/hero2.jpg'

export default function ListItems() {
    return (
        <>
            {[...Array(6)].map(() => (
                <div className="border border-torquise-500 shadow-lg mb-4">
                    <div className="flex flex-col md:flex-row gap-2 roomList">
                        <div>
                            <Image
                                src={image}
                                alt="Image"
                                className="h-full object-cover w-64 inline-block"
                            />
                        </div>
                        <div className="flex-1 p-2">
                            <h4>
                                [Zero deposit] Single room for rent at Sri
                                Rampai
                            </h4>
                            <p className="text-xs text-slate-500">
                                Posted: 09/11/2022
                            </p>
                            <p className="text-xs text-slate-500">
                                Ampang, Kuala Lumpur
                            </p>
                            <ul className="mt-4 text-sm list-disc ml-4 text-slate-500">
                                <li>Air-Cond</li>
                                <li>Private Bath</li>
                                <li>Air-Cond</li>
                                <li>Air-Cond</li>
                            </ul>
                            <div className="flex mt-4 justify-end">
                                <div className="bg-[#4B8673] p-2">
                                    <p className="font-bold text-2xl text-white">
                                        RM 800
                                    </p>
                                </div>
                                {/* <div className="bg-indigo-400 p-2">
                                <button className="font-bold text-xl text-white text-center">
                                    View &raquo;
                                </button>
                            </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}
