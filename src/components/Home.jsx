import { motion } from 'framer-motion';
import { SECTIONS, ENTRIES } from '../data/entries.js';

// "Where are you today?" — four section doors. Staggered reveal, each card
// lifts and its color-glow swells on hover/press. Gentle "visited" record only.
export default function Home({ completed, onOpenSection }) {
  return (
    <div className="home">
      <motion.div
        className="prompt"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Where are you today?
      </motion.div>
      {SECTIONS.map((s, i) => {
        const inSec = ENTRIES.filter((e) => e.section === s.id);
        const done = inSec.filter((e) => completed.includes(e.id)).length;
        return (
          <motion.button
            key={s.id}
            className="section-card"
            style={{ '--sc': s.color, background: `linear-gradient(155deg, ${s.color}2b, ${s.color}0a 55%, rgba(255,255,255,0.012))` }}
            onClick={() => onOpenSection(s.id)}
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.36, delay: 0.05 + i * 0.05, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -5, boxShadow: `0 18px 44px rgba(0,0,0,.5), 0 0 34px ${s.color}33` }}
            whileTap={{ scale: 0.985 }}
          >
            <motion.div
              className="glow"
              animate={{ opacity: [0.55, 0.92, 0.55] }}
              transition={{ duration: 5 + i * 0.8, repeat: Infinity, ease: 'easeInOut' }}
            />
            <div className="kicker">{s.kicker}</div>
            <h2>{s.title}</h2>
            <div className="desc">{s.desc}</div>
            <div className="meta">
              <span>
                {inSec.length} {inSec.length === 1 ? 'entry' : 'entries'}
              </span>
              {done > 0 && <span className="progress">· {done} visited</span>}
            </div>
          </motion.button>
        );
      })}
    </div>
  );
}
