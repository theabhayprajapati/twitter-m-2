import Head from 'next/head'
import React from 'react'
import HeaderSection from './Header'
import LowerNav from './lowernavigation'

const Feed = () => {
    return (
        <div className="relative text-white">
            <div>
                <Head>
                    <title>
                        Home /Feed
                    </title>
                </Head>
            </div>
            <main className="">
                <HeaderSection title="Home" />
            </main>
            <LowerNav />
        </div>
    )
}

export default Feed