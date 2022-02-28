import React from 'react'
import { SparklesIcon, XIcon } from '@heroicons/react/outline'

const HeaderSection = ({ title }: any) => {
  return (

    <header className={`mx-5 sticky backdrop-blur-lg  opacity-80 top-0 h-10 text-white font-bold flex justify-start items-center`}>
      <button className="flex w-full justify-between">
        <h1 className="font-bold">{title}</h1>
        <SparklesIcon className='nav-icons' />
      </button>
    </header>

  )
}

export default HeaderSection