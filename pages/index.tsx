import Head from 'next/head'
import React from 'react'
import Explore from '../components/ExploreSection'
import Feed from '../components/Feedsection'
import Navigation from '../components/Navigation'
// import Navigation from '../Navigation'
const Home = () => {
  return (
    <div className="bg-black font-Monsertat ">
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
        <div className="border border-gray-900 col-span-2 overflow-y-auto">
          <Feed />
        </div>
        <div className="hidden md:inline-grid">
          <Explore />
        </div>

      </main>


    </div>
  )
}

export default Home