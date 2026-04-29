"use client"
import { Toaster } from "@/components/ui/toaster"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Copy, Star, Users, MessageCircle, Heart, Laugh, Drama, Check, Terminal, Rocket, Github } from "lucide-react"
import Link from "next/link"
import Features from "@/components/features"
import { useMyToast } from "@/components/toasts"
import { cn } from "@/lib/utils"

export default function HomePage() {
  const [selectedStyle, setSelectedStyle] = useState("comedy")
  const [copiedPath, setCopiedPath] = useState<string | null>(null)

  const styles = [
    {
      id: "comedy",
      name: "Komediya",
      icon: Laugh,
      color: "text-yellow-500",
      bg: "bg-yellow-50",
      border: "border-yellow-200",
      description: "Kulgili va qiziqarli ma'lumotlar",
    },
    {
      id: "drama",
      name: "Drama",
      icon: Drama,
      color: "text-purple-500",
      bg: "bg-purple-50",
      border: "border-purple-200",
      description: "Hissiyotli va chuqur ma'lumotlar",
    },
    { 
      id: "romance", 
      name: "Romantika", 
      icon: Heart, 
      color: "text-pink-500", 
      bg: "bg-pink-50",
      border: "border-pink-200",
      description: "Sevgi va muhabbat haqida" 
    },
    {
      id: "adventure",
      name: "Sarguzasht",
      icon: Star,
      color: "text-blue-500",
      bg: "bg-blue-50",
      border: "border-blue-200",
      description: "Qiziqarli sarguzashtlar",
    },
  ]

  const endpoints = [
    { path: "/posts", description: "Maqolalar", count: "80 ta", icon: MessageCircle },
    { path: "/comments", description: "Izohlar", count: "80 ta", icon: MessageCircle },
    { path: "/albums", description: "Albomlar", count: "100 ta", icon: MessageCircle },
    { path: "/products", description: "Mahsulotlar", count: "80 ta", icon: Rocket },
    { path: "/todos", description: "Vazifalar", count: "200 ta", icon: Check },
    { path: "/users", description: "Foydalanuvchilar", count: "10 ta", icon: Users },
  ]

  const showToast = useMyToast()

  const handleCopy = (path: string, fullUrl: string) => {
    navigator.clipboard.writeText(fullUrl)
    setCopiedPath(path)
    showToast(`${path.replace("/", "").toUpperCase()} nusxalandi`)
    setTimeout(() => setCopiedPath(null), 2000)
  }

  return (
    <div className="min-h-screen bg-[#fafafa] relative overflow-hidden font-sans">
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-100/50 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-amber-100/50 blur-[120px]" />
        <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] rounded-full bg-purple-100/30 blur-[120px]" />
      </div>

      <main className="relative z-10 container mx-auto px-4 py-16 sm:py-24">
        <Toaster />
        
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium mb-8">
            <Badge variant="secondary" className="bg-blue-600 text-white border-none hover:bg-blue-700">Yangi</Badge>
            <span>O'zbek madaniyati bilan boyitilgan API</span>
          </div>

          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-gray-900 mb-6">
            Loyiha uchun <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-amber-600 bg-clip-text text-transparent">
              100% Tekin Beckend
            </span>
          </h1>

          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Test va prototiplash uchun bepul, ishonchli va O'zbek tilidagi ma'lumotlarga ega API xizmati.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <Button size="lg" className="rounded-full px-8 bg-gray-900 hover:bg-gray-800 text-white" asChild>
              <Link href="/guide">Boshlash</Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 bg-white/50 backdrop-blur-sm" asChild>
              <Link href="https://github.com/kdrv-devv/jsonbek.uz" target="_blank" className="flex items-center gap-2">
                GitHub-da ko'rish
              </Link>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span>Oyiga ~1M+ so'rov</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-500" />
              <span>100% Bepul</span>
            </div>
          </div>
        </div>

        <div className="mb-24">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Ma'lumot uslubini tanlang</h2>
            <p className="text-gray-500">API javoblari tanlangan uslubga qarab o'zgaradi</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {styles.map((style) => (
              <button
                key={style.id}
                onClick={() => setSelectedStyle(style.id)}
                className={cn(
                  "relative group p-4 rounded-2xl border-2 transition-all duration-300 text-left overflow-hidden",
                  selectedStyle === style.id 
                    ? "border-gray-900 bg-white shadow-xl -translate-y-1"
                    : "border-gray-100 bg-white/50 hover:border-gray-300 hover:bg-white"
                )}
              >
                <div className={cn(
                  "w-10 h-10 rounded-xl flex items-center justify-center mb-3 transition-colors",
                  selectedStyle === style.id ? style.bg : "bg-gray-50"
                )}>
                  <style.icon className={cn("w-5 h-5", selectedStyle === style.id ? style.color : "text-gray-400")} />
                </div>
                <h3 className="font-bold text-gray-900">{style.name}</h3>
                <p className="text-xs text-gray-500 mt-1 line-clamp-1">{style.description}</p>
                {selectedStyle === style.id && (
                  <div className="absolute top-2 right-2">
                    <div className="w-2 h-2 rounded-full bg-blue-600" />
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">API yo'nalishlari</h2>
              <p className="text-gray-500">Loyihangiz uchun kerakli resursni tanlang</p>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-lg text-blue-700 text-sm font-mono border border-blue-100">
              <span className="text-blue-400">GET</span>
              <span>/api/{selectedStyle}/...</span>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {endpoints.map((endpoint) => {
              const fullUrl = `https://jsonbek.uz/api${endpoint.path}?style=${selectedStyle}`
              return (
                <Card
                  key={endpoint.path}
                  className="group relative overflow-hidden border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 bg-white/70 backdrop-blur-sm"
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="p-2.5 rounded-xl bg-gray-50 text-gray-600 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                        <endpoint.icon className="w-5 h-5" />
                      </div>
                      <Badge variant="outline" className="font-medium bg-white">
                        {endpoint.count}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl mt-4">{endpoint.description}</CardTitle>
                    <CardDescription className="font-mono text-sm break-all pt-2 text-gray-400 group-hover:text-blue-500 transition-colors">
                      {endpoint.path}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button
                      variant="secondary"
                      className="w-full justify-between bg-gray-50 hover:bg-gray-100 text-gray-700 border-none group/btn"
                      onClick={() => handleCopy(endpoint.path, fullUrl)}
                    >
                      <span className="flex items-center gap-2 truncate text-xs font-mono">
                        {fullUrl}
                      </span>
                      {copiedPath === endpoint.path ? (
                        <Check className="w-4 h-4 text-green-600 shrink-0" />
                      ) : (
                        <Copy className="w-4 h-4 text-gray-400 group-hover/btn:text-gray-600 shrink-0" />
                      )}
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        <div className="mb-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex p-3 rounded-2xl bg-amber-50 text-amber-600 mb-4">
                <Terminal className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Qanday foydalanish kerak?</h2>
              <p className="text-gray-500">Bir necha soniya ichida loyihangizga ulang</p>
            </div>

            <Tabs defaultValue="fetch" className="w-full">
              <div className="flex items-center justify-center mb-8">
                <TabsList className="bg-gray-100/50 p-1 rounded-xl backdrop-blur-sm border border-gray-200/50">
                  <TabsTrigger value="fetch" className="rounded-lg px-6 data-[state=active]:bg-white data-[state=active]:shadow-sm">Fetch</TabsTrigger>
                  <TabsTrigger value="axios" className="rounded-lg px-6 data-[state=active]:bg-white data-[state=active]:shadow-sm">Axios</TabsTrigger>
                  <TabsTrigger value="curl" className="rounded-lg px-6 data-[state=active]:bg-white data-[state=active]:shadow-sm">cURL</TabsTrigger>
                </TabsList>
              </div>

              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
                
                <TabsContent value="fetch" className="mt-0 outline-none">
                  <div className="relative rounded-xl overflow-hidden bg-[#0a0a0a] border border-white/10 shadow-2xl">
                    <div className="flex items-center justify-between px-4 py-2 bg-white/5 border-b border-white/5">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/40" />
                        <div className="w-3 h-3 rounded-full bg-amber-500/20 border border-amber-500/40" />
                        <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/40" />
                      </div>
                      <div className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">JavaScript</div>
                    </div>
                    <pre className="p-6 overflow-x-auto text-sm sm:text-base leading-relaxed">
                      <code className="text-gray-300 font-mono">
                        <span className="text-blue-400">fetch</span>(<span className="text-green-400">'https://jsonbek.uz/api/posts?style={selectedStyle}'</span>)<br />
                        {"  "}.<span className="text-blue-400">then</span>(response =&gt; response.<span className="text-blue-400">json</span>())<br />
                        {"  "}.<span className="text-blue-400">then</span>(json =&gt; console.<span className="text-blue-400">log</span>(json))
                      </code>
                    </pre>
                  </div>
                </TabsContent>

                <TabsContent value="axios" className="mt-0 outline-none">
                  <div className="relative rounded-xl overflow-hidden bg-[#0a0a0a] border border-white/10 shadow-2xl">
                    <div className="flex items-center justify-between px-4 py-2 bg-white/5 border-b border-white/5">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/40" />
                        <div className="w-3 h-3 rounded-full bg-amber-500/20 border border-amber-500/40" />
                        <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/40" />
                      </div>
                      <div className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">JavaScript</div>
                    </div>
                    <pre className="p-6 overflow-x-auto text-sm sm:text-base leading-relaxed">
                      <code className="text-gray-300 font-mono">
                        <span className="text-purple-400">import</span> axios <span className="text-purple-400">from</span> <span className="text-green-400">'axios'</span>;<br /><br />
                        axios.<span className="text-blue-400">get</span>(<span className="text-green-400">'https://jsonbek.uz/api/posts?style={selectedStyle}'</span>)<br />
                        {"  "}.<span className="text-blue-400">then</span>(response =&gt; &#123;<br />
                        {"    "}console.<span className="text-blue-400">log</span>(response.data);<br />
                        {"  "}&#125;);
                      </code>
                    </pre>
                  </div>
                </TabsContent>

                <TabsContent value="curl" className="mt-0 outline-none">
                  <div className="relative rounded-xl overflow-hidden bg-[#0a0a0a] border border-white/10 shadow-2xl">
                    <div className="flex items-center justify-between px-4 py-2 bg-white/5 border-b border-white/5">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/40" />
                        <div className="w-3 h-3 rounded-full bg-amber-500/20 border border-amber-500/40" />
                        <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/40" />
                      </div>
                      <div className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Shell</div>
                    </div>
                    <pre className="p-6 overflow-x-auto text-sm sm:text-base leading-relaxed">
                      <code className="text-gray-300 font-mono">
                        <span className="text-blue-400">curl</span> -X GET <span className="text-green-400">"https://jsonbek.uz/api/posts?style={selectedStyle}"</span> \<br />
                        {"     "}-H <span className="text-green-400">"Accept: application/json"</span>
                      </code>
                    </pre>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>

        <Features />

        <div className="text-center bg-gray-900 rounded-3xl p-12 sm:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 blur-[100px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 blur-[100px] rounded-full" />
          
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6">Loyihangizni bugunoq boshlang</h2>
            <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
              Hech qanday ro'yxatdan o'tish yoki to'lov talab qilinmaydi. Shunchaki endpointdan nusxa oling va ishga tushing.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="rounded-full px-10 bg-white text-gray-900 hover:bg-gray-100 font-bold" asChild>
                <Link href="/guide">Hujjatlarni o'qish</Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-10 border-white/20 text-white bg-transparent hover:bg-white hover:text-gray-900 transition-colors" asChild>
                <Link href="https://t.me/kadirovs_blogg" target="_blank" className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  Yordam olish
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
