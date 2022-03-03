import React from 'react'

const Loadingbar = ({width}:any) => {
    return (

        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className="bg-blue-600 h-2.5 rounded-full" style={{width: width}}></div>
        </div>

    )
}

export default Loadingbar