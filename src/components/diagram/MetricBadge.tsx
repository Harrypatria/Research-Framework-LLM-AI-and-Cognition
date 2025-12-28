import { cn } from "@/lib/utils";

interface MetricBadgeProps {
  value: string;
  label: string;
  className?: string;
}

export const MetricBadge = ({ value, label, className }: MetricBadgeProps) => {
  return (
    <div
      className={cn(
        "flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-3 py-1.5",
        "animate-pulse-subtle",
        className
      )}
    >
      <span className="text-lg font-bold text-accent">{value}</span>
      <span className="text-xs text-muted-foreground">{label}</span>
    </div>
  );
};
