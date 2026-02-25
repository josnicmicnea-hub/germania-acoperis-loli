"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { Phone, CheckCircle, ArrowRight, Building2, Hammer, Package, Wrench } from "lucide-react"
import { GTMButton } from "@/components/ui/gtm-button"
import type { LucideIcon } from "lucide-react"

interface ServiceFeature {
  title: string
  description: string
}

// Icon identifier type so server components pass serializable values
type ServiceIcon = "building" | "hammer" | "package" | "wrench"

// Mapping from icon identifier to actual Lucide icon component
const iconMap: Record<ServiceIcon, LucideIcon> = {
  building: Building2,
  hammer: Hammer,
  package: Package,
  wrench: Wrench,
}

interface ServicePageLayoutProps {
  title: string
  subtitle: string
  description: string
  heroImage: string
  icon?: ServiceIcon
  features: ServiceFeature[]
  benefits: string[]
  process: { step: number; title: string; description: string }[]
  materials?: { name: string; description: string }[]
  children?: React.ReactNode
}

export function ServicePageLayout({
  title,
  subtitle,
  description,
  heroImage,
  icon = "building",
  features,
  benefits,
  process,
  materials,
  children,
}: ServicePageLayoutProps) {
  const IconComponent = iconMap[icon] ?? Building2
  const [isHeroVisible, setIsHeroVisible] = useState(false)

  useEffect(() => {
    setIsHeroVisible(true)
  }, [])

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${heroImage}')` }} />
          <div className="absolute inset-0 bg-gradient-to-r from-[#242f40]/95 via-[#242f40]/85 to-[#242f40]/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
          <div className={`max-w-3xl ${isHeroVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-[#cca43b]/30 rounded-full px-4 py-2 mb-6">
              <IconComponent className="w-5 h-5 text-[#cca43b]" />
              <span className="text-[#cca43b] text-sm font-medium">{subtitle}</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-6 text-balance">
              {title}
            </h1>

            <p className="text-lg md:text-xl text-[#e5e5e5] leading-relaxed mb-8 max-w-2xl">{description}</p>

            <div className="flex flex-col sm:flex-row gap-4">
              <GTMButton
                gtmLabel={`${title}_hero_call`}
                gtmCategory="Service Page"
                className="bg-gradient-to-r from-[#cca43b] to-[#d4b55a] hover:from-[#b8922f] hover:to-[#cca43b] text-white px-8 py-4 text-lg rounded-lg"
                asChild
              >
                <a href="tel:+40756637012" className="flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  Kostenloses Angebot anfordern
                </a>
              </GTMButton>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-[#cca43b] text-sm font-semibold tracking-wider uppercase">Unser Angebot</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#242f40] mt-4">
              Umfassende <span className="text-[#cca43b]">Leistungen</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-[#e5e5e5]/30 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#cca43b] to-[#d4b55a] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-[#242f40] mb-3">{feature.title}</h3>
                <p className="text-[#363636] leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-b from-[#242f40] to-[#1a222d]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-[#cca43b] text-sm font-semibold tracking-wider uppercase">Unser Ablauf</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mt-4">
              So <span className="text-[#cca43b]">arbeiten wir</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={step.step} className="relative">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 h-full">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#cca43b] to-[#d4b55a] flex items-center justify-center mb-4 text-white font-serif font-bold text-xl">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-serif font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{step.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-[#cca43b]/50" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-[#e5e5e5]/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#cca43b] text-sm font-semibold tracking-wider uppercase">Ihre Vorteile</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#242f40] mt-4 mb-8">
                Warum Sie sich fur <span className="text-[#cca43b]">uns entscheiden</span>
              </h2>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4 bg-white rounded-lg p-4 shadow-sm">
                    <div className="w-8 h-8 rounded-full bg-[#cca43b]/20 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-[#cca43b]" />
                    </div>
                    <p className="text-[#363636]">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src="/placeholder.svg?height=500&width=600"
                alt={`${title} - Dachservice24Plus`}
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-6">
                <p className="text-[#cca43b] font-serif text-3xl font-bold">24/7</p>
                <p className="text-[#363636] text-sm">Notdienst</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Materials Section */}
      {materials && materials.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-[#cca43b] text-sm font-semibold tracking-wider uppercase">Materialien</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#242f40] mt-4">
                Erstklassige <span className="text-[#cca43b]">Werkstoffe</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {materials.map((material) => (
                <div
                  key={material.name}
                  className="border border-[#e5e5e5] rounded-xl p-6 hover:border-[#cca43b] transition-colors"
                >
                  <h3 className="text-lg font-semibold text-[#242f40] mb-2">{material.name}</h3>
                  <p className="text-[#363636] text-sm">{material.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {children}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#242f40] to-[#1a222d]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
            Bereit <span className="text-[#cca43b]">loszulegen</span>?
          </h2>
          <p className="text-[#e5e5e5] text-lg mb-8 max-w-2xl mx-auto">
            Kontaktieren Sie uns noch heute fur eine kostenlose Erstberatung und ein individuelles Angebot,
            massgeschneidert auf Ihre Anforderungen.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GTMButton
              gtmLabel={`${title}_cta_call`}
              gtmCategory="Service Page CTA"
              className="bg-gradient-to-r from-[#cca43b] to-[#d4b55a] hover:from-[#b8922f] hover:to-[#cca43b] text-white px-8 py-4 text-lg rounded-lg"
              asChild
            >
              <a href="tel:+40756637012" className="flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                +40 756 637 012
              </a>
            </GTMButton>
          </div>
        </div>
      </section>
    </>
  )
}
