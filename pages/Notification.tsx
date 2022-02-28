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
      <main>
        <HeaderSection title="Notification's" />

      </main>
      <LowerNav />
    </div>
  )
}

export default NotificationSection