"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import LiquidEther from "./LiquidEther";
export function HeroIntro() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const imageY = useTransform(smoothProgress, [0, 1], [0, 200]);
  const imageScale = useTransform(smoothProgress, [0, 0.5], [1, 1.15]);
  const contentOpacity = useTransform(smoothProgress, [0, 0.4], [1, 0]);
  const contentY = useTransform(smoothProgress, [0, 0.4], [0, -80]);

  const firstName = "SABA";
  const lastName = "CODERS";

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Animation variants
  const imageRevealVariants = {
    hidden: {
      scale: 1.15,
      filter: "blur(20px)",
      opacity: 0,
    },
    visible: {
      scale: 1,
      filter: "blur(0px)",
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const letterContainerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.3,
      },
    },
  };

  const letterVariants = {
    hidden: {
      opacity: 0,
      y: 120,
      rotateX: -80,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const lastNameContainerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.7,
      },
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 1.2,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const scrollIndicatorVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 1.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative h-[140vh] overflow-hidden"
    >
      {/* Hero Image with Parallax */}
      {/* Liquid Ether Background */}
      <div className="absolute inset-0 w-full h-full">
        <LiquidEther
          colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
          mouseForce={20}
          cursorSize={120}
          isViscous
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo
          autoSpeed={0.5}
          autoIntensity={2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>
      {/* Content */}
      <motion.div
        className="relative z-10 h-screen flex flex-col items-center justify-center px-6"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        {/* Name reveal with masked animation - First Name */}
        <div className="overflow-hidden" style={{ perspective: "1000px" }}>
          <motion.h1
            variants={letterContainerVariants}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            className="font-display text-[clamp(3rem,15vw,12rem)] font-bold tracking-[-0.02em] leading-none flex justify-center"
          >
            {firstName.split("").map((letter, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                className="inline-block origin-bottom"
                style={{
                  textShadow: "0 4px 20px rgba(0,0,0,0.4)",
                }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.h1>
        </div>

        {/* Last Name */}
        <div
          className="overflow-hidden -mt-2 md:-mt-4"
          style={{ perspective: "1000px" }}
        >
          <motion.h1
            variants={lastNameContainerVariants}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            className="font-display text-[clamp(2rem,10vw,8rem)] font-light tracking-[0.2em] leading-none flex justify-center text-foreground/80"
          >
            {lastName.split("").map((letter, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                className="inline-block origin-bottom"
                style={{
                  textShadow: "0 4px 30px rgba(0,0,0,0.3)",
                }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.h1>
        </div>

        {/* Subtitle */}
        <motion.div
          variants={subtitleVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          className="mt-8 text-center"
        >
          <p className="text-sm md:text-base tracking-[3em] uppercase text-foreground">
            Full Stack Developer
          </p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="mt-3 text-xs tracking-[0.4em] text-foreground/60"
          >
            Creating Digital Experiences
          </motion.p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={scrollIndicatorVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          className="absolute bottom-24 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-3"
          >
            <span className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground">
              Scroll Down
            </span>
            <div className="relative w-px h-16">
              <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 to-transparent" />
              <motion.div
                className="absolute top-0 w-full h-4 bg-foreground"
                animate={{ y: [0, 48, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Transition gradient at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-20" />
    </section>
  );
}
