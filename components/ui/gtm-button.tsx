"use client"

import type React from "react"
import { Button, type ButtonProps } from "@/components/ui/button"
import { forwardRef } from "react"
import { fireAdsConversion } from "@/components/analytics/google-ads-conversion"

interface GTMButtonProps extends ButtonProps {
  gtmEvent?: string
  gtmCategory?: string
  gtmAction?: string
  gtmLabel?: string
  /** Set true to fire a Google Ads conversion on click (e.g. phone-call CTA buttons) */
  adsConversion?: boolean
}

export const GTMButton = forwardRef<HTMLButtonElement, GTMButtonProps>(
  (
    {
      gtmEvent = "click",
      gtmCategory = "CTA",
      gtmAction = "button_click",
      gtmLabel,
      adsConversion = false,
      children,
      onClick,
      ...props
    },
    ref,
  ) => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      /* Push rich event to dataLayer for GTM triggers */
      if (typeof window !== "undefined" && Array.isArray((window as any).dataLayer)) {
        ;(window as any).dataLayer.push({
          event: gtmEvent,
          eventCategory: gtmCategory,
          eventAction: gtmAction,
          eventLabel: gtmLabel,
        })
      }

      /* Fire Google Ads conversion when the button is a primary CTA
         (phone-call buttons set adsConversion=true) */
      if (adsConversion) {
        fireAdsConversion()
      }

      onClick?.(e)
    }

    return (
      <Button
        ref={ref}
        onClick={handleClick}
        data-gtm-event={gtmEvent}
        data-gtm-category={gtmCategory}
        data-gtm-action={gtmAction}
        data-gtm-label={gtmLabel}
        {...props}
      >
        {children}
      </Button>
    )
  },
)

GTMButton.displayName = "GTMButton"
