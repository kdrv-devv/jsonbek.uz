import React from 'react'
import { Card } from '../ui/card'
import { Drama, MessageCircle, Star, Zap, Shield, Globe } from 'lucide-react'

const Features = () => {
  const features = [
    {
      title: "O'zbek tilida",
      description: "Barcha ma'lumotlar o'zbek tilida va milliy madaniyatimizga mos ravishda tayyorlangan.",
      icon: Globe,
      color: "text-blue-600",
      bg: "bg-blue-50"
    },
    {
      title: "Turli uslublar",
      description: "Komediya, drama, romantika va sarguzasht uslublarida ma'lumotlarni olish imkoniyati.",
      icon: Drama,
      color: "text-purple-600",
      bg: "bg-purple-50"
    },
    {
      title: "Bepul va ochiq",
      description: "Hech qanday ro'yxatdan o'tish yoki API kalitlarisiz mutlaqo bepul foydalaning.",
      icon: Star,
      color: "text-amber-600",
      bg: "bg-amber-50"
    },
    {
      title: "Yuqori tezlik",
      description: "Minimal kechikish va yuqori unumdorlik bilan ishlovchi zamonaviy infratuzilma.",
      icon: Zap,
      color: "text-green-600",
      bg: "bg-green-50"
    },
    {
      title: "Ishonchli",
      description: "99.9% uptime va har doim foydalanish uchun tayyor bo'lgan barqaror API xizmati.",
      icon: Shield,
      color: "text-red-600",
      bg: "bg-red-50"
    },
    {
      title: "Dasturchilar uchun",
      description: "Frontend dasturchilar o'z loyihalarini test qilishlari uchun eng qulay vosita.",
      icon: MessageCircle,
      color: "text-indigo-600",
      bg: "bg-indigo-50"
    }
  ]

  return (
    <div className="py-24 border-t border-gray-100">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Nima uchun Jsonbek?</h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Bizning xizmatimiz dasturchilarga o'z g'oyalarini tezroq amalga oshirishda yordam beradi.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="group p-8 rounded-3xl bg-white border border-gray-100 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300"
          >
            <div className={`w-12 h-12 ${feature.bg} ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
              <feature.icon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
            <p className="text-gray-600 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Features