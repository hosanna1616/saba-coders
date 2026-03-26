"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Magnetic } from "./motion";
import GridMotion from "./GridMotion";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0.5, 1]);

  const titleText = "COLLABORATING?";
  const letters = titleText.split("");

  return (
    <section className="relative py-32 md:py-40 px-6 overflow-hidden" ref={ref}>
   
      <div className="absolute inset-0 z-0 opacity-40">
        <GridMotion
          items={[
            "https://images.unsplash.com/photo-1748370987492-eb390a61dcda?q=80&w=3464",
            "https://images.unsplash.com/photo-1748370987492-eb390a61dcda?q=80&w=3464",
            "https://images.unsplash.com/photo-1748370987492-eb390a61dcda?q=80&w=3464",
            "https://images.unsplash.com/photo-1748370987492-eb390a61dcda?q=80&w=3464",
            "https://images.unsplash.com/photo-1748370987492-eb390a61dcda?q=80&w=3464",
            "https://images.unsplash.com/photo-1748370987492-eb390a61dcda?q=80&w=3464",
            "https://images.unsplash.com/photo-1748370987492-eb390a61dcda?q=80&w=3464",
          ]}
          gradientColor="black"
        />
      </div>

      {/* 🔥 Content */}
      <motion.div
        style={{ scale, opacity }}
        className="relative z-10 max-w-5xl mx-auto text-center"
      >
        {/* Subtitle */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-sm uppercase tracking-[0.2em] text-foreground mb-6 block"
        >
       
        </motion.span>

        {/* Title */}
        <motion.h2
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-12"
        >
          <span className="text-muted-foreground/50"># </span>
          {letters.map((letter, i) => (
            <motion.span
              key={i}
              className="inline-block"
              variants={{
                hidden: { opacity: 0, y: 80, rotateX: -90 },
                visible: {
                  opacity: 1,
                  y: 0,
                  rotateX: 0,
                  transition: {
                    duration: 0.6,
                    delay: i * 0.03 + 0.2,
                  },
                },
              }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.h2>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <Magnetic strength={0.15}>
            <Link
              href="https://www.linkedin.com/company/saba-coders/"
              className="inline-flex items-center gap-4 px-8 py-4 bg-foreground text-background rounded-full text-sm font-medium group relative overflow-hidden"
            >
              <motion.span
                className="absolute inset-0 bg-foreground/80"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.35 }}
              />
              <span className="relative z-10">CONTACT US</span>
              <motion.div className="relative z-10" whileHover={{ rotate: 45 }}>
                <ArrowUpRight className="w-4 h-4" />
              </motion.div>
            </Link>
          </Magnetic>
        </motion.div>
      </motion.div>
    </section>
  );
}
