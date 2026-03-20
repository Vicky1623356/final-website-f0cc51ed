import { Logo } from "./Logo";
import { Button } from "./ui/button";
import { MessageCircle, Shield, Server, Award, ChevronDown, Sun } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Summer gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(199_89%_95%)] via-[hsl(38_92%_95%)] to-[hsl(158_64%_94%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Decorative summer shapes */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-[hsl(38_92%_50%/0.1)] rounded-full blur-2xl animate-pulse pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-48 h-48 bg-[hsl(199_89%_48%/0.08)] rounded-full blur-3xl animate-pulse pointer-events-none" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-[hsl(158_64%_52%/0.06)] rounded-full blur-3xl animate-pulse pointer-events-none" style={{ animationDelay: "2s" }} />
      <div className="absolute top-40 left-1/3 w-20 h-20 bg-[hsl(340_82%_65%/0.08)] rounded-full blur-2xl animate-pulse pointer-events-none" style={{ animationDelay: "1.5s" }} />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="flex flex-col items-center gap-8 max-w-4xl mx-auto">
          {/* Animated Logo */}
          <div className="fade-up float">
            <Logo size="lg" />
          </div>
          
          {/* Badge */}
          <div className="fade-up animation-delay-200 inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium backdrop-blur-sm">
            <Sun className="w-4 h-4 text-accent" />
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-success"></span>
            </span>
            Trusted by 5000+ Customers Worldwide
          </div>
          
          {/* Heading */}
          <h1 className="fade-up animation-delay-200 text-4xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight text-foreground">
            Premium <span className="gradient-text">VPS & RDP</span> Hosting
          </h1>
          
          {/* Subtitle */}
          <p className="fade-up animation-delay-400 text-lg md:text-xl text-muted-foreground max-w-2xl">
            Trusted by developers, traders, and businesses worldwide. 
            Experience lightning-fast servers with 24/7 reliability.
          </p>
          
          {/* Stats */}
          <div className="fade-up animation-delay-600 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-4 w-full max-w-3xl">
            <StatCard icon={<Award className="w-6 h-6" />} value="4+" label="Years Experience" />
            <StatCard icon={<Server className="w-6 h-6" />} value="5000+" label="Servers Sold" />
            <StatCard icon={<Shield className="w-6 h-6" />} value="99.9%" label="Uptime" />
            <StatCard icon={<MessageCircle className="w-6 h-6" />} value="24/7" label="Support" />
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6 fade-up">
            <Button variant="hero" size="xl" onClick={() => document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' })} className="group">
              View Server Plans
              <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button variant="outline" size="xl" asChild>
              <a href="https://t.me/AkshayVps" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                Contact on Telegram
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/40 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
}

const StatCard = ({ icon, value, label }: StatCardProps) => (
  <div className="group flex flex-col items-center gap-2 p-4 rounded-2xl bg-card/70 backdrop-blur border border-border/40 hover:border-primary/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_8px_30px_hsl(199_89%_48%/0.12)]">
    <div className="text-primary group-hover:scale-110 transition-transform duration-300">{icon}</div>
    <span className="text-2xl md:text-3xl font-bold font-mono text-primary">{value}</span>
    <span className="text-sm text-muted-foreground">{label}</span>
  </div>
);
