import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'Jsonbek Placeholder',
  keywords: ['json', 'placeholder', 'uzbek', 'jsonbek', 'fake api', 'fake beckend', 'free beckend'],
  authors: [{ name: 'Behruzbek', url: 'https://t.me/richard_9757' }, { name: "Sarvarbek", url: "https://t.me/sarvarbek_qodirovv" }],
  creator: 'Uzbekify',
  description: 'Frontend dasturchilar uchun sun\'iy beckend.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="uz">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </head>
      <body>
        <Header />
        <main>
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  )
}
