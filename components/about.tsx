"use client"

import { useRef } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [80, -80])

  const text =
    "WE ARE SABA CODERS  A TEAM OF PASSIONATE SOFTWARE ENGINEERS FROM ADDIS ABABA. WE BUILD FAST, SCALABLE, AND USER-FOCUSED WEB APPS, AI SOLUTIONS, AND DIGITAL EXPERIENCES THAT SOLVE REAL PROBLEMS.";
  const words = text.split(" ")

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
        delayChildren: 0.2
      }
    }
  }

  const wordVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      filter: "blur(10px)"
    },
    visible: { 
      opacity: 1, 
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }

  return (
    <section id="about" className="py-32 md:py-40 px-6 relative overflow-hidden" ref={ref}>
      
      <motion.div 
        style={{ y }}
        className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/10 to-transparent pointer-events-none"
      />
      
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-5xl mx-auto relative z-10"
      >
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-10 block"
        >
          About Us
        </motion.span>

        <motion.p
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-2xl md:text-4xl lg:text-5xl font-display leading-[1.2] tracking-tight"
        >
          <span className="text-muted-foreground/50"># </span>
          {words.map((word, i) => (
            <motion.span
              key={i}
              variants={wordVariants}
              className="inline-block"
            >
              {word}
              {i < words.length - 1 && "\u00A0"}
            </motion.span>
          ))}
        </motion.p>
      </motion.div>
    </section>
  )
}
