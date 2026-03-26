"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const projects = [
  {
    id: 1,
    number: "01",
    category: "PORTFOLIO WEBSITE",
    tech: "NEXT JS  |  LENIS  |  GSAP",
    title: "HULU MATCH",
    description:
      "Hulu Match is an AI-powered recruitment platform that intelligently matches job seekers with the most relevant opportunities based on their skills and potential, making hiring faster and smarter.",
    link: "#",
    image: "/images/bg1.png",
    bgColor: "from-blue-900/40 via-slate-900/60 to-background",
  },
  {
    id: 2,
    number: "02",
    category: "ECOMMERCE WEBSITE",
    tech: "REACT + Next | 2D/3D Rendering: Konva.js, Three.js (optional) |  OpenRouter (LLaMA 4), GPT4All, Hugging Face |  Google TTS / ResponsiveVoice (Free Tier)",
    title: "Digital Pet Twin",
    description:
      "Developed in collaboration with an agile and imaginative team lead by me, it responds dynamically to real-world weather conditions, invites users into playful, interactive games, and builds a sense of connection through nuanced, evolving interactions.This project earned 1st place honors at the GIG Hackathon 2025, recognized for its originality, technical sophistication, and experience-first design. Blending creativity with engineering precision, Digital Pet Twin showcases the future of interactive digital relationships and the kind of teamwork that turns bold ideas into tangible wins.",
    link: "https://pettwin3.vercel.app/",
    image: "/images/BG2.png",
    bgColor: "from-amber-900/20 via-orange-900/60 to-background",
  },
  // {
  //   id: 3,
  //   number: "03",
  //   category: "ECOMMERCE WEBSITE",
  //   tech: "NEXT JS  |  LENIS  |  GSAP",
  //   title: "Lux Cells",
  //   description:
  //     "Lux Cells is a mobile phone store offering a wide range of smartphones and accessories, providing quality products and dependable customer service.",
  //   link: "#",
  //   image: "/images/project-03.jpg",
  //   bgColor: "from-emerald-900/40 via-teal-900/60 to-background",
  // },
];

