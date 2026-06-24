import { useCallback, useState } from 'react';

// Ashley's PERSONAL one-phone site — storage is localStorage, nothing more.
// No server, no sync, no /api, no env vars (spec §6). Stores ONLY the list of
// completed entry ids: a gentle record, never a goal. She can un-complete by
// tapping again — her control entirely.
const KEY = 'ashleys_strength_completed';

function load() {
  try {
    const v = JSON.parse(localStorage.getItem(KEY));
    return Array.isArray(v) ? v : [];
  } catch {
    return [];
  }
}

export function useCompleted() {
  const [completed, setCompleted] = useState(load);

  const toggleComplete = useCallback((id) => {
    setCompleted((prev) => {
      const next = prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id];
      try {
        localStorage.setItem(KEY, JSON.stringify(next));
      } catch {}
      return next;
    });
  }, []);

  const isComplete = useCallback((id) => completed.includes(id), [completed]);

  return { completed, isComplete, toggleComplete };
}
