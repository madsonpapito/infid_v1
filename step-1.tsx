"use client"

import { Search, Activity, Instagram, MapPin, Eye, ShieldCheck, Heart, Camera, MessageSquare, Check, CheckCircle, Star, FolderArchive, Users } from 'lucide-react'
import Image from "next/image"
import { useRouter } from 'next/navigation'
import { FacebookTracker } from '@/components/FacebookTracker'


// Componente auxiliar para as estrelas
const StarRating = ({ rating = 5 }) => (
  <div className="flex text-yellow-400">
    {Array.from({ length: rating }).map((_, index) => (
      <Star key={index} className="w-5 h-5 fill-current" />
    ))}
  </div>
);

export default function Step1() {
  const router = useRouter();

  const handleNavigate = () => {
    router.push('/step-2');
  };

  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Facebook Tracking - envia dados enriquecidos para o dataLayer */}
      <FacebookTracker
        eventName="Lead"
        contentName="Step 1 - Landing Page"
        contentCategory="Sales Funnel"
      />

      {/* =================================== */}
      {/* 1. Hero Section                     */}
      {/* =================================== */}
      <section className="bg-gradient-to-br from-[#1d1d3a] via-[#2a2a4b] to-[#3a2c6b] text-white py-16 px-4 overflow-hidden">
        <div className="container mx-auto max-w-3xl text-center flex flex-col items-center">

          <div className="inline-block bg-pink p-4 rounded-2xl shadow-lg mb-6">
            <Instagram className="h-10 w-10 text-white-600" />
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold leading-[1.1] tracking-tight uppercase text-center">
            ¿TE ESTÁ <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-500">ENGAÑANDO</span> EN <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">REDES SOCIALES?</span>
          </h1>

          <p className="text-slate-400 text-lg leading-relaxed max-w-md text-center">
            Creen que borraron las conversaciones. <strong className="text-white">Se equivocan.</strong> Mira con quién están hablando realmente ahora mismo en menos de 2 minutos.
          </p>

          <p className="text-lg text-white font-bold mb-8 max-w-xl">
            Descubre la verdad en menos de 2 minutos.
          </p>

          <div className="inline-flex items-center bg-green-900/50 text-green-300 border border-green-700 rounded-full px-4 py-1.5 text-sm mb-8">
            <CheckCircle className="h-4 w-4 mr-2 flex-shrink-0" />
            <span>Sistema de Detección Avanzado - Actualizado Abril 2026</span>
          </div>

          <ul className="w-full max-w-lg space-y-2 text-sm text-slate-300 mb-8">
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" /> Recupera mensajes 'eliminados'.</li>
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" /> Descubre fotos y carpetas ocultas.</li>
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" /> Rastrea likes e interacciones sospechosas.</li>
          </ul>

          <button
            onClick={handleNavigate}
            className="w-full max-w-lg bg-emerald-500 hover:bg-emerald-400 text-[#060b19] font-bold py-4 px-8 rounded-lg shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all transform hover:scale-105 flex items-center justify-center gap-2 text-lg uppercase"
          >
            <Search className="w-5 h-5 flex-shrink-0" /> ESCANEAR REDES SOCIALES AHORA
          </button>
          <p className="text-xs text-gray-400 mt-2">Investigación 100% anónima. Nunca sabrán que revisaste.</p>
        </div>
      </section>

      {/* =================================== */}
      {/* 2. "You're Not Paranoid" Section    */}
      {/* =================================== */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            No eres paranoico -
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-red-500 mb-6">
            Te estás protegiendo
          </h3>
          <p className="text-gray-500 max-w-2xl mx-auto mb-12">
            Confiar en tus instintos no es una debilidad. Es inteligencia emocional.
          </p>
          <p className="text-lg text-black font-bold mb-8 max-w-xl mx-auto">
            Te mereces claridad para tomar las decisiones correctas.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="inline-block bg-pink-100 p-4 rounded-xl mb-4">
                <Search className="h-8 w-8 text-pink-500" />
              </div>
              <h4 className="font-bold text-lg mb-2">ACTIVIDAD RECIENTE</h4>
              <p className="text-gray-500 text-sm">Mira con qué perfiles ha interactuado la persona con más frecuencia en los últimos días.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="inline-block bg-purple-100 p-4 rounded-xl mb-4">
                <Users className="h-8 w-8 text-purple-500" />
              </div>
              <h4 className="font-bold text-lg mb-2">PERFILES VISITADOS</h4>
              <p className="text-gray-500 text-sm">Descubre los perfiles que están siendo visitados repetidamente y en horarios sospechosos.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="inline-block bg-red-100 p-4 rounded-xl mb-4">
                <Camera className="h-8 w-8 text-red-500" />
              </div>
              <h4 className="font-bold text-lg mb-2">FOTOS CON LIKE</h4>
              <p className="text-gray-500 text-sm">Todas las fotos a las que han dado like, incluso las que quitaron después.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="inline-block bg-orange-100 p-4 rounded-xl mb-4">
                <MessageSquare className="h-8 w-8 text-orange-500" />
              </div>
              <h4 className="font-bold text-lg mb-2">CONVERSACIONES PRIVADAS</h4>
              <p className="text-gray-500 text-sm">Mira con quién hablan constantemente y qué se dice realmente.</p>
            </div>
          </div>
        </div>
      </section>

      {/* =================================== */}
      {/* 3. Testimonials Section             */}
      {/* =================================== */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Más de <span className="text-red-500">127.000 personas</span> ya han descubierto la verdad.
          </h2>
          <div className="space-y-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-xl shadow-lg text-left">
              <div className="flex items-center mb-4">
                {/* Certifique-se que o path da imagem existe ou remova se for teste */}
                <Image src="/images/83.jpg" alt="Sarah" width={48} height={48} className="rounded-full mr-4" />
                <div>
                  <p className="font-bold">Sarah, 42</p>
                  <p className="text-sm text-green-600 flex items-center"><Check className="h-4 w-4 mr-1" />Usuario Verificado</p>
                </div>
              </div>
              <blockquote className="text-gray-600 italic mb-4 before:content-['“'] after:content-['”']">
                Durante 8 meses sentí que algo andaba mal. Él lo negaba todo. La herramienta mostró conversaciones con su 'mejor amiga' que me hicieron llorar durante días, pero me dio las fuerzas para seguir adelante y no vivir más en una mentira.
              </blockquote>
              <StarRating />
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-xl shadow-lg text-left">
              <div className="flex items-center mb-4">
                <Image src="/images/86.jpg" alt="Jennifer" width={48} height={48} className="rounded-full mr-4" />
                <div>
                  <p className="font-bold">Jennifer, 33</p>
                  <p className="text-sm text-gray-500">Investigación completada Abril 2026</p>
                </div>
              </div>
              <blockquote className="text-gray-600 italic mb-4 before:content-['“'] after:content-['”']">
                {"Descubrí en Noviembre 2025 que mi prometido estaba intercambiando mensajes íntimos con 3 mujeres diferentes. Cancelé la boda 2 semanas antes. Me dolió mucho, pero me salvó de un error que habría destruido mi vida."}
              </blockquote>
              <StarRating />
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-6 rounded-xl shadow-lg text-left">
              <div className="flex items-center mb-4">
                <Image src="/images/87.jpg" alt="Michelle" width={48} height={48} className="rounded-full mr-4" />
                <div>
                  <p className="font-bold">Michelle, 35</p>
                  <p className="text-sm text-green-600 flex items-center"><Check className="h-4 w-4 mr-1" />Usuario Verificado</p>
                </div>
              </div>
              <blockquote className="text-gray-600 italic mb-4 before:content-['“'] after:content-['”']">
                Mi esposo juraba que yo estaba loca, que solo eran 'amigas del trabajo'. Los perfiles privados estaban todos ahí: fotos provocativas que le gustaban a las 2 a.m. Ahora sigo adelante sin ninguna duda.
              </blockquote>
              <StarRating />
            </div>
          </div>
        </div>
      </section>

      {/* =================================== */}
      {/* 4. Final CTA Section (Dark Theme)   */}
      {/* =================================== */}
      <section className="bg-[#1d1d3a] py-16 px-4">
        <div className="container mx-auto max-w-2xl text-center">

          {/* Título Impactante */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-8 leading-tight drop-shadow-md">
            No vivirás otro día <br className="hidden md:block" />
            con esta angustia en tu pecho
          </h2>

          {/* Botão */}
          <button
            onClick={handleNavigate}
            className="w-full max-w-lg bg-[#FF4081] hover:bg-[#f53677] text-white font-extrabold py-5 px-6 rounded-full text-lg md:text-xl shadow-[0_10px_40px_-10px_rgba(255,64,129,0.6)] transition-all transform hover:scale-105 flex items-center justify-center gap-3 mx-auto"
          >
            <span className="text-2xl">🔒</span> INICIAR INVESTIGACIÓN ANÓNIMA AHORA
          </button>

          {/* Textos de Rodapé */}
          <div className="mt-6 space-y-2">
            <p className="text-sm text-gray-300">
              100% anónimo. Tu investigación permanecerá completamente privada.
            </p>
            <p className="text-sm text-gray-400">
              Más de 127.000 personas ya han descubierto la verdad.
            </p>
          </div>

        </div>
      </section>

    </div>
  )
}
