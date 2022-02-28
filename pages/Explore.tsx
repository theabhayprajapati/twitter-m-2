import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import HeaderSection from '../components/Header'
import LowerNav from '../components/lowernavigation'
import Newscard from '../components/newscard'
import Normalnews from '../components/normalnews'

const Explore = () => {
    const [trending, settrending] = useState<any>([])
    //  fetch data from newsapi.org
    useEffect(() => {
        fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=e3553a68781d448b87d4ebd624b4b888`)
            .then(res => res.json())
            .then(data => {
                settrending([data.articles]);
            })

    }, [])
    console.log(
        trending[0]
    )
    return (
        <div className="relative text-white">
            <Head>
                <title>
                </title>
                Explore
            </Head>
            <section className="">
                <div className="md:hidden">
                    <HeaderSection title="Trending" />
                </div>

            </section>
            <LowerNav />
        </div>
    )
}

export default Explore