function ProjectSlide({ 
  project, 
  progress, 
  index, 
  total 
}: { 
  project: typeof projects[0]
  progress: ReturnType<typeof useScroll>["scrollYProgress"]
  index: number
  total: number
}) {
  const sectionStart = index / total
  const sectionEnd = (index + 1) / total
  const sectionMid = (sectionStart + sectionEnd) / 2
  
  // Visibility and transitions
  const opacity = useTransform(
    progress,
    [
      Math.max(0, sectionStart - 0.08),
      sectionStart + 0.02,
      sectionMid,
      sectionEnd - 0.08,
      sectionEnd
    ],
    [0, 1, 1, 1, 0]
  )
  
  const contentY = useTransform(
    progress,
    [sectionStart - 0.08, sectionStart + 0.02, sectionEnd - 0.08, sectionEnd],
    [80, 0, 0, -80]
  )
  
  const contentScale = useTransform(
    progress,
    [sectionStart - 0.08, sectionStart + 0.02, sectionEnd - 0.08, sectionEnd],
    [0.92, 1, 1, 0.92]
  )
  
  // Number animation - slides up with fade
  const numberY = useTransform(
    progress,
    [sectionStart - 0.06, sectionStart + 0.04, sectionEnd - 0.08, sectionEnd - 0.02],
    [120, 0, 0, -120]
  )
  
  const numberOpacity = useTransform(
    progress,
    [sectionStart - 0.04, sectionStart + 0.06, sectionEnd - 0.1, sectionEnd - 0.04],
    [0, 1, 1, 0]
  )
  
  // Image animation - blur and parallax
  const imageBlur = useTransform(
    progress,
    [sectionStart - 0.08, sectionStart + 0.04, sectionEnd - 0.08, sectionEnd],
    [8, 0, 0, 8]
  )
  
  const imageScale = useTransform(
    progress,
    [sectionStart - 0.08, sectionStart + 0.04, sectionEnd - 0.08, sectionEnd],
    [1.15, 1, 1, 1.1]
  )
  
  const imageY = useTransform(
    progress,
    [sectionStart, sectionEnd],
    [-20, 20]
  )
  
  const imageOpacity = useTransform(
    progress,
    [sectionStart - 0.06, sectionStart + 0.02, sectionEnd - 0.06, sectionEnd],
    [0, 1, 1, 0]
  )
  
  // Title stagger
  const titleY = useTransform(
    progress,
    [sectionStart - 0.04, sectionStart + 0.06],
    [50, 0]
  )
  
  const titleOpacity = useTransform(
    progress,
    [sectionStart - 0.02, sectionStart + 0.08],
    [0, 1]
  )
  
  // Description stagger (slightly delayed)
  const descY = useTransform(
    progress,
    [sectionStart, sectionStart + 0.1],
    [40, 0]
  )
  
  const descOpacity = useTransform(
    progress,
    [sectionStart + 0.02, sectionStart + 0.12],
    [0, 1]
  )
  
  // CTA button animation
  const ctaY = useTransform(
    progress,
    [sectionStart + 0.04, sectionStart + 0.14],
    [30, 0]
  )
  
  const ctaOpacity = useTransform(
    progress,
    [sectionStart + 0.06, sectionStart + 0.16],
    [0, 1]
  )

  return (
    <motion.div
      className="absolute inset-0 flex items-center"
      style={{ opacity }}
    >
      {/* Background Image with blur and parallax */}
      <motion.div 
        className="absolute inset-0 overflow-hidden"
        style={{ opacity: imageOpacity }}
      >
        <motion.div
          className="absolute inset-0"
          style={{ 
            y: imageY,
            scale: imageScale,
            filter: useTransform(imageBlur, (v) => `blur(${v}px)`)
          }}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            quality={85}
          />
        </motion.div>
        {/* Gradient overlay */}
        <div className={`absolute inset-0 bg-gradient-to-r ${project.bgColor}`} />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
      </motion.div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Left: Large Project Number */}
        <div className="relative order-2 lg:order-1">
          <div className="overflow-hidden">
            <motion.div
              style={{ y: numberY, opacity: numberOpacity }}
              className="relative"
            >
              {/* Large background number */}
              <span className="text-[clamp(10rem,30vw,24rem)] font-display font-bold leading-none text-foreground/[0.03] select-none absolute -left-4 -top-20">
                {project.number}
              </span>
              
              {/* Circular index display */}
              <div className="relative inline-flex items-center justify-center">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border border-foreground/10 flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-4xl md:text-5xl font-display font-bold">
                      {project.number}
                    </span>
                    <span className="block text-xs text-muted-foreground mt-1">
                      / 0{total}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Progress indicators */}
          <motion.div 
            className="mt-8 flex items-center gap-4"
            style={{ opacity: numberOpacity }}
          >
            <span className="text-[10px] tracking-[0.25em] text-muted-foreground uppercase">
              Project
            </span>
            <div className="flex gap-2">
              {projects.map((_, i) => (
                <motion.div
                  key={i}
                  className="h-0.5 rounded-full transition-all duration-500"
                  animate={{
                    width: i === index ? 32 : 8,
                    backgroundColor: i === index 
                      ? "hsl(var(--foreground))" 
                      : "hsl(var(--foreground) / 0.2)"
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
        
        {/* Right: Project Content */}
        <motion.div
          className="space-y-6 order-1 lg:order-2"
          style={{ y: contentY, scale: contentScale }}
        >
          {/* Category & Tech */}
          <motion.div style={{ opacity: titleOpacity, y: titleY }}>
            <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              {project.category}
            </span>
            <p className="text-[10px] text-muted-foreground/50 mt-1 tracking-wider">
              {project.tech}
            </p>
          </motion.div>
          
          {/* Title with clip reveal */}
          <div className="overflow-hidden">
            <motion.h3
              style={{ y: titleY, opacity: titleOpacity }}
              className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-[0.9]"
            >
              {project.title}
            </motion.h3>
          </div>
          
          {/* Description */}
          <motion.p
            style={{ y: descY, opacity: descOpacity }}
            className="text-muted-foreground leading-relaxed max-w-md text-sm md:text-base"
          >
            {project.description}
          </motion.p>
          
          {/* CTA Button */}
          <motion.div
            style={{ y: ctaY, opacity: ctaOpacity }}
          >
            <Link
              href={project.link}
              className="inline-flex items-center gap-4 group"
            >
              <span className="text-sm uppercase tracking-[0.2em] group-hover:tracking-[0.25em] transition-all duration-300">
                Visit Site
              </span>
              <motion.div
                whileHover={{ scale: 1.1, rotate: 45 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="w-12 h-12 rounded-full border border-foreground/30 flex items-center justify-center group-hover:bg-foreground group-hover:text-background group-hover:border-foreground transition-all duration-300"
              >
                <ArrowUpRight className="w-5 h-5" />
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export function StickyProjects() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })
  
  // Smooth the scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <section 
      ref={containerRef}
      id="works" 
      className="relative"
      style={{ height: `${(projects.length + 0.5) * 100}vh` }}
    >
      {/* Sticky container */}
      <div className="sticky top-0 h-screen overflow-hidden bg-background">
        {/* Section header */}
        <div className="absolute top-8 left-6 md:left-12 z-30">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-[10px] tracking-[0.25em] text-muted-foreground uppercase"
          >
            Selected Work
          </motion.span>
        </div>
        
        {/* Projects */}
        {projects.map((project, index) => (
          <ProjectSlide
            key={project.id}
            project={project}
            progress={smoothProgress}
            index={index}
            total={projects.length}
          />
        ))}
        
        {/* Vertical scroll hint */}
        <motion.div 
          className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 z-30"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex flex-col items-center gap-2">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-px h-16 bg-gradient-to-b from-transparent via-foreground/40 to-transparent"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
