import React, { useState } from 'react';
import { useLanguage } from '../../locales/useLanguage';
import { PROGRAMMES_DATA, DOMAIN_INFO } from '../../data/programmes';
import { Programme } from '../../types';
import { INSTITUTION } from '../../data/institution';
import {
  Compass,
  X,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  GraduationCap,
  Briefcase,
  Sun,
  Moon,
  MessageSquare,
  Stethoscope,
  Cpu,
  Sprout,
  Palette,
  Scale,
  Layers,
  RotateCcw,
} from 'lucide-react';

interface OrientationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProgrammeForApply: (domain: string, progName: string) => void;
}

export const OrientationModal: React.FC<OrientationModalProps> = ({
  isOpen,
  onClose,
  onSelectProgrammeForApply,
}) => {
  const { language } = useLanguage();

  const [step, setStep] = useState<number>(1);
  const [bacType, setBacType] = useState<string>('');
  const [interestDomain, setInterestDomain] = useState<string>('');
  const [careerGoal, setCareerGoal] = useState<string>('');
  const [preferredFormat, setPreferredFormat] = useState<string>('day');

  if (!isOpen) return null;

  const handleReset = () => {
    setStep(1);
    setBacType('');
    setInterestDomain('');
    setCareerGoal('');
    setPreferredFormat('day');
  };

  const getDomainIcon = (key: string) => {
    switch (key) {
      case 'biomedical':
        return <Stethoscope className="w-4 h-4 text-emerald-600 shrink-0" />;
      case 'engineering':
        return <Cpu className="w-4 h-4 text-blue-600 shrink-0" />;
      case 'business':
        return <Briefcase className="w-4 h-4 text-amber-600 shrink-0" />;
      case 'agriculture':
        return <Sprout className="w-4 h-4 text-emerald-600 shrink-0" />;
      case 'social_sciences':
        return <Palette className="w-4 h-4 text-purple-600 shrink-0" />;
      case 'education':
        return <Scale className="w-4 h-4 text-indigo-600 shrink-0" />;
      default:
        return <Layers className="w-4 h-4 text-slate-600 shrink-0" />;
    }
  };

  const getRecommendedProgrammes = (): Programme[] => {
    let matches = [...PROGRAMMES_DATA];

    if (interestDomain && interestDomain !== 'undecided') {
      matches = matches.filter((p) => p.domain === interestDomain);
    } else if (bacType) {
      if (['bacC', 'bacD', 'bacE', 'bacTI', 'gceSci'].includes(bacType)) {
        matches = matches.filter((p) => ['biomedical', 'engineering', 'agriculture'].includes(p.domain));
      } else if (['bacG', 'bacACC', 'bacCG', 'gceCom'].includes(bacType)) {
        matches = matches.filter((p) => ['business', 'social_sciences'].includes(p.domain));
      } else if (['bacA', 'bacABI', 'gceArts'].includes(bacType)) {
        matches = matches.filter((p) => ['education', 'business', 'social_sciences'].includes(p.domain));
      }
    }

    return matches.slice(0, 4);
  };

  const recommended = getRecommendedProgrammes();

  const openWhatsAppAdvisor = () => {
    const text = encodeURIComponent(
      language === 'fr'
        ? `Bonjour, j'ai complété le test d'orientation en ligne (Série: ${bacType || 'non précisé'}, Domaine: ${interestDomain || 'général'}). Je souhaite échanger avec un responsable pédagogique de St Bernard.`
        : `Hello, I completed the online orientation test (Series: ${bacType || 'unspecified'}, Field: ${interestDomain || 'general'}). I would like academic counseling from St Bernard.`
    );
    window.open(`https://wa.me/${INSTITUTION.contacts.primaryWhatsApp}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
        
        {/* Header */}
        <div className="bg-slate-900 p-5 sm:p-6 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block">
                {language === 'fr' ? 'Orientation Académique 2026/2027' : 'Academic Orientation 2026/2027'}
              </span>
              <h2 className="text-base sm:text-lg font-bold text-white">
                {language === 'fr' ? 'Trouvez la Filière Adaptée à Votre Profil' : 'Find Your Tailored Degree Program'}
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-slate-100 h-1.5 flex">
          <div
            className="bg-amber-500 h-full transition-all duration-300"
            style={{ width: `${(step / 4) * 100}%` }}
          ></div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* STEP 1: Background & Diplomas */}
          {step === 1 && (
            <div className="space-y-4">
              <div className="space-y-1">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  {language === 'fr' ? 'Étape 1 sur 3' : 'Step 1 of 3'}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  {language === 'fr'
                    ? 'Quel est votre diplôme ou série d\'entrée ?'
                    : 'What is your current diploma or secondary school series?'}
                </h3>
                <p className="text-xs text-slate-500">
                  {language === 'fr'
                    ? 'Ces informations nous permettent de vérifier vos prérequis académiques MINESUP.'
                    : 'This allows us to match your profile with official MINESUP prerequisites.'}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {[
                  { id: 'bacD', labelFr: 'Bac D / C (Sciences Naturelles & Math)', labelEn: 'Bac D / C (Sciences & Math)' },
                  { id: 'bacTI', labelFr: 'Bac TI / F (Technologies & Industrie)', labelEn: 'Bac TI / F (Tech & Industry)' },
                  { id: 'bacG', labelFr: 'Bac G / ACC / CG (Gestion & Commerce)', labelEn: 'Bac G / ACC / CG (Business & Accounting)' },
                  { id: 'bacA', labelFr: 'Bac A / ABI (Lettres & Langues)', labelEn: 'Bac A / ABI (Arts & Languages)' },
                  { id: 'gceSci', labelFr: 'GCE A-Level (Sciences / Math)', labelEn: 'GCE A-Level (Sciences / Math)' },
                  { id: 'gceCom', labelFr: 'GCE A-Level (Commercial / Arts)', labelEn: 'GCE A-Level (Commercial / Arts)' },
                  { id: 'licence', labelFr: 'BTS / Licence déjà obtenu (Passerelle)', labelEn: 'Already have BTS / Bachelor (Direct entry)' },
                  { id: 'other', labelFr: 'Autre diplôme / En attente de résultats', labelEn: 'Other diploma / Awaiting results' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setBacType(item.id)}
                    className={`p-3 rounded-xl border text-left text-xs font-semibold transition-all flex items-center justify-between ${
                      bacType === item.id
                        ? 'border-slate-900 bg-slate-900 text-white'
                        : 'border-slate-200 hover:border-slate-300 bg-white text-slate-700'
                    }`}
                  >
                    <span>{language === 'fr' ? item.labelFr : item.labelEn}</span>
                    {bacType === item.id && <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />}
                  </button>
                ))}
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  disabled={!bacType}
                  onClick={() => setStep(2)}
                  className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 disabled:opacity-40 text-white text-xs font-bold rounded-xl transition-all flex items-center gap-1.5"
                >
                  <span>{language === 'fr' ? 'Suivant' : 'Next'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Field of Interest */}
          {step === 2 && (
            <div className="space-y-4">
              <div className="space-y-1">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  {language === 'fr' ? 'Étape 2 sur 3' : 'Step 2 of 3'}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  {language === 'fr'
                    ? 'Quel pôle de formation vous intéresse le plus ?'
                    : 'Which academic field interests you most?'}
                </h3>
                <p className="text-xs text-slate-500">
                  {language === 'fr'
                    ? 'Sélectionnez votre univers de prédilection ou choisissez "Explorer toutes les options".'
                    : 'Choose your preferred discipline or select "Explore all options".'}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {[
                  { id: 'biomedical', nameFr: 'Santé, Échographie & Imagerie (TIM)', nameEn: 'Healthcare & Medical Imaging (TIM)', desc: 'Radiologie, kiné, soins infirmiers, sage-femme' },
                  { id: 'engineering', nameFr: 'Informatique, IA & Réseaux Télécoms', nameEn: 'Software, AI & Networking', desc: 'Génie logiciel, électrotechnique, maintenance' },
                  { id: 'business', nameFr: 'Douane, Transit, Banque & Marketing', nameEn: 'Customs, Transit & Banking', desc: 'Gestion des douanes, commerce international' },
                  { id: 'agriculture', nameFr: 'Agro-pastoral & Aquaculture', nameEn: 'Agriculture & Aquaculture', desc: 'Production animale, élevage, gestion agricole' },
                  { id: 'social_sciences', nameFr: 'Génie Culinaire & Design de Mode', nameEn: 'Culinary Arts & Fashion Design', desc: 'Hôtellerie, gastronomie, stylisme' },
                  { id: 'education', nameFr: 'Sciences de l\'Éducation & Droit', nameEn: 'Education Sciences & Law', desc: 'Enseignement, administration scolaire' },
                  { id: 'undecided', nameFr: 'Explorer toutes les filières', nameEn: 'Explore all degree options', desc: 'Découvrir les parcours les plus recherchés' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setInterestDomain(item.id)}
                    className={`p-3.5 rounded-xl border text-left text-xs transition-all flex flex-col justify-between ${
                      interestDomain === item.id
                        ? 'border-slate-900 bg-slate-900 text-white'
                        : 'border-slate-200 hover:border-slate-300 bg-white text-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between font-bold gap-2">
                      <div className="flex items-center gap-2">
                        {getDomainIcon(item.id)}
                        <span>{language === 'fr' ? item.nameFr : item.nameEn}</span>
                      </div>
                      {interestDomain === item.id && <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />}
                    </div>
                    <span className={`text-[11px] mt-1.5 ${interestDomain === item.id ? 'text-slate-300' : 'text-slate-500'}`}>
                      {item.desc}
                    </span>
                  </button>
                ))}
              </div>

              <div className="pt-4 flex items-center justify-between">
                <button
                  onClick={() => setStep(1)}
                  className="px-3.5 py-2 text-slate-600 hover:text-slate-900 text-xs font-semibold flex items-center gap-1"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>{language === 'fr' ? 'Retour' : 'Back'}</span>
                </button>

                <button
                  disabled={!interestDomain}
                  onClick={() => setStep(3)}
                  className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 disabled:opacity-40 text-white text-xs font-bold rounded-xl transition-all flex items-center gap-1.5"
                >
                  <span>{language === 'fr' ? 'Suivant' : 'Next'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Shift Preference */}
          {step === 3 && (
            <div className="space-y-4">
              <div className="space-y-1">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  {language === 'fr' ? 'Étape 3 sur 3' : 'Step 3 of 3'}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  {language === 'fr'
                    ? 'Quel horaire d\'études vous convient ?'
                    : 'Which class shift best fits your schedule?'}
                </h3>
                <p className="text-xs text-slate-500">
                  {language === 'fr'
                    ? 'St Bernard propose des cours du jour et des cours du soir / samedis pour les personnes en activité.'
                    : 'St Bernard offers daytime classes and evening/weekend shifts for working professionals.'}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <button
                  onClick={() => setPreferredFormat('day')}
                  className={`p-4 rounded-xl border text-left text-xs transition-all ${
                    preferredFormat === 'day'
                      ? 'border-slate-900 bg-slate-900 text-white'
                      : 'border-slate-200 bg-white text-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1.5 font-bold">
                    <Sun className="w-4 h-4 text-amber-400" />
                    <span className="text-sm">{language === 'fr' ? 'Cours du Jour' : 'Day Classes'}</span>
                  </div>
                  <span className={`text-[11px] ${preferredFormat === 'day' ? 'text-slate-300' : 'text-slate-500'}`}>
                    {language === 'fr'
                      ? '08h00 - 15h30 • Idéal pour les nouveaux bacheliers avec travaux pratiques et stages en journée.'
                      : '8:00 AM - 3:30 PM • Ideal for full-time students with daytime clinical practice and lab sessions.'}
                  </span>
                </button>

                <button
                  onClick={() => setPreferredFormat('evening')}
                  className={`p-4 rounded-xl border text-left text-xs transition-all ${
                    preferredFormat === 'evening'
                      ? 'border-slate-900 bg-slate-900 text-white'
                      : 'border-slate-200 bg-white text-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1.5 font-bold">
                    <Moon className="w-4 h-4 text-amber-400" />
                    <span className="text-sm">{language === 'fr' ? 'Cours du Soir & Samedi' : 'Evening & Weekend'}</span>
                  </div>
                  <span className={`text-[11px] ${preferredFormat === 'evening' ? 'text-slate-300' : 'text-slate-500'}`}>
                    {language === 'fr'
                      ? '17h30 - 21h00 • Conçu pour les professionnels en poste, entrepreneurs et reconversions.'
                      : '5:30 PM - 9:00 PM • Tailored for active workers, entrepreneurs, and career switchers.'}
                  </span>
                </button>
              </div>

              <div className="pt-4 flex items-center justify-between">
                <button
                  onClick={() => setStep(2)}
                  className="px-3.5 py-2 text-slate-600 hover:text-slate-900 text-xs font-semibold flex items-center gap-1"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>{language === 'fr' ? 'Retour' : 'Back'}</span>
                </button>

                <button
                  onClick={() => setStep(4)}
                  className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold rounded-xl transition-all flex items-center gap-1.5 shadow-sm"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>{language === 'fr' ? 'Voir mes recommandations' : 'View Recommendations'}</span>
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: Results & Application CTA */}
          {step === 4 && (
            <div className="space-y-5">
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center shrink-0">
                  <GraduationCap className="w-4 h-4 text-amber-400" />
                </div>
                <div className="text-xs space-y-0.5">
                  <h4 className="font-bold text-slate-900">
                    {language === 'fr'
                      ? 'Résultat de Votre Test d\'Orientation'
                      : 'Your Personalized Degree Matches'}
                  </h4>
                  <p className="text-slate-600">
                    {language === 'fr'
                      ? `Filières recommandées adaptées à vos critères (${bacType.toUpperCase()}) :`
                      : `Recommended programmes matched to your criteria:`}
                  </p>
                </div>
              </div>

              {/* Recommended Cards */}
              <div className="space-y-2.5 max-h-72 overflow-y-auto pr-1">
                {recommended.map((prog) => {
                  const domainInfo = DOMAIN_INFO[prog.domain] || DOMAIN_INFO.business || {
                    name: { fr: 'Formation', en: 'Programme' },
                    badgeColor: 'bg-emerald-50 text-emerald-800 border-emerald-200',
                    icon: 'GraduationCap',
                  };
                  return (
                    <div
                      key={prog.id}
                      className="p-3.5 rounded-xl border border-slate-200 hover:border-slate-400 bg-white transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className={`text-[9px] font-bold uppercase px-2 py-0.5 rounded border ${domainInfo.badgeColor}`}>
                            {domainInfo.name[language]}
                          </span>
                          <span className="text-[10px] font-semibold text-slate-500">
                            {prog.level.join(' / ')}
                          </span>
                        </div>
                        <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                          {prog.name[language]}
                        </h4>
                        <p className="text-[11px] text-slate-500 line-clamp-1">
                          {prog.description[language]}
                        </p>
                      </div>

                      <button
                        onClick={() => {
                          onClose();
                          onSelectProgrammeForApply(prog.domain, prog.name[language]);
                        }}
                        className="px-3.5 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold shrink-0 transition-all flex items-center justify-center gap-1"
                      >
                        <span>{language === 'fr' ? 'Postuler' : 'Apply'}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  );
                })}
              </div>

              {/* Restart & WhatsApp Advisor */}
              <div className="pt-2 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                <button
                  onClick={handleReset}
                  className="text-xs font-semibold text-slate-500 hover:text-slate-800 flex items-center gap-1"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>{language === 'fr' ? 'Recommencer le test' : 'Restart test'}</span>
                </button>

                <button
                  onClick={openWhatsAppAdvisor}
                  className="w-full sm:w-auto px-4 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-bold flex items-center justify-center gap-1.5"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-200" />
                  <span>{language === 'fr' ? 'Conseiller WhatsApp (+237 682 764 947)' : 'WhatsApp Advisor (+237 682 764 947)'}</span>
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
