import React from 'react'
import { ArrowLeftIcon, SparklesIcon, XIcon } from '@heroicons/react/outline'

const HeaderSection = ({ title, hidden, tweets }: any) => {

  return (

    <header className={` sticky z-50 opac ity-95 top-0 h-14 text-white font-bold flex justify-start items-center`}>
      <div className="flex w-full justify-start space-x-4">
        <button>
          <ArrowLeftIcon className={`input-btn h-[20px] ${!hidden ? 'hidden' : null}`} />
        </button>
        <button className={`font-bold flex flex-col justify-start items-start ${hidden ? null : 'flex-1 self-start'}`}>
          <h1>
            {title}
          </h1>
          {
            tweets && <h2 className="text-xs text-gray-300 opacity-70 font-medium">
              {tweets} Tweets
            </h2>

          }
        </button>
        <SparklesIcon className={`nav-icons ${hidden ? 'hidden' : null}`} />
      </div>

    </header>

  )
}

export default HeaderSection