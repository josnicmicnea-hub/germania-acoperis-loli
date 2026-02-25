"use client"

import { useCallback, useEffect, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    name: "Thomas Muller",
    location: "Munchen, Bayern",
    rating: 5,
    text: "Nach einem schweren Hagelsturm musste unser gesamtes Dach erneuert werden. Dachservice24Plus hat innerhalb von 48 Stunden eine Notabdeckung installiert und anschliessend eine komplette Neueindeckung mit Braas-Dachsteinen durchgefuhrt. Die Kommunikation war vorbildlich, der Zeitplan wurde eingehalten und das Ergebnis ist erstklassig. Absolute Empfehlung!",
    project: "Komplettsanierung nach Sturmschaden",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Sabine Fischer",
    location: "Stuttgart, Baden-Wurttemberg",
    rating: 5,
    text: "Wir haben Dachservice24Plus mit der energetischen Sanierung unseres Altbaudaches beauftragt. Die Beratung war ausserst kompetent -- man hat uns verschiedene Dammoptionen vorgestellt und die Vor- und Nachteile transparent erlautert. Das Ergebnis: deutlich niedrigere Heizkosten und ein angenehmes Raumklima im Dachgeschoss.",
    project: "Energetische Dachsanierung",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Markus Becker",
    location: "Frankfurt, Hessen",
    rating: 5,
    text: "Fur unsere Gewerbehalle benötigten wir eine Flachdachsanierung mit anschliessendem Grunndachaufbau. Dachservice24Plus hat das Projekt professionell von der Planung bis zur Ausfuhrung betreut. Besonders beeindruckt hat mich die Sauberkeit auf der Baustelle und die prazise Einhaltung des Kostenrahmens.",
    project: "Flachdach-Grunndach Gewerbe",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Andrea Hoffmann",
    location: "Dusseldorf, NRW",
    rating: 5,
    text: "Der Dachstuhlausbau fur unser Einfamilienhaus war ein umfangreiches Projekt mit Gauben und neuen Dachflachenfenstern. Das Zimmererteam hat hervorragende Arbeit geleistet -- die Konstruktion ist solide, die Fenster perfekt eingepasst und der neue Wohnraum ubertrifft unsere Erwartungen. Handwerkskunst auf hochstem Niveau!",
    project: "Dachausbau mit Gauben",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Klaus Weber",
    location: "Hamburg",
    rating: 5,
    text: "Mitten in der Nacht hat es bei uns nach einem Sturm durch die Decke getropft. Der Notdienst von Dachservice24Plus war innerhalb einer Stunde vor Ort und hat die Stelle provisorisch abgedichtet. Am nachsten Tag wurde die Reparatur fachgerecht durchgefuhrt. So muss ein Notdienst funktionieren -- schnell, kompetent und fair im Preis.",
    project: "Notdienst Dachreparatur",
    image: "/placeholder.svg?height=80&width=80",
  },
]

export function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" }, [
    Autoplay({ delay: 5000, stopOnInteraction: true }),
  ])
  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap())
    emblaApi.on("select", onSelect)
    return () => {
      emblaApi.off("select", onSelect)
    }
  }, [emblaApi])

  return (
    <section className="py-20 bg-gradient-to-b from-[#242f40] to-[#1a222d] relative overflow-hidden">
      <div className="absolute top-20 left-10 w-64 h-64 bg-[#cca43b]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#cca43b]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[#cca43b] text-sm font-semibold tracking-wider uppercase">Kundenstimmen</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mt-4">
            Das sagen{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#cca43b] to-[#d4b55a]">
              unsere Kunden
            </span>
          </h2>
        </div>

        <div className="relative">
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 px-4">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full">
                    <Quote className="w-10 h-10 text-[#cca43b]/30 mb-4" />
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-[#cca43b] text-[#cca43b]" />
                      ))}
                    </div>
                    <p className="text-white/80 leading-relaxed mb-6 text-sm">{testimonial.text}</p>
                    <span className="inline-block text-xs px-3 py-1 bg-[#cca43b]/20 text-[#cca43b] rounded-full mb-6">
                      {testimonial.project}
                    </span>
                    <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <p className="text-white font-semibold">{testimonial.name}</p>
                        <p className="text-white/60 text-sm">{testimonial.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:bg-[#cca43b] hover:text-white text-white/80 z-10"
            aria-label="Zurück"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:bg-[#cca43b] hover:text-white text-white/80 z-10"
            aria-label="Weiter"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                selectedIndex === index ? "bg-[#cca43b] w-6" : "bg-white/30 hover:bg-white/50",
              )}
              aria-label={`Bewertung ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
