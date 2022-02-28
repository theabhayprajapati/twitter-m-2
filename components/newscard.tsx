import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const Newscard = ({ title, name, image, url }: any) => {
    const router = useRouter()
    // console.log(trending[0])
    return (
        <div className='relative  cursor-pointer border-b border-gray-800 ' onClick={() => router.push(url)}>
            <img src={image} className='h-56 w-full ' alt="" />
            <div className="absolute bottom-0 bg-gradient-to-t from-black to-transparent ">
                <div className="flex">
                    <h1 className='text-sm font-semibold  px-3'>
                        {name}
                    </h1>
                    <h1 className='text-sm font-bold'>
                        {"- "}LIVE
                    </h1>
                </div>
                <h1 className='text-xl font-bold  px-3'>{title}</h1>

            </div>
        </div>
    )
}

export default Newscard