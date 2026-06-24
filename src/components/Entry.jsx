import { motion } from 'framer-motion';
import Footer from './Footer.jsx';

// One entry, five movements, top to bottom. Each movement rises and settles in
// sequence (a soft spring), the verse and the word given a little more presence.
// Single Mark Complete — a record, not a goal.
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13, delayChildren: 0.05 } },
};
const rise = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Entry({ entry, isDone, onComplete, onBack }) {
  return (
    <motion.div className="reader" variants={container} initial="hidden" animate="show">
      <motion.button
        className="back"
        onClick={onBack}
        variants={rise}
        whileHover={{ x: -3, color: 'var(--gold-light)' }}
        whileTap={{ scale: 0.96 }}
      >
        &larr; Back
      </motion.button>

      <motion.div className="land" variants={rise}>
        <div className="label">Land</div>
        <motion.div
          className="verse"
          initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.9, delay: 0.25, ease: 'easeOut' }}
        >
          {entry.land.text}
        </motion.div>
        <div className="csb">{entry.land.ref} &nbsp;·&nbsp; Christian Standard Bible</div>
      </motion.div>

      <motion.div className="where" variants={rise}>
        <div className="label">Where this sits</div>
        <p>{entry.where}</p>
      </motion.div>

      <motion.div className="word" variants={rise} whileHover={{ y: -2 }}>
        <div className="label">The word</div>
        <motion.div
          className="term"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.45, ease: [0.34, 1.56, 0.64, 1] }}
        >
          {entry.word.term}
        </motion.div>
        <div className="translit">{entry.word.translit}</div>
        <div className="gloss">{entry.word.gloss}</div>
        <div className="note">{entry.word.note}</div>
      </motion.div>

      <motion.div className="reflect" variants={rise}>
        <div className="label">Rest in it</div>
        {entry.reflect.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </motion.div>

      <motion.div className="carry" variants={rise}>
        <div className="label">Carry</div>
        <p>{entry.carry}</p>
      </motion.div>

      <motion.div variants={rise}>
        <motion.button
          className={'complete' + (isDone ? ' done' : '')}
          onClick={() => onComplete(entry.id)}
          whileTap={{ scale: 0.97 }}
          animate={isDone ? { scale: [1, 1.03, 1] } : { scale: 1 }}
          transition={{ duration: 0.45 }}
        >
          {isDone ? '♥  You were here' : 'Mark complete'}
        </motion.button>
        <Footer />
      </motion.div>
    </motion.div>
  );
}
