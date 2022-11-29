import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import user from '@/images/user.png'

export default function UserInfo() {
    return (
        <>
            <div
                className="userInfo flex items-center gap-4
                md:flex-col">
                <Image src={user} alt="user" className="md:w-[50%]" />
                <div className="md:text-center">
                    <Link href="#">
                        <span className="break-words">
                            Jonathan Lim Choo Chye
                        </span>
                    </Link>
                    <p className="text-muted">Date Joined: 9/11/2022</p>
                </div>
                <div className="ml-auto md:ml-0 md:inline-block text-center">
                    <p className='hidden'>Contact No.</p>
                    <div className="border rounded-lg bg-torquise-500 p-2 text-teal-800 font-bold">
                        <p>019 910 8209</p>
                    </div>
                </div>
            </div>
        </>
    )
}
