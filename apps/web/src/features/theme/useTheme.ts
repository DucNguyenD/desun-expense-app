import { useEffect, useState } from 'react';

type Theme = 'sage' | 'indigo' | 'clay';

export default function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    try { const saved = localStorage.getItem('desun-theme'); return saved === 'indigo' || saved === 'clay' ? saved : 'sage'; } catch { return 'sage'; }
  });
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem('desun-theme', theme); } catch { /* Preview also works without storage. */ }
  }, [theme]);
  return { theme, setTheme };
}
