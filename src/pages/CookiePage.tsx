import React, { useEffect } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { updatePageSeo } from '../lib/seo';

export function CookiePage() {
  useEffect(() => {
    updatePageSeo({
      title: 'Çerez Politikası | FireFix Sakarya',
      description: 'FireFix web sitesinde kullanılan çerez türleri ve gizlilik bildirimi.',
      canonicalPath: '/cerez-politikasi',
    });
  }, []);

  return (
    <div className="bg-[#F3F0E8] text-[#141414] font-sans pb-16">
      <Breadcrumbs items={[{ label: 'Çerez Politikası', path: '/cerez-politikasi' }]} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="bg-white p-6 sm:p-10 border border-[#141414]/15 space-y-4">
          <div className="border-b border-[#141414]/15 pb-4 font-mono text-xs">
            <span className="text-[#C1121F] font-bold block uppercase">GİZLİLİK VE ÇEREZLER</span>
            <h1 className="text-2xl font-bold font-sans text-[#141414] mt-1">
              Çerez Kullanımı Politikası
            </h1>
          </div>
          <div className="space-y-4 text-xs sm:text-sm leading-relaxed text-slate-800 font-sans">
            <p>
              FireFix web sitesinde kullanıcı deneyimini iyileştirmek ve form tercihlerini hatırlamak amacıyla zorunlu çerezler kullanılmaktadır.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CookiePage;
