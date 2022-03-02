import React from 'react'
import { ArrowLeftIcon, SparklesIcon, XIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/router'
import { signIn, signOut, useSession } from 'next-auth/react';
const HeaderSection = ({ title, hidden, tweets }: any) => {
  const router = useRouter()
  const { data: session } = useSession()
  return (

    <header className={` sticky z-50 opacity-95 top-0 py-1 ${session ? 'h-14' : "h-full"} text-white font-bold  justify-start items-center`}>
      <div className='flex justify-between items-center h-full'>
        <div className='flex items-center gap-2'>
          <button onClick={() => router.back()}>
            <ArrowLeftIcon className={`h-5 text-blue-400 ${hidden ? null : "hidden"}`} /></button><button>
            {title}
          </button>
        </div>
        <div>
          <button>
            <SparklesIcon className='h-5' />
          </button>
        </div>
      </div>
      {
        !session &&
        (<div className='flex justify-items-stretch justify-around font-bold my-5'>
          <button onClick={() => signIn()} className='border w-full rounded-full text-blue-500 border-gray-700 bg-transparent hover:bg-gray-900'>
            <h1 className='font-semibold'>
              Login
            </h1>
          </button>
          <button onClick={() => signIn()} className='border w-full rounded-full text-white  border-gray-700 bg-blue-500 hover:opacity-90'>
            <h1 className='font-semibold'>
              Sign Up
            </h1>
          </button>
        </div>)
      }


    </header>

  )
}

export default HeaderSection