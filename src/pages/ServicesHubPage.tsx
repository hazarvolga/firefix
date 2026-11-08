import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { updatePageSeo } from '../lib/seo';
import { SUB_SERVICES_DATA } from '../data/firefixData';
import { ArrowRight } from 'lucide-react';

interface ServicesHubPageProps {
  onOpenQuote: () => void;
}

export const ServicesHubPage: React.FC<ServicesHubPageProps> = ({ onOpenQuote }) => {
  React.useEffect(() => {
    updatePageSeo({
      title: 'Yangın Güvenliği Hizmetleri | FireFix Sakarya',
      description: 'İş yeri açma ruhsatı, İtfaiye Uygunluk Raporu, yangın tesisatı projesi, sprinkler ve TSE yangın söndürme tüpleri montaj hizmetleri.',
      canonicalPath: '/hizmetlerimiz',
    });
  }, []);

  return (
    <div className="bg-[#F3F0E8] text-[#141414] font-sans pb-16">
      <Breadcrumbs items={[{ label: 'Hizmetlerimiz', path: '/hizmetlerimiz' }]} />

      <section className="py-12 border-b border-[#141414]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="font-mono text-xs font-bold text-[#C1121F] uppercase tracking-wider block mb-1">
              PAFTA DİZİNİ / TÜM HİZMETLER
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#141414]">
              Yangın Güvenliği ve Ruhsat Hizmetlerimiz
            </h1>
            <p className="mt-3 text-sm text-slate-700 leading-relaxed font-normal">
              Sakarya Teknokent merkezli mühendislik ekibimiz, Binaların Yangından Korunması Hakkında Yönetmelik standartlarında tüm ruhsat ve projelendirme süreçlerini anahtar teslim yürütür.
            </p>
          </div>

          <div className="space-y-0 divide-y divide-[#141414]/15 border-y border-[#141414]/15 bg-white">
            {SUB_SERVICES_DATA.map((sub, idx) => (
              <Link
                key={sub.slug}
                to={`/hizmetlerimiz/${sub.slug}`}
                className="group p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-[#F3F0E8] transition-colors"
              >
                <div className="flex items-start sm:items-center gap-4">
                  <span className="font-mono font-bold text-sm text-[#C1121F] shrink-0 w-8">
                    0{idx + 1}.
                  </span>
                  <div>
                    <h3 className="font-bold text-base text-[#141414] group-hover:text-[#C1121F] transition-colors">
                      {sub.title}
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-1 mt-0.5 font-mono">
                      {sub.regulationRef}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 self-end sm:self-center shrink-0">
                  <span className="text-xs font-mono text-slate-500 hidden md:inline">
                    {sub.categoryTitle}
                  </span>
                  <ArrowRight className="w-4 h-4 text-[#141414] group-hover:translate-x-1 group-hover:text-[#C1121F] transition-all" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
