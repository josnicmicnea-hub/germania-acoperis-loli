import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import Script from "next/script"
import { Analytics } from "@vercel/analytics/next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CookieConsent } from "@/components/layout/cookie-consent"
import { ScrollToTop } from "@/components/layout/scroll-to-top"
import { GoogleAdsConversion } from "@/components/analytics/google-ads-conversion"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })

export const metadata: Metadata = {
  title: {
    default: "Dachservice24Plus - Dachsanierung, Dachreparatur & Zimmerei | Ihr Dachdeckermeisterbetrieb",
    template: "%s | Dachservice24Plus - Professioneller Dachservice",
  },
  description:
    "Ihr zuverlassiger Partner fur Dachsanierung, Dachreparatur, Zimmerei und Dachzubehor. Meisterbetrieb mit uber 15 Jahren Erfahrung. 24/7 Notdienst. Kostenlose Beratung und Angebotserstellung in Ihrer Region.",
  metadataBase: new URL("https://www.topdachservice.de"),
  keywords: [
    "Dachdecker",
    "Dachsanierung",
    "Dachreparatur",
    "Zimmerei",
    "Dachzubehor",
    "Dacheindeckung",
    "Dachrinne",
    "Dachfenster",
    "Flachdach",
    "Steildach",
    "Dachdeckermeisterbetrieb",
    "Dachservice24Plus",
    "Notdienst Dach",
    "Energetische Sanierung",
  ],
  authors: [{ name: "Dachservice24Plus" }],
  creator: "Dachservice24Plus",
  publisher: "Dachservice24Plus",
  /* Google Search Console site verification */
  verification: {
    google: "0ulEOiK0NcNWY2TZVRvZrcYewEUTVPFpQnq4JBviXFY",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://www.topdachservice.de",
    siteName: "Dachservice24Plus",
    title: "Dachservice24Plus - Professionelle Dachsanierung & Dachreparatur",
    description:
      "Meisterbetrieb fur Dachsanierung, Dachreparatur und Zimmerei. Uber 15 Jahre Erfahrung, hochwertige Materialien, 24/7 Notdienst.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dachservice24Plus - Professioneller Dachdeckermeisterbetrieb",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dachservice24Plus - Professioneller Dachservice",
    description: "Meisterbetrieb fur Dachsanierung, Dachreparatur und Zimmerei. 24/7 Notdienst verfugbar.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.topdachservice.de",
    languages: {
      "de-DE": "https://www.topdachservice.de",
    },
  },
  category: "Bauwesen",
  generator: "v0.app",
}

export const viewport: Viewport = {
  themeColor: "#242f40",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  name: "Dachservice24Plus",
  image: "https://www.topdachservice.de/logo.png",
  "@id": "https://www.topdachservice.de",
  url: "https://www.topdachservice.de",
  /* Primary Google Ads tracking number */
  telephone: "+4915783220352",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Deutschland",
    addressCountry: "DE",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
  sameAs: [],
  priceRange: "$$",
  areaServed: [
    { "@type": "Country", name: "Deutschland" },
  ],
  description:
    "Professioneller Dachdeckermeisterbetrieb fur Dachsanierung, Dachreparatur, Zimmerei und Dachzubehor. 24/7 Notdienst.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de">
      <head>
        {/* Structured data for search engines */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {/* Google Ads tag (gtag.js) — loads after page is interactive to avoid render-blocking */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17991439786"
          strategy="afterInteractive"
        />
        {/* Initialize dataLayer and configure Google Ads conversion account */}
        <Script id="google-ads-config" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17991439786', {
              phone_conversion_number: '+4915783220352',
              send_page_view: true
            });
          `}
        </Script>
        <ScrollToTop />
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieConsent />
        {/* Global phone-click conversion listener for Google Ads */}
        <GoogleAdsConversion />
        <Analytics />
      </body>
    </html>
  )
}
