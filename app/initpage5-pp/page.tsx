"use client"

import { LegalFooter } from "@/components/legal-footer"
import { Check, ShieldCheck, Lock, Heart, Eye, HandMetal, Sparkles, Moon } from "lucide-react"
import Link from "next/link"
import { FacebookTracker } from "@/components/FacebookTracker"

export default function InitPage5PP() {
    return (
        <div className="min-h-screen bg-purple-50/30 font-sans text-slate-900">
            {/* Facebook Tracking */}
            <FacebookTracker
                eventName="ViewContent"
                contentName="Sales Page - Intimidad - PP - ES"
                contentCategory="Offer"
                customData={{ value: 37, currency: "USD" }}
            />

            {/* Hero Section */}
            <section className="bg-white pt-20 pb-16 px-4 md:px-8 shadow-sm">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <div className="inline-block bg-purple-100 text-purple-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 tracking-wide uppercase">
                        Inteligencia Emocional
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
                        Más Allá de lo Superficial. <br /> <span className="text-purple-600">Profundiza tu Vínculo.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        Reconecta con tu pareja a nivel del alma. Aprende a navegar las emociones y construye una conexión íntima duradera que trascienda el estrés diario.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8">
                        <Link
                            href="https://go.centerpag.com/PPU38CQAH56"
                            className="w-full md:w-auto bg-purple-600 hover:bg-purple-700 text-white text-lg font-bold py-4 px-10 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
                        >
                            Reconecta sus Corazones
                        </Link>
                    </div>
                    <p className="text-sm text-slate-400 mt-4 flex items-center justify-center gap-2">
                        <ShieldCheck className="w-4 h-4" /> Acceso 100% Confidencial
                    </p>
                </div>
            </section>

            {/* Intimacy Pillars */}
            <section className="py-20 px-4 md:px-8 bg-purple-50/50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900">La Anatomía de la Intimidad</h2>
                        <p className="text-slate-600 mt-4 text-lg">La intimidad no es solo atracción física – es ser "plenamente conocido/a" por tu pareja.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Feature 1 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-purple-100 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mb-6">
                                <Eye className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Vulnerabilidad como Fuerza</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Aprende por qué bajar la guardia es lo más poderoso que puedes hacer para invitar a tu pareja de vuelta a tu mundo interior.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-purple-100 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mb-6">
                                <Heart className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Seguridad Emocional</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Construye un puente psicológico que les permita a ambos expresar necesidades sin miedo al rechazo o al juicio.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-purple-100 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mb-6">
                                <Moon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Conexión Sensorial</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Recupera la magia de los pequeños momentos. Descubre cómo el contacto visual y la presencia pueden reavivar la llama al instante.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Deep Section */}
            <section className="py-20 px-4 md:px-8 bg-white overflow-hidden">
                <div className="max-w-5xl mx-auto bg-gradient-to-br from-indigo-900 to-purple-900 rounded-[3rem] p-12 text-white relative shadow-2xl text-center space-y-8">
                    <div className="absolute -top-10 -right-10 opacity-20 transform rotate-12">
                        <Sparkles className="w-64 h-64 text-purple-300" />
                    </div>
                    <div className="relative z-10 text-center space-y-8">
                        <div className="bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full inline-block text-sm font-bold uppercase tracking-widest">
                            El Plano de Intimidad
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold max-w-2xl mx-auto">
                            Transforma la Desconexión en Devoción Profunda.
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8 text-left max-w-3xl mx-auto">
                            <div className="flex items-start gap-4">
                                <div className="bg-purple-500 p-1 rounded-full"><Check className="w-4 h-4" /></div>
                                <p className="text-purple-100">Rompiendo el "Síndrome de Compañeros de Cuarto" y redescubriendo el deseo.</p>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="bg-purple-500 p-1 rounded-full"><Check className="w-4 h-4" /></div>
                                <p className="text-purple-100">La rutina de 4 pasos para conexiones emocionales de alto nivel.</p>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="bg-purple-500 p-1 rounded-full"><Check className="w-4 h-4" /></div>
                                <p className="text-purple-100">Identificando y sanando los "Bloqueos de Intimidad" del pasado.</p>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="bg-purple-500 p-1 rounded-full"><Check className="w-4 h-4" /></div>
                                <p className="text-purple-100">Rituales diarios que mantienen su conexión inquebrantable.</p>
                            </div>
                        </div>
                        <Link
                            href="https://go.centerpag.com/PPU38CQAH56"
                            className="inline-block bg-white text-purple-900 hover:bg-slate-100 text-lg font-bold py-4 px-12 rounded-2xl shadow-xl transition-all transform hover:-translate-y-1"
                        >
                            ¡Sí! Quiero una Conexión Más Profunda
                        </Link>
                    </div>
                </div>
            </section>

            {/* Program Content */}
            <section className="py-20 px-4 md:px-8 bg-slate-50">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">Lo Que Vas a Dominar</h2>
                    <div className="space-y-6">
                        {[
                            { title: "La Técnica del Espejo", text: "Cómo sentir y responder a las necesidades no expresadas de tu pareja." },
                            { title: "Mapeo de Intimidad", text: "Una guía personalizada sobre lo que hace que tu pareja se sienta segura y amada." },
                            { title: "Neuro-Vínculo", text: "La ciencia de la atracción a largo plazo y cómo activarla a diario." },
                            { title: "El Protocolo de Reinicio", text: "Cómo volver a estar juntos tras un distanciamiento emocional." }
                        ].map((item, index) => (
                            <div key={index} className="flex gap-4 items-start p-6 bg-white rounded-2xl border border-purple-100 shadow-sm">
                                <HandMetal className="w-6 h-6 text-purple-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-xl text-slate-800">{item.title}</h3>
                                    <p className="text-slate-600 leading-relaxed">{item.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 md:px-8 bg-white text-center">
                <div className="max-w-3xl mx-auto space-y-8">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900">Reconecta Hoy Mismo.</h2>
                    <p className="text-slate-600 text-lg md:text-xl leading-relaxed">
                        No dejes pasar otro día en la distancia. Recupera el amor y la intimidad que los unió en primer lugar.
                    </p>
                    <div className="flex flex-col items-center gap-4">
                        <Link
                            href="https://go.centerpag.com/PPU38CQAH56"
                            className="bg-purple-600 hover:bg-purple-700 text-white text-lg font-bold py-4 px-10 rounded-xl shadow-lg transition-all transform hover:-translate-y-1 w-full md:w-auto"
                        >
                            ¡Obtén Acceso Inmediato al Plano de Intimidad!
                        </Link>
                        <div className="flex items-center gap-2 text-sm text-slate-400">
                            <Lock className="w-4 h-4" /> Pago Seguro Garantizado
                        </div>
                    </div>
                </div>
            </section>

            <LegalFooter />
        </div>
    )
}
