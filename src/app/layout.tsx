// src/app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Daniel Rosillo - Software Developer',
  description: 'Portfolio de desarrollador especializado en SAP UI5 y aplicaciones web modernas',
  keywords: ['desarrollador', 'SAP UI5', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'desarrollo web', 'web developer', 'ui5', 'SAP'],
  authors: [{ name: 'Daniel Rosillo Barnés' }]
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}