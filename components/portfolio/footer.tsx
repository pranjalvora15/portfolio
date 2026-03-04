"use client";

import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    document.querySelector("#hero")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border py-10 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-sm text-muted-foreground text-center sm:text-left">
          &copy; {new Date().getFullYear()} Pranjal Vora. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          {[
            { icon: Github, href: "https://github.com/pgvora15", label: "GitHub" },
            { icon: Linkedin, href: "https://linkedin.com/in/pranjal-vora", label: "LinkedIn" },
            { icon: Mail, href: "mailto:pgvora15@gmail.com", label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              <Icon size={18} />
            </a>
          ))}

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="w-8 h-8 flex items-center justify-center rounded-full border border-border text-muted-foreground hover:text-foreground hover:bg-muted transition-colors cursor-pointer ml-2"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
