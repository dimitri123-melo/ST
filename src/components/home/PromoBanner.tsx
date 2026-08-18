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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Option 1: Scholarship */}
            <div className="rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden hover:border-amber-500/50 transition-all group flex flex-col">
              <div className="h-48 w-full relative overflow-hidden bg-slate-800">
                <img 
                  src="/images/University_scholarship_promotional_advertisement_202608171134.jpeg" 
                  alt="Tuition and Fee Schedule"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                  loading="lazy" decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
                <div className="absolute bottom-4 left-4 w-10 h-10 rounded-lg bg-amber-500/90 text-slate-950 flex items-center justify-center shadow-lg">
                  <Gift className="w-5 h-5" />
                </div>
              </div>
              <div className="p-5 space-y-2 flex-1 flex flex-col">
                <span className="text-[10px] uppercase font-bold text-amber-400 tracking-wider">
                  {language === 'fr' ? 'Option 1' : 'Option 1'}
                </span>
                <h4 className="text-lg font-bold text-white leading-tight">
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
            <div className="rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden hover:border-amber-500/50 transition-all group flex flex-col">
              <div className="h-48 w-full relative overflow-hidden bg-slate-800">
                <img 
                  src="/images/Students_using_laptops_in_classroom_202608171133.jpeg" 
                  alt="Student using Laptop"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                  loading="lazy" decoding="async"
                />
                <div className="absolute top-3 right-3 bg-amber-500 text-emerald-950 font-extrabold text-[10px] uppercase px-2.5 py-1 rounded-md shadow-sm">
                  St Bernard
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
                <div className="absolute bottom-4 left-4 w-10 h-10 rounded-lg bg-amber-500/90 text-slate-950 flex items-center justify-center shadow-lg">
                  <Laptop className="w-5 h-5" />
                </div>
              </div>
              <div className="p-5 space-y-2 flex-1 flex flex-col">
                <span className="text-[10px] uppercase font-bold text-amber-400 tracking-wider">
                  {language === 'fr' ? 'Option 2' : 'Option 2'}
                </span>
                <h4 className="text-lg font-bold text-white leading-tight">
                  {language === 'fr' ? 'Ordinateur Portable' : 'Student Laptop'}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {language === 'fr'
                    ? 'Équipement informatique professionnel pour vos travaux pratiques et recherches.'
                    : 'Professional computing equipment for practical course assignments and technical research.'}
                </p>
              </div>
            </div>

            {/* Option 3: Smartphone */}
            <div className="rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden hover:border-amber-500/50 transition-all group flex flex-col">
              <div className="h-48 w-full relative overflow-hidden bg-slate-800">
                <img 
                  src="/images/Man_using_phone_at_desk_202608171132.jpeg" 
                  alt="Connected Smartphone"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                  style={{ objectPosition: 'center 20%' }}
                  loading="lazy" decoding="async"
                />
                <div className="absolute top-3 right-3 bg-amber-500 text-emerald-950 font-extrabold text-[10px] uppercase px-2.5 py-1 rounded-md shadow-sm">
                  St Bernard
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
                <div className="absolute bottom-4 left-4 w-10 h-10 rounded-lg bg-amber-500/90 text-slate-950 flex items-center justify-center shadow-lg">
                  <Smartphone className="w-5 h-5" />
                </div>
              </div>
              <div className="p-5 space-y-2 flex-1 flex flex-col">
                <span className="text-[10px] uppercase font-bold text-amber-400 tracking-wider">
                  {language === 'fr' ? 'Option 3' : 'Option 3'}
                </span>
                <h4 className="text-lg font-bold text-white leading-tight">
                  {language === 'fr' ? 'Smartphone 4G / 5G' : 'Connected Smartphone'}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {language === 'fr'
                    ? 'Terminal mobile connecté pour accéder aux groupes pédagogiques et ressources.'
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
