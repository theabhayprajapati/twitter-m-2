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
            <div className="bg-black px-3 fixed shadow-lg z-50 top-0 w-full">
                <HeaderSection title="Home" />
            </div>
            <LowerNav />
        </div>
    )
}

export default Feed