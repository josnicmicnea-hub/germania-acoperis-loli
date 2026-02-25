"use client"

import type React from "react"

import { Button, type ButtonProps } from "@/components/ui/button"
import { forwardRef } from "react"

interface GTMButtonProps extends ButtonProps {
  gtmEvent?: string
  gtmCategory?: string
  gtmAction?: string
  gtmLabel?: string
}

export const GTMButton = forwardRef<HTMLButtonElement, GTMButtonProps>(
  (
    { gtmEvent = "click", gtmCategory = "CTA", gtmAction = "button_click", gtmLabel, children, onClick, ...props },
    ref,
  ) => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      // Push to dataLayer for GTM
      if (typeof window !== "undefined" && (window as any).dataLayer) {
        ;(window as any).dataLayer.push({
          event: gtmEvent,
          eventCategory: gtmCategory,
          eventAction: gtmAction,
          eventLabel: gtmLabel,
        })
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
