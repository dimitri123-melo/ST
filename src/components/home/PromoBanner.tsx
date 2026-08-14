import React from 'react';
import { useLanguage } from '../../locales/useLanguage';
import { PROMOTION_2026_2027 } from '../../data/admissions';
import {
  Gift,
  Laptop,
  Smartphone,
  Sparkles,
  HeartPulse,
  Car,
  Shirt,
  ArrowRight,
  ShieldCheck,
  Calendar,
} from 'lucide-react';

interface PromoBannerProps {
  onClaimPromo: () => void;
}

export const PromoBanner: React.FC<PromoBannerProps> = ({ onClaimPromo }) => {
  const { t, language } = useLanguage();

  return (
    <section className="py-12 bg-slate-900 text-white border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Card */}
        <div className="rounded-2xl bg-slate-950 border border-slate-800 p-6 sm:p-10 shadow-xl space-y-8">
          
          {/* Header row */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-slate-800 pb-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-400 font-bold text-xs uppercase tracking-wider">
                <Calendar className="w-3.5 h-3.5" />
                <span>{language === 'fr' ? 'Rentrée Académique 2026 / 2027' : '2026 / 2027 Academic Year'}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-serif-academic text-white">
                {language === 'fr' 
                  ? 'Avantages d\'Admission & Inscriptions Précoces' 
                  : 'Early Registration & Admission Advantages'}
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
                {language === 'fr'
                  ? 'Pour tout dossier validé avant la rentrée de septembre 2026, bénéficiez de l\'un des trois avantages majeurs d\'accompagnement aux études :'
                  : 'For all completed applications before the September 2026 intake, choose one of three major study support perks:'}
              </p>
            </div>

            <button
              onClick={onClaimPromo}
              className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2 shrink-0"
            >
              <span>{language === 'fr' ? 'Réserver mon Avantage' : 'Claim Early Perk'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* 3 Core Gift Choices */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Option 1: Scholarship */}
            <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all flex items-start gap-4">
              <div className="w-11 h-11 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                <Gift className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] uppercase font-bold text-amber-400 tracking-wider">
                  {language === 'fr' ? 'Option 1' : 'Option 1'}
                </span>
                <h4 className="text-base font-bold text-white">
                  {language === 'fr' ? 'Bourse de 60.000 FCFA' : '60,000 FCFA Scholarship'}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {language === 'fr'
                    ? 'Déduction directe accordée sur le montant des tranches de scolarité annuelle.'
                    : 'Direct deduction applied to your annual tuition installment schedule.'}
                </p>
              </div>
            </div>

            {/* Option 2: Laptop */}
            <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all flex items-start gap-4">
              <div className="w-11 h-11 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                <Laptop className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] uppercase font-bold text-amber-400 tracking-wider">
                  {language === 'fr' ? 'Option 2' : 'Option 2'}
                </span>
                <h4 className="text-base font-bold text-white">
                  {language === 'fr' ? 'Ordinateur Portable' : 'Student Laptop'}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {language === 'fr'
                    ? 'Équipement informatique pour vos travaux pratiques, projets et recherches en ligne.'
                    : 'Computing equipment for practical course assignments and technical research.'}
                </p>
              </div>
            </div>

            {/* Option 3: Smartphone */}
            <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all flex items-start gap-4">
              <div className="w-11 h-11 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                <Smartphone className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] uppercase font-bold text-amber-400 tracking-wider">
                  {language === 'fr' ? 'Option 3' : 'Option 3'}
                </span>
                <h4 className="text-base font-bold text-white">
                  {language === 'fr' ? 'Smartphone 4G / 5G' : 'Connected Smartphone'}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {language === 'fr'
                    ? 'Terminal mobile connecté pour accéder aux groupes pédagogiques et ressources numériques.'
                    : 'Connected mobile phone to access digital course portals and academic groups.'}
                </p>
              </div>
            </div>
          </div>

          {/* Institutional Inclusions */}
          <div className="pt-4 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-300">
            <div className="flex items-center gap-2.5">
              <HeartPulse className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{language === 'fr' ? 'Couverture santé 50% dans 3 hôpitaux partenaires' : '50% healthcare coverage across 3 partner hospitals'}</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Car className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{language === 'fr' ? 'Formation au permis de conduire auto-école offerte' : 'Complimentary driving license school package'}</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Shirt className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{language === 'fr' ? 'Uniformes et blouses de laboratoire fournis' : 'Institutional polo shirts and lab coats provided'}</span>
            </div>
          </div>

          {/* Official Required Disclaimer Notice */}
          <p className="text-[11px] text-slate-500 italic border-t border-slate-800/80 pt-3">
            * {language === 'fr'
              ? 'Les candidats précoces peuvent bénéficier d\'avantages d\'admission spéciaux, sous réserve des conditions et modalités d\'éligibilité de l\'établissement.'
              : 'Early applicants may benefit from special admission advantages, subject to applicable terms and eligibility conditions.'}
          </p>

        </div>
      </div>
    </section>
  );
};
