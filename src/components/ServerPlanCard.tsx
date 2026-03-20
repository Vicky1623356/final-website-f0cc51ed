import { useState } from "react";
import { Button } from "./ui/button";
import amdRyzenLogo from "@/assets/amd-ryzen-logo.png";
import { 
  Cpu, 
  MemoryStick, 
  HardDrive, 
  Wifi, 
  Clock, 
  Zap, 
  Shield,
  Copy,
  Check,
  MessageCircle,
  Star,
  Calendar
} from "lucide-react";
import { toast } from "sonner";
import type { ServerPlan } from "@/data/serverPlans";

const countryFlags: Record<string, string> = {
  "India": "🇮🇳",
  "Europe": "🇪🇺",
  "United Kingdom": "🇬🇧",
  "UK": "🇬🇧",
  "London": "🇬🇧",
  "USA": "🇺🇸",
  "Singapore": "🇸🇬",
  "Japan": "🇯🇵",
  "Canada": "🇨🇦",
  "Germany": "🇩🇪",
  "Amsterdam": "🇳🇱",
  "Netherlands": "🇳🇱",
  "France": "🇫🇷",
  "Australia": "🇦🇺",
  "North America": "🌎",
  "Multiple": "🌍",
};

const getFlag = (location: string): string => {
  return countryFlags[location] || "🌍";
};

const parseLocations = (locationString: string): string[] => {
  return locationString.split(",").map(loc => loc.trim());
};

interface ServerPlanCardProps {
  plan: ServerPlan;
  onBuy: () => void;
  termsAccepted: boolean;
}

