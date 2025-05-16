"use client"

import { CarouselComponent } from '@/components/Carousal'
import Link from 'next/link'
import { useAuth } from '@clerk/nextjs'
import { useEffect } from 'react'
import { useUser } from '@clerk/nextjs'

export default function Home() {
  const { userId } = useAuth()
  const { user } = useUser()

  useEffect(() => {
    if (userId != null && user != null) {
      const sendRequest = async () => {
        const result = await fetch('/api/user', {
          method: 'POST',
          body: JSON.stringify({
            userId,
            name: user.fullName,
            email: user.primaryEmailAddress?.emailAddress,
            imageUrl: user.imageUrl
              ? user.imageUrl
              : 'https://picsum.photos/200',
          }),
        })
      }
      sendRequest()
    }
  }, [userId, user])

  return (
    <main className="px-10 flex justify-between items-center mt-20 max-tablet:flex-col-reverse max-tablet:gap-10 mb-10">
      <div className="flex flex-col gap-10 max-tablet:ml-14 max-mobile:max-w-72 max-mobile:ml-0 ">
        <div className="flex flex-col gap-4">
          <div className="overflow-hidden">
            <h1 className="font-bold text-6xl max-desktop:text-5xl max-laptop:text-4xl animate-moveUp transition-all ease-in-out duration-700">
              KARIBUNI NYOTE Track
            </h1>
          </div>
          <div className="overflow-hidden">
            <h1 className="font-bold text-6xl max-desktop:text-5xl max-laptop:text-4xl animate-moveUp transition-all ease-in-out duration-700">
              your Mental <span className="text-blue-600">Health</span>
            </h1>
          </div>
        </div>

        <div className="overflow-hidden">
          <div className="font-medium text-xl max-laptop:text-lg animate-moveDown transition-all ease-in-out duration-700 max-w-lg max-laptop:max-w-sm space-y-4">
            <p>
              YobraApp is a powerful application built to empower psychiatrists. Hii si app ya kawaida—ni rafiki yako wa kiakili, ikikusaidia kila siku kuishi kwa utulivu na kuelewa hisia zako polepole.
            </p>
            <p>
              Through every click and every check-in, our dedicated health team is walking with you—hatua kwa hatua—ensuring your mind gets the same care and attention as your body. Hospitali yetu iko hapa kukusupport, mradi ukubali matibabu yetu, uamini mchakato, na ujifungue kwa uponyaji wa kweli.
            </p>
            <p>
              Karibu sana kwa YobraApp—nyumbani kwa afya ya akili, where healing meets understanding, na kila siku ni nafasi mpya ya kuanza upya. Welcome to a softer space, a brighter mind, and a better you. Pole pole tu, utapona. 🌱🧠
            </p>
          </div>
        </div>


<div className="flex items-center space-x-4">
  <Link href="/home"><button className="p-3 bg-blue-500 rounded-md text-white border-2 border-blue-500 hover:bg-white hover:text-blue-500 font-bold transition">Get Started (Anza Hapa)</button></Link>
  <a href="https://yobihapp.vercel.app/" target="_blank" rel="noopener noreferrer"><button className="p-3 bg-blue-500 rounded-md text-white border-2 border-blue-500 hover:bg-white hover:text-blue-500 font-bold transition">Students Click (Wanafunzi)</button></a>
</div>








      </div>

      <div className="flex justify-center items-center mr-10 max-tablet:mr-0">
        <CarouselComponent />
      </div>
    </main>
  )
}
