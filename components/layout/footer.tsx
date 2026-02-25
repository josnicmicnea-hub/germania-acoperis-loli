import Link from "next/link"
import Image from "next/image"
import { Phone, MapPin, Clock, Shield } from "lucide-react"

const services = [
  { name: "Dachsanierung", href: "/dachsanierung" },
  { name: "Dachreparatur", href: "/dachreparatur" },
  { name: "Zimmerei & Holzbau", href: "/zimmerei" },
  { name: "Dachzubehor", href: "/dachzubehoer" },
  { name: "Unsere Referenzen", href: "/referenzen" },
]

const serviceAreas = ["Deutschlandweit", "Bayern", "NRW", "Baden-Wurttemberg", "Hessen", "Sachsen", "Niedersachsen", "Berlin & Brandenburg"]

const legalLinks = [
  { name: "Impressum", href: "/impressum" },
  { name: "AGB", href: "/agb" },
  { name: "Datenschutz", href: "/datenschutz" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-[#242f40] to-[#1a222d]">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 bg-white rounded-lg p-1">
                <Image src="/logo.png" alt="Dachservice24Plus Logo" fill className="object-contain" />
              </div>
              <div>
                <h3 className="text-white font-serif text-xl font-bold">Dachservice24Plus</h3>
                <p className="text-[#cca43b] text-sm">Meisterbetrieb</p>
              </div>
            </div>
            <p className="text-[#e5e5e5] text-sm leading-relaxed">
              Ihr kompetenter Ansprechpartner fur samtliche Dacharbeiten. Von der fachgerechten Dachsanierung uber
              prazise Zimmererarbeiten bis hin zur schnellen Dachreparatur -- wir vereinen handwerkliche Tradition mit
              modernster Technik fur Ergebnisse, die Generationen uberdauern.
            </p>
            <div className="flex items-center gap-2 text-[#cca43b]">
              <Clock className="w-4 h-4" />
              <span className="text-sm text-white">24/7 Notdienst erreichbar</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-serif text-lg font-semibold mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-[#cca43b]"></span>
              Leistungen
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-[#e5e5e5] hover:text-[#cca43b] transition-colors text-sm"
                    data-gtm-event="click"
                    data-gtm-category="Footer"
                    data-gtm-action="service_link"
                    data-gtm-label={service.name}
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-white font-serif text-lg font-semibold mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-[#cca43b]"></span>
              Einsatzgebiete
            </h4>
            <ul className="grid grid-cols-1 gap-2">
              {serviceAreas.map((area) => (
                <li key={area} className="text-[#e5e5e5] text-sm flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#cca43b]" />
                  {area}
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-2 mt-4 text-[#cca43b]">
              <Shield className="w-3 h-3" />
              <p className="text-sm">Meisterbetrieb-Qualitat</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-serif text-lg font-semibold mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-[#cca43b]"></span>
              Kontakt
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+40756637012"
                  className="flex items-center gap-3 text-[#e5e5e5] hover:text-[#cca43b] transition-colors group"
                  data-gtm-event="click"
                  data-gtm-category="Contact"
                  data-gtm-action="phone_click"
                  data-gtm-label="footer_phone"
                >
                  <div className="w-10 h-10 rounded-full bg-[#cca43b]/20 flex items-center justify-center group-hover:bg-[#cca43b]/30 transition-colors">
                    <Phone className="w-4 h-4 text-[#cca43b]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#e5e5e5]/70">Telefon / Notdienst</p>
                    <p className="font-medium">+40 756 637 012</p>
                  </div>
                </a>
              </li>
              <li className="flex items-center gap-3 text-[#e5e5e5]">
                <div className="w-10 h-10 rounded-full bg-[#cca43b]/20 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-[#cca43b]" />
                </div>
                <div>
                  <p className="text-xs text-[#e5e5e5]/70">Einsatzgebiet</p>
                  <p className="font-medium">Deutschlandweit</p>
                </div>
              </li>
              <li className="flex items-center gap-3 text-[#e5e5e5]">
                <div className="w-10 h-10 rounded-full bg-[#cca43b]/20 flex items-center justify-center">
                  <Clock className="w-4 h-4 text-[#cca43b]" />
                </div>
                <div>
                  <p className="text-xs text-[#e5e5e5]/70">Erreichbarkeit</p>
                  <p className="font-medium">24/7 - Auch an Feiertagen</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#363636]">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#e5e5e5]/70 text-sm text-center md:text-left">
              &copy; {currentYear} Dachservice24Plus. Alle Rechte vorbehalten.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-[#e5e5e5]/70 hover:text-[#cca43b] text-sm transition-colors"
                  data-gtm-event="click"
                  data-gtm-category="Footer"
                  data-gtm-action="legal_link"
                  data-gtm-label={link.name}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
