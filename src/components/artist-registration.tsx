"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle } from "lucide-react"

export default function ArtistRegistration() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el formulario
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="bg-neutral-800 p-8 text-center">
        <CheckCircle className="h-16 w-16 mx-auto mb-4 text-green-500" />
        <h3 className="text-2xl font-bold mb-2">¡Registro Completado!</h3>
        <p className="text-neutral-300 mb-6">
          Gracias por registrarte como artista. Te contactaremos pronto con más información sobre los próximos eventos.
        </p>
        <Button
          onClick={() => setSubmitted(false)}
          variant="outline"
          className="border-white text-white hover:bg-white hover:text-neutral-900"
        >
          Volver al formulario
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Nombre completo</Label>
          <Input
            id="name"
            placeholder="Tu nombre completo"
            required
            className="bg-neutral-800 border-neutral-700 text-white"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Correo electrónico</Label>
          <Input
            id="email"
            type="email"
            placeholder="tu@email.com"
            required
            className="bg-neutral-800 border-neutral-700 text-white"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Teléfono</Label>
          <Input
            id="phone"
            placeholder="Tu número de teléfono"
            className="bg-neutral-800 border-neutral-700 text-white"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="discipline">Disciplina artística</Label>
          <Select>
            <SelectTrigger className="bg-neutral-800 border-neutral-700 text-white">
              <SelectValue placeholder="Selecciona tu disciplina" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="pintura">Pintura</SelectItem>
              <SelectItem value="escultura">Escultura</SelectItem>
              <SelectItem value="fotografia">Fotografía</SelectItem>
              <SelectItem value="instalacion">Instalación</SelectItem>
              <SelectItem value="mixta">Técnica mixta</SelectItem>
              <SelectItem value="otra">Otra</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="portfolio">Enlace a tu portafolio (opcional)</Label>
        <Input
          id="portfolio"
          placeholder="https://tuportfolio.com"
          className="bg-neutral-800 border-neutral-700 text-white"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="bio">Breve biografía artística</Label>
        <Textarea
          id="bio"
          placeholder="Cuéntanos sobre tu trayectoria y estilo artístico..."
          rows={4}
          required
          className="bg-neutral-800 border-neutral-700 text-white resize-none"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="interests">¿En qué tipo de eventos te gustaría participar?</Label>
        <Textarea
          id="interests"
          placeholder="Exposiciones, talleres, encuentros..."
          rows={3}
          className="bg-neutral-800 border-neutral-700 text-white resize-none"
        />
      </div>

      <Button type="submit" className="w-full bg-white text-neutral-900 hover:bg-neutral-200">
        Enviar registro
      </Button>
    </form>
  )
}

