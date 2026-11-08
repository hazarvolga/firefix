import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { FIREFIX_NAP } from '../data/firefixData';

interface MobileStickyBarProps {
  onOpenQuote: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onOpenQuote }) => {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#141414] border-t border-[#F3F0E8]/20 p-2 flex items-center justify-around gap-2 font-mono text-xs">
      <a
        href={FIREFIX_NAP.phoneHref}
        className="flex-1 py-2.5 bg-[#1a1a1a] border border-[#F3F0E8]/20 text-white font-bold flex items-center justify-center gap-1.5"
      >
        <Phone className="w-3.5 h-3.5 text-[#C1121F]" />
        <span>ARA</span>
      </a>

      <a
        href={FIREFIX_NAP.whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="flex-1 py-2.5 bg-[#1F7A4D]/20 border border-[#1F7A4D] text-emerald-300 font-bold flex items-center justify-center gap-1.5"
      >
        <MessageCircle className="w-3.5 h-3.5" />
        <span>WHATSAPP</span>
      </a>

      <button
        onClick={onOpenQuote}
        className="flex-1 py-2.5 bg-[#C1121F] text-white font-bold flex items-center justify-center gap-1.5 cursor-pointer uppercase border border-[#C1121F]"
      >
        <span>TEKLİF AL</span>
      </button>
    </div>
  );
};
