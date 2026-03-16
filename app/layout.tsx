import type { Metadata } from 'next'
import { Space_Grotesk, Syne } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-space-grotesk'
});

const syne = Syne({ 
  subsets: ["latin"],
  variable: '--font-syne'
});

export const metadata: Metadata = {
  title: 'SABA CODERS',
  description: 'A full-stack developer focused on building scalable digital experiences through clean architecture and refined design.',
  icons: {
    icon: [
      {
        url: '/images/logo.png',
      },
    ],
    apple: '/images/logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} ${syne.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
