import React from 'react';
import { useLanguage } from '../../locales/useLanguage';
import { INSTITUTION } from '../../data/institution';
import {
  ShieldCheck,
  Award,
  BookOpen,
  CheckCircle2,
  Building2,
  ArrowRight,
  GraduationCap,
} from 'lucide-react';

interface UniversityIntroSectionProps {
  onLearnMore?: () => void;
  onOpenAdmissions?: () => void;
}

export const UniversityIntroSection: React.FC<UniversityIntroSectionProps> = ({
  onLearnMore,
  onOpenAdmissions,
}) => {
  const { language } = useLanguage();

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Official Overview */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
              <span>{language === 'fr' ? 'Établissement Supérieur Privé Agréé' : 'Accredited Higher Education Institute'}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif-academic text-slate-900 leading-tight">
              {language === 'fr' ? (
                <>
                  Institut Universitaire St Bernard <br />
                  <span className="text-emerald-800">L'Université d'Acquisition de Compétences</span>
                </>
              ) : (
                <>
                  St Bernard University Institute <br />
                  <span className="text-emerald-800">The University of Skill Acquisition</span>
                </>
              )}
            </h2>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-sans">
              {language === 'fr'
                ? "Créé sous l'autorisation ministérielle N°21-06408/L/MINESUP/SG/DDES/ESUP/SDA/MF/YDE, l'Institut Universitaire St Bernard forme des techniciens supérieurs, cadres et professionnels hautement qualifiés. L'établissement met l'accent sur l'apprentissage par la pratique, l'éthique professionnelle et l'intégration directe sur le marché de l'emploi."
                : "Established under ministerial authorization N°21-06408/L/MINESUP/SG/DDES/ESUP/SDA/MF/YDE, St Bernard University Institute trains highly skilled technicians, executives, and professionals. The institution places a strong emphasis on hands-on practical learning, professional ethics, and direct job market integration."}
            </p>

            {/* State Tutelages Banner */}
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                {language === 'fr' ? 'Tutelles Académiques & Accréditations d\'État :' : 'State Academic Tutelage & Accreditation:'}
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-start gap-2.5">
                  <Award className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-slate-900 block">Université de Douala</span>
                    <span className="text-[11px] text-slate-500">
                      {language === 'fr' ? 'Tutelle Académique d\'État' : 'State Academic Tutelage'}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Award className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-slate-900 block">University of Buea</span>
                    <span className="text-[11px] text-slate-500">
                      {language === 'fr' ? 'Tutelle Académique d\'État' : 'State Academic Tutelage'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onOpenAdmissions}
                className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-all flex items-center gap-2"
              >
                <GraduationCap className="w-4 h-4 text-amber-400" />
                <span>{language === 'fr' ? 'Conditions d\'Admission 2026-2027' : '2026-2027 Admission Requirements'}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Institutional Stats & Real Values */}
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-2xl bg-slate-900 text-white p-6 sm:p-7 border border-slate-800 space-y-6 shadow-lg">
              <h3 className="text-base font-bold font-serif-academic text-amber-400">
                {language === 'fr' ? 'Chiffres Clés de l\'Établissement' : 'Institutional Key Facts'}
              </h3>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="text-2xl sm:text-3xl font-extrabold text-white block">6</span>
                  <span className="text-xs text-slate-400">
                    {language === 'fr' ? 'Pôles de Formations' : 'Academic Disciplines'}
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="text-2xl sm:text-3xl font-extrabold text-white block">2</span>
                  <span className="text-xs text-slate-400">
                    {language === 'fr' ? 'Campus à Douala' : 'Campuses in Douala'}
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="text-2xl sm:text-3xl font-extrabold text-amber-400 block">3</span>
                  <span className="text-xs text-slate-400">
                    {language === 'fr' ? 'Hôpitaux Partenaires' : 'Partner Hospitals'}
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="text-2xl sm:text-3xl font-extrabold text-emerald-400 block">Jour/Soir</span>
                  <span className="text-xs text-slate-400">
                    {language === 'fr' ? 'Horaires Flexibles' : 'Flexible Shifts'}
                  </span>
                </div>
              </div>

              <div className="space-y-2 text-xs text-slate-300 border-t border-slate-800 pt-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{language === 'fr' ? 'Filières médicales, industrielles, tertiaires et agropastorales' : 'Medical, industrial, business and agropastoral programs'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{language === 'fr' ? 'Programmes conformes aux exigences nationales du MINESUP' : 'Curricula fully compliant with national MINESUP guidelines'}</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
