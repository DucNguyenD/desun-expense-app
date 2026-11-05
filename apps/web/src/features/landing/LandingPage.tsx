import { useEffect, useRef, useState } from 'react';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';
import AuthPanel from '../auth/AuthPanel';
import type { AuthMode } from '../auth/auth.types';
import ThemePicker from '../theme/ThemePicker';
import Story from './Story';
import './landing.css';

export default function LandingPage() {
  const [open, setOpen] = useState(true);
  const [mode, setMode] = useState<AuthMode>(() => location.pathname === '/register' ? 'register' : 'login');
  const [progress, setProgress] = useState(0);
  const baseline = useRef(0);
  const openRef = useRef(open);
  const userScrollUntil = useRef(0);
  const changeOpen = (value: boolean) => {
    baseline.current = Math.max(0, window.scrollY);
    openRef.current = value;
    setOpen(value);
  };
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const y = Math.max(0, Math.min(window.scrollY, max));
      setProgress(max > 0 ? y / max : 0);
      document.documentElement.style.setProperty('--scroll', `${y}`);
      // Anchor navigation and automatic focus scrolling should not reopen the form.
      if (performance.now() > userScrollUntil.current) {
        baseline.current = y;
        return;
      }
      // Track the turning point, so 24px in the opposite direction triggers a change.
      // Reopen only near the beginning, so reversing the film stays unobstructed.
      if (openRef.current) {
        baseline.current = Math.min(baseline.current, y);
        if (y - baseline.current > 24) changeOpen(false);
      } else {
        baseline.current = Math.max(baseline.current, y);
        if (y < Math.min(240, window.innerHeight * .3) && baseline.current - y > 24) changeOpen(true);
      }
    };
    const onScrollIntent = () => { userScrollUntil.current = performance.now() + 1500; };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') changeOpen(false);
      const editing = (event.target as HTMLElement).closest('input, textarea, select, [contenteditable="true"]');
      if (!editing && ['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', ' '].includes(event.key)) onScrollIntent();
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('wheel', onScrollIntent, { passive: true });
    window.addEventListener('touchmove', onScrollIntent, { passive: true });
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('wheel', onScrollIntent);
      window.removeEventListener('touchmove', onScrollIntent);
      window.removeEventListener('keydown', onKey);
    };
  }, []);
  return <div className={`landing-page ${open ? 'auth-open' : 'exploring'}`}>
    <div className="reading-progress" style={{ transform: `scaleX(${progress})` }} />
    <SiteHeader onExplore={() => changeOpen(false)} />
    <main>
      <Story onStart={() => { setMode('register'); history.replaceState(null, '', '/register'); changeOpen(true); }} />
      <SiteFooter onOpenAuth={() => changeOpen(true)} />
    </main>
    <AuthPanel open={open} setOpen={changeOpen} mode={mode} setMode={setMode} />
    <ThemePicker />
  </div>;
}
