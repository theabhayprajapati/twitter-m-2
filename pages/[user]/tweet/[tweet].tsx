import { collection, doc, onSnapshot } from 'firebase/firestore'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Explore from '../../../components/Explore'
import HeaderSection from '../../../components/Header'
import Navigation from '../../../components/Navigation'
import Singletweet from '../../../components/Singletweet'
import { db } from '../../../firebase'

const Tweet = () => {
  const router = useRouter()
  console.log(router.query)
  const { user, tweet } = router.query
  console.log(user, tweet)
  const [singleTweet, setsingleTweet] = useState<any>()
  const SingletweetsRef = collection(db, "tweets")


  useEffect(() => {

    const getTweets = (tweet: any) => {
      onSnapshot(doc(db, "tweets", tweet), (snapshot) => setsingleTweet(snapshot.data()))
    }

    // fetch data the firebase doc tweets with tweets id
    // onSnapshot(doc(db, "tweets", tweets), (snapshot) => setAlltweets(snapshot.docs))

    tweet && getTweets(tweet)
  }, [router.query])
  console.log(singleTweet, "Tweets data")

  return (
    <div className=''>

      <main className='max-w-6xl mx-auto h-screen w-screen  grid grid-cols-1 md:grid-cols-4'>

        <div className="hidden md:inline-grid ">
          <div>
            <Navigation />
          </div>
        </div>
        <div className=" border-gray-900 col-span-2 w-full  overflow-y-auto">
          <Singletweet tweet={singleTweet} tweetiD={tweet} />
        </div>
        <div className=" hidden md:inline-grid">
          <Explore />
        </div>
      </main>
    </div>
  )
}

export default Tweet