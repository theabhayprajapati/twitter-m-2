import React from 'react'
import { BellIcon, BookmarkIcon, CollectionIcon, DotsCircleHorizontalIcon, DotsHorizontalIcon, HashtagIcon, HomeIcon, InboxIcon, UserIcon } from '@heroicons/react/outline'
// import { signIn, signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import Image from 'next/image'
const Navigation = () => {

    // use session
    // const { data: session }:any = useSession<any>()
    const router = useRouter()
    const session = {
        user: {
            id: '1',
            name: 'John Doe',
            image: 'https://avatars2.githubusercontent.com/u/175727?s=460&u=e8d9c8f8b9f8f9c8f9c8f9c8f9c8f9c8f9c8f9c&v=4',
            email: 'theabhayprajapati@gmail.com'
        }
    }
    console.log(session)
    const username = session?.user?.email.split("@")[0]


    return (

        <div className='m-2'>
            <div className='h-screen flex flex-col justify-between'>
                <div>
                    <header className='ml-2 h-10 space-x-2 flex justify-start items-center'>
                        <button className='flex justify-center items-center rounded-full h-12 w-12 hover:opacity-80 hover:bg-gray-900'>
                            <img src="/SVG/logowhite.svg" alt="" className="h-7 w-7 " />
                        </button>
                    </header>
                    {/* make home, explore, navigate, message , bookmarl button*/}
                    <main className='text-white  flex flex-col justify-between'>
                        <div className="mt-2 text-xl font-bold">
                            <button onClick={() => router.push("/Explore")} className='nav-button'>
                                <HomeIcon className="nav-icons " />
                                <h1>
                                    Home
                                </h1>
                            </button>
                            <button onClick={() => router.push("/Explore")} className='nav-button'>
                                <HashtagIcon className="nav-icons" />
                                <h1>
                                    Explore
                                </h1>
                            </button>
                            <button onClick={() => router.push("/Explore")} className='nav-button'>
                                <BellIcon className="nav-icons " />
                                <h1>
                                    Notifications
                                </h1>
                            </button>
                            <button onClick={() => router.push("/Explore")} className='nav-button'>
                                <InboxIcon className="nav-icons " />
                                <h1>
                                    Messages
                                </h1>
                            </button>
                            <button onClick={() => router.push("/Explore")} className='nav-button'>
                                <BookmarkIcon className="nav-icons " />
                                <h1>
                                    Bookmarks
                                </h1>
                            </button>
                            <button onClick={() => router.push("/Explore")} className='nav-button'>
                                <CollectionIcon className="nav-icons" />
                                <h1>
                                    Lists
                                </h1>
                            </button>
                            <button onClick={() => router.push("/Explore")} className="nav-button">
                                <UserIcon className="nav-icons" />
                                <h1>
                                    Profile
                                </h1>
                            </button>
                            <button onClick={() => router.push("/Explore")} className="nav-button">
                                <DotsCircleHorizontalIcon className="nav-icons" />
                                <h1>
                                    More
                                </h1>
                            </button>
                            <button onClick={() => console.log("signin button")} className='flex mt-2 mx-2 w-[70%] items-center justify-center mr-24 nav-button bg-blue-500 font-bold text-sm hover:opacity-95 hover:bg-blue-400 '>
                                <h1>
                                    Tweet
                                </h1>
                            </button>

                        </div>

                    </main>
                </div>
                <div className='text-white text-xs w-full'>
                    {
                        session ? (
                            <button className='nav-button w-full'>

                                <Image height={"40px"} width={"40px"} src={session?.user?.image} tabIndex={0} alt="notfound" className='nav-icons rounded-full h-10' />
                                <div className='flex justify-between w-full items-center'>
                                    <div className='flex flex-col text-left rounded-full px-3 py-1' tabIndex={0}>
                                        <h1 className='text-white'>
                                            {session?.user?.name || 'username'}
                                        </h1>
                                        <p className='text-[#6E767D]'>
                                            {username || '@email'}
                                        </p>

                                    </div>
                                    <DotsHorizontalIcon tabIndex={0} className="nav-icons h-5 rounded-full" />
                                </div>
                            </button>
                        ) : (
                            <button onClick={() => console.log("Add singin button")} className='nav-button w-full'>
                                <div className='flex flex-col text-left'>
                                    <h1 className='text-white'>
                                        Sign in
                                    </h1>

                                </div>
                            </button>

                        )
                    }
                </div>
            </div>
            <div></div>
        </div>
    )
}

export default Navigation