import NavBar from '@/components/NavBar'

import { Inter } from '@next/font/google'
const inter = Inter({ subsets: ['latin'] })


export default function BodyInfo() {
    return(
      <main className= "flex flex-col justify-between items-center p-5% min-h-screen space-y-1">
        <div className="justify-center items-center sticky top-3% h-24 w-full bg-pink-100 rounded-12px">
          <NavBar/>    
        </div>
        <div className="justify-center flex min-h-screen w-full bg-green-200 rounded-12px">Box 1</div>
        <div className="justify-center flex min-h-screen w-full bg-green-400 rounded-12px">Box 2</div>
          
        
      </main>
    )
}

