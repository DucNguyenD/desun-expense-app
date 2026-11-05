import type { CSSProperties } from 'react';
import Icon from '../../components/Icon';
import useTheme from './useTheme';
import './theme.css';

export default function ThemePicker() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="theme-picker" role="group" aria-label="Thử màu chủ đạo"><span>THỬ MỘT SẮC THÁI</span>{([{ id: 'sage', name: 'Rêu & kem', color: '#315444' }, { id: 'indigo', name: 'Chàm & mơ', color: '#52568e' }, { id: 'clay', name: 'Đất & cát', color: '#a4513e' }] as const).map(t => <button key={t.id} title={t.name} aria-label={t.name} aria-pressed={theme === t.id} onClick={() => setTheme(t.id)} style={{ '--swatch': t.color } as CSSProperties}>{theme === t.id && <Icon name="check" size={13} />}</button>)}</div>
  );
}
