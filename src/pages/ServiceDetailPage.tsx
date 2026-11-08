import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { updatePageSeo } from '../lib/seo';
import { getServiceSchema, getFaqSchema, injectJsonLd } from '../lib/schema';
import { SUB_SERVICES_DATA } from '../data/firefixData';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { IsoRegulationIcon } from '../components/IsoPictograms';

interface ServiceDetailPageProps {
  onOpenQuote: () => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ onOpenQuote }) => {
  const { slug } = useParams<{ slug: string }>();
  const service = SUB_SERVICES_DATA.find((s) => s.slug === slug);

  React.useEffect(() => {
    if (service) {
      updatePageSeo({
        title: `${service.title} | FireFix Sakarya`,
        description: service.metaDesc,
        canonicalPath: `/hizmetlerimiz/${service.slug}`,
      });

      injectJsonLd([
        getServiceSchema({
          name: service.title,
          description: service.shortDesc,
          urlPath: `/hizmetlerimiz/${service.slug}`,
        }),
        getFaqSchema(service.specificFaqs),
      ]);
    }
  }, [service]);

  if (!service) {
    return <Navigate to="/hizmetlerimiz" replace />;
  }

  const otherServices = SUB_SERVICES_DATA.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <div className="bg-[#F3F0E8] text-[#141414] font-sans pb-16">
      <Breadcrumbs
        items={[
          { label: 'Hizmetlerimiz', path: '/hizmetlerimiz' },
          { label: service.title, path: `/hizmetlerimiz/${service.slug}` },
        ]}
      />

      <article className="py-12 border-b border-[#141414]/15">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Header */}
          <div>
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#C1121F] uppercase tracking-wider mb-2">
              <IsoRegulationIcon className="w-4 h-4" />
              <span>{service.categoryTitle}</span>
              <span>·</span>
              <span>{service.regulationRef}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#141414] leading-tight">
              {service.title}
            </h1>

            {/* Direct Answer Paragraph (GEO 40-60 words) */}
            <div className="mt-6 p-6 bg-white border border-[#141414]/15 text-sm text-[#141414] leading-relaxed">
              <strong className="font-mono text-xs text-[#C1121F] uppercase tracking-wider block mb-2">
                DOĞRUDAN TANIM & TANIM MATRİSİ:
              </strong>
              {service.directAnswerText}
            </div>
          </div>

          {/* Target Audience */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-[#141414] font-sans">
              Bu Hizmet Hangi İşletmeler İçin Zorunludur?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.targetAudience.map((item, idx) => (
                <div key={idx} className="p-3 bg-white border border-[#141414]/15 text-xs font-mono text-[#141414] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1F7A4D] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Process Steps */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-[#141414] font-sans">
              Mühendislik & Danışmanlık Süreç Adımları
            </h2>
            <div className="space-y-2">
              {service.processSteps.map((step, idx) => (
                <div key={idx} className="p-4 bg-white border border-[#141414]/15 flex items-start gap-3 text-xs text-[#141414]">
                  <span className="font-mono font-bold text-xs bg-[#141414] text-white px-2 py-0.5 shrink-0">
                    0{idx + 1}
                  </span>
                  <span className="leading-relaxed mt-0.5">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Banner */}
          <div className="p-8 bg-[#141414] text-[#F3F0E8] border border-[#141414] text-center space-y-4 font-mono">
            <h3 className="text-xl font-bold text-white font-sans">
              {service.title} İçin Keşif Randevusu Alın
            </h3>
            <p className="text-xs text-slate-300 max-w-lg mx-auto">
              Sakarya ve Marmara bölgesinde uzman mühendislerimiz 24 saat içinde mekânınızda ön inceleme gerçekleştirir.
            </p>
            <div className="pt-2 flex justify-center gap-3">
              <button
                onClick={onOpenQuote}
                className="px-6 py-3.5 bg-[#C1121F] hover:bg-[#a00e19] text-white font-bold text-xs uppercase tracking-wider cursor-pointer border border-[#C1121F]"
              >
                ÜCRETSİZ KEŞİF TALEBİ GÖNDER
              </button>
            </div>
          </div>

          {/* Related Services */}
          <div className="pt-8 border-t border-[#141414]/15">
            <h3 className="font-mono text-xs font-bold text-[#C1121F] uppercase tracking-wider mb-4">
              İLGİLİ DİĞER HİZMET DİZİNLERİ:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {otherServices.map((s) => (
                <Link
                  key={s.slug}
                  to={`/hizmetlerimiz/${s.slug}`}
                  className="p-4 bg-white border border-[#141414]/15 text-xs hover:border-[#C1121F] transition-colors"
                >
                  <div className="font-bold text-[#141414] mb-1">{s.title}</div>
                  <div className="text-[11px] text-slate-600 line-clamp-2">{s.shortDesc}</div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default ServiceDetailPage;
