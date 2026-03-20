import { useState } from "react";
import { serverPlans } from "@/data/serverPlans";
import { ServerPlanCard } from "./ServerPlanCard";
import { Button } from "./ui/button";
import { Server, Wifi, RefreshCw, Zap } from "lucide-react";
import { AnimateOnScroll } from "./AnimateOnScroll";
import { AnimatedServerIcon, FloatingIcons } from "./AnimatedServerIcon";

interface PlansGridProps {
  termsAccepted: boolean;
}

export const PlansGrid = ({ termsAccepted }: PlansGridProps) => {
  const [activeCategory, setActiveCategory] = useState<"all" | "bandwidth-limit" | "renewal" | "best-offer">("all");

  const categories = [
    { id: "all", label: "All Plans", icon: <Server className="w-4 h-4" /> },
    { id: "bandwidth-limit", label: "Bandwidth Limit", icon: <Server className="w-4 h-4" /> },
    { id: "renewal", label: "Renewal Servers", icon: <RefreshCw className="w-4 h-4" /> },
    { id: "best-offer", label: "Unlimited Bandwidth Best Offer 🔥", icon: <Zap className="w-4 h-4" /> },
  ] as const;

  const filteredPlans = activeCategory === "all" 
    ? serverPlans 
    : serverPlans.filter(plan => plan.category === activeCategory);

  const renderPlanCards = (plans: typeof serverPlans) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {plans.map((plan, idx) => (
        <AnimateOnScroll key={plan.id} delay={idx * 80}>
          <ServerPlanCard 
            plan={plan} 
            onBuy={() => {}} 
            termsAccepted={termsAccepted}
          />
        </AnimateOnScroll>
      ))}
    </div>
  );

  return (
    <section id="plans" className="py-20 bg-background relative overflow-hidden">
      {/* Floating animated icons */}
      <FloatingIcons />
      
      {/* Decorative gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <AnimateOnScroll>
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <AnimatedServerIcon variant="server" size="lg" />
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
              Server <span className="gradient-text">Plans</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose from our wide range of VPS and RDP servers. All plans include 24/7 support and guaranteed uptime.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Category Filter */}
        <AnimateOnScroll delay={100}>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((cat) => (
              <div key={cat.id} className="relative">
                <Button
                  variant={activeCategory === cat.id ? "default" : "outline"}
                  size="lg"
                  onClick={() => setActiveCategory(cat.id)}
                  className="flex items-center gap-2 transition-all duration-300 hover:scale-105"
                >
                  {cat.icon}
                  {cat.label}
                </Button>
                {cat.id === "best-offer" && (
                  <span className="offer-badge" style={{ top: '-10px', right: '-10px', fontSize: '9px', padding: '2px 8px' }}>
                    NEW
                  </span>
                )}
              </div>
            ))}
          </div>
        </AnimateOnScroll>

        {/* Category Labels */}
        {activeCategory === "all" && (
          <div className="space-y-16">
            <div>
              <AnimateOnScroll>
                <div className="flex items-center gap-3 mb-6">
                  <AnimatedServerIcon variant="server" size="sm" />
                  <h3 className="text-2xl font-heading font-semibold">Bandwidth-Limit Plans</h3>
                </div>
              </AnimateOnScroll>
              {renderPlanCards(serverPlans.filter(p => p.category === "bandwidth-limit"))}
            </div>

            <div>
              <AnimateOnScroll>
                <div className="flex items-center gap-3 mb-6">
                  <AnimatedServerIcon variant="shield" size="sm" />
                  <h3 className="text-2xl font-heading font-semibold">Renewal Servers Plans</h3>
                </div>
              </AnimateOnScroll>
              {renderPlanCards(serverPlans.filter(p => p.category === "renewal"))}
            </div>

            <div>
              <AnimateOnScroll>
                <div className="flex items-center gap-3 mb-6">
                  <AnimatedServerIcon variant="zap" size="sm" />
                  <h3 className="text-2xl font-heading font-semibold">Unlimited Bandwidth – Best Offer 🔥</h3>
                </div>
              </AnimateOnScroll>
              {renderPlanCards(serverPlans.filter(p => p.category === "best-offer"))}
            </div>
          </div>
        )}

        {/* Filtered View */}
        {activeCategory !== "all" && renderPlanCards(filteredPlans)}
      </div>
    </section>
  );
};
