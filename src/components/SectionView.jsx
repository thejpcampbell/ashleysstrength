import { motion } from 'framer-motion';
import { ENTRIES } from '../data/entries.js';

export default function SectionView({ section, completed, onOpen, onBack }) {
  // Incomplete devos stay at the top; completed ones sort to the bottom, so the
  // first thing she sees when she opens a section is always fresh. (Stable sort
  // keeps the original order within each group.)
  const inSec = ENTRIES.filter((e) => e.section === section.id)
    .slice()
    .sort((a, b) => (completed.includes(a.id) ? 1 : 0) - (completed.includes(b.id) ? 1 : 0));
  return (
    <div className="seclist">
      <motion.button
        className="back"
        onClick={onBack}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileHover={{ x: -3, color: 'var(--gold-light)' }}
        whileTap={{ scale: 0.96 }}
      >
        &larr; All sections
      </motion.button>
      <motion.div
        className="sechead"
        style={{ color: section.color }}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {section.kicker}
      </motion.div>
      <motion.div
        className="secsub"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {section.desc}
      </motion.div>
      {inSec.map((e, i) => {
        const done = completed.includes(e.id);
        return (
          <motion.div
            key={e.id}
            className={'card' + (done ? ' done' : '')}
            style={{ background: `linear-gradient(155deg, ${section.color}1c, ${section.color}06 60%, rgba(255,255,255,0.01))` }}
            onClick={() => onOpen(e.id)}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.08 + i * 0.045, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{
              y: -4,
              borderColor: done ? 'rgba(232,180,196,.6)' : 'rgba(201,168,76,.45)',
              boxShadow: `0 14px 34px rgba(0,0,0,.45)${done ? ', 0 0 24px rgba(232,180,196,.18)' : ''}`,
            }}
            whileTap={{ scale: 0.99 }}
          >
            <div className="ref">{e.land.ref}</div>
            <h3>{e.title}</h3>
            <div className="peek">{e.carry}</div>
            {done && (
              <div className="done-tag">
                <span className="dot" />
                You were here
              </div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}
