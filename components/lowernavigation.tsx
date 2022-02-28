import { BellIcon, ChatAlt2Icon, HomeIcon, SearchIcon, SparklesIcon, UserIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/router'
// import { useSession } from 'next-auth/react'
import React from 'react'

const LowerNav = () => {
    const router = useRouter()
    // const { data: session } = useSession<any>()
    const session = {
        user: {
            id: '1',
            name: 'John Doe',
            image: 'https://avatars2.githubusercontent.com/u/175727?s=460&u=e8d9c8f8b9f8f9c8f9c8f9c8f9c8f9c8f9c8f9c&v=4',
            email: 'theabhayprajapati@gmail.com'
        }
    }
    const image = session?.user?.image || ''
    return (
        <div className="bottom-0 text-white fixed h-14 bg-black z-50 border-t-[.5px] border-gray-800 md:hidden shadow-lg flex justify-evenly w-full items-center">
            <button onClick={() => router.push("/")} className='lowernav-btn'>

                <HomeIcon className="h-7 w-7  " />

            </button>
            <button onClick={() => router.push("/Explore")} className='lowernav-btn'>
                <SearchIcon className="h-7" />
            </button>
            <button onClick={() => router.push("/Notification")} className='lowernav-btn'>
                <BellIcon className="h-7" />
            </button>
            <button onClick={() => router.push("/Account")} className='lowernav-btn'>

                <img src={image} alt="notfound" className='border h-7 rounded-full w-7' />

            </button>
        </div>
    )
}

export default LowerNav