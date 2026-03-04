"use client";

import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";
import Image from "next/image";

const roles = ["Frontend Developer", "React Native Developer", "Web Developer"];

export default function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const fullText = roles[currentRole];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting) {
      if (charIndex < fullText.length) {
        timeout = setTimeout(() => {
          setDisplayText(fullText.slice(0, charIndex + 1));
          setCharIndex((prev) => prev + 1);
        }, 80);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 1800);
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayText(fullText.slice(0, charIndex - 1));
          setCharIndex((prev) => prev - 1);
        }, 45);
      } else {
        setIsDeleting(false);
        setCurrentRole((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentRole]);

  const handleScroll = () => {
    const el = document.querySelector("#about");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-4 sm:px-6 max-w-5xl mx-auto"
    >
      <div className="pt-24 pb-20 flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">
        {/* Text content */}
        <div className="flex-1 text-center md:text-left">
          <p className="text-sm text-muted-foreground tracking-widest uppercase mb-4">
            Hello, I&apos;m
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-foreground leading-tight text-balance mb-4">
            Pranjal Vora
          </h1>
          <div className="flex items-center justify-center md:justify-start gap-2 mb-6 h-10 sm:h-12">
            <span className="text-lg sm:text-xl md:text-3xl text-muted-foreground font-light">
              I&apos;m a{" "}
            </span>
            <span className="text-lg sm:text-xl md:text-3xl font-semibold text-primary">
              {displayText}
              <span className="inline-block w-0.5 h-5 sm:h-6 md:h-8 bg-primary ml-1 animate-pulse align-middle" />
            </span>
          </div>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0 mb-8 sm:mb-10">
            Frontend Engineer with 3+ years of experience in React and TypeScript, specializing in UI performance optimization and component library development. Skilled in building scalable web applications, internal tooling, and design systems using React, Redux, and React Native, with a focus on delivering fast, maintainable, and high-quality frontend solutions.
          </p>
          <div className="flex flex-col xs:flex-row sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              onClick={(e) => { e.preventDefault(); document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" }); }}
              className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity cursor-pointer"
            >
              View My Work
            </a>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
              className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-border text-foreground text-sm font-medium hover:bg-secondary transition-colors cursor-pointer"
            >
              Get In Touch
            </a>
          </div>
        </div>

        {/* Profile image */}
        <div className="shrink-0 flex justify-center">
          <div className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg ring-2 ring-primary/10">
            <Image
              src="/images/profile.webp"
              alt="Pranjal Vora – Frontend Developer"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </div>
      </div>

      <button
        onClick={handleScroll}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors animate-bounce cursor-pointer"
        aria-label="Scroll down"
      >
        <ArrowDown size={20} />
      </button>
    </section>
  );
}
