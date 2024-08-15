'use client'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Provider } from 'react-redux'

import store from '@/reducer/store'

const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'Arke Atomic Design To-Do List',
//   description: 'Project to measure Gabriel\'s capability for the selection process.',
// }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>
          {children}
        </Provider>
      </body>
    </html>
  )
}
