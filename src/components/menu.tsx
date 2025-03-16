"use client"

import { X } from "lucide-react"
import Link from "next/link"

interface MenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function Menu({ isOpen, onClose }: MenuProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100]" onClick={onClose}>
      {/* Overlay semitransparente */}
      <div className="absolute inset-0 bg-black/20" onClick={onClose}></div>

      {/* Panel de menú */}
      <div
        className="relative bg-white w-64 h-full shadow-xl p-0"
        style={{ backgroundColor: "white" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <span className="font-bold">Menú</span>
          <button onClick={onClose} className="text-neutral-800 focus:outline-none" aria-label="Close menu">
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex flex-col p-0">
          <Link
            href="#clases"
            className="text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 transition py-4 px-6 border-b border-neutral-100"
            onClick={onClose}
          >
            Clases
          </Link>
          <Link
            href="#eventos"
            className="text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 transition py-4 px-6 border-b border-neutral-100"
            onClick={onClose}
          >
            Eventos
          </Link>
          <Link
            href="#registro"
            className="text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 transition py-4 px-6 border-b border-neutral-100"
            onClick={onClose}
          >
            Registro
          </Link>
          <Link
            href="#contacto"
            className="text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 transition py-4 px-6 border-b border-neutral-100"
            onClick={onClose}
          >
            Contacto
          </Link>
        </nav>

        <div className="p-6 text-sm text-neutral-500">
          <p className="mb-2">El Taller de la Plaza</p>
          <p>info@ivanegoh.com</p>
        </div>
      </div>
    </div>
  )
}

