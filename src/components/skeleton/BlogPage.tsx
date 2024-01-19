import NavBarTitle from '@/components/NavBarTitle'
import { Inter } from '@next/font/google'
import Marquee from "react-fast-marquee"

import ThreeJS from '@/components/sketches/ThreeJsSketch'

const inter = Inter({ subsets: ['latin'] })

export default function BodyInfo() {
    return(
      <main className= "flex flex-col justify-between items-center px-3% py-1% min-h-screen space-y-1 animate-fade-in-p7">
        <NavBarTitle color={'bg-red-cedar-chest'}/>
        <div className="flex grid grid-cols-5 grid-rows-4 gap-1">
          <div className='col-start-1 row-start-1 col-span1'>
            <ThreeJS />
          </div>
          <div className='flex flex-col col-start-2 row-start-1 col-span-4 justify-center items-left'>
            <h1 className="font-Hardigan text-3xl animate-fade-in-p0 ease-in">Sup, Welcome to my Blog</h1>
            <p className="font-Saira ">A space where I can place my favorite these and those</p>
          </div>
          <div className='flex flex-col col-start-1 row-start-2 col-span-3 justify-center items-center'>
            <h1 className="font-Hardigan text-3xl animate-fade-in-p0 ease-in">My Favorite Music Artists</h1>
            <p className="font-Saira ">Currently: Jamie XX, Caribou, Maya Jane Coles, William Kiss</p>
          </div>
          <div className='col-start-4 row-start-2'>
          <ThreeJS />
          </div>
          <div className='flex grid grid-rows-subgrid grid-cols-subgrid col-start-1 row-start-3 col-span-2 row-span-2 justify-center'>
            <h1 className="flex row-start-1 col-start-1 col-span-2 font-Hardigan text-3xl animate-fade-in-p0 ease-in justify-center items-end">My Favorite Hobbies</h1>
            <p className="flex font-Saira row-start-2 col-start-1 col-span-2 justify-center">Snowboarding, Morning Jogs, Making Coffee, Web Development, Film Photography, and Making/Mixing Music</p>
          </div>
          <div className='col-start-3 row-start-3 row-span-2'>
          <ThreeJS />
          <ThreeJS />
          </div>
          <div className='flex grid grid-rows-subgrid grid-cols-subgrid col-start-4 row-start-3 col-span-2 row-span-2 justify-center'>
            <h1 className="flex row-start-1 col-start-1 col-span-2 font-Hardigan text-3xl animate-fade-in-p0 ease-in justify-center items-end">My Favorite Food</h1>
            <p className="flex font-Saira row-start-2 col-start-1 col-span-2 justify-center">Cioppino, American Currency, The Rich</p>
          </div>
        </div>
        
        <div className="flex grid grid-cols-3 grid-rows-3 grid-rows gap-3 justify-center w-full bg-green-400 rounded-12px">
          <div className='flex col-start-1 row-start-1 justify-center items-center font-Hardigan text-xl'>
            <p>Mixes that I&apos;m Proud of</p>
          </div>
          <div className='flex col-start-2 row-start-1 col-span-2 justify-center items-center'>
            <iframe width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1349917435&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
          </div>
          <div className='col-start-1 row-start-2 col-span-2 justify-center items-center'>
            <iframe width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/335282641&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
          </div>
          <div className='flex col-start-1 row-start-3 row-span-1 col-span-3 justify-center items-center font-Hardigan text-xl'>
          <Marquee speed={100}>
            <p>MOOOOOOOOOOOOOOOORE TO COOOOOOOOOOOME SOOOOOOOOOOOOOOON</p>
          </Marquee>
          </div>          
        </div>
      </main>
    )
}