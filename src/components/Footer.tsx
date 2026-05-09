import { BRAND } from '../data/links';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__content">
        <div className="footer__brand-wrap">
          <a href="https://www.cleci.com.br/" target="_blank" rel="noopener noreferrer">
            <img src={BRAND.logo} alt={BRAND.name} className="footer__logo" />
          </a>
          <p className="footer__copy">
            © {currentYear} {BRAND.name} <br /> Todos os direitos reservados.
          </p>
        </div>

        <div className="footer__dev">
          <span className="footer__dev-text">desenvolvido por</span>
          <a href="https://www.instagram.com/kennidianderson/" target="_blank" rel="noopener noreferrer">
            <img src="https://i.imgur.com/7UYlrE0.png" alt="Desenvolvedor" className="footer__dev-logo" />
          </a>
        </div>
      </div>
    </footer>
  );
}
