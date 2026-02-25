import type React from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

interface LegalPageLayoutProps {
  title: string
  lastUpdated: string
  children: React.ReactNode
}

export function LegalPageLayout({ title, lastUpdated, children }: LegalPageLayoutProps) {
  return (
    <>
      <section className="pt-32 pb-12 bg-gradient-to-b from-[#1a1a1a] to-[#242424]">
        <div className="max-w-4xl mx-auto px-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#cca43b] hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Zuruck zur Startseite</span>
          </Link>
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-white">{title}</h1>
          <p className="text-[#e5e5e5]/70 text-sm mt-2">Letzte Aktualisierung: {lastUpdated}</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-[#1a1a1a] prose-p:text-[#363636] prose-li:text-[#363636] prose-a:text-[#cca43b] prose-a:no-underline hover:prose-a:underline prose-strong:text-[#1a1a1a]">
            {children}
          </div>
        </div>
      </section>

      <section className="py-8 bg-[#f5f5f5] border-t border-[#e5e5e5]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-sm text-[#363636]">
            {"Bei Fragen oder Unklarheiten erreichen Sie uns telefonisch unter "}
            <a href="tel:+40759614930" className="text-[#cca43b] hover:underline">
              +40 759 614 930
            </a>
          </p>
        </div>
      </section>
    </>
  )
}
