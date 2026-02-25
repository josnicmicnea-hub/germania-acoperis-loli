"use client"

import { Phone, Clock, ArrowRight } from "lucide-react"
import { GTMButton } from "@/components/ui/gtm-button"

export function CTASection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "url('/placeholder.svg?height=800&width=1920')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#242f40]/95 via-[#242f40]/90 to-[#242f40]/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <span className="text-[#cca43b] text-sm font-semibold tracking-wider uppercase">Bereit fur Ihr Projekt?</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mt-4 mb-6 text-balance">
              Fordern Sie Ihr{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#cca43b] to-[#d4b55a]">
                kostenloses Angebot
              </span>{" "}
              an
            </h2>
            <p className="text-[#e5e5e5] text-lg leading-relaxed mb-8 max-w-xl">
              Rufen Sie uns an und erhalten Sie eine unverbindliche Beratung sowie ein massgeschneidertes Angebot fur
              Ihr Dachprojekt. Von der Erstbesichtigung bis zur finalen Abnahme begleiten wir Sie professionell durch
              jeden Schritt.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <GTMButton
                gtmLabel="cta_call_now"
                gtmCategory="CTA Section"
                size="lg"
                className="bg-gradient-to-r from-[#cca43b] to-[#d4b55a] hover:from-[#b8922f] hover:to-[#cca43b] text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                asChild
              >
                <a href="tel:+40756637012" className="flex items-center justify-center gap-3">
                  <Phone className="w-5 h-5" />
                  <span>+40 756 637 012</span>
                </a>
              </GTMButton>
              <GTMButton
                gtmLabel="cta_referenzen"
                gtmCategory="CTA Section"
                size="lg"
                variant="outline"
                className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-xl backdrop-blur-sm transition-all duration-300"
                asChild
              >
                <a href="/referenzen" className="flex items-center justify-center gap-3">
                  <span>Referenzen ansehen</span>
                </a>
              </GTMButton>
            </div>

            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
              <Clock className="w-5 h-5 text-[#cca43b]" />
              <span className="text-white">24/7 Notdienst -- auch an Sonn- und Feiertagen</span>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <h3 className="text-xl font-serif font-semibold text-white mb-6">Unser Versprechen an Sie:</h3>
            <ul className="space-y-4">
              {[
                "Kostenlose Erstbesichtigung und Bestandsaufnahme vor Ort",
                "Detailliertes, transparentes Angebot ohne versteckte Kosten",
                "Fachkundige Beratung zu Materialien, Forderungen und Energieeffizienz",
                "Ausschliesslich zertifizierte Premium-Materialien mit Herstellergarantie",
                "Verbindliche Terminzusagen mit realistischer Projektplanung",
                "Grundliche Endreinigung und ordnungsgemasse Entsorgung",
              ].map((benefit, index) => (
                <li key={index} className="flex items-center gap-3 text-white/90">
                  <ArrowRight className="w-5 h-5 text-[#cca43b] flex-shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-white/20">
              <GTMButton
                gtmLabel="cta_view_projects"
                gtmCategory="CTA Section"
                variant="ghost"
                className="text-[#cca43b] hover:text-white hover:bg-[#cca43b]/20 w-full justify-center"
                asChild
              >
                <a href="/referenzen" className="flex items-center gap-2">
                  <span>Unsere Referenzen entdecken</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </GTMButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
