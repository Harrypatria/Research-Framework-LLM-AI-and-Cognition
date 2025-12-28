import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface DiagramCardProps {
  title: string;
  wpLabel?: string;
  wpColor?: "wp1" | "wp2" | "wp3" | "wp4" | "wp5" | "wp6";
  children?: ReactNode;
  className?: string;
  animationDelay?: string;
  variant?: "default" | "highlight" | "metric";
}

const wpColorMap = {
  wp1: "bg-wp1 text-primary-foreground",
  wp2: "bg-wp2 text-accent-foreground",
  wp3: "bg-wp3 text-accent-foreground",
  wp4: "bg-wp4 text-accent-foreground",
  wp5: "bg-wp5 text-accent-foreground",
  wp6: "bg-wp6 text-accent-foreground",
};

const wpBorderMap = {
  wp1: "hover:border-wp1/50",
  wp2: "hover:border-wp2/50",
  wp3: "hover:border-wp3/50",
  wp4: "hover:border-wp4/50",
  wp5: "hover:border-wp5/50",
  wp6: "hover:border-wp6/50",
};

export const DiagramCard = ({
  title,
  wpLabel,
  wpColor = "wp1",
  children,
  className,
  animationDelay = "",
  variant = "default",
}: DiagramCardProps) => {
  return (
    <div
      className={cn(
        "diagram-card p-4 animate-fade-in-up",
        wpBorderMap[wpColor],
        variant === "highlight" && "border-2",
        variant === "metric" && "bg-secondary/50",
        animationDelay,
        className
      )}
    >
      <div className="flex items-start gap-2 mb-2">
        {wpLabel && (
          <span className={cn("wp-badge shrink-0", wpColorMap[wpColor])}>
            {wpLabel}
          </span>
        )}
        <h3 className="font-semibold text-sm leading-tight text-foreground">
          {title}
        </h3>
      </div>
      {children && (
        <div className="text-xs text-muted-foreground space-y-1">
          {children}
        </div>
      )}
    </div>
  );
};
