"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionHeader from "./section-header";

const skillGroups = [
  {
    category: "Languages",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript"],
  },
  {
    category: "Frameworks & Libraries",
    skills: ["React.js", "React Native", "Redux Toolkit", "Material UI", "Bootstrap", "Storybook"],
  },
  {
    category: "Tools & Platforms",
    skills: ["Git / GitHub", "Bitbucket", "Jira", "Confluence", "VS Code", "Postman", "Heroku", "Netlify"],
  },
  {
    category: "Performance & Other",
    skills: ["Lighthouse", "Chrome DevTools", "React Profiler", "PWA / Service Workers", "Rollup", "Vite", "Webpack"],
  },
];

export default function SkillsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="skills" className="py-16 sm:py-24 px-4 sm:px-6 bg-secondary">
      <div className="max-w-5xl mx-auto">
        <SectionHeader label="Skills" />
        <h3 className="mt-4 text-3xl font-bold text-foreground text-balance">
          Technologies I work with
        </h3>
        <div ref={ref} className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.category}
              className="bg-background rounded-lg border border-border p-6 hover:border-primary/40 transition-colors"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ duration: 0.4, delay: i * 0.08, ease: "easeOut" }}
            >
              <h4 className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">
                {group.category}
              </h4>
              <ul className="space-y-2">
                {group.skills.map((skill) => (
                  <li key={skill} className="text-sm text-foreground flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
