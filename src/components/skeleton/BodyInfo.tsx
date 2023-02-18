import styles from '@/styles/Home.module.css'
import Header from '@/components/Header'
import Button from '@/components/Button'
import Image from 'next/image'
import NavBar from '@/components/NavBar'

import { Inter } from '@next/font/google'
const inter = Inter({ subsets: ['latin'] })


export default function BodyInfo() {
    return(
      <main className= "flex flex-col justify-between items-center p-24 min-h-screen">
        <div className="justify-center items-center flex h-24 w-full bg-pink-100">
          <NavBar/>
          
          <div className="hidden hover:"></div>
          
          
        </div>
        <div className="justify-center flex min-h-screen w-full bg-pink-200">Box 1</div>
        <div className="justify-center flex min-h-screen w-full bg-pink-400">Box 2</div>  
      </main>
    )
}

