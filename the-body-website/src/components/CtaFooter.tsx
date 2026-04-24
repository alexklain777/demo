import { ArrowUpRight } from "lucide-react";
import { BlurText } from "@/components/BlurText";
import { Button } from "@/components/ui/button";

const FOOTER_LINKS = [
  { label: "Services",  href: "#services" },
  { label: "About",     href: "#about" },
  { label: "Booking",   href: "#booking" },
  { label: "Instagram", href: "https://instagram.com" },
] as const;

export function CtaFooter() {
  return (
    <section
      id="booking"
      className="relative min-h-[100vh] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Animated gradient background (video placeholder) */}
      <div className="absolute inset-0 bg-video-placeholder" style={{ filter: "brightness(0.7)" }} />

      {/* Gradient fades */}
      <div className="absolute top-0 inset-x-0 h-[200px] z-[1] gradient-fade-t" />
      <div className="absolute bottom-0 inset-x-0 h-[160px] z-[1] gradient-fade-b" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-1 px-6 text-center py-32">
        <BlurText
          text="Ready to feel the difference?"
          as="h2"
          className="font-display italic font-light text-[clamp(48px,9vw,160px)] leading-[0.88] tracking-[-0.02em] text-center max-w-[16ch]"
        />

        <p className="mt-8 font-body font-light text-base md:text-lg text-foreground/70 max-w-lg text-center leading-relaxed">
          One session. Visible results. Your body, transformed — in Charlotte's
          most personal wellness studio.
        </p>

        <div className="mt-10 flex items-center gap-3 flex-wrap justify-center">
          <Button variant="hero" asChild>
            <a href="mailto:hello@thebody.com">
              Book a Session <ArrowUpRight className="ml-1 size-4" />
            </a>
          </Button>
          <Button variant="heroGlass" asChild>
            <a href="#services">Explore Services</a>
          </Button>
        </div>
      </div>

      {/* Footer bar */}
      <div className="relative z-10 w-full border-t border-border/30 mt-auto">
        <div className="max-w-[var(--max)] mx-auto px-[var(--gutter)] py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-body text-xs text-foreground/45">
            © 2026 The Body. All rights reserved. Charlotte, NC.
          </span>
          <nav className="flex items-center gap-6">
            {FOOTER_LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="font-body text-xs text-foreground/45 hover:text-foreground/80 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
}
