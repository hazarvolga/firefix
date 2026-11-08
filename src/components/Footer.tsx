import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import { FIREFIX_NAP, SUB_SERVICES_DATA } from '../data/firefixData';

interface FooterProps {
  onOpenQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuote }) => {
  const [email, setEmail] = useState('');
  const [sector, setSector] = useState('Kafe & Restoran');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <footer className="bg-[#141414] text-[#F3F0E8] border-t border-[#F3F0E8]/15 font-sans">
      {/* Newsletter Block */}
      <div className="border-b border-[#F3F0E8]/15 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-2">
            <span className="font-mono text-xs font-bold text-[#C1121F] uppercase tracking-wider block">
              BÜLTEN ABONELİĞİ
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-sans text-white">
              Resmî Mevzuat Değişiklikleri E-Postanıza Gelsin
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed font-normal">
              Binaların Yangından Korunması Hakkında Yönetmelik güncellemeleri ve itfaiye denetim kriterleri.
            </p>
          </div>

          <div className="lg:col-span-6">
            {subscribed ? (
              <div className="p-4 bg-[#1F7A4D]/20 border border-[#1F7A4D] font-mono text-xs text-[#F3F0E8]">
                ✓ E-posta adresiniz kaydedildi. Mevzuat değişikliklerinde bilgilendirileceksiniz.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 font-mono text-xs">
                <select
                  value={sector}
                  onChange={(e) => setSector(e.target.value)}
                  className="bg-[#1a1a1a] border border-[#F3F0E8]/20 px-3 py-3 text-[#F3F0E8] focus:outline-none"
                >
                  <option value="Kafe & Restoran">Kafe & Restoran</option>
                  <option value="Sanayi & Depo">Sanayi & Depo</option>
                  <option value="Otel & Turizm">Otel & Turizm</option>
                  <option value="Eğitim & Sağlık">Eğitim & Sağlık</option>
                  <option value="Ofis & Mağaza">Ofis & Mağaza</option>
                </select>

                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="E-posta adresinizi giriniz..."
                  className="flex-1 bg-[#1a1a1a] border border-[#F3F0E8]/20 px-3 py-3 text-[#F3F0E8] focus:outline-none"
                />

                <button
                  type="submit"
                  className="px-5 py-3 bg-[#C1121F] text-white font-bold uppercase tracking-wider hover:bg-[#a00e19] cursor-pointer"
                >
                  ABONE OL
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Navigation & Contact Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-4 gap-8 text-xs">
        {/* Col 1: Brand Info */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 font-mono">
            <span className="bg-[#C1121F] text-white font-bold px-2 py-0.5">FF</span>
            <span className="font-extrabold text-base tracking-tight text-white font-sans">FIREFIX</span>
          </div>
          <p className="text-slate-300 leading-relaxed font-normal">
            Sakarya Teknokent merkezli FireFix; ticari işletmelerin ve sanayi tesislerinin Binaların Yangından Korunması Hakkında Yönetmelik standartlarında ruhsatlandırılmasını sağlar.
          </p>
          <div className="font-mono text-[11px] text-slate-400">
            SAKARYA TEKNOKENT SERDİVAN
          </div>
        </div>

        {/* Col 2: Services List */}
        <div className="space-y-2 font-mono">
          <h4 className="font-bold text-white uppercase tracking-wider text-[11px] border-b border-[#F3F0E8]/15 pb-2">
            HİZMETLER
          </h4>
          <ul className="space-y-1.5 text-slate-300">
            {SUB_SERVICES_DATA.slice(0, 5).map((s) => (
              <li key={s.slug}>
                <Link to={`/hizmetlerimiz/${s.slug}`} className="hover:text-[#C1121F] transition-colors">
                  · {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: Regional Coverage */}
        <div className="space-y-2 font-mono">
          <h4 className="font-bold text-white uppercase tracking-wider text-[11px] border-b border-[#F3F0E8]/15 pb-2">
            BÖLGELER
          </h4>
          <ul className="space-y-1.5 text-slate-300">
            <li><Link to="/hakkimizda" className="hover:text-[#C1121F]">· Sakarya (Merkez & OSB)</Link></li>
            <li><Link to="/hakkimizda" className="hover:text-[#C1121F]">· Kocaeli (İzmit / Gebze)</Link></li>
            <li><Link to="/hakkimizda" className="hover:text-[#C1121F]">· Düzce & Bolu</Link></li>
            <li><Link to="/hakkimizda" className="hover:text-[#C1121F]">· İstanbul (Anadolu / Avrupa)</Link></li>
            <li><Link to="/hakkimizda" className="hover:text-[#C1121F]">· Bursa & Yalova</Link></li>
          </ul>
        </div>

        {/* Col 4: Contact & Actions */}
        <div className="space-y-3 font-mono">
          <h4 className="font-bold text-white uppercase tracking-wider text-[11px] border-b border-[#F3F0E8]/15 pb-2">
            İLETİŞİM
          </h4>
          <div className="space-y-2 text-slate-300">
            <a href={FIREFIX_NAP.phoneHref} className="flex items-center gap-2 hover:text-[#C1121F]">
              <Phone className="w-3.5 h-3.5 text-[#C1121F]" />
              <span>{FIREFIX_NAP.phone}</span>
            </a>
            <a href={`mailto:${FIREFIX_NAP.email}`} className="flex items-center gap-2 hover:text-[#C1121F]">
              <Mail className="w-3.5 h-3.5 text-[#C1121F]" />
              <span>{FIREFIX_NAP.email}</span>
            </a>
            <div className="flex items-start gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#C1121F] shrink-0 mt-0.5" />
              <span>Sakarya Teknokent Serdivan</span>
            </div>
          </div>
          <button
            onClick={onOpenQuote}
            className="w-full mt-2 py-2.5 bg-[#C1121F] text-white font-bold uppercase tracking-wider hover:bg-[#a00e19] cursor-pointer"
          >
            KEŞİF İSTE
          </button>
        </div>
      </div>

      {/* Bottom Legal Copyright */}
      <div className="border-t border-[#F3F0E8]/15 py-4 px-4 font-mono text-[11px] text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <span>© 2026 FIREFIX MÜHENDİSLİK DANIŞMANLIĞI. TÜM HAKLARI SAKLIDIR.</span>
          <div className="flex gap-4">
            <Link to="/kvkk" className="hover:text-white">KVKK</Link>
            <Link to="/cerez-politikasi" className="hover:text-white">ÇEREZ POLİTİKASI</Link>
            <Link to="/sss" className="hover:text-white">SSS</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
