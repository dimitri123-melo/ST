import React, { useState } from 'react';
import { useLanguage } from '../../locales/useLanguage';
import { PROGRAMMES_DATA, DOMAIN_INFO } from '../../data/programmes';
import { INSTITUTION } from '../../data/institution';
import { DomainCategory, Programme } from '../../types';
import {
  Compass,
  X,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  MessageCircle,
  GraduationCap,
  RotateCcw,
  HeartPulse,
  Cpu,
  Briefcase,
  Sprout,
  Palette,
  Scale,
} from 'lucide-react';

interface OrientationQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProgramme: (prog: Programme) => void;
  onApplyForProgramme: (domain: string, progName: string) => void;
}

export const OrientationQuizModal: React.FC<OrientationQuizModalProps> = ({
  isOpen,
  onClose,
  onSelectProgramme,
  onApplyForProgramme,
}) => {
  const { t, language } = useLanguage();
  const [currentStep, setCurrentStep] = useState(1);
  const [educationLevel, setEducationLevel] = useState<string>('');
  const [interestDomain, setInterestDomain] = useState<DomainCategory | ''>('');
  const [studyPriority, setStudyPriority] = useState<string>('');

  if (!isOpen) return null;

  const handleReset = () => {
    setCurrentStep(1);
    setEducationLevel('');
    setInterestDomain('');
    setStudyPriority('');
  };

  // Recommended programmes calculation
  const recommendedProgrammes = PROGRAMMES_DATA.filter((p) => {
    if (interestDomain && p.domain !== interestDomain) return false;
    if (educationLevel === 'bac' && !p.level.includes('BTS') && !p.level.includes('HND')) return false;
    if (educationLevel === 'bts_hnd' && !p.level.includes('LICENCE') && !p.level.includes('BACHELOR')) return false;
    if (educationLevel === 'licence' && !p.level.includes('MASTER')) return false;
    return true;
  }).slice(0, 4);

  const openWhatsAppWithAdvice = () => {
    const text = encodeURIComponent(
      language === 'fr'
        ? `Bonjour, j'ai complété le test d'orientation rapide sur le site de St Bernard. Niveau: ${educationLevel}, Domaine souhaité: ${interestDomain}. J'aimerais échanger avec un conseiller d'orientation.`
        : `Hello, I completed the quick orientation test on St Bernard's website. Level: ${educationLevel}, Preferred field: ${interestDomain}. I would like to speak with an admissions counselor.`
    );
    window.open(`https://wa.me/${INSTITUTION.contacts.primaryWhatsApp}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/75 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-900 to-emerald-950 p-6 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-400">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-400">
                {language === 'fr' ? 'Orientation Universitaire' : 'Academic Orientation'}
              </span>
              <h3 className="text-lg font-bold font-display">{t.orientation.title}</h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-emerald-200 hover:text-white hover:bg-emerald-800 transition-colors"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-slate-100 h-1.5">
          <div
            className="bg-amber-500 h-1.5 transition-all duration-300"
            style={{ width: `${(currentStep / 4) * 100}%` }}
          ></div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8">
          {/* STEP 1: Education Level */}
          {currentStep === 1 && (
            <div className="space-y-4">
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
                Étape 1 sur 3
              </span>
              <h4 className="text-base sm:text-lg font-bold text-slate-900">
                {t.orientation.step1}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  { id: 'bac', labelFr: 'Nouveau Bachelier / GCE A-Level', labelEn: 'Fresh High School Grad / GCE A-Level', sub: 'BTS / HND' },
                  { id: 'bac_waiting', labelFr: 'En attente des résultats du Bac / GCE', labelEn: 'Awaiting Baccalaureate / GCE results', sub: 'BTS / HND' },
                  { id: 'bts_hnd', labelFr: 'Titulaire BTS / HND / DUT (Bac+2)', labelEn: 'BTS / HND / DUT Holder (Year 2)', sub: 'Licence / Bachelor' },
                  { id: 'licence', labelFr: 'Titulaire Licence / Bachelor (Bac+3)', labelEn: 'Bachelor Degree Holder (Year 3)', sub: 'Master' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setEducationLevel(item.id);
                      setCurrentStep(2);
                    }}
                    className={`p-4 rounded-2xl border text-left transition-all ${
                      educationLevel === item.id
                        ? 'border-emerald-800 bg-emerald-50 text-emerald-950 ring-2 ring-emerald-800/20'
                        : 'border-slate-200 hover:border-emerald-400 hover:bg-slate-50 text-slate-800'
                    }`}
                  >
                    <p className="font-bold text-sm">
                      {language === 'fr' ? item.labelFr : item.labelEn}
                    </p>
                    <span className="inline-block mt-1 text-[11px] font-semibold text-emerald-700 bg-emerald-100/60 px-2 py-0.5 rounded-md">
                      {item.sub}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2: Domain of Interest */}
          {currentStep === 2 && (
            <div className="space-y-4">
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
                Étape 2 sur 3
              </span>
              <h4 className="text-base sm:text-lg font-bold text-slate-900">
                {t.orientation.step2}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  { id: 'biomedical', nameFr: 'Santé, Imagerie & Soins (TIM, Infirmier...)', nameEn: 'Health, Medical Imaging & Nursing', Icon: HeartPulse, iconBg: 'bg-emerald-100 text-emerald-800' },
                  { id: 'engineering', nameFr: 'Industrie, Génie Logiciel, IA & BTP', nameEn: 'Engineering, Software, AI & Civil Works', Icon: Cpu, iconBg: 'bg-sky-100 text-sky-800' },
                  { id: 'business', nameFr: 'Banque, Finance, Douane & Marketing', nameEn: 'Banking, Finance, Customs & Marketing', Icon: Briefcase, iconBg: 'bg-amber-100 text-amber-900' },
                  { id: 'agriculture', nameFr: 'Agriculture, Aquaculture & Agro-pastoral', nameEn: 'Agriculture, Aquaculture & Farming', Icon: Sprout, iconBg: 'bg-green-100 text-green-800' },
                  { id: 'social_sciences', nameFr: 'Génie Culinaire, Mode & Hôtellerie', nameEn: 'Culinary Arts, Fashion & Hospitality', Icon: Palette, iconBg: 'bg-rose-100 text-rose-800' },
                  { id: 'education', nameFr: 'Sciences de l\'Éducation & Droit', nameEn: 'Education Sciences & Business Law', Icon: Scale, iconBg: 'bg-indigo-100 text-indigo-800' },
                ].map((dom) => {
                  const DomIcon = dom.Icon;
                  return (
                    <button
                      key={dom.id}
                      onClick={() => {
                        setInterestDomain(dom.id as DomainCategory);
                        setCurrentStep(3);
                      }}
                      className={`p-4 rounded-2xl border text-left transition-all flex items-start gap-3.5 ${
                        interestDomain === dom.id
                          ? 'border-emerald-800 bg-emerald-50 text-emerald-950 ring-2 ring-emerald-800/20'
                          : 'border-slate-200 hover:border-emerald-400 hover:bg-slate-50 text-slate-800'
                      }`}
                    >
                      <div className={`p-2.5 rounded-xl shrink-0 ${dom.iconBg}`}>
                        <DomIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-bold text-sm leading-snug">
                          {language === 'fr' ? dom.nameFr : dom.nameEn}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 3: Priority */}
          {currentStep === 3 && (
            <div className="space-y-4">
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
                Étape 3 sur 3
              </span>
              <h4 className="text-base sm:text-lg font-bold text-slate-900">
                {t.orientation.step3}
              </h4>
              <div className="grid grid-cols-1 gap-3 pt-2">
                {[
                  {
                    id: 'practical',
                    titleFr: 'Une insertion professionnelle rapide grâce à des stages et ateliers 100% pratiques',
                    titleEn: 'Fast job placement through 100% hands-on laboratory workshops and hospital internships',
                  },
                  {
                    id: 'schedule',
                    titleFr: 'Des horaires adaptés (Cours du soir ou cours du jour) compatibles avec mon emploi du temps',
                    titleEn: 'Flexible shifts (Day or Evening classes) fitting my personal schedule or job',
                  },
                  {
                    id: 'excellence',
                    titleFr: 'Un diplôme d\'État prestigieux sous tutelle académique de Douala & Buea',
                    titleEn: 'A prestigious recognized state degree under academic tutelage of Douala & Buea',
                  },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setStudyPriority(item.id);
                      setCurrentStep(4);
                    }}
                    className="p-4 rounded-2xl border border-slate-200 hover:border-emerald-500 hover:bg-emerald-50/50 text-left transition-all"
                  >
                    <p className="font-semibold text-sm text-slate-800">
                      {language === 'fr' ? item.titleFr : item.titleEn}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 4: Results & Recommendations */}
          {currentStep === 4 && (
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-amber-500" />
                  <h4 className="text-base sm:text-lg font-bold text-emerald-950">
                    {t.orientation.resultTitle}
                  </h4>
                </div>
                <button
                  onClick={handleReset}
                  className="text-xs font-semibold text-slate-500 hover:text-emerald-800 flex items-center gap-1"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  {t.orientation.btnReset}
                </button>
              </div>

              <div className="space-y-3">
                {recommendedProgrammes.map((prog) => (
                  <div
                    key={prog.id}
                    className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-300 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-emerald-100 text-emerald-900">
                          {prog.level.join(' / ')}
                        </span>
                        <span className="text-xs text-slate-500">
                          {prog.campuses.map((c) => (c === 'bonaberi' ? 'Bonabéri' : 'Mboppi')).join(' & ')}
                        </span>
                      </div>
                      <h5 className="font-bold text-sm text-slate-900">{prog.name[language]}</h5>
                      <p className="text-xs text-slate-600 line-clamp-1">{prog.description[language]}</p>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        onClick={() => {
                          onClose();
                          onSelectProgramme(prog);
                        }}
                        className="px-3 py-1.5 text-xs font-bold text-emerald-900 bg-white hover:bg-emerald-50 rounded-xl border border-slate-200 transition-colors"
                      >
                        {language === 'fr' ? 'Détails' : 'Details'}
                      </button>
                      <button
                        onClick={() => {
                          onClose();
                          onApplyForProgramme(prog.domain, prog.name[language]);
                        }}
                        className="px-3.5 py-1.5 text-xs font-bold text-white bg-emerald-800 hover:bg-emerald-700 rounded-xl shadow-sm transition-colors flex items-center gap-1"
                      >
                        <span>{language === 'fr' ? 'Choisir' : 'Select'}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Consultation Callout */}
              <div className="bg-emerald-900 text-white p-4 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="text-left text-xs space-y-1">
                  <p className="font-bold text-amber-300">
                    {language === 'fr' ? 'Besoin d\'un échange personnalisé ?' : 'Need personalized guidance?'}
                  </p>
                  <p className="text-emerald-100 text-[11px]">
                    {language === 'fr'
                      ? 'Nos conseillers pédagogiques répondent immédiatement à vos questions.'
                      : 'Our academic advisors answer your specific questions right away.'}
                  </p>
                </div>
                <button
                  onClick={openWhatsAppWithAdvice}
                  className="w-full sm:w-auto px-4 py-2 bg-amber-500 hover:bg-amber-400 text-emerald-950 text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 shrink-0"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{t.orientation.contactAdvisor}</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer Navigation Controls */}
        {currentStep < 4 && (
          <div className="bg-slate-50 px-6 py-4 border-t border-slate-100 flex items-center justify-between">
            {currentStep > 1 ? (
              <button
                onClick={() => setCurrentStep((prev) => prev - 1)}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 flex items-center gap-1"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                {t.orientation.btnPrev}
              </button>
            ) : (
              <div></div>
            )}
            <button
              onClick={onClose}
              className="text-xs font-semibold text-slate-500 hover:text-slate-800"
            >
              {language === 'fr' ? 'Fermer' : 'Close'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
