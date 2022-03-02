import Head from 'next/head'
import React, { useEffect, useRef, useState } from 'react'
import HeaderSection from './Header'
import LowerNav from './lowernavigation'
import { useSession, signIn, signOut } from "next-auth/react"
import Nonsigninmembers from './nonsigninmembers'
import { CalendarIcon, ChartBarIcon, EmojiHappyIcon, GlobeIcon, LocationMarkerIcon, PhotographIcon, XIcon } from '@heroicons/react/outline'
import { db } from '../firebase'
import { addDoc, collection, doc, serverTimestamp, setDoc } from 'firebase/firestore'
import ReactTextareaAutosize from 'react-textarea-autosize'
import Image from 'next/image'

const Inputfield = () => {

    const { data: session }: any = useSession<any>()
    console.log(session)

    console.log(new Date().getSeconds(), "TIME")

    // ?username
    const username = session?.user?.username

    const image = session?.user?.image

    const imageinputRef = useRef<any>()
    const [userinputtweet, setuserinputtweet] = useState<any>()
    const [imagePreview, setImagePreview] = useState<any>('')
    const [imageFile, setImageFile] = useState<any>('')
    const [tweetbtnstate, settweetbtnstate] = useState(false)


    // ? USEFFEDT FOR GETTING USERS DATA:--




    useEffect(() => {
        if (imageFile) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setImagePreview(reader.result)

            }
            reader.readAsDataURL(imageFile)

        } else {
            setImagePreview(null)
        }
    }, [imageFile])
    const [allusers, setallusers] = useState()

    const submittweet = async () => {
        let tweet = userinputtweet
        let inputimage = imagePreview
        settweetbtnstate(true)
        
        await setDoc(doc(db, "users", username), {
            name: session.user.name,
            createdAt: serverTimestamp(),
            screen_name: username,
            profile_image_url: session.user.image,
        })
        await addDoc(collection(db, "users", username, 'tweets'), {
            name: session.user.name,
            createdAt: serverTimestamp(),
            screen_name: username,
            tweet: tweet,
            profile_image_url: session.user.image,
        })
        await addDoc(collection(db, 'tweets'), {
            name: session.user.name,
            createdAt: serverTimestamp(),
            screen_name: username,
            tweet: tweet,
            image: inputimage,
            profile_image_url: session.user.image,
            email: session.user.email,

        })
        settweetbtnstate(false)
        setuserinputtweet('')
    }
    const ref = useRef(null)



    return (
        <div className='text-white mx-3 flex md:space-x-2 space-x-4 border-b-[.5px] border-[#6E767D] pb-3'>
            <div className='w-[10%]  self-start'>
                <div className='rounded-full hover:opacity-90 cursor-pointer h-12 w-12 items-center flex justify-center ' tabIndex={0}>
                    <Image height={"100%"} width={"100%"} src={session?.user?.image} tabIndex={0} alt="notfound" className='nav-icons rounded-full h-10' />
                </div>
            </div>


            <div className='w-[90%]  self-center'>
                <div className=''>
                    <ReactTextareaAutosize value={userinputtweet} onChange={(e) => setuserinputtweet(e.target.value)} className='w-full bg-transparent outline-none' placeholder="What's Happenning" />
                    <div className='relative '>
                        <img src={imagePreview} tabIndex={0} alt="" className='object-cover  object-center rounded-2xl' />
                        {
                            imagePreview && <button className='m-3 input-icons h-6  w-6 absolute top-0' onClick={() => { setImageFile(null) }}>
                                <XIcon className=' bg-gray-700 h-6 rounded-full ' />
                            </button>
                        }
                    </div>
                </div>

                <button className='flex px-2  hover:bg-blue-600 hover:bg-opacity-30 transition transform duration-200 text-xs items-center rounded-full '>
                    <GlobeIcon className="nav-icons h-4 text-blue-500 text-xs" />
                    <h1 className='text-blue-500 font-bold'>
                        Everyone can reply
                    </h1>
                </button>
                <hr className="my-3 border-[#6E767D]" />
                <div className='flex justify-between items-center mt-2'>
                    <div className='flex justify-between items-center gap-1'>
                        <button className='flex justify-center items-center rounded-full h-8 w-8 hover:opacity-80 hover:bg-gray-900 '>
                            <PhotographIcon className="input-btn" onClick={() => { imageinputRef.current.click(); }} />
                            {/* make a inpyt that only accepts iamges */}
                        </button>
                        <input type="file" accept='image/*' className="hidden" ref={imageinputRef}
                            onChange={(event: any) => {
                                const file = event.target.files[0]
                                if (file) {
                                    setImageFile(file)
                                } else {
                                    setImageFile(null)
                                }
                            }}

                        />
                        <button className="input-icons">
                            <h1 className='text-[5px] border-[1.4px]  rounded-sm p-1 text-blue-500 border-blue-500'>
                                GIF
                            </h1>
                        </button>
                        <button className="input-icons">
                            <ChartBarIcon className="input-btn h-[20px] rotate-90" />
                        </button>
                        <button className="input-icons">
                            <EmojiHappyIcon className="input-btn h-[20px]" />
                        </button>
                        <button className="input-icons">
                            <CalendarIcon className="input-btn h-[20px]" />
                        </button>
                        <button className="input-icons">
                            <LocationMarkerIcon className="input-btn h-[20px]" />
                        </button>
                    </div>
                    <button disabled={tweetbtnstate} onClick={() => submittweet()} className="bg-blue-500 hover:bg-blue-600 font-bold px-4 py-1 rounded-full disabled:bg-blue-200">
                        Tweet
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Inputfield