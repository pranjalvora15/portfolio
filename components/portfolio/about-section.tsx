"use client";

import SectionHeader from "./section-header";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-24 px-4 sm:px-6 max-w-5xl mx-auto">
      <SectionHeader label="About Me" />
      <div className="grid md:grid-cols-2 gap-12 items-start mt-12">
        <div className="space-y-5">
          <p className="text-foreground text-base leading-relaxed">
            Hi! I&apos;m <strong>Pranjal Vora</strong>, a Frontend Developer with 3+ years of experience building scalable, performant web and mobile applications.
          </p>
          <p className="text-muted-foreground text-base leading-relaxed">
            At Jumbotail, I architected <strong>JumboUI</strong> &mdash; a reusable React component library adopted across 10 internal portals &mdash; and led the end-to-end development of a Campaign Manager Portal that drove a 20% increase in sales. I also improved the stability of a React Native POS billing app, bringing crash reports to 0%.
          </p>
          <p className="text-muted-foreground text-base leading-relaxed">
            I care deeply about performance, clean architecture, and developer experience. I hold a B.Tech in Information Technology from Dharmsinh Desai University and a Full Stack Fellowship from Crio.Do.
          </p>
        </div>
        <div className="space-y-4">
          <div className="border border-border rounded-lg p-5">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-widest mb-3">Quick Info</h3>
            <ul className="space-y-2">
              {[
                { label: "Role", value: "SDE – UI (Frontend)" },
                { label: "Specialization", value: "React & React Native" },
                { label: "Location", value: "Bengaluru, India" },
                { label: "Status", value: "Open to opportunities" },
              ].map((item) => (
                <li key={item.label} className="flex items-start gap-3 text-sm">
                  <span className="text-muted-foreground w-28 shrink-0">{item.label}</span>
                  <span className="text-foreground">{item.value}</span>
                </li>
              ))}
            </ul>
          </div>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline underline-offset-4 transition-all"
          >
            Let&apos;s work together &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
