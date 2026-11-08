export interface SeoMetadata {
  title: string;
  description: string;
  canonicalPath: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
  publishedTime?: string;
  modifiedTime?: string;
  authorName?: string;
}

export const SITE_NAME = 'FireFix Yangın Güvenliği & Danışmanlığı';
export const SITE_DOMAIN = 'https://firefix.com.tr';

export function updatePageSeo(seo: SeoMetadata) {
  if (typeof document === 'undefined') return;

  const fullCanonical = `${SITE_DOMAIN}${seo.canonicalPath}`;

  // Update Document Title
  document.title = seo.title;

  // Helper to set or create meta tag
  const setMeta = (nameAttr: string, attrVal: string, content: string) => {
    let el = document.querySelector(`meta[${nameAttr}="${attrVal}"]`);
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute(nameAttr, attrVal);
      document.head.appendChild(el);
    }
    el.setAttribute('content', content);
  };

  // Helper for link canonical
  const setCanonical = (href: string) => {
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', href);
  };

  // Standard Meta Tags
  setMeta('name', 'description', seo.description);
  setCanonical(fullCanonical);

  // Open Graph
  setMeta('property', 'og:title', seo.title);
  setMeta('property', 'og:description', seo.description);
  setMeta('property', 'og:type', seo.ogType || 'website');
  setMeta('property', 'og:url', fullCanonical);
  setMeta('property', 'og:site_name', SITE_NAME);
  setMeta('property', 'og:locale', 'tr_TR');
  if (seo.ogImage) {
    setMeta('property', 'og:image', `${SITE_DOMAIN}${seo.ogImage}`);
  }

  // Twitter Cards
  setMeta('name', 'twitter:card', 'summary_large_image');
  setMeta('name', 'twitter:title', seo.title);
  setMeta('name', 'twitter:description', seo.description);
  if (seo.ogImage) {
    setMeta('name', 'twitter:image', `${SITE_DOMAIN}${seo.ogImage}`);
  }
}
