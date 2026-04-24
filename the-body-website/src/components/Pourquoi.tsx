import { motion } from "motion/react";
import { Award, UserCheck, Eye, Heart } from "lucide-react";
import { BlurText } from "@/components/BlurText";
import { REASONS } from "@/lib/constants";

const ICONS = { Award, UserCheck, Eye, Heart } as Record<string, React.FC<{ className?: string }>>;

export function Pourquoi() {
  return (
    <section id="about" className="relative py-28 md:py-40 border-t border-border/40">
      <div className="max-w-[var(--max)] mx-auto px-[var(--gutter)]">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="liquid-glass rounded-full px-4 py-1.5 text-xs font-body text-foreground/80 tracking-widest uppercase">
            Why The Body
          </span>
          <BlurText
            text="Not your ordinary studio."
            className="mt-4 font-display font-light text-4xl md:text-6xl leading-[0.9] tracking-tight max-w-[20ch] mx-auto"
          />
          <motion.p
            initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="mt-4 font-body text-sm text-foreground/60 max-w-[42ch] mx-auto leading-relaxed"
          >
            Nine years of expertise. A deeply personal approach. Results you can
            see from your very first session.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {REASONS.map((reason, i) => {
            const Icon = ICONS[reason.icon];
            return (
              <motion.div
                key={reason.title}
                className="liquid-glass rounded-2xl p-7 flex flex-col gap-5 min-h-[260px]"
                initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                  delay: i * 0.1,
                }}
              >
                <div className="liquid-glass-strong rounded-full w-11 h-11 flex items-center justify-center">
                  {Icon && <Icon className="size-5 text-foreground" />}
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-display uppercase text-xl tracking-tight">
                    {reason.title}
                  </h3>
                  <p className="font-body text-sm text-foreground/60 leading-relaxed">
                    {reason.body}
                  </p>
                </div>
                <div className="mt-auto h-px w-10 bg-gradient-to-r from-primary to-transparent" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
