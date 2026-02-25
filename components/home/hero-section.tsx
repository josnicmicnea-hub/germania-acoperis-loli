"use client";

import { useEffect, useState } from "react";
import { Phone, Shield, Award, Clock } from "lucide-react";
import { GTMButton } from "@/components/ui/gtm-button";

const features = [
  { icon: Shield, text: "Meisterbetrieb-Garantie" },
  { icon: Award, text: "Uber 15 Jahre Erfahrung" },
  { icon: Clock, text: "24/7 Notdienst" },
];

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20">
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/asta444.jpeg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#242f40]/95 via-[#242f40]/80 to-[#242f40]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#242f40]/90 via-transparent to-transparent" />
      </div>

      <div className="absolute top-20 right-10 w-72 h-72 bg-[#cca43b]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#cca43b]/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div
            className={`space-y-8 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-[#cca43b]/30 rounded-full px-4 py-2">
              <span className="w-2 h-2 bg-[#cca43b] rounded-full animate-pulse" />
              <span className="text-[#cca43b] text-sm font-medium">
                Zertifizierter Dachdeckermeisterbetrieb
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight text-balance">
              Professionelle{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#cca43b] to-[#d4b55a]">
                Dachlosungen
              </span>{" "}
              auf hochstem Niveau
            </h1>

            <p className="text-lg md:text-xl text-[#e5e5e5] leading-relaxed max-w-xl">
              Dachsanierung, Dachreparatur und fachgerechte Zimmererarbeiten mit
              kompromissloser Qualitat. Unser erfahrenes Meisterteam realisiert
              anspruchsvolle Projekte im gesamten Bundesgebiet -- termingerecht,
              sauber und mit Garantie.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <GTMButton
                gtmLabel="hero_call_now"
                gtmCategory="Hero"
                className="bg-gradient-to-r from-[#cca43b] to-[#d4b55a] hover:from-[#b8922f] hover:to-[#cca43b] text-white px-8 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                asChild
              >
                <a
                  href="tel:+40756637012"
                  className="flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Jetzt Anrufen
                </a>
              </GTMButton>
              <GTMButton
                gtmLabel="hero_view_projects"
                gtmCategory="Hero"
                variant="outline"
                className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg rounded-lg backdrop-blur-sm transition-all duration-300"
                asChild
              >
                <a href="/referenzen">Unsere Referenzen</a>
              </GTMButton>
            </div>

            <div className="flex flex-wrap gap-6 pt-4">
              {features.map((feature, index) => (
                <div
                  key={feature.text}
                  className={`flex items-center gap-2 text-white/80 ${isVisible ? `animate-fade-in stagger-${index + 2}` : "opacity-0"}`}
                >
                  <div className="w-10 h-10 rounded-full bg-[#cca43b]/20 flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-[#cca43b]" />
                  </div>
                  <span className="text-sm font-medium">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`hidden lg:block ${isVisible ? "animate-slide-in-right stagger-3" : "opacity-0"}`}
          >
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-2xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4">
                  <p className="text-4xl font-serif font-bold text-[#cca43b]">
                    15+
                  </p>
                  <p className="text-white/80 text-sm mt-1">Jahre Erfahrung</p>
                </div>
                <div className="text-center p-4">
                  <p className="text-4xl font-serif font-bold text-[#cca43b]">
                    500+
                  </p>
                  <p className="text-white/80 text-sm mt-1">
                    Abgeschlossene Projekte
                  </p>
                </div>
                <div className="text-center p-4">
                  <p className="text-4xl font-serif font-bold text-[#cca43b]">
                    100%
                  </p>
                  <p className="text-white/80 text-sm mt-1">
                    Kundenzufriedenheit
                  </p>
                </div>
                <div className="text-center p-4">
                  <p className="text-4xl font-serif font-bold text-[#cca43b]">
                    24/7
                  </p>
                  <p className="text-white/80 text-sm mt-1">Notdienst</p>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-white/20 text-center">
                <p className="text-white/60 text-sm">
                  Deutschlandweit fur Sie im Einsatz
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-[#cca43b] rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
