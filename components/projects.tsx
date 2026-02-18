"use client"

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/section-heading"
import { StaggerContainer, StaggerItem } from "@/components/motion-wrapper"

const projects = [
  {
    title: "Aura E-Commerce",
    description:
      "A fully responsive React-based e-commerce platform with dynamic product listings, cart management, and a sleek modern UI designed for seamless shopping experiences.",
    url: "https://aura-three-omega.vercel.app/",
    tech: ["React.js", "JavaScript", "CSS3", "Responsive Design"],
    featured: true,
  },
  {
    title: "Smart Task Assistant",
    description:
      "An intelligent task management application that helps users organize, prioritize, and track their daily workflow with an intuitive and responsive interface.",
    url: "https://smart-task-assistant-nte6.vercel.app/",
    tech: ["React.js", "JavaScript", "Tailwind CSS"],
    featured: false,
  },
  {
    title: "Aether AI",
    description:
      "An AI-powered content generation tool that leverages advanced language models to help users create, refine, and optimize their written content effortlessly.",
    url: "https://v0-website-content-generation-six.vercel.app/",
    tech: ["React.js", "AI/ML", "Next.js", "Tailwind CSS"],
    featured: false,
  },
  {
    title: "MediScribe",
    description:
      "AI healthcare dashboard with responsive React UI components, reducing documentation overhead by 30% with intuitive navigation and optimized data entry.",
    url: "#",
    tech: ["React.js", "Python", "MongoDB", "REST APIs"],
    featured: false,
  },
  {
    title: "Prompt-Based XAI Tool",
    description:
      "Streamlit application using a 1D CNN for ECG signal classification with an integrated Falcon 7B chatbot to improve access to medical information.",
    url: "#",
    tech: ["Streamlit", "CNN", "Falcon 7B", "Python"],
    featured: false,
  },
  {
    title: "Sentiment Analysis System",
    description:
      "NLP pipeline using VADER and RoBERTa on 568K+ Amazon reviews. Leveraged HuggingFace Transformers to optimize polarity detection at scale.",
    url: "#",
    tech: ["Python", "HuggingFace", "RoBERTa", "NLP"],
    featured: false,
  },
]

export function Projects() {
  return (
    <section id="projects" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="My Work"
          title="Featured Projects"
          description="A collection of projects showcasing my expertise in frontend development, AI integration, and responsive design."
        />

        <StaggerContainer
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          staggerDelay={0.1}
        >
          {projects.map((project) => (
            <StaggerItem key={project.title}>
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-shadow hover:shadow-lg hover:border-primary/30"
              >
                {/* Color header bar */}
                <div className="h-1.5 w-full bg-gradient-to-r from-primary/60 to-primary" />

                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-3 flex items-start justify-between">
                    <h3 className="text-lg font-semibold text-foreground">
                      {project.title}
                    </h3>
                    {project.url !== "#" && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 rounded-md p-1.5 text-muted-foreground transition-colors hover:text-primary hover:bg-secondary"
                        aria-label={`Visit ${project.title}`}
                      >
                        <ExternalLink className="size-4" />
                      </a>
                    )}
                  </div>

                  <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <Badge
                        key={t}
                        variant="secondary"
                        className="text-xs font-normal"
                      >
                        {t}
                      </Badge>
                    ))}
                  </div>

                  {project.url !== "#" && (
                    <div className="mt-4 pt-4 border-t border-border">
                      <Button asChild variant="ghost" size="sm" className="gap-1.5 text-xs h-8 px-3 text-primary hover:text-primary">
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Live <ExternalLink className="size-3" />
                        </a>
                      </Button>
                    </div>
                  )}
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
