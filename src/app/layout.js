import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Arturo Aguilera González',
  description: 'Portfolio of Arturo Aguilera González. Web Development, Artificial Intelligence, and Malware Analysis. Explore my projects and skills.',
  openGraph: {
    url: "https://arturoaguilera.es",
    siteName: "Arturo Aguilera González",
    description: 'Portfolio of Arturo Aguilera González. Web Development, Artificial Intelligence, and Malware Analysis. Explore my projects and skills.',
    images: [{ url: "https://www.arturoaguilera.es/images/projects/portfolio.png" }]
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
