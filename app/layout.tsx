import type React from "react"
import { GoogleTagManager } from "@next/third-parties/google"
import Script from "next/script"
import "./globals.css"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="dark bg-[#0B1120]">
      <head>
        <title>Infidelity Finder | Escaneo Profundo</title>
        <GoogleTagManager gtmId="GTM-WQ3KMTB3" />

        {/* EasyTracker */}
        <Script
          src="https://etr.tindercheck.xyz/assets/easyt.js"
          strategy="beforeInteractive"
          async
        />

      </head>
      <body className="bg-[#0B1120]">{children}</body>
    </html>
  )
}

export const metadata = {
  title: "Infidelity Finder - Perfiles Ocultos Expuestos",
  description: "Verifica si tu pareja oculta algo en redes sociales y aplicaciones de citas.",
  generator: "v0.app",
}
