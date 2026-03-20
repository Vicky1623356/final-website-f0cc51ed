import logoImg from "@/assets/logo.png";

interface LogoProps {
  variant?: "full" | "icon" | "text";
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizeConfig = {
  sm: { img: "w-8 h-8", text: "text-lg" },
  md: { img: "w-10 h-10", text: "text-2xl" },
  lg: { img: "w-16 h-16", text: "text-3xl" },
};

export const Logo = ({ variant = "full", className = "", size = "md" }: LogoProps) => {
  const config = sizeConfig[size];

  if (variant === "icon") {
    return (
      <div className={className}>
        <img src={logoImg} alt="AkshayVPS Logo" className={`${config.img} rounded-lg logo-animate`} />
      </div>
    );
  }

  if (variant === "text") {
    return (
      <span className={`font-heading font-bold ${config.text} ${className}`}>
        Akshay<span className="text-primary">Vps</span>
      </span>
    );
  }

  return (
    <div className={`flex items-center gap-3 logo-animate ${className}`}>
      <img src={logoImg} alt="AkshayVPS Logo" className={`${config.img} rounded-lg`} />
      <span className={`font-heading font-bold ${config.text}`}>
        Akshay<span className="text-primary">Vps</span>
      </span>
    </div>
  );
};
