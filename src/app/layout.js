import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Arturo Aguilera González - Portfolio',
  description: 'Portfolio of Arturo Aguilera González. Malware analysis, artificial intelligence, and web development with a minimalist and functional approach. Explore my projects and skills.',
  openGraph: {
    url: "https://arturoaguilera.es",
    siteName: "Buche - Tu app de gestión de pedidos",
    description: "Gestiona fácilmente tus pedidos con Buche, la mejor herramienta para establecimientos.",
    images: [{ url: "https://arturoaguilera.es/projects/portfolio.jpg" }]
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
