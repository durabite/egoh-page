import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Contact() {
  return (
    <section id="contacto" className="py-20 bg-neutral-100">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-light text-neutral-500 mb-2">CONEXIÓN</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-8">Contacto</h3>
          <p className="text-lg text-neutral-600 mb-8">
            ¿Tienes preguntas sobre las clases o los eventos? ¿Quieres más información? No dudes en contactarnos.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-6 mb-12">
            <div className="bg-white p-6 shadow-sm">
              <h4 className="font-bold text-xl mb-2">Ubicación</h4>
              <p>
                El Taller de la Plaza
                <br />
                Calle Principal #123
                <br />
                Ciudad, CP 12345
              </p>
            </div>
            <div className="bg-white p-6 shadow-sm">
              <h4 className="font-bold text-xl mb-2">Contacto</h4>
              <p>
                info@ivanegoh.com
                <br />
                +123 456 7890
              </p>
            </div>
            <div className="bg-white p-6 shadow-sm">
              <h4 className="font-bold text-xl mb-2">Horario</h4>
              <p>
                Lunes a Viernes: 9:00 - 20:00
                <br />
                Sábados: 10:00 - 14:00
              </p>
            </div>
          </div>

          <Link href="mailto:info@ivanegoh.com">
            <Button className="bg-neutral-800 hover:bg-neutral-700 text-white rounded-none px-8 py-6">
              Enviar mensaje
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

