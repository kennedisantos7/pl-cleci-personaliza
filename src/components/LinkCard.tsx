import { motion } from 'motion/react';
import type { LinkItem } from '../data/links';
import LazyImage from './LazyImage';

interface LinkCardProps {
  item: LinkItem;
  index: number;
}

export default function LinkCard({ item, index }: LinkCardProps) {
  return (
    <motion.a
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 + index * 0.1, duration: 0.5 }}
      whileHover={{ y: -4, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      href={item.href}
      target={item.external ? '_blank' : undefined}
      rel={item.external ? 'noopener noreferrer' : undefined}
      aria-label={`${item.title} – ${item.subtitle}`}
      className="link-card-image-wrap"
    >
      <LazyImage 
        src={item.image} 
        alt={item.title} 
        className="link-card-image"
      />
    </motion.a>
  );
}
