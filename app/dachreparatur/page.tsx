import type { Metadata } from "next";
import { ServicePageLayout } from "@/components/services/service-page-layout";

export const metadata: Metadata = {
  title: "Dachreparatur - 24/7 Notdienst & Schnelle Hilfe | Dachservice24Plus",
  description:
    "Professionelle Dachreparatur und 24/7-Notdienst: Undichtigkeiten, Sturmschaden, gebrochene Ziegel, Dachrinnenreparatur. Schnelle Hilfe vom Meisterbetrieb. Jetzt anrufen!",
  keywords: [
    "Dachreparatur",
    "Dach Notdienst",
    "Sturmschaden Dach",
    "Undichtigkeit Dach",
    "Dachrinne reparieren",
    "Ziegel gebrochen",
    "Dach undicht",
    "Notdienst Dachdecker",
  ],
  openGraph: {
    title:
      "Dachreparatur - 24/7 Notdienst & Schnelle Hilfe | Dachservice24Plus",
    description:
      "Professionelle Dachreparatur und 24/7-Notdienst. Sturmschaden, Undichtigkeiten, gebrochene Ziegel.",
    url: "https://dachservice24plus.de/dachreparatur",
    type: "website",
  },
  alternates: {
    canonical: "https://dachservice24plus.de/dachreparatur",
  },
};

const features = [
  {
    title: "Leckortung & Abdichtung",
    description:
      "Prazise Lokalisierung von Undichtigkeiten mittels modernster Feuchtigkeitsmessgerate und thermografischer Analyse. Anschliessend fachgerechte Abdichtung der betroffenen Stellen mit langlebigen, witterungsbestandigen Materialien, um dauerhafte Dichtigkeit zu gewahrleisten.",
  },
  {
    title: "Sturmschadenbeseitigung",
    description:
      "Schnelle Soforthilfe nach Sturm, Hagel oder Unwetter: Wir sichern die Schadstelle umgehend mit einer Notabdeckung, dokumentieren den Schaden fur Ihre Versicherung und fuhren die dauerhafte Instandsetzung termingerecht durch.",
  },
  {
    title: "Ziegelaustausch",
    description:
      "Professioneller Austausch gebrochener, verrückter oder abgenutzter Dachziegel und Dachsteine. Wir verwenden identische oder kompatible Ersatzmaterialien, um ein einheitliches Erscheinungsbild und optimale Funktionalitat sicherzustellen.",
  },
  {
    title: "Dachrinnenreparatur",
    description:
      "Reparatur oder Austausch defekter Dachrinnen und Fallrohre. Undichte Loetstellen, durchgerostete Abschnitte oder beschadigte Halterungen -- wir stellen die einwandfreie Ableitung des Regenwassers sicher und schutzen so Ihre Fassade.",
  },
  {
    title: "Notdienst 24/7",
    description:
      "Unser Notfallteam ist rund um die Uhr erreichbar -- auch an Wochenenden und Feiertagen. Bei akuter Gefahr sind wir schnellstmoglich vor Ort, um Ihr Gebaude vor weiteren Schaden zu schutzen und eine provisorische Sicherung vorzunehmen.",
  },
  {
    title: "Praventive Wartung",
    description:
      "Regelmassige Dachinspektionen und vorbeugende Wartungsmassnahmen verhindern kostspielige Folgeschaden. Wir prufen Eindeckung, Anschlusse, Durchdringungen und Entwasserung und beheben kleine Mangel, bevor sie zu grossen Problemen werden.",
  },
];

const benefits = [
  "Rund-um-die-Uhr-Notdienst mit schnellstmoglicher Einsatzbereitschaft -- 365 Tage im Jahr",
  "Prazise Schadensdiagnose mit professioneller Messtechnik und Thermografie-Kameras",
  "Nachhaltige Reparaturen statt kurzfristiger Flickloesungen -- wir beseitigen die Ursache, nicht nur das Symptom",
  "Faire, transparente Preisgestaltung ohne versteckte Aufschlage -- auch im Notdienst",
  "Versicherungskonforme Dokumentation fur eine reibungslose Schadenregulierung",
  "Gewahrleistung auf alle durchgefuhrten Reparaturarbeiten",
];

const process = [
  {
    step: 1,
    title: "Kontaktaufnahme",
    description:
      "Rufen Sie uns an und schildern Sie das Problem. Unser Beraterteam ist rund um die Uhr fur Sie erreichbar.",
  },
  {
    step: 2,
    title: "Schadensanalyse",
    description:
      "Wir kommen zur Vor-Ort-Begutachtung, dokumentieren den Schaden und identifizieren die Ursache praezise.",
  },
  {
    step: 3,
    title: "Losungsvorschlag",
    description:
      "Sie erhalten einen detaillierten Reparaturvorschlag mit transparenter Kostenschatzung -- ohne versteckte Posten.",
  },
  {
    step: 4,
    title: "Fachgerechte Reparatur",
    description:
      "Unser Team fuhrt die Reparatur professionell durch und uberpruft das Ergebnis gemeinsam mit Ihnen.",
  },
];

export default function DachreparaturPage() {
  return (
    <ServicePageLayout
      title="Dachreparatur"
      subtitle="24/7 Notdienst & Instandsetzung"
      description="Schnelle, zuverlassige Dachreparaturen bei Undichtigkeiten, Sturmschaden oder altersbedingtem Verschleiss. Unser Notfallteam ist rund um die Uhr einsatzbereit, um Ihr Gebaude fachgerecht und dauerhaft zu schutzen."
      heroImage="/acop-tabla-cutata-3.jpeg"
      icon="wrench"
      features={features}
      benefits={benefits}
      process={process}
    />
  );
}
