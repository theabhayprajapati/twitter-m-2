import Head from 'next/head'
import React from 'react'
import Explore from '../components/Explore'
import Feed from '../components/Feed'
import Navigation from '../components/Navigation'
import Nonsigninmembers from '../components/nonsigninmembers'

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
            <Navigation />
          </div>
        </div>
        <div className="border border-gray-900 col-span-2 overflow-y-auto ">
          {/* <Feed /> */}
        </div>
        <div className="hidden md:inline-grid">
          {/* <Explore /> */}
        </div>

      </main>
      {/* <Nonsigninmembers /> */}


    </div>
  )
}

export default Home