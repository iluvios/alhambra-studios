"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Play } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const translations = {
  en: {
    nav: {
      back: "Back to Gateway",
      studios: "Studios",
      consulting: "Consulting",
      about: "About Us",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      title: "Alhambra Studios",
      subtitle: "All-inclusive video production",
      description: "Incredible content, made by friends",
    },
    brands: {
      title: "Brands that have worked with us",
      subtitle: "Trusted by leading organizations worldwide",
    },
    work: {
      title: "Our work",
      subtitle: "Discover our latest productions and documentaries",
    },
    services: {
      title: "Our services",
      subtitle: "Complete audiovisual production solutions",
    },
  },
  es: {
    nav: {
      back: "Volver al Portal",
      studios: "Studios",
      consulting: "Consulting",
      about: "Nosotros",
      projects: "Proyectos",
      contact: "Contacto",
    },
    hero: {
      title: "Alhambra Studios",
      subtitle: "Producción audiovisual integral",
      description: "Contenido increíble, hecho por amigos",
    },
    brands: {
      title: "Marcas que han trabajado con nosotros",
      subtitle: "Confianza de organizaciones líderes a nivel mundial",
    },
    work: {
      title: "Nuestro trabajo",
      subtitle: "Descubre nuestras últimas producciones y documentales",
    },
    services: {
      title: "Nuestros servicios",
      subtitle: "Soluciones completas de producción audiovisual",
    },
  },
}

const brands = [
  { name: "Gobierno de Paraguay", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Air Europa", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Gobierno de España", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Gobierno de México", logo: "/placeholder.svg?height=60&width=120" },
  { name: "TVE", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Atresmedia", logo: "/placeholder.svg?height=60&width=120" },
]

const projects = [
  {
    title: "SEXTA ERA",
    category: "Documentary Series",
    image: "/images/sexta-era.jpg",
  },
  {
    title: "SHAMANS",
    category: "Documentary",
    image: "/images/shamans.jpg",
  },
  {
    title: "Original.PY",
    category: "Anthropological Documentary",
    image: "/images/original-py.jpg",
  },
  {
    title: "Latinos S XXI",
    category: "Cultural Series",
    image: "/images/latinos-s-xxi.jpg",
  },
  {
    title: "Alma Deportiva",
    category: "Sports Documentary",
    image: "/images/alma-deportiva.jpg",
  },
]

export default function StudiosPage() {
  const [language, setLanguage] = useState<"en" | "es">("es")
  const [mounted, setMounted] = useState(false)
  const t = translations[language]

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="text-sm">{t.nav.back}</span>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              <Link href="/studios" className="text-orange-400 font-semibold">
                {t.nav.studios}
              </Link>
              <Link href="/consulting" className="text-gray-300 hover:text-white transition-colors">
                {t.nav.consulting}
              </Link>
              <Link href="/team" className="text-gray-300 hover:text-white transition-colors">
                {t.nav.about}
              </Link>
              <Link href="/projects" className="text-gray-300 hover:text-white transition-colors">
                {t.nav.projects}
              </Link>
              <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                {t.nav.contact}
              </Link>
            </nav>

            <div className="flex gap-2">
              <Button
                variant={language === "es" ? "default" : "outline"}
                size="sm"
                onClick={() => setLanguage("es")}
                className={`text-xs ${language === "es" ? "bg-white text-black" : "text-white"}`}
              >
                ES
              </Button>
              <Button
                variant={language === "en" ? "default" : "outline"}
                size="sm"
                onClick={() => setLanguage("en")}
                className={`text-xs ${language === "en" ? "bg-white text-black" : "text-white"}`}
              >
                EN
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-start overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/sexta-era.jpg" alt="Studios Hero" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950/95 via-gray-950/70 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="max-w-2xl"
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white">{t.hero.title}</h1>
            <h2 className="text-3xl md:text-4xl mb-4 text-orange-400 font-light">{t.hero.subtitle}</h2>
            <p className="text-xl text-gray-200 leading-relaxed">{t.hero.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-white">{t.brands.title}</h2>
            <p className="text-xl text-gray-300">{t.brands.subtitle}</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {brands.map((brand, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center justify-center p-4 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <span className="text-gray-300 text-sm font-medium text-center">{brand.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Work Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-5xl font-bold mb-4 text-white">{t.work.title}</h2>
            <p className="text-xl text-gray-300">{t.work.subtitle}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group cursor-pointer"
              >
                <div className="relative h-80 rounded-xl overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-transparent to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Play className="w-16 h-16 text-white" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="text-orange-400 text-sm font-medium">{project.category}</span>
                    <h3 className="text-2xl font-bold text-white mt-2">{project.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/shamans.jpg" alt="Services Background" fill className="object-cover" />
          <div className="absolute inset-0 bg-gray-950/90" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-4 text-white">{t.services.title}</h2>
            <p className="text-xl text-gray-300">{t.services.subtitle}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {["Documentary Production", "Corporate Content", "Post-Production", "Distribution Strategy"].map(
              (service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <h3 className="text-xl font-semibold text-white mb-4">{service}</h3>
                  <p className="text-gray-300">Professional {service.toLowerCase()} services</p>
                </motion.div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <Image
                src="/images/logo-alhambra-final.png"
                alt="Alhambra Studios"
                width={200}
                height={46}
                className="h-12 w-auto mb-4"
              />
              <p className="text-gray-400 mb-6 leading-relaxed">
                Narrativas que transforman. Producción audiovisual y comunicación estratégica de alto impacto.
              </p>
            </div>

            <div className="flex flex-col items-end">
              <div className="flex gap-4 mb-6">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Facebook
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Twitter
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Instagram
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2025 Alhambra Signature Media. Todos los derechos reservados.</p>
            <p className="text-gray-400 text-sm mt-4 md:mt-0">Alcance global, narrativas locales</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
