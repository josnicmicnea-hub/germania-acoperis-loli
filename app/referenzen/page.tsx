import type { Metadata } from "next";
import { ProjectSection } from "@/components/lucrari/project-section";
import { Phone } from "lucide-react";
import { GTMButton } from "@/components/ui/gtm-button";

export const metadata: Metadata = {
  title: "Referenzen - Unsere Dachprojekte im Uberblick | Dachservice24Plus",
  description:
    "Uberzeugen Sie sich von unserer Arbeit: Fotodokumentation abgeschlossener Dachprojekte -- Vorher, Wahrend und Nachher. Dachsanierung, Reparatur, Zimmerei und mehr.",
  keywords: [
    "Referenzen Dachdecker",
    "Dachprojekte",
    "Vorher Nachher Dach",
    "Dachsanierung Referenzen",
    "Dachreparatur Ergebnisse",
    "Portfolio Dachdecker",
  ],
  openGraph: {
    title: "Referenzen - Unsere Dachprojekte | Dachservice24Plus",
    description:
      "Uberzeugen Sie sich von unserer Arbeit. Fotodokumentation: Vorher, Wahrend und Nachher.",
    url: "https://dachservice24plus.de/referenzen",
    type: "website",
  },
  alternates: {
    canonical: "https://dachservice24plus.de/referenzen",
  },
};

