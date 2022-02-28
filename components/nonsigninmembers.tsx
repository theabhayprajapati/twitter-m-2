// import { useSession } from 'next-auth/react'
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
const Nonsigninmembers = () => {
    const { data: session } = useSession()
    return (
        <div className='absolute text-white w-full h-16 bg-blue-400 top-16 bottom-0 z-40  '>
            <main className='max-w-6xl mx-auto flex items-center justify-center justify-items-center p-3'>
                <div className='w-[80%]'>
                    <h1 className=''>
                        Don’t miss what’s happening
                        <p>
                            People on Twitter are the first to know.
                        </p>
                    </h1>
                </div>
                <div className='w-[20%]'>
                    {
                        !session ? <button onClick={() => signIn()}>
                            Sign In
                        </button> :
                            <button onClick={() => signOut()}>
                                Sign Out
                            </button>
                    }
                </div>
            </main>
        </div>
    )
}

export default Nonsigninmembers