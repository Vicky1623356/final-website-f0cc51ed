import { MessageCircle } from "lucide-react";

export const StickyTelegramButton = () => {
  return (
    <a
      href="https://t.me/AkshayVps"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-5 py-3 bg-success text-success-foreground rounded-full font-semibold shadow-lg pulse-glow hover:scale-105 transition-transform duration-300"
    >
      <MessageCircle className="w-5 h-5" />
      <span className="hidden sm:inline">Chat on Telegram</span>
    </a>
  );
};
