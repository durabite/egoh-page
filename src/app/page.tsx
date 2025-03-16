"use client"

import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Classes from "@/components/classes"
import Events from "@/components/events"
import Registration from "@/components/registration"
import Gallery from "@/components/gallery"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        <Hero />
        <About />
        <Classes />
        <Events />
        <Registration />
        <Gallery />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

