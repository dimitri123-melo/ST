import React from 'react';
import { useLanguage } from '../../locales/useLanguage';
import { Globe } from 'lucide-react';

interface LanguageSwitcherProps {
  variant?: 'header' | 'footer' | 'mobile';
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ variant = 'header' }) => {
  const { language, setLanguage } = useLanguage();

  if (variant === 'footer') {
    return (
      <div className="inline-flex items-center gap-2 rounded-lg bg-emerald-950/60 p-1 border border-emerald-800/60 text-xs">
        <Globe className="w-3.5 h-3.5 text-emerald-400 ml-1.5" />
        <button
          onClick={() => setLanguage('fr')}
          className={`px-2.5 py-1 rounded font-semibold transition-all ${
            language === 'fr'
              ? 'bg-emerald-600 text-white shadow-sm'
              : 'text-slate-300 hover:text-white'
          }`}
          aria-label="Passer en Français"
        >
          Français (FR)
        </button>
        <span className="text-emerald-800">|</span>
        <button
          onClick={() => setLanguage('en')}
          className={`px-2.5 py-1 rounded font-semibold transition-all ${
            language === 'en'
              ? 'bg-emerald-600 text-white shadow-sm'
              : 'text-slate-300 hover:text-white'
          }`}
          aria-label="Switch to English"
        >
          English (EN)
        </button>
      </div>
    );
  }

  return (
    <div
      id="lang-switcher"
      className="inline-flex items-center rounded-full bg-slate-100 dark:bg-emerald-900/40 p-0.5 border border-slate-200 dark:border-emerald-800 text-xs font-semibold"
    >
      <button
        id="btn-lang-fr"
        onClick={() => setLanguage('fr')}
        className={`px-2.5 py-1 rounded-full transition-all duration-200 flex items-center gap-1 ${
          language === 'fr'
            ? 'bg-emerald-800 text-white shadow-sm'
            : 'text-slate-600 dark:text-slate-300 hover:text-emerald-800'
        }`}
        title="Passer en Français"
      >
        <span className="text-[11px]">FR</span>
      </button>
      <button
        id="btn-lang-en"
        onClick={() => setLanguage('en')}
        className={`px-2.5 py-1 rounded-full transition-all duration-200 flex items-center gap-1 ${
          language === 'en'
            ? 'bg-emerald-800 text-white shadow-sm'
            : 'text-slate-600 dark:text-slate-300 hover:text-emerald-800'
        }`}
        title="Switch to English"
      >
        <span className="text-[11px]">EN</span>
      </button>
    </div>
  );
};
