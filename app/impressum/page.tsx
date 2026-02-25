import type { Metadata } from "next"
import { LegalPageLayout } from "@/components/legal/legal-page-layout"

export const metadata: Metadata = {
  title: "Impressum | Dachservice24Plus - Angaben gemass 5 TMG",
  description:
    "Impressum und rechtliche Angaben der Dachservice24Plus. Verantwortlich fur den Inhalt gemass 55 Abs. 2 RStV.",
  robots: {
    index: false,
    follow: true,
  },
}

export default function ImpressumPage() {
  return (
    <LegalPageLayout title="Impressum" lastUpdated="Februar 2026">
      <h2>Angaben gemass 5 TMG</h2>

      <div className="bg-[#f5f5f5] rounded-xl p-6 not-prose my-6">
        <ul className="space-y-2 text-[#363636]">
          <li><strong>Firma:</strong> Dachservice24Plus</li>
          <li><strong>Inhaber:</strong> [Name des Inhabers]</li>
          <li><strong>Anschrift:</strong> [Strassenanschrift], Deutschland</li>
          <li><strong>Telefon:</strong> +40 759 614 930</li>
          <li><strong>E-Mail:</strong> info@dachservice24plus.de</li>
          <li><strong>Website:</strong> www.dachservice24plus.de</li>
        </ul>
      </div>

      <h2>Umsatzsteuer-Identifikationsnummer</h2>
      <p>
        Umsatzsteuer-Identifikationsnummer gemass 27a Umsatzsteuergesetz: [USt-IdNr. wird nachgetragen]
      </p>

      <h2>Berufsbezeichnung und berufsrechtliche Regelungen</h2>
      <p>
        Berufsbezeichnung: Dachdecker / Zimmerer. Die Berufsbezeichnung wurde in der Bundesrepublik Deutschland verliehen.
        Zustandige Handwerkskammer: [Handwerkskammer Region]. Es gelten die Regelungen der Handwerksordnung (HwO).
      </p>

      <h2>Streitschlichtung</h2>
      <p>
        Die Europaische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
        {" "}<a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">
          https://ec.europa.eu/consumers/odr
        </a>
      </p>
      <p>
        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
        Verbraucherschlichtungsstelle teilzunehmen.
      </p>

      <h2>Haftung fur Inhalte</h2>
      <p>
        Als Diensteanbieter sind wir gemass 7 Abs.1 TMG fur eigene Inhalte auf diesen Seiten nach den
        allgemeinen Gesetzen verantwortlich. Nach 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
        verpflichtet, ubermittelte oder gespeicherte fremde Informationen zu uberwachen oder nach Umstanden zu
        forschen, die auf eine rechtswidrige Tatigkeit hinweisen.
      </p>
      <p>
        Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen
        bleiben hiervon unberuhrt. Eine diesbezugliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer
        konkreten Rechtsverletzung moglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese
        Inhalte umgehend entfernen.
      </p>

      <h2>Haftung fur Links</h2>
      <p>
        Unser Angebot enthalt Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
        Deshalb konnen wir fur diese fremden Inhalte auch keine Gewahr ubernehmen. Fur die Inhalte der verlinkten
        Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden
        zum Zeitpunkt der Verlinkung auf mogliche Rechtverstosse uberpruft. Rechtswidrige Inhalte waren zum Zeitpunkt
        der Verlinkung nicht erkennbar.
      </p>
      <p>
        Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer
        Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend
        entfernen.
      </p>

      <h2>Urheberrecht</h2>
      <p>
        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
        Urheberrecht. Die Vervielfaltigung, Bearbeitung, Verbreitung und jede Art der Verwertung ausserhalb der
        Grenzen des Urheberrechtes bedurfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
        Downloads und Kopien dieser Seite sind nur fur den privaten, nicht kommerziellen Gebrauch gestattet.
      </p>
      <p>
        Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter
        beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
        Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von
        Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
      </p>
    </LegalPageLayout>
  )
}
