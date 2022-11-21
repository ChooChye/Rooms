import FilterBox from '@/comp/SearchIndex/FilterBox'
import Footer from '@/components/Layouts/Footer'
import Head from 'next/head'
import ListItems from '@/comp/SearchIndex/ListItems'
import NavbarPage from '@/components/Layouts/Navbar2'
import React from 'react'

export default function SearchIndex() {
    return (
        <>
            <Head>
                <title>Search Results</title>
            </Head>
            <NavbarPage/>
            <main className='px-8 md:px-12'>
                <section className='flex justify-center flex-col md:flex-row gap-8'>
                    <div>
                        <FilterBox/>
                    </div>
                    <div>
                        <ListItems/>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    )
}
