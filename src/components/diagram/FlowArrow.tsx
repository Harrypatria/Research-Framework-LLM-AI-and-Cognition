import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

interface FlowArrowProps {
  className?: string;
  delay?: number;
}

export const FlowArrow = ({ className, delay = 0 }: FlowArrowProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={cn(
        "flex justify-center items-center py-2 transition-all duration-500",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2",
        className
      )}
    >
      <div className="flex flex-col items-center">
        <div className="w-0.5 h-6 bg-gradient-to-b from-accent/20 to-accent/60 rounded-full" />
        <div className="relative">
          <ChevronDown 
            className="w-5 h-5 text-accent animate-bounce" 
            style={{ animationDuration: "1.5s" }}
          />
          <ChevronDown 
            className="w-5 h-5 text-accent/40 absolute top-0 left-0 animate-ping" 
            style={{ animationDuration: "2s" }}
          />
        </div>
      </div>
    </div>
  );
};
