"use client"

import type React from "react"

import Link, { type LinkProps } from "next/link"
import { forwardRef, type ReactNode } from "react"

interface GTMLinkProps extends LinkProps {
  gtmEvent?: string
  gtmCategory?: string
  gtmAction?: string
  gtmLabel?: string
  children: ReactNode
  className?: string
}

export const GTMLink = forwardRef<HTMLAnchorElement, GTMLinkProps>(
  (
    {
      gtmEvent = "click",
      gtmCategory = "Navigation",
      gtmAction = "link_click",
      gtmLabel,
      children,
      className,
      onClick,
      ...props
    },
    ref,
  ) => {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (typeof window !== "undefined" && (window as any).dataLayer) {
        ;(window as any).dataLayer.push({
          event: gtmEvent,
          eventCategory: gtmCategory,
          eventAction: gtmAction,
          eventLabel: gtmLabel,
        })
      }
    }

    return (
      <Link
        ref={ref}
        onClick={handleClick}
        data-gtm-event={gtmEvent}
        data-gtm-category={gtmCategory}
        data-gtm-action={gtmAction}
        data-gtm-label={gtmLabel}
        className={className}
        {...props}
      >
        {children}
      </Link>
    )
  },
)

GTMLink.displayName = "GTMLink"
