"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Users, Target, Globe, Award } from "lucide-react"
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
      title: "Alhambra Consulting",
      subtitle: "Strategic Communication with Vision",
      description:
        "We collaborate with governments, institutions and brands to build memorable and impactful narratives.",
    },
    services: {
      title: "Our Consulting Services",
      items: [
        {
          title: "Strategic Communication",
          description: "Comprehensive communication strategies aligned with organizational objectives",
          icon: Target,
        },
        {
          title: "Government Relations",
          description: "Specialized consulting for public institutions and government entities",
          icon: Users,
        },
        {
          title: "International Outreach",
          description: "Cross-cultural communication strategies for global reach",
          icon: Globe,
        },
        {
          title: "Brand Narrative Development",
          description: "Crafting compelling brand stories that connect with audiences",
          icon: Award,
        },
      ],
    },
    cases: {
      title: "Success Stories",
      projects: [
        {
          title: "Government of Paraguay",
          description:
            "Strategic communication campaign for cultural heritage preservation and international promotion.",
          category: "Government Relations",
        },
        {
          title: "International Cultural Exchange",
          description: "Multi-platform communication strategy for promoting Hispanic cultural values globally.",
          category: "International Outreach",
        },
        {
          title: "Institutional Partnerships",
          description: "Strategic alliance development and communication for embassy and institutional collaborations.",
          category: "Strategic Communication",
        },
      ],
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
      title: "Alhambra Consulting",
      subtitle: "Comunicación Estratégica con Visión",
      description:
        "Colaboramos con gobiernos, instituciones y marcas para construir narrativas memorables y de impacto.",
    },
    services: {
      title: "Nuestros Servicios de Consultoría",
      items: [
        {
          title: "Comunicación Estratégica",
          description: "Estrategias integrales de comunicación alineadas con objetivos organizacionales",
          icon: Target,
        },
        {
          title: "Relaciones Gubernamentales",
          description: "Consultoría especializada para instituciones públicas y entidades gubernamentales",
          icon: Users,
        },
        {
          title: "Alcance Internacional",
          description: "Estrategias de comunicación intercultural para alcance global",
          icon: Globe,
        },
        {
          title: "Desarrollo de Narrativa de Marca",
          description: "Creación de historias de marca convincentes que conectan con audiencias",
          icon: Award,
        },
      ],
    },
    cases: {
      title: "Casos de Éxito",
      projects: [
        {
          title: "Gobierno de Paraguay",
          description:
            "Campaña de comunicación estratégica para preservación del patrimonio cultural y promoción internacional.",
          category: "Relaciones Gubernamentales",
        },
        {
          title: "Intercambio Cultural Internacional",
          description:
            "Estrategia de comunicación multiplataforma para promover valores culturales hispanos globalmente.",
          category: "Alcance Internacional",
        },
        {
          title: "Alianzas Institucionales",
          description:
            "Desarrollo de alianzas estratégicas y comunicación para colaboraciones de embajadas e instituciones.",
          category: "Comunicación Estratégica",
        },
      ],
    },
  },
}

export default function ConsultingPage() {
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
              <Link href="/studios" className="text-gray-300 hover:text-white transition-colors">
                {t.nav.studios}
              </Link>
              <Link href="/consulting" className="text-blue-400 font-semibold">
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
          <Image src="/images/shamans.jpg" alt="Consulting Hero" fill className="object-cover" priority />
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
            <h2 className="text-3xl md:text-4xl mb-4 text-blue-400 font-light">{t.hero.subtitle}</h2>
            <p className="text-xl text-gray-200 leading-relaxed">{t.hero.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-5xl font-bold mb-4 text-white">{t.services.title}</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {t.services.items.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="relative h-64 rounded-xl overflow-hidden">
                  <Image
                    src="/images/alhambra.jpg"
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/95 via-gray-950/50 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <service.icon className="w-12 h-12 text-blue-400 mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-200 leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/original-py.jpg" alt="Success Stories Background" fill className="object-cover" />
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
            <h2 className="text-5xl font-bold mb-4 text-white">{t.cases.title}</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {t.cases.projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 hover:bg-gray-900 transition-colors"
              >
                <div className="text-sm text-blue-400 font-medium mb-3">{project.category}</div>
                <h3 className="text-xl font-bold mb-3 text-white">{project.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>
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
