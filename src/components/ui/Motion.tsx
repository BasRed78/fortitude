'use client';

import { ReactNode, useEffect, useRef, useState } from 'react';

/* ===== FADE IN ===== */
/* Fade and optionally slide content in on scroll using IntersectionObserver.
   Honors prefers-reduced-motion automatically via CSS. */

interface FadeInProps {
  children: ReactNode;
  className?: string;
  /** Direction to slide from */
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  /** Delay in ms (stagger children by incrementing) */
  delay?: number;
  /** Duration in ms */
  duration?: number;
  /** Distance to slide in px */
  distance?: number;
  /** IntersectionObserver threshold (0-1) */
  threshold?: number;
  /** Only animate once */
  once?: boolean;
}

export function FadeIn({
  children,
  className = '',
  direction = 'up',
  delay = 0,
  duration = 600,
  distance = 24,
  threshold = 0.1,
  once = true,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Check for reduced motion preference
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReduced) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, once]);

  const translateMap = {
    up: `translateY(${distance}px)`,
    down: `translateY(-${distance}px)`,
    left: `translateX(${distance}px)`,
    right: `translateX(-${distance}px)`,
    none: 'none',
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'none' : translateMap[direction],
        transition: `opacity ${duration}ms var(--ease-default) ${delay}ms, transform ${duration}ms var(--ease-default) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

/* ===== STAGGER GROUP ===== */
/* Wraps children and staggers their FadeIn delays automatically */

interface StaggerGroupProps {
  children: ReactNode;
  className?: string;
  /** Base delay for first child in ms */
  baseDelay?: number;
  /** Increment between children in ms */
  staggerDelay?: number;
}

export function StaggerGroup({
  children,
  className = '',
  baseDelay = 0,
  staggerDelay = 100,
}: StaggerGroupProps) {
  const childArray = Array.isArray(children) ? children : [children];

  return (
    <div className={className}>
      {childArray.map((child, i) => (
        <FadeIn key={i} delay={baseDelay + i * staggerDelay}>
          {child}
        </FadeIn>
      ))}
    </div>
  );
}

/* ===== REVEAL TEXT ===== */
/* For hero statement moments: text reveals character by character or word by word.
   Used sparingly on the Home page only per briefing. */

interface RevealTextProps {
  children: string;
  className?: string;
  /** Reveal by word or character */
  by?: 'word' | 'character';
  /** Base delay before animation starts */
  delay?: number;
  /** Stagger between units */
  stagger?: number;
}

export function RevealText({
  children,
  className = '',
  by = 'word',
  delay = 200,
  stagger = 50,
}: RevealTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReduced) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const units = by === 'word' ? children.split(' ') : children.split('');
  const separator = by === 'word' ? '\u00A0' : '';

  return (
    <span ref={ref} className={className} aria-label={children}>
      {units.map((unit, i) => (
        <span
          key={i}
          aria-hidden="true"
          style={{
            display: 'inline-block',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'none' : 'translateY(100%)',
            transition: `opacity 500ms var(--ease-default) ${delay + i * stagger}ms, transform 500ms var(--ease-default) ${delay + i * stagger}ms`,
          }}
        >
          {unit}
          {separator}
        </span>
      ))}
    </span>
  );
}
