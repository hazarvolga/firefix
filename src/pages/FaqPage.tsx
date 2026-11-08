import React, { useEffect } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { FaqSection } from '../components/FaqSection';
import { updatePageSeo } from '../lib/seo';
import { getFaqSchema, injectJsonLd } from '../lib/schema';
import { ALL_FAQS } from '../data/firefixData';
import { PhoneCall } from 'lucide-react';
import { IsoRegulationIcon } from '../components/IsoPictograms';

interface FaqPageProps {
  onOpenAuditWizard: () => void;
  onOpenQuoteModal: (serviceTitle?: string) => void;
}

export function FaqPage({ onOpenAuditWizard, onOpenQuoteModal }: FaqPageProps) {
  useEffect(() => {
    updatePageSeo({
      title: 'Sıkça Sorulan Sorular (SSS) | FireFix Sakarya',
      description: 'İş yeri açma ruhsatı, İtfaiye Uygunluk Raporu ve yangın söndürme tüpleri hakkında merak edilen soru ve cevaplar.',
      canonicalPath: '/sss',
    });

    const faqSchema = getFaqSchema(ALL_FAQS.map((f) => ({ question: f.question, answer: f.answer })));
    injectJsonLd(faqSchema);
  }, []);

  return (
    <div className="bg-[#F3F0E8] text-[#141414] font-sans pb-16">
      <Breadcrumbs items={[{ label: 'Sıkça Sorulan Sorular', path: '/sss' }]} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="text-center max-w-3xl mx-auto mb-10 pb-4 border-b border-[#141414]/15">
          <div className="inline-flex items-center gap-2 font-mono text-xs font-bold text-[#C1121F] uppercase tracking-wider mb-2">
            <IsoRegulationIcon className="w-4 h-4" />
            <span>PAFTA SSS — REHBER</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#141414]">
            Sıkça Sorulan Sorular (SSS)
          </h1>
        </div>

        <FaqSection />

        <div className="mt-12 p-8 bg-[#141414] text-[#F3F0E8] text-center font-mono space-y-4">
          <h2 className="text-xl font-bold font-sans text-white">Sorunuza Yanıt Bulamadınız mı?</h2>
          <div className="pt-2 flex justify-center gap-4 flex-wrap">
            <a
              href="tel:+905362176535"
              className="px-6 py-3.5 bg-[#C1121F] hover:bg-[#a00e19] text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 cursor-pointer"
            >
              <PhoneCall className="w-4 h-4" />
              <span>0536 217 65 35</span>
            </a>
            <button
              onClick={() => onOpenQuoteModal()}
              className="px-6 py-3.5 border border-[#F3F0E8]/30 hover:border-[#F3F0E8] text-[#F3F0E8] font-bold text-xs uppercase cursor-pointer"
            >
              TEKLİF AL & KEŞİF İSTE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FaqPage;
