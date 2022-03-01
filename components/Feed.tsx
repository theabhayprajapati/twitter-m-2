import { useSession } from 'next-auth/react'
import Head from 'next/head'
import React, { useEffect, useRef, useState } from 'react'
import HeaderSection from './Header'
import Inputfield from './Inputfield'
import LowerNav from './lowernavigation'

const Feed = () => {
    const { data: session } = useSession()
    return (
        <div className="relative text-white">
            <div>
                <Head>
                    <title>
                        Home /Feed
                    </title>
                </Head>
            </div>
            <div className="bg-black px-3 sticky shadow-lg z-50 top-0 w-full">
                <HeaderSection title="Home" />
            </div>
            <main className='text-white'>
                {session && (<><Inputfield /></>)}
            </main>

            <LowerNav />

        </div>
    )
}

export default Feed
