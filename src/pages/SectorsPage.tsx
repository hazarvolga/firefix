import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { updatePageSeo } from '../lib/seo';
import { SECTORS_DATA } from '../data/firefixData';
import { IsoRegulationIcon } from '../components/IsoPictograms';

interface SectorsPageProps {
  onOpenQuote: () => void;
}

export const SectorsPage: React.FC<SectorsPageProps> = ({ onOpenQuote }) => {
  React.useEffect(() => {
    updatePageSeo({
      title: 'Sektörel Yangın Güvenliği Gereksinimleri | FireFix Sakarya',
      description: 'Restoran, fabrika, otel, kreş, ofis ve dükkanlar için yasal yangın mevzuatı zorunlulukları.',
      canonicalPath: '/sektorler',
    });
  }, []);

  return (
    <div className="bg-[#F3F0E8] text-[#141414] font-sans pb-16">
      <Breadcrumbs items={[{ label: 'Sektörler', path: '/sektorler' }]} />

      <section className="py-12 border-b border-[#141414]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10 pb-4 border-b border-[#141414]/15">
            <span className="font-mono text-xs font-bold text-[#C1121F] uppercase tracking-wider block mb-1">
              PAFTA 03 / SEKTÖREL MEVZUAT DİZİNİ
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#141414]">
              Sektörlere Göre Yangın Ruhsatı Standartları
            </h1>
            <p className="mt-3 text-sm text-slate-700 leading-relaxed font-normal">
              Binaların Yangından Korunması Hakkında Yönetmelik her faaliyet kolu için ayrı tehlike sınıfları ve ekipman standartları belirler.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SECTORS_DATA.map((sec) => (
              <div key={sec.slug} className="p-6 bg-white border border-[#141414]/15 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#141414]/15 font-mono text-xs">
                  <span className="bg-[#141414] text-white font-bold px-2 py-0.5">
                    {sec.riskClass.toUpperCase()}
                  </span>
                  <IsoRegulationIcon className="w-5 h-5 text-[#C1121F]" />
                </div>
                <h2 className="text-lg font-bold text-[#141414]">{sec.title}</h2>
                <p className="text-xs text-slate-600 leading-relaxed">{sec.shortDesc}</p>

                <div className="space-y-2 pt-2 border-t border-[#141414]/15 font-mono text-xs">
                  <span className="font-bold text-[#C1121F] block">ZORUNLU TEKNİK KRİTERLER:</span>
                  <ul className="space-y-1 text-slate-700 list-disc pl-4">
                    {sec.criticalRequirements.map((req, idx) => (
                      <li key={idx}>{req}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-[#141414] text-[#F3F0E8] text-center font-mono space-y-4">
            <h3 className="text-xl font-bold font-sans text-white">İş Yerinizin Tehlike Sınıfını Değerlendirelim</h3>
            <button
              onClick={onOpenQuote}
              className="px-6 py-3.5 bg-[#C1121F] hover:bg-[#a00e19] text-white font-bold text-xs uppercase tracking-wider cursor-pointer border border-[#C1121F]"
            >
              ÜCRETSİZ KEŞİF TALEBİ OLUŞTUR
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SectorsPage;
