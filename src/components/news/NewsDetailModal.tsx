import React from 'react';
import { useLanguage } from '../../locales/useLanguage';
import { NewsArticle } from '../../types';
import { AuthenticVisualRenderer } from '../common/RealCampusGalleryVisuals';
import { X, Calendar, Clock, Tag, Share2 } from 'lucide-react';

interface NewsDetailModalProps {
  article: NewsArticle | null;
  onClose: () => void;
}

export const NewsDetailModal: React.FC<NewsDetailModalProps> = ({ article, onClose }) => {
  const { language } = useLanguage();

  if (!article) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Cover Image */}
        <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-900">
          <AuthenticVisualRenderer
            visualKey={article.visualKey}
            fallbackCategory={article.category}
            className="w-full h-full object-cover"
            altText={article.title[language]}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none"></div>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="absolute bottom-4 left-4 right-4 z-10">
            <span className="inline-block px-2.5 py-1 rounded-md bg-amber-500 text-emerald-950 text-[10px] font-extrabold uppercase tracking-wider mb-2">
              {article.category}
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">
              {article.title[language]}
            </h3>
          </div>
        </div>

        {/* Meta Bar */}
        <div className="px-6 py-3 bg-slate-50 border-b border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-emerald-700" />
              {article.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-emerald-700" />
              {article.readTime}
            </span>
          </div>
          <span className="text-emerald-800 font-semibold text-[11px]">Institut St Bernard</span>
        </div>

        {/* Article Body */}
        <div className="p-6 sm:p-8 space-y-4 max-h-[55vh] overflow-y-auto text-sm text-slate-700 leading-relaxed">
          {article.content[language].map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        {/* Footer */}
        <div className="bg-slate-50 px-6 py-4 border-t border-slate-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 rounded-xl text-xs font-bold transition-colors"
          >
            {language === 'fr' ? 'Fermer' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
};
