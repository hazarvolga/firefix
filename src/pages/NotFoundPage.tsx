import React, { useEffect } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { updatePageSeo } from '../lib/seo';
import { Home } from 'lucide-react';

export function NotFoundPage() {
  useEffect(() => {
    updatePageSeo({
      title: '404 - Sayfa Bulunamadı | FireFix',
      description: 'Aradığınız sayfa bulunamadı.',
      canonicalPath: '/404',
    });
  }, []);

  return (
    <div className="bg-[#F3F0E8] text-[#141414] font-sans pb-16">
      <Breadcrumbs items={[{ label: '404 Sayfa Bulunamadı', path: '/404' }]} />
      <div className="max-w-2xl mx-auto px-4 text-center pt-16 space-y-4 font-mono">
        <h1 className="text-6xl font-black text-[#C1121F]">404</h1>
        <h2 className="text-xl font-bold font-sans text-[#141414]">Aradığınız Sayfa Bulunamadı</h2>
        <p className="text-xs text-slate-700 leading-relaxed max-w-md mx-auto font-sans">
          Aradığınız internet adresi kaldırılmış veya adresi değişmiş olabilir.
        </p>
        <div className="pt-4">
          <a
            href="/"
            className="px-6 py-3.5 bg-[#141414] text-white font-bold text-xs uppercase tracking-wider inline-flex items-center gap-2"
          >
            <Home className="w-4 h-4 text-[#C1121F]" />
            <span>ANASAYFAYA DÖN</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;
