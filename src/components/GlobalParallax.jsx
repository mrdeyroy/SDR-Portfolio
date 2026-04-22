import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { useEffect, useState } from 'react';

const GlobalParallax = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth out mouse movement
  const springConfig = { damping: 25, stiffness: 150 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Geometric shapes configuration
  const shapes = [
    { type: 'circle', size: 40, top: '15%', left: '10%', depth: 0.1, color: 'bg-blue-500/10' },
    { type: 'square', size: 60, top: '25%', left: '85%', depth: 0.2, color: 'bg-purple-500/10' },
    { type: 'triangle', size: 50, top: '45%', left: '5%', depth: 0.15, color: 'bg-pink-500/10' },
    { type: 'circle', size: 100, top: '65%', left: '80%', depth: 0.25, color: 'bg-emerald-500/10' },
    { type: 'square', size: 30, top: '85%', left: '15%', depth: 0.12, color: 'bg-amber-500/10' },
    { type: 'circle', size: 80, top: '92%', left: '70%', depth: 0.18, color: 'bg-indigo-500/10' },
    { type: 'circle', size: 120, top: '10%', left: '60%', depth: 0.22, color: 'bg-red-500/10' },
    { type: 'triangle', size: 70, top: '75%', left: '40%', depth: 0.1, color: 'bg-cyan-500/10' },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {shapes.map((shape, index) => {
        // Calculate movement based on mouse position and depth
        const x = useTransform(smoothMouseX, (val) => (val - window.innerWidth / 2) * shape.depth);
        const y = useTransform(smoothMouseY, (val) => (val - window.innerHeight / 2) * shape.depth);

        return (
          <motion.div
            key={index}
            style={{
              x,
              y,
              top: shape.top,
              left: shape.left,
              width: shape.size,
              height: shape.size,
            }}
            className={`absolute ${shape.color} backdrop-blur-[1px] border border-white/5 dark:border-white/10`}
            animate={{
              rotate: [0, 360],
              borderRadius: shape.type === 'circle' ? '50%' : shape.type === 'triangle' ? '20% 80% 30% 70%' : '12px',
            }}
            transition={{
              rotate: { duration: 20 + index * 5, repeat: Infinity, ease: 'linear' },
              borderRadius: { duration: 10, repeat: Infinity, repeatType: 'reverse' },
            }}
          />
        );
      })}
    </div>
  );
};

export default GlobalParallax;
