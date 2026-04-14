"use client"

import { LegalFooter } from "@/components/legal-footer"
import { Check, ShieldCheck, Lock, Scale, MessageCircle, Ear, Wind, Zap } from "lucide-react"
import Link from "next/link"
import { FacebookTracker } from "@/components/FacebookTracker"

export default function InitPage6PP() {
    return (
        <div className="min-h-screen bg-emerald-50/30 font-sans text-slate-900">
            {/* Facebook Tracking */}
            <FacebookTracker
                eventName="ViewContent"
                contentName="Sales Page - Resolución de Conflictos - PP - ES"
                contentCategory="Offer"
                customData={{ value: 37, currency: "USD" }}
            />

            {/* Hero Section */}
            <section className="bg-white pt-20 pb-16 px-4 md:px-8 shadow-sm">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <div className="inline-block bg-emerald-100 text-emerald-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 tracking-wide uppercase">
                        Domina el Conflicto
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
                        La Fricción es <span className="text-emerald-600">Crecimiento Disfrazado.</span>
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-700 mt-2">Aprende a discutir de forma constructiva.</h2>
                    <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed mt-6">
                        Convierte cada desacuerdo en una oportunidad para profundizar tu comprensión. Descubre técnicas probadas para resolver conflictos sin lastimar a quien amas.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8">
                        <Link
                            href="https://go.centerpag.com/PPU38CQ9Q5C"
                            className="w-full md:w-auto bg-emerald-600 hover:bg-emerald-700 text-white text-lg font-bold py-4 px-10 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
                        >
                            Comienza a Resolver Conflictos Hoy
                        </Link>
                    </div>
                    <p className="text-sm text-slate-400 mt-4 flex items-center justify-center gap-2">
                        <ShieldCheck className="w-4 h-4" /> Compra 100% Segura y Discreta
                    </p>
                </div>
            </section>

            {/* Core Strategies */}
            <section className="py-20 px-4 md:px-8 bg-emerald-50/50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900">La Caja de Herramientas de la Paz</h2>
                        <p className="text-slate-600 mt-4 text-lg">La paz no es la ausencia de conflicto; es la habilidad de manejarlo con elegancia.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Strategy 1 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-emerald-100 hover:shadow-md transition-shadow text-center">
                            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                                <Wind className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">El Cool-Off de 2 Minutos</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Aprende el disparador fisiológico exacto que detiene la "inundación emocional" e impide que digas cosas de las que te arrepentirás siempre.
                            </p>
                        </div>

                        {/* Strategy 2 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-emerald-100 hover:shadow-md transition-shadow text-center">
                            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                                <Ear className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Validación Profunda</h3>
                            <p className="text-slate-600 leading-relaxed">
                                No tienes que estar de acuerdo para comprender. Descubre cómo validar los sentimientos de tu pareja para que se sienta escuchada y calmada.
                            </p>
                        </div>

                        {/* Strategy 3 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-emerald-100 hover:shadow-md transition-shadow text-center">
                            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                                <Scale className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">El Contrato de Equidad</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Establece "Reglas de Compromiso" que mantengan las discusiones productivas y enfocadas en soluciones, no en ganar o perder.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Special Methodology Section */}
            <section className="py-20 px-4 md:px-8 bg-white overflow-hidden">
                <div className="max-w-4xl mx-auto bg-slate-100 rounded-[2.5rem] p-8 md:p-16 border border-slate-200">
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                        <div className="w-full md:w-1/3">
                            <div className="bg-emerald-100 text-emerald-600 p-8 rounded-3xl aspect-square flex items-center justify-center">
                                <Zap className="w-20 h-20" />
                            </div>
                        </div>
                        <div className="w-full md:w-2/3 space-y-6">
                            <h2 className="text-3xl font-bold text-slate-800">Detén el Ciclo Tóxico.</h2>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                Las discusiones constantes agotan la energía de tu vida. Nuestro protocolo de "Reinicio de Conflictos" te enseña a romper el ciclo de culpa y defensiva para siempre.
                            </p>
                            <div className="space-y-3">
                                {[
                                    "Identificando tu 'Estilo de Conflicto'",
                                    "Cómo disculparse de manera que realmente importe",
                                    "Pasando del 'Yo vs Tú' al 'Nosotros vs El Problema'",
                                    "Reparando el vínculo después de una pelea mayor"
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <Check className="w-5 h-5 text-emerald-500" />
                                        <span className="font-medium text-slate-700">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 px-4 md:px-8 bg-emerald-600 text-white text-center">
                <div className="max-w-3xl mx-auto space-y-10">
                    <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">Inicia tu Viaje hacia la <br/> Paz Duradera.</h2>
                    <p className="text-emerald-100 text-lg md:text-xl">
                        Un hogar libre de conflictos es posible. Aprende las habilidades que los terapeutas enseñan a sus clientes más exclusivos.
                    </p>
                    <div className="space-y-6">
                        <Link
                            href="https://go.centerpag.com/PPU38CQ9Q5C"
                            className="inline-block w-full md:w-auto bg-white text-emerald-700 hover:bg-emerald-50 text-xl font-bold py-5 px-12 rounded-2xl shadow-2xl transition-all transform hover:-translate-y-1"
                        >
                            ¡Sí! Dame el Programa de Resolución de Conflictos
                        </Link>
                        <p className="text-emerald-200 text-sm font-medium flex items-center justify-center gap-2">
                           <Lock className="w-4 h-4" /> Pago 100% Seguro y Encriptado
                        </p>
                    </div>
                </div>
            </section>

            <LegalFooter />
        </div>
    )
}
