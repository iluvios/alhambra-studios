"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Film, Brain, ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface Project {
  id: number
  slug: string
  title: string
  subtitle: string
  category: string
  year: number
  status: string
  hero_image: string
  hero_video?: string
  content_html: string
  gallery_images: string[]
  featured: boolean
}

const translations = {
  en: {
    hero: {
      title: "ALHAMBRA SIGNATURE MEDIA",
      subtitle: "Narratives that transform",
      description: "High-impact audiovisual production and strategic communication",
    },
    studios: {
      title: "Audiovisual Production",
      description:
        "Boutique audiovisual production company. We create documentaries and cinematic stories with soul and international relevance.",
      button: "Explore Audiovisual Production",
    },
    consulting: {
      title: "Strategic Communication Consulting",
      description:
        "We collaborate with governments, institutions and brands to build memorable and impactful narratives.",
      button: "Discover Strategic Consulting",
    },
    brands: {
      title: "Trusted by leading organizations worldwide",
    },
    portfolio: {
      title: "Featured Projects",
      subtitle: "Our latest productions and documentaries",
      viewAll: "View All Projects",
    },
    nav: {
      studios: "Studios",
      consulting: "Consulting",
      about: "About Us",
      projects: "Projects",
      contact: "Contact",
    },
  },
  es: {
    hero: {
      title: "ALHAMBRA SIGNATURE MEDIA",
      subtitle: "Narrativas que transforman",
      description: "Producción audiovisual y comunicación estratégica de alto impacto",
    },
    studios: {
      title: "Productora Audiovisual",
      description:
        "Productora audiovisual boutique. Creamos documentales e historias cinematográficas con alma y relevancia internacional.",
      button: "Explorar Productora Audiovisual",
    },
    consulting: {
      title: "Consultoría en Comunicación Estratégica",
      description:
        "Colaboramos con gobiernos, instituciones y marcas para construir narrativas memorables y de impacto.",
      button: "Conocer Consultoría Estratégica",
    },
    brands: {
      title: "Confianza de organizaciones líderes a nivel mundial",
    },
    portfolio: {
      title: "Proyectos Destacados",
      subtitle: "Nuestras últimas producciones y documentales",
      viewAll: "Ver Todos los Proyectos",
    },
    nav: {
      studios: "Studios",
      consulting: "Consulting",
      about: "Nosotros",
      projects: "Proyectos",
      contact: "Contacto",
    },
  },
}

const brands = [
  { name: "Gobierno de Paraguay" },
  { name: "Air Europa" },
  { name: "Gobierno de España" },
  { name: "Gobierno de México" },
  { name: "TVE" },
  { name: "Atresmedia" },
  { name: "Mediaset" },
  { name: "Discovery Channel" },
  { name: "Telemundo" },
  { name: "HBO Max" },
]

export default function GatewayHomepage() {
  const [language, setLanguage] = useState<"en" | "es">("es")
  const [mounted, setMounted] = useState(false)
  const [featuredProjects, setFeaturedProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const t = translations[language]

  useEffect(() => {
    setMounted(true)
    fetchFeaturedProjects()
  }, [])

  const fetchFeaturedProjects = async () => {
    try {
      console.log("Fetching featured projects from API...")
      const response = await fetch("/api/projects/featured")
      const data = await response.json()

      if (response.ok && data.success) {
        console.log("Featured projects loaded:", data.projects.length)
        setFeaturedProjects(data.projects)
      } else {
        console.error("Failed to fetch featured projects:", data.error)
        setFeaturedProjects([])
      }
    } catch (error) {
      console.error("Error fetching featured projects:", error)
      setFeaturedProjects([])
    } finally {
      setLoading(false)
    }
  }

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Image
                src="/images/logo-alhambra-final.png"
                alt="Alhambra Studios"
                width={120}
                height={28}
                className="h-7 w-auto"
              />
            </div>

            <nav className="hidden md:flex items-center gap-8">
              <Link href="/studios" className="text-orange-400 hover:text-orange-300 transition-colors font-medium">
                {t.nav.studios}
              </Link>
              <Link href="/consulting" className="text-blue-400 hover:text-blue-300 transition-colors font-medium">
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
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/alhambra.jpg" alt="Alhambra Architecture" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950/90 via-gray-950/70 to-gray-950/90" />
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-wider">{t.hero.title}</h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <p className="text-2xl md:text-4xl mb-4 text-gray-200 font-light">{t.hero.subtitle}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">{t.hero.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Brands Carousel */}
      <section className="py-16 px-6 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-xl text-gray-300">{t.brands.title}</p>
          </motion.div>

          <div className="relative overflow-hidden">
            <div className="flex animate-scroll">
              {[...brands, ...brands].map((brand, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 mx-8 flex items-center justify-center p-4 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-colors min-w-[200px]"
                >
                  <span className="text-gray-300 text-sm font-medium text-center">{brand.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Studios Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative group cursor-pointer"
            >
              <Link href="/studios">
                <div className="relative h-96 rounded-2xl overflow-hidden">
                  <Image
                    src="/images/sexta-era-1.png"
                    alt="Studios"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/95 via-gray-950/50 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Film className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold mb-4 text-white">{t.studios.title}</h3>
                    <p className="text-gray-200 mb-6 leading-relaxed">{t.studios.description}</p>
                    <Button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 group-hover:shadow-lg transition-all duration-300">
                      {t.studios.button}
                      <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Consulting Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative group cursor-pointer"
            >
              <Link href="/consulting">
                <div className="relative h-96 rounded-2xl overflow-hidden">
                  <Image
                    src="/images/shamans.jpg"
                    alt="Consulting"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/95 via-gray-950/50 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Brain className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold mb-4 text-white">{t.consulting.title}</h3>
                    <p className="text-gray-200 mb-6 leading-relaxed">{t.consulting.description}</p>
                    <Button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 group-hover:shadow-lg transition-all duration-300">
                      {t.consulting.button}
                      <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </Link>
            </motion.div>
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
