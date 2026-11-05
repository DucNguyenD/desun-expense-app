import { foot, leg, hipHeight, bodyGround, smooth, RUN } from './journey';

export default function Walker({ x, t, paid, reduced }: { x: number; t: number; paid: boolean; reduced: boolean }) {
  const a = foot(x, 0, reduced), b = foot(x, 1, reduced);
  const tired = smooth((t - .12) / .3) * (1 - smooth((t - .5) / .22));
  const groundMean = bodyGround(x);
  const hipY = hipHeight(x, a, b, reduced);
  const swing = reduced ? 0 : Math.sin((x - 120) / RUN * Math.PI) * (23 - tired * 14);
  const lean = tired * 18 + (t > .57 && t < .88 ? -6 : 0);
  return <g className="film-walker" aria-hidden="true">
    <ellipse cx={x} cy={groundMean + 4} rx="38" ry="5" fill="var(--film-ink)" opacity=".1" />
    <g fill="none" stroke="var(--film-ink)" strokeWidth="4.2" strokeLinecap="round" strokeLinejoin="round">
      <path d={leg(x, hipY, a.x, a.y)} opacity=".62" /><path d={leg(x, hipY, b.x, b.y)} />
      <g transform={`translate(${a.x},${a.y}) rotate(${a.angle})`} opacity=".62"><path d="M-6 0Q1 2 10 0" /></g>
      <g transform={`translate(${b.x},${b.y}) rotate(${b.angle})`}><path d="M-6 0Q1 2 10 0" /></g>
      <g transform={`translate(${x},${hipY}) rotate(${lean})`}>
        <rect x="10" y="-59" width="31" height="43" rx="10" fill="var(--accent)" strokeWidth="2.5" /><path d="M16-47h20m-9 16h9" strokeWidth="2" />
        <path d="M0 0V-55" />
        <path d={`M0-49 Q${-16 - swing * .2} -29 ${-18 - swing} -8 M0-49 Q${19 + swing * .2} -33 ${20 + swing} -12`} />
        <circle cx="0" cy="-81" r="20" fill="var(--film-sky)" />
        <path d="m-14-97 3-9 6 5 6-7" strokeWidth="2.5" />
        <path d="M-7-83v1m14-1v1" strokeWidth="3" />
        <path d={tired > .5 ? 'M-5-70q6-4 12 0' : paid || t > .58 ? 'M-7-73q7 8 14 0' : 'M-6-71h12'} strokeWidth="2" />
      </g>
    </g>
    {t < .1 && <text x={x - 35} y={groundMean + 38} className="world-note">Mít ↗</text>}
    {tired > .35 && <g transform={`translate(${x + 32},${hipY - 100})`} opacity={tired}><path d="M0 0q13 14 0 14Q-13 14 0 0" fill="#8aa3a4" /></g>}
  </g>;
}
