import { Inter } from 'next/font/google'
import "./globals.css";

import Nav from "@/components/nav";

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className={`bg-gradient-to-r from-[#58C3E0] to-[#FB7EC4] ${inter.className}`}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
