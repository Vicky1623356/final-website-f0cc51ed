import { Logo } from "./Logo";
import { MessageCircle, Shield, Clock, Server, Zap, Globe } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card/50 border-t border-border py-12 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-48 h-48 bg-primary/5 rounded-full blur-3xl animate-pulse pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-accent/5 rounded-full blur-3xl animate-pulse pointer-events-none" style={{ animationDelay: "1s" }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="hover:scale-105 transition-transform duration-300">
              <Logo size="md" />
            </div>
            <p className="text-muted-foreground text-center md:text-left max-w-md">
              Trusted VPS & RDP Provider | 4+ Years Experience | 5000+ Servers Delivered
            </p>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center float" style={{ animationDuration: "3s" }}>
                <Server className="w-4 h-4 text-primary/60" />
              </div>
              <div className="w-8 h-8 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center float" style={{ animationDuration: "3.5s", animationDelay: "0.5s" }}>
                <Zap className="w-4 h-4 text-accent/60" />
              </div>
              <div className="w-8 h-8 rounded-full bg-success/10 border border-success/20 flex items-center justify-center float" style={{ animationDuration: "4s", animationDelay: "1s" }}>
                <Globe className="w-4 h-4 text-success/60" />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end gap-4">
            <a 
              href="https://t.me/AkshayVps" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary hover:text-primary/80 transition-all duration-300 hover:scale-105 group"
            >
              <MessageCircle className="w-5 h-5 group-hover:animate-pulse" />
              <span className="font-semibold">@AkshayVps</span>
            </a>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2 group">
                <Shield className="w-4 h-4 text-success group-hover:scale-110 transition-transform duration-300" />
                <span>Secure Payments</span>
              </div>
              <div className="flex items-center gap-2 group">
                <Clock className="w-4 h-4 text-primary group-hover:scale-110 transition-transform duration-300" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/50 text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} AkshayVPS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
