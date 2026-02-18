"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/motion-wrapper"

export function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("sending")

    // Simulate send / EmailJS integration point
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setStatus("sent")
    setFormState({ name: "", email: "", message: "" })
    setTimeout(() => setStatus("idle"), 3000)
  }

  return (
    <section id="contact" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="Get In Touch"
          title="Let's Work Together"
          description="Have a project in mind or just want to chat? I'd love to hear from you."
        />

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Info */}
          <Reveal direction="left">
            <div className="flex flex-col gap-8">
              <div>
                <h3 className="mb-4 text-xl font-semibold text-foreground">
                  Contact Information
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                  Feel free to reach out through any of the channels below.
                  I typically respond within 24 hours.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <a
                  href="mailto:indrakiran7b@gmail.com"
                  className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 text-sm text-muted-foreground transition-all hover:border-primary/30 hover:text-foreground hover:shadow-sm"
                >
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-md bg-primary/10">
                    <Mail className="size-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Email</p>
                    <p className="font-medium text-foreground">indrakiran7b@gmail.com</p>
                  </div>
                </a>
                <a
                  href="tel:+917702171899"
                  className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 text-sm text-muted-foreground transition-all hover:border-primary/30 hover:text-foreground hover:shadow-sm"
                >
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-md bg-primary/10">
                    <Phone className="size-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Phone</p>
                    <p className="font-medium text-foreground">+91 77021 71899</p>
                  </div>
                </a>
                <div className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 text-sm text-muted-foreground">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-md bg-primary/10">
                    <MapPin className="size-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Location</p>
                    <p className="font-medium text-foreground">Kerala, India</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-3">
                <a
                  href="https://linkedin.com/in/indra-kiran"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex size-10 items-center justify-center rounded-lg border border-border bg-card transition-all hover:border-primary/30 hover:text-primary hover:shadow-sm"
                  aria-label="LinkedIn Profile"
                >
                  <svg className="size-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="https://github.com/indrakiran7b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex size-10 items-center justify-center rounded-lg border border-border bg-card transition-all hover:border-primary/30 hover:text-primary hover:shadow-sm"
                  aria-label="GitHub Profile"
                >
                  <svg className="size-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                </a>
              </div>
            </div>
          </Reveal>

          {/* Contact Form */}
          <Reveal direction="right">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 rounded-xl border border-border bg-card p-6 md:p-8"
            >
              <div>
                <label
                  htmlFor="name"
                  className="mb-1.5 block text-sm font-medium text-foreground"
                >
                  Name
                </label>
                <Input
                  id="name"
                  placeholder="Your name"
                  required
                  value={formState.name}
                  onChange={(e) =>
                    setFormState({ ...formState, name: e.target.value })
                  }
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-sm font-medium text-foreground"
                >
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  required
                  value={formState.email}
                  onChange={(e) =>
                    setFormState({ ...formState, email: e.target.value })
                  }
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm font-medium text-foreground"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  rows={5}
                  required
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  className="min-h-[120px]"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                disabled={status === "sending"}
                className="gap-2"
              >
                {status === "sending" ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="size-4 rounded-full border-2 border-primary-foreground border-t-transparent"
                    />
                    Sending...
                  </>
                ) : status === "sent" ? (
                  "Message Sent!"
                ) : (
                  <>
                    Send Message <Send className="size-4" />
                  </>
                )}
              </Button>
              {status === "sent" && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-sm text-primary"
                >
                  Thank you! I&apos;ll get back to you soon.
                </motion.p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
