"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Mail, Phone, MapPin, Send } from "lucide-react"
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
      title: "Get in Touch",
      subtitle: "Let's create something extraordinary together",
    },
    form: {
      title: "Send us a message",
      name: "Full Name",
      email: "Email Address",
      company: "Company",
      subject: "Subject",
      message: "Message",
      send: "Send Message",
      sending: "Sending...",
    },
    contact: {
      title: "Contact Information",
      email: "hello@alhambrastudios.com",
      phone: "+34 123 456 789",
      address: "Madrid, Spain",
    },
    offices: {
      title: "Our Offices",
      madrid: {
        title: "Madrid, Spain",
        address: "Calle Principal, 123\n28001 Madrid, España",
      },
      miami: {
        title: "Miami, USA",
        address: "Biscayne Blvd, 456\nMiami, FL 33132, USA",
      },
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
      title: "Ponte en Contacto",
      subtitle: "Creemos algo extraordinario juntos",
    },
    form: {
      title: "Envíanos un mensaje",
      name: "Nombre Completo",
      email: "Correo Electrónico",
      company: "Empresa",
      subject: "Asunto",
      message: "Mensaje",
      send: "Enviar Mensaje",
      sending: "Enviando...",
    },
    contact: {
      title: "Información de Contacto",
      email: "hello@alhambrastudios.com",
      phone: "+34 123 456 789",
      address: "Madrid, España",
    },
    offices: {
      title: "Nuestras Oficinas",
      madrid: {
        title: "Madrid, España",
        address: "Calle Principal, 123\n28001 Madrid, España",
      },
      miami: {
        title: "Miami, USA",
        address: "Biscayne Blvd, 456\nMiami, FL 33132, USA",
      },
    },
  },
}

export default function ContactPage() {
  const [language, setLanguage] = useState<"en" | "es">("es")
  const [mounted, setMounted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const t = translations[language]

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.target as HTMLFormElement)
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        // Handle success - you could show a success message here
        alert("Message sent successfully!")
        ;(e.target as HTMLFormElement).reset()
      } else {
        alert("Error sending message. Please try again.")
      }
    } catch (error) {
      console.error("Error:", error)
      alert("Error sending message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

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
              <Link href="/consulting" className="text-gray-300 hover:text-white transition-colors">
                {t.nav.consulting}
              </Link>
              <Link href="/team" className="text-gray-300 hover:text-white transition-colors">
                {t.nav.about}
              </Link>
              <Link href="/projects" className="text-gray-300 hover:text-white transition-colors">
                {t.nav.projects}
              </Link>
              <Link href="/contact" className="text-white font-semibold">
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
          <Image src="/images/alhambra.jpg" alt="Contact Hero" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gray-950/80" />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">{t.hero.title}</h1>
            <p className="text-xl text-gray-200">{t.hero.subtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-900/50 border-gray-800">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold mb-6 text-white">{t.form.title}</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">{t.form.name}</label>
                        <input
                          type="text"
                          name="name"
                          required
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-colors"
                          placeholder={t.form.name}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">{t.form.email}</label>
                        <input
                          type="email"
                          name="email"
                          required
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-colors"
                          placeholder={t.form.email}
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">{t.form.company}</label>
                        <input
                          type="text"
                          name="company"
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-colors"
                          placeholder={t.form.company}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">{t.form.subject}</label>
                        <input
                          type="text"
                          name="subject"
                          required
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-colors"
                          placeholder={t.form.subject}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">{t.form.message}</label>
                      <textarea
                        name="message"
                        required
                        rows={6}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-colors resize-none"
                        placeholder={t.form.message}
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                          {t.form.sending}
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          {t.form.send}
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold mb-6 text-white">{t.contact.title}</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-300 text-sm">Email</p>
                      <p className="text-white font-medium">{t.contact.email}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-300 text-sm">Teléfono</p>
                      <p className="text-white font-medium">{t.contact.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-300 text-sm">Ubicación</p>
                      <p className="text-white font-medium">{t.contact.address}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6 text-white">{t.offices.title}</h3>
                <div className="space-y-6">
                  <Card className="bg-gray-900/50 border-gray-800">
                    <CardContent className="p-6">
                      <h4 className="text-lg font-semibold text-white mb-2">{t.offices.madrid.title}</h4>
                      <p className="text-gray-300 whitespace-pre-line">{t.offices.madrid.address}</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-gray-900/50 border-gray-800">
                    <CardContent className="p-6">
                      <h4 className="text-lg font-semibold text-white mb-2">{t.offices.miami.title}</h4>
                      <p className="text-gray-300 whitespace-pre-line">{t.offices.miami.address}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
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
