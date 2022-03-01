import { BellIcon, ChatAlt2Icon, HomeIcon, SearchIcon, SparklesIcon, UserIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

const LowerNav = () => {
    const router = useRouter()
    const { data: session }: any = useSession()
    const [image, setimage] = useState('')
    useEffect(() => {
        setimage(session?.user?.image)
    }, [session])
    // give random avatar iamge link
    const avatar = image ? image : `https://avatars.githubusercontent.com/u/8957173?v=4`

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
            <button onClick={() => router.push("/Account")} className='lowernav-btn '>

                <Image height={"28px"} width={"28px"} src={avatar} tabIndex={0} alt="notfound" className=' rounded-full p-1 hover:ring-blue-500 focus:ring-blue-500  ring-2 ring-white' />

            </button>
        </div>
    )
}

export default LowerNav