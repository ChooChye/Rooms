import React from 'react'
import {
    faClock,
    faExclamationTriangle,
    faLocationDot,
    faDollarSign,
    faInfoCircle,
    faBriefcase
} from '@fortawesome/free-solid-svg-icons'
import Head from 'next/head'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Footer from '@/components/Layouts/Footer'
import Gallery from '@/comp/Rooms/Gallery'
import NavbarPage from '@/components/Layouts/Navbar2'
import Desc from '@/comp/Rooms/Desc'
import Facilities from '@/comp/Rooms/Facilities'
import Rental from '@/comp/Rooms/Rental'
import UserInfo from '@/comp/Rooms/UserInfo'
import Map from '@/comp/Rooms/Map'

export default function Rooms({ data }) {
    return (
        <>
            <Head>
                <title>Search Results</title>
            </Head>
            <NavbarPage />
            <main>
                <section className="px-8 mb-4 md:px-12 lg:px-48">
                    <h2 className="text-2xl break-words mb-2">
                        dfvtt2twAgnm8n68olIXhEegjQTsYkTsdfugQa For rent
                    </h2>
                    <p className="text-xs text-slate-500">
                        <FontAwesomeIcon
                            icon={faLocationDot}
                            size="xs"
                            className="mr-1 text-torquise-500"
                        />
                        Ampang, Kuala Lumpur
                    </p>
                </section>
                <section>
                    <Gallery />
                </section>
                <section className="md:hidden mb-4">
                    <UserInfo />
                </section>
                <div className="flex flex-row justify-center sticky top-0 bg-teal-500 text-white sticky:shadow-lg">
                    <div className="flex-1">
                        <Link href="#rental">
                            <button className="anchor-buttons">
                            <FontAwesomeIcon icon={faDollarSign} className="mr-2"/>
                            Rental</button>
                        </Link>
                    </div>
                    <div className="flex-1">
                        <Link href="#desc">
                            <button className="anchor-buttons">
                            <FontAwesomeIcon icon={faInfoCircle} className="mr-2"/>
                                Description
                            </button>
                        </Link>
                    </div>
                    <div className="flex-1">
                        <Link href="#facilities">
                            <button className="anchor-buttons">
                            <FontAwesomeIcon icon={faBriefcase} className="mr-2"/>
                                Facilities
                            </button>
                        </Link>
                    </div>
                </div>
                <section className="p-4 flex gap-4 md:px-12 lg:px-48">
                    <div className="flex-initial grid grid-cols-1 gap-4
                     md:w-[70%]">
                        <Rental rent={data} />
                        <Desc desc={data.ad_description} />
                        <Facilities />
                        <Map />
                    </div>
                    <div className="hidden mb-4
                    md:w-[30%] md:inline-block">
                        <UserInfo />
                        <div className="panel border-t-0 mb-2">
                            {process.env.NEXT_PUBLIC_APP} listings are created
                            by individual users. When negotiating rental
                            contract, be sure to verify property ownership and
                            speak directly with the landlord.
                        </div>
                        <div>
                            <Link href="#" className="text-center text-red-400">
                                <p>
                                    <FontAwesomeIcon
                                        icon={faExclamationTriangle}
                                        className="mr-2"
                                    />
                                    Report this listing
                                </p>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export async function getServerSideProps({ params }) {
    // Fetch data from external API

    const res = await fetch(
        process.env.NEXT_PUBLIC_BACKEND_URL + '/api/rooms/' + params.slug,
    )
    const data = await res.json(JSON.stringify(res))
    return { props: { data } }
}
