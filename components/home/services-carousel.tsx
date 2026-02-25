"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  ChevronLeft,
  ChevronRight,
  Hammer,
  Wrench,
  Building2,
  Package,
} from "lucide-react";
import { GTMButton } from "@/components/ui/gtm-button";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: Hammer,
    title: "Dachsanierung",
    href: "/dachsanierung",
    description:
      "Fachgerechte Komplettsanierung Ihres Daches -- von der Neueindeckung mit hochwertigen Materialien uber die energetische Aufsparrendammung bis hin zur Installation moderner Unterspannbahnen. Wir arbeiten nach den aktuellen Normen und Richtlinien des Dachdeckerhandwerks.",
    features: [
      "Neueindeckung",
      "Warmedammung",
      "Flachdachsanierung",
      "Asbestentsorgung",
    ],
    image: "/reno-acop-01.jpeg",
  },
  {
    icon: Wrench,
    title: "Dachreparatur",
    href: "/dachreparatur",
    description:
      "Schnelle und zuverlassige Dachreparaturen bei Undichtigkeiten, Sturmschaden oder altersbedingtem Verschleiss. Unser 24/7-Notdienst ist jederzeit einsatzbereit, um Ihr Gebaude vor weiteren Schaden zu schutzen -- prazise Diagnose, nachhaltige Reparatur.",
    features: ["Leckortung", "Sturmschaden", "Dachrinnen", "Notdienst 24/7"],
    image: "/reno-acop-33.jpeg",
  },
  {
    icon: Building2,
    title: "Zimmerei & Holzbau",
    href: "/zimmerei",
    description:
      "Traditionelle Zimmermannskunst trifft auf moderne Technik. Wir konstruieren und sanieren Dachstuhle, realisieren Dachausbauten und Gauben und fertigen massgeschneiderte Holzkonstruktionen -- stets mit gepruftem Bauholz und professionellen Verbindungsmitteln.",
    features: ["Dachstuhlbau", "Gauben", "Dachausbau", "Carports"],
    image: "/reno-acop-20.jpeg",
  },
  {
    icon: Package,
    title: "Dachzubehor",
    href: "/dachzubehoer",
    description:
      "Komplettierung Ihres Dachsystems mit hochwertigen Zubehorkomponenten: von Dachfenstern renommierter Hersteller wie Velux und Roto uber Entwasserungssysteme bis hin zu Schneefangsystemen und Blitzschutzanlagen -- alles aus einer Hand.",
    features: ["Dachfenster", "Dachrinnen", "Schneefang", "Blitzschutz"],
    image: "/sist-jgheab1.jpeg",
  },
];

export function ServicesCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi],
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="py-20 bg-[#e5e5e5]/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-[#cca43b] text-sm font-semibold tracking-wider uppercase">
            Unser Leistungsspektrum
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#242f40] mt-4 text-balance">
            Ganzheitliche Losungen fur{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#cca43b] to-[#b8922f]">
              Ihr Dach
            </span>
          </h2>
          <p className="text-[#363636] mt-4 max-w-2xl mx-auto">
            Von der ersten Beratung uber die prazise Ausfuhrung bis zur
            langfristigen Wartung -- wir begleiten Ihr Dachprojekt in jeder
            Phase mit Fachwissen und Engagement.
          </p>
        </div>

        <div className="relative">
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex gap-6">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_calc(33.333%-16px)] min-w-0"
                >
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group h-full flex flex-col">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#242f40]/60 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#cca43b] to-[#d4b55a] flex items-center justify-center shadow-lg">
                          <service.icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </div>

                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-serif font-bold text-[#242f40] mb-3">
                        {service.title}
                      </h3>
                      <p className="text-[#363636] text-sm leading-relaxed mb-4 flex-1">
                        {service.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {service.features.map((feature) => (
                          <span
                            key={feature}
                            className="text-xs px-3 py-1 bg-[#e5e5e5] text-[#363636] rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>

                      <GTMButton
                        gtmLabel={`service_card_${service.title}`}
                        gtmCategory="Services"
                        className="w-full bg-[#242f40] hover:bg-[#cca43b] text-white transition-colors duration-300"
                        asChild
                      >
                        <a href={service.href}>Mehr erfahren</a>
                      </GTMButton>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={scrollPrev}
            className={cn(
              "absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-[#cca43b] hover:text-white z-10",
              !canScrollPrev && "opacity-50 cursor-not-allowed",
            )}
            disabled={!canScrollPrev}
            aria-label="Zurück"
            data-gtm-event="click"
            data-gtm-category="Carousel"
            data-gtm-action="prev_click"
            data-gtm-label="services_carousel"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={scrollNext}
            className={cn(
              "absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-[#cca43b] hover:text-white z-10",
              !canScrollNext && "opacity-50 cursor-not-allowed",
            )}
            disabled={!canScrollNext}
            aria-label="Weiter"
            data-gtm-event="click"
            data-gtm-category="Carousel"
            data-gtm-action="next_click"
            data-gtm-label="services_carousel"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={cn(
                "w-3 h-3 rounded-full transition-all duration-300",
                selectedIndex === index
                  ? "bg-[#cca43b] w-8"
                  : "bg-[#e5e5e5] hover:bg-[#cca43b]/50",
              )}
              aria-label={`Slide ${index + 1}`}
              data-gtm-event="click"
              data-gtm-category="Carousel"
              data-gtm-action="dot_click"
              data-gtm-label={`services_dot_${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
