import React, { useState, useRef, useEffect } from 'react';

interface ClickSparkProps {
  children: React.ReactNode;
  sparkColor?: string;
  sparkSize?: number;
  sparkRadius?: number;
  sparkCount?: number;
  duration?: number;
  className?: string; // Added this prop
}

interface Spark {
  id: number;
  x: number;
  y: number;
  angle: number;
}

const ClickSpark: React.FC<ClickSparkProps> = ({
  children,
  sparkColor = '#a3e635', // Lime-400
  sparkSize = 10,
  sparkRadius = 15,
  sparkCount = 8,
  duration = 400,
  className = "", // Default empty
}) => {
  const [sparks, setSparks] = useState<Spark[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sparks.length > 0) {
      const timeout = setTimeout(() => {
        setSparks([]);
      }, duration);
      return () => clearTimeout(timeout);
    }
  }, [sparks, duration]);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newSparks = Array.from({ length: sparkCount }).map((_, i) => ({
      id: Date.now() + i,
      x,
      y,
      angle: (360 / sparkCount) * i,
    }));

    setSparks(newSparks);
  };

  return (
    <div
      ref={containerRef}
      // Changed 'inline-block' to 'block' and added the className prop
      className={`relative block w-full ${className}`}
      onClick={handleClick}
      // Removed cursor: pointer so the whole page doesn't look like a link
      // style={{ cursor: 'pointer' }} 
    >
      {children}
      
      {sparks.map((spark) => (
        <span
          key={spark.id}
          className="absolute pointer-events-none block rounded-full animate-ping z-50" // Added z-50 so sparks appear on top
          style={{
            left: spark.x,
            top: spark.y,
            width: sparkSize,
            height: sparkSize,
            backgroundColor: sparkColor,
            borderRadius: '50%',
            transform: `rotate(${spark.angle}deg) translate(${sparkRadius}px)`,
            opacity: 0,
            animation: `spark-fade ${duration}ms ease-out forwards`,
          }}
        />
      ))}
      
      <style>{`
        @keyframes spark-fade {
          0% { transform: translate(-50%, -50%) scale(0); opacity: 1; }
          100% { transform: translate(-50%, -50%) var(--tw-translate) scale(0); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default ClickSpark;