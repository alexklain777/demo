import { motion } from "motion/react";
import { BlurText } from "@/components/BlurText";
import { PROCESS_STEPS } from "@/lib/constants";

export function Process() {
  return (
    <section id="rituals" className="relative py-28 md:py-40 border-t border-border/40">
      <div className="max-w-[var(--max)] mx-auto px-[var(--gutter)]">
        {/* Header */}
        <div className="mb-16">
          <span className="liquid-glass rounded-full px-4 py-1.5 text-xs font-body text-foreground/80 tracking-widest uppercase">
            How It Works
          </span>
          <BlurText
            text="Your transformation, step by step."
            className="mt-4 font-display font-light text-4xl md:text-6xl leading-[0.9] tracking-tight max-w-[22ch]"
          />
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-0 relative">
          {PROCESS_STEPS.map((step, i) => (
            <motion.div
              key={step.n}
              className="relative px-0 md:px-8 py-10 md:py-14 flex flex-col gap-4 items-start border-t border-border/30 md:border-t-0 md:border-l first:border-t-0 md:first:border-l-0"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
                delay: i * 0.12,
              }}
            >
              <span className="font-display text-[80px] md:text-[110px] leading-none text-primary/20 -mb-4 select-none">
                {step.n}
              </span>
              <h3 className="font-display uppercase text-2xl md:text-3xl tracking-tight">
                {step.title}
              </h3>
              <p className="font-body text-sm text-foreground/60 leading-relaxed max-w-[28ch]">
                {step.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
