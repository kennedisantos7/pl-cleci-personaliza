/**
 * App.tsx – raiz da aplicação
 *
 * A lógica de dados e componentes está distribuída em:
 *   src/data/links.ts      – fonte única de verdade para links e conteúdo
 *   src/components/        – componentes isolados e reutilizáveis
 */
import { motion } from 'motion/react';
import Hero from './components/Hero';
import LinkCard from './components/LinkCard';
import AboutUs from './components/AboutUs';
import ProductsGrid from './components/ProductsGrid';
import Footer from './components/Footer';
import { LINKS } from './data/links';

export default function App() {
  return (
    <div className="page">
      <main className="main">

        {/* ── Cabeçalho com avatar e saudação ─────────────────────────── */}
        <Hero />

        {/* ── Links de produtos / catálogos ────────────────────────────── */}
        {/* A seção NÃO anima — só o conteúdo interno anima, evitando o fundo branco */}
        <section aria-label="Catálogos de produtos" className="links-grid">
          <div className="links-grid__content">
            {LINKS.map((item, index) => (
              <LinkCard key={item.id} item={item} index={index} />
            ))}
          </div>
        </section>



        {/* ── Quem somos ───────────────────────────────────────────────── */}
        <AboutUs />

        {/* ── Grade de produtos com lazy images ────────────────────────── */}
        <ProductsGrid />



      </main>

      {/* ── Rodapé ───────────────────────────────────────────────────── */}
      <Footer />
    </div>
  );
}
