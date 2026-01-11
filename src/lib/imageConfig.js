const IMAGE_SOURCE = import.meta.env.VITE_IMAGE_SOURCE || 'bundled';
const CDN_BASE_URL = import.meta.env.VITE_CDN_BASE_URL || '';

/**
 * Returns the appropriate image URL based on build configuration
 * @param {string} path - Image path relative to images directory (e.g., 'about.jpg' or 'discography/album.jpg')
 * @returns {string} - Full image URL
 */
export function getImageUrl(path) {
  if (IMAGE_SOURCE === 'cdn' && CDN_BASE_URL) {
    return `${CDN_BASE_URL}/${path}`;
  }
  // Default to bundled images in /static/images/
  return `/images/${path}`;
}
