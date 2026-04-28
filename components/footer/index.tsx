import React from 'react'
import Link from 'next/link'
import { Github, Send, Mail } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xs">JB</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Jsonbek</span>
            </Link>
            <p className="text-gray-500 max-w-sm leading-relaxed mb-6">
              O'zbek dasturchilar uchun maxsus yaratilgan, milliy madaniyatimizni o'zida aks ettirgan bepul JSON API xizmati.
            </p>
            <div className="flex items-center gap-4">
              <Link href="https://t.me/kadirovs_blogg" target="_blank" className="p-2 rounded-full bg-gray-50 text-gray-400 hover:bg-blue-50 hover:text-blue-600 transition-all">
                <Send className="w-5 h-5" />
              </Link>
              <Link href="https://github.com/kdrv-devv/jsonbek.uz" target="_blank" className="p-2 rounded-full bg-gray-50 text-gray-400 hover:bg-gray-200 hover:text-gray-900 transition-all">
                <Github className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6">Resurslar</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><Link href="/guide" className="hover:text-blue-600 transition-colors">Qo'llanma</Link></li>
              <li><Link href="/api/posts" className="hover:text-blue-600 transition-colors">Maqolalar</Link></li>
              <li><Link href="/api/users" className="hover:text-blue-600 transition-colors">Foydalanuvchilar</Link></li>
              <li><Link href="/api/products" className="hover:text-blue-600 transition-colors">Mahsulotlar</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6">Jamoa</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li>
                <span className="block text-gray-400 text-xs mb-1 uppercase tracking-wider font-semibold">Action & Backend</span>
                <Link href="https://t.me/bekhruzbek_io" target="_blank" className="text-gray-900 hover:text-blue-600 font-medium">Bekhruzbek BRO</Link>
              </li>
              <li>
                <span className="block text-gray-400 text-xs mb-1 uppercase tracking-wider font-semibold">Frontend & G'oya</span>
                <Link href="https://t.me/kadirovs_blogg" target="_blank" className="text-gray-900 hover:text-blue-600 font-medium">KadirovJS</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>© { new Date().getFullYear() } Jsonbek. Barcha huquqlar himoyalangan.</p>
          <p className="flex items-center gap-1">
            Takliflar uchun: <Link href="https://t.me/kadirovs_blogg" className="text-blue-500 hover:underline">@kadirovJS</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer