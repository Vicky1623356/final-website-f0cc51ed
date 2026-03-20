import { useState, useEffect, useRef } from "react";
import { serverPlans } from "@/data/serverPlans";
import logoImg from "@/assets/logo.png";
import {
  MessageCircle,
  X,
  Server,
  RefreshCw,
  Zap,
  ChevronRight,
  ArrowLeft,
  ExternalLink,
} from "lucide-react";

type BotStep = "greeting" | "categories" | "plans";

const categoryMeta = {
  "bandwidth-limit": { label: "Bandwidth Limit Plans", icon: <Server className="w-4 h-4" />, emoji: "🖥️" },
  "renewal": { label: "Renewal Server Plans", icon: <RefreshCw className="w-4 h-4" />, emoji: "🔄" },
  "best-offer": { label: "Unlimited Bandwidth 🔥", icon: <Zap className="w-4 h-4" />, emoji: "⚡" },
};

export const PlanBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasGreeted, setHasGreeted] = useState(false);
  const [step, setStep] = useState<BotStep>("greeting");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [bobPosition, setBobPosition] = useState({ x: 0, y: 0 });
  const [isWalking, setIsWalking] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Auto-popup after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasGreeted) {
        setHasGreeted(true);
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, [hasGreeted]);

  // Walking animation for the bot icon
  useEffect(() => {
    if (isOpen) return;
    const walkInterval = setInterval(() => {
      setIsWalking(true);
      setBobPosition({
        x: (Math.random() - 0.5) * 16,
        y: (Math.random() - 0.5) * 12,
      });
      setTimeout(() => setIsWalking(false), 600);
    }, 4000);
    return () => clearInterval(walkInterval);
  }, [isOpen]);

  // Scroll to bottom on step change
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [step, selectedCategory]);

  const handleOpen = () => {
    setIsOpen(true);
    setStep("greeting");
    setSelectedCategory(null);
  };

  const handleCategorySelect = (cat: string) => {
    setSelectedCategory(cat);
    setStep("plans");
  };

  const handlePlanClick = (planId: string) => {
    setIsOpen(false);
    // Scroll to plans section
    const plansSection = document.getElementById("plans");
    if (plansSection) {
      plansSection.scrollIntoView({ behavior: "smooth" });
    }
    // Highlight the specific plan card after scroll
    setTimeout(() => {
      const card = document.querySelector(`[data-plan-id="${planId}"]`);
      if (card) {
        card.scrollIntoView({ behavior: "smooth", block: "center" });
        card.classList.add("ring-4", "ring-primary/50");
        setTimeout(() => card.classList.remove("ring-4", "ring-primary/50"), 3000);
      }
    }, 600);
  };

  const filteredPlans = selectedCategory
    ? serverPlans.filter((p) => p.category === selectedCategory)
    : [];

  return (
    <>
      {/* Floating Bot Button */}
      {!isOpen && (
        <div className="fixed bottom-24 left-6 z-50">
          {/* Greeting bubble */}
          {hasGreeted && (
            <div
              className="absolute -top-16 left-0 bg-card border border-border/60 rounded-2xl rounded-bl-sm px-4 py-2.5 shadow-lg animate-fade-in max-w-[200px] cursor-pointer"
              onClick={handleOpen}
            >
              <p className="text-sm font-medium text-foreground">
                👋 Need help choosing a plan?
              </p>
              <div className="absolute -bottom-1.5 left-3 w-3 h-3 bg-card border-b border-r border-border/60 rotate-45" />
            </div>
          )}

          <button
            onClick={handleOpen}
            className="relative w-14 h-14 rounded-full bg-primary shadow-lg hover:shadow-xl transition-all duration-500 flex items-center justify-center group hover:scale-110"
            style={{
              transform: `translate(${bobPosition.x}px, ${bobPosition.y}px)`,
              transition: isWalking
                ? "transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)"
                : "transform 0.3s ease",
            }}
          >
            <img
              src={logoImg}
              alt="Bot"
              className="w-9 h-9 rounded-full object-cover"
            />
            {/* Online indicator */}
            <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-success rounded-full border-2 border-background animate-pulse" />
            {/* Walking legs animation */}
            {isWalking && (
              <>
                <span className="absolute -bottom-1 left-3 w-1.5 h-3 bg-primary rounded-full animate-[walk-left_0.3s_ease-in-out_infinite_alternate]" />
                <span className="absolute -bottom-1 right-3 w-1.5 h-3 bg-primary rounded-full animate-[walk-right_0.3s_ease-in-out_infinite_alternate-reverse]" />
              </>
            )}
          </button>
        </div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 left-6 z-50 w-[340px] max-h-[480px] bg-card border border-border/60 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-scale-in">
          {/* Header */}
          <div className="flex items-center gap-3 px-4 py-3 bg-primary text-primary-foreground rounded-t-2xl">
            <img src={logoImg} alt="Bot" className="w-8 h-8 rounded-full object-cover ring-2 ring-primary-foreground/30" />
            <div className="flex-1">
              <p className="font-heading font-semibold text-sm">AkshayVPS Bot</p>
              <p className="text-xs opacity-80">Ready to help! 🚀</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-7 h-7 rounded-full bg-primary-foreground/20 hover:bg-primary-foreground/30 flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Chat Body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-[200px] max-h-[340px]">
            {/* Bot greeting message */}
            <BotMessage>
              <p>Hey there! 👋</p>
              <p className="mt-1">I'm here to help you find the perfect server plan. What are you looking for?</p>
            </BotMessage>

            {step === "greeting" && (
              <div className="space-y-2 animate-fade-in">
                <button
                  onClick={() => setStep("categories")}
                  className="w-full flex items-center gap-3 px-4 py-3 bg-primary/10 hover:bg-primary/20 border border-primary/20 rounded-xl text-sm font-medium text-foreground transition-all duration-200 hover:scale-[1.02] group"
                >
                  <Server className="w-5 h-5 text-primary" />
                  <span className="flex-1 text-left">Show me all plans</span>
                  <ChevronRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => {
                    const el = document.getElementById("plans");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                    setIsOpen(false);
                  }}
                  className="w-full flex items-center gap-3 px-4 py-3 bg-secondary/50 hover:bg-secondary border border-border/40 rounded-xl text-sm font-medium text-foreground transition-all duration-200 hover:scale-[1.02] group"
                >
                  <ExternalLink className="w-5 h-5 text-muted-foreground" />
                  <span className="flex-1 text-left">Browse plans on page</span>
                  <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            )}

            {step === "categories" && (
              <>
                <BotMessage>
                  <p>Great! Choose a category: 🎯</p>
                </BotMessage>
                <div className="space-y-2 animate-fade-in">
                  {Object.entries(categoryMeta).map(([key, meta]) => (
                    <button
                      key={key}
                      onClick={() => handleCategorySelect(key)}
                      className="w-full flex items-center gap-3 px-4 py-3 bg-primary/10 hover:bg-primary/20 border border-primary/20 rounded-xl text-sm font-medium text-foreground transition-all duration-200 hover:scale-[1.02] group"
                    >
                      <span className="text-lg">{meta.emoji}</span>
                      <span className="flex-1 text-left">{meta.label}</span>
                      <ChevronRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                    </button>
                  ))}
                  <button
                    onClick={() => setStep("greeting")}
                    className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors mt-1"
                  >
                    <ArrowLeft className="w-3 h-3" />
                    Go back
                  </button>
                </div>
              </>
            )}

            {step === "plans" && selectedCategory && (
              <>
                <BotMessage>
                  <p>Here are the <strong>{categoryMeta[selectedCategory as keyof typeof categoryMeta]?.label}</strong> plans: 📋</p>
                </BotMessage>
                <div className="space-y-2 animate-fade-in">
                  {filteredPlans.map((plan) => (
                    <button
                      key={plan.id}
                      onClick={() => handlePlanClick(plan.id)}
                      className="w-full flex items-center gap-3 px-4 py-3 bg-card hover:bg-primary/10 border border-border/50 hover:border-primary/30 rounded-xl text-sm transition-all duration-200 hover:scale-[1.02] group"
                    >
                      <div className="flex-1 text-left">
                        <div className="flex items-center gap-2">
                          <span className="font-heading font-bold text-foreground">{plan.name}</span>
                          {plan.featured && (
                            <span className="px-1.5 py-0.5 text-[10px] font-bold bg-accent/20 text-accent rounded-full">⭐</span>
                          )}
                        </div>
                        <div className="flex items-center gap-2 mt-0.5">
                          <span className="font-mono font-bold text-primary">₹{plan.price}</span>
                          <span className="text-muted-foreground text-xs">• {plan.ram} • {plan.cores}</span>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                    </button>
                  ))}
                  <button
                    onClick={() => {
                      setStep("categories");
                      setSelectedCategory(null);
                    }}
                    className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors mt-1"
                  >
                    <ArrowLeft className="w-3 h-3" />
                    Other categories
                  </button>
                </div>
              </>
            )}

            <div ref={chatEndRef} />
          </div>

          {/* Footer */}
          <div className="px-4 py-2.5 border-t border-border/40 bg-secondary/30">
            <p className="text-[11px] text-muted-foreground text-center">
              Powered by <span className="font-semibold text-primary">AkshayVPS</span> • DM us on{" "}
              <a href="https://t.me/AkshayVps" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                Telegram
              </a>
            </p>
          </div>
        </div>
      )}

      {/* Walking animation keyframes injected via style tag */}
      <style>{`
        @keyframes walk-left {
          0% { transform: rotate(-15deg) translateY(0); }
          100% { transform: rotate(15deg) translateY(-2px); }
        }
        @keyframes walk-right {
          0% { transform: rotate(15deg) translateY(0); }
          100% { transform: rotate(-15deg) translateY(-2px); }
        }
      `}</style>
    </>
  );
};

const BotMessage = ({ children }: { children: React.ReactNode }) => (
  <div className="flex gap-2 animate-fade-in">
    <div className="w-7 h-7 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 mt-0.5">
      <MessageCircle className="w-3.5 h-3.5 text-primary" />
    </div>
    <div className="bg-secondary/60 border border-border/40 rounded-2xl rounded-tl-sm px-3.5 py-2.5 text-sm text-foreground max-w-[260px]">
      {children}
    </div>
  </div>
);
