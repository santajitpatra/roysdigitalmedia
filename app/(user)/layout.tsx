import Navbar from '@/components/Navbar'
import '../../styles/globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import Footer from '@/components/Footer'
import Providers from './providers'


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
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
