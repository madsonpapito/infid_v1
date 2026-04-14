"use client"

import { LegalFooter } from "@/components/legal-footer"
import { Check, ShieldCheck, Lock, Heart, Star, Users, Sparkles, Anchor } from "lucide-react"
import Link from "next/link"
import { FacebookTracker } from "@/components/FacebookTracker"

export default function InitPage3PP() {
    return (
        <div className="min-h-screen bg-rose-50/30 font-sans text-slate-900">
            {/* Facebook Tracking */}
            <FacebookTracker
                eventName="ViewContent"
                contentName="Sales Page - 5 Pilares - PP - ES"
                contentCategory="Offer"
                customData={{ value: 37, currency: "USD" }}
            />

            {/* Hero Section */}
            <section className="bg-white pt-20 pb-16 px-4 md:px-8 shadow-sm">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <div className="inline-block bg-rose-100 text-rose-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 tracking-wide uppercase">
                        Excelencia en Relaciones
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
                        El Secreto de un <span className="text-rose-600">Amor que Dura</span> <br className="hidden md:block" />
                        Toda la Vida.
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        Descubre los 5 pilares fundamentales que transforman conexiones frágiles en asociaciones inquebrantables y duraderas.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8">
                        <Link
                            href="https://go.centerpag.com/PPU38CQ9Q5C"
                            className="w-full md:w-auto bg-rose-600 hover:bg-rose-700 text-white text-lg font-bold py-4 px-10 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
                        >
                            Obtener la Guía de los 5 Pilares
                        </Link>
                    </div>
                    <p className="text-sm text-slate-400 mt-4 flex items-center justify-center gap-2">
                        <ShieldCheck className="w-4 h-4" /> Acceso 100% Seguro y Privado
                    </p>
                </div>
            </section>

            {/* The Pillars Grid */}
            <section className="py-20 px-4 md:px-8 bg-rose-50/50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900">Los 5 Pilares del Éxito</h2>
                        <p className="text-slate-600 mt-4 text-lg">La base lo es todo. Sin estos pilares, incluso el amor más fuerte pode marchitarse.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Pillar 1 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-rose-100 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-rose-100 text-rose-600 rounded-lg flex items-center justify-center mb-6">
                                <Anchor className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Transparencia Absoluta</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Más allá de la simple honestidad. Aprende a crear un "espacio seguro" onde ambos puedan compartir sus miedos y deseos más profundos sin juicio.
                            </p>
                        </div>

                        {/* Pillar 2 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-rose-100 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-rose-100 text-rose-600 rounded-lg flex items-center justify-center mb-6">
                                <Star className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Admiración Mutua</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Cómo mantener viva la "chispa" buscando activamente la grandeza en tu pareja cada día.
                            </p>
                        </div>

                        {/* Pillar 3 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-rose-100 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-rose-100 text-rose-600 rounded-lg flex items-center justify-center mb-6">
                                <Users className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Crecimiento Conjunto</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Una relación o crece o muere. Descubre cómo alinear tus metas personales para que crezcan juntos, no por separado.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Special Section: Intimacy */}
            <section className="py-20 px-4 md:px-8 bg-white">
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
                    <div className="w-full md:w-1/2 bg-rose-100 rounded-3xl aspect-square flex items-center justify-center relative overflow-hidden">
                         <div className="absolute inset-0 bg-gradient-to-br from-rose-400/20 to-purple-400/20"></div>
                         <Heart className="w-32 h-32 text-rose-500 opacity-80" />
                    </div>
                    <div className="w-full md:w-1/2 space-y-6">
                        <h2 className="text-3xl font-bold text-slate-900">Intimidad Más Allá de lo Físico</h2>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            La verdadera conexión ocurre cuando dos almas se sienten completamente vistas y aceptadas. Te mostraremos cómo reconstruir la intimidad desde cero.
                        </p>
                        <div className="space-y-4">
                            {[
                                "Técnicas de vulnerabilidad emocional",
                                "Reiniciando la fase de luna de miel",
                                "El arte del contacto no sexual",
                                "Profundizando la conexión del alma"
                            ].map((item, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <div className="bg-rose-100 text-rose-600 p-1 rounded-full">
                                        <Check className="w-4 h-4" />
                                    </div>
                                    <span className="text-slate-700 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Breakdown Section */}
            <section className="py-20 px-4 md:px-8 bg-slate-50">
                <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 border border-slate-100 shadow-sm">
                    <h2 className="text-3xl font-bold text-center mb-10">¿Qué hay dentro del Programa?</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            "La Base Fundamental: Construyendo los Cimientos",
                            "Hablar con la Verdad: El Plano de Comunicación",
                            "Escudo Emocional: Protegiendo su Vínculo",
                            "Reinicio de Intimidad: Reconectando sus Corazones",
                            "Prueba de Futuro: Permaneciendo Juntos para Siempre",
                            "Bono: El Desafío de Gratitud Diaria"
                        ].map((item, index) => (
                            <div key={index} className="flex items-start gap-4 p-4 bg-rose-50/30 rounded-xl">
                                <div className="bg-rose-100 text-rose-600 p-1 rounded-full mt-0.5">
                                    <Sparkles className="w-4 h-4" />
                                </div>
                                <p className="text-slate-700 font-medium">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 md:px-8 bg-gradient-to-br from-rose-600 to-rose-800 text-white text-center">
                <div className="max-w-3xl mx-auto space-y-8">
                    <h2 className="text-3xl md:text-5xl font-bold">Invierte en tu Felicidad.</h2>
                    <p className="text-rose-100 text-lg md:text-xl">
                        Tu relación es la inversión más importante que harás. Asegura su futuro juntos hoy mismo.
                    </p>
                    <div className="flex flex-col items-center gap-4">
                        <Link
                            href="https://go.centerpag.com/PPU38CQ9Q5C"
                            className="bg-white text-rose-700 hover:bg-slate-100 text-lg font-bold py-4 px-10 rounded-xl shadow-lg transition-all transform hover:-translate-y-1 w-full md:w-auto"
                        >
                            ¡Sí! Quiero una Relación Más Fuerte
                        </Link>
                        <div className="flex items-center gap-2 text-sm text-rose-200 opacity-90">
                            <Lock className="w-4 h-4" /> Pago Seguro Garantizado
                        </div>
                    </div>
                </div>
            </section>

            <LegalFooter />
        </div>
    )
}
