import React, { useEffect } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { updatePageSeo } from '../lib/seo';
import { FIREFIX_NAP } from '../data/firefixData';

export function KvkkPage() {
  useEffect(() => {
    updatePageSeo({
      title: 'KVKK Aydınlatma Metni | FireFix Sakarya',
      description: '6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) uyarınca FireFix kişisel veri işleme ve koruma politikası.',
      canonicalPath: '/kvkk',
    });
  }, []);

  return (
    <div className="bg-[#F3F0E8] text-[#141414] font-sans pb-16">
      <Breadcrumbs items={[{ label: 'KVKK Metni', path: '/kvkk' }]} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="bg-white p-6 sm:p-10 border border-[#141414]/15 space-y-4">
          <div className="border-b border-[#141414]/15 pb-4 font-mono text-xs">
            <span className="text-[#C1121F] font-bold block uppercase">YASAL BİLGİLENDİRME</span>
            <h1 className="text-2xl font-bold font-sans text-[#141414] mt-1">
              Kişisel Verilerin Korunması Aydınlatma Metni (KVKK)
            </h1>
          </div>
          <div className="space-y-4 text-xs sm:text-sm leading-relaxed text-slate-800 font-sans">
            <p>
              FireFix Mühendislik & Yangın Güvenlik Danışmanlığı olarak 6698 sayılı KVKK uyarınca kişisel verilerinizin gizliliğine önem veriyoruz.
            </p>
            <p>
              Sitede doldurduğunuz keşif formları ve başvuru bilgileri yalnızca itfaiye ruhsat ve projelendirme işlemlerinizin yürütülmesi amacıyla işlenir, üçüncü taraflarla paylaşılmaz.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KvkkPage;
