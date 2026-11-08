import React, { useState } from 'react';
import { X, ArrowRight, AlertTriangle } from 'lucide-react';
import { IsoRegulationIcon } from './IsoPictograms';

interface AuditWizardModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenQuoteWithAudit: (auditSummary: string) => void;
}

export const AuditWizardModal: React.FC<AuditWizardModalProps> = ({
  isOpen,
  onClose,
  onOpenQuoteWithAudit,
}) => {
  const [step, setStep] = useState<number>(1);
  const [businessType, setBusinessType] = useState<string>('Kafe / Restoran');
  const [hasFireDoor, setHasFireDoor] = useState<string>('yok');
  const [extinguisherStatus, setExtinguisherStatus] = useState<string>('tarih_gecti');

  if (!isOpen) return null;

  const calculateScore = () => {
    let score = 100;
    const issues: string[] = [];

    if (hasFireDoor !== 'evet') {
      score -= 40;
      issues.push('Yönetmeliğe uygun panik barlı acil durum kapısı eksik.');
    }
    if (extinguisherStatus !== 'evet') {
      score -= 40;
      issues.push('Yangın tüpleri eksik veya periyodik dolum tarihi geçmiş.');
    }

    return { score: Math.max(20, score), issues };
  };

  const { score, issues } = calculateScore();

  const handleFinish = () => {
    const summary = `${businessType} işletmesi için Ruhsat Testi yapıldı. Skor: %${score}. Eksikler: ${issues.join(' | ')}`;
    onClose();
    onOpenQuoteWithAudit(summary);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#141414]/90 flex items-center justify-center p-4">
      <div className="bg-[#141414] text-[#F3F0E8] border border-[#F3F0E8]/20 max-w-lg w-full p-6 relative font-sans">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 text-slate-400 hover:text-white bg-[#1a1a1a] border border-[#F3F0E8]/20 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6 border-b border-[#F3F0E8]/15 pb-4">
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#C1121F] uppercase tracking-wider mb-1">
            <IsoRegulationIcon className="w-4 h-4" />
            <span>PAFTA TESTİ — ADIM 0{step} / 03</span>
          </div>
          <h3 className="text-xl font-bold font-sans text-white">
            İtfaiye Denetimi Ön Hazırlık Kontrolü
          </h3>
        </div>

        {/* Step 1 */}
        {step === 1 && (
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase text-slate-300">01. İşletmenizin Faaliyet Alanı</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-mono text-xs">
              {['Kafe / Restoran / Fırın', 'Fabrika / İmalathane', 'Otel / Pansiyon / Yurt', 'Okul / Kreş / Kurs', 'Ofis / Plaza / Klinik', 'Ticari Mağaza / Dükkan'].map((item) => (
                <button
                  key={item}
                  onClick={() => setBusinessType(item)}
                  className={`p-3 border text-left cursor-pointer transition-colors ${
                    businessType === item ? 'bg-[#C1121F] text-white border-[#C1121F] font-bold' : 'bg-[#1a1a1a] border-[#F3F0E8]/20 text-slate-300'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
            <div className="pt-4 flex justify-end">
              <button
                onClick={() => setStep(2)}
                className="px-5 py-2.5 text-xs font-mono font-bold text-white bg-[#C1121F] hover:bg-[#a00e19] flex items-center gap-2 cursor-pointer"
              >
                <span>SONRAKİ ADIM</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase text-slate-300">02. Panik Barlı Dışa Açılan Yangın Kapısı</h4>
            <div className="space-y-2 font-mono text-xs">
              <button
                onClick={() => setHasFireDoor('evet')}
                className={`w-full p-3 border text-left cursor-pointer transition-colors ${
                  hasFireDoor === 'evet' ? 'bg-[#1F7A4D] text-white border-[#1F7A4D] font-bold' : 'bg-[#1a1a1a] border-[#F3F0E8]/20 text-slate-300'
                }`}
              >
                [✓] Panik barlı sertifikalı yangın kapısı mevcut.
              </button>
              <button
                onClick={() => setHasFireDoor('yok')}
                className={`w-full p-3 border text-left cursor-pointer transition-colors ${
                  hasFireDoor === 'yok' ? 'bg-[#C1121F] text-white border-[#C1121F] font-bold' : 'bg-[#1a1a1a] border-[#F3F0E8]/20 text-slate-300'
                }`}
              >
                [✕] Yangın kapısı yok veya kapı içe doğru açılıyor.
              </button>
            </div>
            <div className="pt-4 flex justify-between items-center font-mono text-xs">
              <button onClick={() => setStep(1)} className="text-slate-400 hover:text-white cursor-pointer">← GERİ</button>
              <button onClick={() => setStep(3)} className="px-5 py-2.5 font-bold text-white bg-[#C1121F] hover:bg-[#a00e19] cursor-pointer">
                SONUÇLARI GÖR
              </button>
            </div>
          </div>
        )}

        {/* Step 3 Results */}
        {step === 3 && (
          <div className="space-y-5">
            <div className="p-4 bg-[#1a1a1a] border border-[#F3F0E8]/20 text-center font-mono">
              <span className="text-xs text-slate-400 block mb-1">TAHMİNİ UYGUNLUK SKORU</span>
              <span className={`text-4xl font-extrabold ${score >= 80 ? 'text-[#1F7A4D]' : 'text-[#C1121F]'}`}>
                %{score}
              </span>
            </div>

            {issues.length > 0 && (
              <div className="space-y-2 font-mono text-xs">
                <span className="text-[#C1121F] font-bold block">TESPİT EDİLEN EKSİKLER:</span>
                {issues.map((iss, idx) => (
                  <div key={idx} className="p-2.5 bg-red-950/40 border border-[#C1121F]/40 text-red-200 flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-[#C1121F] shrink-0 mt-0.5" />
                    <span>{iss}</span>
                  </div>
                ))}
              </div>
            )}

            <div className="pt-2 flex gap-3 font-mono text-xs">
              <button onClick={() => setStep(1)} className="py-3 px-4 bg-[#1a1a1a] border border-[#F3F0E8]/20 text-slate-300 hover:text-white cursor-pointer">
                TEKRAR DENE
              </button>
              <button onClick={handleFinish} className="flex-1 py-3 px-4 bg-[#C1121F] text-white font-bold hover:bg-[#a00e19] cursor-pointer">
                KEŞİF RANDEVUSU İSTE
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
