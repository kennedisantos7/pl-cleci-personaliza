/**
 * LazyImage – carrega imagens com lazy loading nativo + blur placeholder
 *
 * Props:
 *  src        URL da imagem
 *  alt        Texto alternativo (obrigatório para acessibilidade)
 *  className  Classes CSS adicionais
 *  priority   Se true, usa loading="eager" (acima da dobra)
 */
import { useState } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

export default function LazyImage({ src, alt, className = '', priority = false }: LazyImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className={`lazy-image-wrapper ${className}`} aria-label={alt}>
      {/* Placeholder de carregamento com shimmer */}
      {!loaded && !error && (
        <div className="lazy-shimmer" aria-hidden="true" />
      )}

      {/* Fallback em caso de erro */}
      {error && (
        <div className="lazy-error" aria-hidden="true">
          <span>Imagem indisponível</span>
        </div>
      )}

      <img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
        className={`lazy-image ${loaded ? 'lazy-image--visible' : 'lazy-image--hidden'}`}
      />
    </div>
  );
}
