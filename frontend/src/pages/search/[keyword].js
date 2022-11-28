import FilterBox from '@/comp/SearchIndex/FilterBox'
import Footer from '@/components/Layouts/Footer'
import Head from 'next/head'
import ListItems from '@/comp/SearchIndex/ListItems'
import NavbarPage from '@/components/Layouts/Navbar2'
import React from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'

export default function keyword({data}) {
    const router = useRouter();
    const { keyword } = router.query;

    return (
        <>
            <Head>
                <title>Search Results</title>
            </Head>
            <NavbarPage />
            <main className="px-8">
                <section className="flex justify-center flex-col md:flex-row gap-8">
                    <div>
                        <FilterBox />
                    </div>
                    <div><ListItems list={data} /></div>
                </section>
            </main>
            <Footer />
        </>
    )
}

//This gets called on every request
export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL+'/api/rooms');
    const data = await res.json(JSON.stringify(res));  

    // Pass data to the page via props
    return { props: { data } }
}
