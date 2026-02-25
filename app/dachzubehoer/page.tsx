import type { Metadata } from "next";
import { ServicePageLayout } from "@/components/services/service-page-layout";

export const metadata: Metadata = {
  title:
    "Dachzubehor - Dachfenster, Dachrinnen, Schneefang & Blitzschutz | Dachservice24Plus",
  description:
    "Hochwertige Dachzubehorkomponenten: Dachfenster (Velux, Roto), Dachrinnen, Schneefangsysteme, Blitzschutz, Dachluken und Lichtkuppeln. Fachgerechte Montage vom Meisterbetrieb.",
  keywords: [
    "Dachzubehor",
    "Dachfenster",
    "Velux",
    "Roto",
    "Dachrinne",
    "Schneefang",
    "Blitzschutz",
    "Dachluke",
    "Lichtkuppel",
    "Dachentlüftung",
  ],
  openGraph: {
    title:
      "Dachzubehor - Dachfenster, Dachrinnen & Schneefang | Dachservice24Plus",
    description:
      "Komplettes Dachzubehor-Sortiment: Dachfenster, Dachrinnen, Schneefang, Blitzschutz. Montage inklusive.",
    url: "https://dachservice24plus.de/dachzubehoer",
    type: "website",
  },
  alternates: {
    canonical: "https://dachservice24plus.de/dachzubehoer",
  },
};

const features = [
  {
    title: "Dachfenster & Lichtkuppeln",
    description:
      "Fachgerechter Einbau von Dachflachenfenstern namhafter Hersteller wie Velux und Roto. Wir beraten Sie ausfuhrlich zu Groessen, Offnungsvarianten (Schwingfenster, Klapp-Schwingfenster, Elektro) und passender Innenbekleidung. Auch Lichtkuppeln fur Flachdacher montieren wir zuverlassig.",
  },
  {
    title: "Dachentwasserung",
    description:
      "Installation kompletter Entwasserungssysteme: halbrunde und kastenformige Rinnenprofile, Fallrohre, Rinnenhalter und Zubehor. Wir verarbeiten Materialien wie Titanzink, Kupfer, Aluminium oder beschichtetes Stahlblech -- abgestimmt auf die Architektur Ihres Gebaudes.",
  },
  {
    title: "Schneefangsysteme",
    description:
      "Montage von Schneefangittern, Schneefangrohren und Schneestoppern gemaess DIN EN 14437. Die Systeme verhindern das unkontrollierte Abrutschen von Schneemassen und schutzen Personen, Fahrzeuge und Gebaude im Traufbereich.",
  },
  {
    title: "First- und Gratentluftung",
    description:
      "Einbau belüfteter Firstsysteme und Gratabschlüsse fur eine optimale Hinterluftung der Dachkonstruktion. Fachgerechte Entluftung verhindert Feuchteschaden und verlanget die Lebensdauer Ihres Daches erheblich.",
  },
  {
    title: "Dachausstieg & Laufanlage",
    description:
      "Einbau von Dachausstiegen, Trittflachen und Sicherheitslaufanlagen fur die gefahrlose Begehung Ihres Daches. Wichtig fur Wartungsarbeiten an Antennen, Solaranlagen und Schornsteinen -- normgerecht nach DIN EN 517.",
  },
  {
    title: "Blitzschutzanlagen",
    description:
      "Planung und Installation von ausseren Blitzschutzanlagen gemaess DIN EN 62305. Fangeinrichtungen, Ableitungen und Erdungsanlagen -- fachgerecht dimensioniert und montiert fur den Schutz Ihres Gebaudes vor Blitzeinschlag.",
  },
];

const benefits = [
  "Ausschliesslich Markenprodukte fuhrende Hersteller: Velux, Roto, Lindab, Rheinzink, Zambelli",
  "Fachgerechte Montage durch ausgebildete Dachdecker mit Herstellerzertifizierung",
  "Individuelle Beratung zur Auswahl der optimalen Zubehorkomponenten fur Ihr Dachsystem",
  "Grosse Auswahl an Materialien, Farben und Ausfuhrungen fur jeden architektonischen Anspruch",
  "Komplettservice von der Beratung über die Montage bis hin zum spateren Wartungsservice",
  "Wettbewerbsfahige Preise durch direkte Herstellerpartnerschaften ohne Zwischenhandel",
];

const process = [
  {
    step: 1,
    title: "Bestandsaufnahme",
    description:
      "Wir analysieren Ihr vorhandenes Dachsystem und ermitteln die benotigten Zubehorkomponenten.",
  },
  {
    step: 2,
    title: "Produktauswahl",
    description:
      "Gemeinsam wahlen wir die optimalen Produkte aus unserem umfangreichen Sortiment aus.",
  },
  {
    step: 3,
    title: "Materialbestellung",
    description:
      "Wir bestellen die Produkte direkt beim Hersteller und vereinbaren einen festen Montagetermin.",
  },
  {
    step: 4,
    title: "Fachgerechte Montage",
    description:
      "Unsere zertifizierten Monteure installieren alle Komponenten prazise und prufen die Funktionsfahigkeit.",
  },
];

const materials = [
  {
    name: "Velux Dachfenster",
    description:
      "Weltmarktfuhrer fur Dachflachenfenster aus Danemark. Schwingfenster, Klappfenster und elektrische Varianten in allen gangigen Groessen.",
  },
  {
    name: "Roto Dachfenster",
    description:
      "Deutscher Premiumhersteller mit innovativen Offnungsmechanismen und besonders guter Warmedammung (Uw bis 0,78).",
  },
  {
    name: "Lindab Dachentwasserung",
    description:
      "Schwedisches Premium-Rinnensystem aus beschichtetem Stahlblech. Korrosionsbestandig, leicht und in zahlreichen Farben erhaltlich.",
  },
  {
    name: "Rheinzink Entwasserung",
    description:
      "Klassische Titanzink-Rinnensysteme mit natürlicher Patinierung. Wartungsfrei und mit einer Lebensdauer von uber 80 Jahren.",
  },
  {
    name: "Flender-Flux Schneefang",
    description:
      "Fuhrende Schneefangsysteme aus Deutschland. Gitter, Rohre und individuell anpassbare Losungen fur jedes Dachprofil.",
  },
  {
    name: "DEHN Blitzschutz",
    description:
      "Weltweit renommierter Hersteller von Blitz- und Uberspannungsschutzsystemen -- zuverlassig, normgerecht und langlebig.",
  },
];

export default function DachzubehoerPage() {
  return (
    <ServicePageLayout
      title="Dachzubehor"
      subtitle="Funktionale Perfektion fur Ihr Dach"
      description="Die richtigen Zubehorkomponenten machen den Unterschied zwischen einem guten und einem herausragenden Dach. Wir beraten, liefern und montieren hochwertige Dachfenster, Entwasserungssysteme, Schneefanganlagen und Blitzschutz -- alles aus einer Hand."
      heroImage="/reno-acop-22.jpeg"
      icon="package"
      features={features}
      benefits={benefits}
      process={process}
      materials={materials}
    />
  );
}
