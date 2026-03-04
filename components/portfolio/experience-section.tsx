"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Award } from "lucide-react";
import SectionHeader from "./section-header";
import ImageModal from "./image-modal";

const experiences = [
  {
    role: "SDE \u2013 UI",
    company: "Jumbotail",
    period: "Apr 2023 \u2013 Nov 2025",
    description:
      "Architected JumboUI, a reusable React component library adopted across 10 internal portals. Led the Campaign Manager Portal development (20% sales increase), optimised a React Native POS billing app to achieve 0% crash rate, and implemented RBAC for campaign operations.",
    tags: ["React", "TypeScript", "React Native", "Redux Toolkit", "Storybook", "Rollup", "RBAC"],
    certificate: null,
  },
  {
    role: "System Engineer",
    company: "Infosys",
    period: "Jul 2021 \u2013 Jun 2022",
    description:
      "Built and optimised React UI components for a global stock trading platform, enabling real-time share buying, selling, and portfolio tracking. Resolved critical UI bugs to enhance platform stability.",
    tags: ["React", "JavaScript", "CSS3", "REST APIs"],
    certificate: null,
  },
  {
    role: "Fellow \u2013 Full Stack Software Development",
    company: "Crio.Do",
    period: "Jun 2022 \u2013 Mar 2023",
    description:
      "Completed an intensive fellowship involving the development of several industry-grade frontend projects, gaining hands-on experience with React, Redux, Redux Toolkit, and modern developer tooling.",
    tags: ["React", "Redux", "HTML", "CSS", "JavaScript", "Developer Tools"],
    certificate: {
      src: "/images/crio-certificate.webp",
      alt: "Crio.Do Frontend Fellowship Certificate – Pranjal Vora, Product Developer",
    },
  },
];

function ExperienceCard({ exp, index, onViewCert }: { exp: typeof experiences[0]; index: number; onViewCert: (src: string, alt: string) => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className="relative"
      initial={{ opacity: 0, x: -24 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -24 }}
      transition={{ duration: 0.45, delay: index * 0.1, ease: "easeOut" }}
    >
      {index < experiences.length - 1 && (
        <div className="absolute left-[7px] top-6 bottom-0 w-px bg-border" />
      )}
      <div className="flex gap-6 pb-10">
        <div className="mt-1.5 w-3.5 h-3.5 rounded-full bg-primary shrink-0 ring-4 ring-secondary" />
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
            <h4 className="text-base font-bold text-foreground">
              {exp.role}{" "}
              <span className="text-primary font-semibold">&middot; {exp.company}</span>
            </h4>
            <span className="text-xs text-foreground/60 font-mono bg-muted px-2 py-0.5 rounded-md w-fit">
              {exp.period}
            </span>
          </div>
          <p className="text-sm text-foreground/80 leading-relaxed mb-3">
            {exp.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-3">
            {exp.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-1 rounded-full bg-background text-foreground/70 border border-border"
              >
                {tag}
              </span>
            ))}
          </div>
          {exp.certificate && (
            <button
              onClick={() => onViewCert(exp.certificate!.src, exp.certificate!.alt)}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-primary border border-primary/30 px-3 py-1 rounded-md hover:bg-primary/10 transition-colors cursor-pointer"
            >
              <Award size={13} />
              View Certificate
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function ExperienceSection() {
  const [modal, setModal] = useState<{ src: string; alt: string } | null>(null);

  return (
    <section id="experience" className="py-16 sm:py-24 px-4 sm:px-6 bg-secondary">
      <div className="max-w-5xl mx-auto">
        <SectionHeader label="Experience" />
        <h3 className="mt-4 text-3xl font-bold text-foreground text-balance">
          Where I&apos;ve worked
        </h3>
        <div className="mt-12 space-y-0">
          {experiences.map((exp, i) => (
            <ExperienceCard
              key={exp.role}
              exp={exp}
              index={i}
              onViewCert={(src, alt) => setModal({ src, alt })}
            />
          ))}
        </div>
      </div>

      <ImageModal
        src={modal?.src ?? ""}
        alt={modal?.alt ?? ""}
        open={!!modal}
        onClose={() => setModal(null)}
      />
    </section>
  );
}
