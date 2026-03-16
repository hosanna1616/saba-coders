"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Magnetic } from "./motion"

export function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  const socialLinks = [
    {
      href: "https://www.linkedin.com/company/saba-coders/",
      label: "LINKEDIN",
    },
    { href: "https://t.me/sabacoders", label: "TELEGRAM" },
    
  ];

  return (
    <motion.footer
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="py-10 px-6 border-t border-border"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Email */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <Magnetic strength={0.2}>
              <Link
                href="https://www.linkedin.com/company/saba-coders/"
                className="text-muted-foreground text-sm hover:text-foreground transition-colors duration-300"
              ></Link>
            </Magnetic>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-6"
          >
            {socialLinks.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 10 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                }
                transition={{
                  duration: 0.5,
                  delay: 0.4 + index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Magnetic strength={0.3}>
                  <Link
                    href={link.href}
                    target="_blank"
                    className="group relative text-xs text-muted-foreground hover:text-foreground transition-colors duration-300 tracking-[0.1em]"
                  >
                    {link.label}
                    <motion.span
                      className="absolute -bottom-1 left-0 w-full h-px bg-foreground origin-left"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </Link>
                </Magnetic>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
}
