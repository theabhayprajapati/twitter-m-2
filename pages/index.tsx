import Head from 'next/head'
import React from 'react'

const Home = () => {
  return (
    <div className="bg-black font-Monsertat text-white">
      <Head>
        <title>
          Home / Twitter
        </title>
        {/* add a favicon */}
        <link rel="icon" href="/SVG/twitterblue.svg" />
      </Head>
      <main className='max-w-6xl mx-auto  h-screen w-screen  grid grid-cols-1 md:grid-cols-4 '>
        <div className="hidden md:inline-grid">
          <div>
          </div>
        </div>
        <div className="border border-gray-900 col-span-2 overflow-y-auto">
        </div>
        <div className="hidden md:inline-grid">
        </div>

      </main>


    </div>
  )
}

export default Home