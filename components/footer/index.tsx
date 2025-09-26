import React from 'react'

const Footer = () => {
  return (
    <footer className="relative z-10 bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-amber-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">JB</span>
            </div>
            <h3 className="text-xl font-bold">Jsonbek</h3>
          </div>
          <p className="text-gray-400 mb-4">O'zbek dasturchilar uchun yaratilgan bepul JSON API xizmati</p>
          <p className="text-gray-400 mb-4"> Taklif va murojaat uchun : <a className='text-blue-500' target='_blank' href='https://t.me/kadirovs_blogg'>@kadirovJS</a> </p>
          <p className="text-sm text-gray-500">© 2025 Jsonbek. Barcha huquqlar himoyalangan.</p>
        </div>
      </footer>
  )
}

export default Footer