'use client';

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

interface AnimatedContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  /** Scroll container that hosts `children`. Defaults to the viewport. */
  container?: Element | string | null;
  distance?: number;
  direction?: 'vertical' | 'horizontal';
  reverse?: boolean;
  duration?: number;
  ease?: string;
  initialOpacity?: number;
  animateOpacity?: boolean;
  scale?: number;
  /** Fraction of the viewport (from the bottom) the element must cross before animating. 0.15 = start at "top 85%". */
  threshold?: number;
  delay?: number;
  disappearAfter?: number;
  disappearDuration?: number;
  disappearEase?: string;
  onComplete?: () => void;
  onDisappearanceComplete?: () => void;
}

/**
 * Scroll-reveal wrapper. Uses IntersectionObserver to detect when the element
 * enters the viewport (the approach used by every other animation on the site,
 * which behaves consistently on iPadOS/iOS Safari) and GSAP to run the tween.
 */
const AnimatedContent: React.FC<AnimatedContentProps> = ({
  children,
  container,
  distance = 100,
  direction = 'vertical',
  reverse = false,
  duration = 0.8,
  ease = 'power3.out',
  initialOpacity = 0,
  animateOpacity = true,
  scale = 1,
  threshold = 0.1,
  delay = 0,
  disappearAfter = 0,
  disappearDuration = 0.5,
  disappearEase = 'power3.in',
  onComplete,
  onDisappearanceComplete,
  className = '',
  ...props
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const axis = direction === 'horizontal' ? 'x' : 'y';
    const offset = reverse ? -distance : distance;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const showFinalState = () => {
      gsap.set(el, { [axis]: 0, scale: 1, opacity: 1, visibility: 'visible' });
    };

    if (reduced || !('IntersectionObserver' in window)) {
      showFinalState();
      return;
    }

    let root: Element | null = null;
    if (container) {
      root = typeof container === 'string' ? document.querySelector(container) : container;
    }

    gsap.set(el, {
      [axis]: offset,
      scale,
      opacity: animateOpacity ? initialOpacity : 1,
      visibility: 'visible'
    });

    const tl = gsap.timeline({
      paused: true,
      delay,
      onComplete: () => {
        onComplete?.();
        if (disappearAfter > 0) {
          gsap.to(el, {
            [axis]: reverse ? distance : -distance,
            scale: 0.8,
            opacity: animateOpacity ? initialOpacity : 0,
            delay: disappearAfter,
            duration: disappearDuration,
            ease: disappearEase,
            onComplete: () => onDisappearanceComplete?.()
          });
        }
      }
    });

    tl.to(el, {
      [axis]: 0,
      scale: 1,
      opacity: 1,
      duration,
      ease
    });

    // A negative bottom rootMargin shrinks the viewport by `threshold` from the
    // bottom, so the observer fires exactly when the element's top crosses the
    // (1 - threshold) line — the same point ScrollTrigger's "top 85%" used.
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        io.disconnect();
        tl.play();
      },
      { root, threshold: 0, rootMargin: `0px 0px -${threshold * 100}% 0px` }
    );
    io.observe(el);

    return () => {
      io.disconnect();
      tl.kill();
    };
  }, [
    container,
    distance,
    direction,
    reverse,
    duration,
    ease,
    initialOpacity,
    animateOpacity,
    scale,
    threshold,
    delay,
    disappearAfter,
    disappearDuration,
    disappearEase,
    onComplete,
    onDisappearanceComplete
  ]);

  return (
    <div ref={ref} className={`invisible ${className}`} {...props}>
      {children}
    </div>
  );
};

export default AnimatedContent;
