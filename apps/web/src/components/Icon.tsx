import type { ReactNode } from 'react';

export default function Icon({ name, size = 20 }: { name: string; size?: number }) {
  const paths: Record<string, ReactNode> = {
    arrow: <><path d="M5 12h14M13 6l6 6-6 6" /></>,
    down: <><path d="M12 5v14m-6-6 6 6 6-6" /></>,
    minimize: <><path d="M8 3v5H3m13 13v-5h5M8 8 3 3m13 13 5 5" /></>,
    eye: <><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" /><circle cx="12" cy="12" r="3" /></>,
    lock: <><rect x="5" y="10" width="14" height="11" rx="3" /><path d="M8 10V7a4 4 0 0 1 8 0v3m-4 4v3" /></>,
    plus: <path d="M12 5v14M5 12h14" />,
    check: <path d="m5 12 4 4L19 6" />,
    leaf: <><path d="M19 4C7 3 2 10 7 16s14 2 12-12Z" /><path d="m4 21 11-11" /></>,
    coffee: <><path d="M4 8h12v9a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3Zm12 1h2a3 3 0 0 1 0 6h-2M7 2v3m5-3v3" /></>,
    home: <><path d="m3 10 9-7 9 7v11H3Zm6 11v-8h6v8" /></>,
    bag: <><rect x="4" y="7" width="16" height="14" rx="3" /><path d="M8 8V6a4 4 0 0 1 8 0v2" /></>,
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name] ?? paths.arrow}</svg>;
}
