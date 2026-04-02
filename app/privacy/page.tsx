import { LegalFooter } from "@/components/legal-footer"

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-white flex flex-col font-sans">
            <main className="flex-grow container mx-auto px-4 py-12 max-w-3xl">
                <h1 className="text-3xl font-bold mb-8 text-slate-900">Política de Privacidad</h1>

                <div className="prose prose-slate max-w-none text-slate-600 space-y-6">
                    <p>
                        Su privacidad es importante para nosotros. Es política de Infidelity Finder respetar su privacidad con respecto a cualquier información que podamos recopilar de usted a través de nuestro sitio web, Infidelity Finder, y otros sitios que poseemos y operamos.
                    </p>

                    <h2 className="text-xl font-semibold text-slate-800 mt-6">Información que recopilamos</h2>
                    <p>
                        Solo solicitamos información personal cuando realmente la necesitamos para brindarle un servicio. La recopilamos por medios justos y legales, con su conocimiento y consentimiento. También le informamos por qué la recopilamos y cómo se utilizará.
                    </p>

                    <h2 className="text-xl font-semibold text-slate-800 mt-6">Uso de los datos</h2>
                    <p>
                        Solo retenemos la información recopilada durante el tiempo que sea necesario para brindarle el servicio solicitado. Los datos que almacenamos los protegeremos dentro de medios comercialmente aceptables para evitar pérdidas y robos, así como el acceso, divulgación, copia, uso o modificación no autorizados.
                    </p>

                    <h2 className="text-xl font-semibold text-slate-800 mt-6">Intercambio de datos</h2>
                    <p>
                        No compartimos ninguna información de identificación personal públicamente ni con terceros, excepto cuando lo exija la ley.
                    </p>

                    <h2 className="text-xl font-semibold text-slate-800 mt-6">Cookies</h2>
                    <p>
                        Nuestro sitio web puede enlazar a sitios externos que no son operados por nosotros. Tenga en cuenta que no tenemos control sobre el contenido y las prácticas de estos sitios, y no podemos aceptar responsabilidad por sus respectivas políticas de privacidad.
                    </p>

                    <h2 className="text-xl font-semibold text-slate-800 mt-6">Compromiso del Usuario</h2>
                    <p>
                        El usuario se compromete a hacer un uso adecuado de los contenidos e información que Infidelity Finder ofrece en el sitio y con carácter enunciativo, pero no limitativo:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>A) No participar en actividades que sean ilegales o contrarias a la buena fe y al orden público;</li>
                        <li>B) No difundir propaganda o contenidos de carácter racista, xenófobo, o de juegos de azar, cualquier tipo de pornografía ilegal, apología del terrorismo o contra los derechos humanos;</li>
                        <li>C) No causar daños a los sistemas físicos (hardware) y lógicos (software) de Infidelity Finder, de sus proveedores o de terceros, para introducir o difundir virus informáticos o cualquier otro sistema de hardware o software que sea capaz de causar los daños mencionados anteriormente.</li>
                    </ul>

                    <h2 className="text-xl font-semibold text-slate-800 mt-6">Más información</h2>
                    <p>
                        Esperamos que esto haya aclarado las cosas para usted y, como se mencionó anteriormente, si hay algo de lo que no está seguro si necesita o no, generalmente es más seguro dejar las cookies activadas en caso de que interactúe con una de las funciones que utiliza en nuestro sitio.
                    </p>

                    <p className="mt-8 text-sm">Esta política es efectiva a partir de {new Date().getFullYear()}.</p>
                </div>
            </main>
            <LegalFooter />
        </div>
    )
}
