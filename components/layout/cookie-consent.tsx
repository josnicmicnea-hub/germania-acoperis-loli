"use client"

import { useState, useEffect } from "react"
import { X, Cookie, Shield } from "lucide-react"
import { GTMButton } from "@/components/ui/gtm-button"
import { cn } from "@/lib/utils"

interface CookiePreferences {
  necessary: boolean
  analytics: boolean
  marketing: boolean
}

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
  })

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAcceptAll = () => {
    const allPreferences = { necessary: true, analytics: true, marketing: true }
    saveConsent(allPreferences)
    pushConsentToGTM("granted", "granted")
  }

  const handleRejectAll = () => {
    const minimalPreferences = { necessary: true, analytics: false, marketing: false }
    saveConsent(minimalPreferences)
    pushConsentToGTM("denied", "denied")
  }

  const handleSaveCustom = () => {
    saveConsent(preferences)
    pushConsentToGTM(preferences.analytics ? "granted" : "denied", preferences.marketing ? "granted" : "denied")
  }

  const saveConsent = (prefs: CookiePreferences) => {
    localStorage.setItem("cookie-consent", JSON.stringify(prefs))
    localStorage.setItem("cookie-consent-date", new Date().toISOString())
    setIsVisible(false)
  }

  const pushConsentToGTM = (analytics: string, marketing: string) => {
    if (typeof window !== "undefined" && (window as any).dataLayer) {
      ;(window as any).dataLayer.push({
        event: "cookie_consent_update",
        analytics_storage: analytics,
        ad_storage: marketing,
      })
    }
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center p-4 pointer-events-none">
      <div
        className="absolute inset-0 bg-black/30 backdrop-blur-sm pointer-events-auto animate-fade-in"
        onClick={() => {}}
      />

      <div
        className={cn(
          "relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl pointer-events-auto",
          "transform transition-all duration-500 ease-out animate-fade-in-up",
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#e5e5e5]">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#cca43b] to-[#d4b55a] flex items-center justify-center">
              <Cookie className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-[#242f40] font-serif text-lg font-semibold">Cookie-Einstellungen</h3>
              <p className="text-sm text-[#363636]">Wir respektieren Ihre Privatsphare</p>
            </div>
          </div>
          <button
            onClick={handleRejectAll}
            className="p-2 hover:bg-[#e5e5e5] rounded-full transition-colors"
            aria-label="Schliessen"
          >
            <X className="w-5 h-5 text-[#363636]" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <p className="text-[#363636] text-sm leading-relaxed mb-6">
            Wir verwenden Cookies, um Ihnen ein optimales Website-Erlebnis zu bieten, den Datenverkehr zu analysieren und
            Inhalte zu personalisieren. Sie konnen selbst entscheiden, welche Cookie-Kategorien Sie zulassen mochten.
            Weitere Informationen finden Sie in unserer Datenschutzerklarung.
          </p>

          {showDetails && (
            <div className="space-y-4 mb-6 animate-fade-in">
              <div className="flex items-start justify-between p-4 bg-[#e5e5e5]/30 rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-[#cca43b]" />
                    <h4 className="font-semibold text-[#242f40] text-sm">Notwendige Cookies</h4>
                  </div>
                  <p className="text-xs text-[#363636] mt-1">
                    Unverzichtbar fur die Grundfunktionen der Website. Konnen nicht deaktiviert werden.
                  </p>
                </div>
                <input type="checkbox" checked={true} disabled className="w-5 h-5 rounded accent-[#cca43b]" />
              </div>

              <div className="flex items-start justify-between p-4 bg-[#e5e5e5]/30 rounded-lg">
                <div className="flex-1">
                  <h4 className="font-semibold text-[#242f40] text-sm">Analyse-Cookies</h4>
                  <p className="text-xs text-[#363636] mt-1">
                    Helfen uns zu verstehen, wie Besucher die Website nutzen, um sie kontinuierlich zu verbessern.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                  className="w-5 h-5 rounded accent-[#cca43b]"
                />
              </div>

              <div className="flex items-start justify-between p-4 bg-[#e5e5e5]/30 rounded-lg">
                <div className="flex-1">
                  <h4 className="font-semibold text-[#242f40] text-sm">Marketing-Cookies</h4>
                  <p className="text-xs text-[#363636] mt-1">
                    Werden verwendet, um Ihnen relevante Werbung auf anderen Websites anzuzeigen.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.marketing}
                  onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                  className="w-5 h-5 rounded accent-[#cca43b]"
                />
              </div>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-3">
            {!showDetails ? (
              <>
                <GTMButton
                  gtmLabel="cookie_accept_all"
                  onClick={handleAcceptAll}
                  className="flex-1 bg-gradient-to-r from-[#cca43b] to-[#d4b55a] hover:from-[#b8922f] hover:to-[#cca43b] text-white"
                >
                  Alle akzeptieren
                </GTMButton>
                <GTMButton
                  gtmLabel="cookie_reject_all"
                  onClick={handleRejectAll}
                  variant="outline"
                  className="flex-1 border-[#242f40] text-[#242f40] hover:bg-[#242f40] hover:text-white"
                >
                  Alle ablehnen
                </GTMButton>
                <GTMButton
                  gtmLabel="cookie_customize"
                  onClick={() => setShowDetails(true)}
                  variant="ghost"
                  className="flex-1 text-[#363636] hover:text-[#cca43b]"
                >
                  Anpassen
                </GTMButton>
              </>
            ) : (
              <>
                <GTMButton
                  gtmLabel="cookie_save_preferences"
                  onClick={handleSaveCustom}
                  className="flex-1 bg-gradient-to-r from-[#cca43b] to-[#d4b55a] hover:from-[#b8922f] hover:to-[#cca43b] text-white"
                >
                  Einstellungen speichern
                </GTMButton>
                <GTMButton
                  gtmLabel="cookie_back"
                  onClick={() => setShowDetails(false)}
                  variant="outline"
                  className="flex-1 border-[#e5e5e5] text-[#363636]"
                >
                  Zuruck
                </GTMButton>
              </>
            )}
          </div>
        </div>

        <div className="px-6 pb-4">
          <p className="text-xs text-center text-[#363636]/70">
            Weitere Informationen finden Sie in unserer{" "}
            <a href="/datenschutz" className="text-[#cca43b] hover:underline">
              Datenschutzerklarung
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
