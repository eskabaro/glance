import type { Metadata } from 'next'
import { Audiowide, Roboto } from 'next/font/google'
import { Header } from '@/components/header/Header'
import { Tabs } from '@/components/bottom-tab/Tabs'
import './globals.scss'

const audiowide = Audiowide({ subsets: ["latin"], weight: ["400"] })

const roboto = Roboto({ subsets: ["latin"], weight: ["300", "400", "500", "700", "900"] })

export const metadata: Metadata = {
  title: 'Glance',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ua">
      <body className={roboto.className}>
        <Header font={audiowide} />
        <div style={{ paddingLeft: "5%", paddingRight: "5%" }}>
          <div style={{ maxWidth: "1280px", margin: "auto", height: "100%" }}>
            {children}
          </div>
        </div>
        <Tabs />
      </body>
    </html>
  )
}
