"use client"

import { useCallback, useState, useEffect } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface ProjectCarouselProps {
  images: {
    src: string
    alt: string
    label: string
  }[]
}

export function ProjectCarousel({ images }: ProjectCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    skipSnaps: false,
  })
  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
    emblaApi.on("reInit", onSelect)
    return () => {
      emblaApi.off("select", onSelect)
      emblaApi.off("reInit", onSelect)
    }
  }, [emblaApi, onSelect])

  return (
    <div className="relative group">
      <div ref={emblaRef} className="overflow-hidden rounded-xl">
        <div className="flex touch-pan-y">
          {images.map((image, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0 relative">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block bg-[#cca43b] text-white text-sm font-medium px-4 py-2 rounded-full">
                    {image.label}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={scrollPrev}
        className={cn(
          "absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-[#cca43b] hover:text-white z-10",
          "opacity-0 group-hover:opacity-100",
        )}
        aria-label="Vorheriges Bild"
        data-gtm-event="click"
        data-gtm-category="Project Carousel"
        data-gtm-action="prev_click"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={scrollNext}
        className={cn(
          "absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-[#cca43b] hover:text-white z-10",
          "opacity-0 group-hover:opacity-100",
        )}
        aria-label="Nachstes Bild"
        data-gtm-event="click"
        data-gtm-category="Project Carousel"
        data-gtm-action="next_click"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      <div className="flex justify-center gap-2 mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={cn(
              "w-2.5 h-2.5 rounded-full transition-all duration-300",
              selectedIndex === index ? "bg-[#cca43b] w-6" : "bg-[#e5e5e5] hover:bg-[#cca43b]/50",
            )}
            aria-label={`Bild ${index + 1}`}
            data-gtm-event="click"
            data-gtm-category="Project Carousel"
            data-gtm-action="dot_click"
          />
        ))}
      </div>

      <p className="text-center text-xs text-[#363636]/60 mt-2 sm:hidden">Wischen Sie fur weitere Bilder</p>
    </div>
  )
}
