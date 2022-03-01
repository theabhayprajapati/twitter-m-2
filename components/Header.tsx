import React from 'react'
import { ArrowLeftIcon, SparklesIcon, XIcon } from '@heroicons/react/outline'

const HeaderSection = ({ title, hidden, tweets }: any) => {

  return (

    <header className={` sticky z-50 opac ity-95 top-0 h-14 text-white font-bold flex justify-start items-center`}>
      <div className="flex w-full justify-between space-x-4">
        <button>
          <ArrowLeftIcon className={`input-btn h-[20px] ${!hidden ? 'hidden' : null}`} />
        </button>
        <h1 className={`font-bold ${!hidden ? null : 'flex-1'}`}>{title}</h1>
        <SparklesIcon className={`nav-icons ${hidden ? 'hidden' : null}`} />
      </div>
      {
        hidden &&
        <button className="text-white">
          <h1>
            {tweets}
          </h1>
        </button>
      }
    </header>

  )
}

export default HeaderSection