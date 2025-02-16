import type { Metadata } from "next";
import "./globals.css";

import Nav from "@/components/nav";

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-r from-[#58C3E0] to-[#FB7EC4]">
        <Nav />
        {children}
      </body>
    </html>
  );
}
