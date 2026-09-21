'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface RollingNumberProps {
  /** Final value to roll up to, e.g. 94 or 7.8 */
  value: number;
  className?: string;
  /** Duration of the roll for the rightmost digit */
  duration?: number;
  /** Extra duration added per digit of distance from the ones place */
  spin?: number;
  /** Stagger between digit starts */
  stagger?: number;
}

/**
 * Odometer-style number that rolls up from 0 to `value` when scrolled
 * into view. Each digit column spins one full revolution plus its final
 * digit, landing exactly on target. No masks or gradients — digits are
 * sized in `em` so nothing gets clipped.
 */
export default function RollingNumber({
  value,
  className = '',
  duration = 1.5,
  spin = 0.35,
  stagger = 0.09,
}: RollingNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const playedRef = useRef(false);

  const chars = value.toString().split('');

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const strips = Array.from(el.querySelectorAll<HTMLElement>('[data-roll]'));
    if (strips.length === 0) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const tweens: gsap.core.Tween[] = [];

    const roll = () => {
      if (playedRef.current) return;
      playedRef.current = true;
      strips.forEach((strip, index) => {
        const digit = parseInt(strip.dataset.digit ?? '0', 10);
        // Distance from the ones place: ones spin longest, higher digits settle sooner
        const distanceFromOnes = strips.length - 1 - index;
        const proxy = { x: 0 };
        tweens.push(
          gsap.to(proxy, {
            x: 10 + digit,
            duration: duration + distanceFromOnes * spin,
            ease: 'power3.out',
            delay: stagger * distanceFromOnes,
            onUpdate: () => {
              strip.style.transform = `translateY(${-(proxy.x % 10)}em)`;
            },
            onComplete: () => {
              strip.style.transform = `translateY(${-(digit)}em)`;
            },
          })
        );
      });
    };

    if (reduced) {
      // Show the final value immediately, no animation
      strips.forEach((strip) => {
        strip.style.transform = `translateY(${-(parseInt(strip.dataset.digit ?? '0', 10))}em)`;
      });
      return;
    }

    // Start columns at 0 so the number visibly rolls up from zero
    strips.forEach((strip) => {
      strip.style.transform = 'translateY(0em)';
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();
          roll();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      tweens.forEach((tween) => tween.kill());
    };
  }, [value, duration, spin, stagger]);

  return (
    <span
      ref={ref}
      className={`inline-flex font-variant-numeric tabular-nums ${className}`}
      aria-label={value.toString()}
    >
      {chars.map((char, charIndex) => {
        if (!/\d/.test(char)) {
          return (
            <span key={`${char}-${charIndex}`} aria-hidden="true" className="inline-block">
              {char}
            </span>
          );
        }
        return (
          <span
            key={`${char}-${charIndex}`}
            aria-hidden="true"
            className="inline-block h-[1em] w-[1ch] overflow-hidden align-baseline"
          >
            <span data-roll data-digit={char} className="block will-change-transform">
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((digit, digitIndex) => (
                <span
                  key={digitIndex}
                  className="flex h-[1em] w-[1ch] items-center justify-center"
                >
                  {digit}
                </span>
              ))}
            </span>
          </span>
        );
      })}
    </span>
  );
}
