"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Briefcase, Users, Heart, ArrowRight } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { StaggerContainer, StaggerItem } from "@/components/motion-wrapper"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    title: "Healthcare AI Club Member",
    org: "Amrita WNA",
    period: "Nov 2023 - Jun 2025",
    location: "Amritapuri, Kerala",
    icon: Heart,
    color: "text-red-500",
    front: "Designed object detection models with CNNs using TensorFlow, Keras, and OpenCV. Completed AI healthcare projects under faculty mentorship.",
    back: [
      "Built and fine-tuned neural networks for MNIST digit recognition",
      "Designed CNN-based object detection models using TensorFlow & OpenCV",
      "Applied AI to healthcare use-cases under faculty mentorship",
    ],
    tags: ["TensorFlow", "Keras", "OpenCV", "CNN"],
  },
  {
    title: "Founder & Lead",
    org: "Amrita Blockchain Club",
    period: "Feb 2024 - Mar 2025",
    location: "Amritapuri, Kerala",
    icon: Users,
    color: "text-primary",
    front: "Established and led a student club with 80+ active members. Organized workshops and managed industry partnerships for project-based learning.",
    back: [
      "Grew the club to 80+ active members through workshops and mentorship",
      "Managed partnerships with industry experts",
      "Coordinated project-based learning for all members",
    ],
    tags: ["Blockchain", "Leadership", "Workshops"],
  },
  {
    title: "SSR Lead",
    org: "Student Social Responsibility",
    period: "Feb 2024",
    location: "Amritapuri, Kerala",
    icon: Briefcase,
    color: "text-amber-500",
    front: "Coordinated community outreach initiatives connecting students with local stakeholders. Helped set up tech-driven solutions for local groups.",
    back: [
      "Organized programs connecting students with local stakeholders",
      "Set up tech-driven solutions for local groups",
      "Coordinated awareness sessions and training programs",
    ],
    tags: ["Community", "Leadership", "Outreach"],
  },
]

function FlipCard({
  experience,
}: {
  experience: (typeof experiences)[0]
}) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div
      className="group relative h-[320px] cursor-pointer [perspective:1000px]"
      onClick={() => setIsFlipped(!isFlipped)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault()
          setIsFlipped(!isFlipped)
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`${experience.title} at ${experience.org}. Click to flip for details.`}
    >
      <motion.div
        className="relative h-full w-full [transform-style:preserve-3d]"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {/* Front */}
        <div className="absolute inset-0 flex flex-col rounded-xl border border-border bg-card p-6 [backface-visibility:hidden] transition-all hover:border-primary/30 hover:shadow-md">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-lg bg-secondary">
              <experience.icon className={`size-5 ${experience.color}`} />
            </div>
            <div>
              <p className="text-xs font-medium text-primary">{experience.period}</p>
              <h3 className="text-base font-semibold text-foreground leading-snug">
                {experience.title}
              </h3>
            </div>
          </div>
          <p className="mb-1 text-sm font-medium text-foreground">
            {experience.org}
          </p>
          <p className="mb-4 text-xs text-muted-foreground">{experience.location}</p>
          <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
            {experience.front}
          </p>
          <div className="mt-4 flex items-center gap-1.5 text-xs text-primary">
            Click to see details <ArrowRight className="size-3" />
          </div>
        </div>

        {/* Back */}
        <div className="absolute inset-0 flex flex-col rounded-xl border border-primary/30 bg-card p-6 [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <h3 className="mb-1 text-base font-semibold text-foreground">
            {experience.title}
          </h3>
          <p className="mb-4 text-xs text-muted-foreground">{experience.org}</p>

          <ul className="mb-4 flex flex-1 flex-col gap-2.5">
            {experience.back.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                {item}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-1.5">
            {experience.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs font-normal">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export function Experience() {
  return (
    <section id="experience" className="relative py-20 md:py-28 bg-secondary/30">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="Experience"
          title="Where I've Contributed"
          description="From AI research to community leadership, here's where I've made an impact."
        />

        <StaggerContainer
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          staggerDelay={0.15}
        >
          {experiences.map((exp) => (
            <StaggerItem key={exp.title}>
              <FlipCard experience={exp} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 rounded-xl border border-border bg-card p-6 md:p-8"
        >
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:gap-6">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
              <svg className="size-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">
                Sustainable Development Ideathon - 1st Prize
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Proposed an AI-driven agricultural automation solution for pest control and soil analysis that improved crop yields by 20% and delivered market forecasts to 50+ farmers.
              </p>
              <p className="mt-1 text-xs text-primary">June 2024</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
