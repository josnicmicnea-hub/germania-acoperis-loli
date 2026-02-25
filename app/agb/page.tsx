import type { Metadata } from "next"
import { LegalPageLayout } from "@/components/legal/legal-page-layout"

export const metadata: Metadata = {
  title: "AGB - Allgemeine Geschaftsbedingungen | Dachservice24Plus",
  description:
    "Allgemeine Geschaftsbedingungen der Dachservice24Plus. Informationen zu Vertragsschluss, Leistungen, Zahlungsbedingungen und Gewahrleistung.",
  robots: {
    index: false,
    follow: true,
  },
}

export default function AGBPage() {
  return (
    <LegalPageLayout title="Allgemeine Geschaftsbedingungen (AGB)" lastUpdated="Februar 2026">
      <h2>1. Geltungsbereich</h2>
      <p>
        Diese Allgemeinen Geschaftsbedingungen (nachfolgend "AGB") gelten fur samtliche Vertrage zwischen
        Dachservice24Plus (nachfolgend "Auftragnehmer") und dem Kunden (nachfolgend "Auftraggeber") uber
        Dachdeckerarbeiten, Zimmerei, Dachsanierung, Dachreparatur sowie die Lieferung und Montage von Dachzubehor.
        Abweichende Bedingungen des Auftraggebers werden nur anerkannt, wenn der Auftragnehmer diesen ausdrucklich
        schriftlich zustimmt.
      </p>

      <h2>2. Leistungsumfang</h2>
      <h3>2.1 Angebotene Leistungen</h3>
      <p>Der Auftragnehmer erbringt folgende Leistungen:</p>
      <ul>
        <li>Komplette Dachsanierung und Dachneueindeckung (Ziegel, Schiefer, Metall, Bitumen)</li>
        <li>Dachreparaturen aller Art, einschliesslich Notfallreparaturen</li>
        <li>Zimmererarbeiten fur Dachstuhle und Holzkonstruktionen</li>
        <li>Montage von Dachzubehor (Dachrinnen, Fallrohre, Dachfenster, Schneefanggitter)</li>
        <li>Warmedammung und energetische Dachsanierung</li>
        <li>Fachberatung und kostenlose Vor-Ort-Besichtigung</li>
      </ul>

      <h3>2.2 Angebotserstellung</h3>
      <p>
        Angebote des Auftragnehmers sind freibleibend und unverbindlich. Ein Vertrag kommt erst durch die
        schriftliche Auftragsbestatigung des Auftragnehmers oder durch Beginn der Ausfuhrung zustande.
        Angebote haben eine Gultigkeit von 30 Kalendertagen ab Erstellungsdatum, sofern nicht anders angegeben.
      </p>

      <h2>3. Preise und Zahlungsbedingungen</h2>
      <h3>3.1 Preisgestaltung</h3>
      <p>
        Alle angegebenen Preise verstehen sich in Euro inklusive der gesetzlichen Mehrwertsteuer. Der im Angebot
        genannte Preis ist ein Festpreis, sofern nicht ausdrucklich als Schatzpreis gekennzeichnet. Zusatzliche
        Leistungen, die uber den vereinbarten Umfang hinausgehen, werden nach Aufwand zu den vereinbarten
        Stundensatzen berechnet und bedurfen der vorherigen schriftlichen Zustimmung des Auftraggebers.
      </p>

      <h3>3.2 Zahlungsmodalitaten</h3>
      <ul>
        <li>Anzahlung: 30% des Auftragswertes bei Auftragserteilung</li>
        <li>Zwischenzahlung: 40% nach Fertigstellung der Roharbeiten</li>
        <li>Schlusszahlung: 30% nach Abnahme der Gesamtleistung</li>
      </ul>
      <p>
        Die Zahlung erfolgt per Bankuberweisung innerhalb von 14 Tagen nach Rechnungsstellung. Bei Zahlungsverzug
        werden Verzugszinsen in Hohe von 5 Prozentpunkten uber dem Basiszinssatz berechnet.
      </p>

      <h2>4. Ausfuhrung der Arbeiten</h2>
      <h3>4.1 Ausfuhrungszeitraum</h3>
      <p>
        Der vereinbarte Ausfuhrungszeitraum beginnt mit dem im Vertrag genannten Datum. Verzogerungen durch
        hohere Gewalt, ungunstige Witterungsbedingungen oder unvorhergesehene bauliche Gegebenheiten verlangern
        die Ausfuhrungsfrist entsprechend. Der Auftragnehmer wird den Auftraggeber unverzuglich uber solche
        Verzogerungen informieren.
      </p>

      <h3>4.2 Mitwirkungspflichten des Auftraggebers</h3>
      <p>Der Auftraggeber verpflichtet sich:</p>
      <ul>
        <li>Ungehinderten Zugang zur Baustelle zu gewahrleisten</li>
        <li>Einen geeigneten Stellplatz fur Material und Gerate bereitzustellen</li>
        <li>Strom- und Wasseranschlusse zur Verfugung zu stellen</li>
        <li>Erforderliche behordliche Genehmigungen rechtzeitig einzuholen</li>
        <li>Vollstandige und korrekte Informationen uber das Bauobjekt bereitzustellen</li>
      </ul>

      <h3>4.3 Anderungen wahrend der Ausfuhrung</h3>
      <p>
        Anderungswunsche des Auftraggebers nach Vertragsschluss bedurfen der schriftlichen Vereinbarung.
        Der Auftragnehmer wird die Auswirkungen auf Preis und Ausfuhrungsfrist mitteilen. Der Auftragnehmer
        behalt sich das Recht vor, Anderungswunsche abzulehnen, wenn diese technisch nicht umsetzbar sind.
      </p>

      <h2>5. Gewahrleistung und Garantie</h2>
      <h3>5.1 Gewahrleistungsfristen</h3>
      <p>Es gelten folgende Gewahrleistungsfristen:</p>
      <ul>
        <li>Dachsanierung und Neueindeckung: 5 Jahre auf Arbeitsleistung</li>
        <li>Dachreparaturen: 2 Jahre auf Arbeitsleistung</li>
        <li>Zimmererarbeiten: 5 Jahre auf Arbeitsleistung</li>
        <li>Zubehormontage: 2 Jahre auf Arbeitsleistung</li>
        <li>Materialgarantie: gemass Herstellerangaben (bis zu 30 Jahre)</li>
      </ul>

      <h3>5.2 Mangelanzeige</h3>
      <p>
        Mangel sind dem Auftragnehmer unverzuglich nach Entdeckung schriftlich anzuzeigen. Der Auftragnehmer
        hat das Recht zur Nachbesserung. Erst nach erfolgloser Nachbesserung (zwei Versuche) kann der Auftraggeber
        Minderung oder Rucktritt verlangen.
      </p>

      <h3>5.3 Ausschluss der Gewahrleistung</h3>
      <p>Die Gewahrleistung entfallt bei:</p>
      <ul>
        <li>Schaden durch hohere Gewalt oder aussergewohnliche Naturereignisse</li>
        <li>Unsachgemassen Eingriffen oder Anderungen durch Dritte</li>
        <li>Unterlassener oder fehlerhafter Wartung durch den Auftraggeber</li>
        <li>Normaler Abnutzung und Verschleiss</li>
        <li>Schaden durch nachtraglich eingebaute Bauteile Dritter</li>
      </ul>

      <h2>6. Haftung</h2>
      <p>
        Die Haftung des Auftragnehmers fur leichte Fahrlassigkeit ist auf die Verletzung vertragswesentlicher
        Pflichten (Kardinalpflichten) beschrankt. In diesem Fall ist die Haftung auf den vertragstypischen,
        vorhersehbaren Schaden begrenzt. Die Haftung fur Personenschaden und grobe Fahrlassigkeit bleibt
        unberuhrt. Die Haftung ist in jedem Fall auf die Hohe des Auftragswertes begrenzt.
      </p>

      <h2>7. Abnahme</h2>
      <p>
        Nach Fertigstellung der Arbeiten wird der Auftraggeber zur Abnahme aufgefordert. Die Abnahme hat innerhalb
        von 12 Werktagen nach Fertigstellungsmitteilung zu erfolgen. Unwesentliche Mangel berechtigen nicht zur
        Verweigerung der Abnahme. Erfolgt innerhalb der Frist keine Abnahme oder Mangelruhe, gilt die Leistung
        als abgenommen (fiktive Abnahme).
      </p>

      <h2>8. Kundigung und Rucktritt</h2>
      <h3>8.1 Kundigung durch den Auftraggeber</h3>
      <p>
        Der Auftraggeber kann den Vertrag jederzeit bis zur Fertigstellung kundigen. In diesem Fall steht dem
        Auftragnehmer die vereinbarte Vergutung abzuglich ersparter Aufwendungen zu. Bereits bestellte und
        individuell angefertigte Materialien sind vollstandig zu verguten.
      </p>

      <h3>8.2 Kundigung durch den Auftragnehmer</h3>
      <p>
        Der Auftragnehmer kann den Vertrag aus wichtigem Grund kundigen, insbesondere bei Zahlungsverzug des
        Auftraggebers von mehr als 30 Tagen oder bei Verweigerung der erforderlichen Mitwirkung.
      </p>

      <h2>9. Versicherung</h2>
      <p>
        Der Auftragnehmer verfugt uber eine Betriebshaftpflichtversicherung mit ausreichender Deckungssumme
        fur Personen-, Sach- und Vermogensschaden. Der Nachweis wird auf Wunsch vorgelegt.
      </p>

      <h2>10. Eigentumsvorbehalt</h2>
      <p>
        Alle gelieferten Materialien bleiben bis zur vollstandigen Bezahlung Eigentum des Auftragnehmers.
        Der Auftraggeber verpflichtet sich, die unter Eigentumsvorbehalt stehenden Materialien pfleglich
        zu behandeln.
      </p>

      <h2>11. Datenschutz</h2>
      <p>
        Die Verarbeitung personenbezogener Daten erfolgt gemass unserer Datenschutzerklarung und den
        Bestimmungen der DSGVO. Nahere Informationen finden Sie unter{" "}
        <a href="/datenschutz">www.dachservice24plus.de/datenschutz</a>.
      </p>

      <h2>12. Schlussbestimmungen</h2>
      <p>
        Es gilt das Recht der Bundesrepublik Deutschland. Gerichtsstand fur alle Streitigkeiten aus dem
        Vertragsverhaltnis ist der Sitz des Auftragnehmers, sofern der Auftraggeber Kaufmann, juristische
        Person des offentlichen Rechts oder offentlich-rechtliches Sondervermogen ist. Sollten einzelne
        Bestimmungen dieser AGB unwirksam sein, bleibt die Wirksamkeit der ubrigen Bestimmungen unberuhrt.
      </p>

      <h2>13. Kontakt</h2>
      <p>Bei Fragen zu diesen AGB erreichen Sie uns unter:</p>
      <ul>
        <li><strong>Telefon:</strong> +40 759 614 930</li>
        <li><strong>Website:</strong> www.dachservice24plus.de</li>
        <li><strong>Erreichbarkeit:</strong> 24/7 Notdienst</li>
      </ul>
    </LegalPageLayout>
  )
}
