import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SubCardProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  className?: string;
  highlight?: boolean;
}

export const SubCard = ({
  title,
  subtitle,
  children,
  className,
  highlight = false,
}: SubCardProps) => {
  return (
    <div
      className={cn(
        "bg-secondary/50 border border-border/50 rounded-md p-3 transition-all duration-200",
        "hover:bg-secondary hover:shadow-sm",
        highlight && "border-accent/30 bg-accent/5",
        className
      )}
    >
      <div className="font-medium text-xs text-foreground mb-1">{title}</div>
      {subtitle && (
        <div className="text-[10px] text-muted-foreground italic">{subtitle}</div>
      )}
      {children}
    </div>
  );
};
