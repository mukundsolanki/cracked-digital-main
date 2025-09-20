'use client';

import { useState, useEffect } from 'react';

interface MaskTransitionProps {
  children: React.ReactNode;
  maskType?:
    | 'reveal'
    | 'slide-up'
    | 'scale-out'
    | 'jagged-mask'
    | 'star-burst'
    | 'lightning-reveal';
  duration?: number;
  delay?: number;
  maskColor?: string;
}

export default function MaskTransition({
  children,
  maskType = 'reveal',
  duration = 1200,
  delay = 0,
  maskColor = '#000000',
}: MaskTransitionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [maskVisible, setMaskVisible] = useState(true);

  useEffect(() => {
    // Show content after delay
    const contentTimer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    // Hide mask after content is shown
    const maskTimer = setTimeout(() => {
      setMaskVisible(false);
    }, delay + 100);

    return () => {
      clearTimeout(contentTimer);
      clearTimeout(maskTimer);
    };
  }, [delay]);

  const getMaskAnimationClass = () => {
    switch (maskType) {
      case 'slide-up':
        return 'animate-mask-slide-up';
      case 'scale-out':
        return 'animate-mask-scale-out';
      case 'jagged-mask':
        return 'animate-jagged-mask';
      case 'star-burst':
        return 'animate-star-burst';
      case 'lightning-reveal':
        return 'animate-lightning-reveal';
      default:
        return 'animate-mask-reveal';
    }
  };

  return (
    <div className='relative overflow-hidden'>
      {/* Content */}
      <div
        className={`transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        {children}
      </div>

      {/* Mask Overlay */}
      {maskVisible && (
        <div
          className={`fixed inset-0 z-50 pointer-events-none ${getMaskAnimationClass()}`}
          style={{
            backgroundColor: maskColor,
            animationDuration: `${duration}ms`,
            animationDelay: `${delay}ms`,
          }}
        />
      )}
    </div>
  );
}
