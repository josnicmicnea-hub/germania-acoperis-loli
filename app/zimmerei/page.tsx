import type { Metadata } from "next";
import { ServicePageLayout } from "@/components/services/service-page-layout";

export const metadata: Metadata = {
  title:
    "Zimmerei & Holzbau - Dachstuhlbau, Gauben & Ausbau | Dachservice24Plus",
  description:
    "Professionelle Zimmererarbeiten vom Meisterbetrieb: Dachstuhlbau, Gauben, Dachausbau, Carports und Holzkonstruktionen. Traditionelles Handwerk mit modernster Technik. Kostenlose Beratung!",
  keywords: [
    "Zimmerei",
    "Holzbau",
    "Dachstuhl",
    "Gauben",
    "Dachausbau",
    "Carport",
    "Sparrenwechsel",
    "Dachkonstruktion",
    "Zimmermann",
  ],
  openGraph: {
    title: "Zimmerei & Holzbau - Dachstuhlbau & Ausbau | Dachservice24Plus",
    description:
      "Professionelle Zimmererarbeiten: Dachstuhlbau, Gauben, Dachausbau und Holzkonstruktionen.",
    url: "https://dachservice24plus.de/zimmerei",
    type: "website",
  },
  alternates: {
    canonical: "https://dachservice24plus.de/zimmerei",
  },
};

const features = [
  {
    title: "Dachstuhlneubau",
    description:
      "Konstruktion und Montage kompletter Dachstuhle -- vom klassischen Sparrendach uber Pfettendacher bis hin zu komplexen Walm- und Mansarddachkonstruktionen. Wir arbeiten sowohl mit traditionellen Holzverbindungen als auch mit modernen Ingenieurholzbau-Methoden.",
  },
  {
    title: "Gauben & Aufbauten",
    description:
      "Planung und Errichtung von Schleppgauben, Spitzgauben, Walmgauben und Flachdachgauben. Jede Gaube wird individuell an die vorhandene Dachgeometrie angepasst und sorgt fur mehr Licht, Luft und Wohnraum im Dachgeschoss.",
  },
  {
    title: "Dachgeschossausbau",
    description:
      "Kompletter Ausbau Ihres ungenutzten Dachraums zum vollwertigen Wohngeschoss. Von der statischen Prufung uber den Einbau von Dachflachenfenstern bis hin zur Innenbekleidung -- alles aus einer Hand fur ein perfektes Ergebnis.",
  },
  {
    title: "Sanierung & Verstarkung",
    description:
      "Fachgerechte Sanierung geschadigter Dachstuhle: Sparrenwechsel, Schwellenaustausch, Verstarkung tragender Elemente und Behandlung gegen Schadlingsbefall. Wir prufen die Tragfahigkeit und stellen die statische Sicherheit wieder her.",
  },
  {
    title: "Holzschutzmassnahmen",
    description:
      "Professionelle Holzschutzbehandlung gemaess DIN 68800: Vorbeugender und bekampfender Holzschutz gegen Insekten, Pilze und Feuchtigkeit. Feuerhemmende Behandlungen (Brandschutzklasse B1) fur erhohte Sicherheit.",
  },
  {
    title: "Sonderkonstruktionen",
    description:
      "Massgeschneiderte Holzkonstruktionen fur besondere Anforderungen: Carports, Terrassenuberdachungen, Wintergarten-Unterkonstruktionen, Pergolen und individuelle Sonderbauteile nach Ihren Vorstellungen.",
  },
];

const benefits = [
  "Ausgebildete Zimmermeister und Zimmergesellen mit langjahiger Berufserfahrung im konstruktiven Holzbau",
  "Ausschliesslich gepruftes, kammergetrocknetes Konstruktionsvollholz (KVH) und Brettschichtholz (BSH) aus nachhaltiger Forstwirtschaft",
  "Prazise statische Berechnungen durch kooperierende Tragwerksplaner fur maximale Sicherheit",
  "Erfahrung mit komplexen Dachkonstruktionen, Sonderbauformen und denkmalgeschutzten Objekten",
  "Einhaltung aller geltenden Normen und Vorschriften: DIN 1052, EC 5 und Landesbauordnungen",
  "Individuelle Losungen fur jedes Projekt -- vom kompakten Carport bis zur aufwendigen Dachstuhlkonstruktion",
];

const process = [
  {
    step: 1,
    title: "Aufmass & Analyse",
    description:
      "Prazise Vermessung des Bestands, Prufung der statischen Gegebenheiten und Aufnahme Ihrer Anforderungen.",
  },
  {
    step: 2,
    title: "Planung & Statik",
    description:
      "Erstellung der Werkplanung mit Abbundzeichnungen, statischer Berechnung und detailliertem Leistungsverzeichnis.",
  },
  {
    step: 3,
    title: "Vorfertigung",
    description:
      "Praziser CNC-Abbund der Holzelemente in der Werkstatt fur schnelle, passgenaue Montage auf der Baustelle.",
  },
  {
    step: 4,
    title: "Montage & Abnahme",
    description:
      "Fachgerechte Montage auf der Baustelle, Qualitatsprufung und gemeinsame Endabnahme mit Dokumentation.",
  },
];

const materials = [
  {
    name: "KVH (Konstruktionsvollholz)",
    description:
      "Kammergetrocknetes Nadelholz fur tragende Bauteile -- masshaltig, formstabil und mit technischer Trocknung auf 15 Prozent Holzfeuchte.",
  },
  {
    name: "BSH (Brettschichtholz)",
    description:
      "Hochleistungs-Ingenieurholz fur grosse Spannweiten und hohe Belastungen. Dimensionsstabil, rissminimiertund in individuellen Abmessungen lieferbar.",
  },
  {
    name: "Duo-/Triobalken",
    description:
      "Zwei- oder dreischichtig verleimte Balken mit minimierten Eigenspannungen -- ideal fur sichtbare Konstruktionen mit hochster Oberflachenqualitat.",
  },
  {
    name: "Simpson Strong-Tie",
    description:
      "Fuhrende Verbindungsmittel fur den Holzbau: Balkenschuhe, Sparrenpfettenanker, Winkelverbinder und Zuganker aus verzinktem Stahl.",
  },
  {
    name: "Holzschutzmittel",
    description:
      "Geprüfte, bauaufsichtlich zugelassene Holzschutzmittel gemaess DIN 68800 -- insektizid, fungizid und auf Wunsch feuerhemmend.",
  },
  {
    name: "OSB- und Rauspundplatten",
    description:
      "Hochbelastbare Flachenelemente fur Schalung, Aussteifung und Unterkonstruktion -- aus zertifizierter, nachhaltiger Holzwirtschaft.",
  },
];

export default function ZimmereiPage() {
  return (
    <ServicePageLayout
      title="Zimmerei & Holzbau"
      subtitle="Traditionelles Handwerk, moderne Technik"
      description="Vom massiven Dachstuhlneubau uber die feinfuhlige Sanierung historischer Holzkonstruktionen bis zum individuellen Carport: Unsere Zimmermeister verbinden traditionelles Handwerkswissen mit modernster Abbundtechnologie."
      heroImage="/reno-acop-31.jpeg"
      icon="building"
      features={features}
      benefits={benefits}
      process={process}
      materials={materials}
    />
  );
}
