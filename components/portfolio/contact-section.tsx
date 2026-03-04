"use client";

import { useState } from "react";
import SectionHeader from "./section-header";
import { Mail, Github, Linkedin, Send } from "lucide-react";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to send message.");
      setSent(true);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 max-w-5xl mx-auto">
      <SectionHeader label="Contact" />
      <h3 className="mt-4 text-3xl font-bold text-foreground text-balance">
        Let&apos;s work together
      </h3>
      <p className="mt-3 text-muted-foreground text-base leading-relaxed max-w-lg">
        I&apos;m currently open to new opportunities. Whether you have a project in mind, a question, or just want to say hi — my inbox is always open.
      </p>

      <div className="mt-12 grid md:grid-cols-2 gap-12">
        {/* Contact form */}
        {sent ? (
          <div className="flex flex-col items-start justify-center gap-3 border border-border rounded-lg p-8">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Send size={18} className="text-primary" />
            </div>
            <h4 className="text-base font-semibold text-foreground">Message sent!</h4>
            <p className="text-sm text-muted-foreground">
              Thanks for reaching out. I&apos;ll get back to you soon.
            </p>
            <button
              onClick={() => { setSent(false); setForm({ name: "", email: "", message: "" }); setError(null); }}
              className="text-sm text-primary hover:underline underline-offset-4 mt-1 cursor-pointer"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-xs font-medium text-muted-foreground mb-1.5 uppercase tracking-wider">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full px-4 py-2.5 rounded-md border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs font-medium text-muted-foreground mb-1.5 uppercase tracking-wider">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="w-full px-4 py-2.5 rounded-md border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-xs font-medium text-muted-foreground mb-1.5 uppercase tracking-wider">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                className="w-full px-4 py-2.5 rounded-md border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
            >
              <Send size={15} />
              {loading ? "Sending..." : "Send Message"}
            </button>
            {error && (
              <p className="text-sm text-destructive mt-1">{error}</p>
            )}
          </form>
        )}

        {/* Social links */}
        <div className="flex flex-col justify-start gap-6">
          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-widest mb-4">Reach out directly</h4>
            <ul className="space-y-3">
              {[
                { icon: Mail, label: "Email", value: "pgvora15@gmail.com", href: "mailto:pgvora15@gmail.com" },
                { icon: Github, label: "GitHub", value: "github.com/pgvora15", href: "https://github.com/pgvora15" },
                { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/pranjal-vora", href: "https://linkedin.com/in/pranjal-vora" },
              ].map(({ icon: Icon, label, value, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="flex items-center gap-3 text-sm group cursor-pointer"
                  >
                    <span className="w-8 h-8 rounded-md bg-secondary border border-border flex items-center justify-center text-muted-foreground group-hover:text-primary group-hover:border-primary/40 transition-colors">
                      <Icon size={15} />
                    </span>
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors">{value}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
