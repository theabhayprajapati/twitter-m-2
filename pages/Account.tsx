import { DotsHorizontalIcon } from '@heroicons/react/outline'
import { signIn, signOut, useSession } from 'next-auth/react'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import HeaderSection from '../components/Header'
import LowerNav from '../components/lowernavigation'

const AccountSection = () => {
  const { data: session }: any = useSession()
  const username = session?.user?.username
  return (
    <div className="relative text-white">
      <Head>
        <title>
          Account
        </title>
        {/* add favicon */}
        <link rel="icon" href="/SVG/twitterblue.svg" />
      </Head>
      <div className="bg-black px-3 sticky shadow-lg z-50 top-0 w-full">
        <HeaderSection title="Account" />
      </div>
      <div className='text-white text-xs w-full'>

        {
          session ? (
            <button className='nav-button w-full'>

              <Image height={"40px"} width={"40px"} src={session?.user?.image} tabIndex={0} alt="notfound" className='nav-icons rounded-full h-10' />
              <div className='flex justify-between w-full items-center'>
                <div className='flex flex-col text-left rounded-full px-3 py-1' tabIndex={0}>
                  <h1 className='text-white'>
                    {session?.user?.name || 'username'}
                  </h1>
                  <p className='text-[#6E767D]'>
                    @{username || '@email'}
                  </p>

                </div>
                <DotsHorizontalIcon tabIndex={0} className="nav-icons h-5 rounded-full" />
              </div>
            </button>
          ) : (
            <button onClick={() => signIn()} className='nav-button w-full'>
              <div className='flex flex-col text-left'>
                <h1 className='text-white'>
                  Sign in
                </h1>

              </div>
            </button>

          )
        }
      </div>
      <h1 className='nothing-text'>
        Nothing to see here
        <p>
          - yet.
        </p>
      </h1>
      <LowerNav />
    </div>
  )
}

export default AccountSection