"use client"

import { useEffect, useRef, useState } from "react"
import { MapPin, Phone } from "lucide-react"
import { GTMButton } from "@/components/ui/gtm-button"

const areas = [
  { name: "Bayern", distance: "Munchen & Umgebung", featured: true },
  { name: "Nordrhein-Westfalen", distance: "Koln, Dusseldorf" },
  { name: "Baden-Wurttemberg", distance: "Stuttgart & Region" },
  { name: "Hessen", distance: "Frankfurt & Umgebung" },
  { name: "Niedersachsen", distance: "Hannover & Region" },
  { name: "Sachsen", distance: "Dresden, Leipzig" },
  { name: "Berlin & Brandenburg", distance: "Hauptstadtregion" },
  { name: "Hamburg", distance: "Hansestadt & Umland" },
  { name: "Schleswig-Holstein", distance: "Kiel, Lubeck" },
  { name: "Rheinland-Pfalz", distance: "Mainz, Koblenz" },
  { name: "Thuringen", distance: "Erfurt & Region" },
  { name: "Sachsen-Anhalt", distance: "Magdeburg, Halle" },
]

export function ServiceAreas() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-[#e5e5e5]/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className={`relative ${isVisible ? "animate-slide-in-left" : "opacity-0"}`}>
            <div className="relative rounded-2xl overflow-hidden shadow-xl bg-[#242f40] aspect-square">
              <img
                src="/placeholder.svg?height=600&width=600"
                alt="Karte der Einsatzgebiete von Dachservice24Plus in Deutschland"
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#242f40]/80 to-transparent" />

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-[#cca43b] flex items-center justify-center shadow-lg animate-pulse">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -inset-4 rounded-full border-2 border-[#cca43b]/50 animate-ping" />
                </div>
              </div>

              <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <p className="text-white text-center font-medium">
                  <span className="text-[#cca43b] text-2xl font-serif font-bold">Bundesweit</span>
                  <br />
                  <span className="text-sm text-white/80">Flexible Einsatzbereitschaft in ganz Deutschland</span>
                </p>
              </div>
            </div>
          </div>

          <div className={`${isVisible ? "animate-slide-in-right" : "opacity-0"}`}>
            <span className="text-[#cca43b] text-sm font-semibold tracking-wider uppercase">Einsatzgebiete</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#242f40] mt-4 mb-6">
              Deutschlandweit{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#cca43b] to-[#b8922f]">
                fur Sie da
              </span>
            </h2>
            <p className="text-[#363636] leading-relaxed mb-8">
              Unser flexibles Einsatzkonzept ermoglicht es uns, Dachprojekte in allen Bundeslandern professionell
              umzusetzen. Egal ob Neueindeckung in Bayern, Flachdachsanierung in Nordrhein-Westfalen oder Zimmererarbeiten
              in Sachsen -- wir bringen unsere Meisterbetrieb-Qualitat direkt zu Ihnen.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
              {areas.map((area, index) => (
                <div
                  key={area.name}
                  className={[
                    "flex items-center gap-2 p-3 rounded-lg transition-all duration-300",
                    area.featured
                      ? "bg-gradient-to-r from-[#cca43b] to-[#d4b55a] text-white"
                      : "bg-white hover:bg-[#e5e5e5] border border-[#e5e5e5]",
                    isVisible ? `animate-fade-in stagger-${(index % 6) + 1}` : "opacity-0",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  <MapPin className={`w-4 h-4 flex-shrink-0 ${area.featured ? "text-white" : "text-[#cca43b]"}`} />
                  <div>
                    <p className={`text-sm font-medium ${area.featured ? "text-white" : "text-[#242f40]"}`}>
                      {area.name}
                    </p>
                    <p className={`text-xs ${area.featured ? "text-white/80" : "text-[#363636]"}`}>{area.distance}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <GTMButton
                gtmLabel="areas_call_now"
                gtmCategory="Service Areas"
                className="bg-gradient-to-r from-[#cca43b] to-[#d4b55a] hover:from-[#b8922f] hover:to-[#cca43b] text-white"
                asChild
              >
                <a href="tel:+40756637012" className="flex items-center justify-center gap-2">
                  <Phone className="w-4 h-4" />
                  Kostenlose Erstberatung
                </a>
              </GTMButton>
            </div>

            <p className="text-sm text-[#363636] mt-4">
              Ihr Bundesland nicht aufgelistet? Kontaktieren Sie uns -- wir prufen gerne die Einsatzmoglichkeit.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
