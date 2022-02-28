import { useRouter } from 'next/router'
import React from 'react'

const Normalnews = ({ name, title, image, url }: any) => {
    const router = useRouter()
    return (
        <div onClick={() => router.push(url)} className="flex items-center  text-white m-3">
            <div className="w-[70%] flex flex-col ">
                <div className="flex">
                    <h1 className="text-xs font-thin text-gray-500">{name}{' '}</h1>
                    <h1 className="text-xs font-thin text-gray-500"> &#8226; LIVE</h1>
                </div>
                <h1 className="text-xs font-normal">{title && title}</h1>

            </div>
            <div className="w-[30%]">
                <img src={image} alt="" className="h-full w-full rounded-lg" />
            </div>
        </div>
    )
}

export default Normalnews