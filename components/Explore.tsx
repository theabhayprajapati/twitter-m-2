import { SearchIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const Explore = () => {
  const router = useRouter()
  const [trending, settrending] = useState<any>([])
  //  fetch data from newsapi.org
  useEffect(() => {
    fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=e3553a68781d448b87d4ebd624b4b888`)
      .then(res => res.json())
      .then(data => {
        settrending(data.articles);
      })

  }, [])
  console.log(trending[0]?.title);

  return (
    <div className='m-5 relative'>
      <header tabIndex={0} className='h-10 sticky top-0  flex justify-start bg-[#202327] rounded-full items-center'>
        <div className='flex px-2 items-center gap-2 text-xs text-[#6E767D]'>
          <SearchIcon className='h-5 ' />
          <input type="search" placeholder="Search Twitter" className='bg-transparent outline-none focus:text-white' />
        </div>
      </header>

      <main className='text-white rounded-3xl bg-[#202327] mt-1'>
        <div className="p-2  w-full ">
          <h1 className='font-bold text-sm mt-2'>
            What&apos;s Happening
          </h1>
          <div onClick={() => router.push(trending[0].url)} className='mt-4 cursor-pointer'>
            <div className='flex   cursor-pointer items-center space-x-2'>
              <h1 className='font-medium text-[#6e767d] text-xs'>
                {trending[0]?.source.name}
              </h1>
              <h1 className='font-medium text-[#6e767d] text-xs'>
                LIVE
              </h1>
            </div>
            <div className='flex items-center'>
              <h1 className='text-xs font-bold w-[60%]'>
                {(trending[0]?.title)}
              </h1>
              <div className=''>
                <img src={trending[0]?.urlToImage} className='items-start rounded-lg cursor-pointer h-full w-20 object-contain' alt="" />
              </div>
            </div>
          </div>
          <div className='mt-4'>
            <div className='flex items-center space-x-2'>
              <h1 className='font-medium text-[#6e767d] text-xs '>
                {trending[2]?.source.name}
              </h1>
              <h1 className='font-medium text-[#6e767d] text-xs'>
                LIVE
              </h1>
            </div>
            <div className='flex items-center'>
              <h1 className='text-xs font-bold w-[60%]'>
                {(trending[2]?.title)?.slice(0, 40)}
              </h1>
              <div className=''>
                <img src={trending[2]?.urlToImage} className='items-start rounded-lg cursor-pointer h-full w-20 object-contain' alt="" />
              </div>
            </div>
          </div>

          <div className='my-2'>
            <h1 className="text-xs font-bold">
              #{(trending[1]?.title)?.slice(0, 30)}
            </h1>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Explore