import { motion } from 'motion/react';
import { Printer, ChevronDown } from 'lucide-react';
import { BRAND } from '../data/links';

export default function Hero() {
  return (
    <motion.header
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="hero"
    >
      <div className="section-container">
        {/* Logo */}
        <div className="hero__avatar" aria-hidden="true">
          <a href="https://www.cleci.com.br/" target="_blank" rel="noopener noreferrer">
            <img src={BRAND.logo} alt={BRAND.name} className="hero__logo-img" />
          </a>
        </div>

        <h1 className="hero__title">Olá, Seja Bem Vindo!</h1>
        <p className="hero__description">
          Conheça Nossos Produtos e Faça seu Orçamento
        </p>





        {/* Indicador de scroll animado */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          className="hero__scroll-indicator"
          aria-hidden="true"
        >
          <ChevronDown className="hero__chevron" />
        </motion.div>
      </div>
    </motion.header>
  );
}
