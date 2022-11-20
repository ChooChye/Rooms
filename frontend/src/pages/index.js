import Footer from '@/components/Layouts/Footer'
import Head from 'next/head'
import Hero from '@/comp/Homepage/Hero'
import Image from 'next/image'
import Link from 'next/link'
import Places from '@/comp/Homepage/Places'
import { useAuth } from '@/hooks/auth'

export default function Home() {
    const { user } = useAuth({ middleware: 'guest' })

    return (
        <>
            <Head>
                <title>Rooms</title>
            </Head>
            <main>
                <section className="mb-4 md:mb-8">
                    <Hero />
                </section>
                <section>
                    <Places/>
                </section>
            </main>
            <Footer/>
        </>
    )
}
