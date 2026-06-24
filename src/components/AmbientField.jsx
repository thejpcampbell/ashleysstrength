import { useMemo } from 'react';

// Slow gold motes drifting up behind everything — gentle depth, never busy.
const COLORS = [
  { bg: '#F0D292', sh: 'rgba(240,210,146,.5)' }, // gold
  { bg: '#F2C2D0', sh: 'rgba(242,194,208,.55)' }, // rose
  { bg: '#B59CFF', sh: 'rgba(181,156,255,.5)' }, // violet
  { bg: '#86E0C0', sh: 'rgba(134,224,192,.45)' }, // teal
];

export default function AmbientField({ count = 34 }) {
  const motes = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => {
        const left = (i * 33.7) % 100;
        const size = 1.5 + ((i * 7) % 4);
        const duration = 24 + ((i * 13) % 32);
        const delay = -((i * 11) % 55);
        const opacity = 0.16 + ((i * 5) % 5) / 18;
        const sway = ((i * 17) % 28) - 14;
        const c = COLORS[i % 4 === 0 ? (i % 8 === 0 ? 2 : 1) : i % 5 === 0 ? 3 : 0];
        return { left, size, duration, delay, opacity, sway, c, key: i };
      }),
    [count]
  );
  return (
    <div aria-hidden style={{ position: 'fixed', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
      {motes.map((m) => (
        <span
          key={m.key}
          style={{
            position: 'absolute',
            left: `${m.left}%`,
            bottom: '-12px',
            width: m.size,
            height: m.size,
            borderRadius: '9999px',
            background: m.c.bg,
            boxShadow: `0 0 7px ${m.c.sh}`,
            '--mote-opacity': m.opacity,
            '--mote-sway': `${m.sway}px`,
            animation: `motedrift ${m.duration}s linear ${m.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
