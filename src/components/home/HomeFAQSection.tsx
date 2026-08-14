import React, { useState } from 'react';
import { useLanguage } from '../../locales/useLanguage';
import { FAQ_DATA } from '../../data/faq';
import { INSTITUTION } from '../../data/institution';
import { HelpCircle, ChevronDown, ChevronUp, MessageSquare, PhoneCall } from 'lucide-react';

export const HomeFAQSection: React.FC = () => {
  const { language } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const openWhatsApp = () => {
    const text = encodeURIComponent(
      language === 'fr'
        ? "Bonjour, j'ai une question concernant les inscriptions et les filières de l'Institut Universitaire St Bernard."
        : "Hello, I have a question regarding admissions and programmes at St Bernard University Institute."
    );
    window.open(`https://wa.me/${INSTITUTION.contacts.primaryWhatsApp}?text=${text}`, '_blank');
  };

  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-200 text-slate-800 font-bold text-xs uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-slate-700" />
            <span>{language === 'fr' ? 'Foire Aux Questions' : 'Frequently Asked Questions'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif-academic text-slate-900">
            {language === 'fr' ? 'Questions Fréquentes sur les Admissions' : 'Common Admission Questions'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-sans">
            {language === 'fr'
              ? 'Retrouvez les réponses aux interrogations régulières des candidats et des parents d\'étudiants.'
              : 'Find clear answers to standard questions from candidates and parents.'}
          </p>
        </div>

        {/* FAQ List Accordion */}
        <div className="space-y-3">
          {FAQ_DATA.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.id}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-slate-900 hover:text-emerald-800 transition-colors"
                >
                  <span>{item.question[language]}</span>
                  <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4 text-slate-700" /> : <ChevronDown className="w-4 h-4 text-slate-500" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-100">
                    {item.answer[language]}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Help Banner at bottom */}
        <div className="mt-8 p-5 rounded-xl bg-white border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-0.5">
            <span className="text-xs font-bold text-slate-900 block">
              {language === 'fr' ? 'Une autre question spécifique ?' : 'Have a specific question?'}
            </span>
            <span className="text-xs text-slate-500">
              {language === 'fr'
                ? 'Notre équipe d\'admission vous répond immédiatement au +237 682 764 947.'
                : 'Our admission team answers immediately at +237 682 764 947.'}
            </span>
          </div>
          <button
            onClick={openWhatsApp}
            className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs rounded-lg transition-all flex items-center gap-1.5 shrink-0"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>{language === 'fr' ? 'Contacter un conseiller' : 'Ask an advisor'}</span>
          </button>
        </div>

      </div>
    </section>
  );
};
