import './../globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Arturo Aguilera González',
  description: 'Portafolio de Arturo Aguilera González. Desarrollo Web, Inteligencia Artificial y Análisis de Malware. Explora mis proyectos y habilidades.',
  openGraph: {
    url: "https://arturoaguilera.es",
    siteName: "Arturo Aguilera González",
    description: 'Portafolio de Arturo Aguilera González. Desarrollo Web, Inteligencia Artificial y Análisis de Malware. Explora mis proyectos y habilidades.',
    images: [{ url: "https://www.arturoaguilera.es/images/projects/portfolio.png" }]
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
