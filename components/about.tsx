"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useInView } from "framer-motion"
import { GraduationCap, Briefcase, Award, Code } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { Reveal, StaggerContainer, StaggerItem } from "@/components/motion-wrapper"

const skills = [
  { name: "React.js", level: 95 },
  { name: "JavaScript (ES6+)", level: 90 },
  { name: "HTML5 / CSS3", level: 92 },
  { name: "Python", level: 80 },
  { name: "TypeScript", level: 78 },
  { name: "Git & GitHub", level: 85 },
  { name: "Responsive Design", level: 90 },
  { name: "Figma / UI Design", level: 75 },
]

const education = [
  {
    degree: "B.Tech in Artificial Intelligence",
    school: "Amrita Vishwa Vidyapeetham",
    location: "Kerala, India",
    period: "Sept 2021 - Jun 2025",
  },
  {
    degree: "Higher Secondary Education (M.P.C)",
    school: "Sri Chaitanya Junior College",
    location: "Andhra Pradesh, India",
    period: "Mar 2019 - Jun 2021",
  },
]

const counters = [
  { label: "Projects Built", value: 10, icon: Code },
  { label: "Internships", value: 2, icon: Briefcase },
  { label: "Certifications", value: 5, icon: Award },
  { label: "Club Members Led", value: 80, suffix: "+" , icon: GraduationCap },
]

function AnimatedSkillBar({ name, level }: { name: string; level: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <div ref={ref} className="group">
      <div className="mb-1.5 flex items-center justify-between">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <span className="text-xs font-mono text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="h-full rounded-full bg-primary"
        />
      </div>
    </div>
  )
}

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const duration = 1500
    const stepTime = duration / value
    const interval = setInterval(() => {
      start += 1
      setCount(start)
      if (start >= value) clearInterval(interval)
    }, stepTime)
    return () => clearInterval(interval)
  }, [isInView, value])

  return (
    <span ref={ref} className="text-3xl font-bold text-foreground sm:text-4xl">
      {count}
      {suffix}
    </span>
  )
}

export function About() {
  return (
    <section id="about" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="About Me"
          title="Crafting Digital Experiences"
          description="Passionate and detail-oriented frontend developer with hands-on experience building responsive, user-centric web interfaces using React.js, JavaScript (ES6+), HTML5, and CSS3."
        />

        {/* Counters */}
        <StaggerContainer className="mb-16 grid grid-cols-2 gap-6 md:grid-cols-4">
          {counters.map((counter) => (
            <StaggerItem key={counter.label}>
              <div className="group flex flex-col items-center rounded-xl border border-border bg-card p-6 text-center transition-all hover:border-primary/30 hover:shadow-md">
                <counter.icon className="mb-3 size-6 text-primary" />
                <AnimatedCounter value={counter.value} suffix={counter.suffix} />
                <span className="mt-1 text-sm text-muted-foreground">
                  {counter.label}
                </span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Skills */}
          <Reveal direction="left">
            <div>
              <h3 className="mb-6 text-xl font-semibold text-foreground">
                Technical Skills
              </h3>
              <div className="flex flex-col gap-4">
                {skills.map((skill) => (
                  <AnimatedSkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                  />
                ))}
              </div>
            </div>
          </Reveal>

          {/* Education Timeline */}
          <Reveal direction="right">
            <div>
              <h3 className="mb-6 text-xl font-semibold text-foreground">
                Education
              </h3>
              <div className="relative flex flex-col gap-8 pl-8">
                {/* Timeline line */}
                <div className="absolute left-3 top-2 h-[calc(100%-1rem)] w-px bg-border" />

                {education.map((edu, i) => (
                  <div key={i} className="relative">
                    {/* Timeline dot */}
                    <div className="absolute -left-8 top-1.5 flex size-6 items-center justify-center rounded-full border-2 border-primary bg-background">
                      <div className="size-2 rounded-full bg-primary" />
                    </div>
                    <div className="rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/30 hover:shadow-md">
                      <p className="mb-1 text-xs font-medium uppercase tracking-wider text-primary">
                        {edu.period}
                      </p>
                      <h4 className="text-base font-semibold text-foreground">
                        {edu.degree}
                      </h4>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {edu.school}
                      </p>
                      <p className="text-xs text-muted-foreground">{edu.location}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional Skills Tags */}
              <div className="mt-8">
                <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  Other Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "MongoDB",
                    "PostgreSQL",
                    "Docker",
                    "PyTorch",
                    "TensorFlow",
                    "Bootstrap",
                    "CSS Grid",
                    "Flexbox",
                    "LangChain",
                    "HuggingFace",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-border bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground transition-colors hover:border-primary/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
