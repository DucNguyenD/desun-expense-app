import { useEffect, useRef, useState, type FormEvent } from 'react';
import Icon from '../../components/Icon';
import BrandLogo from '../../components/BrandLogo';
import type { AuthMode } from './auth.types';
import './auth.css';

export default function AuthPanel({ open, setOpen, mode, setMode }: { open: boolean; setOpen: (open: boolean) => void; mode: AuthMode; setMode: (mode: AuthMode) => void }) {
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState('');
  const panel = useRef<HTMLDivElement>(null);
  const wasOpen = useRef(open);
  useEffect(() => {
    // Scroll-triggered opening must not steal focus or raise the mobile keyboard.
    const shouldFocus = open && !wasOpen.current && document.activeElement?.matches('.auth-beacon');
    const focusTimer = shouldFocus ? window.setTimeout(() => panel.current?.querySelector<HTMLInputElement>('input')?.focus({ preventScroll: true }), 450) : undefined;
    wasOpen.current = open;
    if (!open && panel.current?.contains(document.activeElement)) (document.activeElement as HTMLElement)?.blur();
    return () => window.clearTimeout(focusTimer);
  }, [open]);
  const switchMode = (next: AuthMode) => {
    setMode(next); setMessage('');
    history.replaceState(null, '', next === 'login' ? '/login' : '/register');
  };
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage('Đây là bản thử giao diện. Chức năng tài khoản sẽ được kết nối với Django sau.');
  };
  return <>
    <button className={`auth-beacon ${open ? '' : 'is-visible'}`} onClick={() => setOpen(true)} aria-label="Mở đăng nhập hoặc đăng ký" aria-expanded={open} aria-controls="auth-panel" tabIndex={open ? -1 : 0}><BrandLogo /><span>{mode === 'login' ? 'Đăng nhập' : 'Đăng ký'}</span></button>
    <div ref={panel} id="auth-panel" className={`auth-panel ${open ? 'is-open' : 'is-collapsed'}`} role="region" aria-label={mode === 'login' ? 'Đăng nhập DeSun' : 'Đăng ký DeSun'} inert={!open}>
      <button className="minimize-button" onClick={() => setOpen(false)} title="Thu gọn để khám phá" aria-label="Thu gọn ô đăng nhập"><Icon name="minimize" size={18} /></button>
      <div className="panel-emblem"><BrandLogo /></div>
      <div className="auth-heading"><span className="eyebrow">MỘT CHÚT RÕ RÀNG. NHIỀU ĐIỀU TỰ DO.</span><h1>{mode === 'login' ? 'Mừng bạn trở về.' : 'Bắt đầu nhẹ tênh.'}</h1><p>{mode === 'login' ? 'Cùng chăm chút cho những dự định của bạn.' : 'Một tài khoản nhỏ. Một khởi đầu cho điều lớn.'}</p></div>
      <div className="auth-tabs" role="tablist" aria-label="Chọn đăng nhập hoặc đăng ký"><button type="button" role="tab" aria-selected={mode === 'login'} aria-controls="auth-form" onClick={() => switchMode('login')}>Đăng nhập</button><button type="button" role="tab" aria-selected={mode === 'register'} aria-controls="auth-form" onClick={() => switchMode('register')}>Đăng ký</button></div>
      <form id="auth-form" onSubmit={submit} key={mode}>
        {mode === 'register' && <label>Tên của bạn<input name="name" placeholder="Bạn muốn được gọi là gì?" autoComplete="name" required maxLength={100} /></label>}
        <label>Email<input type="email" name="email" placeholder="ban@example.com" autoComplete="email" required /></label>
        <label><span className="label-line">Mật khẩu <span className="input-hint">{mode === 'register' ? 'Tối thiểu 8 ký tự' : ''}</span></span><span className="password-wrap"><input type={visible ? 'text' : 'password'} name="password" placeholder="Nhập mật khẩu của bạn" autoComplete={mode === 'login' ? 'current-password' : 'new-password'} minLength={mode === 'register' ? 8 : 1} required /><button type="button" onClick={() => setVisible(!visible)} aria-label={visible ? 'Ẩn mật khẩu' : 'Hiện mật khẩu'} aria-pressed={visible}><Icon name="eye" size={18} /></button></span></label>
        <button className="submit-button" type="submit">{mode === 'login' ? 'Vào không gian của bạn' : 'Tạo không gian của bạn'}<Icon name="arrow" size={19} /></button>
        {message && <p className="form-message" role="status">{message}</p>}
      </form>
      <p className="privacy-note"><Icon name="lock" size={13} />Không gian riêng cho tiền bạc của bạn.</p>
      <button className="explore-button" onClick={() => { setOpen(false); document.getElementById('story')?.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' }); }}>Hoặc khám phá DeSun trước <Icon name="down" size={14} /></button>
    </div>
  </>;
}
