import { SITE_DOMAIN, SITE_NAME } from './seo';

export function injectJsonLd(schemaData: object | object[]) {
  if (typeof document === 'undefined') return;

  const scriptId = 'json-ld-schema';
  let scriptEl = document.getElementById(scriptId) as HTMLScriptElement;
  if (!scriptEl) {
    scriptEl = document.createElement('script');
    scriptEl.id = scriptId;
    scriptEl.type = 'application/ld+json';
    document.head.appendChild(scriptEl);
  }

  const payload = Array.isArray(schemaData)
    ? { '@context': 'https://schema.org', '@graph': schemaData }
    : { '@context': 'https://schema.org', ...schemaData };

  scriptEl.textContent = JSON.stringify(payload);
}

export function getOrganizationSchema() {
  return {
    '@type': 'ProfessionalService',
    '@id': `${SITE_DOMAIN}/#organization`,
    name: 'FireFix Yangın Güvenliği & Ruhsat Danışmanlığı',
    alternateName: 'FireFix Sakarya',
    url: SITE_DOMAIN,
    logo: `${SITE_DOMAIN}/src/assets/logo.png`,
    telephone: '+905362176535',
    email: 'info@firefix.com.tr',
    description: 'Sakarya ve Marmara Bölgesi genelinde ticari işletmeler için yangın uygunluk raporu, iş yeri ruhsatı, teknik projelendirme ve TSE ekipman kurulumu danışmanlığı.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Sakarya Teknokent, Üniversite Cad. No:45/B',
      addressLocality: 'Serdivan',
      addressRegion: 'Sakarya',
      postalCode: '54050',
      addressCountry: 'TR'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '40.7380',
      longitude: '30.3340'
    },
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Sakarya' },
      { '@type': 'AdministrativeArea', name: 'Kocaeli' },
      { '@type': 'AdministrativeArea', name: 'Düzce' },
      { '@type': 'AdministrativeArea', name: 'Bolu' },
      { '@type': 'AdministrativeArea', name: 'İstanbul' },
      { '@type': 'AdministrativeArea', name: 'Bursa' }
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '08:30',
        closes: '18:30'
      }
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+905362176535',
      contactType: 'customer service',
      availableLanguage: 'Turkish',
      option: 'TollFree'
    },
    knowsAbout: [
      'Yangın Ruhsatı',
      'İtfaiye Uygunluk Raporu',
      'Binaların Yangından Korunması Hakkında Yönetmelik',
      'Sprinkler Söndürme Projelendirmesi',
      'TSE Yangın Söndürme Tüpleri'
    ]
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.name,
      item: `${SITE_DOMAIN}${item.url}`
    }))
  };
}

export function getFaqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer
      }
    }))
  };
}

export function getServiceSchema(service: {
  name: string;
  description: string;
  urlPath: string;
}) {
  return {
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: { '@id': `${SITE_DOMAIN}/#organization` },
    url: `${SITE_DOMAIN}${service.urlPath}`,
    areaServed: 'Marmara Bölgesi / Sakarya'
  };
}
