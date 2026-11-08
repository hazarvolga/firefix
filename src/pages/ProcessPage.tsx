import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { updatePageSeo } from '../lib/seo';
import { PROCESS_STEPS } from '../data/firefixData';
import { Phone } from 'lucide-react';
import { FIREFIX_NAP } from '../data/firefixData';

interface ProcessPageProps {
  onOpenQuote: () => void;
}

export const ProcessPage: React.FC<ProcessPageProps> = ({ onOpenQuote }) => {
  React.useEffect(() => {
    updatePageSeo({
      title: 'İtfaiye Onay Süreci (5 Adım) | FireFix Sakarya',
      description: 'Yerinde keşif, mevzuat risk raporu, AutoCAD projelendirme, TSE montaj ve resmî denetim refakati adımları.',
      canonicalPath: '/surec',
    });
  }, []);

  return (
    <div className="bg-[#F3F0E8] text-[#141414] font-sans pb-16">
      <Breadcrumbs items={[{ label: 'Süreç (5 Adım)', path: '/surec' }]} />

      <section className="py-12 border-b border-[#141414]/15">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 pb-4 border-b border-[#141414]/15">
            <span className="font-mono text-xs font-bold text-[#C1121F] uppercase tracking-wider block mb-1">
              PAFTA 02 / SÜREÇ METROLOJİSİ
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#141414]">
              İtfaiye Onayına Giden 5 Adım
            </h1>
            <p className="mt-3 text-sm text-slate-700 leading-relaxed font-normal">
              Bürokratik karmaşayı ve süreci uzatan hataları ortadan kaldırıyoruz. Sahadaki tüm teknik işlemleri uzman mühendis ekibimiz yönetir.
            </p>
          </div>

          <div className="space-y-6">
            {PROCESS_STEPS.map((step) => (
              <div key={step.stepNumber} className="p-6 bg-white border border-[#141414]/15 space-y-3">
                <div className="flex items-center justify-between border-b border-[#141414]/15 pb-2 font-mono text-xs">
                  <span className="bg-[#141414] text-[#F3F0E8] px-2.5 py-0.5 font-bold">
                    ADIM 0{step.stepNumber}
                  </span>
                  <span className="text-[#1F7A4D] font-bold">MÜHENDİSLİK DİSİPLİNİ</span>
                </div>
                <h2 className="text-lg font-bold text-[#141414]">{step.title}</h2>
                <p className="text-xs text-slate-700 leading-relaxed">{step.shortDesc}</p>
                <p className="text-xs text-slate-600 bg-[#F3F0E8] p-3 border border-[#141414]/10 font-mono">
                  {step.details}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-[#141414] text-[#F3F0E8] text-center font-mono space-y-4">
            <h3 className="text-xl font-bold font-sans text-white">İş Yerinizin Sürecini Başlatın</h3>
            <p className="text-xs text-slate-300">Uzmanlarımız 24 saat içinde mekânınızda ön keşif takvimini oluştursun.</p>
            <div className="pt-2 flex items-center justify-center gap-4 flex-wrap">
              <button
                onClick={onOpenQuote}
                className="px-6 py-3.5 bg-[#C1121F] hover:bg-[#a00e19] text-white font-bold text-xs uppercase tracking-wider cursor-pointer border border-[#C1121F]"
              >
                KEŞİF RANDEVUSU AL
              </button>
              <a
                href={FIREFIX_NAP.phoneHref}
                className="px-6 py-3.5 border border-[#F3F0E8]/30 hover:border-[#F3F0E8] text-[#F3F0E8] font-bold text-xs flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#C1121F]" />
                <span>{FIREFIX_NAP.phoneFormatted}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProcessPage;
