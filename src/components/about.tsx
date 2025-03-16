import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Columna izquierda con imagen */}
          <div className="relative h-[680px] rounded-lg overflow-hidden">
            <Image
              src="/images/ivan-egoh.png"
              alt="Ivan Egoh - Artista"
              fill
              className="object-cover"
            />
          </div>

          {/* Columna derecha con información */}
          <div className="max-w-xl">
            <h2 className="text-3xl font-light text-neutral-500 mb-2">MAESTRO</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-8">Ivan Egoh</h3>
            <p className="text-lg text-neutral-600 leading-relaxed mb-8">
              Artista y maestro dedicado a compartir la pasión por el arte y la pintura. Con más de 15 años de
              experiencia, Ivan ha formado a cientos de artistas y organizado eventos culturales que enriquecen la
              comunidad artística.
            </p>
            <p className="text-lg text-neutral-600 leading-relaxed mb-8">
              Especializado en diversas técnicas como óleo, acuarela y arte contemporáneo, Ivan Egoh combina su talento
              como artista, tatuador y muralista para ofrecer una perspectiva única en sus clases y talleres.
            </p>
            <div className="flex justify-start">
              <Link href="#clases">
                <Button className="bg-neutral-800 hover:bg-neutral-700 text-white rounded-none px-8 py-6">
                  Descubre las clases
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

