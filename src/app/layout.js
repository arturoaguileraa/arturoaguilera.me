import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Arturo Aguilera González - Portfolio',
  description: 'Portfolio of Arturo Aguilera González: a professional in malware analysis, artificial intelligence, and web development with a minimalist and functional approach. Explore my projects and skills.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
