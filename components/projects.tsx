"use client"

import { useState, useRef } from "react"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Magnetic } from "./motion"

const projects = [
  {
    id: 1,
    category: "PORTFOLIO WEBSITE",
    tech: "NEXT JS  |  LENIS  |  GSAP",
    title: "Skyline Builders",
    description:
      "Skyline Builders is a construction company that builds modern and durable structures. It focuses on quality work, reliable service, and strong building solutions.",
    link: "#",
    status: "live",
  },
  {
    id: 2,
    category: "ECOMMERCE WEBSITE",
    tech: "REACT JS  |  MONGODB  |  STRIPE  |  CHAPA",
    title: "Honey Store",
    description:
      "The website is a modern e-commerce platform that allows users to browse and buy products online easily.",
    link: "#",
    status: "live",
  },
  {
    id: 3,
    category: "ECOMMERCE WEBSITE",
    tech: "NEXT JS  |  LENIS  |  GSAP",
    title: "Lux Cells",
    description:
      "Lux Cells is a mobile phone store offering a wide range of smartphones and accessories, providing quality products and dependable customer service to keep you connected.",
    link: null,
    status: "coming-soon",
  },
  {
    id: 4,
    category: "WEB APPLICATION",
    tech: "NEXT JS  |  TAILWIND  |  SUPABASE",
    title: "Task Manager Pro",
    description:
      "A comprehensive task management application designed to help teams collaborate effectively and track project progress in real-time.",
    link: "#",
    status: "live",
  },
]

export function Projects() {
  const [activeProject, setActiveProject] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.98
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }

  const headingVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      clipPath: "inset(100% 0 0 0)"
    },
    visible: { 
      opacity: 1, 
      y: 0,
      clipPath: "inset(0% 0 0 0)",
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }

  return (
    <section id="works" className="py-32 md:py-40 px-6 bg-muted/30" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="overflow-hidden">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-xs tracking-[0.2em] text-muted-foreground block"
            >
              PROJECT {String(activeProject + 1).padStart(2, "0")} |{" "}
              {String(projects.length).padStart(2, "0")}
            </motion.span>
            <motion.h2
              variants={headingVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="text-4xl md:text-6xl font-display font-bold mt-3"
            >
              <span className="text-muted-foreground/50"># </span>
              Selected Projects.
            </motion.h2>
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.03,
                y: -6,
                transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] }
              }}
              className={`group relative bg-background border border-border rounded-2xl overflow-hidden cursor-pointer transition-shadow duration-300 ${
                activeProject === index ? "ring-1 ring-foreground/10 shadow-xl" : "hover:shadow-lg"
              }`}
              onMouseEnter={() => setActiveProject(index)}
            >
              {/* Hover gradient overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-gradient-to-br from-foreground/[0.03] to-transparent pointer-events-none z-10"
              />

              {/* Card Content */}
              <div className="p-6 md:p-8 relative z-20">
                <div className="space-y-5">
                  {/* Category & Link */}
                  <div className="flex items-start justify-between">
                    <motion.div
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                    >
                      <motion.span className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                        {project.category}
                      </motion.span>
                      <p className="text-[10px] text-muted-foreground/50 mt-1 tracking-wider">{project.tech}</p>
                    </motion.div>
                    {project.status === "coming-soon" ? (
                      <motion.span
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1.5 text-[10px] uppercase tracking-wider bg-muted rounded-full text-muted-foreground"
                      >
                        Coming Soon
                      </motion.span>
                    ) : (
                      <Magnetic strength={0.4}>
                        <Link
                          href={project.link || "#"}
                          className="p-2.5 rounded-full border border-border group-hover:bg-foreground group-hover:text-background group-hover:border-foreground transition-all duration-300"
                        >
                          <motion.div
                            initial={{ rotate: 0 }}
                            whileHover={{ rotate: 45 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ArrowUpRight className="w-4 h-4" />
                          </motion.div>
                        </Link>
                      </Magnetic>
                    )}
                  </div>

                  {/* Title & Description */}
                  <motion.div
                    className="group-hover:-translate-y-1 transition-transform duration-300 ease-out"
                  >
                    <motion.h3 className="text-xl md:text-2xl font-display font-semibold mb-3">
                      {project.title}
                    </motion.h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                  </motion.div>

                  {/* Visit Site Link */}
                  {project.status === "live" && (
                    <motion.div
                      className="group-hover:-translate-y-1 transition-transform duration-300 ease-out"
                    >
                      <Link
                        href={project.link || "#"}
                        className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.1em] group/link hover:text-muted-foreground transition-colors duration-300"
                      >
                        <span>Visit Site</span>
                        <motion.div
                          initial={{ x: 0 }}
                          whileHover={{ x: 4 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </motion.div>
                      </Link>
                    </motion.div>
                  )}
                </div>
              </div>

              {/* Bottom decorative line */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-foreground/30 to-transparent origin-left"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
