import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CookieConsent } from "@/components/layout/cookie-consent"
import { ScrollToTop } from "@/components/layout/scroll-to-top"
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
    url: "https://dachservice24plus.de",
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
    canonical: "https://dachservice24plus.de",
    languages: {
      "de-DE": "https://dachservice24plus.de",
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
  image: "https://dachservice24plus.de/logo.png",
  "@id": "https://dachservice24plus.de",
  url: "https://dachservice24plus.de",
  telephone: "+40756637012",
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
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              // GTM Container ID will be added here
              // (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              // new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              // j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              // 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              // })(window,document,'script','dataLayer','GTM-XXXXXX');
            `,
          }}
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <noscript>
          {/* <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXX" height="0" width="0" style="display:none;visibility:hidden"></iframe> */}
        </noscript>
        <ScrollToTop />
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieConsent />
        <Analytics />
      </body>
    </html>
  )
}
