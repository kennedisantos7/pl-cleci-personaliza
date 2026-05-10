import { motion } from 'motion/react';
import LazyImage from './LazyImage';
import { PRODUCT_IMAGES } from '../data/links';

export default function ProductsGrid() {
  const [featured, ...rest] = PRODUCT_IMAGES;

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      aria-labelledby="products-heading"
      className="products"
    >
      <div className="section-container">
        <div className="products__header">
          <h2 id="products-heading" className="products__title">Conheça nossos produtos</h2>
          <p className="products__subtitle">
            Nossas criações vão além da impressão: entregam qualidade, personalização e um toque exclusivo para sua marca.
          </p>
        </div>

        <div className="products__grid" role="list">
          {/* Card destaque – ocupa 2 colunas em desktop */}
          {featured && (
            <div className="products__card products__card--large" role="listitem">
              <LazyImage
                src={featured.src}
                alt={featured.alt}
                className="products__card-image"
                priority
              />
              <div className="products__card-overlay" aria-hidden="true">
                <span className="products__card-label">{featured.label}</span>
              </div>
            </div>
          )}

          {/* Demais cards */}
          {rest.map((img) => (
            <div key={img.id} className="products__card" role="listitem">
              <LazyImage
                src={img.src}
                alt={img.alt}
                className="products__card-image"
              />
              <div className="products__card-overlay" aria-hidden="true">
                <span className="products__card-label">{img.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
