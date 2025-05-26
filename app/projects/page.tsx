"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Play, Calendar, MapPin } from "lucide-react"
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
    nav: {
      back: "Back to Gateway",
      studios: "Studios",
      consulting: "Consulting",
      team: "About Us",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      title: "Our Projects",
      subtitle: "Cinematic storytelling with purpose and impact",
    },
    filters: {
      all: "All Projects",
      documentary: "Documentaries",
      series: "Series",
      completed: "Completed",
      production: "In Production",
    },
  },
  es: {
    nav: {
      back: "Volver al Portal",
      studios: "Studios",
      consulting: "Consulting",
      team: "Nosotros",
      projects: "Proyectos",
      contact: "Contacto",
    },
    hero: {
      title: "Nuestros Proyectos",
      subtitle: "Narrativa cinematográfica con propósito e impacto",
    },
    filters: {
      all: "Todos los Proyectos",
      documentary: "Documentales",
      series: "Series",
      completed: "Completados",
      production: "En Producción",
    },
  },
}

export default function ProjectsPage() {
  const [language, setLanguage] = useState<"en" | "es">("es")
  const [filter, setFilter] = useState("all")
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [mounted, setMounted] = useState(false)
  const t = translations[language]

  useEffect(() => {
    setMounted(true)
    fetchProjects()
  }, [])

  const fetchProjects = async () => {
    try {
      console.log("Fetching all projects from API...")
      const response = await fetch("/api/projects")
      const data = await response.json()

      if (response.ok && data.success) {
        console.log("Projects loaded:", data.projects.length)
        setProjects(data.projects)
      } else {
        console.error("Failed to fetch projects:", data.error)
        setProjects([])
      }
    } catch (error) {
      console.error("Error fetching projects:", error)
      setProjects([])
    } finally {
      setLoading(false)
    }
  }

  const filteredProjects = projects.filter((project) => {
    if (filter === "all") return true
    if (filter === "documentary")
      return (
        project.category.toLowerCase().includes("documentary") || project.category.toLowerCase().includes("documental")
      )
    if (filter === "series")
      return project.category.toLowerCase().includes("series") || project.category.toLowerCase().includes("serie")
    if (filter === "completed")
      return project.status.toLowerCase().includes("complet") || project.status.toLowerCase().includes("terminado")
    if (filter === "production")
      return project.status.toLowerCase().includes("producción") || project.status.toLowerCase().includes("production")
    return true
  })

  if (!mounted || loading) {
    return (
      <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-orange-500"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
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
                {t.nav.team}
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
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/original-py.jpg" alt="Projects Hero" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gray-950/80" />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">{t.hero.title}</h1>
            <p className="text-xl text-gray-200">{t.hero.subtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {["all", "documentary", "series", "completed", "production"].map((filterOption) => (
              <Button
                key={filterOption}
                variant={filter === filterOption ? "default" : "outline"}
                onClick={() => setFilter(filterOption)}
                className="text-sm"
              >
                {t.filters[filterOption as keyof typeof t.filters]}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group cursor-pointer"
              >
                <Link href={`/projects/${project.slug}`}>
                  <div className="relative h-80 rounded-xl overflow-hidden">
                    <Image
                      src={project.hero_image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-transparent to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Play className="w-16 h-16 text-white" />
                    </div>

                    <div className="absolute top-4 left-4">
                      <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium">
                        {project.category}
                      </span>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-center gap-4 text-sm text-gray-300 mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {project.year}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {project.status}
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                      <p className="text-gray-200 text-sm leading-relaxed">{project.subtitle}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
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
