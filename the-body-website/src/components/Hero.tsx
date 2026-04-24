import { useRef } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BlurText } from "@/components/BlurText";
import { ScrubSequence } from "@/components/ScrubSequence";
import { FRAMES_PATH, FRAME_COUNT, FRAME_EXT, PARTNERS } from "@/lib/constants";

type Props = {
  scrollRef: React.RefObject<HTMLElement | null>;
};

export function Hero({ scrollRef }: Props) {
  const sectionRef = scrollRef as React.RefObject<HTMLElement>;

  return (
    <section
      ref={sectionRef}
      className="relative h-[250vh] bg-background"
      aria-labelledby="hero-heading"
    >
      <p className="sr-only">
        The Body — Premium body sculpting and wellness rituals in Charlotte, NC.
        Scroll to explore our services.
      </p>

      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Fallback gradient background (shows when no frames are loaded) */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 80% at 50% 60%, #2a1a10 0%, #14110d 60%, #0d0b09 100%)",
          }}
        />

        {/* Frame-scrub canvas */}
        <ScrubSequence
          framesPath={FRAMES_PATH}
          frameCount={FRAME_COUNT}
          ext={FRAME_EXT}
          scrollTargetRef={sectionRef}
          className="absolute inset-0 w-full h-full z-[1]"
        />

        {/* Cinematic vignette */}
        <div className="absolute inset-0 z-[2] bg-[radial-gradient(120%_80%_at_50%_55%,transparent_35%,rgba(0,0,0,0.60)_100%)]" />

        {/* Bottom fade */}
        <div className="absolute bottom-0 inset-x-0 h-[40vh] z-[3] gradient-fade-b" />

        {/* Hero content */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="liquid-glass rounded-full px-1 py-1 inline-flex items-center gap-2">
              <span className="bg-foreground text-background rounded-full px-3 py-1 text-xs font-semibold tracking-wide">
                Charlotte, NC
              </span>
              <span className="pr-3 text-sm text-foreground/85 font-body font-light">
                Body Sculpting &amp; Wellness Studio
              </span>
            </div>
          </motion.div>

          {/* Headline */}
          <BlurText
            text="Feel the Difference."
            as="h1"
            id="hero-heading"
            className="mt-6 font-display font-light text-[clamp(52px,9vw,140px)] leading-[0.92] tracking-[-0.01em] text-foreground max-w-[14ch]"
            delay={0.09}
            startDelay={0.2}
          />

          {/* Sub */}
          <motion.p
            initial={{ filter: "blur(10px)", opacity: 0, y: 16 }}
            animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 font-body font-light text-base md:text-lg text-foreground/70 max-w-lg leading-relaxed"
          >
            Premium bodywork and wellness rituals designed around your body.
            Where expert technique meets visible transformation.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="mt-10 flex items-center gap-3 flex-wrap justify-center"
          >
            <Button variant="hero" asChild>
              <a href="#booking">
                Book a Session <ArrowUpRight className="ml-1 size-4" />
              </a>
            </Button>
            <Button variant="heroGlass">
              <Play className="mr-1.5 size-4 fill-current" /> Explore Services
            </Button>
          </motion.div>

          {/* Partners / services marquee row */}
          <div className="absolute bottom-10 inset-x-0 flex flex-col items-center gap-4">
            <span className="liquid-glass rounded-full px-4 py-1.5 text-xs font-body text-foreground/70 tracking-widest uppercase">
              Our Specialties
            </span>
            <div className="flex items-center gap-8 md:gap-14 flex-wrap justify-center px-6">
              {PARTNERS.map((p) => (
                <span
                  key={p}
                  className="font-display italic text-xl md:text-2xl text-foreground/55 tracking-tight"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
