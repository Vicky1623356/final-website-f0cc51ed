import { useEffect, useState } from "react";
import { Eye } from "lucide-react";

const DOMAIN = "akshayvps-hosting.lovable.app";

export const VisitorCounter = () => {
  const [count, setCount] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const visitorKey = "akshayvps_counted";

    const fetchCount = async () => {
      try {
        const alreadyCounted = sessionStorage.getItem(visitorKey);

        if (!alreadyCounted) {
          const res = await fetch("https://visitor.6developer.com/visit", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ domain: DOMAIN }),
            signal: AbortSignal.timeout(5000),
          });
          if (res.ok) {
            const data = await res.json();
            setCount(data.totalCount ?? data.count ?? null);
            sessionStorage.setItem(visitorKey, "true");
          } else {
            throw new Error("API error");
          }
        } else {
          const res = await fetch(
            `https://visitor.6developer.com/visit?domain=${DOMAIN}`,
            { signal: AbortSignal.timeout(5000) }
          );
          if (res.ok) {
            const data = await res.json();
            setCount(data.totalCount ?? data.count ?? null);
          } else {
            throw new Error("API error");
          }
        }
      } catch {
        const cached = localStorage.getItem("akshayvps_cached_count");
        if (cached) setCount(parseInt(cached, 10));
      } finally {
        setLoading(false);
      }
    };

    fetchCount();
  }, []);

  useEffect(() => {
    if (count !== null) {
      localStorage.setItem("akshayvps_cached_count", count.toString());
    }
  }, [count]);

  return (
    <div className="flex items-center gap-2 px-3 py-1.5 bg-card/80 backdrop-blur-sm border border-border/50 rounded-full text-sm group hover:border-primary/40 transition-all duration-300">
      <div className="relative">
        <Eye className="w-4 h-4 text-primary" />
        <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-success rounded-full animate-pulse" />
      </div>
      {loading ? (
        <span className="text-muted-foreground animate-pulse">...</span>
      ) : (
        <>
          <span className="font-mono font-bold text-primary">
            {count !== null ? count.toLocaleString() : "—"}
          </span>
          <span className="text-muted-foreground text-xs">visitors</span>
        </>
      )}
    </div>
  );
};
