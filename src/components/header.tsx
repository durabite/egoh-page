"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { MenuIcon } from "lucide-react"
import Menu from "./menu"
import Logo from "./logo"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    // Verificar el scroll inicial
    handleScroll()

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Menú flotante (fuera del header) */}
      <Menu isOpen={isOpen} onClose={() => setIsOpen(false)} />

      {/* Botón de menú (fuera del header pero posicionado relativamente a él) */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed top-4 left-4 z-[90] focus:outline-none transition-colors duration-300 ${
          scrolled ? "text-black" : "text-white"
        }`}
        aria-label="Toggle menu"
      >
        <MenuIcon className="h-6 w-6" />
      </button>

      {/* Header */}
      <header
        className={`fixed top-0 left-0 w-full transition-all duration-300 z-[50] ${
          scrolled ? "bg-white/80 backdrop-blur-sm shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-center">
          {/* Logo centrado con tamaño reducido y alineado con el menú */}
          <div className="w-full flex justify-center">
            <Link href="/" className="text-center pl-6">
              <Logo className={`h-10 max-w-[140px] ${scrolled ? "fill-black" : "fill-white"}`} />
            </Link>
          </div>
        </div>
      </header>
    </>
  )
}

