import { ArrowLeftIcon } from '@heroicons/react/outline'
import { collection, doc, getDoc, onSnapshot, orderBy, query } from 'firebase/firestore'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Explore from '../../components/Explore'
import HeaderSection from '../../components/Header'
import LowerNav from '../../components/lowernavigation'
import Navigation from '../../components/Navigation'
import Profilepage from '../../components/Profilepage'
// import Explore from '../../components/Exploresection'
// import Navigation from '../../components/Navigationsection'
import { db } from '../../firebase'

const UserIndex = () => {
    const router = useRouter()
    const pid = router.query
    const [userData, setuserData] = useState<any>({})
    let username = router.query.user

    useEffect(() => {
        console.log(pid)
        // let ColRef = doc(db, "users", "theabhayprajapati")
        console.log(username, "USERNAME")
        const userData = async (username: any) => {
            const docRef = doc(db, "users", username);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setuserData(docSnap.data());
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }

        username && userData(username)

    }, [router])
    console.log(userData)

    return (
        <div className="bg-black font-Monsertat ">
            {
                username && userData.name ? (
                    <Head>
                        <title>
                            {userData.name} / Twitter
                        </title>

                        {/* add a favicon */}
                        <link rel="icon" href="/SVG/twitterblue.svg" />
                    </Head>
                ) :
                    (
                        <Head>
                            <title>
                                Loading....
                            </title>
                            <link rel="icon" href="/SVG/twitterblue.svg" />
                        </Head>
                    )
            }

            <main className='max-w-6xl mx-auto  h-screen w-screen  grid grid-cols-1 md:grid-cols-4'>
                <div className="hidden md:inline-grid ">
                    <div>
                        <Navigation />
                    </div>
                </div>
                <div className="border-2  border-gray-900 col-span-2  overflow-y-auto w-full">
                    <Profilepage />
                </div>
                <div className="hidden md:inline-grid">
                    <Explore />
                </div>
            </main>
            <LowerNav />
        </div>
    )
}

export default UserIndex
