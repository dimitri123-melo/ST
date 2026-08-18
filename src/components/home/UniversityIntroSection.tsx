import React from 'react';
import { useLanguage } from '../../locales/useLanguage';
import {
  ShieldCheck,
  Award,
  GraduationCap,
  ArrowRight,
} from 'lucide-react';

interface UniversityIntroSectionProps {
  onLearnMore?: () => void;
  onOpenAdmissions?: () => void;
}

export const UniversityIntroSection: React.FC<UniversityIntroSectionProps> = ({
  onOpenAdmissions,
}) => {
  const { language } = useLanguage();

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Large Image (Layout A) */}
          <div className="relative group rounded-3xl overflow-hidden shadow-2xl h-[400px] sm:h-[500px] lg:h-[600px]">
            <img 
              src="/images/St_Bernard_University_building_exterior_202608171132.jpeg" 
              alt="St Bernard University Campus" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Elegant overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none"></div>
            
            {/* Stats overlay */}
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between gap-4">
              <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/20">
                <span className="text-2xl font-black text-emerald-800 block">6</span>
                <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wider">
                  {language === 'fr' ? 'Pôles de Formations' : 'Academic Disciplines'}
                </span>
              </div>
              <div className="bg-emerald-900/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-emerald-500/30 text-white">
                <span className="text-2xl font-black text-amber-400 block">3</span>
                <span className="text-[10px] font-bold text-emerald-100 uppercase tracking-wider">
                  {language === 'fr' ? 'Hôpitaux Partenaires' : 'Partner Hospitals'}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Short Text & CTAs */}
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 text-slate-800 text-[11px] font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-emerald-700" />
                <span>{language === 'fr' ? 'Établissement Supérieur Privé Agréé' : 'Accredited Higher Education Institute'}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-serif-academic text-slate-900 leading-[1.1]">
                {language === 'fr' ? (
                  <>
                    L'Excellence Académique & <br className="hidden lg:block"/>
                    <span className="text-emerald-800">L'Acquisition de Compétences</span>
                  </>
                ) : (
                  <>
                    Academic Excellence & <br className="hidden lg:block"/>
                    <span className="text-emerald-800">Skill Acquisition</span>
                  </>
                )}
              </h2>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-sans max-w-xl">
                {language === 'fr'
                  ? "Créé sous l'autorisation ministérielle N°21-06408/L/MINESUP/SG/DDES/ESUP/SDA/MF/YDE, l'Institut Universitaire St Bernard met l'accent sur l'apprentissage par la pratique, l'éthique professionnelle et l'intégration directe sur le marché de l'emploi."
                  : "Established under ministerial authorization N°21-06408/L/MINESUP/SG/DDES/ESUP/SDA/MF/YDE, St Bernard University Institute places a strong emphasis on hands-on practical learning, professional ethics, and direct job market integration."}
              </p>
            </div>

            {/* State Tutelages Compact Banner */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3 hover:border-emerald-200 transition-colors">
                <div className="p-2 bg-white rounded-lg shadow-sm border border-slate-100 shrink-0">
                  <Award className="w-5 h-5 text-amber-500" />
                </div>
                <div>
                  <span className="text-sm font-bold text-slate-900 block">Université de Douala</span>
                  <span className="text-[11px] font-medium text-slate-500 uppercase tracking-wider">
                    {language === 'fr' ? 'Tutelle Académique' : 'Academic Tutelage'}
                  </span>
                </div>
              </div>

              <div className="flex-1 p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3 hover:border-emerald-200 transition-colors">
                <div className="p-2 bg-white rounded-lg shadow-sm border border-slate-100 shrink-0">
                  <Award className="w-5 h-5 text-amber-500" />
                </div>
                <div>
                  <span className="text-sm font-bold text-slate-900 block">University of Buea</span>
                  <span className="text-[11px] font-medium text-slate-500 uppercase tracking-wider">
                    {language === 'fr' ? 'Tutelle Académique' : 'Academic Tutelage'}
                  </span>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="pt-2">
              <button
                onClick={onOpenAdmissions}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm transition-all shadow-md hover:shadow-xl active:scale-95 group"
              >
                <GraduationCap className="w-4 h-4 text-amber-400" />
                <span>{language === 'fr' ? 'Rejoindre notre institut' : 'Join our institute'}</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
