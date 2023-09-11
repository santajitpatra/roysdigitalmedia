import Navbar from '@/components/Navbar'
import '../../styles/globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import Footer from '@/components/Footer'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})
export const metadata: Metadata = {
  title: 'Roys Digital Media | Digital Marketing & Social Media Management',
  description: 'Roys Digital Media | Digital Marketing & Social Media Management',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
