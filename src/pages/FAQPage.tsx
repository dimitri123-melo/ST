import React, { useState } from 'react';
import { useLanguage } from '../locales/useLanguage';
import { FAQ_DATA } from '../data/faq';
import { INSTITUTION } from '../data/institution';
import {
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Search,
  MessageCircle,
  GraduationCap,
  Sparkles,
} from 'lucide-react';

interface FAQPageProps {
  onOpenApplication: () => void;
  onOpenOrientation: () => void;
}

export const FAQPage: React.FC<FAQPageProps> = ({
  onOpenApplication,
  onOpenOrientation,
}) => {
  const { t, language } = useLanguage();
  const [openItem, setOpenItem] = useState<string | null>(FAQ_DATA[0]?.id || null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCat, setSelectedCat] = useState<string>('all');

  const categories = [
    { id: 'all', labelFr: 'Toutes les questions', labelEn: 'All Questions' },
    { id: 'admissions', labelFr: 'Admissions & Inscriptions', labelEn: 'Admissions & Registration' },
    { id: 'programmes', labelFr: 'Filières & Tutelles', labelEn: 'Programmes & Tutelage' },
    { id: 'campuses', labelFr: 'Campus & Horaires', labelEn: 'Campuses & Shifts' },
    { id: 'fees', labelFr: 'Scolarité & Bourses', labelEn: 'Tuition & Grants' },
    { id: 'scholarships', labelFr: 'Avantages Étudiants', labelEn: 'Student Advantages' },
  ];

  const filteredFaq = FAQ_DATA.filter((item) => {
    if (selectedCat !== 'all' && item.category !== selectedCat) return false;

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchQ = item.question.fr.toLowerCase().includes(q) || item.question.en.toLowerCase().includes(q);
      const matchA = item.answer.fr.toLowerCase().includes(q) || item.answer.en.toLowerCase().includes(q);
      if (!matchQ && !matchA) return false;
    }

    return true;
  });

  const toggleAccordion = (id: string) => {
    setOpenItem((prev) => (prev === id ? null : id));
  };

  const openWhatsAppHelp = () => {
    const text = encodeURIComponent(
      language === 'fr'
        ? `Bonjour, j'ai une question spécifique qui ne figure pas dans la FAQ du site web St Bernard.`
        : `Hello, I have a specific question not found in the website FAQ.`
    );
    window.open(`https://wa.me/${INSTITUTION.contacts.primaryWhatsApp}?text=${text}`, '_blank');
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-emerald-950 via-emerald-900 to-slate-900 text-white py-16 sm:py-20 border-b-4 border-amber-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-800/80 border border-emerald-600/80 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-4 h-4" />
            <span>{language === 'fr' ? 'Foire Aux Questions' : 'Frequently Asked Questions'}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-serif-academic text-white">
            {language === 'fr' ? 'Questions Fréquentes & Réponses Officielles' : 'Official Answers & FAQ'}
          </h1>
          <p className="text-sm sm:text-base text-slate-200 max-w-2xl mx-auto leading-relaxed">
            {language === 'fr'
              ? 'Toutes les réponses sur les accréditations MINESUP, les bourses de rentrée, les cours du soir et les modalités d\'inscription.'
              : 'Clear answers on MINESUP recognition, entry scholarships, evening shifts, and admissions.'}
          </p>
        </div>
      </section>

      {/* Main FAQ Content */}
      <section className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Search & Categories Card */}
        <div className="bg-white p-5 sm:p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={language === 'fr' ? 'Rechercher une réponse (ex: bourse, scolarité, MINESUP, soir)...' : 'Search question...'}
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:bg-white"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCat(cat.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  selectedCat === cat.id
                    ? 'bg-emerald-800 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {language === 'fr' ? cat.labelFr : cat.labelEn}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredFaq.map((item) => {
            const isOpen = openItem === item.id;
            return (
              <div
                key={item.id}
                className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                >
                  <span className="font-bold text-sm sm:text-base text-slate-900 leading-snug">
                    {item.question[language]}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isOpen ? 'bg-emerald-800 text-white' : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4 animate-in fade-in duration-200">
                    <p>{item.answer[language]}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="p-8 bg-gradient-to-r from-emerald-950 to-slate-950 text-white rounded-3xl text-center space-y-4">
          <h3 className="text-xl font-bold font-serif-academic">
            {language === 'fr' ? 'Vous ne trouvez pas réponse à votre question ?' : 'Still have questions?'}
          </h3>
          <p className="text-xs text-emerald-200 max-w-md mx-auto">
            {language === 'fr'
              ? 'Nos conseillers d\'orientation sont disponibles par WhatsApp pour vous renseigner en direct.'
              : 'Our academic counselors are available on WhatsApp for direct assistance.'}
          </p>
          <button
            onClick={openWhatsAppHelp}
            className="px-6 py-3 bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-bold rounded-xl shadow-md transition-all inline-flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4 text-emerald-300" />
            <span>{t.nav.chatWhatsApp}</span>
          </button>
        </div>
      </section>
    </div>
  );
};
