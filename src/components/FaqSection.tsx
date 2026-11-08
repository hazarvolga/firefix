import React, { useState } from 'react';
import { ALL_FAQS } from '../data/firefixData';
import { ChevronRight, Phone } from 'lucide-react';
import { FIREFIX_NAP } from '../data/firefixData';
import { IsoRegulationIcon } from './IsoPictograms';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="sss" className="py-12 bg-white border-b border-[#141414]/15 font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 pb-4 border-b border-[#141414]/15">
          <div className="inline-flex items-center gap-2 font-mono text-xs font-bold text-[#C1121F] uppercase tracking-wider mb-2">
            <IsoRegulationIcon className="w-4 h-4" />
            <span>PAFTA SSS — İTFAİYE MEVZUATI</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#141414] font-sans">
            Sıkça Sorulan Sorular ve Cevaplar
          </h2>
        </div>

        <div className="space-y-2 border-y border-[#141414]/15 divide-y divide-[#141414]/15">
          {ALL_FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div key={faq.id} className="p-4 bg-[#F3F0E8]/30">
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full text-left flex items-center justify-between font-bold text-sm text-[#141414] cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <ChevronRight className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-90 text-[#C1121F]' : ''}`} />
                </button>
                {isOpen && (
                  <p className="mt-3 text-xs text-slate-700 leading-relaxed pt-2 border-t border-[#141414]/10">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-10 p-6 bg-[#141414] text-[#F3F0E8] border border-[#141414] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
          <div>
            <h4 className="font-bold text-white uppercase">Sorum Ayrı veya Özel Durumum Var</h4>
            <p className="text-slate-300 text-[11px] mt-0.5">Mühendislerimizle 24 saat doğrudan konuşabilirsiniz.</p>
          </div>
          <a
            href={FIREFIX_NAP.phoneHref}
            className="px-5 py-3 bg-[#C1121F] hover:bg-[#a00e19] text-white font-bold uppercase tracking-wider flex items-center gap-2 shrink-0"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>{FIREFIX_NAP.phoneFormatted}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
