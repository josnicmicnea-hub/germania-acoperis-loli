"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import { GTMLink } from "@/components/ui/gtm-link";
import { GTMButton } from "@/components/ui/gtm-button";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Startseite", href: "/" },
  { name: "Dachsanierung", href: "/dachsanierung" },
  { name: "Dachreparatur", href: "/dachreparatur" },
  { name: "Zimmerei", href: "/zimmerei" },
  { name: "Dachzubehor", href: "/dachzubehoer" },
  { name: "Referenzen", href: "/referenzen" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent",
      )}
    >
      {/* Top bar */}
      <div className="bg-[#242f40] text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-[#cca43b]" />
            <a
              href="tel:+40756637012"
              className="hover:text-[#cca43b] transition-colors"
              data-gtm-event="click"
              data-gtm-category="Contact"
              data-gtm-action="phone_click"
              data-gtm-label="header_phone"
            >
              +40 756 637 012
            </a>
            <span className="hidden sm:inline text-[#cca43b] mx-2">|</span>
            <span className="hidden sm:inline">24/7 Notdienst erreichbar</span>
          </div>
          <div className="hidden md:block text-[#e5e5e5]">
            Deutschlandweit im Einsatz
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="hidden sm:block">
              <span className="text-[#242f40] font-serif text-xl font-bold">
                Dachservice24Plus
              </span>
              <p className="text-xs text-[#363636]">
                Ihr Dachdeckermeisterbetrieb
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <GTMLink
                key={item.name}
                href={item.href}
                gtmLabel={item.name}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-md transition-all duration-200",
                  "text-[#363636] hover:text-[#cca43b] hover:bg-[#e5e5e5]/50",
                )}
              >
                {item.name}
              </GTMLink>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <GTMButton
              gtmLabel="header_cta_contact"
              className="bg-gradient-to-r from-[#cca43b] to-[#d4b55a] hover:from-[#b8922f] hover:to-[#cca43b] text-white px-6 py-2 rounded-md shadow-md hover:shadow-lg transition-all duration-300"
              asChild
            >
              <a href="tel:+40756637012">Kostenloses Angebot</a>
            </GTMButton>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-[#242f40] hover:bg-[#e5e5e5] transition-colors"
            aria-label="Menu offnen"
            data-gtm-event="click"
            data-gtm-category="Navigation"
            data-gtm-action="mobile_menu_toggle"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300 ease-in-out",
            isOpen ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0",
          )}
        >
          <div className="bg-white rounded-lg shadow-lg border border-[#e5e5e5] p-4 space-y-2">
            {navigation.map((item) => (
              <GTMLink
                key={item.name}
                href={item.href}
                gtmLabel={`mobile_${item.name}`}
                className="block px-4 py-3 text-[#363636] hover:text-[#cca43b] hover:bg-[#e5e5e5]/50 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </GTMLink>
            ))}
            <div className="pt-4 border-t border-[#e5e5e5]">
              <GTMButton
                gtmLabel="mobile_cta_contact"
                className="w-full bg-gradient-to-r from-[#cca43b] to-[#d4b55a] hover:from-[#b8922f] hover:to-[#cca43b] text-white"
                asChild
              >
                <a href="tel:+40756637012">Jetzt Anrufen: +40 756 637 012</a>
              </GTMButton>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
