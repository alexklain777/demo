import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAV_ITEMS } from "@/lib/constants";

export function Navbar() {
  const [scrolled,    setScrolled]    = useState(false);
  const [mobileOpen,  setMobileOpen]  = useState(false);
  const [activeHref,  setActiveHref]  = useState("");
  const { scrollY } = useScroll();
  const observersRef = useRef<IntersectionObserver[]>([]);

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 40));

  useEffect(() => {
    NAV_ITEMS.forEach(({ href }) => {
      const el = document.querySelector(href) as HTMLElement | null;
      if (!el) return;
      const io = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveHref(href); },
        { threshold: 0.4 }
      );
      io.observe(el);
      observersRef.current.push(io);
    });
    return () => observersRef.current.forEach((io) => io.disconnect());
  }, []);

  return (
    <>
      <motion.header
        data-scrolled={scrolled}
        className="fixed z-50 left-1/2 -translate-x-1/2 w-[min(1200px,calc(100vw-32px))]"
        animate={{ top: scrolled ? 8 : 16 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="liquid-glass rounded-full px-2 py-2 flex items-center justify-between gap-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 pl-3">
            <span className="font-display text-xl font-light tracking-[0.12em] text-foreground">
              THE BODY
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative px-3.5 py-2 text-sm font-body text-foreground/75 hover:text-foreground transition-colors"
              >
                {item.label}
                {activeHref === item.href && (
                  <motion.span
                    layoutId="nav-dot"
                    className="absolute bottom-1 left-1/2 -translate-x-1/2 h-[3px] w-[3px] rounded-full bg-primary"
                  />
                )}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <Button variant="heroSolid" size="sm" asChild>
            <a href="#booking">
              Book Now <ArrowUpRight className="ml-1 size-4" />
            </a>
          </Button>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden liquid-glass rounded-full p-2 text-foreground/80 hover:text-foreground transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile full-screen menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          className="fixed inset-0 z-40 liquid-glass-strong flex flex-col items-center justify-center gap-8 md:hidden"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="font-display italic text-4xl text-foreground/90 hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
          <Button variant="hero" asChild className="mt-4">
            <a href="#booking" onClick={() => setMobileOpen(false)}>
              Book Now <ArrowUpRight className="ml-1 size-4" />
            </a>
          </Button>
        </motion.div>
      )}
    </>
  );
}
