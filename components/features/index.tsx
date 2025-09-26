import React from 'react'
import { Card } from '../ui/card'
import { Drama, MessageCircle, Star } from 'lucide-react'

const Features = () => {
  return (
     <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center p-6 bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">O'zbek tilida</h3>
            <p className="text-gray-600">Barcha ma'lumotlar o'zbek tilida va madaniyatiga mos</p>
          </Card>

          <Card className="text-center p-6 bg-gradient-to-br from-amber-50 to-white border-2 border-amber-200">
            <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Drama className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Turli uslublar</h3>
            <p className="text-gray-600">Komediya, drama, romantika va boshqa uslublarda ma'lumotlar</p>
          </Card>

          <Card className="text-center p-6 bg-gradient-to-br from-purple-50 to-white border-2 border-purple-200">
            <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Bepul va tez</h3>
            <p className="text-gray-600">Hech qanday ro'yxatdan o'tmasdan darhol foydalaning</p>
          </Card>
        </div>
  )
}

export default Features