import React, { useEffect, useRef } from "react";

export default function CyberGridBg({ scrollY }) {
  const canvasRef = useRef(null);
  const scrollRef = useRef(scrollY);

  // Sync scrollY state with ref for animation loop
  useEffect(() => {
    scrollRef.current = scrollY;
  }, [scrollY]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    // Canvas Resize Logic
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    // Particles configuration
    const numParticles = 85; 
    const particles = [];
    
    const primaryColor = "99, 102, 241"; // Indigo
    const accentColor = "244, 63, 94";  // Rose/Red

    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        radius: Math.random() * 2 + 1.2,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
        color: Math.random() > 0.85 ? accentColor : primaryColor 
      });
    }

    let lastScrollY = scrollRef.current;
    let scrollVelocity = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const currentScrollY = scrollRef.current;
      const scrollDiff = currentScrollY - lastScrollY;
      
      // Calculate smooth velocity for physics effect
      scrollVelocity = scrollDiff * 0.9 + scrollVelocity * 0.1;
      
      particles.forEach((p) => {
        // Fixed: Joined variables properly without spaces
        p.y -= scrollVelocity * 0.25;
        p.vy = scrollVelocity * 0.05 + (p.vy * 0.95);

        p.x += p.vx;
        p.y += p.vy;

        // Screen boundaries
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        // Draw particle glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        
        ctx.shadowBlur = 15;
        ctx.shadowColor = `rgba(${p.color}, 0.7)`;
        ctx.fillStyle = `rgba(${p.color}, 0.9)`;
        ctx.fill();
        
        ctx.shadowBlur = 0;
      });

      // Connect lines
      for (let i = 0; i < numParticles; i++) {
        for (let j = i + 1; j < numParticles; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 140) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            
            const alpha = (1 - distance / 140) * 0.35; 
            ctx.strokeStyle = `rgba(${primaryColor}, ${alpha})`;
            ctx.lineWidth = 1.0;
            ctx.stroke();
          }
        }
      }

      lastScrollY = currentScrollY;
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 bg-zinc-950">
      <canvas ref={canvasRef} className="w-full h-full block" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#09090b_98%)] opacity-60" />
    </div>
  );
}