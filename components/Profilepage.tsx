import { DotsHorizontalIcon, InboxIcon } from '@heroicons/react/outline'
import { collection, doc, getDoc, getDocs, onSnapshot, orderBy, query } from 'firebase/firestore'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { db } from '../firebase'
import HeaderSection from './Header'
import TweetCard from './TweetCard'

const Profilepage = () => {
    const router = useRouter()
    const pid = router.query
    const [userData, setuserData] = useState<any>({})
    let username = router.query.user
    const { data: session }: any = useSession()
    const [userTweets, setuserTweets] = useState<any>()
    useEffect(() => {
        console.log(pid)
        // let ColRef = doc(db, "users", "theabhayprajapati")
        console.log(username, "USERNAME")
        const userDataFunction = async (username: any) => {
            const docRef = doc(db, "users", username);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setuserData(docSnap.data());
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }
        const userTweetsFunction = async (username: any) => {
            const TweetsRef = collection(db, "users", username, "tweets");
            const docs = await getDocs(TweetsRef);
            let q = query(TweetsRef, orderBy('createdAt', "desc"))
            onSnapshot(q, (snapshot) => setuserTweets(snapshot.docs))

        }
        username && userDataFunction(username)
        username && userTweetsFunction(username)
    }, [router])

    {
        username ? (console.log(userData, "USERDATA"),
            console.log(userTweets, "USERTWEETS")) : null
    }

    return (
        <div className='relative'>
            <header onClick={() => router.back()} className=" shadow-gray-700  bg-black px-3 sticky shadow-sm z-50 top-0 w-full">
                <HeaderSection tweets={userTweets && userTweets.length} title={userData.name} hidden={true} />
            </header>
            <section className="relative text-white">
                <div className="bg-white z-0 absolute top-0  w-full h-32 md:h-44 ">
                    <img className="w-full h-full object-cover" src="https://source.unsplash.com/random/400x400 " />
                </div>
                <div className=' absolute md:top-32 top-20  w-full  text-sm'>
                    <div className='m-3 flex items-baseline justify-between '>
                        <img src={userData.profile_image_url} className='ring ring-gray-800 h-20 w-20 rounded-full' alt="" />
                        <div className='flex items-center space-x-2 '>
                            <button className='h-7 w-7 items-center flex justify-center ring-[.5px] text-blue-500 rounded-full '>
                                <DotsHorizontalIcon className='input-icons text-white h-6 w-6 ring-gray-400' />
                            </button>
                            <button className='h-7 w-7 items-center flex justify-center ring-[.5px] text-blue-500 rounded-full '>
                                <InboxIcon className='input-icons text-white h-6 w-6 ring-gray-400' />
                            </button>
                            <button className="bg-white text-black hover:opacity-90 font-semibold text-sm px-2 py-1 rounded-full disabled:bg-blue-200">
                                {
                                    session?.user?.username === username ? "Edit" : "Follow"
                                }
                            </button>
                        </div>
                    </div>
                    <div className='m-3 mt-2 space-y-1'>
                        <div>
                            <h1 className='font-bold'>
                                {userData.name}
                            </h1>
                            <p className='text-gray-600 text-xs md:text-sm'>
                                @{userData.screen_name}
                            </p>
                        </div>
                        <div className='text-sm'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. A, aut.
                        </div>
                        <div className='flex space-x-2'>

                        </div>
                        <div className='flex space-x-3 text-sm text-gray-500'>
                            <button className='flex space-x-2'>
                                <h1 className='text-white'>
                                    122k
                                </h1>
                                <p className='text-gray-500'>
                                    Following  </p>
                            </button>
                            <button className='flex space-x-2'>
                                <h1 className='text-white'>
                                    23k
                                </h1>
                                <p className='text-gray-500'>
                                    Followers  </p>

                            </button>
                        </div>

                    </div>
                    <div className='m-3 flex justify-center items-center hover:bg-gray-900 focus:bg-gray-900'>
                        <button className='border-b-2 border-blue-500 '>
                            Tweets
                        </button>
                    </div>
                    <div className='m-3'>
                        {
                            userTweets && userTweets.map((tweet: any) => {
                                return (
                                    <TweetCard key={tweet.id} alltweets={tweet} />
                                )
                            })
                        }
                    </div>
                </div>

                {/* //todo: RESPONIBILE FOR USER INFORMATOIN */}
            </section>


        </div>
    )
}

export default Profilepage