import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
         <header className="sticky top-0 left-0 shadow-lg   z-50 border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link href={"/"} className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-gray-200 to-gray-400 rounded-lg flex items-center justify-center">
                    <Image src={"jsonbek-img.png"} width={30} height={30} alt='Jsonbekni rasmi'/>
              </div>
              <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-amber-600 bg-clip-text text-transparent">
                Jsonbek
              </h1>
            </Link>
            <div className="flex items-center space-x-6">
              <Link href="/guide" className="  text-xl  hover:border-b hover:border-b-green-500  sm:text-2xl font-[600] bg-gradient-to-r from-blue-600 to-amber-600 bg-clip-text text-transparent">
                Qo'llanma
              </Link>
           
            </div>
          </nav>
        </div>
      </header>
          
  )
}

export default Header