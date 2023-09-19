import NavBar from '@/components/NavBar'
import FootBar from '@/components/FootBar'
import React, { useEffect } from 'react'
import ThreeJS from '@/components/sketches/ThreeJsSketch'


export default function BodyInfo() {
    return(
      <main className= "flex flex-col justify-between items-center min-h-screen bg-black animate-fade-in-p7">
        <NavBar/>         
        <div className=" h-1/2 w-full bg-rusty-black rounded-12px flex flex-row">
          <div className = "place-content-start w-100 bg-neon-green">
            <p className="font-Saira text-xl md:tracking-normal text-neon-green">Hi! I&apos;m Tristan Sizik, a Software Developer who tries his Best</p>
          </div>
          <div className = "place-content-center w-full">
            <ThreeJS/>
          </div>
          
        </div>

        <div className="place-content-center place-items-center h-50% w-full bg-blue-pastel flex flex-row gap-x-2">
          <div className="static h-80 w-80">
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



