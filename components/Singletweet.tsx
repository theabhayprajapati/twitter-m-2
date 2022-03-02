import { ChatAlt2Icon, DotsHorizontalIcon, HeartIcon, ReplyIcon, UploadIcon, XIcon } from '@heroicons/react/outline'
import { addDoc, collection, deleteDoc, doc, serverTimestamp, setDoc } from 'firebase/firestore'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { db } from '../firebase'
import HeaderSection from './Header'
import TweetCard from './TweetCard'
import Moment from 'react-moment'
import Image from 'next/image'
import ReactTextareaAutosize from 'react-textarea-autosize'
import LowerNav from './lowernavigation'

const Singletweet = ({ tweet, tweetiD }: any) => {
    console.log(tweet);
    const { data: session }: any = useSession()
    const router = useRouter()
    const username = session?.user?.username
    const DotsButtonClicked = async (id: any, screen_name: any) => {

        if (username === screen_name) {
            alert("Access granted")
            let docRef = doc(db, 'tweets', id)
            let docRef2 = doc(db, 'users', screen_name, 'tweets', id)
            await deleteDoc(docRef2)
            await deleteDoc(docRef)
            router.back()
        } else {
            alert('Access denied')

        }


    }
    const [comment, setcomment] = useState('')

    const makereply = async (username: any, comment: any) => {
        const realcomment = comment
        await setDoc(doc(db, "users", username, "tweets", "comments"), {
            name: session.user.name,
            createdAt: serverTimestamp(),
            screen_name: username,
            profile_image_url: session.user.image,
            madecomment: realcomment
        })
    }
    console.log(tweetiD)

    return (
        <div className="text-white">
            <div className='mx-3'>
                <HeaderSection title='Tweet' hidden={true} />
            </div>
            <main>
                {
                    tweet ? <div key={tweet.id} className="text-white mx-3 ">
                        <div className="flex space-x-4 items-center">

                            <div className="w-[10%] self-start " onClick={() => router.push(
                                `/${tweet.screen_name}`
                            )}>
                                <div className="rounded-full hover:opacity-90 cursor-pointer h-12 w-12 items-center flex justify-center " tabIndex={0}>
                                    <img src={tweet.profile_image_url} alt="" className="h-full  rounded-full w-full  " />
                                </div>
                            </div>


                            <div className='w-[80%] flex flex-col '>
                                <h1 className='text-sm font-bold'>
                                    {tweet.name}
                                </h1>
                                <h1 className='text-xs text-gray-400'>
                                    @{tweet.screen_name}
                                </h1>
                            </div>



                            <div className='w-[10%]'>
                                <button className="input-icons">
                                    <DotsHorizontalIcon onClick={() => DotsButtonClicked(tweetiD, tweet.screen_name)} className='input-btn h-[20px] w text-blue-500 cursor-pointer' />

                                </button>
                            </div>
                        </div>
                        <div className='my-3'>
                            {tweet.tweet}
                        </div>
                        <div>
                            <Moment className="text-xs text-gray-500 hover:underline cursor-pointer " >
                                {/* {?.toDate()} */}
                                {tweet.createdAt.toDate()}
                            </Moment>
                        </div>
                        <hr className="my-2 border-[#6E767D]" />
                        <div>
                            <button className='flex space-x-1 text-sm'>
                                <h1>
                                    1
                                </h1>
                                <h1 className="text-gray-500">
                                    Likes
                                </h1>
                            </button>
                        </div>
                        <hr className="my-2 border-[#6E767D]" />
                        <div className='flex justify-evenly'>

                            <button className="input-icons">
                                <ChatAlt2Icon className="input-btn h-[20px]" />
                            </button><button className="input-icons">
                                <ReplyIcon className='input-btn h-[20px]" />' />
                            </button>
                            <button className="input-icons">
                                <HeartIcon className='input-btn h-[20px] hover:bg-black"  />' />
                            </button>
                            <button className="input-icons">
                                <UploadIcon className='input-btn h-[20px]"  />' />
                            </button>
                        </div>
                        <hr className="my-2 border-[#6E767D]" />
                        <div className='flex space-x-4 items-center'>
                            <div className='w-[10%]  self-start'>
                                <div className='rounded-full hover:opacity-90 cursor-pointer h-12 w-12 items-center flex justify-center ' tabIndex={0}>
                                    <Image height={"100%"} width={"100%"} src={session?.user?.image} tabIndex={0} alt="notfound" className='nav-icons rounded-full h-10' />
                                </div>

                            </div>
                            <div className='w-[75%]'>
                                <ReactTextareaAutosize value={comment} onChange={(e) => setcomment(e.target.value)} className='w-full bg-transparent outline-none' placeholder="Tweet your reply" />
                            </div>
                            <button onClick={() => makereply(tweet.screen_name, comment)} className="w-[15%]  bg-blue-500 px-2 py-1 rounded-full disabled:bg-blue-300" disabled >
                                Reply
                            </button>
                        </div>
                        <hr className="my-2 border-[#6E767D]" />
                        <div className="mt-5 text-xl font-bold text-gray-300">
                            comment are disabled at the moment.
                        </div>
                    </div> : <>loading...</>
                }
            </main>
            <LowerNav />
        </div>
    )
}

export default Singletweet