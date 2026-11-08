import React, { useState } from 'react';
import { calculateFireCompliance, BusinessType } from '../utils/calculator';
import { IsoRegulationIcon } from './IsoPictograms';

interface ComplianceCalculatorProps {
  onQuoteWithCalc?: (data: any) => void;
}

export const ComplianceCalculator: React.FC<ComplianceCalculatorProps> = ({ onQuoteWithCalc }) => {
  const [businessType, setBusinessType] = useState<BusinessType>('cafe_restaurant');
  const [areaSqm, setAreaSqm] = useState<number>(200);
  const [hasLpg, setHasLpg] = useState(true);

  const result = calculateFireCompliance({
    businessType,
    areaSqm,
    floorCount: 1,
    occupantCapacity: Math.ceil(areaSqm / 3),
    hasGasOrChemicals: hasLpg,
  });

  return (
    <section className="py-16 border-b border-[#141414]/15 bg-[#141414] text-[#F3F0E8] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#C1121F] uppercase tracking-wider mb-2">
          <IsoRegulationIcon className="w-4 h-4" />
          <span>PAFTA HESAPLAMA MATRİSİ — BYKHY MADDE 6</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F3F0E8] font-sans mb-8">
          İş Yerinizin Yangın Ekipmanı Gereksinimi
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Inputs Column */}
          <div className="lg:col-span-6 space-y-5 bg-[#1a1a1a] border border-[#F3F0E8]/20 p-6">
            <div>
              <label className="block font-mono text-xs uppercase tracking-wider text-slate-300 mb-2">
                01. Faaliyet Kolu / İşletme Türü
              </label>
              <select
                value={businessType}
                onChange={(e) => setBusinessType(e.target.value as BusinessType)}
                className="w-full bg-[#141414] border border-[#F3F0E8]/20 text-[#F3F0E8] p-3 font-mono text-xs focus:outline-none focus:border-[#C1121F]"
              >
                <option value="cafe_restaurant">Restoran / Kafe / Fırın</option>
                <option value="factory_warehouse">Fabrika / İmalathane / Depo</option>
                <option value="hotel_lodging">Otel / Pansiyon / Yurt</option>
                <option value="school_nursery">Okul / Kreş / Özel Kurs</option>
                <option value="office_plaza">Ofis / Plaza / Sağlık Kliniği</option>
                <option value="retail_store">Ticari Mağaza / Dükkan</option>
              </select>
            </div>

            <div>
              <div className="flex justify-between font-mono text-xs text-slate-300 mb-2">
                <span>02. Kapalı Kullanım Alanı (m²)</span>
                <span className="font-bold text-[#C1121F]">{areaSqm} m²</span>
              </div>
              <input
                type="range"
                min="50"
                max="2500"
                step="25"
                value={areaSqm}
                onChange={(e) => setAreaSqm(Number(e.target.value))}
                className="w-full accent-[#C1121F] cursor-pointer"
              />
            </div>

            <div className="pt-2 border-t border-[#F3F0E8]/15">
              <label className="flex items-center gap-3 cursor-pointer font-mono text-xs text-slate-300">
                <input
                  type="checkbox"
                  checked={hasLpg}
                  onChange={(e) => setHasLpg(e.target.checked)}
                  className="w-4 h-4 accent-[#C1121F]"
                />
                <span>İş yerinde LPG, doğalgaz veya ocak başı pişirme mevcut mu?</span>
              </label>
            </div>
          </div>

          {/* Results Output Column */}
          <div className="lg:col-span-6 bg-[#1a1a1a] border border-[#F3F0E8]/20 p-6 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#F3F0E8]/15 font-mono text-xs">
              <span className="text-slate-400">Yönetmelik Risk Sınıfı:</span>
              <span className="bg-[#C1121F] text-white font-bold px-2.5 py-0.5">
                {result.riskGrade.toUpperCase()}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 font-mono text-xs pt-2">
              <div className="p-3 bg-[#141414] border border-[#F3F0E8]/15">
                <span className="text-slate-400 block mb-1">Gerekli 6kg Tüp:</span>
                <span className="text-xl font-bold text-white">{result.requiredExtinguishers} ADET</span>
              </div>
              <div className="p-3 bg-[#141414] border border-[#F3F0E8]/15">
                <span className="text-slate-400 block mb-1">Gerekli CO2 Tüp:</span>
                <span className="text-xl font-bold text-white">{result.co2Extinguishers} ADET</span>
              </div>
            </div>

            <div className="p-3 bg-[#141414] border border-[#F3F0E8]/15 font-mono text-xs space-y-1">
              <div className="flex justify-between">
                <span className="text-slate-400">Sprinkler Tesisatı:</span>
                <span className="text-white font-bold">{result.requiresSprinkler ? 'ZORUNLU' : 'GEREKMİYOR'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Yangın Dolabı Tesisatı:</span>
                <span className="text-white font-bold">{result.requiresFireCabinet ? 'ZORUNLU' : 'GEREKMİYOR'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Tahmini Proje Onay Süresi:</span>
                <span className="text-[#1F7A4D] font-bold">~{result.estimatedApprovalDays} GÜN</span>
              </div>
            </div>

            <button
              onClick={() => onQuoteWithCalc && onQuoteWithCalc(result)}
              className="w-full py-3.5 bg-[#C1121F] hover:bg-[#a00e19] text-white font-mono font-bold text-xs uppercase tracking-wider cursor-pointer border border-[#C1121F]"
            >
              BU HESAPLAMAYLA TEKLİF AL
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
