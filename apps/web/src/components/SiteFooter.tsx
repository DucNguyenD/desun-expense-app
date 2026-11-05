import Icon from './Icon';
import BrandLogo from './BrandLogo';

export default function SiteFooter({ onOpenAuth }: { onOpenAuth: () => void }) {
  return (
      <footer className="site-footer"><a className="footer-brand" href="#home"><BrandLogo /><span>desun.</span></a><span>Một chút hôm nay. Một khoảng tự do ngày mai.</span><button onClick={() => onOpenAuth()}>Về không gian của bạn <Icon name="arrow" size={16} /></button><small>BẢN THỬ GIAO DIỆN · DỮ LIỆU MINH HỌA</small></footer>
  );
}
