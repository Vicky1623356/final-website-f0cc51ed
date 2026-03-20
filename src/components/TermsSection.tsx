import { Checkbox } from "./ui/checkbox";
import { termsAndConditions } from "@/data/serverPlans";
import { AlertTriangle, XCircle, CheckCircle } from "lucide-react";
import { AnimateOnScroll } from "./AnimateOnScroll";
import { AnimatedServerIcon } from "./AnimatedServerIcon";

interface TermsSectionProps {
  accepted: boolean;
  onAcceptChange: (accepted: boolean) => void;
}

export const TermsSection = ({ accepted, onAcceptChange }: TermsSectionProps) => {
  return (
    <section id="terms" className="py-20 bg-background relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-destructive/5 rounded-full blur-3xl animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl animate-pulse pointer-events-none" style={{ animationDelay: "1s" }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <AnimateOnScroll>
            <div className="text-center mb-12">
              <div className="flex justify-center mb-4">
                <AnimatedServerIcon variant="shield" size="md" />
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-destructive/10 rounded-full text-destructive text-sm font-medium mb-4">
                <AlertTriangle className="w-4 h-4 animate-pulse" />
                Important Notice
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Terms & <span className="text-destructive">Conditions</span>
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Any abuse, spam, or activity causing provider complaints is strictly prohibited.
                <br />
                <span className="text-sm text-primary">VPN Rule: Only Chrome-extension-based VPN allowed.</span>
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <div className="bg-card border border-destructive/20 rounded-2xl p-8 mb-8">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-destructive animate-pulse" />
                Prohibited Activities
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {termsAndConditions.map((term, index) => (
                  <AnimateOnScroll key={index} delay={index * 50}>
                    <div 
                      className="flex items-center gap-2 p-3 bg-destructive/5 rounded-xl border border-destructive/15 hover:border-destructive/30 hover:bg-destructive/10 transition-all duration-300 group"
                    >
                      <XCircle className="w-4 h-4 text-destructive shrink-0 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-sm text-foreground">{term}</span>
                    </div>
                  </AnimateOnScroll>
                ))}
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={200}>
            <div 
              className={`p-6 rounded-2xl border-2 transition-all duration-500 ${
                accepted 
                  ? 'border-success bg-success/5 shadow-[0_0_30px_hsl(158_64%_52%/0.1)]' 
                  : 'border-border bg-card hover:border-primary/40'
              }`}
            >
              <label className="flex items-start gap-4 cursor-pointer">
                <Checkbox 
                  checked={accepted} 
                  onCheckedChange={(checked) => onAcceptChange(checked === true)}
                  className="mt-1 w-5 h-5 border-2"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    {accepted ? (
                      <CheckCircle className="w-5 h-5 text-success animate-scale-in" />
                    ) : (
                      <AlertTriangle className="w-5 h-5 text-muted-foreground" />
                    )}
                    <span className={`font-semibold ${accepted ? 'text-success' : 'text-foreground'}`}>
                      {accepted ? 'Terms Accepted' : 'Accept Terms to Continue'}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    I have read and agree to the Terms & Conditions. Violation may lead to suspension without refund.
                  </p>
                </div>
              </label>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};
