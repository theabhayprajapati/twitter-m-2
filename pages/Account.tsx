import Head from 'next/head'
import React from 'react'
import HeaderSection from '../components/Header'
import LowerNav from '../components/lowernavigation'

const AccountSection = () => {
  return (
    <div className="relative text-white">
        <Head>
            <title>
                Account
            </title>
        </Head>
        <main>
            <HeaderSection title='Account'/>
          
        </main>
        <LowerNav/>
    </div>
  )
}

export default AccountSection