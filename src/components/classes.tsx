import { Palette } from "lucide-react"
import ClassInfo from "@/components/class-info"

export default function Classes() {
  return (
    <section id="clases" className="py-20 bg-neutral-100">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-light text-neutral-500 mb-2">EXPERIENCIA</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-8">Clases de Arte</h3>
          <p className="text-lg text-neutral-600">
            Descubre el artista que llevas dentro con nuestras clases personalizadas en "El Taller de la Plaza". Aprende
            diversas técnicas y desarrolla tu propio estilo.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <ClassInfo
            title="Pintura al Óleo"
            description="Aprende las técnicas clásicas de pintura al óleo, desde la preparación del lienzo hasta la creación de obras maestras."
            icon={<Palette className="h-10 w-10" />}
            schedule="Lunes y Miércoles, 16:00 - 19:00"
          />
          <ClassInfo
            title="Acuarela"
            description="Domina el arte de la acuarela y sus técnicas únicas para crear obras llenas de luz y transparencia."
            icon={<Palette className="h-10 w-10" />}
            schedule="Martes y Jueves, 10:00 - 13:00"
          />
          <ClassInfo
            title="Arte Contemporáneo"
            description="Explora las tendencias actuales del arte y desarrolla proyectos innovadores con diversas técnicas mixtas."
            icon={<Palette className="h-10 w-10" />}
            schedule="Sábados, 10:00 - 14:00"
          />
        </div>
      </div>
    </section>
  )
}

