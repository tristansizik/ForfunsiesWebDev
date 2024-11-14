import NavBarTitle from '@/components/NavBarTitle'
import { Inter } from '@next/font/google'

import dynamic from 'next/dynamic'
const RectangleSketch  = dynamic(
  () => import('../sketches/RectangleSketch'), {
  ssr:false 
})

const inter = Inter({ subsets: ['latin'] })


export default function BodyInfo() {
    return(
      <main className= "flex flex-col justify-between items-center px-3% py-1% min-h-screen space-y-1 animate-fade-in-p7">
        <NavBarTitle color={'bg-red-cedar-chest'}/>
        <div className="justify-center flex min-h-screen w-full bg-green-200 rounded-12px">
          <RectangleSketch/>
        </div>
        <div className="justify-center flex min-h-screen w-full bg-green-400 rounded-12px">Box 2</div>
          
        
      </main>
    )
}