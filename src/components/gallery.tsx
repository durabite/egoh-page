import Image from "next/image"

export default function Gallery() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-light text-neutral-500 mb-2">INSPIRACIÓN</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-8">Galería de Obras</h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <div key={item} className="aspect-square relative overflow-hidden group">
              <Image
                src={`/images/obra0${item}.jpg `}
                alt={`Obra de arte ${item}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

