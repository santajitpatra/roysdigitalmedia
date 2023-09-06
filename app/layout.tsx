import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import Footer from '@/components/Footer'



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
      <body>
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  )
}
