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
        "flex items-center gap-1 bg-accent/10 border border-accent/20 rounded-full px-2 py-1",
        "animate-pulse-subtle",
        className
      )}
    >
      <span className="text-sm font-bold text-accent">{value}</span>
      <span className="text-[9px] text-muted-foreground">{label}</span>
    </div>
  );
};
