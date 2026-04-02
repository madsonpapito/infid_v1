"use client"

import { LegalFooter } from "@/components/legal-footer"
import { Check, ShieldCheck, Lock, Eye, BookOpen, MessageCircle } from "lucide-react"
import Link from "next/link"
import { FacebookTracker } from "@/components/FacebookTracker"

export default function InitPageMZ() {
    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
            {/* Facebook Tracking - envia evento ViewContent com dados enriquecidos */}
            <FacebookTracker
                eventName="ViewContent"
                contentName="Sales Page - Reading Signs - MZ"
                contentCategory="Offer"
                customData={{ value: 37, currency: "USD" }}
            />

            {/* Hero Section */}
            <section className="bg-white pt-20 pb-16 px-4 md:px-8 shadow-sm">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <div className="inline-block bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 tracking-wide uppercase">
                        Descubre la Verdad
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
                        ¿Tu pareja está ocultando algo? <br className="hidden md:block" />
                        <span className="text-blue-600">Aprende a leer las señales.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        El método probado para identificar mentiras a través del lenguaje corporal y la psicología conductual. Recupera tu paz mental hoy mismo.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8">
                        <Link
                            href="https://app.monetizze.com.br/checkout/KEJ382325"
                            className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white text-lg font-bold py-4 px-10 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
                        >
                            Obtén Acceso Ahora por $37
                        </Link>
                    </div>
                    <p className="text-sm text-slate-400 mt-4 flex items-center justify-center gap-2">
                        <ShieldCheck className="w-4 h-4" /> Compra 100% Segura y Discreta
                    </p>
                </div>
            </section>

            {/* Benefits Grid */}
            <section className="py-20 px-4 md:px-8 bg-slate-50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900">Lo Que Aprenderás</h2>
                        <p className="text-slate-600 mt-4 text-lg">Técnicas avanzadas simplificadas para aplicación inmediata.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Benefit 1 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6">
                                <Eye className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Lectura del Lenguaje Corporal</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Identifica microexpresiones y gestos involuntarios que revelan mentiras y omisiones en segundos.
                            </p>
                        </div>

                        {/* Benefit 2 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6">
                                <MessageCircle className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Técnicas de Conversación</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Saber exactamente qué preguntas hacer y cómo analizar las respuestas para descubrir la verdad sin confrontaciones agresivas.
                            </p>
                        </div>

                        {/* Benefit 3 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6">
                                <BookOpen className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Reconexión de Parejas</h3>
                            <p className="text-slate-600 leading-relaxed">
                                No se trata solo de descubrir mentiras. Aprende técnicas para reavivar la llama y reconstruir la confianza si ese es tu deseo.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Breakdown Section */}
            <section className="py-20 px-4 md:px-8 bg-white">
                <div className="max-w-4xl mx-auto bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-100">
                    <h2 className="text-3xl font-bold text-center mb-10">Contenido del Entrenamiento</h2>
                    <div className="space-y-4">
                        {[
                            "Módulo 1: Los fundamentos de la mentira y cómo reacciona el cerebro.",
                            "Módulo 2: Lectura de ojos, manos y postura – El cuerpo habla.",
                            "Módulo 3: Analizando mensajes de texto y comportamiento en línea.",
                            "Módulo 4: El Método de la Verdad – Cómo confrontar con seguridad.",
                            "Bono: Guía para Reconstruir la Confianza y la Intimidad."
                        ].map((item, index) => (
                            <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm">
                                <div className="bg-green-100 text-green-600 p-1 rounded-full mt-0.5">
                                    <Check className="w-4 h-4" />
                                </div>
                                <p className="text-slate-700 font-medium">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 md:px-8 bg-gradient-to-br from-blue-600 to-blue-800 text-white text-center">
                <div className="max-w-3xl mx-auto space-y-8">
                    <h2 className="text-3xl md:text-5xl font-bold">Deja de Vivir en la Duda.</h2>
                    <p className="text-blue-100 text-lg md:text-xl">
                        Obtén acceso inmediato a todo el contenido y descubre la verdad hoy mismo. Garantía incondicional de 7 días.
                    </p>
                    <div className="flex flex-col items-center gap-4">
                        <Link
                            href="https://app.monetizze.com.br/checkout/KEJ382325"
                            className="bg-white text-blue-700 hover:bg-slate-100 text-lg font-bold py-4 px-10 rounded-xl shadow-lg transition-all transform hover:-translate-y-1 w-full md:w-auto"
                        >
                            ¡Sí! Quiero Acceso Inmediato
                        </Link>
                        <div className="flex items-center gap-2 text-sm text-blue-200 opacity-90">
                            <Lock className="w-4 h-4" /> Pago Seguro vía Monetizze
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 px-4 md:px-8 bg-slate-50">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">Preguntas Frecuentes</h2>
                    <div className="space-y-6">
                        {/* FAQ Item 1 */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                            <h3 className="font-bold text-lg mb-2 text-slate-800">¿Es seguro comprar?</h3>
                            <p className="text-slate-600">Sí, 100% seguro. El pago es procesado por Monetizze, una de las plataformas más seguras. Tus datos están protegidos.</p>
                        </div>
                        {/* FAQ Item 2 */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                            <h3 className="font-bold text-lg mb-2 text-slate-800">¿Cómo obtengo acceso?</h3>
                            <p className="text-slate-600">Inmediatamente después de la confirmación del pago, recibirás un correo electrónico con tu usuario y contraseña para acceder al área de miembros.</p>
                        </div>
                        {/* FAQ Item 3 */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                            <h3 className="font-bold text-lg mb-2 text-slate-800">¿Funciona para cualquier relación?</h3>
                            <p className="text-slate-600">Sí. Las técnicas de lenguaje corporal y psicología son universales y funcionan independientemente de la duración de la relación.</p>
                        </div>
                    </div>
                </div>
            </section>

            <LegalFooter />
        </div>
    )
}
