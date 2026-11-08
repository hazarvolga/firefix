import React, { useState, useEffect } from 'react';
import { X, Send, Phone } from 'lucide-react';
import { FIREFIX_NAP } from '../data/firefixData';
import { IsoRegulationIcon } from './IsoPictograms';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledService?: string;
  prefilledCity?: string;
  prefilledAuditSummary?: string;
  prefilledCalcData?: any;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  prefilledService = '',
  prefilledCity = 'Sakarya',
  prefilledAuditSummary = '',
  prefilledCalcData,
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [city, setCity] = useState('Sakarya');
  const [serviceType, setServiceType] = useState('İş Yeri Açma ve Çalışma Ruhsatı');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [refCode, setRefCode] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (prefilledCity) setCity(prefilledCity);
    if (prefilledService) setServiceType(prefilledService);
    if (prefilledCalcData) {
      setNotes(`Hesaplayıcı Verisi: ${prefilledCalcData.businessTypeLabel}, Risk: ${prefilledCalcData.riskGrade}`);
    } else if (prefilledAuditSummary) {
      setNotes(prefilledAuditSummary);
    }
  }, [prefilledCity, prefilledService, prefilledAuditSummary, prefilledCalcData]);

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!fullName.trim()) errs.fullName = 'Ad Soyad zorunludur.';
    if (!phone.trim() || phone.length < 10) errs.phone = 'Geçerli bir telefon numarası giriniz.';
    if (!email.trim() || !email.includes('@')) errs.email = 'Geçerli bir e-posta adresi giriniz.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const randomRef = `FX-${Math.floor(1000 + Math.random() * 9000)}`;
    setRefCode(randomRef);
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#141414]/90 flex items-center justify-center p-4">
      <div className="bg-[#141414] text-[#F3F0E8] border border-[#F3F0E8]/20 max-w-xl w-full p-6 sm:p-8 relative font-sans max-h-[92vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 text-slate-400 hover:text-white bg-[#1a1a1a] border border-[#F3F0E8]/20 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#C1121F] uppercase tracking-wider mb-2">
              <IsoRegulationIcon className="w-4 h-4" />
              <span>PAFTA TALEBİ — ÜCRETSİZ KEŞİF FORMU</span>
            </div>
            <h3 className="text-xl font-bold font-sans text-white mb-2">
              Keşif & Fiyat Teklifi Talebi
            </h3>
            <p className="text-xs text-slate-300 font-mono mb-6">
              Mühendis ekibimiz talebinizi inceleyip 2 saat içinde iletişime geçecektir.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 uppercase mb-1">Ad Soyad *</label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Ahmet Yılmaz"
                    className={`w-full bg-[#1a1a1a] border px-3 py-2.5 text-[#F3F0E8] focus:outline-none ${
                      errors.fullName ? 'border-[#C1121F]' : 'border-[#F3F0E8]/20 focus:border-[#C1121F]'
                    }`}
                  />
                  {errors.fullName && <span className="text-[10px] text-[#C1121F] mt-1 block">{errors.fullName}</span>}
                </div>

                <div>
                  <label className="block text-slate-300 uppercase mb-1">Telefon Numarası *</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="0532 000 00 00"
                    className={`w-full bg-[#1a1a1a] border px-3 py-2.5 text-[#F3F0E8] focus:outline-none ${
                      errors.phone ? 'border-[#C1121F]' : 'border-[#F3F0E8]/20 focus:border-[#C1121F]'
                    }`}
                  />
                  {errors.phone && <span className="text-[10px] text-[#C1121F] mt-1 block">{errors.phone}</span>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 uppercase mb-1">E-posta Adresi *</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="info@sirketiniz.com"
                    className={`w-full bg-[#1a1a1a] border px-3 py-2.5 text-[#F3F0E8] focus:outline-none ${
                      errors.email ? 'border-[#C1121F]' : 'border-[#F3F0E8]/20 focus:border-[#C1121F]'
                    }`}
                  />
                  {errors.email && <span className="text-[10px] text-[#C1121F] mt-1 block">{errors.email}</span>}
                </div>

                <div>
                  <label className="block text-slate-300 uppercase mb-1">İşletme / Şirket Unvanı</label>
                  <input
                    type="text"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="Örn: Lezzet Restoran"
                    className="w-full bg-[#1a1a1a] border border-[#F3F0E8]/20 px-3 py-2.5 text-[#F3F0E8] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 uppercase mb-1">Bulunduğunuz Şehir</label>
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full bg-[#1a1a1a] border border-[#F3F0E8]/20 px-3 py-2.5 text-[#F3F0E8] focus:outline-none"
                  >
                    <option value="Sakarya">Sakarya (Merkez / İlçeler)</option>
                    <option value="Kocaeli">Kocaeli (İzmit / Gebze)</option>
                    <option value="Düzce">Düzce / Bolu</option>
                    <option value="İstanbul">İstanbul</option>
                    <option value="Bursa">Bursa & Yalova</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-300 uppercase mb-1">Hizmet Türü</label>
                  <select
                    value={serviceType}
                    onChange={(e) => setServiceType(e.target.value)}
                    className="w-full bg-[#1a1a1a] border border-[#F3F0E8]/20 px-3 py-2.5 text-[#F3F0E8] focus:outline-none"
                  >
                    <option value="İş Yeri Açma ve Çalışma Ruhsatı">İş Yeri Açma ve Çalışma Ruhsatı</option>
                    <option value="İtfaiye Uygunluk Raporu Ön Denetimi">İtfaiye Uygunluk Raporu Ön Denetimi</option>
                    <option value="Tahliye & Sprinkler Projelendirme">Tahliye & Sprinkler Projelendirme</option>
                    <option value="TSE Yangın Söndürme Tüpleri & Ekipman">TSE Yangın Söndürme Tüpleri & Ekipman</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-slate-300 uppercase mb-1">Ek Notlar & Notlarınız</label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Mekanın metrekaresi, kat durumu veya aciliyet notlarınızı belirtebilirsiniz..."
                  className="w-full bg-[#1a1a1a] border border-[#F3F0E8]/20 px-3 py-2.5 text-[#F3F0E8] focus:outline-none resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#C1121F] hover:bg-[#a00e19] text-white font-mono font-bold uppercase tracking-wider cursor-pointer border border-[#C1121F] flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>KEŞİF TALEBİNİ GÖNDER</span>
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-6 text-center space-y-4 font-mono text-xs">
            <div className="p-3 bg-[#1F7A4D]/20 border border-[#1F7A4D] text-[#1F7A4D] font-bold text-sm">
              ✓ TALEBİNİZ BAŞARIYLA KAYDEDİLDİ
            </div>
            <div className="p-4 bg-[#1a1a1a] border border-[#F3F0E8]/20 text-left space-y-2">
              <div className="flex justify-between border-b border-[#F3F0E8]/10 pb-1">
                <span className="text-slate-400">REFERANS KODU:</span>
                <span className="text-[#C1121F] font-bold">{refCode}</span>
              </div>
              <div className="flex justify-between border-b border-[#F3F0E8]/10 pb-1">
                <span className="text-slate-400">AD SOYAD:</span>
                <span className="text-white">{fullName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">ŞEHİR:</span>
                <span className="text-white">{city}</span>
              </div>
            </div>
            <p className="text-slate-300">
              Mühendislik ekibimiz <strong className="text-white">{phone}</strong> numarasından sizinle iletişime geçecektir.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-6 py-2.5 bg-[#1a1a1a] border border-[#F3F0E8]/20 text-white font-bold cursor-pointer"
            >
              TAMAM, KAPAT
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
