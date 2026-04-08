"use client"

import { Header } from "@/components/header"
import { HeroIntro } from "@/components/hero-intro"
import { ServicesMarquee } from "@/components/services-marquee"
import { About } from "@/components/about"
import { MeetTeam } from "@/components/meet-team"
import { StickyProjects } from "@/components/sticky-projects"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider"
import { motion, AnimatePresence } from "framer-motion"

export default function Home() {
  return (
    <SmoothScrollProvider>
      <AnimatePresence mode="wait">
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="min-h-screen"
        >
          <Header />
          <HeroIntro />
          <ServicesMarquee />
          <About />
          <MeetTeam />
          <StickyProjects />
          <Contact />
          <Footer />
        </motion.main>
      </AnimatePresence>
    </SmoothScrollProvider>
  )
}
