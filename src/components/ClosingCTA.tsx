import { motion } from 'motion/react';
import LazyImage from './LazyImage';
import { BRAND, CTA_IMAGE } from '../data/links';

export default function ClosingCTA() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      aria-labelledby="cta-heading"
      className="cta"
    >
      <div className="section-container">
        <div className="cta__text">
          <p className="cta__tagline">{BRAND.tagline}</p>
          <h2 id="cta-heading" className="cta__title">
            Vem criar conosco na {BRAND.name}.
          </h2>

          <div className="cta__actions">
            <a
              href={BRAND.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="cta__btn cta__btn--primary"
            >
              Solicitar Orçamento
            </a>
            <a href="#products-heading" className="cta__btn cta__btn--outline">
              Nossos Produtos
            </a>
          </div>
        </div>

        <div className="cta__image-wrap">
          <LazyImage
            src={CTA_IMAGE.src}
            alt={CTA_IMAGE.alt}
            className="cta__image"
          />
        </div>
      </div>
    </motion.section>
  );
}
