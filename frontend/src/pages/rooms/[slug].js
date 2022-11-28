import Footer from '@/components/Layouts/Footer'
import Head from 'next/head'
import NavbarPage from '@/components/Layouts/Navbar2'
import React from 'react'

export default function Rooms() {
    return (
        <>
            <Head>
                <title>Search Results</title>
            </Head>
            <NavbarPage />
            <main className="px-8">
                <section>
                    <h1>Test</h1>
                </section>
            </main>
            <Footer />
        </>
    )
}
