import { Quote } from "lucide-react";
import { BlurText } from "@/components/BlurText";
import { TESTIMONIALS } from "@/lib/constants";

type Testimonial = { quote: string; name: string; role: string };

function TestimonialCard({ quote, name, role }: Testimonial) {
  return (
    <div className="liquid-glass rounded-2xl p-7 w-[340px] md:w-[400px] shrink-0 flex flex-col gap-5">
      <Quote className="size-5 text-primary/70" />
      <p className="font-body text-foreground/85 italic leading-relaxed text-[15px] flex-1">
        "{quote}"
      </p>
      <div className="flex items-center gap-3">
        <div className="size-9 rounded-full bg-gradient-to-br from-primary/50 to-secondary/50 shrink-0" />
        <div>
          <p className="font-body font-medium text-sm text-foreground">{name}</p>
          <p className="font-body text-xs text-foreground/55 uppercase tracking-wide">{role}</p>
        </div>
      </div>
    </div>
  );
}

const row1 = [...TESTIMONIALS, ...TESTIMONIALS] as Testimonial[];
const row2 = [
  ...TESTIMONIALS.slice(3),
  ...TESTIMONIALS.slice(0, 3),
  ...TESTIMONIALS.slice(3),
  ...TESTIMONIALS.slice(0, 3),
] as Testimonial[];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-28 md:py-40">
      <div className="max-w-[var(--max)] mx-auto px-[var(--gutter)]">
        <div className="text-center mb-16">
          <span className="liquid-glass rounded-full px-4 py-1.5 text-xs font-body text-foreground/80 tracking-widest uppercase">
            Client Stories
          </span>
          <BlurText
            text="They felt it. Now read it."
            className="mt-4 font-display font-light text-4xl md:text-6xl leading-[0.9] tracking-tight mx-auto"
          />
        </div>
      </div>

      {/* Marquee rows */}
      <div
        className="relative flex flex-col gap-5 overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        {/* Row 1 — forward */}
        <div
          className="group flex gap-5 w-max"
          style={{ animation: "marquee 30s linear infinite" }}
        >
          {row1.map((t, i) => (
            <div key={i} style={{ animationPlayState: "inherit" }}>
              <TestimonialCard {...t} />
            </div>
          ))}
        </div>

        {/* Row 2 — reverse */}
        <div
          className="group flex gap-5 w-max"
          style={{ animation: "marquee-rev 36s linear infinite" }}
        >
          {row2.map((t, i) => (
            <div key={i} style={{ animationPlayState: "inherit" }}>
              <TestimonialCard {...t} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
