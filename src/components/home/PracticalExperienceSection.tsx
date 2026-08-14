import React from 'react';
import { useLanguage } from '../../locales/useLanguage';
import {
  HeartPulse,
  Car,
  Laptop,
  CheckCircle2,
  Stethoscope,
  Cpu,
  GraduationCap,
  ShieldCheck,
} from 'lucide-react';

export const PracticalExperienceSection: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-100 text-emerald-900 font-bold text-xs uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5 text-emerald-700" />
            <span>{language === 'fr' ? 'Pédagogie Axée sur le Terrain' : 'Field-Oriented Practical Pedagogy'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif-academic text-slate-900">
            {language === 'fr'
              ? 'L\'Expérience Étudiante & Les Avantages Inclus'
              : 'Student Experience & Included University Benefits'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-sans">
            {language === 'fr'
              ? 'À l\'Institut Universitaire St Bernard, nous combinons excellence académique et accompagnement concret pour garantir votre réussite.'
              : 'At St Bernard University Institute, we merge academic rigor with concrete institutional support to ensure student achievement.'}
          </p>
        </div>

        {/* 4 Core Inclusions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: 3 St Bernard Hospitals */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-slate-400 hover:shadow-sm transition-all space-y-3 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center">
                <HeartPulse className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">
                {language === 'fr' ? 'Couverture Santé 50%' : '50% Healthcare Coverage'}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {language === 'fr'
                  ? 'Accès privilégié aux 3 hôpitaux partenaires St Bernard avec réduction de 50% sur les consultations et soins pour tous les étudiants inscrits.'
                  : 'Privileged access across 3 partner St Bernard hospitals with 50% discount on consultations and treatment for all enrolled students.'}
              </p>
            </div>
            <div className="pt-2 border-t border-slate-100 text-[11px] text-emerald-800 font-semibold flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{language === 'fr' ? '3 Hôpitaux Partenaires' : '3 Partner Hospitals'}</span>
            </div>
          </div>

          {/* Card 2: Free Driving School */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-slate-400 hover:shadow-sm transition-all space-y-3 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-800 flex items-center justify-center">
                <Car className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">
                {language === 'fr' ? 'Auto-École Gratuite' : 'Free Driving School'}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {language === 'fr'
                  ? 'Formation au permis de conduire dispensée par une auto-école agréée partenaire pour renforcer votre autonomie et votre CV.'
                  : 'Driver license training delivered by an accredited partner driving school to boost student independence and employability.'}
              </p>
            </div>
            <div className="pt-2 border-t border-slate-100 text-[11px] text-amber-800 font-semibold flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{language === 'fr' ? 'Permis B Offert' : 'Category B License'}</span>
            </div>
          </div>

          {/* Card 3: Uniforms & Equipment */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-slate-400 hover:shadow-sm transition-all space-y-3 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-slate-100 text-slate-800 flex items-center justify-center">
                <Laptop className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">
                {language === 'fr' ? 'Tenues Professionnelles' : 'Professional Uniforms'}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {language === 'fr'
                  ? 'Polos institutionnels et blouses de laboratoire fournies selon la spécialité pour une présentation impeccable dès la première année.'
                  : 'Institutional polo shirts and lab coats provided according to discipline for professional presentation from year one.'}
              </p>
            </div>
            <div className="pt-2 border-t border-slate-100 text-[11px] text-slate-700 font-semibold flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{language === 'fr' ? 'Kit Fourni' : 'Kit Provided'}</span>
            </div>
          </div>

          {/* Card 4: Clinical & Technical Labs */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-slate-400 hover:shadow-sm transition-all space-y-3 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center">
                <Stethoscope className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">
                {language === 'fr' ? 'Stages Cliniques Immédiats' : 'Direct Clinical Stages'}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {language === 'fr'
                  ? 'Immersion pratique dès le début du cursus biomédical et industriel en structures réelles avec encadrement de maîtres de stage.'
                  : 'Practical immersion from the start of biomedical and engineering courses with qualified field preceptors.'}
              </p>
            </div>
            <div className="pt-2 border-t border-slate-100 text-[11px] text-emerald-800 font-semibold flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{language === 'fr' ? 'Encadrement Pratique' : 'Practical Mentoring'}</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
