import Image from "next/image"

export default function Gallery() {
  // Array de rutas de imágenes estáticas
  const imagePaths = [
    "/images/obra01.jpg",
    "/images/obra02.jpg",
    "/images/obra03.jpg",
    "/images/obra04.jpg",
    "/images/obra05.jpg",
    "/images/obra06.jpg",
    "/images/obra07.jpg",
    "/images/obra08.jpg",
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-light text-neutral-500 mb-2">INSPIRACIÓN</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-8">Galería de Obras</h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {imagePaths.map((path, index) => (
            <div key={index} className="aspect-square relative overflow-hidden group">
              <Image
                src={path}
                alt={`Obra de arte ${index + 1}`}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
