import { smooth, mix } from './journey';

export const palette = (t: number) => {
  const darkness = smooth((t - .08) / .36) * (1 - smooth((t - .51) / .36));
  const bright = [245, 243, 235], dark = [24, 35, 42];
  const rgb = (a: number[], b: number[]) => `rgb(${a.map((v, i) => Math.round(mix(v, b[i], darkness))).join(',')})`;
  return { darkness, sky: rgb(bright, dark), ink: rgb([39, 66, 55], [226, 225, 205]), muted: rgb([114, 126, 112], [173, 186, 181]), earth: rgb([223, 227, 208], [17, 27, 33]), line: rgb([123, 142, 120], [83, 104, 108]) };
};
