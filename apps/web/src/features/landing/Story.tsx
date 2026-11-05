import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { clamp, smooth, mix, ground, terrain, LOW, VALLEY, UP, SUMMIT } from './journey';
import { beats, costs } from './story.data';
import { palette } from './palette';
import Walker from './Walker';
import BrandLogo from '../../components/BrandLogo';
import './story.css';

const money = (n: number) => new Intl.NumberFormat('vi-VN').format(n);

export default function Story({ onStart }: { onStart: () => void }) {
  const root = useRef<HTMLDivElement>(null);
  const [t, setT] = useState(0);
  const [size, setSize] = useState({ width: 1440, height: 900 });
  const [reduced, setReduced] = useState(false);
  const [paid, setPaid] = useState(false);
  const [detail, setDetail] = useState<number | null>(null);
  const [organized, setOrganized] = useState(false);
  const [jars, setJars] = useState([6, 3, 1]);
  const [monthly, setMonthly] = useState(2);
  const [photo, setPhoto] = useState(false);
  const [ripple, setRipple] = useState(0);
  const [notice, setNotice] = useState('');
  const [pause, setPause] = useState(false);
  const [resumeVersion, setResumeVersion] = useState(0);
  const pauseRef = useRef(false);
  const playheadRef = useRef(0);
  useEffect(() => { pauseRef.current = pause; }, [pause]);
  useEffect(() => {
    const media = matchMedia('(prefers-reduced-motion: reduce)');
    const syncMotion = () => setReduced(media.matches);
    syncMotion(); media.addEventListener('change', syncMotion);
    let current = playheadRef.current, target = current, frame = 0, last = 0;
    const measure = () => {
      const node = root.current;
      if (!node) return;
      const rect = node.getBoundingClientRect();
      target = clamp(-rect.top / Math.max(1, rect.height - innerHeight));
      setSize(prev => prev.width === innerWidth && prev.height === innerHeight ? prev : { width: innerWidth, height: innerHeight });
      if (!frame) frame = requestAnimationFrame(tick);
    };
    const tick = (now: number) => {
      const dt = last ? Math.min(now - last, 64) : 16;
      last = now;
      if (!pauseRef.current) {
        current = media.matches ? target : mix(current, target, 1 - Math.exp(-dt / 110));
        if (Math.abs(current - target) < .00004) current = target;
        playheadRef.current = current;
        setT(current);
      }
      if (Math.abs(current - target) > .00004 && !pauseRef.current) frame = requestAnimationFrame(tick);
      else { frame = 0; last = 0; }
    };
    measure(); addEventListener('scroll', measure, { passive: true }); addEventListener('resize', measure);
    return () => { cancelAnimationFrame(frame); removeEventListener('scroll', measure); removeEventListener('resize', measure); media.removeEventListener('change', syncMotion); };
  }, [resumeVersion]);
  const colors = palette(t);
  const x = mix(120, 4980, t);
  const viewH = size.width < 700 ? 680 : 630;
  const viewW = viewH * size.width / size.height;
  const cameraX = x - viewW * (size.width < 700 ? .48 : .63);
  const cameraY = mix(400, LOW, clamp((x - 420) / (VALLEY - 420))) - smooth((x - UP) / (SUMMIT - UP)) * (LOW - 400) - viewH * .73;
  const chapter = Math.max(0, beats.findIndex(b => t >= b.from && t < b.to));
  const spent = costs.filter(c => x > c.x + 25).reduce((sum, c) => sum + c.amount, 0);
  const remaining = 12000000 - spent;
  const loose = 12 - jars.reduce((sum, n) => sum + n, 0);
  const style = { '--film-sky': colors.sky, '--film-ink': colors.ink, '--film-muted': colors.muted, '--film-earth': colors.earth, '--film-line': colors.line, '--darkness': colors.darkness } as CSSProperties;
  const accessible = (active: boolean, action: () => void) => ({ role: 'button' as const, 'aria-hidden': !active, tabIndex: active ? 0 : -1, onClick: action, onKeyDown: (e: React.KeyboardEvent<SVGGElement>) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); action(); } } });
  const addJar = (i: number) => {
    if (!loose) { setNotice('Đã chia đủ 12 triệu. Bấm “Chia lại” để thử một lựa chọn khác.'); return; }
    setJars(prev => prev.map((n, j) => j === i ? n + 1 : n));
    setNotice(`Thêm 1 triệu cho ${['cần thiết', 'niềm vui', 'dự định'][i]}.`);
  };
  const jumpTo = (progress: number) => {
    if (!root.current) return;
    const top = root.current.getBoundingClientRect().top + scrollY;
    scrollTo({ top: top + progress * (root.current.offsetHeight - innerHeight), behavior: reduced ? 'instant' : 'smooth' });
  };
  useEffect(() => { setDetail(null); setNotice(''); }, [chapter]);
  return <div className="journey-film" id="home" ref={root} style={style}>
    <span id="story" className="film-anchor story-anchor" /><span id="future" className="film-anchor future-anchor" />
    <div className="film-screen">
      <div className="film-atmosphere" aria-hidden="true" /><div className="film-grain" aria-hidden="true" />
      <svg className="film-world" viewBox={`${cameraX} ${cameraY} ${viewW} ${viewH}`} aria-label="Một cảnh liên tục: Mít xuống cầu thang, gặp DeSun rồi đi lên về phía biển">
        <defs><radialGradient id="notebook-light"><stop stopColor="#efc98b" stopOpacity=".65" /><stop offset="1" stopColor="#efc98b" stopOpacity="0" /></radialGradient><linearGradient id="soil" x2="0" y2="1"><stop stopColor="var(--film-earth)" /><stop offset="1" stopColor="var(--film-sky)" /></linearGradient></defs>
        <g transform={`translate(${cameraX * .55},${cameraY * .4})`} opacity={.18 + colors.darkness * .12} aria-hidden="true">
          {Array.from({ length: 18 }, (_, i) => <g key={i} transform={`translate(${i * 190 - 500},${150 + Math.sin(i * 3) * 60})`}><path d="M0 0q50-20 100 0" fill="none" stroke="var(--film-line)" strokeWidth="1" /><circle cx="40" cy="-200" r={i % 3 ? 1 : 2} fill="var(--film-ink)" /></g>)}
        </g>
        <circle cx={440 + cameraX * .35} cy={155 + cameraY * .2} r="70" fill="var(--soft-accent)" opacity={1 - colors.darkness} />
        <path d={`${terrain()} V1900 H-1000Z`} fill="url(#soil)" />
        <path d={terrain()} fill="none" stroke="var(--film-line)" strokeWidth="2" strokeLinejoin="round" />
        <path d="M-400 430H350M800 700h80m370 170h105m530 180h150m350 90h120m580-80h140m320-180h100m390-170h80m350-130h180" stroke="var(--film-line)" opacity=".16" strokeWidth="1" />
        <g transform="translate(200,230)" {...accessible(chapter === 0, () => { setPaid(true); setNotice('Ting! 12 triệu đã về. Mình dành một khoản cho chuyến đi nhé.'); })} aria-label="Mở thông báo nhận lương" className="world-interactive">
          <rect width="200" height="79" rx="10" fill="var(--film-sky)" stroke="var(--film-line)" /><circle cx="26" cy="30" r="13" fill="var(--primary-light)" /><text x="26" y="35" textAnchor="middle" fill="var(--primary)" fontSize="17">↙</text><text x="49" y="25" className="world-small">{paid ? 'TING! LƯƠNG VỀ RỒI' : 'BẠN CÓ MỘT THÔNG BÁO'}</text><text x="49" y="48" className="world-money">{paid ? '+12.000.000 đ' : 'Chạm để nhận lương'}</text><text x="49" y="65" className="world-small">{paid ? 'Tháng này, mình làm được.' : 'Một khởi đầu rất quen →'}</text>
        </g>
        <g aria-hidden="true" opacity={.7}><path d="M-35 400v-80h120v80m-100-80v-45h80v45" fill="none" stroke="var(--film-line)" strokeWidth="3" /><text x="26" y="307" textAnchor="middle" className="world-note">d.</text></g>
        {costs.map((c, i) => <g key={c.name} transform={`translate(${c.x},${ground(c.x) - 195}) rotate(${i % 2 ? -5 : 5})`} {...accessible(chapter === 1 || chapter === 2, () => setDetail(detail === i ? null : i))} aria-label={`Xem khoản ${c.name}, ${money(c.amount)} đồng`} className={`world-interactive world-receipt ${detail === i ? 'receipt-open' : ''}`}>
          <path d="M-63 0H63V98l-9 6-9-6-9 6-9-6-9 6-9-6-9 6-9-6-9 6-9-6-9 6-9-6-9 6V0Z" fill="var(--film-sky)" stroke="var(--film-line)" /><text y="30" textAnchor="middle" fontSize="27" fill="var(--accent)">{c.symbol}</text><text y="54" textAnchor="middle" className="world-small">{c.name}</text><text y="75" textAnchor="middle" className="world-money">−{money(c.amount)} đ</text><path d="M-40 88h80" stroke="var(--film-line)" strokeDasharray="2 4" /></g>)}
        <g aria-hidden="true" opacity={colors.darkness * .28}>{Array.from({ length: 12 }, (_, i) => <path key={i} d={`M${700 + i * 132} ${650 + i * 26}v${100 + i * 12}h50V${610 + i * 26}Z`} fill="var(--film-line)" />)}</g>
        <g transform={`translate(2470,${LOW})`}>
          <circle cy="-50" r={organized ? 280 : 190} fill="url(#notebook-light)" opacity={t > .38 && t < .68 ? 1 : .3} />
          <g {...accessible(chapter === 3, () => { setOrganized(!organized); setNotice(organized ? 'Mỗi khoản lại trở về trang giấy.' : 'Thu 12 triệu · Chi 8 triệu · Còn 4 triệu. Mình đã thấy đường.'); })} aria-label="Mở cuốn sổ DeSun, sắp xếp dòng tiền" className="world-interactive notebook-object">
            <path d="M-72-125q35-12 72 0 37-12 72 0v99q-37-10-72 0-37-10-72 0Z" fill="#f5ecd4" stroke="#b89059" strokeWidth="2" /><path d="M0-125v99" stroke="#b89059" /><BrandLogo x={-64} y={-113} width={54} height={28} /><text x="35" y="-94" textAnchor="middle" fill="#315444" fontSize="12">{organized ? 'Đã rõ rồi.' : 'desun'}</text>{organized ? <g fontSize="9" fill="#315444"><text x="12" y="-76">Thu: 12 triệu</text><text x="12" y="-60">Chi: 8 triệu</text><text x="12" y="-44">Còn: 4 triệu</text></g> : <path d="M16-78h37m-37 14h30m-30 14h37" stroke="#b89059" />}
          </g><text y="26" textAnchor="middle" className="world-note">Một ngọn đèn. Một trang mới.</text>
        </g>
        {['Cần thiết', 'Niềm vui', 'Dự định'].map((name, i) => { const jarX = 3030 + i * 180; return <g key={name} transform={`translate(${jarX},${ground(jarX) - 35})`} {...accessible(chapter === 4, () => addJar(i))} aria-label={`Thêm 1 triệu vào hũ ${name}`} className="world-interactive film-jar">
          <rect x="-37" y="-113" width="74" height="105" rx="12" fill="var(--film-sky)" stroke="var(--film-line)" /><rect x="-34" y={-10 - jars[i] * 6} width="68" height={jars[i] * 6} rx="8" fill={i === 1 ? 'var(--soft-accent)' : 'var(--primary-light)'} /><rect x="-35" y="-119" width="70" height="14" rx="3" fill="var(--soft-accent)" stroke="var(--film-line)" /><text x="0" y="-62" textAnchor="middle" className="world-money">{['⌂', '♨', '↗'][i]}</text><text x="0" y="-30" textAnchor="middle" className="world-money">{jars[i]} triệu</text><text y="17" textAnchor="middle" className="world-small">{name}</text>
        </g>; })}
        <g transform={`translate(3825,${ground(3825) - 150})`} aria-hidden="true"><rect x="-60" y="-60" width="120" height="95" rx="8" fill="var(--film-sky)" stroke="var(--film-line)" /><path d="M-60-37H60" stroke="var(--film-line)" /><text y="-43" textAnchor="middle" className="world-small">ĐỀU ĐẶN MỖI THÁNG</text><text y="-2" textAnchor="middle" className="world-money">{Math.ceil(24 / monthly)} tháng</text><text y="20" textAnchor="middle" className="world-small">cho chuyến đi 24 triệu</text></g>
        <g aria-hidden="true" opacity={smooth((t - .78) / .13)}>
          <circle cx="4980" cy="170" r="74" fill="var(--soft-accent)" />
          <path d="M4500 325q150-20 300 0t600 0v77h-900Z" fill="var(--primary-light)" opacity=".7" />
          <path d="M4500 371q150-18 300 0t600 0" stroke="var(--film-line)" strokeWidth="1" fill="none" />
          <path d="M5170 400q-28-70-13-172m0 0q-45-38-70-12 40-5 70 12m0 0q8-58 44-46-30 13-44 46m0 0q45-30 65-5-30-4-65 5" stroke="var(--film-ink)" strokeWidth="4" strokeLinecap="round" fill="none" />
          <path d="m4860 115 9-5 9 5m25 5 9-5 9 5" stroke="var(--film-line)" fill="none" />
        </g>
        <Walker x={x} t={t} paid={paid} reduced={reduced} />
        {t > .88 && <g {...accessible(true, () => setRipple(ripple + 1))} aria-label="Chạm mặt biển tạo gợn sóng" className="world-interactive"><rect x="4580" y="310" width="520" height="60" fill="transparent" />{!!ripple && <ellipse key={ripple} className="film-ripple" cx="4810" cy="345" rx="35" ry="7" fill="none" stroke="var(--film-line)" />}</g>}
      </svg>
      <div className="film-narrator">{beats.map((b, i) => {
        const fadeIn = i === 0 ? 1 : smooth((t - b.from + .012) / .025);
        const fadeOut = i === beats.length - 1 ? 1 : 1 - smooth((t - b.to + .012) / .025);
        const opacity = Math.min(fadeIn, fadeOut);
        return <div key={b.label} className="film-caption" style={{ opacity, transform: `translateY(${(1 - opacity) * 12}px)`, pointerEvents: chapter === i ? 'auto' : 'none' }} aria-hidden={chapter !== i}><span className="film-eyebrow">{b.label}</span><h2>{b.title}<br /><em>{b.italic}</em></h2><p>{b.text}</p><span className="film-hint">↗ {b.hint}</span></div>;
      })}</div>
      <div className="film-action-area">
        {detail !== null && (chapter === 1 || chapter === 2) && <div className="film-detail" role="status"><strong>{costs[detail].name} · {money(costs[detail].amount)} đ</strong><p>{costs[detail].detail}</p><button onClick={() => setDetail(null)} aria-label="Đóng chi tiết khoản chi">×</button></div>}
        {chapter === 3 && <button className="film-action" onClick={() => { setOrganized(!organized); setNotice(organized ? 'Một trang mới để nhìn lại.' : 'Thu 12 triệu · Chi 8 triệu · Còn 4 triệu. Mình đã thấy đường.'); }}>{organized ? '✓ Mỗi khoản đã tìm được chỗ' : 'Mở sổ DeSun, xếp lại dòng tiền ↗'}</button>}
        {chapter === 4 && <div className="film-saving-controls"><span>{t < .72 ? `Còn ${loose} triệu để thử chia` : 'Mỗi tháng mình để dành'}</span>{t < .72 ? <div>{['Cần thiết', 'Niềm vui', 'Dự định'].map((name, i) => <button key={name} onClick={() => addJar(i)}>{name} <b>{jars[i]}</b><small> triệu</small></button>)}<button className="film-reset" onClick={() => { setJars([0, 0, 0]); setNotice('12 triệu đang chờ. Chia theo cách của bạn.'); }}>↺ Chia lại</button></div> : <div>{[1, 2, 3].map(n => <button key={n} aria-pressed={monthly === n} onClick={() => { setMonthly(n); setNotice(`${n} triệu mỗi tháng: ${Math.ceil(24 / n)} tháng cho chuyến đi 24 triệu. Chưa tính lãi.`); }}>{n} triệu</button>)}</div>}</div>}
        {chapter === 5 && <div className="film-ending"><button className="film-photo-button" onClick={() => setPhoto(!photo)}>{photo ? '✓ Đã giữ một kỷ niệm' : '▣ Chụp một kỷ niệm'}</button><button className="film-action" onClick={onStart}>Bắt đầu câu chuyện của bạn ↗</button></div>}
        {notice && <p className="film-notice" role="status">{notice}</p>}
      </div>
      {photo && chapter === 5 && <div className="film-polaroid"><svg viewBox="0 0 180 120" aria-hidden="true"><rect width="180" height="120" fill="var(--primary-light)" /><circle cx="136" cy="33" r="20" fill="var(--soft-accent)" /><path d="M0 80q55-12 100 0t80 0v40H0" fill="var(--soft-accent)" /><g fill="none" stroke="var(--ink)" strokeWidth="2.5" strokeLinecap="round"><circle cx="75" cy="49" r="9" /><path d="M75 58v27m0-18-15 12m15-12 15 9m-15 9-10 21m10-21 12 21" /><rect x="80" y="62" width="12" height="18" rx="3" fill="var(--accent)" /></g></svg><span>Mít đã ở đây. ☀</span></div>}
      <div className="film-footer"><div className="film-title"><span className="film-title-dot" /> MÍT & CHUYẾN ĐI CHƯA ĐẶT VÉ</div><div className="film-time"><span>{String(Math.round(t * 100)).padStart(2, '0')}%</span><div><i style={{ transform: `scaleX(${t})` }} /></div><button aria-label={pause ? 'Tiếp tục hoạt họa' : 'Dừng hoạt họa tại đây'} aria-pressed={pause} onClick={() => { if (pause) { pauseRef.current = false; setResumeVersion(v => v + 1); } else pauseRef.current = true; setPause(!pause); }}>{pause ? '▷' : 'Ⅱ'}</button></div></div>
      <div className="film-wallet" aria-label={`Số tiền minh họa còn lại ${money(remaining)} đồng`}><span>TRONG TÚI MÍT</span><strong>{money(remaining)}<small> đ</small></strong><span className="film-wallet-bar"><i style={{ transform: `scaleX(${remaining / 12000000})` }} /></span></div>
      <button className="film-scroll-invitation" onClick={() => jumpTo(chapter === 5 ? 0 : Math.min(t + .1, 1))}>{chapter === 5 ? 'Xem lại hành trình ↑' : 'Cuộn để bước cùng Mít ↓'}</button>
      <span className="film-demo-label">Câu chuyện & số liệu minh họa</span>
    </div>
  </div>;
}
