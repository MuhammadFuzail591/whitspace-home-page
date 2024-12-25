import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'

export const metadata: Metadata = {
  title: 'whitespace | M Fuzail',
  description: 'By Muhammad Fuzail'
}

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700']
})

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`w-full h-full flex items-center justify-center flex-col ${inter.className}`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
