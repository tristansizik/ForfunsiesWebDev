import NavBarTitle from '@/components/NavBarTitle'
import FootBar from '@/components/FootBar'
import React, { useEffect } from 'react'
import ThreeJS from '@/components/sketches/ThreeJsSketch'
import Image from 'next/image'


export default function BodyInfo() {
    return(
      <main className= "min-h-screen flex flex-col items-center  bg-coral animate-fade-in-p7">
        <NavBarTitle/>
          <div className="flex h-screen w-full bg-vivid-red justify-center items-center">
            <div className="h-[80%] w-[80%] bg-coral">
              <div className= "grid grid-cols-2 justify-center items-center h-full w-full p-10">
                <div className = "flex flex-col col-span-1 h-full w-full">
                  <p className= "flex w-full font-Helvetica text-3xl text-dark-grayish-blue items-top justify-left pl-10 py-5">ABOUT ME</p>
                  <p className= "flex w-full font-Helvetica text-base text-dark-grayish-blue items-top justify-left pl-10 py-5">
                  I&apos;m a multifaceted artist and innovator from San Diego with a gift for adapting to whatever needs to be done.<br/><br/>
I have a burning love for learning, which motivates me to push past fear in pursuit of my goals. I&apos;m skilled at problem-solving and passionate about creating meaningful human connections—I truly believe that community can accelerate any passion or dream.<br/><br/>
This love for learning has inspired me to take on the traits of a jack-of-all-trades. I earned a degree in Computer Engineering from San Diego State University, and my journey has led me to develop skills as a Software Engineer, Photographer, Graphic Designer, Web Developer, Business Marketer, Music Producer, and DJ.<br/><br/>
When I&apos;m not tinkering at my desk, you&apos;ll find me training for a half marathon, surfing, snowboarding, or thrifting to express myself through fashion.<br/><br/>
If you're interested in working together, have questions about any of my hobbies, or simply want to crowd my inbox, feel free to reach out via the Contact page.
              
                  </p>
                </div>
                <div className = "flex col-span-1 bg-rusty-black h-full">
                </div>
              </div>
              
            </div>  

          {/* <div className="grid grid-rows-1 flex my-20 h-50% w-full flex flex-row place-content-center place-items-center bg-blue-pastel">
            <div className="flex row-span-1 w-full justify-center items-center">
              <Image src='/images/MySelfie.jpg' alt="Me :)" height={300} width={200}/>
            </div>
            <div className="flex row-span-1 w-full font-Saira text-s static bg-orange-100 w-full md:w-50%">
              <p>
              Howdy! Thanks for checking out my page. I&apos;m a software dev that loves to touch grass. Amongst my personal projects of learning front end development,
              I take quests to camp with friends, am currently interested in traveling East in North America, and I love to snowboard (currently a Ikon Pass Holder).
              I really want to get involved in some cool open source projects, so please contact me if you&apos;d like someone with the following skillsets...
              </p>
            </div>
          </div> */}

          {/* <div className='divide-y h-50% w-full bg-rusty-black'>
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
          </div> */}
        </div>         
        

        <div className="justify-center items-center sticky bottom-5% h-20 w-full rounded-12px">
          <FootBar/>    
        </div>
      </main>
    )
}



