import Head from 'next/head'
import React from 'react'
import HeaderSection from '../components/Header'
import LowerNav from '../components/lowernavigation'

const NotificationSection = () => {
  return (
    <div className="relative text-white">
      <Head>
        <title>
          Explore

        </title>
      </Head>
      <div className="bg-black px-3 fixed shadow-lg z-50 top-0 w-full">
        <HeaderSection title="Trending" />
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

export default NotificationSection