import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import HeaderSection from './Header'
import LowerNav from './lowernavigation'
import { useSession, signIn, signOut } from "next-auth/react"
import Nonsigninmembers from './nonsigninmembers'

const Feed = () => {

    const { data: session } = useSession()
    useEffect(() => {
        console.log(session,"SESSION STATUS:--")
    }, [session])
    


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
            <main className='text-white mt-32'>
                <h2>
                    Loremheading
                </h2>
                {session ?
                    <button onClick={() => signOut()}>
                        Sign Out
                    </button> : <button onClick={() => signIn()}>
                        SignIn
                    </button>}
                {
                    session && (<div>
                        <h1>
                            {
                                session?.user?.name
                            }
                        </h1>
                    </div>)
                }
            </main>

            <LowerNav />

        </div>
    )
}

export default Feed
