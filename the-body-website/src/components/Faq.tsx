import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { BlurText } from "@/components/BlurText";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ_ITEMS } from "@/lib/constants";

export function Faq() {
  return (
    <section id="faq" className="relative py-28 md:py-40 border-t border-border/40">
      <div className="max-w-[var(--max)] mx-auto px-[var(--gutter)] grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-16">

        {/* Left — sticky heading */}
        <div className="md:sticky md:top-28 md:self-start">
          <span className="liquid-glass rounded-full px-4 py-1.5 text-xs font-body text-foreground/80 tracking-widest uppercase">
            FAQs
          </span>
          <BlurText
            text="Questions answered."
            className="mt-4 font-display font-light text-4xl md:text-5xl leading-[0.9] tracking-tight"
          />
          <motion.p
            initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="mt-4 font-body text-sm text-foreground/60 leading-relaxed max-w-[32ch]"
          >
            Still have questions? We're happy to walk you through anything before
            your first session.
          </motion.p>
          <Button variant="heroGlass" asChild className="mt-8">
            <a href="#booking">
              Book a Consultation <ArrowUpRight className="ml-1 size-4" />
            </a>
          </Button>
        </div>

        {/* Right — accordion */}
        <div>
          <Accordion type="single" collapsible>
            {FAQ_ITEMS.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger>{item.q}</AccordionTrigger>
                <AccordionContent>{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
