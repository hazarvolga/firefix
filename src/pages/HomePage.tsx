import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight, CheckCircle2, ChevronRight, XCircle } from 'lucide-react';
import { updatePageSeo } from '../lib/seo';
import { getOrganizationSchema, injectJsonLd } from '../lib/schema';
import { PROCESS_STEPS, ALL_FAQS, SECTORS_DATA, FIREFIX_NAP, SUB_SERVICES_DATA } from '../data/firefixData';
import { ComplianceCalculator } from '../components/ComplianceCalculator';
import {
  IsoExtinguisherIcon,
  IsoEmergencyExitIcon,
  IsoHoseCabinetIcon,
  IsoSmokeDetectorIcon,
  IsoAssemblyPointIcon,
  IsoFloorPlanIcon,
  IsoRegulationIcon,
} from '../components/IsoPictograms';

interface HomePageProps {
  onOpenQuote: () => void;
  onOpenAuditModal: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenQuote, onOpenAuditModal }) => {
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');

  React.useEffect(() => {
    updatePageSeo({
      title: 'İtfaiye Raporu & Yangın Ruhsat Danışmanlığı | FireFix Sakarya',
      description: 'Sakarya Teknokent merkezli FireFix; keşif, eksik tespiti, AutoCAD yangın projesi çizimi, TSE ekipman montajı ve itfaiye müdürlüğü başvurusunu tek dosyada yürütür.',
      canonicalPath: '/',
    });

    injectJsonLd(getOrganizationSchema());
  }, []);

  return (
    <div className="bg-[#F3F0E8] text-[#141414] font-sans">
      {/* 1. HERO SECTION — Full Width Technical Blueprint Background */}
      <section className="relative border-b border-[#141414]/15 bg-[#141414] text-[#F3F0E8] pt-12 pb-20 overflow-hidden">
        {/* Background Engineering Blueprint Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/images/hero_engineering_blueprint_1794117569949.jpg"
            alt="FireFix Yangın Güvenlik Projelendirmesi"
            className="w-full h-full object-cover object-center filter brightness-[0.38] contrast-[1.1] grayscale-[25%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#141414] via-[#141414]/90 to-[#141414]/40" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Pafta Header Stamp */}
          <div className="flex items-center gap-3 font-mono text-xs text-[#F3F0E8] mb-6 pb-2 border-b border-[#F3F0E8]/20">
            <span className="bg-[#C1121F] text-white px-2 py-0.5 font-bold">FF-01</span>
            <span className="text-slate-300">SAKARYA · YANGIN GÜVENLİĞİ VE RUHSAT MÜHENDİSLİĞİ OFİSİ</span>
          </div>

          <div className="max-w-3xl space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.05] font-sans">
              İtfaiye raporunuzu biz alırız.
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Keşif, eksik tespiti, yangın projesi, ekipman montajı ve itfaiye müdürlüğü başvurusu. Tek ekip, tek dosya, ruhsata kadar.
            </p>

            {/* Technical Scope Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 font-mono text-xs">
              <div className="flex items-center gap-2.5 p-3.5 border border-[#F3F0E8]/20 bg-[#141414]/85 text-[#F3F0E8]">
                <CheckCircle2 className="w-4 h-4 text-[#1F7A4D] shrink-0" />
                <span>01. Denetim Öncesi Ön Keşif</span>
              </div>
              <div className="flex items-center gap-2.5 p-3.5 border border-[#F3F0E8]/20 bg-[#141414]/85 text-[#F3F0E8]">
                <CheckCircle2 className="w-4 h-4 text-[#1F7A4D] shrink-0" />
                <span>02. AutoCAD Tahliye & Sprinkler Çizimi</span>
              </div>
              <div className="flex items-center gap-2.5 p-3.5 border border-[#F3F0E8]/20 bg-[#141414]/85 text-[#F3F0E8]">
                <CheckCircle2 className="w-4 h-4 text-[#1F7A4D] shrink-0" />
                <span>03. TSE Belgeli Söndürme Tüpleri</span>
              </div>
              <div className="flex items-center gap-2.5 p-3.5 border border-[#F3F0E8]/20 bg-[#141414]/85 text-[#F3F0E8]">
                <CheckCircle2 className="w-4 h-4 text-[#1F7A4D] shrink-0" />
                <span>04. İtfaiye Saha Denetim Refakati</span>
              </div>
            </div>

            {/* Action Buttons: Pafta Denetim Testi & Telephone Link */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenAuditModal}
                className="px-6 py-3.5 text-xs font-mono font-bold text-white bg-[#C1121F] hover:bg-[#a00e19] transition-colors uppercase tracking-wider cursor-pointer border border-[#C1121F] flex items-center gap-2"
              >
                <IsoRegulationIcon className="w-4 h-4 text-white" color="#FFFFFF" />
                <span>PAFTA DENETİM TESTİ BAŞLAT</span>
              </button>

              <a
                href={FIREFIX_NAP.phoneHref}
                className="font-mono text-xs font-bold text-white hover:text-[#C1121F] flex items-center gap-2 transition-colors px-4 py-3.5 border border-[#F3F0E8]/30 bg-[#141414]/60"
              >
                <Phone className="w-4 h-4 text-[#C1121F]" />
                <span>{FIREFIX_NAP.phoneFormatted}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. COMPARISON TABLE — Replaces Generic Icon Cards */}
      <section className="py-16 border-b border-[#141414]/15 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-8 pb-4 border-b border-[#141414]/15">
            <div>
              <span className="font-mono text-xs font-bold text-[#C1121F] uppercase tracking-wider block mb-1">
                SÜREÇ KARŞILAŞTIRMASI
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#141414] font-sans">
                Kendiniz Uğraşırsanız vs. FireFix İle
              </h2>
            </div>
            <p className="font-mono text-xs text-slate-600 max-w-md">
              Hatalı kapı açılışı, eksik evrak ve yanlış tüp seçimi nedeniyle reddedilen ruhsat başvuruları zaman ve bütçe kaybı yaşatır.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left font-sans text-sm border-collapse border border-[#141414]/15">
              <thead>
                <tr className="bg-[#141414] text-[#F3F0E8] font-mono text-xs uppercase">
                  <th className="p-4 border-r border-[#F3F0E8]/15 w-1/3">Süreç / Aşama</th>
                  <th className="p-4 border-r border-[#F3F0E8]/15 w-1/3 bg-red-950/40 text-red-300">Kendiniz Uğraşırsanız</th>
                  <th className="p-4 w-1/3 bg-emerald-950/40 text-emerald-300">FireFix Mühendislik İle</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#141414]/15 bg-white">
                <tr>
                  <td className="p-4 font-bold border-r border-[#141414]/15 bg-[#F3F0E8]/50">Proje & Çizim</td>
                  <td className="p-4 border-r border-[#141414]/15 text-slate-700">Dışarıdan mimara çizdirilir, itfaiye formatına uymama riski yüksektir.</td>
                  <td className="p-4 text-[#141414] font-semibold bg-emerald-50/50">AutoCAD uzman mühendislerimizce itfaiye standartlarına %100 uyumlu çizilir.</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold border-r border-[#141414]/15 bg-[#F3F0E8]/50">Ekipman & Montaj</td>
                  <td className="p-4 border-r border-[#141414]/15 text-slate-700">TSE belgesi olmayan tüpler veya yanlış yükseklikte montaj denetimde reddedilir.</td>
                  <td className="p-4 text-[#141414] font-semibold bg-emerald-50/50">TSE belgeli 6kg KKT / CO2 tüpler ve panik barlı kapılar anahtar teslim monte edilir.</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold border-r border-[#141414]/15 bg-[#F3F0E8]/50">Resmî Başvuru & Refakat</td>
                  <td className="p-4 border-r border-[#141414]/15 text-slate-700">Belediye ve İtfaiye Daire Başkanlığı arasında evrak takibini işletme sahibi yapar.</td>
                  <td className="p-4 text-[#141414] font-semibold bg-emerald-50/50">Evrak müracaatından denetim günü saha refakatine kadar tüm süreci biz yürütürüz.</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold border-r border-[#141414]/15 bg-[#F3F0E8]/50">Onay Başarısı & Süre</td>
                  <td className="p-4 border-r border-[#141414]/15 text-slate-700">Eksikler nedeniyle 2-3 ay uzayabilir, ruhsat gecikir.</td>
                  <td className="p-4 text-[#141414] font-semibold bg-emerald-50/50">İlk denetimde %100 onay hedeflenir, süreç genellikle 1–3 haftada tamamlanır.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 3. PAFTA SERVICES LIST — Replaces Bento Grid */}
      <section id="hizmetlerimiz" className="py-16 border-b border-[#141414]/15 bg-[#F3F0E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-10 pb-4 border-b border-[#141414]/15">
            <div>
              <span className="font-mono text-xs font-bold text-[#C1121F] uppercase tracking-wider block mb-1">
                PAFTA 01 / DANIŞMANLIK DİZİNİ
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#141414]">
                Mühendislik ve Ruhsat Hizmetlerimiz
              </h2>
            </div>
            <Link to="/hizmetlerimiz" className="font-mono text-xs font-bold text-[#C1121F] hover:underline flex items-center gap-1">
              <span>TÜM HİZMET DİZİNİ</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Numbered Row List */}
          <div className="space-y-0 divide-y divide-[#141414]/15 border-y border-[#141414]/15 bg-white">
            {SUB_SERVICES_DATA.map((sub, idx) => (
              <Link
                key={sub.slug}
                to={`/hizmetlerimiz/${sub.slug}`}
                className="group p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-[#F3F0E8] transition-colors"
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

      {/* 4. COMPLIANCE CALCULATOR */}
      <ComplianceCalculator
        onQuoteWithCalc={() => onOpenQuote()}
      />

      {/* 5. PROCESS SECTION (5 STEPS) */}
      <section className="py-16 border-b border-[#141414]/15 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10 pb-4 border-b border-[#141414]/15">
            <span className="font-mono text-xs font-bold text-[#C1121F] uppercase tracking-wider block mb-1">
              PAFTA 02 / UYGULAMA SÜRECİ
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#141414]">
              İtfaiye Onayına Giden 5 Adım
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {PROCESS_STEPS.map((p) => (
              <div key={p.stepNumber} className="border border-[#141414]/15 p-5 bg-[#F3F0E8] flex flex-col justify-between">
                <div>
                  <span className="font-mono font-bold text-xs bg-[#141414] text-[#F3F0E8] px-2 py-1 inline-block mb-3">
                    ADIM 0{p.stepNumber}
                  </span>
                  <h3 className="font-bold text-sm text-[#141414] mb-2">{p.title}</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">{p.shortDesc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SECTORS GRID WITH ISO PICTOGRAMS */}
      <section className="py-16 border-b border-[#141414]/15 bg-[#F3F0E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-10 pb-4 border-b border-[#141414]/15">
            <div>
              <span className="font-mono text-xs font-bold text-[#C1121F] uppercase tracking-wider block mb-1">
                PAFTA 03 / SEKTÖREL TEHLİKE SINIFLARI
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#141414]">
                Faaliyet Kolunuza Özel Yangın Önlemleri
              </h2>
            </div>
            <Link to="/sektorler" className="font-mono text-xs font-bold text-[#C1121F] hover:underline flex items-center gap-1">
              <span>TÜM SEKTÖR KRİTERLERİ</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SECTORS_DATA.map((sec) => (
              <div key={sec.slug} className="border border-[#141414]/15 bg-white p-6 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#141414]/15">
                  <span className="font-mono text-xs font-bold bg-[#141414] text-white px-2 py-0.5">
                    {sec.riskClass.toUpperCase()}
                  </span>
                  <IsoRegulationIcon className="w-5 h-5 text-[#C1121F]" />
                </div>
                <h3 className="font-bold text-base text-[#141414]">{sec.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{sec.shortDesc}</p>
                <div className="pt-2 border-t border-[#141414]/15 text-xs font-mono text-[#1F7A4D]">
                  ✓ Özel Mühendislik Önlemleri Mevcut
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ SECTION */}
      <section className="py-16 border-b border-[#141414]/15 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 pb-4 border-b border-[#141414]/15 text-center">
            <span className="font-mono text-xs font-bold text-[#C1121F] uppercase tracking-wider block mb-1">
              PAFTA 04 / SIK SORULAN SORULAR
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#141414]">
              Resmî İtfaiye Raporu Hakkında
            </h2>
          </div>

          <div className="space-y-2 border-y border-[#141414]/15 divide-y divide-[#141414]/15">
            {ALL_FAQS.slice(0, 6).map((faq) => (
              <div key={faq.id} className="p-4 bg-[#F3F0E8]/40">
                <button
                  onClick={() => setOpenFaqId(openFaqId === faq.id ? null : faq.id)}
                  className="w-full text-left flex items-center justify-between font-bold text-sm text-[#141414] cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <ChevronRight className={`w-4 h-4 transition-transform ${openFaqId === faq.id ? 'rotate-90 text-[#C1121F]' : ''}`} />
                </button>
                {openFaqId === faq.id && (
                  <p className="mt-3 text-xs text-slate-700 leading-relaxed pt-2 border-t border-[#141414]/10">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA BANNER */}
      <section className="py-16 bg-[#141414] text-[#F3F0E8] text-center border-t border-[#141414]">
        <div className="max-w-3xl mx-auto px-4 space-y-4">
          <span className="font-mono text-xs font-bold text-[#C1121F] uppercase tracking-wider block">
            SAKARYA TEKNOKENT MERKEZLİ MÜHENDİSLİK DANIŞMANLIĞI
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#F3F0E8] font-sans">
            İtfaiye denetimi öncesi sahanızı inceleyelim.
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            24 saat içinde mekânınızda yerinde keşif gerçekleştirip eksiklerinizi raporluyoruz.
          </p>
          <div className="pt-4 flex items-center justify-center gap-4 flex-wrap">
            <button
              onClick={onOpenQuote}
              className="px-7 py-4 text-xs font-mono font-bold text-white bg-[#C1121F] hover:bg-[#a00e19] uppercase tracking-wider cursor-pointer border border-[#C1121F]"
            >
              Ücretsiz Keşif Randevusu Al
            </button>
            <a
              href={FIREFIX_NAP.phoneHref}
              className="px-6 py-4 text-xs font-mono font-bold text-[#F3F0E8] border border-[#F3F0E8]/30 hover:border-[#F3F0E8] flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#C1121F]" />
              <span>{FIREFIX_NAP.phoneFormatted}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
