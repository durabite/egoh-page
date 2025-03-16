import EventCard from "@/components/event-card"

export default function Events() {
  return (
    <section id="eventos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-light text-neutral-500 mb-2">COMUNIDAD</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-8">Eventos Culturales</h3>
          <p className="text-lg text-neutral-600">
            Ivan Egoh organiza eventos culturales que reúnen a artistas de todas las disciplinas. Exposiciones, talleres
            y encuentros que fomentan el intercambio artístico.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <EventCard
            title="1ra Exposicion del Taller de la Plaza"
            date="28 de Julio, 2024"
            location="Plaza de las Estrellas"
            image="/images/1raExpo.JPG"
            availableSpots={0}
          />
          <EventCard
            title="Primera feria de las artes"
            date="5 y 6 de Abril, 2025"
            location="Plaza de las Estrellas"
            image="/images/PlazaDeLasEstrellas.jpg"
            availableSpots={30}
          />
        </div>

        
      </div>
    </section>
  )
}
