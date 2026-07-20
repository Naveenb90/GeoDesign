import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const ROTATE_MS = 10_000;

/**
 * Full-bleed hero background that cycles through gallery image URLs on an interval.
 * @param {{ images: Array<{ src: string }> }} props
 * @returns {JSX.Element|null}
 */
export function HeroGalleryBackground({ images }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!images?.length) {
      return undefined;
    }
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, ROTATE_MS);
    return () => window.clearInterval(id);
  }, [images?.length]);

  if (!images?.length) {
    return null;
  }

  const image = images[index];
  const src = image.src;
  const isFirst = index === 0;

  /**
   * WebP variants are generated next to each original by the image build step and
   * declared on the image entry as `webp: [{ src, width }]`. `<picture>` keeps the
   * original JPEG as the fallback, so a missing variant degrades rather than breaks.
   */
  const webpSrcSet = image.webp?.length
    ? image.webp.map((v) => `${v.src} ${v.width}w`).join(', ')
    : null;

  return (
    <picture key={src}>
      {webpSrcSet ? <source type="image/webp" srcSet={webpSrcSet} sizes="100vw" /> : null}
      <img
        src={src}
        alt=""
        sizes="100vw"
        decoding="async"
        loading={isFirst ? 'eager' : 'lazy'}
        fetchPriority={isFirst ? 'high' : 'low'}
        className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover object-center"
        aria-hidden="true"
      />
    </picture>
  );
}

HeroGalleryBackground.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({ src: PropTypes.string.isRequired })).isRequired,
};
