import { useEffect, useState } from 'react';

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

  const src = images[index].src;

  return (
    <img
      key={src}
      src={src}
      alt=""
      sizes="100vw"
      decoding="async"
      loading={index === 0 ? 'eager' : 'lazy'}
      fetchPriority={index === 0 ? 'high' : 'low'}
      className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover object-center"
      aria-hidden="true"
    />
  );
}
