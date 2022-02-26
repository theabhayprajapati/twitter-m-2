import { BellIcon, ChatAlt2Icon, HomeIcon, SearchIcon, SparklesIcon, UserIcon } from '@heroicons/react/outline'
// import { useSession } from 'next-auth/react'
import React from 'react'

const LowerNav = () => {
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
        <div className=" bottom-0 text-white fixed h-14 bg-black  border-2 md:hidden shadow-lg flex justify-evenly w-full items-center">
            <button className='hover:scale-95 active:scale-95 rounded-full h-9 w-9   flex justify-center items-center focus:text-blue-500 focus:scale-95 focus:shadow-lg'>

                <HomeIcon className="h-7 w-7  " />

            </button>
            <button className='hover:scale-95 active:scale-95 rounded-full h-9 w-9   flex justify-center items-center focus:scale-95 focus:text-blue-500'>
                <SearchIcon className="h-7" />
            </button>
            <button className='hover:scale-95 active:scale-95 rounded-full h-9 w-9   flex justify-center items-center focus:scale-95 focus:text-blue-500'>
                <BellIcon className="h-7" />
            </button>
            <button className='hover:scale-95 active:scale-95 rounded-full h-9 w-9  flex justify-center items-center  focus:scale-95 focus:text-blue-500 border'>

                <img src={image} alt="notfound" className='border h-7 rounded-full w-7' />

            </button>
        </div>
    )
}

export default LowerNav