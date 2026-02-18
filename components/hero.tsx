"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowDown, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

function TypewriterText({ text, delay = 0 }: { text: string; delay?: number }) {
  const [displayed, setDisplayed] = useState("")
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setStarted(true), delay)
    return () => clearTimeout(timeout)
  }, [delay])

  useEffect(() => {
    if (!started) return
    if (displayed.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayed(text.slice(0, displayed.length + 1))
      }, 60)
      return () => clearTimeout(timeout)
    }
  }, [displayed, text, started])

  return (
    <span>
      {displayed}
      <span className="animate-pulse text-primary">|</span>
    </span>
  )
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
    >
      {/* Subtle background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 text-sm font-medium uppercase tracking-widest text-primary"
        >
          Frontend Developer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
        >
          <TypewriterText text="Indra Kiran Bhavanam" delay={600} />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl"
        >
          React.js Specialist crafting responsive, user-centric web interfaces
          with clean code and a keen eye for detail.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button asChild size="lg" className="gap-2">
            <a href="#projects">
              Projects <ArrowDown className="size-4" />
            </a>
          </Button>

          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="lg" className="gap-2">
                <FileText className="size-4" /> Resume
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-3xl h-[80vh]">
              <DialogHeader>
                <DialogTitle>Resume - Indra Kiran Bhavanam</DialogTitle>
              </DialogHeader>
              <div className="flex-1 overflow-hidden rounded-md border border-border">
                <iframe
                  src="https://blobs.vusercontent.net/blob/Indra_Kiran_Bhavanam__Frontend_%20%283%29-Wnzo9fmW8z9q1zdfyRKskvgz8Cu29P.pdf"
                  className="h-full w-full min-h-[60vh]"
                  title="Resume of Indra Kiran Bhavanam"
                />
              </div>
            </DialogContent>
          </Dialog>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="size-5 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  )
}
