"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowLeft, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

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
      title: "About Us",
      subtitle: "Meet the team behind Alhambra Signature Media",
    },
    team: [
      {
        name: "Lorena Galdón",
        role: "Investigative Journalist, Screenwriter and Producer",
        image: "/images/lorena-foto.jpg",
        bio: "Lorena Galdón is a Spanish journalist who, throughout her career, has worked as a presenter, panelist, reporter and investigative journalist in the most important communication groups in Spain. She has a degree in journalism from CEU San Pablo University.\n\nAt 14, she studied a year of high school in Dublin. Upon her return to Spain, she entered the prestigious SEK boarding school, where she began studying radio at the adjacent Camilo José Cela University, winning several awards as the best student of her class. Lorena has always shown a special interest in anthropology and the ethical and social purpose of journalism.\n\nLorena Galdón's television career began at Atresmedia in sports journalism under Josep Pedrerol, where she became one of the faces of his team as a reporter, presenting her own section and as co-presenter. Later, she combined her work as an editor on 'Más Vale Tarde' with her collaboration on Marca Plus. She was then hired by Televisión Española as a reporter, editor and presenter.\n\nAfter a period at Mediaset, where she worked as a reporter on the prime time 'Sábado Deluxe', she decided to change the direction of her career to dedicate herself to her passion: investigative journalism. Her entrepreneurial spirit has led her to embark on her own projects to share different content with viewers, creating documentary projects such as 'Shamans', a journey through the ancestral wisdom of shamans with the support of the Government of Paraguay and Air Europa.",
      },
      {
        name: "Juan Muñoz",
        role: "Controller and Production Coordination",
        image: "/images/juan-munoz.jpg",
        bio: "Graduate in Law and Business Administration and Management from the University of Córdoba, lawyer and university expert in auditing and financial management.\n\nCurrently, he serves as location accountant on the filming of Gerard Butler's latest film. Trained and experienced in the audiovisual sector and national and international film production, his curriculum includes titles in the field of international service such as: 'Uncharted', 'Game of Thrones', 'Spiderman', 'Killing Eve', 'Narcos' or the TVE gala of the '35th edition of the Goya Awards'.\n\nHe began his career in the sector with the renowned international service production company Fresco Film based in Málaga, where he started as a support accountant and consolidated his entry into the sector, eventually obtaining the degree of Production Accountant.\n\nHis international experience and the search for new challenges led him to become, alongside Maria Casado and Antonio Banderas, the Financial Director of Teatro Soho Televisión, Málaga. Currently and after a successful career in the peninsular market, he continues with his on-boarding trajectory in film productions around the world.",
      },
      {
        name: "José Orejón",
        role: "Journalist",
        image: "/images/jose-ovejas.jpg",
        bio: "José Orejón is a Spanish journalist graduated from the Complutense University of Madrid. He has completed his training with studies as a camera and radio communicator, as well as social media. Also trained as an actor between Madrid and London. He has been a reporter, editor, screenwriter and social media for different media and companies.\n\nThroughout his career he has worked in the most important Spanish groups such as Atresmedia or Mediaset. He has also collaborated with print media interviewing entrepreneurs, artists and celebrities, in magazines from Editorial Bauer, Unidad Editorial or Grupo Planeta. Search, editing script, interview writing and piece cutting are some of the functions he has performed throughout his career.\n\nCurrently he works in entertainment programs and makes other collaborations sporadically for other media. In 'Sexta Era' he will be editing editor and post-production assistant in the filming of the documentary in Spain.",
      },
      {
        name: "Mariela Farfán",
        role: "Editor and Post-Producer",
        image: "/images/mariela-farfan.jpg",
        bio: "Mariela Farfán is a Venezuelan editor and post-producer based in Miami. She studied at the Observatory Documentary Film School in Buenos Aires and at the Graphic Design Institute of Caracas. In her more than 15 years of experience editing multiple formats and specializing in editing documentaries, series, realities, newscasts and digital media - in English and Spanish - she has been awarded an Emmy 2019 for the documentary 'For the Children By the Children', which she was in charge of editing and post-production.\n\nShe has been nominated for multiple Emmys for her work on the short documentaries 'A Day Under My Skin' and 'Away From Home', among various recognitions. In addition to directing projects and teams, she also has experience in cinematography and creating content for digital platforms. She has been an editor for Discovery Channel, Televisa, Telemundo, NBCUniversal, HBOMax, DirecTV, Mega TV, Caracol, Yahoo LATAM, MTV, Venevisión and Canal Sur Perú.",
      },
    ],
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
      title: "Nosotros",
      subtitle: "Conoce al equipo detrás de Alhambra Signature Media",
    },
    team: [
      {
        name: "Lorena Galdón",
        role: "Periodista de investigación, guionista y productora",
        image: "/images/lorena-foto.jpg",
        bio: "Lorena Galdón es una periodista española que, a lo largo de su carrera, ha trabajado como presentadora, contertulio, reportera y periodista de investigación en los grupos de comunicación más importantes de España. Es licenciada en periodismo por la Universidad CEU San Pablo.\n\nCon 14 años, estudia un año de secundaria en Dublín. Y, a su llegada a España, ingresa en el prestigioso internado SEK, donde comienza a cursar radio en la adyacente Universidad Camilo José Cela, ganando varios premios como mejor alumna de la promoción. Lorena siempre ha mostrado un interés especial por la antropología y el fin ético y social del periodismo.\n\nLa trayectoria televisiva de Lorena Galdón comenzó en Atresmedia en el periodismo deportivo de la mano de Josep Pedrerol, donde se convirtió en una de las caras de su equipo como reportera, presentando su propia sección y como copresentadora. Más adelante, compaginó su trabajo de redactora en 'Más Vale Tarde' con su colaboración en Marca Plus. Fue luego contratada por Televisión Española como reportera, redactora y presentadora.\n\nTras un periodo en Mediaset, donde trabajó como reportera en el prime time 'Sábado Deluxe', decide cambiar el rumbo de su carrera para dedicarse a su pasión: la faceta de periodista de investigación. Su espíritu emprendedor ha hecho que se embarque en proyectos propios para poder compartir con el espectador un tipo de contenido diferente, realizando proyectos documentales como 'Shamans', un recorrido por la sabiduría ancestral de los chamanes con el apoyo del Gobierno de Paraguay y Air Europa.",
      },
      {
        name: "Juan Muñoz",
        role: "Controller y coordinación de producción",
        image: "/images/juan-munoz.jpg",
        bio: "Licenciado en Derecho Y Administración y Dirección de Empresas por la Universidad de Córdoba, abogado y experto universitario en auditoria y dirección financiera.\n\nEn la actualidad, desempeña la función de location accountant en el rodaje de la última película de Gerard Butler. Formado y experimentado en el sector audiovisual y la producción cinematográfica nacional e internacional, cuenta en su curriculum con títulos en el ámbito del service internacional como: 'Uncharted', 'Juego de Tronos', 'Spiderman', 'Killing Eve', 'Narcos' o la gala en TVE de la '35 edición de los Premios Goya'.\n\nInició su carrera en el sector de la mano de la reconocida productora de service internacional Fresco Film basada en Málaga, donde comenzó como contable de apoyo y consolidó su incursión en el sector, llegando a obtener el grado de Contable de Producción.\n\nSu experiencia Internacional y la búsqueda de nuevos retos le llevó a convertirse de la mano de Maria Casado y Antonio Banderas en el Director Financiero de Teatro Soho Televisión, Málaga. Actualmente y tras una exitosa carrera en el mercado peninsular, continúa con su trayectoria de forma on-boarding en producciones cinematográficas alrededor de todo el mundo.",
      },
      {
        name: "José Orejón",
        role: "Periodista",
        image: "/images/jose-ovejas.jpg",
        bio: "José Orejón es un periodista español licenciado en la Universidad Complutense de Madrid. Ha completado su formación con estudios de comunicador frente a cámara y radio, así como social media. Formado también actoralmente entre Madrid y Londres. Ha sido reportero, redactor, guionista y social media de diferentes medios y empresas.\n\nA lo largo de su carrera ha trabajado en los grupos españoles más importantes como Atresmedia o Mediaset. También ha colaborado con medios impresos entrevistando a emprendedores, artistas y celebrities, en revistas de Editorial Bauer, Unidad Editorial o Grupo Planeta. Búsqueda, guión de edición, redacción de entrevistas y corte de piezas, son algunas de las funciones que ha desempeñado a lo largo de su trayectoria.\n\nActualmente trabaja en programas de entretenimiento y realiza otras colaboraciones de manera esporádica para otros medios. En 'Sexta Era' será redactor de edición y ayudante de postproducción en el rodaje del documental en España.",
      },
      {
        name: "Mariela Farfán",
        role: "Editora y postproductora",
        image: "/images/mariela-farfan.jpg",
        bio: "Mariela Farfán es una editora y postproductora venezolana afincada en Miami. Realizó sus estudios en el Observatorio Escuela de Cine Documental de Buenos Aires y en el Instituto de Diseño Gráfico de Caracas. En sus más de 15 años de experiencia editando múltiples formatos y especializada en edición de documentales, series, realities, noticieros y medios digitales -en inglés y en español-, ha sido galardonada con un premio Emmy 2019 por el documental 'For the Children By the Children'.\n\nHa sido nominada a múltiples Emmys por su trabajo en los documentales cortos 'A Day Under My Skin' and 'Away From Home', entre diversos reconocimientos. Además de dirigir proyectos y equipos, también tiene experiencia en cinematografía y creando contenido para plataformas digitales. Ha sido editora para Discovery Channel, Televisa, Telemundo, NBCUniversal, HBOMax, DirecTV, Mega TV, Caracol, Yahoo LATAM, MTV, Venevisión y Canal Sur Perú.",
      },
    ],
  },
}

