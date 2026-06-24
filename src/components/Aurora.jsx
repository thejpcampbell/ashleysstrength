// Soft colored light drifting behind everything. Translate + opacity only
// (GPU-composited) and a modest count so it stays smooth on a phone.
const BLOBS = [
  { color: 'rgba(242,194,208,0.40)', size: '70vw', top: '-12%', left: '-18%', dur: 24, delay: 0, kf: 'auroraFloat' },   // rose
  { color: 'rgba(216,184,94,0.30)',  size: '64vw', top: '14%',  left: '52%',  dur: 29, delay: -6, kf: 'auroraFloat2' }, // gold
  { color: 'rgba(181,156,255,0.28)', size: '66vw', top: '50%',  left: '-24%', dur: 27, delay: -12, kf: 'auroraFloat' }, // violet
  { color: 'rgba(134,224,192,0.22)', size: '58vw', top: '66%',  left: '46%',  dur: 33, delay: -16, kf: 'auroraFloat2' },// teal
];

export default function Aurora() {
  return (
    <div aria-hidden style={{ position: 'fixed', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
      {BLOBS.map((b, i) => (
        <span
          key={i}
          style={{
            position: 'absolute',
            top: b.top,
            left: b.left,
            width: b.size,
            height: b.size,
            borderRadius: '50%',
            background: `radial-gradient(circle, ${b.color}, transparent 66%)`,
            filter: 'blur(14px)',
            animation: `${b.kf} ${b.dur}s ease-in-out ${b.delay}s infinite`,
            willChange: 'transform, opacity',
          }}
        />
      ))}
    </div>
  );
}
