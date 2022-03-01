import { ChatAlt2Icon, DotsCircleHorizontalIcon, DotsHorizontalIcon, HeartIcon, ReplyIcon, UploadIcon } from '@heroicons/react/outline'
import { collection, deleteDoc, doc, onSnapshot, orderBy, query } from 'firebase/firestore'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { db } from '../firebase'

const TweetsSection = () => {
    const router = useRouter()
    const [Alltweets, setAlltweets] = useState<any>([])
    const AlltweetsRef = collection(db, "tweets")
    const { data: session }: any = useSession()
    const username = session && (session?.user?.email).split("@")[0]

    useEffect(() => {
        // let querydaata = query(Alltweets, orderBy('desc'))
        let q = query(collection(db, "tweets"), orderBy('createdAt', "desc"))
        onSnapshot(q, (snapshot) => setAlltweets(snapshot.docs))

    }, [])
    console.log(Alltweets)

    const DotsButtonClicked = async (id: any, screen_name: any) => {
        console.log("delete button clicked", id)
        // delete the tweet
        // check if username matches to username in data() from firebase


        if (username === screen_name) {
            alert("Access granted")
            let docRef = doc(db, 'tweets', id)
            await deleteDoc(docRef)
        } else {
            alert('Access denied')

        }

    }
    return (
        <div>
            {
                Alltweets ? (
                    Alltweets.map((alltweets: any) => {
                        return (
                            <div key={alltweets.id} className="text-white ">
                                <div className="flex space-x-2 ">



                                    <div className="w-10% self-start " onClick={() => router.push(
                                        `/${alltweets.data().screen_name}`
                                    )}>
                                        <div className="rounded-full hover:opacity-90 cursor-pointer h-12 w-12 items-center flex justify-center " tabIndex={0}>
                                            <img src={alltweets.data().profile_image_url} alt="" className="h-full  rounded-full w-full  " />
                                        </div>
                                    </div>



                                    <div className="self-center flex flex-col w-full ">
                                        <div className="flex justify-between w-full ">
                                            <h1 className="text-sm font-bold">
                                                {alltweets.data().name} <span className='text-xs text-gray-500 opacity-70 font-medium'>
                                                    @{alltweets.data().screen_name} {''}
                                                </span>
                                                <span>
                                                    <span className="text-xs text-gray-500 opacity-80 font-medium">
                                                        · {''}
                                                    </span>
                                                    <span className="text-xs text-gray-500 opacity-80 font-medium">
                                                        2h
                                                    </span>
                                                </span>
                                            </h1>
                                            <button className="input-icons">
                                                <DotsHorizontalIcon onClick={() => DotsButtonClicked(alltweets.id, alltweets.data().screen_name)} className='input-btn h-[20px] w text-blue-500 cursor-pointer' />

                                            </button>
                                        </div>
                                        <div >
                                            <p onClick={() => router.push(
                                                `/${alltweets.data().screen_name}/tweet/${(alltweets.id)}`)} className='text-sm' >
                                                {console.log(alltweets.id)}
                                                {alltweets.data().tweet}
                                            </p>
                                            <img src="" alt="" />
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
                                        </div>
                                    </div>
                                </div>






                                <hr className="my-3 border-[#6E767D]" />

                            </div>
                        )
                    })
                ) : (
                    <h1>
                        loading...
                    </h1>
                )
            }
        </div>
    )
}

export default TweetsSection