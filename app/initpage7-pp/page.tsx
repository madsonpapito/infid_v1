"use client"

import { LegalFooter } from "@/components/legal-footer"
import { Check, ShieldCheck, Lock, Shield, Eye, LockKeyhole, Sparkles, TrendingUp } from "lucide-react"
import Link from "next/link"
import { FacebookTracker } from "@/components/FacebookTracker"

export default function InitPage7PP() {
    return (
        <div className="min-h-screen bg-amber-50/30 font-sans text-slate-900">
            {/* Facebook Tracking */}
            <FacebookTracker
                eventName="ViewContent"
                contentName="Sales Page - Confianza - PP - ES"
                contentCategory="Offer"
                customData={{ value: 37, currency: "USD" }}
            />

            {/* Hero Section */}
            <section className="bg-white pt-20 pb-16 px-4 md:px-8 shadow-sm">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <div className="inline-block bg-amber-100 text-amber-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 tracking-wide uppercase">
                        Cimientos de Confianza
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
                        Confianza que <span className="text-amber-600">No se Rompe.</span> <br />
                        Recupera la Seguridad Total.
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        La confianza se gana en gotas y se pierde en cubos. Aprende el método científico para reconstruir, fortalecer y proteger la confianza en tu relación para siempre.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8">
                        <Link
                            href="https://go.centerpag.com/PPU38CQ9Q5C"
                            className="w-full md:w-auto bg-amber-600 hover:bg-amber-700 text-white text-lg font-bold py-4 px-10 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
                        >
                            Construye Confianza Inquebrantable
                        </Link>
                    </div>
                    <p className="text-sm text-slate-400 mt-4 flex items-center justify-center gap-2">
                        <ShieldCheck className="w-4 h-4" /> Acceso Instantáneo y Seguro
                    </p>
                </div>
            </section>

            {/* Trust Anatomy Grid */}
            <section className="py-20 px-4 md:px-8 bg-amber-50/50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900">La Seguridad es la Base</h2>
                        <p className="text-slate-600 mt-4 text-lg">Sin confianza, una relación es solo un contrato de miedo y sospechas.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Feature 1 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-amber-100 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-lg flex items-center justify-center mb-6">
                                <LockKeyhole className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Confiabilidad Radical</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Cómo alinear tus palabras con tus acciones de manera que no dejes margen para la duda o la inseguridad.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-amber-100 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-lg flex items-center justify-center mb-6">
                                <Eye className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Transparencia Proactiva</h3>
                            <p className="text-slate-600 leading-relaxed">
                                No esperes a que pregunten. Aprende el método de compartir que elimina la necesidad de vigilancia constante.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-amber-100 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-lg flex items-center justify-center mb-6">
                                <Shield className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Límites Seguros</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Define bordes claros que protejan su relación de influencias externas y mantengan el vínculo sagrado y seguro.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Success and Transformation */}
            <section className="py-20 px-4 md:px-8 bg-white">
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 bg-slate-900 rounded-[3rem] p-8 md:p-16 text-white shadow-2xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-600/10 to-transparent pointer-events-none"></div>
                    <div className="w-full md:w-1/2 space-y-8 relative z-10">
                        <div className="bg-amber-500/20 text-amber-400 border border-amber-500/30 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest inline-block">
                            Evolución de la Relación
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold leading-tight">Del Miedo a la Libertad Absoluta.</h2>
                        <p className="text-lg text-slate-300 leading-relaxed">
                             Recuperar la confianza es un viaje emocional. Nuestro protocolo te guía paso a paso, desde la sospecha inicial hasta la paz total de saber que tu pareja es tu mayor aliado.
                        </p>
                        <div className="space-y-4">
                            {[
                                "Sanación de micro-traumas de confianza",
                                "El sistema de 'Depósitos de Seguridad'",
                                "Comunicación sin sospechas",
                                "Blindaje contra futuras rupturas"
                            ].map((item, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <TrendingUp className="w-5 h-5 text-amber-500" />
                                    <span className="text-slate-100 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 relative">
                        <div className="bg-amber-100/10 backdrop-blur-md border border-white/10 rounded-3xl p-8 space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center"><Sparkles className="w-6 h-6 text-white" /></div>
                                <h3 className="text-xl font-bold">El Índice de Confianza</h3>
                            </div>
                            <p className="text-slate-300">
                                Una herramienta exclusiva de autoevaluación para medir y mejorar la salud de su confianza en tiempo real.
                            </p>
                            <Link
                                href="https://go.centerpag.com/PPU38CQ9Q5C"
                                className="block w-full bg-amber-600 hover:bg-amber-700 text-white text-center font-bold py-4 rounded-xl transition-all shadow-lg"
                            >
                                Inicia la Construcción Ahora
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Final */}
            <section className="py-24 px-4 md:px-8 bg-amber-50 border-t border-amber-100 text-center">
                <div className="max-w-3xl mx-auto space-y-10">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900">Duerme en Paz de Nuevo.</h2>
                    <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto">
                        La confianza es el mayor regalo que puedes darte a ti mismo y a tu pareja. No dejes que las dudas sigan consumiendo tu energía.
                    </p>
                    <div className="flex flex-col items-center gap-4">
                        <Link
                            href="https://go.centerpag.com/PPU38CQ9Q5C"
                            className="bg-amber-600 hover:bg-amber-700 text-white text-lg md:text-xl font-bold py-5 px-12 rounded-2xl shadow-xl transition-all transform hover:-translate-y-1 w-full md:w-auto"
                        >
                            ¡Obtén la Guía de Confianza Inquebrantable!
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