export const ServerPlanCard = ({ plan, onBuy, termsAccepted }: ServerPlanCardProps) => {
  const [copied, setCopied] = useState(false);
  const locations = parseLocations(plan.location);
  const isMultiLocation = locations.length > 1;

  const specs = `${plan.name} - ₹${plan.price}
Location: ${plan.location}
RAM: ${plan.ram} | CPU: ${plan.cores}
Storage: ${plan.storage}
Bandwidth: ${plan.bandwidth}
${plan.latency ? `Latency: ${plan.latency}` : ""}
${plan.speed ? `Speed: up to ${plan.speed}` : ""}
Validity: ${plan.validity}
Warranty: ${plan.warranty}`;

  const copySpecs = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(specs);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = specs;
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        textArea.style.top = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
          document.execCommand("copy");
        } catch (err) {
          console.error("Fallback copy failed:", err);
        }
        document.body.removeChild(textArea);
      }
      setCopied(true);
      toast.success("Specs copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error("Failed to copy specs");
      console.error("Copy failed:", err);
    }
  };

  const handleBuy = () => {
    const message = encodeURIComponent(`Hi, I'm interested in purchasing the ${plan.name} plan (₹${plan.price})`);
    const telegramUrl = `https://t.me/AkshayVps?text=${message}`;
    window.open(telegramUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div data-plan-id={plan.id} className={`plan-card relative transition-all duration-500 ${plan.featured ? 'ring-2 ring-primary/30' : ''}`}>
      {plan.featured && (
        <div className="popular-badge">
          <Star className="w-3 h-3" fill="currentColor" />
          POPULAR
        </div>
      )}

      {plan.tag && (
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold rounded-full bg-primary/10 border border-primary/20 text-primary">
            {plan.tag}
          </span>
          {plan.tag.includes("AMD Ryzen") && (
            <img 
              src={amdRyzenLogo} 
              alt="AMD Ryzen" 
              className="h-8 w-8 rounded object-cover"
            />
          )}
        </div>
      )}

      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-heading font-bold text-foreground">{plan.name}</h3>
        </div>
        <div className="text-right">
          <span className="text-3xl font-mono font-bold text-primary">₹{plan.price}</span>
          <p className="text-xs text-muted-foreground">/month</p>
        </div>
      </div>

      <div className="mb-4 p-3 bg-secondary/50 rounded-xl border border-border/40">
        <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wide">
          {isMultiLocation ? "Available Locations" : "Location"}
        </p>
        <div className="flex flex-wrap gap-2">
          {locations.map((loc, idx) => (
            <div 
              key={idx}
              className="flex items-center gap-1.5 px-2 py-1 bg-card rounded-lg text-sm"
            >
              <span className="text-base">{getFlag(loc)}</span>
              <span className="text-foreground font-medium">{loc}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="space-y-3 mb-4">
        <SpecRow icon={<MemoryStick className="w-4 h-4" />} label="RAM" value={plan.ram} />
        <SpecRow icon={<Cpu className="w-4 h-4" />} label="CPU" value={plan.cores} />
        <SpecRow icon={<HardDrive className="w-4 h-4" />} label="Storage" value={plan.storage} />
        {!plan.bandwidth.startsWith("Unlimited") && (
          <SpecRow icon={<Wifi className="w-4 h-4" />} label="Bandwidth" value={plan.bandwidth} />
        )}
        {plan.latency && <SpecRow icon={<Clock className="w-4 h-4" />} label="Latency" value={plan.latency} />}
        {plan.speed && <SpecRow icon={<Zap className="w-4 h-4" />} label="Speed" value={`up to ${plan.speed}`} />}
      </div>

      {plan.bandwidth.startsWith("Unlimited") && (
        <div className="mb-4 p-3 bg-primary/5 rounded-xl border border-primary/15">
          <div className="flex items-center gap-2 mb-2">
            <Wifi className="w-4 h-4 text-primary" />
            <span className="text-xs font-bold uppercase tracking-wide text-primary">Unlimited Bandwidth</span>
          </div>
          {(() => {
            const bwMatch = plan.bandwidth.match(/Per day (\d+TB) Bandwidth ([\d.]+Gbps) After (\d+Mbps)/);
            const dailyBw = bwMatch ? bwMatch[1] : "3TB";
            const speedLimit = bwMatch ? bwMatch[2] : "2.5 Gbps";
            const afterSpeed = bwMatch ? bwMatch[3] : "200 Mbps";
            return (
              <div className="space-y-1.5 text-xs text-muted-foreground">
                <div className="flex items-center justify-between">
                  <span>Daily Bandwidth</span>
                  <span className="font-mono font-semibold text-foreground">{dailyBw}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Speed (within limit)</span>
                  <span className="font-mono font-semibold text-foreground">{speedLimit}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>After limit speed</span>
                  <span className="font-mono font-semibold text-foreground">{afterSpeed}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Resets</span>
                  <span className="font-mono font-semibold text-primary">Next Day</span>
                </div>
              </div>
            );
          })()}
        </div>
      )}

      <div className="flex gap-2 mb-4">
        <div className="flex-1 p-2 bg-primary/10 rounded-xl border border-primary/20 text-center">
          <div className="flex items-center justify-center gap-1 text-primary mb-1">
            <Calendar className="w-3.5 h-3.5" />
            <span className="text-xs uppercase tracking-wide font-medium">Validity</span>
          </div>
          <span className="font-mono font-semibold text-sm text-foreground">{plan.validity}</span>
        </div>
        <div className="flex-1 p-2 bg-success/10 rounded-xl border border-success/20 text-center">
          <div className="flex items-center justify-center gap-1 text-success mb-1">
            <Shield className="w-3.5 h-3.5" />
            <span className="text-xs uppercase tracking-wide font-medium">Warranty</span>
          </div>
          <span className="font-mono font-semibold text-sm text-foreground">{plan.warranty}</span>
        </div>
      </div>
      
      {plan.extras && plan.extras.length > 0 && (
        <div className="mb-4 p-2 bg-success/10 rounded-xl border border-success/20">
          {plan.extras.map((extra, i) => (
            <p key={i} className="text-xs text-success flex items-center gap-1">
              <Check className="w-3 h-3" /> {extra}
            </p>
          ))}
        </div>
      )}
      
      <div className="flex gap-2 relative z-10">
        <Button 
          type="button"
          variant="copy" 
          size="sm" 
          className="flex-1 cursor-pointer" 
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            copySpecs();
          }}
        >
          {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
          {copied ? "Copied" : "Copy Specs"}
        </Button>
        <Button 
          type="button"
          variant="success" 
          size="sm" 
          className="flex-1 cursor-pointer" 
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            handleBuy();
          }}
        >
          <MessageCircle className="w-4 h-4" />
          DM to Buy
        </Button>
      </div>
    </div>
  );
};

interface SpecRowProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

const SpecRow = ({ icon, label, value }: SpecRowProps) => (
  <div className="flex items-center justify-between text-sm">
    <div className="flex items-center gap-2 text-muted-foreground">
      <span className="text-primary">{icon}</span>
      {label}
    </div>
    <span className="font-mono font-medium text-foreground">{value}</span>
  </div>
);
