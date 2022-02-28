import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import HeaderSection from '../components/Header'
import LowerNav from '../components/lowernavigation'
import Newscard from '../components/newscard'
import Normalnews from '../components/normalnews'

const Explore = ({ trending }: any) => {
    console.log(
        trending[0].title
    );
    return (
        <div className="relative text-white">
            <Head>
                <title>
                    Explore
                </title>
                {/* add twitterlogofavicon */}


            </Head>
            <div className="bg-black px-3 fixed shadow-lg z-50 top-0 w-full">
                <HeaderSection title="Trending" />
            </div>
            <section className="overflow-y-scroll">



                {/* map the trending array */}

                <Newscard
                    key={trending[0].urlToImage}
                    title={trending[0].title}
                    // description={item.description}
                    url={trending[0].url}
                    name={trending[0].source.name}
                    image={trending[0].urlToImage}
                />

                {
                    console.log(
                        Array.isArray(trending)
                    )
                }

                {trending.slice(1, 4).map((item: any, index: number) => {
                    return (
                        <Normalnews key={item.urlToImage} name={item.source.name} title={item.title} image={item.urlToImage} url={item.url} />
                    )
                })}

                {trending.slice(4, 10).map((item: any, index: number) => {
                    return (
                        <Normalnews key={item.urlToImage} name={item.source.name} title={item.title} image={item.urlToImage} url={item.url} />
                    )
                })}

            </section>
            <LowerNav />
        </div>
    )
}

export default Explore

export const getServerSideProps = async (context: any) => {

    const res = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=e3553a68781d448b87d4ebd624b4b888')
    const data = await res.json()
    console.log(data.articles)
    return {
        props: {
            trending: data.articles
        }
    }
}


