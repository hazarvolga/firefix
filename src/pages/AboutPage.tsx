import React, { useEffect } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { updatePageSeo } from '../lib/seo';
import { getOrganizationSchema, injectJsonLd } from '../lib/schema';
import { FIREFIX_NAP, REGIONAL_SEO_DATA } from '../data/firefixData';
import { PhoneCall, MapPin } from 'lucide-react';
import { IsoRegulationIcon, IsoAssemblyPointIcon } from '../components/IsoPictograms';

interface AboutPageProps {
  onOpenAuditWizard: () => void;
  onOpenQuoteModal: (serviceTitle?: string) => void;
}

export function AboutPage({ onOpenAuditWizard, onOpenQuoteModal }: AboutPageProps) {
  useEffect(() => {
    updatePageSeo({
      title: 'Hakkımızda & Sakarya Bölgesi Operasyonu | FireFix Mühendislik',
      description: 'Sakarya Teknokent merkezli FireFix; Sakarya (Serdivan, Adapazarı, Erenler, Arifiye, Hendek) ve Kocaeli genelinde resmî İtfaiye Uygunluk Raporu ve yangın projelendirmesi sunar.',
      canonicalPath: '/hakkimizda',
    });

    const orgSchema = getOrganizationSchema();
    injectJsonLd(orgSchema);
  }, []);

  return (
    <div className="bg-[#F3F0E8] text-[#141414] font-sans pb-16">
      <Breadcrumbs items={[{ label: 'Hakkımızda & Hizmet Bölgelerimiz', path: '/hakkimizda' }]} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-12">
        {/* Header Block */}
        <div className="max-w-3xl border-b border-[#141414]/15 pb-4">
          <span className="font-mono text-xs font-bold text-[#C1121F] uppercase tracking-wider block mb-1">
            PAFTA 00 / KURUMSAL PROFİL & SAKARYA MERKEZİ
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#141414]">
            FireFix Mühendislik & Yangın Güvenlik Danışmanlığı
          </h1>
          <p className="mt-3 text-sm text-slate-700 leading-relaxed font-normal">
            Sakarya Teknokent Serdivan yerleşkesinde kurulan mühendislik ofisimiz; ticari işletmelerin ve sanayi tesislerinin Binaların Yangından Korunması Hakkında Yönetmelik gereğince ruhsatlandırılması süreçlerini yürütür.
          </p>
        </div>

        {/* Corporate Profile Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="p-6 bg-white border border-[#141414]/15 space-y-3 font-mono text-xs">
            <span className="font-bold text-[#C1121F] uppercase block">01 / MİSYON VE YAKLAŞIM</span>
            <p className="text-slate-700 leading-relaxed font-sans text-xs">
              Mevzuat analizinden AutoCAD kaçış projelerinin çizilmesine, TSE belgeli ekipman montajından resmî itfaiye denetim günü saha refakatine kadar tüm aşamaları tek elden yönetiyoruz.
            </p>
          </div>

          <div className="p-6 bg-[#141414] text-[#F3F0E8] border border-[#141414] space-y-3 font-mono text-xs">
            <span className="text-[#C1121F] font-bold uppercase block">02 / MÜHENDİSLİK İLKELERİ</span>
            <ul className="space-y-1.5 text-slate-300">
              <li>· Sıfır Reddedilme Riski</li>
              <li>· Şeffaf ve Sabit Fiyatlandırma</li>
              <li>· 24 Saat İçinde Hızlı Saha Keşfi</li>
            </ul>
          </div>
        </div>

        {/* Integrated Regional Operation Section */}
        <div className="pt-6 border-t border-[#141414]/15 space-y-6">
          <div className="max-w-3xl">
            <span className="font-mono text-xs font-bold text-[#C1121F] uppercase tracking-wider block mb-1">
              PAFTA 04 / BÖLGESEL MÜHENDİSLİK OPERASYONU & SAHA MERKEZLERİ
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#141414]">
              Sakarya ve Marmara Bölgesi Saha Hizmet Ağımız
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
              {REGIONAL_SEO_DATA.heroIntro}
            </p>
          </div>

          {/* District Operation Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {REGIONAL_SEO_DATA.districts.map((dist) => (
              <div key={dist.name} className="p-5 bg-white border border-[#141414]/15 space-y-2 font-mono text-xs">
                <div className="flex items-center justify-between pb-2 border-b border-[#141414]/15">
                  <span className="font-bold text-[#141414] text-sm">{dist.name}</span>
                  <IsoAssemblyPointIcon className="w-4 h-4 text-[#C1121F]" />
                </div>
                <p className="text-xs font-sans text-slate-600 leading-relaxed">{dist.desc}</p>
                <div className="pt-1 text-[11px] text-[#C1121F] font-bold">
                  {dist.activeProjects} Aktif Ruhsat Dosyası
                </div>
              </div>
            ))}
          </div>

          {/* Neighbor Cities Coverage */}
          <div className="p-6 bg-white border border-[#141414]/15 space-y-4">
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#141414] uppercase border-b border-[#141414]/15 pb-2">
              <MapPin className="w-4 h-4 text-[#C1121F]" />
              <span>Çevre İller Operasyon Kapsamı (Kocaeli, Düzce, Bolu, İstanbul, Bursa)</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 font-mono text-xs">
              {REGIONAL_SEO_DATA.neighborCities.map((city) => (
                <div key={city.name} className="p-3 bg-[#F3F0E8] border border-[#141414]/10 space-y-1">
                  <span className="font-bold text-[#141414] block">{city.name}</span>
                  <p className="text-[11px] font-sans text-slate-600">{city.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Primary CTA Block */}
        <div className="p-8 bg-[#141414] text-[#F3F0E8] text-center font-mono space-y-4">
          <h2 className="text-xl font-bold font-sans text-white">Bölgeniz İçin Ücretsiz Keşif Randevusu Alın</h2>
          <div className="pt-2 flex justify-center gap-4 flex-wrap">
            <a
              href={FIREFIX_NAP.phoneHref}
              className="px-6 py-3.5 bg-[#C1121F] hover:bg-[#a00e19] text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 cursor-pointer"
            >
              <PhoneCall className="w-4 h-4" />
              <span>{FIREFIX_NAP.phone}</span>
            </a>
            <button
              onClick={() => onOpenQuoteModal('Hakkımızda ve Sakarya Bölgesi Keşfi')}
              className="px-6 py-3.5 border border-[#F3F0E8]/30 hover:border-[#F3F0E8] text-[#F3F0E8] font-bold text-xs uppercase cursor-pointer"
            >
              24 SAAT İÇİNDE KEŞİF TALEBİ GÖNDER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
