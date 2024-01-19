import NavBarTitle from '@/components/NavBarTitle'
import FootBar from '@/components/FootBar'
import React, { useEffect } from 'react'
import ThreeJS from '@/components/sketches/ThreeJsSketch'
import Image from 'next/image'


export default function BodyInfo() {
    return(
      <main className= "min-h-screen flex flex-col items-center bg-black animate-fade-in-p7">
        <NavBarTitle/>         
        <div className="grid grid-cols-2 relative h-32 w-full inset-y-0 my-8">
          <div className = "col-span-1 flex inset-y-0 left-0 place-content-start bg-neon-green">
            <p className="flex w-full font-Hardigan text-3xl md:tracking-normal text-neon-green items-center justify-center">ABOUT ME</p>
          </div>
          <div className = "col-span-1 h-full flex bg-rusty-black">

          </div>
               
        </div>
        <div className = "flex w-full h-32 place-content-center ">
            <ThreeJS/>          
        </div>    

        <div className="grid grid-rows-1 flex my-20 h-50% w-full flex flex-row place-content-center place-items-center bg-blue-pastel">
          <div className="flex row-span-1 w-full justify-center items-center">
            <Image src='./images/MySelfie.jpg' alt="Me :)" className="h-48 md:h-25%"/>
          </div>
          <div className="flex row-span-1 w-full font-Saira text-s static bg-orange-100 w-full md:w-50%">
            <p>
            Howdy! Thanks for checking out my page. I&apos;m a software dev that loves to touch grass. Amongst my personal projects of learning front end development,
            I take quests to camp with friends, am currently interested in traveling East in North America, and I love to snowboard (currently a Ikon Pass Holder).
            I really want to get involved in some cool open source projects, so please contact me if you&apos;d like someone with the following skillsets...
            </p>
          </div>
        </div>

        <div className='divide-y h-50% w-full bg-rusty-black'>
          <div className=''>
              <h1 className='space-y-2 pb-8 pt-6 font-Hardigan text-3xl text-neon-green'>Projects</h1>
          </div>
          <div className=''>
              <ul className='divide-y'>
                <li className='py-10'>
                  <article>
                    <div className='space-y-3'>
                      <dl>
                        <dd className="text-base font-medium leading-6 text-neon-green">
                          <time dateTime="2023-12-23T00:00:00.000Z">
                            January 1, 2023
                          </time>
                        </dd>
                      </dl>
                    </div>
                  </article>
                </li>
                <li className='py-10'>
                  <article>
                  <div className='space-y-3'>
                      <dl>
                        <dd className="text-base font-medium leading-6 text-neon-green">
                          <time dateTime="2023-12-23T00:00:00.000Z">
                            January 1, 2023
                          </time>
                        </dd>
                      </dl>
                    </div>
                  </article>
                </li>
              </ul>
          </div>
        </div>

        <div className="justify-center items-center sticky bottom-5% h-20 w-full rounded-12px">
          <FootBar/>    
        </div>
      </main>
    )
}



