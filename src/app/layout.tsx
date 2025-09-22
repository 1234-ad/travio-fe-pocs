import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Travio - Your Travel Companion',
  description: 'Discover amazing destinations, plan perfect trips, and create unforgettable memories',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}