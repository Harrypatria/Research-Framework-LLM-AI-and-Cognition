import { useEffect, useState } from "react";

interface Connection {
  id: string;
  path: string;
  animated?: boolean;
  delay?: number;
}

export const ConnectionLines = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const connections: Connection[] = [
    // WP2/WP3 to ML Pipeline
    { id: "conn1", path: "M 180 120 L 180 160", delay: 0 },
    { id: "conn2", path: "M 360 120 L 360 160", delay: 100 },
    { id: "conn3", path: "M 540 120 L 540 160", delay: 200 },
    
    // ML Pipeline to Real-Time Adaptation
    { id: "conn4", path: "M 360 260 L 360 320", delay: 300, animated: true },
    
    // Real-Time Adaptation to bottom sections
    { id: "conn5", path: "M 180 440 L 180 500", delay: 400 },
    { id: "conn6", path: "M 360 440 L 360 500", delay: 500 },
    { id: "conn7", path: "M 540 440 L 540 500", delay: 600 },
    
    // Cross connections to Use Cases
    { id: "conn8", path: "M 720 180 L 800 180", delay: 400, animated: true },
    
    // Use Cases to Industry Validation
    { id: "conn9", path: "M 900 260 L 900 320", delay: 500 },
    
    // Industry to Expected Outcomes
    { id: "conn10", path: "M 900 420 L 900 500", delay: 600 },
  ];

  if (!isVisible) return null;

  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      style={{ overflow: "visible" }}
    >
      <defs>
        <marker
          id="arrowhead"
          markerWidth="10"
          markerHeight="7"
          refX="9"
          refY="3.5"
          orient="auto"
        >
          <polygon
            points="0 0, 10 3.5, 0 7"
            fill="hsl(var(--diagram-line))"
            opacity="0.6"
          />
        </marker>
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.3" />
          <stop offset="50%" stopColor="hsl(var(--accent))" stopOpacity="0.8" />
          <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.3" />
        </linearGradient>
      </defs>
      
      {connections.map((conn) => (
        <path
          key={conn.id}
          d={conn.path}
          className={conn.animated ? "connection-line-animated" : "connection-line"}
          style={{
            animationDelay: `${conn.delay}ms`,
            stroke: conn.animated ? "url(#lineGradient)" : "hsl(var(--diagram-line))",
            strokeOpacity: conn.animated ? 1 : 0.4,
          }}
          markerEnd="url(#arrowhead)"
        />
      ))}
    </svg>
  );
};
