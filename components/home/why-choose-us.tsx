"use client";

import { useEffect, useRef, useState } from "react";
import { Shield, Award, Clock, Users, CheckCircle, Wrench } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Meisterbetrieb-Qualitat",
    description:
      "Als eingetragener Dachdeckermeisterbetrieb garantieren wir hochste handwerkliche Standards. Jede Arbeit wird nach den geltenden Fachregeln des Deutschen Dachdeckerhandwerks ausgefuhrt.",
  },
  {
    icon: Shield,
    title: "Umfassende Garantie",
    description:
      "Wir stehen hinter unserer Arbeit: Bis zu 10 Jahre Gewahrleistung auf Handwerksleistungen und zusatzlich die Herstellergarantie auf alle verbauten Materialien.",
  },
  {
    icon: Clock,
    title: "24/7 Notdienst",
    description:
      "Sturmschaden oder plotzliche Undichtigkeiten kennen keinen Feierabend. Unser Notfallteam ist rund um die Uhr erreichbar und innerhalb kurzester Zeit vor Ort.",
  },
  {
    icon: Users,
    title: "Erfahrenes Fachpersonal",
    description:
      "Unser Team besteht ausschliesslich aus ausgebildeten Dachdeckern, Zimmerern und Spenglern mit langjahiger Projekterfahrung im Wohn-, Gewerbe- und Industriebau.",
  },
  {
    icon: CheckCircle,
    title: "Premium-Materialien",
    description:
      "Wir verarbeiten ausschliesslich zertifizierte Markenmaterialien von fuhrenden Herstellern wie Braas, Erlus, Velux, Rheinzink und Lindab -- keine Kompromisse bei der Qualitat.",
  },
  {
    icon: Wrench,
    title: "Modernste Ausrustung",
    description:
      "Von digitaler Dachvermessung per Drohne bis hin zu prazisen Blechbearbeitungsmaschinen: Wir investieren kontinuierlich in moderne Technologien fur perfekte Ergebnisse.",
  },
];

export function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div
            className={`relative ${isVisible ? "animate-slide-in-left" : "opacity-0"}`}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/carport1.jpeg"
                alt="Das Dachservice24Plus-Team bei der Arbeit auf einem Steildach"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#242f40]/40 to-transparent" />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-white rounded-xl shadow-xl p-6 max-w-xs">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#cca43b] to-[#d4b55a] flex items-center justify-center flex-shrink-0">
                  <Award className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-serif font-bold text-[#242f40]">
                    15+ Jahre
                  </p>
                  <p className="text-[#363636] text-sm">Branchenerfahrung</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -left-4 w-24 h-24 border-4 border-[#cca43b]/30 rounded-2xl -z-10" />
          </div>

          <div
            className={`${isVisible ? "animate-slide-in-right" : "opacity-0"}`}
          >
            <span className="text-[#cca43b] text-sm font-semibold tracking-wider uppercase">
              Warum wir?
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#242f40] mt-4 mb-6">
              Handwerkliche{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#cca43b] to-[#b8922f]">
                Exzellenz
              </span>{" "}
              in jedem Detail
            </h2>
            <p className="text-[#363636] leading-relaxed mb-8">
              Was uns von anderen Dachdeckerbetrieben unterscheidet? Die
              Verbindung aus traditionellem Handwerkswissen, modernster Technik
              und einem kompromisslosen Qualitatsanspruch. Jedes Projekt -- ob
              privates Einfamilienhaus oder gewerbliche Grossflache -- erhalt
              von uns die gleiche Sorgfalt und Prazision.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {reasons.map((reason, index) => (
                <div
                  key={reason.title}
                  className={`flex gap-4 ${isVisible ? `animate-fade-in-up stagger-${index + 1}` : "opacity-0"}`}
                >
                  <div className="w-12 h-12 rounded-xl bg-[#e5e5e5] flex items-center justify-center flex-shrink-0 group-hover:bg-[#cca43b]/20 transition-colors">
                    <reason.icon className="w-6 h-6 text-[#cca43b]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#242f40] mb-1">
                      {reason.title}
                    </h3>
                    <p className="text-sm text-[#363636]">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
