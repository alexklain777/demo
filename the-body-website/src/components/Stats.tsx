import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { BlurText } from "@/components/BlurText";
import { STATS } from "@/lib/constants";

function AnimatedStat({ value }: { value: string }) {
  const ref    = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  const numericPart  = value.replace(/[^0-9.]/g, "");
  const suffix       = value.replace(/[0-9.]/g, "");
  const target       = parseFloat(numericPart) || 0;
  const isPercentage = suffix.includes("%");
  const hasPlus      = suffix.includes("+");

  return (
    <span ref={ref} className="font-display italic text-5xl md:text-6xl lg:text-7xl leading-none text-foreground">
      {inView ? (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {numericPart}
        </motion.span>
      ) : (
        <span>0</span>
      )}
      <span className="text-primary">{isPercentage ? "%" : hasPlus ? "+" : suffix.replace(/[%+]/, "")}</span>
    </span>
  );
}

export function Stats() {
  return (
    <section className="relative py-32 md:py-44 overflow-hidden">
      {/* Animated gradient background (video placeholder) */}
      <div className="absolute inset-0 bg-video-placeholder" />

      {/* Gradient fades */}
      <div className="absolute top-0 inset-x-0 h-[200px] z-[1] gradient-fade-t" />
      <div className="absolute bottom-0 inset-x-0 h-[200px] z-[1] gradient-fade-b" />

      <div className="relative z-10 max-w-[var(--max)] mx-auto px-[var(--gutter)]">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="liquid-glass rounded-full px-4 py-1.5 text-xs font-body text-foreground/80 tracking-widest uppercase">
            By the Numbers
          </span>
          <BlurText
            text="Results you can measure."
            className="mt-4 font-display font-light text-4xl md:text-5xl leading-[0.9] tracking-tight mx-auto"
          />
        </div>

        {/* Stats card */}
        <div className="liquid-glass rounded-3xl p-10 md:p-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {STATS.map((stat, i) => (
              <div key={stat.label} className="flex flex-col gap-3 relative">
                {/* Desktop separator */}
                {i > 0 && (
                  <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-px h-12 bg-border" />
                )}
                <AnimatedStat value={stat.value} />
                <p className="font-body text-xs text-foreground/55 uppercase tracking-widest mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
