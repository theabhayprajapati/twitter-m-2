// import { useSession } from 'next-auth/react'
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
const Nonsigninmembers = () => {
    const { data: session } = useSession()
    return (
        <div>
            
        </div>
    )
}

export default Nonsigninmembers