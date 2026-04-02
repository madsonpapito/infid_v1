import Link from "next/link"

export function LegalFooter() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-slate-50 border-t border-slate-200 py-12 mt-auto">
            <div className="container mx-auto px-4 text-center text-slate-500 text-sm">
                <div className="mb-6 space-y-2">
                    <p className="font-semibold text-slate-700">Monkey Ads Mugiwara Ventures LTDA</p>
                    <p>CNPJ: 49.159.132/0001-50</p>
                    <p>
                        Rua Idalino Candido Rabelo, 688A, Bela Vista
                        <br />
                        Itapecerica - MG, 35550-000
                    </p>
                </div>

                <div className="flex justify-center gap-6 mb-6">
                    <Link href="/privacy" className="hover:text-slate-900 transition-colors">
                        Política de Privacidad
                    </Link>
                    <Link href="/terms" className="hover:text-slate-900 transition-colors">
                        Términos de Uso
                    </Link>
                </div>

                <p>
                    &copy; {currentYear} Infidelity Finder. Todos los derechos reservados.
                </p>
                <p className="mt-2 text-xs text-slate-400">
                    Este sitio no está afiliado a Facebook ni a ninguna entidad de Facebook. Una vez que sales de Facebook, no es responsabilidad de ellos, sino de nuestro sitio web.
                </p>
            </div>
        </footer>
    )
}
