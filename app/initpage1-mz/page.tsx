"use client"

import { LegalFooter } from "@/components/legal-footer"
import { Check, ShieldCheck, Lock, Battery, MapPin, Calculator, Trash2, Cloud, Smartphone, Search } from "lucide-react"
import Link from "next/link"

export default function InitPage1MZ() {
    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900">

            {/* Hero Section */}
            <section className="bg-white pt-12 pb-16 px-4 md:px-8 shadow-sm">
                <div className="max-w-4xl mx-auto text-center space-y-6">
                    <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
                        El lenguaje corporal te dice si están mintiendo. <br className="hidden md:block" />
                        <span className="text-blue-600">Este kit te dice qué es lo que ocultan.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Ahora tienes las habilidades para leer su rostro. Pero si quieres una <strong>prueba concreta</strong>, necesitas mirar donde el 99% de los secretos están escondidos: <strong className="text-blue-600">La huella digital.</strong>
                    </p>
                </div>
            </section>

            {/* Video Placeholder */}
            <section className="py-10 px-4 md:px-8 bg-slate-100">
                <div className="max-w-3xl mx-auto">
                    <div className="bg-slate-800 rounded-2xl aspect-video flex items-center justify-center relative overflow-hidden shadow-xl">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
                        <div className="text-center z-10 p-6">
                            <div className="w-20 h-20 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-4 backdrop-blur-sm border border-white/20">
                                <div className="w-0 h-0 border-l-[20px] border-l-white border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1"></div>
                            </div>
                            <p className="text-white/80 text-sm md:text-base max-w-md">
                                &ldquo;La mayoría de la gente piensa que borrar un mensaje borra la evidencia. No es así. Su teléfono registra todo...&rdquo;
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Body Copy Section */}
            <section className="py-16 px-4 md:px-8 bg-white">
                <div className="max-w-3xl mx-auto prose prose-lg prose-slate">
                    <p className="text-slate-700 leading-relaxed">
                        <strong>Querido amigo/a,</strong>
                    </p>
                    <p className="text-slate-700 leading-relaxed">
                        Felicitaciones por asegurar el método de <em>Lectura de Señales</em>. Ahora estás kilómetros por delante de todos los demás cuando se trata de detectar una mentira.
                    </p>
                    <p className="text-slate-700 leading-relaxed">
                        Pero seamos honestos por un segundo.
                    </p>
                    <p className="text-slate-900 font-semibold text-xl leading-relaxed">
                        Saber que están mintiendo es doloroso. <span className="text-blue-600">Probarlo es poder.</span>
                    </p>
                    <p className="text-slate-700 leading-relaxed">
                        Cuando confrontas a tu pareja basándote en un &ldquo;sentimiento&rdquo; o una &ldquo;microexpresión,&rdquo; pueden manipularte. Pueden decirte, <em>&ldquo;Estás loco/a,&rdquo;</em> o <em>&ldquo;Te estás imaginando cosas.&rdquo;</em>
                    </p>
                    <p className="text-slate-900 font-semibold leading-relaxed">
                        Pero no pueden discutir con una captura de pantalla. No pueden discutir con registros digitales.
                    </p>
                    <p className="text-slate-700 leading-relaxed">
                        La mayoría de las parejas infieles se creen inteligentes. Borran los chats de WhatsApp. Limpian su historial de navegación. Usan el &ldquo;Modo Efímero.&rdquo;
                    </p>
                    <p className="text-slate-900 font-bold text-xl">
                        Pero cometen errores.
                    </p>
                    <p className="text-slate-700 leading-relaxed">
                        Olvidan que los smartphones están diseñados para rastrear todo. Cada acción deja un residuo digital. Incluso si borran el mensaje, el teléfono recuerda el uso de la aplicación. Incluso si apagan el GPS, los metadatos de las fotos recuerdan la ubicación.
                    </p>
                    <p className="text-blue-600 font-bold text-xl">
                        Solo necesitas saber dónde mirar.
                    </p>
                </div>
            </section>

            {/* Product Introduction */}
            <section className="py-16 px-4 md:px-8 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-blue-400 text-lg font-semibold mb-4">Presentando:</p>
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center">
                            <Smartphone className="w-8 h-8 text-blue-400" />
                        </div>
                        <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center">
                            <Search className="w-8 h-8 text-blue-400" />
                        </div>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
                        📱 El Kit de Auditoría Digital
                    </h2>
                    <p className="text-xl md:text-2xl text-slate-300 font-medium">
                        Cómo encontrar pruebas concretas sin ser un hacker
                    </p>
                    <p className="text-slate-400 mt-6 max-w-2xl mx-auto leading-relaxed">
                        Esto no es una aplicación de espionaje. No es un software ilegal. Es una <strong className="text-white">guía paso a paso</strong> sobre cómo auditar dispositivos digitales de manera efectiva para encontrar lo que está oculto a plena vista.
                    </p>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-16 px-4 md:px-8 bg-slate-50">
                <div className="max-w-5xl mx-auto">
                    <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-slate-900">
                        Esto es lo que descubrirás dentro:
                    </h3>

                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Feature 1 */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-all hover:-translate-y-1">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <Battery className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg text-slate-900 mb-2">🔋 La técnica de la &ldquo;Traición de la Batería&rdquo;</h4>
                                    <p className="text-slate-600 leading-relaxed">
                                        Cómo ver instantáneamente qué aplicaciones se estão usando mais (y a qué horas), incluso si el ícono está oculto de la pantalla de inicio.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Feature 2 */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-all hover:-translate-y-1">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-red-100 text-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg text-slate-900 mb-2">📍 La cronología de ubicación</h4>
                                    <p className="text-slate-600 leading-relaxed">
                                        Cómo acceder al mapa oculto dentro de las cuentas de Google y Apple que muestra exactamente dónde ha estado el teléfono, minuto a minuto.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Feature 3 */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-all hover:-translate-y-1">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Calculator className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg text-slate-900 mb-2">🛡️ Las bóvedas de &ldquo;Calculadora&rdquo;</h4>
                                    <p className="text-slate-600 leading-relaxed">
                                        ¿Es eso realmente una aplicación de calculadora? Aprende a detectar aplicaciones falsas que son en realidad bóvedas secretas para fotos y mensajes.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Feature 4 */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-all hover:-translate-y-1">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <Trash2 className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg text-slate-900 mb-2">🗑️ La carpeta fantasma</h4>
                                    <p className="text-slate-600 leading-relaxed">
                                        El único lugar dentro de la galería de fotos que el 90% de las personas olvida vaciar después de borrar fotos incriminatorias.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Feature 5 - Full Width */}
                        <div className="md:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-all hover:-translate-y-1">
                            <div className="flex items-start gap-4 max-w-2xl mx-auto">
                                <div className="w-12 h-12 bg-cyan-100 text-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <Cloud className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg text-slate-900 mb-2">☁️ La puerta trasera de la nube</h4>
                                    <p className="text-slate-600 leading-relaxed">
                                        Cómo encontrar mensajes que fueron borrados del teléfono pero que aún viven en la copia de seguridad de la nube.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Urgency Section */}
            <section className="py-16 px-4 md:px-8 bg-amber-50 border-y-4 border-amber-400">
                <div className="max-w-3xl mx-auto text-center space-y-6">
                    <h3 className="text-2xl md:text-3xl font-bold text-amber-900">
                        Por qué necesitas esto ahora mismo:
                    </h3>
                    <p className="text-lg text-amber-800 leading-relaxed">
                        Si sales de esta página, es posible que nunca vuelvas a encontrar esta oferta. Pero lo más importante, <strong>la evidencia digital desaparece con el tiempo.</strong>
                    </p>
                    <p className="text-lg text-amber-900 font-semibold">
                        Cada día que esperas es un día en el que podrían limpiar la caché o actualizar el software.
                    </p>
                    <p className="text-amber-800 leading-relaxed">
                        No necesitas ser un genio de la tecnología. No necesitas adivinar contraseñas. Solo necesitas seguir la lista de verificación.
                    </p>
                    <p className="text-xl font-bold text-amber-900 pt-4">
                        Obtén la paz mental que te mereces.
                    </p>
                </div>
            </section>

            {/* Offer Section */}
            <section className="py-20 px-4 md:px-8 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
                <div className="max-w-3xl mx-auto text-center space-y-8">
                    <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                        <p className="text-blue-200 text-lg font-medium mb-2">Una sola vez</p>
                        <div className="flex items-center justify-center gap-3">
                            <span className="text-3xl text-white/50 line-through">$97</span>
                            <span className="text-6xl md:text-7xl font-extrabold text-white">$47</span>
                        </div>
                        <p className="text-yellow-400 font-bold mt-3 text-lg">
                            🔥 ¡Eso es un 50% de descuento - Una Sola Vez!
                        </p>
                    </div>

                    <div className="space-y-4">
                        <Link
                            href="https://app.monetizze.com.br/checkout/KEH435314"
                            className="block w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-lg md:text-xl font-bold py-5 px-10 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1 border-2 border-orange-400"
                        >
                            ✅ ¡SÍ! Agregar el &ldquo;Kit de Auditoría Digital&rdquo; a mi pedido
                        </Link>
                        <p className="text-blue-100 text-sm">
                            Haz clic aquí para agregar por solo $47. Acceso Instantáneo.
                        </p>
                    </div>

                </div>
            </section>

            {/* Guarantee Section */}
            <section className="py-16 px-4 md:px-8 bg-white">
                <div className="max-w-2xl mx-auto">
                    <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-8 text-center">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <ShieldCheck className="w-8 h-8 text-green-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-green-900 mb-4">
                            🔒 Garantía de 100% libre de riesgo
                        </h3>
                        <p className="text-green-800 leading-relaxed">
                            Al igual que el curso principal, si usas estas técnicas y encuentras que son demasiado difíciles o no útiles, simplemente envíanos un correo electrónico y te reembolsaremos este upgrade de inmediato. <strong>Sin preguntas.</strong>
                        </p>
                    </div>
                </div>
            </section>

            <LegalFooter />
        </div>
    )
}
