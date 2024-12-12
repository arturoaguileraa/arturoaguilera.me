import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Arturo Aguilera González - Portfolio',
  description: 'Portfolio of Arturo Aguilera González: a professional in malware analysis, artificial intelligence, and web development with a minimalist and functional approach. Explore my projects and skills.',
  // Aquí agregamos los metadatos Open Graph para la previsualización
  openGraph: {
    title: 'Arturo Aguilera González',
    description: 'Portfolio of Arturo Aguilera González: a professional in malware analysis, artificial intelligence, and web development with a minimalist and functional approach. Explore my projects and skills.',
    images: [
      {
        url: '/projects/portfolio.jpg',  // La imagen debe estar en la carpeta 'public'
        width: 1200,             // Tamaño recomendado para la previsualización
        height: 630,             // Tamaño recomendado
        alt: 'Arturo Aguilera Portfolio',  // Descripción de la imagen
      },
    ],
    url: 'https://arturoaguilera.es',  // Tu URL
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
