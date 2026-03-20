import { Megaphone, AlertTriangle, Info, CheckCircle } from "lucide-react";
import { broadcastMessages } from "@/data/serverPlans";

const typeConfig = {
  info: {
    bg: "bg-primary/10 border-primary/20",
    icon: <Info className="w-4 h-4 text-primary shrink-0" />,
    text: "text-primary",
  },
  warning: {
    bg: "bg-accent/10 border-accent/20",
    icon: <AlertTriangle className="w-4 h-4 text-accent shrink-0" />,
    text: "text-accent",
  },
  success: {
    bg: "bg-success/10 border-success/20",
    icon: <CheckCircle className="w-4 h-4 text-success shrink-0" />,
    text: "text-success",
  },
};

export const BroadcastBar = () => {
  if (broadcastMessages.length === 0) return null;

  return (
    <div className="relative z-30 mt-14 md:mt-20">
      {broadcastMessages.map((msg) => {
        const config = typeConfig[msg.type];
        return (
          <div
            key={msg.id}
            className={`${config.bg} border-b backdrop-blur-md`}
          >
            <div className="container mx-auto px-4 py-2.5 flex items-center gap-3">
              <div className="flex items-center gap-2 shrink-0">
                <Megaphone className={`w-4 h-4 ${config.text} animate-pulse`} />
                {config.icon}
              </div>
              <p className="text-sm text-foreground flex-1">
                <span className={`font-semibold ${config.text}`}>{msg.date}: </span>
                {msg.message}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
