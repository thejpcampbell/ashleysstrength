import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { SECTIONS, ENTRIES } from './data/entries.js';
import { useCompleted } from './hooks/useCompleted.js';
import Aurora from './components/Aurora.jsx';
import LightRibbons from './components/LightRibbons.jsx';
import Home from './components/Home.jsx';
import SectionView from './components/SectionView.jsx';
import Entry from './components/Entry.jsx';

export default function App() {
  const [view, setView] = useState({ screen: 'home' });
  const { isComplete, toggleComplete, completed } = useCompleted();

  const section = view.sectionId ? SECTIONS.find((s) => s.id === view.sectionId) : null;
  const entry = view.entryId ? ENTRIES.find((e) => e.id === view.entryId) : null;

  // scroll to top whenever the screen changes (instant — smooth scroll lags on older iPads)
  const go = (next) => {
    setView(next);
    window.scrollTo(0, 0);
  };

  const transition = { duration: 0.22, ease: [0.22, 1, 0.36, 1] };

  return (
    <>
      <Aurora />
      <LightRibbons />
      <div className="wrap">
        <motion.div
          className="masthead"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="crown">For the quiet ten minutes</div>
          <h1>Ashley&rsquo;s Strength</h1>
          <div className="sub">Somewhere steady to land.</div>
          <div className="hairline" />
        </motion.div>

        <AnimatePresence mode="wait">
          {view.screen === 'home' && (
            <motion.div key="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={transition}>
              <Home completed={completed} onOpenSection={(id) => go({ screen: 'section', sectionId: id })} />
            </motion.div>
          )}

          {view.screen === 'section' && section && (
            <motion.div key={'sec-' + section.id} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }} transition={transition}>
              <SectionView
                section={section}
                completed={completed}
                onOpen={(id) => go({ screen: 'reader', entryId: id, sectionId: section.id })}
                onBack={() => go({ screen: 'home' })}
              />
            </motion.div>
          )}

          {view.screen === 'reader' && entry && (
            <motion.div key={'ent-' + entry.id} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }} transition={transition}>
              <Entry
                entry={entry}
                isDone={isComplete(entry.id)}
                onComplete={toggleComplete}
                onBack={() => go({ screen: 'section', sectionId: entry.section })}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
