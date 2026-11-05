export const clamp = (n: number, a = 0, b = 1) => Math.max(a, Math.min(b, n));
export const smooth = (n: number) => { const t = clamp(n); return t * t * (3 - 2 * t); };
export const mix = (a: number, b: number, t: number) => a + (b - a) * t;
export const RUN = 76;
export const RISE = 26;
export const DOWN = 420;
export const VALLEY = DOWN + RUN * 24;
export const UP = VALLEY + 420;
export const SUMMIT = UP + RUN * 24;
export const LOW = 400 + RISE * 24;
export const LEG_SEGMENT = 54;
export function ground(x: number) {
  if (x < DOWN) return 400;
  if (x < VALLEY) return 400 + (Math.floor((x - DOWN) / RUN) + 1) * RISE;
  if (x < UP) return LOW;
  if (x < SUMMIT) return LOW - (Math.floor((x - UP) / RUN) + 1) * RISE;
  return 400;
}
export function bodyGround(x: number) {
  if (x < DOWN) return 400;
  if (x < VALLEY) return 400 + (x - DOWN) / RUN * RISE;
  if (x < UP) return LOW;
  if (x < SUMMIT) return LOW - (x - UP) / RUN * RISE;
  return 400;
}
export function foot(x: number, offset: number, reduceMotion = false) {
  const stride = (x - 120) / RUN;
  const phase = stride + offset;
  const k = Math.floor(phase / 2);
  const p = ((phase % 2) + 2) % 2;
  // Center each planted foot around the hip instead of dragging it behind.
  const start = 120 + k * RUN * 2 - offset * RUN + RUN / 2;
  const end = start + RUN * 2;
  const swing = p < 1 ? 0 : smooth(p - 1);
  return {
    x: mix(start, end, swing),
    y: mix(ground(start), ground(end), swing) - Math.sin(Math.PI * swing) * (reduceMotion ? 28 : 30),
    angle: reduceMotion ? 0 : -18 * Math.sin(Math.PI * 2 * swing),
  };
}
type Point = { x: number; y: number };

export function hipHeight(x: number, a: Point, b: Point, reduceMotion = false) {
  const bob = reduceMotion ? 0 : Math.cos((x - 120) / RUN * Math.PI * 2) * 1.5;
  const preferred = bodyGround(x) - 98 + bob;
  // Lower the pelvis when a planted foot on a lower stair needs more reach.
  const reach = LEG_SEGMENT * 2 - 1;
  const minimumY = (toe: Point) => toe.y - Math.sqrt(Math.max(0, reach ** 2 - (toe.x - x) ** 2));
  return Math.max(preferred, minimumY(a), minimumY(b));
}

export function knee(hipX: number, hipY: number, toeX: number, toeY: number) {
  const dx = toeX - hipX, dy = toeY - hipY;
  const distance = Math.max(.01, Math.hypot(dx, dy));
  const bend = Math.sqrt(Math.max(0, LEG_SEGMENT ** 2 - (distance / 2) ** 2));
  return {
    x: (hipX + toeX) / 2 + dy / distance * bend,
    y: (hipY + toeY) / 2 - dx / distance * bend,
  };
}

export function leg(hipX: number, hipY: number, toeX: number, toeY: number) {
  const joint = knee(hipX, hipY, toeX, toeY);
  return `M${hipX},${hipY} L${joint.x},${joint.y} L${toeX},${toeY}`;
}
export function terrain() {
  let path = `M-1000,400 H${DOWN}`;
  for (let i = 1; i <= 24; i++) path += ` V${400 + i * RISE} H${DOWN + i * RUN}`;
  path += ` H${UP}`;
  for (let i = 1; i <= 24; i++) path += ` V${LOW - i * RISE} H${UP + i * RUN}`;
  return path + ' H6500';
}
