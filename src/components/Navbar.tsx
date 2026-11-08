import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { FIREFIX_NAP, SUB_SERVICES_DATA } from '../data/firefixData';
import { IsoRegulationIcon } from './IsoPictograms';

interface NavbarProps {
  onOpenQuote: () => void;
  onOpenAuditModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuote, onOpenAuditModal }) => {
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Close menus on route change
  useEffect(() => {
    setMegaMenuOpen(false);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setMegaMenuOpen(true);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setMegaMenuOpen(false);
    }, 150);
  };

  const category1 = SUB_SERVICES_DATA.filter((s) => s.categorySlug === 'ruhsat-ve-mevzuat-danismanligi');
  const category2 = SUB_SERVICES_DATA.filter((s) => s.categorySlug === 'yangin-guvenlik-projelendirme');
  const category3 = SUB_SERVICES_DATA.filter((s) => s.categorySlug === 'kurulum-ve-uygulama');

  return (
    <>
      {/* Top Pafta Header Bar */}
      <div className="bg-[#141414] text-[#F3F0E8] border-b border-[#F3F0E8]/15 text-xs py-2 px-4 font-mono tracking-wider">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3 text-[11px]">
            <span className="inline-flex items-center gap-1.5 text-[#1F7A4D] font-semibold">
              <span className="w-2 h-2 bg-[#1F7A4D]"></span>
              FF-00 / SAKARYA MÜHENDİSLİK MERKEZİ
            </span>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span className="hidden sm:inline text-slate-300">Resmî İtfaiye Uygunluk & Ruhsat Danışmanlığı</span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 ml-auto">
            <button
              onClick={onOpenQuote}
              className="px-3.5 py-1 text-[11px] font-mono font-bold text-white bg-[#C1121F] hover:bg-[#a00e19] transition-colors uppercase tracking-wider cursor-pointer border border-[#C1121F] whitespace-nowrap"
            >
              Ücretsiz Keşif İste
            </button>
            <span className="text-slate-700 hidden sm:inline">|</span>
            <button
              onClick={onOpenAuditModal}
              className="hidden md:flex text-[#F3F0E8] hover:text-[#C1121F] transition-colors items-center gap-1.5 font-mono text-[11px] cursor-pointer"
            >
              <IsoRegulationIcon className="w-3.5 h-3.5" color="#C1121F" />
              <span>PAFTA DENETİM TESTİ</span>
            </button>
            <span className="text-slate-700 hidden md:inline">|</span>
            <a
              href={FIREFIX_NAP.phoneHref}
              className="flex items-center gap-1.5 text-[#F3F0E8] font-mono font-semibold hover:text-[#C1121F] transition-colors text-[11px]"
            >
              <Phone className="w-3.5 h-3.5 text-[#C1121F]" />
              <span>{FIREFIX_NAP.phoneFormatted}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className="sticky top-0 z-40 bg-[#141414] border-b border-[#F3F0E8]/15 text-[#F3F0E8] py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-6 relative">
          {/* Brand Wordmark */}
          <Link to="/" className="flex items-center gap-3 shrink-0 group">
            <div className="w-9 h-9 bg-[#C1121F] text-white flex items-center justify-center font-black text-lg tracking-tighter font-mono">
              FF
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tight text-[#F3F0E8] font-sans flex items-center gap-1">
                FIREFIX
              </span>
              <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase -mt-1">
                MÜHENDİSLİK OFİSİ
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-semibold text-[#F3F0E8]">
            {/* Mega Menu Dropdown */}
            <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="relative"
            >
              <button
                onMouseEnter={handleMouseEnter}
                onClick={() => setMegaMenuOpen(!megaMenuOpen)}
                className="flex items-center gap-1 hover:text-[#C1121F] transition-colors py-2 cursor-pointer uppercase tracking-wider font-mono text-[12px]"
                aria-expanded={megaMenuOpen}
              >
                <span>01 / Hizmetler</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${megaMenuOpen ? 'rotate-180 text-[#C1121F]' : ''}`} />
              </button>

              <AnimatePresence>
                {megaMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.18, ease: 'easeOut' }}
                    className="absolute top-full left-1/2 -translate-x-1/2 w-[880px] max-w-[calc(100vw-2rem)] bg-[#141414] border border-[#F3F0E8]/20 p-6 shadow-2xl grid grid-cols-3 gap-6 z-50 text-[#F3F0E8] mt-2 before:content-[''] before:absolute before:-top-4 before:left-0 before:w-full before:h-4"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    {/* Col 1 */}
                    <div>
                      <span className="text-[11px] font-mono font-bold text-[#C1121F] uppercase tracking-wider block mb-3 pb-1 border-b border-[#F3F0E8]/15">
                        01.1 — Ruhsat & Mevzuat
                      </span>
                      <div className="space-y-2">
                        {category1.map((sub) => (
                          <Link
                            key={sub.slug}
                            to={`/hizmetlerimiz/${sub.slug}`}
                            className="block p-2 hover:bg-[#F3F0E8]/10 text-xs font-medium text-slate-200 hover:text-white transition-colors border-l-2 border-transparent hover:border-[#C1121F]"
                          >
                            <div className="font-semibold">{sub.title}</div>
                            <div className="text-[10px] text-slate-400 line-clamp-1">{sub.shortDesc}</div>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Col 2 */}
                    <div>
                      <span className="text-[11px] font-mono font-bold text-[#C1121F] uppercase tracking-wider block mb-3 pb-1 border-b border-[#F3F0E8]/15">
                        01.2 — Projelendirme
                      </span>
                      <div className="space-y-2">
                        {category2.map((sub) => (
                          <Link
                            key={sub.slug}
                            to={`/hizmetlerimiz/${sub.slug}`}
                            className="block p-2 hover:bg-[#F3F0E8]/10 text-xs font-medium text-slate-200 hover:text-white transition-colors border-l-2 border-transparent hover:border-[#C1121F]"
                          >
                            <div className="font-semibold">{sub.title}</div>
                            <div className="text-[10px] text-slate-400 line-clamp-1">{sub.shortDesc}</div>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Col 3 */}
                    <div>
                      <span className="text-[11px] font-mono font-bold text-[#C1121F] uppercase tracking-wider block mb-3 pb-1 border-b border-[#F3F0E8]/15">
                        01.3 — Kurulum & Ekipman
                      </span>
                      <div className="space-y-2">
                        {category3.map((sub) => (
                          <Link
                            key={sub.slug}
                            to={`/hizmetlerimiz/${sub.slug}`}
                            className="block p-2 hover:bg-[#F3F0E8]/10 text-xs font-medium text-slate-200 hover:text-white transition-colors border-l-2 border-transparent hover:border-[#C1121F]"
                          >
                            <div className="font-semibold">{sub.title}</div>
                            <div className="text-[10px] text-slate-400 line-clamp-1">{sub.shortDesc}</div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/surec" className="hover:text-[#C1121F] transition-colors whitespace-nowrap font-mono text-[12px] uppercase">
              02 / Süreç
            </Link>

            <Link to="/sektorler" className="hover:text-[#C1121F] transition-colors whitespace-nowrap font-mono text-[12px] uppercase">
              03 / Sektörler
            </Link>

            <Link to="/sss" className="hover:text-[#C1121F] transition-colors whitespace-nowrap font-mono text-[12px] uppercase">
              04 / SSS
            </Link>

            <Link to="/hakkimizda" className="hover:text-[#C1121F] transition-colors whitespace-nowrap font-mono text-[12px] uppercase">
              05 / Hakkımızda
            </Link>

            <Link to="/iletisim" className="hover:text-[#C1121F] transition-colors whitespace-nowrap font-mono text-[12px] uppercase">
              06 / İletişim
            </Link>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 bg-[#141414] border border-[#F3F0E8]/20 text-[#F3F0E8]"
            aria-label="Ana menüyü aç / kapat"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#141414] border-b border-[#F3F0E8]/20 px-4 py-6 space-y-4 max-h-[85vh] overflow-y-auto font-mono text-xs">
            <div className="text-[11px] font-bold text-[#C1121F] uppercase tracking-wider mb-2">01 / Hizmetlerimiz</div>
            <div className="grid grid-cols-1 gap-1.5 pl-2 border-l border-[#F3F0E8]/15 mb-4">
              {SUB_SERVICES_DATA.map((s) => (
                <Link
                  key={s.slug}
                  to={`/hizmetlerimiz/${s.slug}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-1 text-slate-300 hover:text-[#C1121F] truncate"
                >
                  · {s.title}
                </Link>
              ))}
            </div>

            <nav className="flex flex-col space-y-3 font-mono text-xs text-slate-200 border-t border-[#F3F0E8]/15 pt-4">
              <Link to="/surec" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#C1121F]">
                02 / SÜREÇ (5 ADIM)
              </Link>
              <Link to="/sektorler" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#C1121F]">
                03 / SEKTÖRLER
              </Link>
              <Link to="/sss" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#C1121F]">
                04 / SSS
              </Link>
              <Link to="/hakkimizda" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#C1121F]">
                05 / HAKKIMIZDA & BÖLGELER
              </Link>
              <Link to="/iletisim" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#C1121F]">
                06 / İLETİŞİM
              </Link>
            </nav>

            <div className="pt-4 border-t border-[#F3F0E8]/15">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full py-3 bg-[#C1121F] text-white font-mono font-bold text-xs uppercase tracking-wider text-center"
              >
                ÜCRETSİZ KEŞİF RANDEVUSU AL
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
