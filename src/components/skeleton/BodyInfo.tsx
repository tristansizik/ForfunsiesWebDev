import styles from '@/styles/Home.module.css'
import Header from '@/components/Header'
import Button from '@/components/Button'
import Image from 'next/image'
import NavBar from '@/components/NavBar'
import FootBar from '@/components/FootBar'

import { Inter } from '@next/font/google'
const inter = Inter({ subsets: ['latin'] })


export default function BodyInfo() {
    return(
      <main className= "flex flex-col justify-between items-center p-5% min-h-screen">
        <div className="justify-center items-center sticky top-3% h-24 w-full bg-pink-100 rounded-12px">
          <NavBar/>    
        </div>
        <div className="justify-center flex min-h-screen w-full bg-pink-200">Box 1</div>
        <div className="justify-center flex min-h-screen w-full bg-pink-400">Box 2</div>
          
        <div className="justify-center items-center sticky bottom-5% h-24 w-full rounded-12px">
          <FootBar/>    
        </div>
      </main>
    )
}

