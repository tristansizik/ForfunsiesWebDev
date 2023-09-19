import NavBar from '@/components/NavBar'
import FootBar from '@/components/FootBar'
import React, { useEffect } from 'react'
import ThreeJS from '@/components/sketches/ThreeJsSketch'


export default function BodyInfo() {
    return(
      <main className= "min-h-screen flex flex-col items-center bg-black animate-fade-in-p7">
        <NavBar/>         
        <div className="relative h-50 w-full inset-y-0 my-8 bg-rusty-black">
          <div className = "absolute w-1/2 inset-y-0 left-0 place-content-start bg-neon-green">
            <p className="font-Saira text-xl md:tracking-normal text-neon-green">Hi! I&apos;m Tristan Sizik, a Software Developer who tries his Best</p>
          </div>
          <div className = "w-full place-content-center ">
            <ThreeJS/>
          </div>         
        </div>

        <div className="relative top-0 h-50% w-full flex flex-row place-content-center place-items-center bg-blue-pastel">
          <div className="relative h-80 w-80">
            <img src='./images/MySelfie.jpg' alt="Me :)" />
          </div>
          <div className="font-Saira static h-80 w-80 bg-orange-100">
            <p>
            Howdy! Thanks for checking out my page. I&apos;m a software dev that loves to touch grass. Amongst my personal projects of learning front end development,
            I take quests to camp with friends, am currently interested in traveling East in North America, and I love to snowboard (currently a Ikon Pass Holder).
            I really want to get involved in some cool open source projects, so please contact me if you&apos;d like someone with the following skillsets...
            </p>
          </div>
        </div>

        <div className="justify-center items-center sticky bottom-5% h-24 w-full rounded-12px">
          <FootBar/>    
        </div>
      </main>
    )
}



