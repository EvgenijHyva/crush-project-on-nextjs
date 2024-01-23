import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import MainHeader from '@/components/main-header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'App',
  description: 'Learning nextjs with practice',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <MainHeader />

        {children}
      </body>
    </html>
  )
}