const projects = [
  {
    title: "Komplettsanierung Steildach -- Einfamilienhaus",
    description:
      "Anspruchsvolle Komplettsanierung eines 35 Jahre alten Steildaches an einem Einfamilienhaus. Die Alteindeckung aus Betondachsteinen wurde fachgerecht demontiert, die vorhandene Lattung und Konterlattung vollstandig erneuert und eine hochleistungsfahige Aufsparrendammung mit 160 mm PU-Platten verbaut. Die Neueindeckung erfolgte mit Erlus-Tondachziegeln im Engobe-Finish. Ergebnis: ein asthetisch uberzeugendes und energetisch optimiertes Dach mit erheblich reduzierten Heizkosten.",
    location: "Munchen, Bayern",
    duration: "14 Arbeitstage",
    images: [
      {
        src: "/reno-acop-31.jpeg",
        alt: "Altes, verwittertes Steildach vor der Sanierung",
        label: "Vorher",
      },
      {
        src: "/reno-acop-32.jpeg",
        alt: "Demontage der alten Dachziegel und Lattung",
        label: "Wahrend der Arbeit",
      },
      {
        src: "/reno-acop-33.jpeg",
        alt: "Verlegung der Aufsparrendammung und Konterlattung",
        label: "Wahrend der Arbeit",
      },
    ],
  },
  {
    title: "Dachgeschossausbau mit Schleppgauben",
    description:
      "Umfangreicher Dachgeschossausbau eines Altbaus aus den 1960er Jahren. Der bestehende Dachstuhl wurde statisch verstarkt, zwei grosszugige Schleppgauben erganzten den Wohnraum um zusatzliche 45 Quadratmeter. Der Einbau von sechs Velux-Dachflachenfenstern sorgt fur eine hervorragende Tageslichtversorgung. Die kompletten Zimmererarbeiten, die Dacheindeckung und der Fenstereinbau wurden von unserem Team ausgefuhrt.",
    location: "Stuttgart, Baden-Wurttemberg",
    duration: "22 Arbeitstage",
    images: [
      {
        src: "/reno-acop-02.jpeg",
        alt: "Ungenutzter Dachraum vor dem Ausbau",
        label: "Vorher",
      },
      {
        src: "/reno-acop-01.jpeg",
        alt: "Konstruktion der neuen Gaubenkonstruktion",
        label: "Wahrend der Arbeit",
      },
      {
        src: "/reno-acop-03.jpeg",
        alt: "Einbau der Velux-Dachflachenfenster",
        label: "Wahrend der Arbeit",
      },
    ],
  },
  {
    title: "Notreparatur nach Unwetter mit Hagelschaden",
    description:
      "Soforteinsatz unseres Notdienstteams nach einem schweren Hagelunwetter, das das Ziegeldach eines Wohnhauses massiv beschadigt hatte. Innerhalb von zwei Stunden nach dem Anruf war unser Team vor Ort und hatte eine professionelle Notabdeckung installiert. In den folgenden Tagen wurden alle beschadigten Ziegel ersetzt, die Unterspannbahn repariert und das Dachrinnsystem instand gesetzt. Die vollstandige Schadensdokumentation ermoglichte dem Kunden eine reibungslose Abwicklung mit seiner Versicherung.",
    location: "Frankfurt, Hessen",
    duration: "6 Arbeitstage",
    images: [
      {
        src: "/reno-acop-21.jpeg",
        alt: "Sturmschaden am Dach nach dem Hagelunwetter",
        label: "Vorher",
      },
      {
        src: "/reno-acop-22.jpeg",
        alt: "Notabdeckung und Sicherungsmassnahmen",
        label: "Wahrend der Arbeit",
      },
    ],
  },
  {
    title: "Flachdachsanierung Gewerbehalle mit Grundach",
    description:
      "Grossprojekt: Sanierung einer 2.500 Quadratmeter grossen Gewerbeflache mit anschliessendem extensivem Grundachaufbau. Die alte Bitumenabdichtung wurde entfernt und durch ein modernes FPO-Bahnen-System ersetzt. Darauf wurde ein professioneller Grundachaufbau mit Wurzelschutz, Dranageschicht und Vegetationssubstrat realisiert. Das Grundach verbessert nicht nur die Optik, sondern bietet zusatzliche Warmedammung und verlangsamt den Regenwasserabfluss nachhaltig.",
    location: "Dusseldorf, NRW",
    duration: "28 Arbeitstage",
    images: [
      {
        src: "/sist-jgheab1.jpeg",
        alt: "Alte Bitumenabdichtung auf der Gewerbeflache",
        label: "Vorher",
      },
      {
        src: "/sist-jgheab2.jpeg",
        alt: "Verlegung der neuen FPO-Abdichtungsbahnen",
        label: "Wahrend der Arbeit",
      },
    ],
  },
  {
    title: "Denkmalgerechte Dachsanierung Fachwerkhaus",
    description:
      "Behutsame Sanierung des Daches eines denkmalgeschutzten Fachwerkhauses aus dem 18. Jahrhundert. In enger Abstimmung mit der Unteren Denkmalbehorde wurden historische Biberschwanzziegel in Kronendoppeldeckung neu verlegt. Der schadhafte Teil des Dachstuhls wurde mit original dimensioniertem Eichenholz und traditionellen Holzverbindungen erneuert. Ein Balanceakt zwischen Denkmalschutzauflagen und modernen Anforderungen an Funktionalitat und Dammung.",
    location: "Bamberg, Bayern",
    duration: "18 Arbeitstage",
    images: [
      {
        src: "/terasa1.jpeg",
        alt: "Denkmalgeschutztes Fachwerkhaus vor der Dachsanierung",
        label: "Vorher",
      },
      {
        src: "/terasa2.jpeg",
        alt: "Sanierung des historischen Dachstuhls mit Eichenholz",
        label: "Wahrend der Arbeit",
      },
    ],
  },
  {
    title: "Dachentwasserung Wohnanlage -- Lindab Komplettsystem",
    description:
      "Installation eines kompletten Dachentwasserungssystems fur eine Wohnanlage mit acht Mehrfamilienhausern. Verarbeitet wurden Lindab-Halbrundrinnen in Anthrazitgrau mit passenden Fallrohren und allen erforderlichen Formstucken. Die prazise Dimensionierung basierte auf einer hydrologischen Berechnung nach DIN EN 12056. Samtliche Rinnenhalter wurden in die Schalung integriert fur eine nahtlose, asthetisch ansprechende Optik.",
    location: "Hamburg",
    duration: "12 Arbeitstage",
    images: [
      {
        src: "/carport01.jpeg",
        alt: "Neubauten ohne Dachentwasserungssystem",
        label: "Vorher",
      },
      {
        src: "/carport02.jpeg",
        alt: "Montage der Lindab-Halbrundrinnen",
        label: "Wahrend der Arbeit",
      },
      {
        src: "/carport03.jpeg",
        alt: "Anschluss der Fallrohre und Formstucke",
        label: "Wahrend der Arbeit",
      },
    ],
  },
];

