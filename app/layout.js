import { Analytics } from '@vercel/analytics/react'
import { Inconsolata } from 'next/font/google'

import './ui/global.css'
import Footer from './ui/Footer'
import Header from './ui/Header'
import { Providers } from './providers'

const inconsolata = Inconsolata({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL('https://calebwang.info'),
  title: {
    default: 'Caleb J. Wang',
    template: '%s | Caleb J. Wang',
  },
  description:
    'Caleb J. Wang is a computer science Ph.D. candidate at Northwestern University researching network measurements and Internet infrastructure.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Caleb J. Wang',
    description:
      'Computer science Ph.D. candidate focused on network measurements and Internet infrastructure.',
    url: 'https://calebwang.info/',
    siteName: 'Caleb J. Wang',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Caleb J. Wang',
    description:
      'Computer science Ph.D. candidate focused on network measurements and Internet infrastructure.',
  },
  icons: {
    icon: [
      { url: '/static/favicons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/static/favicons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/static/favicons/favicon.ico', rel: 'shortcut icon' },
    ],
    apple: '/static/favicons/apple-touch-icon.png',
  },
  manifest: '/static/favicons/site.webmanifest',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inconsolata.className} antialiased bg-white transition-colors duration-700 dark:bg-gray-700`}
      >
        <Providers>
          <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
            <div className="flex min-h-screen flex-col justify-between">
              <Header inconsolata={inconsolata} />
              <main className="mb-auto">{children}</main>
              <Footer />
            </div>
          </div>
          <Analytics />
        </Providers>
      </body>
    </html>
  )
}
