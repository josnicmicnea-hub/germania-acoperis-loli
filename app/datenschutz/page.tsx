import type { Metadata } from "next"
import { LegalPageLayout } from "@/components/legal/legal-page-layout"

export const metadata: Metadata = {
  title: "Datenschutzerklarung | Dachservice24Plus - DSGVO",
  description:
    "Datenschutzerklarung der Dachservice24Plus gemass DSGVO. Informationen zur Erhebung, Verarbeitung und Nutzung personenbezogener Daten.",
  robots: {
    index: false,
    follow: true,
  },
}

export default function DatenschutzPage() {
  return (
    <LegalPageLayout title="Datenschutzerklarung (DSGVO)" lastUpdated="Februar 2026">
      <h2>1. Datenschutz auf einen Blick</h2>
      <h3>Allgemeine Hinweise</h3>
      <p>
        Die folgenden Hinweise geben einen einfachen Uberblick daruber, was mit Ihren personenbezogenen Daten
        passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
        personlich identifiziert werden konnen. Ausfuhrliche Informationen zum Thema Datenschutz entnehmen
        Sie unserer nachstehenden Datenschutzerklarung.
      </p>

      <h2>2. Verantwortliche Stelle</h2>
      <div className="bg-[#f5f5f5] rounded-xl p-6 not-prose my-6">
        <ul className="space-y-2 text-[#363636]">
          <li><strong>Firma:</strong> Dachservice24Plus</li>
          <li><strong>Anschrift:</strong> [Wird nachgetragen], Deutschland</li>
          <li><strong>Telefon:</strong> +40 759 614 930</li>
          <li><strong>E-Mail:</strong> info@dachservice24plus.de</li>
        </ul>
      </div>
      <p>
        Die verantwortliche Stelle entscheidet allein oder gemeinsam mit anderen uber die Zwecke und Mittel der
        Verarbeitung von personenbezogenen Daten (z.B. Namen, E-Mail-Adressen o.a.).
      </p>

      <h2>3. Erhebung und Speicherung personenbezogener Daten</h2>
      <h3>3.1 Beim Besuch der Website</h3>
      <p>
        Beim Aufrufen unserer Website werden durch den auf Ihrem Endgerat zum Einsatz kommenden Browser
        automatisch Informationen an den Server unserer Website gesendet. Diese Informationen werden temporar
        in einem sogenannten Logfile gespeichert. Folgende Informationen werden dabei ohne Ihr Zutun erfasst
        und bis zur automatisierten Loschung gespeichert:
      </p>
      <ul>
        <li>IP-Adresse des anfragenden Rechners</li>
        <li>Datum und Uhrzeit des Zugriffs</li>
        <li>Name und URL der abgerufenen Datei</li>
        <li>Website, von der aus der Zugriff erfolgt (Referrer-URL)</li>
        <li>Verwendeter Browser und ggf. das Betriebssystem Ihres Rechners</li>
        <li>Name Ihres Access-Providers</li>
      </ul>
      <p>
        Diese Daten werden zu folgenden Zwecken verarbeitet: Gewahrleistung eines reibungslosen
        Verbindungsaufbaus, Gewahrleistung einer komfortablen Nutzung unserer Website, Auswertung der
        Systemsicherheit und -stabilitat sowie zu weiteren administrativen Zwecken. Die Rechtsgrundlage fur
        die Datenverarbeitung ist Art. 6 Abs. 1 S. 1 lit. f DSGVO (berechtigtes Interesse).
      </p>

      <h3>3.2 Bei Kontaktaufnahme</h3>
      <p>
        Wenn Sie uns per Telefon, E-Mail oder uber das Kontaktformular kontaktieren, werden die von Ihnen
        mitgeteilten Daten (Name, Telefonnummer, E-Mail-Adresse, Anschrift des Objekts) zum Zwecke der
        Bearbeitung Ihrer Anfrage und fur den Fall von Anschlussfragen bei uns gespeichert. Diese Daten
        geben wir nicht ohne Ihre Einwilligung weiter. Die Rechtsgrundlage ist Art. 6 Abs. 1 S. 1 lit. b DSGVO
        (Vertragserfullung bzw. vorvertragliche Massnahmen).
      </p>

      <h3>3.3 Bei Auftragserteilung</h3>
      <p>Fur die Durchfuhrung von Auftragen erheben wir zusatzlich:</p>
      <ul>
        <li>Vollstandiger Name und Anschrift</li>
        <li>Rechnungs- und Lieferadresse</li>
        <li>Bankverbindung / Zahlungsinformationen</li>
        <li>Steuernummer (bei gewerblichen Kunden)</li>
        <li>Objektbezogene Daten (Fotos, Masse, Zustand des Dachs)</li>
      </ul>

      <h2>4. Ihre Rechte als Betroffener</h2>
      <p>Sie haben gegenuber uns folgende Rechte hinsichtlich Ihrer personenbezogenen Daten:</p>
      <ul>
        <li><strong>Recht auf Auskunft</strong> (Art. 15 DSGVO): Sie konnen Auskunft uber Ihre bei uns gespeicherten personenbezogenen Daten verlangen.</li>
        <li><strong>Recht auf Berichtigung</strong> (Art. 16 DSGVO): Sie konnen die Berichtigung unrichtiger Daten verlangen.</li>
        <li><strong>Recht auf Loschung</strong> (Art. 17 DSGVO): Sie konnen die Loschung Ihrer Daten verlangen, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.</li>
        <li><strong>Recht auf Einschrankung der Verarbeitung</strong> (Art. 18 DSGVO): Sie konnen die Einschrankung der Verarbeitung unter bestimmten Voraussetzungen verlangen.</li>
        <li><strong>Recht auf Datenubertragbarkeit</strong> (Art. 20 DSGVO): Sie konnen verlangen, Ihre Daten in einem gangigen, maschinenlesbaren Format zu erhalten.</li>
        <li><strong>Widerspruchsrecht</strong> (Art. 21 DSGVO): Sie konnen der Verarbeitung Ihrer Daten jederzeit widersprechen.</li>
        <li><strong>Recht auf Widerruf der Einwilligung</strong> (Art. 7 Abs. 3 DSGVO): Sie konnen eine erteilte Einwilligung jederzeit mit Wirkung fur die Zukunft widerrufen.</li>
      </ul>
      <p>
        Zur Ausubung Ihrer Rechte konnen Sie uns unter den oben genannten Kontaktdaten erreichen.
        Wir werden Ihre Anfrage innerhalb von 30 Tagen bearbeiten.
      </p>

      <h2>5. Weitergabe von Daten</h2>
      <p>Eine Ubermittlung Ihrer personlichen Daten an Dritte erfolgt ausschliesslich:</p>
      <ul>
        <li>Wenn Sie Ihre ausdruckliche Einwilligung erteilt haben (Art. 6 Abs. 1 S. 1 lit. a DSGVO)</li>
        <li>Wenn die Weitergabe zur Vertragserfullung erforderlich ist (Art. 6 Abs. 1 S. 1 lit. b DSGVO), z.B. an Materiallieferanten fur die Lieferung</li>
        <li>Wenn eine gesetzliche Verpflichtung besteht (Art. 6 Abs. 1 S. 1 lit. c DSGVO), z.B. an Finanzbehorden</li>
        <li>Wenn die Weitergabe zur Wahrung berechtigter Interessen erforderlich ist (Art. 6 Abs. 1 S. 1 lit. f DSGVO), z.B. an Versicherungen im Schadensfall</li>
      </ul>
      <p><strong>Wir verkaufen oder vermieten Ihre personenbezogenen Daten nicht an Dritte.</strong></p>

      <h2>6. Speicherdauer</h2>
      <p>Wir speichern Ihre personenbezogenen Daten nur so lange, wie es fur die jeweiligen Zwecke erforderlich ist:</p>
      <ul>
        <li><strong>Vertragsdaten:</strong> 10 Jahre nach Vertragsende (gesetzliche Aufbewahrungsfrist gemass HGB/AO)</li>
        <li><strong>Rechnungsdaten:</strong> 10 Jahre (steuerliche Aufbewahrungspflicht)</li>
        <li><strong>Anfragen ohne Vertragsschluss:</strong> 6 Monate nach Abschluss der Korrespondenz</li>
        <li><strong>Marketingdaten:</strong> Bis zum Widerruf Ihrer Einwilligung</li>
        <li><strong>Website-Logfiles:</strong> 7 Tage</li>
      </ul>

      <h2>7. Cookies</h2>
      <p>
        Unsere Website verwendet Cookies. Cookies sind kleine Textdateien, die auf Ihrem Endgerat gespeichert
        werden und die Ihr Browser speichert. Sie dienen dazu, unser Angebot nutzerfreundlicher und effektiver
        zu gestalten.
      </p>
      <h3>7.1 Notwendige Cookies</h3>
      <p>
        Diese Cookies sind fur die Grundfunktionen der Website unbedingt erforderlich und konnen nicht
        deaktiviert werden. Sie speichern keine personlich identifizierbaren Informationen.
      </p>
      <h3>7.2 Analyse-Cookies</h3>
      <p>
        Mit Ihrer Zustimmung setzen wir Google Analytics ein, um die Nutzung unserer Website zu analysieren
        und zu verbessern. Google Analytics verwendet Cookies, die eine Analyse der Nutzung ermoglichen.
        Die durch das Cookie erzeugten Informationen werden in der Regel an einen Server von Google in den
        USA ubertragen. Wir haben die IP-Anonymisierung aktiviert.
      </p>
      <h3>7.3 Marketing-Cookies</h3>
      <p>
        Mit Ihrer Zustimmung setzen wir Google Ads Remarketing ein. Diese Cookies ermoglichen es, Ihnen auf
        anderen Websites relevante Werbeanzeigen zu zeigen. Die Rechtsgrundlage ist Ihre Einwilligung
        (Art. 6 Abs. 1 S. 1 lit. a DSGVO).
      </p>
      <p>
        Sie konnen Ihre Cookie-Einstellungen jederzeit uber den Cookie-Banner am unteren Bildschirmrand
        andern oder in Ihren Browsereinstellungen Cookies deaktivieren.
      </p>

      <h2>8. Google Tag Manager</h2>
      <p>
        Diese Website nutzt den Google Tag Manager. Durch diesen Dienst konnen Website-Tags uber eine
        Oberflache verwaltet werden. Der Google Tag Manager implementiert lediglich Tags. Es werden keine
        Cookies eingesetzt und keine personenbezogenen Daten erfasst. Der Google Tag Manager lost andere
        Tags aus, die wiederum ggf. Daten erfassen. Der Google Tag Manager greift nicht auf diese Daten zu.
      </p>

      <h2>9. SSL-/TLS-Verschlusselung</h2>
      <p>
        Diese Seite nutzt aus Sicherheitsgrunden und zum Schutz der Ubertragung vertraulicher Inhalte eine
        SSL-/TLS-Verschlusselung. Eine verschlusselte Verbindung erkennen Sie daran, dass die Adresszeile
        des Browsers von "http://" auf "https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
      </p>

      <h2>10. Beschwerderecht bei der Aufsichtsbehorde</h2>
      <p>
        Sofern Sie der Ansicht sind, dass die Verarbeitung Ihrer personenbezogenen Daten gegen die DSGVO
        verstosst, haben Sie das Recht, sich bei einer Aufsichtsbehorde zu beschweren:
      </p>
      <div className="bg-[#f5f5f5] rounded-xl p-6 not-prose my-6">
        <h4 className="font-serif font-semibold text-[#1a1a1a] mb-4">Zustandige Aufsichtsbehorde</h4>
        <ul className="space-y-2 text-[#363636]">
          <li><strong>Behorde:</strong> Der Bundesbeauftragte fur den Datenschutz und die Informationsfreiheit (BfDI)</li>
          <li><strong>Anschrift:</strong> Husarenstrasse 30, 53117 Bonn</li>
          <li><strong>Telefon:</strong> +49 228 997799-0</li>
          <li>
            <strong>Website:</strong>{" "}
            <a href="https://www.bfdi.bund.de" target="_blank" rel="noopener noreferrer" className="text-[#cca43b] hover:underline">
              www.bfdi.bund.de
            </a>
          </li>
        </ul>
      </div>

      <h2>11. Anderung dieser Datenschutzerklarung</h2>
      <p>
        Wir behalten uns vor, diese Datenschutzerklarung anzupassen, damit sie stets den aktuellen
        rechtlichen Anforderungen entspricht oder um Anderungen unserer Leistungen umzusetzen. Fur Ihren
        erneuten Besuch gilt dann die neue Datenschutzerklarung.
      </p>

      <h2>12. Kontakt zum Datenschutz</h2>
      <p>Bei Fragen zum Datenschutz erreichen Sie uns unter:</p>
      <ul>
        <li><strong>Telefon:</strong> +40 759 614 930</li>
        <li><strong>E-Mail:</strong> info@dachservice24plus.de</li>
        <li><strong>Betreff:</strong> "Datenschutzanfrage - [Ihr Name]"</li>
      </ul>
    </LegalPageLayout>
  )
}
