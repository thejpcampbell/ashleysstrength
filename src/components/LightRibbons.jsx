import { useMemo } from 'react';

// Flowing curtains of colored light — angled, soft, slowly swaying. Replaces the
// particle field. Each ribbon is a blurred vertical band that only translates +
// fades (GPU-composited), so many can run smoothly.
const COLORS = [
  'rgba(242,194,208,', // rose
  'rgba(216,184,94,', // gold
  'rgba(181,156,255,', // violet
  'rgba(134,224,192,', // teal
];

export default function LightRibbons({ count = 5 }) {
  const ribbons = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => {
        const peak = 0.14 + ((i * 3) % 3) * 0.04; // 0.14–0.22
        const color = COLORS[i % 4] + peak + ')';
        const left = -14 + i * (118 / count) + ((i * 5) % 6) - 3;
        const width = 11 + ((i * 7) % 13); // 11–24vw
        const rot = (i % 2 ? 1 : -1) * (8 + ((i * 4) % 12)); // ~-20..20deg
        const swayX = (i % 2 ? 1 : -1) * (4 + ((i * 3) % 5)); // vw
        const dur = 16 + ((i * 13) % 16); // 16–32s
        const delay = -((i * 3.1) % 30);
        const o0 = 0.32 + ((i * 5) % 4) * 0.07;
        const o1 = 0.62 + ((i * 7) % 3) * 0.12;
        return { color, left, width, rot, swayX, dur, delay, o0, o1, key: i };
      }),
    [count]
  );

  return (
    <div aria-hidden style={{ position: 'fixed', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
      {ribbons.map((r) => (
        <span
          key={r.key}
          style={{
            position: 'absolute',
            top: '-28vh',
            left: `${r.left}%`,
            width: `${r.width}vw`,
            height: '120vh',
            background: `linear-gradient(90deg, transparent, ${r.color}, transparent)`,
            filter: 'blur(8px)',
            transformOrigin: 'center',
            '--rot': `${r.rot}deg`,
            '--swayX': `${r.swayX}vw`,
            '--o0': r.o0,
            '--o1': r.o1,
            animation: `ribbonSway ${r.dur}s ease-in-out ${r.delay}s infinite`,
            willChange: 'transform, opacity',
          }}
        />
      ))}
    </div>
  );
}
