import "../../styles/globals.css"

export const metadata = {
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
        {children}
      </body>
    </html>
  )
}
