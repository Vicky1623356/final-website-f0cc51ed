import { Server, Wifi, Shield, Cpu, Zap, Globe } from "lucide-react";

interface AnimatedServerIconProps {
  variant?: "server" | "wifi" | "shield" | "cpu" | "zap" | "globe";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const iconMap = {
  server: Server,
  wifi: Wifi,
  shield: Shield,
  cpu: Cpu,
  zap: Zap,
  globe: Globe,
};

const sizeMap = {
  sm: "w-5 h-5",
  md: "w-8 h-8",
  lg: "w-12 h-12",
};

const containerSizeMap = {
  sm: "w-10 h-10",
  md: "w-14 h-14",
  lg: "w-20 h-20",
};

export const AnimatedServerIcon = ({ variant = "server", size = "md", className = "" }: AnimatedServerIconProps) => {
  const Icon = iconMap[variant];
  
  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      {/* Outer glow ring */}
      <div className={`absolute ${containerSizeMap[size]} rounded-full bg-accent/10 animate-ping`} style={{ animationDuration: "3s" }} />
      {/* Inner container */}
      <div className={`relative ${containerSizeMap[size]} rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center backdrop-blur-sm`}>
        <Icon className={`${sizeMap[size]} text-accent`} />
      </div>
    </div>
  );
};

export const FloatingIcons = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-[15%] left-[8%] float" style={{ animationDelay: "0s", animationDuration: "4s" }}>
      <div className="w-8 h-8 rounded-lg bg-accent/5 border border-accent/10 flex items-center justify-center">
        <Server className="w-4 h-4 text-accent/30" />
      </div>
    </div>
    <div className="absolute top-[25%] right-[10%] float" style={{ animationDelay: "1.5s", animationDuration: "5s" }}>
      <div className="w-10 h-10 rounded-lg bg-primary/5 border border-primary/10 flex items-center justify-center">
        <Shield className="w-5 h-5 text-primary/30" />
      </div>
    </div>
    <div className="absolute bottom-[30%] left-[5%] float" style={{ animationDelay: "0.8s", animationDuration: "4.5s" }}>
      <div className="w-9 h-9 rounded-lg bg-success/5 border border-success/10 flex items-center justify-center">
        <Cpu className="w-4 h-4 text-success/30" />
      </div>
    </div>
    <div className="absolute top-[60%] right-[7%] float" style={{ animationDelay: "2s", animationDuration: "3.5s" }}>
      <div className="w-8 h-8 rounded-lg bg-accent/5 border border-accent/10 flex items-center justify-center">
        <Zap className="w-4 h-4 text-accent/30" />
      </div>
    </div>
    <div className="absolute bottom-[15%] right-[20%] float" style={{ animationDelay: "1s", animationDuration: "5.5s" }}>
      <div className="w-7 h-7 rounded-lg bg-primary/5 border border-primary/10 flex items-center justify-center">
        <Globe className="w-3 h-3 text-primary/30" />
      </div>
    </div>
    <div className="absolute top-[40%] left-[15%] float" style={{ animationDelay: "2.5s", animationDuration: "4s" }}>
      <div className="w-6 h-6 rounded-full bg-accent/5 border border-accent/10 flex items-center justify-center">
        <Wifi className="w-3 h-3 text-accent/20" />
      </div>
    </div>
  </div>
);
