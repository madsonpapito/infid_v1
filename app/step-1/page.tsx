"use client"

import { useEffect } from "react"
import { Search, Loader2 } from "lucide-react"

export default function Step1() {
  // El EasyTracker intercepta clics en elementos con la clase 'easyt-next-page'
  // En caso de acceso directo o redundancia, redireccionamos a la oferta
  const trackerUrl = "https://etr.tindercheck.xyz/trk/offer/1"

  useEffect(() => {
    // Pequeño delay para garantizar que el tracker cargue si es necesario
    const timer = setTimeout(() => {
      window.location.href = trackerUrl + window.location.search
    }, 1500)
    return () => clearTimeout(timer)
  }, [trackerUrl])

  return (
    <div className="min-h-screen bg-[#060b19] flex flex-col items-center justify-center p-4 text-white">
      <div className="w-full max-w-md text-center space-y-8 animate-in fade-in duration-700">
        <div className="inline-flex items-center justify-center p-4 bg-cyan-500/10 rounded-full border border-cyan-500/30 shadow-[0_0_20px_rgba(6,182,212,0.2)]">
          <Search className="w-10 h-10 text-cyan-400" />
        </div>
        
        <div className="space-y-4">
          <h1 className="text-2xl font-bold tracking-tight uppercase">
            Iniciando Escaneo...
          </h1>
          <p className="text-slate-400 text-sm">
            Conectando a las bases de datos de redes sociales de forma anónima.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4">
          <Loader2 className="w-8 h-8 text-cyan-500 animate-spin" />
          <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
            Protocolo de seguridad activo
          </p>
        </div>

        {/* Enlace estático para que el crawler de EasyTracker valide la oferta */}
        <div className="opacity-0 pointer-events-none absolute bottom-0">
          <a href={trackerUrl} className="easyt-next-page">
            Enlace de Activación de EasyTracker
          </a>
        </div>
      </div>
    </div>
  )
}
