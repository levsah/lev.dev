"use client"

import Image from "next/image"

interface LogoCarouselProps {
  className?: string
}

export function LogoCarousel({ className = "" }: LogoCarouselProps) {
  const logos = [
    {
      name: "UC San Diego",
      src: "public/ucsd-logo.png",
      alt: "UC San Diego Lolo",
    },
    {
      name: "Wells Fargo",
      src: "/public/digiTwin.png",
      alt: "Wells Fargo Logo",
    },
    {
      name: "Ameriprise Financial",
      src: "/ameriprise-financial-logo.jpg",
      alt: "Ameriprise Financial Logo",
    },
    {
      name: "Sheriff's Department",
      src: "/sheriff-department-badge-logo.jpg",
      alt: "Sheriff's Department Logo",
    },
  ]

  return (
    <div className={`overflow-hidden ${className}`}>
      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee flex items-center gap-12 py-4">
          {logos.map((logo, index) => (
            <div
              key={`logo-1-${index}`}
              className="flex items-center justify-center min-w-[200px] h-24 grayscale hover:grayscale-0 transition-all duration-300"
            >
              <Image
                src={logo.src || "/placeholder.svg"}
                alt={logo.alt}
                width={180}
                height={80}
                className="object-contain max-h-20"
              />
            </div>
          ))}
        </div>
        <div className="absolute top-0 animate-marquee2 flex items-center gap-12 py-4">
          {logos.map((logo, index) => (
            <div
              key={`logo-2-${index}`}
              className="flex items-center justify-center min-w-[200px] h-24 grayscale hover:grayscale-0 transition-all duration-300"
            >
              <Image
                src={logo.src || "/placeholder.svg"}
                alt={logo.alt}
                width={180}
                height={80}
                className="object-contain max-h-20"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
