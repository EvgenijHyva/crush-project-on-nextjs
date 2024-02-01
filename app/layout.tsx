import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import MainHeader from '@/components/main-header/main-header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Food app',
  description: 'Website based on typescript nextjs 14, website content is about meals',
  referrer: "origin-when-cross-origin",
  keywords: ["meal", "meals", "food", "food-app", "app", "food-template"],
  creator: "Evgeny Hyvärinen",
  authors: [{ name: "Maximilian Schwarzmüller", url: "https://www.udemy.com/user/maximilian-schwarzmuller/" }, { name: "Evgeny Hyvärinen" }],
  publisher: "Evgeny Hyvärinen",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
    url: false,
    date: false
  }
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
