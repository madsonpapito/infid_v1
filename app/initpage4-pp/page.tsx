"use client"

import { LegalFooter } from "@/components/legal-footer"
import { Check, ShieldCheck, Lock, MessageSquare, Volume2, Ear, Sparkles, Zap } from "lucide-react"
import Link from "next/link"
import { FacebookTracker } from "@/components/FacebookTracker"

export default function InitPage4PP() {
    return (
        <div className="min-h-screen bg-blue-50/30 font-sans text-slate-900">
            {/* Facebook Tracking */}
            <FacebookTracker
                eventName="ViewContent"
                contentName="Sales Page - Comunicación - PP - ES"
                contentCategory="Offer"
                customData={{ value: 37, currency: "USD" }}
            />

            {/* Hero Section */}
            <section className="bg-white pt-20 pb-16 px-4 md:px-8 shadow-sm">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <div className="inline-block bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 tracking-wide uppercase">
                        Comunicación Efectiva
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
                        Deja de Discutir. <span className="text-blue-600">Empieza a Conectar.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        Domina el arte de la comunicación y aprende a hablar el lenguaje del amor de tu pareja con precisión y empatía.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8">
                        <Link
                            href="https://go.centerpag.com/PPU38CQ9Q5C"
                            className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white text-lg font-bold py-4 px-10 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
                        >
                            Desbloquea la Comunicación Efectiva
                        </Link>
                    </div>
                    <p className="text-sm text-slate-400 mt-4 flex items-center justify-center gap-2">
                        <ShieldCheck className="w-4 h-4" /> Portal Seguro y Privado
                    </p>
                </div>
            </section>

            {/* Benefits Grid */}
            <section className="py-20 px-4 md:px-8 bg-blue-50/50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900">Por Qué Falla la Comunicación</h2>
                        <p className="text-slate-600 mt-4 text-lg">La mayoría de las parejas no pelean por los platos, sino porque se sienten ignoradas.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Benefit 1 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-blue-100 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6">
                                <Volume2 className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Tono y Matiz</h3>
                            <p className="text-slate-600 leading-relaxed">
                                No es solo lo que dices, sino cómo lo dices. Aprende los cambios sutiles en el tono que evitan la defensiva.
                            </p>
                        </div>

                        {/* Benefit 2 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-blue-100 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6">
                                <Ear className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Escucha Activa</h3>
                            <p className="text-slate-600 leading-relaxed">
                                La mayoría de las personas escuchan para responder. Aprende técnicas para escuchar y comprender profundamente.
                            </p>
                        </div>

                        {/* Benefit 3 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-blue-100 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6">
                                <Zap className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Los 5 Lenguajes</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Deja de dar lo que tú quieres recibir. Descubre cómo dar exactamente lo que tu pareja necesita para sentirse amada.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Detail Section */}
            <section className="py-20 px-4 md:px-8 bg-white">
                <div className="max-w-4xl mx-auto space-y-12">
                    <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden relative">
                        <div className="absolute top-0 right-0 p-8 opacity-10">
                            <MessageSquare className="w-64 h-64 text-white" />
                        </div>
                        <div className="relative z-10">
                            <h2 className="text-3xl font-bold mb-6">El Marco "Sin Peleas"</h2>
                            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                                Imagina una relación onde incluso los temas más difíciles se discuten con calma, claridad y sin un solo grito.
                            </p>
                            <div className="grid md:grid-cols-2 gap-6">
                                {[
                                    "Palabras activadoras de desescalada",
                                    "Expresar necesidades sin culpar",
                                    "La revolución de las frases en 'Yo'",
                                    "Rompiendo el ciclo del silencio"
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <div className="bg-blue-500 text-white p-1 rounded-full">
                                            <Check className="w-4 h-4" />
                                        </div>
                                        <span className="text-slate-200 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 md:px-8 bg-gradient-to-br from-blue-700 to-indigo-900 text-white text-center">
                <div className="max-w-3xl mx-auto space-y-8">
                    <h2 className="text-3xl md:text-5xl font-bold">Termina con el Malentendido.</h2>
                    <p className="text-blue-100 text-lg md:text-xl">
                        Únete a miles de parejas que han salvado sus matrimonios simplemente cambiando la forma en que hablan.
                    </p>
                    <div className="flex flex-col items-center gap-4">
                        <Link
                            href="https://go.centerpag.com/PPU38CQ9Q5C"
                            className="bg-white text-blue-700 hover:bg-slate-100 text-lg font-bold py-4 px-10 rounded-xl shadow-lg transition-all transform hover:-translate-y-1 w-full md:w-auto"
                        >
                            ¡Sí! Dame una Mejor Comunicación
                        </Link>
                        <div className="flex items-center gap-2 text-sm text-blue-200 opacity-90">
                            <Lock className="w-4 h-4" /> Acceso Digital Instántaneo
                        </div>
                    </div>
                </div>
            </section>

            <LegalFooter />
        </div>
    )
}
