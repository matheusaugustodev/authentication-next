import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar/Navbar'
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Chat Next',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
        <body className='bg-zinc-950'>
          <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
            <Navbar/>
            <hr className='white'/>
            {children}
            <Toaster />
          </ThemeProvider>
        </body>
    </html>
  )
}
