"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Play, Calendar, Award, Globe } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { ImageSlider } from "@/components/image-slider"

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
      back: "Back to Projects",
      studios: "Studios",
      consulting: "Consulting",
      about: "About Us",
      projects: "Projects",
      contact: "Contact",
    },
    sections: {
      overview: "Overview",
      production: "Production Details",
      gallery: "Gallery",
    },
    labels: {
      year: "Year",
      status: "Status",
      category: "Category",
    },
    buttons: {
      watchTrailer: "Watch Trailer",
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
      production: "Detalles de Producción",
      gallery: "Galería",
    },
    labels: {
      year: "Año",
      status: "Estado",
      category: "Categoría",
    },
    buttons: {
      watchTrailer: "Ver Tráiler",
    },
  },
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const [language, setLanguage] = useState<"en" | "es">("es")
  const [project, setProject] = useState<Project | null>(null)
  const [loading, setLoading] = useState(true)
  const [mounted, setMounted] = useState(false)
  const t = translations[language]

  useEffect(() => {
    setMounted(true)
    fetchProject()
  }, [params.slug])

  const fetchProject = async () => {
    try {
      console.log(`Fetching project: ${params.slug}`)
      const response = await fetch(`/api/projects/${params.slug}`)
      const data = await response.json()

      if (response.ok && data.success) {
        console.log("Project loaded:", data.project.title)
        setProject(data.project)
      } else {
        console.error("Failed to fetch project:", data.error)
        setProject(null)
      }
    } catch (error) {
      console.error("Error fetching project:", error)
      setProject(null)
    } finally {
      setLoading(false)
    }
  }

  if (!mounted || loading) {
    return (
      <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-orange-500"></div>
      </div>
    )
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link href="/projects" className="text-orange-400 hover:text-orange-300">
            Back to Projects
          </Link>
        </div>
      </div>
    )
  }

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
          {project.hero_video ? (
            <video autoPlay muted loop playsInline className="w-full h-full object-cover" poster={project.hero_image}>
              <source src={project.hero_video} type="video/mp4" />
              <source src={project.hero_video} type="video/quicktime" />
            </video>
          ) : (
            <Image
              src={project.hero_image || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950/95 via-gray-950/50 to-gray-950/70" />
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white">{project.title}</h1>
            <p className="text-2xl md:text-3xl mb-4 text-orange-400 font-light">{project.subtitle}</p>
            <p className="text-xl text-gray-200 mb-8">{project.category}</p>
            {project.hero_video && (
              <Button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 text-lg">
                <Play className="w-6 h-6 mr-2" />
                {t.buttons.watchTrailer}
              </Button>
            )}
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
                <div
                  className="prose prose-invert max-w-none text-gray-300 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: project.content_html }}
                />
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
                        <Calendar className="w-5 h-5 text-orange-400" />
                        <div>
                          <p className="text-gray-400 text-sm">{t.labels.year}</p>
                          <p className="text-white font-medium">{project.year}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <Award className="w-5 h-5 text-orange-400" />
                        <div>
                          <p className="text-gray-400 text-sm">{t.labels.status}</p>
                          <p className="text-orange-400 font-medium">{project.status}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <Globe className="w-5 h-5 text-orange-400" />
                        <div>
                          <p className="text-gray-400 text-sm">{t.labels.category}</p>
                          <p className="text-white font-medium">{project.category}</p>
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

      {/* Gallery Slider Section */}
      {project.gallery_images && project.gallery_images.length > 0 && (
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

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <ImageSlider images={project.gallery_images} title={project.title} autoPlay={true} interval={4000} />
            </motion.div>
          </div>
        </section>
      )}
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
