import { Inter } from 'next/font/google'
import './globals.css'
import '../styles/overrides.css';  // Make sure this is AFTER globals.css

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Chat Consultation',
  description: 'Anonymous chat consultation with complete privacy',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}