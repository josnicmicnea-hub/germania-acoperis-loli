"use client"

import { useEffect, useRef, useState } from "react"
import { ProjectCarousel } from "./project-carousel"
import { MapPin, Calendar } from "lucide-react"

interface ProjectSectionProps {
  title: string
  description: string
  location: string
  duration: string
  images: {
    src: string
    alt: string
    label: string
  }[]
  reversed?: boolean
}

export function ProjectSection({
  title,
  description,
  location,
  duration,
  images,
  reversed = false,
}: ProjectSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={sectionRef}
      className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${reversed ? "lg:flex-row-reverse" : ""}`}
    >
      <div
        className={`space-y-6 ${reversed ? "lg:order-2" : ""} ${isVisible ? (reversed ? "animate-slide-in-right" : "animate-slide-in-left") : "opacity-0"}`}
      >
        <div>
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#242f40] mb-4">{title}</h3>
          <p className="text-[#363636] leading-relaxed">{description}</p>
        </div>

        <div className="flex flex-wrap gap-4">
          <div className="flex items-center gap-2 text-sm text-[#363636]">
            <MapPin className="w-4 h-4 text-[#cca43b]" />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-[#363636]">
            <Calendar className="w-4 h-4 text-[#cca43b]" />
            <span>{duration}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <span className="text-xs px-3 py-1.5 bg-[#e5e5e5] text-[#363636] rounded-full">Vorher</span>
          <span className="text-xs px-3 py-1.5 bg-[#cca43b]/20 text-[#cca43b] rounded-full">Wahrend der Arbeit</span>
          <span className="text-xs px-3 py-1.5 bg-[#242f40] text-white rounded-full">Endergebnis</span>
        </div>
      </div>

      <div
        className={`${reversed ? "lg:order-1" : ""} ${isVisible ? (reversed ? "animate-slide-in-left" : "animate-slide-in-right") : "opacity-0"}`}
      >
        <ProjectCarousel images={images} />
      </div>
    </div>
  )
}
