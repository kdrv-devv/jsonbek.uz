import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import { Github } from 'lucide-react'

const Header = () => {
  return (
    <header className="sticky top-0 left-0 z-50 w-full border-b border-gray-100 bg-white/70 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 bg-gray-900 rounded-xl flex items-center justify-center group-hover:rotate-6 transition-transform duration-300">
            <Image src="/jsonbek-img.png" width={28} height={28} alt='Jsonbek Logo' className="rounded-sm" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-lg font-bold leading-none tracking-tight text-gray-900">
              Jsonbek
            </h1>
            <span className="text-[10px] text-gray-500 font-medium uppercase tracking-wider">Placeholder</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="/guide" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
            Qo'llanma
          </Link>
          <Link href="/api/posts" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
            API
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link href="https://github.com/kdrv-devv/jsonbek.uz" target="_blank">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Github className="w-5 h-5 text-gray-600" />
            </Button>
          </Link>
          <Button size="sm" className="hidden sm:flex rounded-full bg-gray-900 hover:bg-gray-800 text-white px-5">
            <Link href="/guide">Boshlash</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Header