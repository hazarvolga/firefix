import React, { useEffect, useState } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { updatePageSeo } from '../lib/seo';
import { getOrganizationSchema, injectJsonLd } from '../lib/schema';
import { FIREFIX_NAP } from '../data/firefixData';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { IsoRegulationIcon } from '../components/IsoPictograms';

interface ContactPageProps {
  onOpenAuditWizard: () => void;
  onOpenQuoteModal: (serviceTitle?: string) => void;
}

export function ContactPage({ onOpenAuditWizard, onOpenQuoteModal }: ContactPageProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    district: 'Serdivan',
    businessType: 'Restoran / Kafe',
    areaSqM: '',
    message: '',
  });

  useEffect(() => {
    updatePageSeo({
      title: 'İletişim & Keşif İsteği | FireFix Sakarya',
      description: 'Sakarya Teknokent merkezli mühendislik ofisimize ulaşın. Telefon: 0536 217 65 35.',
      canonicalPath: '/iletisim',
    });

    const localBusinessSchema = getOrganizationSchema();
    injectJsonLd(localBusinessSchema);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#F3F0E8] text-[#141414] font-sans pb-16">
      <Breadcrumbs items={[{ label: 'İletişim', path: '/iletisim' }]} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-10">
        <div className="max-w-3xl border-b border-[#141414]/15 pb-4">
          <span className="font-mono text-xs font-bold text-[#C1121F] uppercase tracking-wider block mb-1">
            PAFTA İLETİŞİM / SAKARYA TEKNOKENT
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#141414]">
            Bizimle İletişime Geçin
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left NAP Info */}
          <div className="lg:col-span-5 space-y-4 font-mono text-xs">
            <div className="p-6 bg-white border border-[#141414]/15 space-y-4">
              <h2 className="font-bold text-sm text-[#141414] border-b border-[#141414]/15 pb-2 uppercase">
                İLETİŞİM BİLGİLERİ
              </h2>
              <div className="space-y-3 text-slate-800">
                <a href={FIREFIX_NAP.phoneHref} className="flex items-center gap-2 hover:text-[#C1121F]">
                  <Phone className="w-4 h-4 text-[#C1121F]" />
                  <span>{FIREFIX_NAP.phone}</span>
                </a>
                <a href={`mailto:${FIREFIX_NAP.email}`} className="flex items-center gap-2 hover:text-[#C1121F]">
                  <Mail className="w-4 h-4 text-[#C1121F]" />
                  <span>{FIREFIX_NAP.email}</span>
                </a>
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#C1121F] shrink-0 mt-0.5" />
                  <span>{FIREFIX_NAP.address}</span>
                </div>
              </div>
            </div>

            <div className="p-6 bg-[#141414] text-[#F3F0E8] border border-[#141414] space-y-3">
              <span className="text-[#C1121F] font-bold block uppercase">ÇALIŞMA SAATLERİ</span>
              <p className="text-slate-300 text-xs font-sans">{FIREFIX_NAP.workingHours}</p>
              <button
                onClick={onOpenAuditWizard}
                className="w-full mt-2 py-3 bg-[#C1121F] text-white font-bold uppercase tracking-wider hover:bg-[#a00e19] cursor-pointer"
              >
                4 ADIMDA RUHSAT TESTİ
              </button>
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 bg-white border border-[#141414]/15">
              <h2 className="text-xl font-bold font-sans text-[#141414] mb-4 pb-2 border-b border-[#141414]/15">
                Ücretsiz Keşif & Teklif Formu
              </h2>

              {submitted ? (
                <div className="p-4 bg-[#1F7A4D]/20 border border-[#1F7A4D] font-mono text-xs text-[#141414] space-y-2">
                  <div className="font-bold text-[#1F7A4D]">✓ TALEBİNİZ ALINDI</div>
                  <p>Mühendis ekibimiz en geç 2 saat içinde iletişime geçecektir.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block uppercase mb-1">Ad Soyad *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ahmet Yılmaz"
                        className="w-full p-3 bg-[#F3F0E8] border border-[#141414]/20 focus:outline-none focus:border-[#C1121F]"
                      />
                    </div>
                    <div>
                      <label className="block uppercase mb-1">Telefon Numarası *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="0532 000 00 00"
                        className="w-full p-3 bg-[#F3F0E8] border border-[#141414]/20 focus:outline-none focus:border-[#C1121F]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block uppercase mb-1">Lokasyon</label>
                      <select
                        value={formData.district}
                        onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                        className="w-full p-3 bg-[#F3F0E8] border border-[#141414]/20 focus:outline-none"
                      >
                        <option value="Serdivan">Serdivan / Sakarya</option>
                        <option value="Adapazari">Adapazarı / Sakarya</option>
                        <option value="Erenler">Erenler / Sakarya</option>
                        <option value="Arifiye">Arifiye (1. OSB)</option>
                        <option value="Hendek">Hendek (2. OSB)</option>
                        <option value="Kocaeli">Kocaeli</option>
                      </select>
                    </div>

                    <div>
                      <label className="block uppercase mb-1">Faaliyet Kolu</label>
                      <select
                        value={formData.businessType}
                        onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                        className="w-full p-3 bg-[#F3F0E8] border border-[#141414]/20 focus:outline-none"
                      >
                        <option value="Restoran / Kafe">Restoran / Kafe / Fırın</option>
                        <option value="Fabrika / Depo">Fabrika / İmalathane / Lojistik</option>
                        <option value="Otel / Yurt">Otel / Yurt / Pansiyon</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block uppercase mb-1">Mesajınız</label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="İş yerinizin durumu ve sorularınız..."
                      className="w-full p-3 bg-[#F3F0E8] border border-[#141414]/20 focus:outline-none resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#C1121F] hover:bg-[#a00e19] text-white font-bold uppercase tracking-wider cursor-pointer border border-[#C1121F] flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>KEŞİF TALEBİNİ GÖNDER</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
