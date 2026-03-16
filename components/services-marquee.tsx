"use client"

import { motion } from "framer-motion"

export function ServicesMarquee() {
  const services = [
    "Scalable Web Applications",
    "AI & Machine Learning Solutions",
    "Mobile Applications",
    "Automation & Smart Tools",
    "Full-Stack Systems",
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 1.8, ease: [0.22, 1, 0.36, 1] }}
      className="py-6 border-y border-border overflow-hidden bg-muted/20"
    >
      <div className="relative">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }
          }}
          className="flex whitespace-nowrap"
        >
          {[...services, ...services, ...services, ...services].map((service, index) => (
            <span
              key={index}
              className="mx-7 text-7 uppercase tracking-[0.2em] text-muted-foreground flex items-center gap-3"
            >
              {service}
              <motion.span
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.8, 4, 0.5]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  delay: index * 0.15,
                  ease: "easeInOut"
                }}
                className="inline-block w-1.5 h-1.5 bg-foreground rounded-full"
              />
            </span>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}
