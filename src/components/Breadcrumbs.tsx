import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { getBreadcrumbSchema, injectJsonLd } from '../lib/schema';

export interface BreadcrumbItem {
  label: string;
  path: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  const fullList = [{ label: 'Anasayfa', path: '/' }, ...items];

  React.useEffect(() => {
    const schemaData = getBreadcrumbSchema(
      fullList.map((i) => ({ name: i.label, url: i.path }))
    );
    injectJsonLd(schemaData);
  }, [items]);

  return (
    <nav aria-label="Breadcrumb" className="py-2.5 px-4 bg-[#141414] border-b border-[#F3F0E8]/15 font-mono text-xs text-slate-300">
      <div className="max-w-7xl mx-auto flex items-center gap-1.5 flex-wrap">
        <Link to="/" className="hover:text-[#C1121F] transition-colors">
          ANASAYFA
        </Link>

        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <React.Fragment key={item.path}>
              <ChevronRight className="w-3.5 h-3.5 text-slate-500 shrink-0" />
              {isLast ? (
                <span className="text-white font-bold truncate max-w-[220px] sm:max-w-xs uppercase" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link to={item.path} className="hover:text-[#C1121F] transition-colors whitespace-nowrap uppercase">
                  {item.label}
                </Link>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </nav>
  );
};
