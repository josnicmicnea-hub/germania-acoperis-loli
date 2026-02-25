import { HeroSection } from "@/components/home/hero-section"
import { StatsSection } from "@/components/home/stats-section"
import { ServicesCarousel } from "@/components/home/services-carousel"
import { WhyChooseUs } from "@/components/home/why-choose-us"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { ServiceAreas } from "@/components/home/service-areas"
import { CTASection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesCarousel />
      <WhyChooseUs />
      <TestimonialsSection />
      <ServiceAreas />
      <CTASection />
    </>
  )
}
