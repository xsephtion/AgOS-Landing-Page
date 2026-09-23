'use client';

import { useEffect } from 'react';

// Lights the step nearest the middle of the viewport, and its panel. Only matters on
// wide screens, where the panels share one sticky column; CSS ignores the classes below it.
export function StoryScroll() {
  useEffect(() => {
    const grid = document.querySelector<HTMLElement>('[data-story]');
    if (!grid) return;
    const steps = [...grid.querySelectorAll<HTMLElement>('[data-step]')];
    const panels = [...grid.querySelectorAll<HTMLElement>('[data-panel]')];
    let current = -1;
    let frame = 0;

    const pick = () => {
      frame = 0;
      const mid = window.innerHeight / 2;
      let best = 0;
      let bestDistance = Infinity;
      steps.forEach((step, i) => {
        const r = step.getBoundingClientRect();
        const d = r.top > mid ? r.top - mid : r.bottom < mid ? mid - r.bottom : 0;
        if (d < bestDistance) { bestDistance = d; best = i; }
      });
      if (best === current) return;
      current = best;
      steps.forEach((s, i) => s.classList.toggle('is-active', i === best));
      panels.forEach((p, i) => p.classList.toggle('is-active', i === best));
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(pick); };

    grid.classList.add('is-live');
    pick();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);
  return null;
}
