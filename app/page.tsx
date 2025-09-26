"use client"
import { Toaster } from "@/components/ui/toaster"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Copy, Star, Users, MessageCircle, Heart, Laugh, Drama } from "lucide-react"
import Link from "next/link"
import Features from "@/components/features"
import { useMyToast } from "@/components/toasts"

export default function HomePage() {
  const [selectedStyle, setSelectedStyle] = useState("comedy")
  const [animatePattern, setAnimatePattern] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatePattern((prev) => !prev)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const styles = [
    {
      id: "comedy",
      name: "Komediya",
      icon: Laugh,
      color: "bg-yellow-500",
      description: "Kulgili va qiziqarli ma'lumotlar",
    },
    {
      id: "drama",
      name: "Drama",
      icon: Drama,
      color: "bg-purple-500",
      description: "Hissiyotli va chuqur ma'lumotlar",
    },
    { id: "romance", name: "Romantika", icon: Heart, color: "bg-pink-500", description: "Sevgi va muhabbat haqida" },
    {
      id: "adventure",
      name: "Sarguzasht",
      icon: Star,
      color: "bg-blue-500",
      description: "Qiziqarli sayohat hikoyalari",
    },
  ]

  const endpoints = [
    { path: "/posts", description: "Maqolalar", count: "80 ta" },
    { path: "/comments", description: "Izohlar", count: "80 ta" },
    { path: "/albums", description: "Albomlar", count: "100 ta" },
    { path: "/products", description: "Maxsulotlar", count: "80 ta" },
    { path: "/todos", description: "Vazifalar", count: "200 ta" },
    { path: "/users", description: "Foydalanuvchilar", count: "10 ta" },
  ]

  const showToast = useMyToast()

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-amber-50 relative overflow-hidden">
      {/* Animated Uzbek Pattern Background */}

      <div className="absolute inset-0 opacity-5">
        <div
          className={`w-full h-full bg-no-repeat bg-center transition-transform duration-3000 ${animatePattern ? "scale-105 rotate-1" : "scale-100 rotate-0"
            }`}
          style={{
            backgroundImage: `url("./jsonbek-img.png")`,
          }}
        />
      </div>

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-4 py-12">
        <Toaster />
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center  flex-col sm:flex-row space-x-2 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-amber-500 rounded-xl flex items-center justify-center animate-pulse">
              <span className="text-white font-bold text-lg">JB</span>
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-amber-600 bg-clip-text text-transparent">
              Jsonbek Placeholder
            </h1>
          </div>

          <p className="text-xl text-gray-600 mb-4 max-w-2xl mx-auto">
            Test va prototiplash uchun bepul va ishonchli API xizmati
          </p>

          <p className="text-lg text-gray-500 mb-8">O'zbek madaniyati bilan boyitilgan • Turli xil uslublar bilan</p>

          <div className="flex items-center justify-center space-x-8 text-sm text-gray-500 mb-8">
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4" />
              <span>Oyiga ~1 million so'rov</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-4 h-4" />
              <span>100% bepul</span>
            </div>
          </div>

          {/* Style Selector */}
          <Card className="max-w-md mx-auto mb-8 border-2 border-green-400 bg-gradient-to-r from-blue-50 to-amber-50">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg text-center">Ma'lumot uslubini tanlang</CardTitle>
            </CardHeader>
            <CardContent>
              <Select value={selectedStyle} onValueChange={setSelectedStyle}>
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {styles.map((style) => (
                    <SelectItem key={style.id} value={style.id}>
                      <div className="flex items-center space-x-2">
                        <style.icon className="w-4 h-4" />
                        <span>{style.name}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <p className="text-sm text-gray-500 mt-2 text-center">
                {styles.find((s) => s.id === selectedStyle)?.description}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* API Endpoints */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Mavjud API yo'nalishlari</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {endpoints.map((endpoint, index) => (
              <Card
                key={endpoint.path}
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-green-500 bg-gradient-to-br from-green-100 to-green-200"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{endpoint.description}</CardTitle>
                    <Badge variant="secondary" className="bg-amber-100 text-amber-800">
                      {endpoint.count}
                    </Badge>
                  </div>
                  <CardDescription className="font-mono text-blue-600">
                    https://jsonbek.uz/api{endpoint.path}?style={selectedStyle}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border border-green-400 hover:bg-blue-50 bg-transparent"
                    onClick={() => {
                      navigator.clipboard.writeText(`https://jsonbek.uz/api${endpoint.path}?style=${selectedStyle}`)
                      showToast(`${endpoint.description.toUpperCase()} endpointi nusxalandi `)
                    }}
                  >
                    <Copy className="w-4 h-4 mr-2" />
                    Nusxalash
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Example Usage */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Foydalanish misoli</h2>

          <Tabs defaultValue="fetch" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="fetch">Fetch API</TabsTrigger>
              <TabsTrigger value="axios">Axios</TabsTrigger>
              <TabsTrigger value="curl">cURL</TabsTrigger>
            </TabsList>

            <TabsContent value="fetch">
              <Card>
                <CardContent className="p-6">
                  <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
                    <code>{`fetch('https://jsonbek.uz/api/posts?style=${selectedStyle}')
  .then(response => response.json())
  .then(json => console.log(json))`}</code>
                  </pre>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="axios">
              <Card>
                <CardContent className="p-6">
                  <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
                    <code>{`axios.get('https://jsonbek.uz/api/posts?style=${selectedStyle}')
  .then(response => {
    console.log(response.data);
  });`}</code>
                  </pre>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="curl">
              <Card>
                <CardContent className="p-6">
                  <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
                    <code>{`curl -X GET "https://jsonbek.uz/api/posts?style=${selectedStyle}" \\
     -H "Accept: application/json"`}</code>
                  </pre>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Features */}
        <Features />

      </main>

    </div>
  )
}
