import Link from "next/link"
import Logo from "./logo"

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Logo className="h-8 max-w-[140px] fill-white mb-2" />
            <p className="text-neutral-400">Artista, Tatuador y Muralista</p>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            <Link href="#clases" className="text-neutral-400 hover:text-white transition">
              Clases
            </Link>
            <Link href="#eventos" className="text-neutral-400 hover:text-white transition">
              Eventos
            </Link>
            <Link href="#registro" className="text-neutral-400 hover:text-white transition">
              Registro
            </Link>
            <Link href="#contacto" className="text-neutral-400 hover:text-white transition">
              Contacto
            </Link>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-8 pt-8 text-center text-neutral-400">
          <p>&copy; {new Date().getFullYear()} Ivan Egoh. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