export default function ReferenzenPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-[#242f40] to-[#1a222d] overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#cca43b]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#cca43b]/5 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <span className="inline-block text-[#cca43b] text-sm font-semibold tracking-wider uppercase mb-4">
            Referenzen
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
            Unsere{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#cca43b] to-[#d4b55a]">
              Projekte
            </span>
          </h1>
          <p className="text-lg md:text-xl text-[#e5e5e5] max-w-3xl mx-auto leading-relaxed">
            Jedes Dachprojekt erzahlt eine Geschichte von Handwerkskunst und
            Prazision. Entdecken Sie unsere Referenzen und uberzeugen Sie sich
            selbst von der Qualitat, die wir bei jeder Aufgabe liefern --
            dokumentiert von der Ausgangssituation uber den Bauprozess bis zum
            fertigen Ergebnis.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20">
              <p className="text-2xl font-serif font-bold text-[#cca43b]">
                500+
              </p>
              <p className="text-sm text-white/70">Projekte realisiert</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20">
              <p className="text-2xl font-serif font-bold text-[#cca43b]">
                15+
              </p>
              <p className="text-sm text-white/70">Jahre Erfahrung</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20">
              <p className="text-2xl font-serif font-bold text-[#cca43b]">
                100%
              </p>
              <p className="text-sm text-white/70">Kundenzufriedenheit</p>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#242f40] mb-6">
            Transparenz und{" "}
            <span className="text-[#cca43b]">nachweisbare Qualitat</span>
          </h2>
          <p className="text-[#363636] leading-relaxed">
            Wir dokumentieren jedes Projekt luckenlos -- von der
            Bestandsaufnahme uber den Bauprozess bis zur Endabnahme. In der
            folgenden Galerie sehen Sie authentische Aufnahmen{" "}
            <strong className="text-[#242f40]">
              vor Beginn der Arbeiten, wahrend der Ausfuhrung
            </strong>{" "}
            und das{" "}
            <strong className="text-[#242f40]">fertige Endergebnis</strong>.
            Navigieren Sie mit den Pfeilen oder wischen Sie auf mobilen Geraten
            durch die Bildergalerien.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 bg-[#e5e5e5]/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-24">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`${index > 0 ? "pt-16 border-t border-[#e5e5e5]" : ""}`}
              >
                <ProjectSection
                  title={project.title}
                  description={project.description}
                  location={project.location}
                  duration={project.duration}
                  images={project.images}
                  reversed={index % 2 !== 0}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#242f40] to-[#1a222d]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
            Beeindruckt von unseren{" "}
            <span className="text-[#cca43b]">Ergebnissen</span>?
          </h2>
          <p className="text-[#e5e5e5] text-lg mb-8">
            Lassen Sie sich unverbindlich beraten und erhalten Sie ein
            massgeschneidertes Angebot fur Ihr Dachprojekt. Wir garantieren die
            gleiche Sorgfalt, Prazision und Qualitat, die Sie in unseren
            Referenzen sehen.
          </p>
          <GTMButton
            gtmLabel="referenzen_cta_call"
            gtmCategory="Portfolio CTA"
            className="bg-gradient-to-r from-[#cca43b] to-[#d4b55a] hover:from-[#b8922f] hover:to-[#cca43b] text-white px-10 py-5 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            asChild
          >
            <a
              href="tel:+40756637012"
              className="flex items-center justify-center gap-3"
            >
              <Phone className="w-5 h-5" />
              Kostenloses Angebot anfordern
            </a>
          </GTMButton>
        </div>
      </section>
    </>
  );
}
