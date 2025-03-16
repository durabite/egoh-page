import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative h-screen">
      {/* Imagen de fondo */}
      <Image
        src="/images/bg-hero-section.jpg"
        alt="Fondo artístico de Ivan Egoh"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay para mejorar la legibilidad del texto */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Contenido del Hero */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
        <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tight mb-4">Pintando Historias</h1>
        <div className="w-24 h-1 bg-white mb-6" />
        <h2 className="text-xl md:text-2xl text-white font-light max-w-2xl">CAPTURANDO LA ESENCIA EN CADA TRAZO</h2>
      </div>
    </section>
  )
}
