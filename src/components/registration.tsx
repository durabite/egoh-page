import ArtistRegistration from "@/components/artist-registration"

export default function Registration() {
  return (
    <section id="registro" className="py-20 bg-neutral-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-light text-neutral-400 mb-2">PARTICIPACIÓN</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-8">Registro de Artistas</h3>
          <p className="text-lg text-neutral-300">
            ¿Eres artista y quieres participar en nuestros eventos? Regístrate para ser considerado en futuras
            exposiciones y eventos culturales. Los cupos son limitados, pero tu registro nos ayuda a crear eventos en
            espacios más amplios.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <ArtistRegistration />
        </div>
      </div>
    </section>
  )
}