export default function TeamPage() {
  const [language, setLanguage] = useState<"en" | "es">("es")
  const [mounted, setMounted] = useState(false)
  const [selectedMember, setSelectedMember] = useState<number | null>(null)
  const t = translations[language]

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

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
              <Link href="/team" className="text-white font-semibold">
                {t.nav.team}
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
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/alhambra.jpg" alt="Team Hero" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gray-950/80" />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">{t.hero.title}</h1>
            <p className="text-xl text-gray-200">{t.hero.subtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group cursor-pointer"
                onClick={() => setSelectedMember(index)}
              >
                <div className="relative h-96 rounded-xl overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                    <p className="text-gray-300 text-sm">{member.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Member Modal */}
      <AnimatePresence>
        {selectedMember !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={() => setSelectedMember(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full bg-gray-900 rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-gray-950/80 rounded-full text-white hover:bg-gray-900 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-96 md:h-full">
                  <Image
                    src={t.team[selectedMember].image || "/placeholder.svg"}
                    alt={t.team[selectedMember].name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <h2 className="text-3xl font-bold text-white mb-2">{t.team[selectedMember].name}</h2>
                  <h3 className="text-xl text-gray-300 mb-6">{t.team[selectedMember].role}</h3>
                  <div className="prose prose-invert max-h-96 overflow-y-auto">
                    {t.team[selectedMember].bio.split("\n\n").map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-gray-300 mb-4 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
