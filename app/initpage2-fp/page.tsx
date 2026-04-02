"use client"

import { LegalFooter } from "@/components/legal-footer"
import { Check, Shield, Headphones, Mic, Scroll, Brain, Lock, XCircle, Heart } from "lucide-react"
import Link from "next/link"

export default function InitPage2FP() {
    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-800">

            {/* Hero Section */}
            <section className="bg-white pt-12 pb-16 px-4 md:px-8 shadow-sm">
                <div className="max-w-4xl mx-auto text-center space-y-6">
                    <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
                        Encontrar la verdad es solo la mitad de la batalla. <br className="hidden md:block" />
                        <span className="text-teal-600">Ahora, debes ganar la confrontación.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        No dejes que tus emociones te saboteen. Aprende cómo mantenerte <strong>100% en calma</strong>, bloquear la manipulación y controlar la conversación sin decir ni una palabra de la que te arrepientas.
                    </p>
                </div>
            </section>

            {/* Emotional Pain Points */}
            <section className="py-16 px-4 md:px-8 bg-slate-50">
                <div className="max-w-3xl mx-auto">
                    <div className="prose prose-lg prose-slate mx-auto">
                        <p className="text-slate-700 leading-relaxed font-medium">
                            Déjame hacerte una pregunta difícil.
                        </p>
                        <p className="text-slate-700 leading-relaxed">
                            Cuando llegue el momento... cuando finalmente te sientes a confrontar a tu pareja con la verdad... <strong>¿estás listo/a?</strong>
                        </p>
                        <p className="text-slate-700 leading-relaxed">
                            ¿O tienes miedo de que:
                        </p>
                        <ul className="space-y-2 list-none pl-0">
                            <li className="flex items-start gap-3">
                                <XCircle className="w-6 h-6 text-red-400 mt-1 flex-shrink-0" />
                                <span>¿Tú voz tiemble?</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <XCircle className="w-6 h-6 text-red-400 mt-1 flex-shrink-0" />
                                <span>¿Empieces a llorar y pierdas el hilo de tus pensamientos?</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <XCircle className="w-6 h-6 text-red-400 mt-1 flex-shrink-0" />
                                <span>¿Te manipulen con sus palabras y te hagan sentir como el culpable?</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <XCircle className="w-6 h-6 text-red-400 mt-1 flex-shrink-0" />
                                <span>¿Explotes de ira y parezcas &ldquo;loco/a&rdquo;?</span>
                            </li>
                        </ul>
                        <p className="text-slate-700 leading-relaxed">
                            Si un manipulador te ve perdiendo el control, ellos ganan. Usan tus emociones en tu contra. Te manipulan. Te hacen dudar de tu propia realidad.
                        </p>
                        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm my-8">
                            <p className="font-bold text-slate-900 text-lg mb-2">
                                Necesitas ser una fortaleza. Necesitas ser a prueba de balas.
                            </p>
                            <p className="text-teal-700 font-bold text-xl uppercase">
                                Necesitas el Protocolo de Blindaje Emocional.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Introduction */}
            <section className="py-20 px-4 md:px-8 bg-teal-50">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <p className="text-teal-600 font-semibold uppercase tracking-wider mb-2">Presentando</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 flex items-center justify-center gap-3">
                            <Shield className="w-8 h-8 md:w-10 md:h-10 text-teal-600" />
                            El Protocolo de Blindaje Emocional
                        </h2>
                        <p className="text-lg text-slate-600 font-medium">
                            (Guía de Audio + Guiones de Emergencia)
                        </p>
                        <p className="text-slate-600 mt-6 max-w-2xl mx-auto leading-relaxed">
                            Esto no es terapia. Esto es <strong className="text-teal-700">preparación emocional táctica</strong>. Diseñado para ser usado minutos antes de una conversación difícil, este protocolo te brinda la fuerza mental para manejar cualquier resultado con dignidad y poder.
                        </p>
                    </div>

                    {/* Features Grid */}
                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Audio Feature */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-teal-100/50 hover:shadow-md transition-all">
                            <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-xl flex items-center justify-center mb-4">
                                <Headphones className="w-6 h-6" />
                            </div>
                            <h3 className="font-bold text-xl text-slate-900 mb-3">🎧 El Audio &ldquo;SOS&rdquo; de 5 Minutos</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Escucha esto inmediatamente antes de la confrontación. Utiliza técnicas neurolingüísticas para bajar tu ritmo cardíaco y detener el temblor de la respuesta de &ldquo;luchar o huir&rdquo;.
                            </p>
                        </div>

                        {/* Grey Rock Method */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-teal-100/50 hover:shadow-md transition-all">
                            <div className="w-12 h-12 bg-slate-100 text-slate-600 rounded-xl flex items-center justify-center mb-4">
                                <Mic className="w-6 h-6" />
                            </div>
                            <h3 className="font-bold text-xl text-slate-900 mb-3">🗿 El método de la &ldquo;Piedra Gris&rdquo;</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Cómo volverte emocionalmente poco interesante para un manipulador. Si intentan provocarte, esta técnica los detendrá en seco.
                            </p>
                        </div>

                        {/* Dignity Scripts */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-teal-100/50 hover:shadow-md transition-all">
                            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                                <Scroll className="w-6 h-6" />
                            </div>
                            <h3 className="font-bold text-xl text-slate-900 mb-3">📜 Los Guiones de Dignidad</h3>
                            <p className="text-slate-600 mb-4">Frases exactas para decir cuando intenten culparte:</p>
                            <div className="bg-slate-50 p-4 rounded-lg text-sm border-l-4 border-blue-400 space-y-2 italic text-slate-600">
                                <p>&ldquo;Cuando digan: &apos;¡Estás invadiendo mi privacidad!&apos;&rdquo;</p>
                                <p>&ldquo;Cuando digan: &apos;Estás loco/a o eres paranoico/a.&apos;&rdquo;</p>
                            </div>
                        </div>

                        {/* Detox */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-teal-100/50 hover:shadow-md transition-all">
                            <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-4">
                                <Brain className="w-6 h-6" />
                            </div>
                            <h3 className="font-bold text-xl text-slate-900 mb-3">🧠 Desintoxicación Post-Confrontación</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Cómo detener los pensamientos obsesivos (&ldquo;rumiación&rdquo;) después de la pelea, para que realmente puedas dormir.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Visual/Calm Section */}
            <section className="py-16 px-4 md:px-8 bg-white relative overflow-hidden">
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
                    <div className="w-full md:w-1/2 relative bg-slate-100 rounded-3xl aspect-square md:aspect-[4/5] overflow-hidden shadow-lg">
                        {/* Placeholder for serene image */}
                        <div className="absolute inset-0 bg-gradient-to-t from-teal-900/40 to-transparent"></div>
                        <div className="absolute bottom-6 left-6 right-6 text-white bg-black/20 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                            <div className="flex items-center gap-3 mb-2">
                                <Headphones className="w-5 h-5 text-teal-300" />
                                <span className="font-medium text-teal-100 text-sm uppercase tracking-wide">Sesión de Audio</span>
                            </div>
                            <p className="text-lg font-medium leading-snug">
                                &ldquo;Ponte tus auriculares, escucha mi voz y toma prestada mi calma.&rdquo;
                            </p>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 space-y-6">
                        <h3 className="text-3xl font-bold text-slate-900">Por qué esto es diferente</h3>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            No puedes &ldquo;leer&rdquo; un manual cuando estás en pánico. Es por eso que este programa es una <strong>guía basada en audio</strong>.
                        </p>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            Sé la persona que mantiene el control. El que grita pierde. <strong>El que susurra con confianza gana.</strong>
                        </p>
                        <div className="bg-teal-50 p-6 rounded-xl border border-teal-100 flex items-start gap-4">
                            <Heart className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                            <div>
                                <h4 className="font-bold text-teal-900 mb-1">Paz Mental</h4>
                                <p className="text-teal-800 text-sm leading-relaxed">
                                    Quiero que manejes esta situación como una Reina/Rey. Con dignidad, elegancia y control absoluto.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Offer Section */}
            <section className="py-20 px-4 md:px-8 bg-slate-50 border-t border-slate-200">
                <div className="max-w-3xl mx-auto text-center space-y-8">
                    <div>
                        <p className="text-slate-500 text-lg mb-2 uppercase tracking-wide font-medium">Oferta Especial</p>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
                            Solo $47 <span className="text-xl font-normal text-slate-500 block mt-2">(Pago único)</span>
                        </h2>
                        <p className="text-slate-600 max-w-lg mx-auto leading-relaxed">
                            Este protocolo normalmente está reservado para mis clientes de mentoría privada. Pero quiero que estés a salvo.
                        </p>
                    </div>

                    <div className="space-y-4 pt-4">
                        <Link
                            href="https://go.plataformafortpay.com.br/mdyshb7mie"
                            className="block w-full md:max-w-xl mx-auto bg-teal-600 hover:bg-teal-700 text-white text-lg md:text-xl font-bold py-5 px-10 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
                        >
                            ¡SÍ! Agregar el &ldquo;Protocolo de Blindaje Emocional&rdquo; a mi pedido
                        </Link>
                        <p className="text-slate-500 text-sm">
                            Acceso Digital Instantáneo • Pago Seguro
                        </p>
                    </div>

                </div>
            </section>

            <LegalFooter />
        </div>
    )
}
