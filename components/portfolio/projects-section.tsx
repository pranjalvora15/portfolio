"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github, Package, Play } from "lucide-react";
import SectionHeader from "./section-header";
import ImageModal from "./image-modal";

/* ── Featured (full-width) project ─────────────────────────── */
const featured = {
  title: "SwiftKart",
  description:
    "A responsive e-commerce PWA offering a variety of products. Improved Lighthouse performance score from 60\u201365 to 90\u201395 through asset optimisation, network optimisation, and Service Worker caching via Google\u2019s Workbox Library.",
  tags: ["ReactJS", "Material UI", "REST API", "PWA", "Service Worker", "Workbox"],
  image: "/images/swiftkart.webp",
  links: [
    { label: "Live Demo", href: "https://ninjakart-v3.netlify.app/", icon: Play },
    { label: "GitHub", href: "https://github.com/pranjalvora15/Qkart_V2", icon: Github },
  ],
};

/* ── Grid projects ──────────────────────────────────────────── */
const gridProjects = [
  {
    title: "search-optimization",
    description:
      "An npm package providing two custom hooks \u2014 useDebounce and useThrottle \u2014 to optimise search box performance. Supports configurable delay time and caches results of the last 10 network calls.",
    tags: ["React", "TypeScript", "Custom Hooks", "npm"],
    links: [
      { label: "GitHub", href: "https://github.com/pranjalvora15/search-optimization", icon: Github },
      { label: "npm", href: "https://www.npmjs.com/package/search-optimization", icon: Package },
      { label: "Live Demo", href: "https://usedebounce-with-caching-demo.netlify.app/", icon: Play },
    ],
  },
  {
    title: "React Native POS Billing App",
    description:
      "Led stability improvements on a React Native point-of-sale billing app at Jumbotail. Resolved critical crashes and optimised render performance, bringing the crash rate from recurring failures to 0%.",
    tags: ["React Native", "TypeScript", "Redux Toolkit", "Performance"],
    links: [],
  },
  {
    title: "JumboUI \u2013 Component Library",
    description:
      "Architected a reusable React component ecosystem using TypeScript and Storybook at Jumbotail, adopted across 10 internal portals via private Nexus Artifactory with full tree-shaking support.",
    tags: ["React", "TypeScript", "Storybook", "Rollup", "Vite"],
    links: [],
  },
  {
    title: "Campaign Manager Portal",
    description:
      "End-to-end development of a campaign management portal enabling the merchandising team to create, clone, edit, preview, and launch targeted campaigns \u2014 driving a 20% sales increase.",
    tags: ["React", "TypeScript", "Redux Toolkit", "RBAC", "REST API"],
    links: [],
  },
];

export default function ProjectsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [modalSrc, setModalSrc] = useState<string | null>(null);

  return (
    <section id="projects" className="py-16 sm:py-24 px-4 sm:px-6 max-w-5xl mx-auto">
      <SectionHeader label="Projects" />
      <h3 className="mt-4 text-3xl font-bold text-foreground text-balance">Things I&apos;ve built</h3>

      <div ref={ref} className="mt-12 space-y-6">
        {/* ── Featured full-width card ── */}
        <motion.article
          className="group border border-border rounded-xl overflow-hidden bg-background hover:border-primary/40 hover:shadow-md transition-all"
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <div className="flex flex-col md:flex-row">
            {/* Image */}
            <button
              onClick={() => setModalSrc(featured.image)}
              className="md:w-1/2 shrink-0 overflow-hidden bg-muted cursor-pointer relative"
              aria-label="View SwiftKart screenshot"
            >
              <Image
                src={featured.image}
                alt="SwiftKart – QKart e-commerce app with Lighthouse scores"
                width={720}
                height={480}
                className="w-full h-56 md:h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
              />
              <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                <span className="bg-black/60 text-white text-xs px-3 py-1 rounded-full">Click to enlarge</span>
              </span>
            </button>

            {/* Text */}
            <div className="flex-1 p-7 flex flex-col justify-between gap-5">
              <div>
                <span className="text-xs font-semibold text-primary uppercase tracking-widest mb-2 block">Featured Project</span>
                <h4 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors mb-3">
                  {featured.title}
                </h4>
                <p className="text-sm text-foreground/75 leading-relaxed">{featured.description}</p>
              </div>
              <div>
                <div className="flex flex-wrap gap-2 mb-5">
                  {featured.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-secondary text-muted-foreground border border-border">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  {featured.links.map(({ label, href, icon: Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-md text-sm font-medium border border-border bg-background hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all cursor-pointer"
                    >
                      <Icon size={14} />
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.article>

        {/* ── 2-column grid ── */}
        <div className="grid sm:grid-cols-2 gap-6">
          {gridProjects.map((project, i) => (
            <motion.article
              key={project.title}
              className="group border border-border rounded-xl p-6 bg-background hover:border-primary/40 hover:shadow-sm transition-all flex flex-col"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ duration: 0.4, delay: 0.12 + i * 0.08, ease: "easeOut" }}
            >
              <h4 className="text-base font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                {project.title}
              </h4>
              <p className="text-sm text-foreground/75 leading-relaxed mb-4 flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-secondary text-muted-foreground border border-border">
                    {tag}
                  </span>
                ))}
              </div>
              {project.links.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {project.links.map(({ label, href, icon: Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium border border-border bg-background hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all cursor-pointer"
                    >
                      <Icon size={12} />
                      {label}
                    </a>
                  ))}
                </div>
              )}
            </motion.article>
          ))}
        </div>
      </div>

      {/* Image modal */}
      <ImageModal
        src={modalSrc ?? ""}
        alt="SwiftKart project screenshot"
        open={!!modalSrc}
        onClose={() => setModalSrc(null)}
      />
    </section>
  );
}
