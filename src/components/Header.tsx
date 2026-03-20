import { useState } from "react";
import { Logo } from "./Logo";
import { Button } from "./ui/button";
import { MessageCircle, Menu, X, Zap } from "lucide-react";
import { VisitorCounter } from "./VisitorCounter";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-xl border-b border-border/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14 md:h-20">
          <div className="hover:scale-105 transition-transform duration-300">
            <Logo size="sm" />
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <NavLink href="#plans">
              <Zap className="w-3 h-3 text-accent" />
              Plans
            </NavLink>
            <NavLink href="#faq">FAQ</NavLink>
            <NavLink href="#terms">Terms</NavLink>
            <VisitorCounter />
          </nav>

          <div className="flex items-center gap-2 md:hidden">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>

          <Button variant="success" size="sm" asChild className="hidden md:flex hover:scale-105 transition-transform duration-300">
            <a href="https://t.me/AkshayVps" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-4 h-4" />
              Contact
            </a>
          </Button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/30 animate-fade-in">
            <nav className="flex flex-col gap-3">
              <MobileNavLink href="#plans" onClick={() => setMobileMenuOpen(false)}>Plans</MobileNavLink>
              <MobileNavLink href="#faq" onClick={() => setMobileMenuOpen(false)}>FAQ</MobileNavLink>
              <MobileNavLink href="#terms" onClick={() => setMobileMenuOpen(false)}>Terms</MobileNavLink>
              <div className="pt-2">
                <VisitorCounter />
              </div>
              <Button variant="success" size="sm" asChild className="mt-2 w-full">
                <a href="https://t.me/AkshayVps" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4" />
                  Contact on Telegram
                </a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a 
    href={href}
    className="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-all duration-300 text-sm font-medium hover:scale-105"
  >
    {children}
  </a>
);

const MobileNavLink = ({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void }) => (
  <a 
    href={href}
    onClick={onClick}
    className="text-foreground hover:text-primary transition-colors text-base font-medium py-2 px-3 rounded-lg hover:bg-secondary/50"
  >
    {children}
  </a>
);
