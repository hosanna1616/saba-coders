"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Magnetic } from "./motion";
import ShuffleText from "./ShuffleText";
export function Header() {
  const [isDark, setIsDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#works", label: "Works" },
  ];

  const socialLinks = [
    {
      href: "https://www.linkedin.com/company/saba-coders/",
      label: "LINKEDIN",
    },
    { href: "https://t.me/sabacoders", label: "TELEGRAM" },
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
        when: "beforeChildren",
        staggerChildren: 0.08,
        delayChildren: 0.15,
      },
    },
  };

  const menuItemVariants = {
    closed: {
      opacity: 0,
      y: 40,
      transition: {
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const socialItemVariants = {
    closed: {
      opacity: 0,
      y: 20,
      transition: {
        duration: 0.2,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled && !menuOpen
            ? "bg-background/80 backdrop-blur-md border-b border-border"
            : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-7 flex items-center justify-between">
          {/* Logo */}
          <Magnetic strength={0.2}>
            <Link
              href="/"
              className="flex items-center gap-3 text-base font-medium tracking-tight hover:opacity-70 transition-opacity duration-300"
              onClick={() => setMenuOpen(false)}
            >
              <div className="inline-block rounded-full dark:bg-white/9 p-3">
                <Image
                  src="/logo.svg"
                  alt="Saba Coders logo"
                  width={196}
                  height={286}
                  className="h-9 w-auto opacity-90 pointer-events-none sm:h-17"
                  priority
                />
              </div>
              {/* <span>SABA CODERS</span> */}
            </Link>
          </Magnetic>

          {/* Right side: Theme Toggle + Hamburger Menu (visible on ALL screen sizes) */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <Magnetic strength={0.3}>
              <button
                onClick={() => setIsDark(!isDark)}
                className="p-2 rounded-full hover:bg-muted transition-all duration-300 hover:scale-110"
                aria-label="Toggle theme"
              >
                <AnimatePresence mode="wait">
                  {isDark ? (
                    <motion.div
                      key="sun"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Sun className="w-4 h-4" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="moon"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Moon className="w-4 h-4" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </Magnetic>

            {/* Hamburger Icon - Always visible on all screen sizes */}
            <Magnetic strength={0.3}>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="relative w-10 h-10 flex items-center justify-center z-50 rounded-full hover:bg-muted transition-colors duration-300"
                aria-label="Toggle menu"
              >
                <div className="w-6 h-4 relative flex flex-col justify-between">
                  <motion.span
                    animate={
                      menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }
                    }
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full h-0.5 bg-foreground origin-center"
                  />
                  <motion.span
                    animate={
                      menuOpen
                        ? { opacity: 0, scaleX: 0 }
                        : { opacity: 1, scaleX: 1 }
                    }
                    transition={{ duration: 0.2 }}
                    className="w-full h-0.5 bg-foreground origin-center"
                  />
                  <motion.span
                    animate={
                      menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }
                    }
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full h-0.5 bg-foreground origin-center"
                  />
                </div>
              </button>
            </Magnetic>
          </div>
        </div>
      </motion.header>

      {/* Full Screen Menu Overlay - Works on ALL screen sizes */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-40 bg-background"
          >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-foreground blur-3xl" />
              <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-foreground blur-3xl" />
            </div>

            <div className="relative flex flex-col items-center justify-center h-full gap-12 px-6">
              {/* Navigation Links */}
              <nav className="flex flex-col items-center gap-4 md:gap-6">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    variants={menuItemVariants}
                    custom={index}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="group relative text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight hover:text-muted-foreground transition-colors duration-300"
                    >
                      <span className="relative inline-block overflow-hidden">
                        <motion.span
                          className="inline-block"
                          whileHover={{ y: -4 }}
                          transition={{
                            duration: 0.3,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                        >
                          {link.label}
                        </motion.span>
                      </span>
                      {/* Animated underline */}
                      <span className="absolute -bottom-2 left-0 w-0 h-1 bg-foreground transition-all duration-500 ease-out group-hover:w-full" />
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Social Links */}
              <motion.div
                variants={menuItemVariants}
                className="flex flex-wrap items-center justify-center gap-6 md:gap-10 mt-8"
              >
                {socialLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    variants={socialItemVariants}
                    custom={index}
                  >
                    <Link
                      href={link.href}
                      target="_blank"
                      className="group relative text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 tracking-[0.2em]"
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.label}
                      <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground transition-all duration-300 ease-out group-hover:w-full" />
                    </Link>
                  </motion.div>
                ))}
              </motion.div>

              {/* Email at bottom */}
              <motion.div
                variants={menuItemVariants}
                className="absolute bottom-8 left-0 right-0 text-center"
              >
                <Link
                  href="https://www.linkedin.com/company/saba-coders/"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                  onClick={() => setMenuOpen(false)}
                >
                  SABA CODERS
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
