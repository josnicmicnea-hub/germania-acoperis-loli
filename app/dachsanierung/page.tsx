import type { Metadata } from "next";
import { ServicePageLayout } from "@/components/services/service-page-layout";

export const metadata: Metadata = {
  title:
    "Dachsanierung - Professionelle Neueindeckung & Komplettsanierung | Dachservice24Plus",
  description:
    "Fachgerechte Dachsanierung vom Meisterbetrieb: Neueindeckung, energetische Sanierung, Flachdachsanierung und Asbestentsorgung. Uber 15 Jahre Erfahrung. 24/7 erreichbar. Kostenloses Angebot anfordern!",
  keywords: [
    "Dachsanierung",
    "Neueindeckung",
    "Dacheindeckung",
    "Flachdachsanierung",
    "energetische Sanierung",
    "Dachdammung",
    "Aufsparrendammung",
    "Asbestentsorgung",
    "Dachziegel",
    "Dachsteine",
  ],
  openGraph: {
    title: "Dachsanierung - Professionelle Neueindeckung | Dachservice24Plus",
    description:
      "Fachgerechte Dachsanierung vom Meisterbetrieb: Neueindeckung, energetische Sanierung, Flachdachsanierung. Kostenloses Angebot!",
    url: "https://dachservice24plus.de/dachsanierung",
    type: "website",
  },
  alternates: {
    canonical: "https://dachservice24plus.de/dachsanierung",
  },
};

const features = [
  {
    title: "Steildach-Neueindeckung",
    description:
      "Komplette Neueindeckung Ihres Steildaches mit hochwertigen Dachziegeln, Dachsteinen oder Metalleindeckungen. Wir demontieren die Alteindeckung fachgerecht, prufen die Unterkonstruktion, erneuern bei Bedarf die Lattung und verlegen die neue Eindeckung nach den geltenden Fachregeln des ZVDH.",
  },
  {
    title: "Energetische Dachsanierung",
    description:
      "Senken Sie Ihre Heizkosten nachhaltig durch eine professionelle Dachdammung. Wir beraten Sie ausfuhrlich zu den Optionen Aufsparrendammung, Zwischensparrendammung oder Untersparrendammung und setzen die optimale Losung nach GEG-Vorgaben um.",
  },
  {
    title: "Flachdachsanierung",
    description:
      "Fachgerechte Abdichtung und Sanierung von Flachdachern mit bewahrten Materialien wie EPDM, PVC, FPO-Bahnen oder Flussigkunststoff. Auf Wunsch realisieren wir auch extensive Grundacher, die den Wert Ihrer Immobilie steigern.",
  },
  {
    title: "Asbestsanierung & Entsorgung",
    description:
      "Zertifizierte Demontage und Entsorgung asbesthaltiger Alteindeckungen gemaess TRGS 519. Wir ubernehmen alle behoerlich vorgeschriebenen Massnahmen und kummern uns um die ordnungsgemasse Abfallentsorgung uber zugelassene Deponien.",
  },
  {
    title: "Dach-Komplettsysteme",
    description:
      "Montage von Komplettlosungen inklusive Unterspannbahnen, Dampfbremsen, Dammung, Konterlattung und Eindeckung. Jedes Element wird prazise aufeinander abgestimmt, um ein langlebiges, dichtes und energieeffizientes Dachsystem zu schaffen.",
  },
  {
    title: "Denkmalschutz-Sanierung",
    description:
      "Sensible Sanierung denkmalgeschutzter Dacher unter Einhaltung der Auflagen der unteren Denkmalbehorde. Wir verarbeiten traditionelle Materialien wie Naturschiefer, handgestrichene Biberschwanzziegel oder historische Falzziegelprofile.",
  },
];

const benefits = [
  "Meisterbetrieb mit uber 15 Jahren Erfahrung in Dachsanierungen jeder Groessenordnung",
  "Umfassende Gewahrleistung von bis zu 10 Jahren auf Handwerksleistungen und Materialgarantie",
  "Ausschliesslich zertifizierte Markenmaterialien von fuhrenden Herstellern wie Braas, Erlus und Creaton",
  "Kostenlose Erstbesichtigung, professionelle Bestandsaufnahme und unverbindliche Angebotserstellung",
  "Verbindliche Terminzusagen und transparente Kommunikation wahrend der gesamten Projektdauer",
  "Grundliche Endreinigung der Baustelle und ordnungsgemasse Entsorgung aller Altmaterialien",
];

const process = [
  {
    step: 1,
    title: "Besichtigung",
    description:
      "Wir begutachten Ihr Dach vor Ort, dokumentieren den Ist-Zustand und besprechen Ihre Wunsche und Anforderungen im Detail.",
  },
  {
    step: 2,
    title: "Planung & Angebot",
    description:
      "Sie erhalten ein detailliertes, transparentes Angebot mit Leistungsbeschreibung, Materialspezifikation und verbindlichem Festpreis.",
  },
  {
    step: 3,
    title: "Ausfuhrung",
    description:
      "Unser Meisterteam fuhrt die Sanierung termingerecht, sauber und nach den hochsten handwerklichen Standards durch.",
  },
  {
    step: 4,
    title: "Abnahme & Garantie",
    description:
      "Gemeinsame Endabnahme mit Prufprotokoll, Ubergabe aller Garantiedokumente und ausfuhrlicher Pflegeanleitung.",
  },
];

const materials = [
  {
    name: "Braas Dachsteine",
    description:
      "Deutscher Marktfuhrer fur Betondachsteine. Langlebig, farbbestandig und mit 30 Jahren Materialgarantie.",
  },
  {
    name: "Erlus Tondachziegel",
    description:
      "Bayerische Premiumziegel aus Ton, gebrannt bei uber 1.100degC. Naturlich, frostbestandig und mit edler Oberflache.",
  },
  {
    name: "Creaton Dachziegel",
    description:
      "Traditionsreiche Tondachziegel in zahlreichen Formaten und Oberflachen -- vom klassischen Biberschwanz bis zum modernen Glattziegel.",
  },
  {
    name: "Rheinzink Stehfalz",
    description:
      "Hochwertige Titanzink-Stehfalzeindeckung fur anspruchsvolle Architektur. Wartungsfrei, langlebig und nachhaltig recycelbar.",
  },
  {
    name: "Prefa Aluminium",
    description:
      "Leichte, sturmsichere Aluminiumdachsysteme aus Oesterreich. 40 Jahre Materialgarantie, in zahlreichen Farben erhaltlich.",
  },
  {
    name: "IKO / Bauder Flachdach",
    description:
      "Fuhrende Abdichtungssysteme fur Flachdacher: PVC-, EPDM- und Bitumenbahnen fur maximale Dichtigkeit und Lebensdauer.",
  },
];

export default function DachsanierungPage() {
  return (
    <ServicePageLayout
      title="Dachsanierung"
      subtitle="Neueindeckung & Komplettsanierung"
      description="Von der einfachen Neueindeckung bis zur komplexen energetischen Komplettsanierung: Unser Meisterbetrieb realisiert Ihr Dachprojekt mit hochster Prazision, zertifizierten Materialien und einer Gewahrleistung, auf die Sie sich verlassen konnen."
      heroImage="/fronton-1.jpeg"
      icon="hammer"
      features={features}
      benefits={benefits}
      process={process}
      materials={materials}
    />
  );
}
