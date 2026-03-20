import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { faqData } from "@/data/serverPlans";
import { HelpCircle } from "lucide-react";
import { AnimateOnScroll } from "./AnimateOnScroll";
import { AnimatedServerIcon } from "./AnimatedServerIcon";

export const FAQSection = () => {
  return (
    <section id="faq" className="py-20 bg-secondary/30 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="absolute top-1/3 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-48 h-48 bg-accent/5 rounded-full blur-3xl animate-pulse pointer-events-none" style={{ animationDelay: "1.5s" }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <AnimateOnScroll>
            <div className="text-center mb-12">
              <div className="flex justify-center mb-4">
                <AnimatedServerIcon variant="globe" size="md" />
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-4 backdrop-blur-sm">
                <HelpCircle className="w-4 h-4 animate-pulse" />
                Got Questions?
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Frequently Asked <span className="gradient-text">Questions</span>
              </h2>
            </div>
          </AnimateOnScroll>

          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((faq, index) => (
              <AnimateOnScroll key={index} delay={index * 100}>
                <AccordionItem 
                  value={`item-${index}`}
                  className="bg-card border border-border/50 rounded-2xl px-6 overflow-hidden hover:border-primary/30 transition-all duration-500 hover:shadow-[0_8px_30px_hsl(199_89%_48%/0.08)]"
                >
                  <AccordionTrigger className="text-left font-semibold hover:text-primary py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </AnimateOnScroll>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
