"use client"

import {
  useState,
  useEffect
} from "react"
import {
  Search, ShieldCheck, Lock, Smartphone, Moon, Clock, HeartCrack,
  CheckCircle2, Star, MapPin, ChevronRight, Menu
} from 'lucide-react'
import Image from "next/image"
import { useRouter } from 'next/navigation'

export default function HomeWireframeMatch() {
  const router = useRouter();

  // Retention: Redirect to results page if already scanned
  useEffect(() => {
    const hasScanned = localStorage.getItem("has_scanned");
    if (hasScanned === "true") {
      const searchParams = window.location.search;
      window.location.href = `/results${searchParams}`;
    }
  }, []);

  // Tracking: Fire PageView for Facebook Landing Page View
  useEffect(() => {
    if (typeof window !== "undefined") {
      const searchParams = new URLSearchParams(window.location.search)
      const easytid = searchParams.get("easytid")

      if (easytid) {
        const scriptDomain = "https://etr.tindercheck.xyz"
        const postbackUrl = `${scriptDomain}/trk/postback?easytid=${easytid}&action=PageView&cb=${Date.now()}`

        const img = new window.Image()
        img.src = postbackUrl
      }
    }
  }, [])

  const handleStart = () => {
    const searchParams = typeof window !== 'undefined' ? window.location.search : '';
    router.push(`/step-2${searchParams}`);
  };

  return (
    <div className="min-h-[100dvh] bg-[#0B1120] text-white font-sans selection:bg-emerald-500/30">

      {/* HEADER / NAV (Implicit in style) */}
      <nav className="flex justify-between items-center p-6 container mx-auto absolute top-0 left-0 right-0 z-20">
        <div className="flex items-center gap-2 font-bold text-lg tracking-tight">
          <Search className="w-5 h-5 text-emerald-400" />
          <span>Infidelity Finder</span>
        </div>
        <div className="hidden md:flex gap-6 text-sm text-slate-400 font-medium">
          <a href="#" className="hover:text-white transition-colors">Inicio</a>
          <a href="#" className="hover:text-white transition-colors">Cómo Funciona</a>
          <a href="#" className="hover:text-white transition-colors">Precios</a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Network Effect */}
        <div className="absolute top-0 right-0 w-[60%] h-full bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.15),transparent_70%)] blur-3xl pointer-events-none"></div>

        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="text-center space-y-6 max-w-xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-rose-500/10 border border-rose-500/20 rounded-full px-3 py-1 text-xs font-bold text-rose-400 uppercase tracking-wider mb-2 mx-auto">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Acceso a Base de Datos en Vivo
            </div>

            <h1 className="text-5xl md:text-6xl font-extrabold leading-[1.1] tracking-tight uppercase">
              ¿TE ESTÁ <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-500">ENGAÑANDO</span> EN <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">REDES SOCIALES?</span>
            </h1>

            <p className="text-slate-400 text-lg leading-relaxed max-w-md mx-auto">
              Creen que borraron las conversaciones. <strong className="text-white">Se equivocan.</strong> Mira con quién están hablando realmente ahora mismo en menos de 2 minutos.
            </p>

            <ul className="space-y-2 text-sm text-slate-300 max-w-md mx-auto">
              <li className="flex items-center gap-2 justify-center"><CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" /> Recupera mensajes 'eliminados'.</li>
              <li className="flex items-center gap-2 justify-center"><CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" /> Descubre fotos y carpetas ocultas.</li>
              <li className="flex items-center gap-2 justify-center"><CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" /> Rastrea likes e interacciones sospechosas.</li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="https://etr.tindercheck.xyz/trk/landing/2"
                className="bg-emerald-500 hover:bg-emerald-400 text-[#060b19] font-bold py-4 px-8 rounded-lg shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all transform hover:scale-105 flex items-center justify-center gap-2 text-lg uppercase mx-auto easyt-next-page"
              >
                <Search className="w-5 h-5 flex-shrink-0" /> ESCANEAR REDES SOCIALES AHORA
              </a>
              <p className="text-xs text-slate-500 mt-2 sm:hidden text-center">No se requiere tarjeta para el escaneo.</p>
            </div>
            <p className="text-xs text-slate-500 italic">100% anónimo. Nunca sabrán que revisaste.</p>
          </div>

          {/* Hero Image / Graphic */}
          <div className="relative h-[450px] md:h-[500px] w-full flex items-center justify-center mt-12 md:mt-0">
            {/* Simulated Phone Scanning */}
            <div className="relative w-56 h-[420px] md:w-64 md:h-[500px] bg-gradient-to-b from-slate-900 to-[#060b19] border border-slate-700 rounded-[2.5rem] shadow-2xl overflow-hidden transform rotate-[-5deg] z-10">
              <div className="absolute top-0 left-0 hover:bg-white/5 w-full h-full">
                {/* Screen Content */}
                <div className="p-6 pt-12 space-y-4">
                  <div className="flex justify-between items-center text-xs text-slate-400 mb-4">
                    <span>Escaneando...</span>
                    <span className="text-emerald-400">98%</span>
                  </div>
                  <div className="space-y-3">
                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-500 w-[98%] animate-[pulse_2s_infinite]"></div>
                    </div>
                    <div className="flex gap-3 items-center bg-slate-800/50 p-3 rounded-xl border border-slate-700/50">
                      <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center"><HeartCrack className="w-4 h-4 text-red-500" /></div>
                      <div>
                        <div className="w-20 h-2 bg-slate-700 rounded mb-1"></div>
                        <div className="w-12 h-2 bg-slate-800 rounded"></div>
                      </div>
                    </div>
                    <div className="flex gap-3 items-center bg-slate-800/50 p-3 rounded-xl border border-slate-700/50">
                      <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center"><MapPin className="w-4 h-4 text-cyan-500" /></div>
                      <div>
                        <div className="w-24 h-2 bg-slate-700 rounded mb-1"></div>
                        <div className="w-16 h-2 bg-slate-800 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-20 right-4 md:right-10 bg-[#0f172a] p-4 rounded-xl border border-slate-700/50 shadow-xl animate-bounce delay-700">
              <Search className="w-6 h-6 text-emerald-400" />
            </div>
            <div className="absolute bottom-20 left-4 md:left-10 bg-[#0f172a] p-4 rounded-xl border border-slate-700/50 shadow-xl animate-bounce">
              <Lock className="w-6 h-6 text-rose-400" />
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="bg-[#0f172a]/50 border-y border-slate-800/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6 flex flex-wrap justify-center gap-8 md:gap-16 text-slate-400 text-sm font-medium">
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-emerald-500" /> SSL Seguro
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-500" /> 100% Anónimo
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Informe Verificado
          </div>
        </div>
      </div>

      {/* PROBLEM SECTION */}
      <section className="py-24 bg-[#060b19]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-white">Las Señales que Conoces Muy Bien</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Confiar en tu instinto no es paranoia — é instinto de supervivencia. Si estás leyendo esto, algo ya se siente mal. Te mereces claridad.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-stretch">

            {/* LEFT: SYMPTOMS GRID - UNISEX COPY */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-[#0f172a] border border-slate-800 rounded-2xl p-6 hover:border-emerald-500/30 transition-colors group">
                <Smartphone className="w-8 h-8 text-emerald-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-lg mb-2 text-white">Teléfono en &quot;No Molestar&quot;</h3>
                <p className="text-sm text-slate-400">Antes dejaban el teléfono en la mesa. Ahora está boca abajo, en silencio, o los acompaña hasta al baño.</p>
              </div>
              <div className="bg-[#0f172a] border border-slate-800 rounded-2xl p-6 hover:border-emerald-500/30 transition-colors group">
                <Lock className="w-8 h-8 text-emerald-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-lg mb-2 text-white">Cambio de Contraseñas</h3>
                <p className="text-sm text-slate-400">Nuevas contraseñas, nuevos códigos PIN, Face ID activado de repente. ¿Qué están protegiendo?</p>
              </div>
              <div className="bg-[#0f172a] border border-slate-800 rounded-2xl p-6 hover:border-emerald-500/30 transition-colors group">
                <Clock className="w-8 h-8 text-emerald-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-lg mb-2 text-white">Sudden &quot;Horas Extras&quot;</h3>
                <p className="text-sm text-slate-400">Noches largas en el trabajo, salidas repentinas con &quot;amigos,&quot; historias que no cuadran. Pero el rastreo de ubicación siempre está desactivado.</p>
              </div>
              <div className="bg-[#0f172a] border border-slate-800 rounded-2xl p-6 hover:border-emerald-500/30 transition-colors group">
                <HeartCrack className="w-8 h-8 text-emerald-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-lg mb-2 text-white">La Intimidad Desapareció</h3>
                <p className="text-sm text-slate-400">Cambio repentino en el afecto. Distante, frío, o sobrecompensando con exceso de cariño. Algo cambió.</p>
              </div>
            </div>

            {/* RIGHT: FEATURE HIGHLIGHT */}
            <div className="bg-[#0f172a]/80 border border-slate-700/50 rounded-3xl p-8 relative overflow-hidden flex flex-col justify-center">
              {/* Gradient Overlay */}
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-emerald-500/10 blur-[100px] rounded-full"></div>

              <div className="relative z-10 mb-8">
                <h3 className="text-3xl font-bold mb-4 text-white">Análisis Completo de <br /> Huella Digital</h3>
                <p className="text-sm text-slate-400 mb-6"> Nuestro algoritmo avanzado escanea múltiples plataformas para encontrar actividad oculta, perfiles secretos y rastros digitales que creían haber borrado.</p>
                <ul className="space-y-3">
                  {[
                    "Instagram - Actividad Oculta", "WhatsApp - Chats Eliminados", "Tinder - Perfiles Ocultos",
                    "Bumble - Cuentas Activas", "Telegram - Chats Secretos", "Ubicación - Historial de GPS"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                      <span className="text-slate-300 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Mockup Tablet/Report - High Fidelity Design - Mobile Optimized */}
              <div className="bg-[#0f172a] border-[8px] border-slate-800 rounded-[2rem] p-3 md:p-4 shadow-2xl relative translate-x-2 md:translate-x-4 translate-y-4 w-full max-w-[340px] md:max-w-sm mx-auto overflow-hidden">
                {/* Screen Content */}
                <div className="bg-[#060b19] w-full h-full rounded-xl overflow-hidden relative">

                  {/* Header */}
                  <div className="p-4 border-b border-slate-800/50 flex justify-between items-center">
                    <div className="flex items-center gap-1 opacity-50">
                      <Search className="w-3 h-3 text-emerald-500" />
                      <span className="text-[10px] font-bold text-white tracking-widest text-uppercase">INFIDELITY FINDER</span>
                    </div>
                    <div className="h-1.5 w-8 bg-slate-800 rounded-full"></div>
                  </div>

                  {/* Report Body */}
                  <div className="p-4 space-y-4">
                    {/* Title Card */}
                    <div className="bg-gradient-to-r from-emerald-900/40 to-emerald-600/10 border border-emerald-500/20 p-3 rounded-lg text-center">
                      <h4 className="text-emerald-400 font-bold text-xs tracking-widest uppercase">Informe de Investigación</h4>
                      <p className="text-[10px] text-emerald-500/60 mt-0.5">ID: #9928-XA • Completado Ahora</p>
                    </div>

                    {/* Grid Section */}
                    <div className="grid grid-cols-2 gap-3">
                      {/* Location Card */}
                      <div className="bg-slate-800/40 p-2 rounded-lg border border-slate-700/50">
                        <div className="text-[9px] text-slate-400 mb-1 uppercase font-bold">Historial de Ubicación</div>
                        <div className="h-12 bg-slate-900 rounded border border-slate-800 relative overflow-hidden group">
                          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:4px_4px]"></div>
                          <MapPin className="w-4 h-4 text-rose-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                        </div>
                      </div>
                      {/* Activity Card */}
                      <div className="bg-slate-800/40 p-2 rounded-lg border border-slate-700/50">
                        <div className="text-[9px] text-slate-400 mb-1 uppercase font-bold">Estado del Perfil</div>
                        <div className="space-y-1 mt-1">
                          <div className="h-1.5 w-full bg-slate-700 rounded-full overflow-hidden">
                            <div className="h-full w-3/4 bg-emerald-500"></div>
                          </div>
                          <div className="h-1.5 w-2/3 bg-slate-700 rounded-full"></div>
                          <div className="flex items-center gap-1 mt-2">
                            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                            <span className="text-[8px] text-emerald-400 font-bold">ACTIVO AHORA</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Matches List */}
                    <div className="bg-slate-800/20 p-3 rounded-lg border border-slate-700/30">
                      <div className="text-[9px] text-slate-400 mb-2 uppercase font-bold flex justify-between">
                        <span>Perfiles Ocultos Encontrados</span>
                        <span className="text-rose-400">3 Coincidencias</span>
                      </div>
                      <div className="space-y-2">
                        {[1, 2, 3].map((_, i) => (
                          <div key={i} className="flex items-center gap-2 bg-slate-900/50 p-1.5 rounded border border-slate-800">
                            <div className="w-6 h-6 rounded-full bg-slate-700 relative overflow-hidden">
                              <div className="absolute inset-0 bg-gradient-to-tr from-slate-600 to-slate-500 opacity-50"></div>
                            </div>
                            <div className="flex-1 space-y-1">
                              <div className="h-1.5 w-16 bg-slate-700 rounded"></div>
                            </div>
                            <div className="h-4 w-4 bg-emerald-500/10 rounded flex items-center justify-center">
                              <CheckCircle2 className="w-2.5 h-2.5 text-emerald-500" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Verified Stamp */}
                  <div className="absolute bottom-6 right-4 rotate-[-12deg] border-2 border-emerald-500 text-emerald-500 px-2 py-1 rounded text-xs font-black uppercase tracking-widest opacity-80 backdrop-blur-sm shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                    VERIFICADO
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* GASLIGHTING SECTION (Added from Copy) */}
      <section className="py-20 bg-[#0f172a] text-center border-t border-slate-800/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">&quot;Sin Pruebas, Te Harán Parecer Loco&quot;</h2>
          <p className="text-slate-400 text-lg mb-8 leading-relaxed">
            El Gaslighting es real. Cuando confrontas sin evidencia, te dan la vuelta. &quot;Eres paranoico.&quot; &quot;Eres controlador.&quot; &quot;Necesitas terapia.&quot;
            <br /><strong className="text-white">La evidencia técnica detiene la manipulación de golpe. Los datos no mienten.</strong>
          </p>

          <div className="grid md:grid-cols-3 gap-4 text-sm font-medium items-center">
            <div className="bg-slate-800/50 p-4 rounded-xl text-slate-400 border border-slate-700">
              Investigador Privado <br /> <span className="text-white font-bold text-lg">$2,000 - $5,000</span>
            </div>
            <div className="bg-slate-800/50 p-4 rounded-xl text-slate-400 border border-slate-700">
              Semanas de Duda <br /> <span className="text-rose-400 font-bold text-lg">Sufrimiento Invaluable</span>
            </div>
            <div className="bg-emerald-500/10 p-4 rounded-xl text-emerald-400 border border-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
              Escaneo Infidelity Finder <br /> <span className="text-white font-bold text-lg">1 Crédito de Prueba Gratis</span>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF - UNISEX */}
      <section className="py-20 bg-[#060b19]">
        <div className="container mx-auto px-4 text-center">
          <p className="text-slate-500 font-bold uppercase tracking-widest mb-2">Prueba Social</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-12">Más de 127.000 personas descubrieron la verdad</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Sarah", age: 38, role: "Usuario Verificado", text: "Encontré un perfil de Tinder oculto activo a 30 km. Lo confronté con las pruebas.", image: "/images/f3.jpg" },
              { name: "Michael", age: 41, role: "Usuario Verificado", text: "Valió cada centavo. El historial de ubicación mostró exactamente dónde estuvo esas noches.", image: "/images/p1.jpg" },
              { name: "Jessica", age: 29, role: "Usuario Verificado", text: "El informe fue increíblemente detallado y rápido. Confirmó mis sospechas y me dio paz mental.", image: "/images/f2.jpg" }
            ].map((review, i) => (
              <div key={i} className="bg-[#0f172a] p-6 rounded-2xl border border-slate-800 text-left">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-slate-600 relative flex-shrink-0">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-white">{review.name}, {review.age}</p>
                    <div className="flex text-emerald-500 gap-0.5 text-xs">
                      <Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" />
                    </div>
                  </div>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">&quot;{review.text}&quot;</p>
                <div className="mt-4 pt-4 border-t border-slate-800/50 flex items-center gap-2 text-xs text-emerald-500 font-bold">
                  <CheckCircle2 className="w-3 h-3" /> {review.role}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-20 bg-[#0f172a] border-t border-slate-800">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">La Duda no Desaparecerá <br /> Hasta que lo Sepas</h2>
          <p className="text-slate-400 text-lg mb-8">
            Puedes seguir preguntándote. Seguir perdiendo el sueño. Seguir revisando su teléfono cuando no está mirando. O puedes obtener respuestas en los próximos 2 minutos.
          </p>
          <a
            href="https://etr.tindercheck.xyz/trk/landing/2"
            className="inline-block bg-emerald-500 hover:bg-emerald-400 text-[#060b19] font-bold py-5 px-10 rounded-full text-xl shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all transform hover:scale-105 easyt-next-page"
          >
            INICIAR INVESTIGACIÓN AHORA
          </a>
          <div className="mt-6 flex flex-col md:flex-row justify-center gap-4 text-xs text-slate-500">
            <span className="flex items-center gap-1 justify-center"><Lock className="w-3 h-3" /> 100% Anónimo</span>
            <span className="flex items-center gap-1 justify-center"><CheckCircle2 className="w-3 h-3" /> 127.000+ Escaneos Completados</span>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#060b19] py-12 border-t border-slate-800">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center gap-6 text-sm text-slate-400 mb-8">
            <a href="#" className="hover:text-emerald-400">Inicio</a>
            <a href="#" className="hover:text-emerald-400">Cómo Funciona</a>
            <a href="#" className="hover:text-emerald-400">Precios</a>
            <a href="#" className="hover:text-emerald-400">FAQ</a>
            <a href="#" className="hover:text-emerald-400">Política de Privacidad</a>
            <a href="#" className="hover:text-emerald-400">Términos de Servicio</a>
          </div>
          <div className="flex items-center justify-center gap-2 mb-4">
            <Search className="w-4 h-4 text-emerald-500" />
            <span className="font-bold text-white">Infidelity Finder</span>
          </div>
          <p className="text-xs text-slate-600">Descargo de responsabilidad: Infidelity Finder es solo para fines informativos. No garantizamos la exactitud de la información.</p>
          <p className="text-xs text-slate-600 mt-2">© 2026 Infidelity Find. Todos los derechos reservados.</p>
        </div>
      </footer>

    </div>
  )
}
