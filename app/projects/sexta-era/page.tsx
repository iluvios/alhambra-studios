"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Play, Calendar, MapPin, Award, Clock, Globe } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import sextaEraData from "@/lib/sexta-era-data.json"

const translations = {
  en: {
    nav: {
      back: "Back to Projects",
      studios: "Studios",
      consulting: "Consulting",
      about: "About Us",
      projects: "Projects",
      contact: "Contact",
    },
    sections: {
      overview: "Overview",
      episodes: "Episodes",
      production: "Production Details",
      gallery: "Gallery",
    },
    labels: {
      episodes: "Episodes",
      duration: "Duration",
      status: "Status",
      year: "Year",
      locations: "Filming Locations",
      languages: "Languages",
      genre: "Genre",
      director: "Director",
      producer: "Producer",
      collaborators: "Collaborators",
      distributors: "Distributors",
      themes: "Key Themes",
    },
  },
  es: {
    nav: {
      back: "Volver a Proyectos",
      studios: "Studios",
      consulting: "Consulting",
      about: "Nosotros",
      projects: "Proyectos",
      contact: "Contacto",
    },
    sections: {
      overview: "Resumen",
      episodes: "Episodios",
      production: "Detalles de Producción",
      gallery: "Galería",
    },
    labels: {
      episodes: "Episodios",
      duration: "Duración",
      status: "Estado",
      year: "Año",
      locations: "Locaciones de Filmación",
      languages: "Idiomas",
      genre: "Género",
      director: "Director",
      producer: "Productor",
      collaborators: "Colaboradores",
      distributors: "Distribuidores",
      themes: "Temas Clave",
    },
  },
}

const galleryImages = [
  "/images/sexta-era-1.png",
  "/images/sexta-era-2.png",
  "/images/sexta-era-3.png",
  "/images/sexta-era-4.png",
  "/images/sexta-era-5.png",
]

export default function SextaEraPage() {
  const [language, setLanguage] = useState<"en" | "es">("es")
  const [mounted, setMounted] = useState(false)
  const t = translations[language]
  const data = sextaEraData[language]

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
            <Link href="/projects" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="text-sm">{t.nav.back}</span>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              <Link href="/studios" className="text-gray-300 hover:text-white transition-colors">
                {t.nav.studios}
              </Link>
              <Link href="/consulting" className="text-gray-300 hover:text-white transition-colors">
                {t.nav.consulting}
              </Link>
              <Link href="/team" className="text-gray-300 hover:text-white transition-colors">
                {t.nav.about}
              </Link>
              <Link href="/projects" className="text-white font-semibold">
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
                className="text-xs"
              >
                ES
              </Button>
              <Button
                variant={language === "en" ? "default" : "outline"}
                size="sm"
                onClick={() => setLanguage("en")}
                className="text-xs"
              >
                EN
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section with Video */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover" poster="/images/sexta-era.jpg">
            <source src="/videos/sexta-era-trailer.mov" type="video/mp4" />
            <source src="/videos/sexta-era-trailer.mov" type="video/quicktime" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950/95 via-gray-950/50 to-gray-950/70" />
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white">{data.title}</h1>
            <p className="text-2xl md:text-3xl mb-4 text-orange-400 font-light">{data.subtitle}</p>
            <p className="text-xl text-gray-200 mb-8">{data.tagline}</p>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 text-lg">
              <Play className="w-6 h-6 mr-2" />
              Ver Tráiler
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold mb-6 text-white">{t.sections.overview}</h2>
                <p className="text-xl text-gray-300 mb-6 leading-relaxed">{data.description}</p>
                <p className="text-lg text-gray-400 leading-relaxed">{data.longDescription}</p>
              </motion.div>
            </div>

            <div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-900/50 border-gray-800">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-6 text-white">{t.sections.production}</h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-orange-400" />
                        <div>
                          <p className="text-gray-400 text-sm">{t.labels.episodes}</p>
                          <p className="text-white font-medium">{data.details.episodes}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-orange-400" />
                        <div>
                          <p className="text-gray-400 text-sm">{t.labels.duration}</p>
                          <p className="text-white font-medium">{data.details.duration}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <Calendar className="w-5 h-5 text-orange-400" />
                        <div>
                          <p className="text-gray-400 text-sm">{t.labels.year}</p>
                          <p className="text-white font-medium">{data.details.year}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <MapPin className="w-5 h-5 text-orange-400" />
                        <div>
                          <p className="text-gray-400 text-sm">{t.labels.locations}</p>
                          <p className="text-white font-medium">{data.details.locations.join(", ")}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <Globe className="w-5 h-5 text-orange-400" />
                        <div>
                          <p className="text-gray-400 text-sm">{t.labels.languages}</p>
                          <p className="text-white font-medium">{data.details.languages.join(", ")}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <Award className="w-5 h-5 text-orange-400" />
                        <div>
                          <p className="text-gray-400 text-sm">{t.labels.status}</p>
                          <p className="text-orange-400 font-medium">{data.details.status}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Episodes Section */}
      <section className="py-20 px-6 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-white">{t.sections.episodes}</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(data.synopsis).map(([key, episode], index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-900/50 border-gray-800 hover:border-orange-500/50 transition-colors h-full">
                  <CardContent className="p-6">
                    <div className="text-orange-400 text-sm font-medium mb-2">Episodio {index + 1}</div>
                    <h3 className="text-xl font-bold mb-3 text-white">{episode.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{episode.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Production Team */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-8 text-white">Equipo de Producción</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-orange-400 mb-2">{t.labels.director}</h3>
                  <p className="text-white">{data.production.director}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-orange-400 mb-2">{t.labels.producer}</h3>
                  <p className="text-white">{data.production.producer}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-orange-400 mb-2">{t.labels.collaborators}</h3>
                  <ul className="text-white space-y-1">
                    {data.production.collaborators.map((collaborator, index) => (
                      <li key={index}>• {collaborator}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-8 text-white">{t.labels.themes}</h2>
              <div className="grid grid-cols-2 gap-4">
                {data.themes.map((theme, index) => (
                  <div
                    key={index}
                    className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 text-center hover:border-orange-500/50 transition-colors"
                  >
                    <p className="text-white font-medium">{theme}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-6 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-white">{t.sections.gallery}</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group cursor-pointer"
              >
                <div className="relative h-64 rounded-xl overflow-hidden">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`Sexta Era Gallery ${index + 1}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
