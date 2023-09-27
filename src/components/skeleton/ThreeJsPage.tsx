import NavBar from '@/components/NavBar'
import { Inter } from '@next/font/google'

import ThreeJS from '@/components/sketches/ThreeJsSketch'

const inter = Inter({ subsets: ['latin'] })

export default function BodyInfo() {
    return(
      <main className= "flex flex-col justify-between items-center px-3% py-1% min-h-screen space-y-1 animate-fade-in-p7">
        <NavBar color={'bg-red-cedar-chest'}/>

        <ThreeJS />
        <div className="w-full h-48 justify-center items-center ">
        <ThreeJS />
        </div>
        <ThreeJS />
        <ThreeJS />
        <div className="justify-center flex min-h-screen w-full bg-green-400 rounded-12px"></div>
      </main>
    )
}