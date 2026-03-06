"use client"

import { useEffect } from "react"

// Google Ads Conversion ID — matches the gtag config in layout.tsx
const ADS_CONVERSION_ID = "AW-17991439786"

/**
 * Declare gtag on window so TypeScript is happy without a separate @types package.
 * The actual function is injected by the gtag.js script loaded in layout.tsx.
 */
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    dataLayer?: unknown[]
  }
}

/**
 * Helper: fire a Google Ads conversion event.
 * @param conversionLabel - Optional per-conversion label from your Google Ads account
 *   (Conversions → Details → Tag setup → Conversion label).
 *   Leave undefined to fire a generic account-level event.
 */
export function fireAdsConversion(conversionLabel?: string) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return

  const sendTo = conversionLabel
    ? `${ADS_CONVERSION_ID}/${conversionLabel}`
    : ADS_CONVERSION_ID

  /* Fire Google Ads conversion event */
  window.gtag("event", "conversion", {
    send_to: sendTo,
    event_category: "Lead",
    event_label: "phone_call_click",
    value: 1,
    currency: "EUR",
  })
}

/**
 * GlobalPhoneConversionListener
 *
 * Mounts once at the root layout level (via layout.tsx).
 * Listens for any click on a tel: anchor anywhere in the page and
 * fires the Google Ads conversion event automatically — no need to
 * instrument every button individually.
 *
 * To use a specific conversion label:
 *   1. Open Google Ads → Goals → Conversions → your conversion action
 *   2. Copy the label string (e.g. "AbCdEfGhIjKlMnOp")
 *   3. Pass it as the PHONE_CONVERSION_LABEL constant below
 */
const PHONE_CONVERSION_LABEL = "" // ← paste your Google Ads conversion label here

export function GoogleAdsConversion() {
  useEffect(() => {
    /* Intercept all phone-link clicks and report them as conversions */
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const link = target.closest<HTMLAnchorElement>('a[href^="tel:"]')
      if (!link) return

      fireAdsConversion(PHONE_CONVERSION_LABEL || undefined)

      /* Also push a rich event to dataLayer for any future GTM triggers */
      if (Array.isArray(window.dataLayer)) {
        window.dataLayer.push({
          event: "phone_call_conversion",
          eventCategory: "Contact",
          eventAction: "phone_click",
          eventLabel: link.href.replace("tel:", ""),
          conversionValue: 1,
        })
      }
    }

    document.addEventListener("click", handleClick, { capture: true })
    return () => document.removeEventListener("click", handleClick, { capture: true })
  }, [])

  /* Track page_view as an engagement signal for Quality Score */
  useEffect(() => {
    if (typeof window.gtag !== "function") return
    window.gtag("event", "page_view", {
      send_to: ADS_CONVERSION_ID,
    })
  }, [])

  return null
}
