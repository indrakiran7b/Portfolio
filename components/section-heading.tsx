"use client"

import { Reveal } from "@/components/motion-wrapper"

interface SectionHeadingProps {
  label: string
  title: string
  description?: string
}

export function SectionHeading({ label, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-12 text-center md:mb-16">
      <Reveal>
        <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
          {label}
        </p>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.2}>
          <p className="mx-auto max-w-2xl text-muted-foreground leading-relaxed">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  )
}
