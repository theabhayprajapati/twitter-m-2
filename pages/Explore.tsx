import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Explore from '../components/Explore'
import HeaderSection from '../components/Header'
import LowerNav from '../components/lowernavigation'
import Navigation from '../components/Navigation'
import Newscard from '../components/newscard'
import Normalnews from '../components/normalnews'

const ExplorePage = ({ trending }: any) => {
    const router = useRouter()
    // const [trending, settrending] = useState<any>([])
    // //  fetch data from newsapi.org
    // useEffect(() => {
    //     fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=e3553a68781d448b87d4ebd624b4b888`)
    //         .then(res => res.json())
    //         .then(data => {
    //             settrending(data.articles);
    //         })

    // }, [])
    console.log(trending);
    return (
        <div className="text-white ">
            <Head>
                <title>
                    Explore
                </title>
            </Head>
            <main className="max-w-6xl mx-auto grid md:grid-cols-4 grid-cols-1">
                <div className='hidden md:inline-grid'>
                    <div className="fixed">
                        <Navigation />
                    </div>
                </div>
                <div className='col-span-2 relative'>
                    <div className="bg-black px-3 sticky z-50 top-0 w-full">
                        <HeaderSection title="Explore" />
                    </div>
                    <section className="overflow-y-scroll">



                        {/* map the trending array */}

                        {trending.length > 2 && <Newscard
                            key={trending[0].urlToImage}
                            title={trending[0].title}
                            // description={item.description}
                            url={trending[0].url}
                            name={trending[0].source.name}
                            image={trending[0].urlToImage}
                        />}

                        {
                            console.log(
                                Array.isArray(trending)
                            )
                        }

                        {trending.length > 2 && trending.slice(1, 4).map((item: any, index: number) => {
                            return (
                                <div key={item.url} className=''>
                                    <Normalnews name={item.source.name} title={item.title} image={item.urlToImage} url={item.url} />
                                </div>
                            )
                        })}

                        {trending.length > 2 && trending.slice(4, 18).map((item: any, index: number) => {
                            return (
                                <Normalnews key={item.url} name={item.source.name} title={item.title} image={item.urlToImage} url={item.url} />
                            )
                        })}

                    </section>
                    <LowerNav />
                </div>
                <div className='hidden md:inline-grid'>
                    <div className="fixed">
                        <Explore />
                    </div>
                </div>
            </main>
        </div>
    )
}

export default ExplorePage
export const getServerSideProps = async (context: any) => {

    const res = await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=e3553a68781d448b87d4ebd624b4b888`)
    const data = await res.json()
    const trending = data.articles
    console.log(trending.articles, '⭐')

    return {
        props: {
            trending
        },
    }
}
