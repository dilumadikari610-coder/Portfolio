import React, { useState, useEffect, useRef } from 'react';

function useIntersectionObserver() {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return [ref, isIntersecting];
}

export default function ScrollReveal({ children, delay = 0, direction = "up" }) {
  const [ref, isVisible] = useIntersectionObserver();
  
  const directionClasses = {
    up: "translate-y-16",
    down: "-translate-y-16",
    left: "-translate-x-16",
    right: "translate-x-16",
    scale: "scale-90 opacity-0"
  };

  const transformClass = isVisible 
    ? 'opacity-100 translate-y-0 translate-x-0 scale-100' 
    : `opacity-0 ${directionClasses[direction]}`;

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-1000 ease-out transform ${transformClass}`}
    >
      {children}
    </div>
  );
}