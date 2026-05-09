import { motion } from 'motion/react';
import { Send, ThumbsUp, Instagram } from 'lucide-react';
import { BRAND } from '../data/links';

export default function Socials() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      aria-label="Contato e Redes Sociais"
      className="socials"
    >
      {/* CTA principal – WhatsApp */}
      <a
        href={BRAND.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Solicitar orçamento via WhatsApp"
        className="socials__cta"
      >
        <Send className="socials__cta-icon" aria-hidden="true" />
        <span className="socials__cta-label">Solicitar Orçamento</span>
      </a>

      {/* Redes sociais */}
      <div className="socials__grid">
        <a
          href={BRAND.facebook}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Acesse nosso Facebook"
          className="socials__social-btn"
        >
          <ThumbsUp className="socials__social-icon" aria-hidden="true" />
          <span className="socials__social-label">Facebook</span>
        </a>

        <a
          href={BRAND.instagram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Acesse nosso Instagram"
          className="socials__social-btn socials__social-btn--instagram"
        >
          <Instagram className="socials__social-icon socials__social-icon--instagram" aria-hidden="true" />
          <span className="socials__social-label">Instagram</span>
        </a>
      </div>
    </motion.section>
  );
}
