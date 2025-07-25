import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Jsonbek Placeholder',
  keywords: ['json', 'placeholder', 'uzbek', 'jsonbek','fake api' , 'fake beckend' , 'free beckend'],
  authors: [{ name: 'Uzbekify', url: 'https://uzbekify.com' }],
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
        <link rel="icon" href="../public/favicon.png" />
      </head>
      <body>{children}</body>
    </html>
  )
}
