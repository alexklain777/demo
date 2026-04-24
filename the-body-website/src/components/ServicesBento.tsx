import { motion } from "motion/react";
import { ArrowUpRight, Fingerprint, Waves, Flame, Layers, Wind, Sparkles } from "lucide-react";
import { BlurText } from "@/components/BlurText";
import { SERVICES } from "@/lib/constants";

const ICONS = { Fingerprint, Waves, Flame, Layers, Wind, Sparkles } as Record<string, React.FC<{ className?: string }>>;

const CARD_CLASSES = [
  "md:row-span-2 md:col-span-1 p-8 min-h-[480px]",
  "md:col-span-1 p-6 min-h-[224px]",
  "md:col-span-1 p-6 min-h-[224px]",
  "md:col-span-2 p-7 min-h-[224px]",
  "md:col-span-1 p-6 min-h-[224px]",
  "md:col-span-3 p-7 min-h-[180px]",
];

export function ServicesBento() {
  return (
    <section id="services" className="relative py-28 md:py-40">
      <div className="max-w-[var(--max)] mx-auto px-[var(--gutter)]">
        {/* Header */}
        <div className="flex flex-col items-start gap-4 mb-12">
          <span className="liquid-glass rounded-full px-4 py-1.5 text-xs font-body text-foreground/80 tracking-widest uppercase">
            What We Offer
          </span>
          <BlurText
            text="Every treatment. One intention."
            className="font-display font-light text-4xl md:text-6xl leading-[0.9] tracking-tight max-w-[18ch]"
          />
          <p className="font-body text-sm text-foreground/60 max-w-[44ch] leading-relaxed">
            From targeted body sculpting to immersive cedar rituals — every service
            is designed to produce results you can see and feel.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {SERVICES.map((service, i) => {
            const Icon = ICONS[service.icon];
            return (
              <motion.div
                key={service.title}
                className={`liquid-glass rounded-2xl relative overflow-hidden group flex flex-col ${CARD_CLASSES[i]}`}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 260, damping: 26 }}
              >
                <div className="liquid-glass-strong rounded-full w-11 h-11 flex items-center justify-center mb-5 shrink-0">
                  {Icon && <Icon className="size-5 text-foreground" />}
                </div>
                <h3 className="font-display uppercase text-2xl md:text-3xl leading-[0.95] tracking-tight mb-3 max-w-[18ch]">
                  {service.title}
                </h3>
                <p className="font-body text-sm text-foreground/60 max-w-[38ch] leading-relaxed">
                  {service.body}
                </p>
                <ArrowUpRight className="mt-auto self-end size-5 text-foreground/25 group-hover:text-foreground/70 transition-colors" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
