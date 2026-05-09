import { motion } from 'motion/react';
import LazyImage from './LazyImage';
import { BRAND, TEAM_IMAGE } from '../data/links';

export default function AboutUs() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      aria-labelledby="about-heading"
      className="about"
    >
      <div className="section-container">
        <h2 id="about-heading" className="about__title">Quem Somos</h2>

        <div className="about__body">
          {/* Foto da equipe com lazy load */}
          <div className="about__image-wrap">
            <LazyImage
              src={TEAM_IMAGE.src}
              alt={TEAM_IMAGE.alt}
              className="about__image"
              priority={false}
            />
          </div>

          <div className="about__text">
            <p className="about__paragraph about__paragraph--highlight">
              {BRAND.description}
            </p>
            <p className="about__paragraph">
              {BRAND.description2}
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
