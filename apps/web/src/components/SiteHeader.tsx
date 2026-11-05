import BrandLogo from './BrandLogo';

export default function SiteHeader({ onExplore }: { onExplore: () => void }) {
  return (
    <header className="site-header"><a className="wordmark" href="#home" aria-label="DeSun, về đầu trang"><BrandLogo /><span>desun<span className="brand-period">.</span></span></a><nav aria-label="Điều hướng"><a href="#story" onClick={() => onExplore()}>Câu chuyện dòng tiền</a><a href="#future" onClick={() => onExplore()}>Dự định của bạn <span>↗</span></a></nav><span className="header-edition">TÀI CHÍNH CÁ NHÂN, NHẸ NHÀNG HƠN.</span></header>
  );
}
