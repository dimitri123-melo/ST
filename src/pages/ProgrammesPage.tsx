import React, { useEffect } from 'react';
import { useLanguage } from '../locales/useLanguage';
import { PROGRAMMES_DATA, DOMAIN_INFO } from '../data/programmes';
import { Programme } from '../types';
import {
  BookOpen,
  MapPin,
  Clock,
  ArrowRight,
  Compass,
} from 'lucide-react';

interface ProgrammesPageProps {
  onSelectProgramme: (prog: Programme) => void;
  onOpenApplication: (domain?: string, progName?: string) => void;
  onOpenOrientation?: () => void;
  initialDomainFilter?: string;
}

export const ProgrammesPage: React.FC<ProgrammesPageProps> = ({
  onSelectProgramme,
  onOpenApplication,
  onOpenOrientation,
  initialDomainFilter = 'all',
}) => {
  const { language } = useLanguage();

  useEffect(() => {
    if (initialDomainFilter && initialDomainFilter !== 'all') {
      const el = document.getElementById(`domain-${initialDomainFilter}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [initialDomainFilter]);

  // Group programmes by domain
  const domains = [
    { id: 'biomedical', image: '/images/Medical_students_training_around_patient_202608171133.jpeg' },
    { id: 'engineering', image: '/images/Students_assembling_electrical_circuit_board_202608171133.jpeg' },
    { id: 'business', image: '/images/Man_sitting_at_conference_table_202608171133.jpeg' },
    { id: 'agriculture', image: '/images/Students_in_forest_with_guide_202608171133.jpeg' },
    { id: 'social_sciences', image: '/images/Students_preparing_food_in_kitchen_202608171133.jpeg' },
    { id: 'education', image: '/images/Educational_poster_for_university_programs_202608171134.jpeg' },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      
      {/* Header Banner */}
      <section className="bg-slate-950 text-white py-24 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/Students_using_laptops_in_classroom_202608171133.jpeg')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 to-slate-950"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-900/50 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
            <BookOpen className="w-4 h-4" />
            <span>{language === 'fr' ? 'Offre de Formation' : 'Academic Catalog'}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-serif-academic text-white leading-tight">
            {language === 'fr' ? 'Nos Filières & Diplômes' : 'Programmes & Degrees'}
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
            {language === 'fr'
              ? 'Découvrez nos parcours professionnalisants sous la tutelle de l\'Université de Douala et de l\'University of Buea.'
              : 'Discover our professional pathways under the tutelage of the University of Douala and University of Buea.'}
          </p>

          {onOpenOrientation && (
            <div className="pt-4">
              <button
                onClick={onOpenOrientation}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 text-slate-950 font-black text-sm hover:bg-amber-400 transition-all shadow-md"
              >
                <Compass className="w-4 h-4" />
                <span>{language === 'fr' ? 'Test d\'Orientation Rapide' : 'Career Orientation Quiz'}</span>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Sequential Domain Storytelling */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 py-16 sm:py-24">
        {domains.map((domainConfig, index) => {
          const domainProgrammes = PROGRAMMES_DATA.filter((p) => p.domain === domainConfig.id);
          if (domainProgrammes.length === 0) return null;

          const meta = DOMAIN_INFO[domainConfig.id];
          const isReversed = index % 2 !== 0;

          return (
            <section key={domainConfig.id} id={`domain-${domainConfig.id}`} className="scroll-mt-32 space-y-8">
              
              {/* Domain Header (Image + Text layout) */}
              <div className={`flex flex-col lg:flex-row gap-8 lg:gap-12 items-center ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
                <div className="w-full lg:w-1/2">
                  <div className="relative h-[300px] sm:h-[400px] rounded-3xl overflow-hidden shadow-lg group">
                    <img
                      src={domainConfig.image}
                      alt={meta.name[language]}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy" decoding="async"
                    />
                    <div className="absolute inset-0 bg-slate-900/10 pointer-events-none"></div>
                  </div>
                </div>

                <div className="w-full lg:w-1/2 space-y-4">
                  <div className={`inline-block px-3 py-1 text-[10px] font-bold uppercase rounded-full border ${meta.badgeColor}`}>
                    {meta.name[language]}
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold font-serif-academic text-slate-900">
                    {meta.name[language]}
                  </h2>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {/* Placeholder domain descriptions, you could extract these from a data file if available */}
                    {language === 'fr'
                      ? 'Des formations axées sur la pratique, dispensées par des professionnels, pour garantir votre intégration immédiate dans ce secteur clé.'
                      : 'Practical-focused training delivered by professionals, designed to guarantee your immediate integration into this key sector.'}
                  </p>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider pt-2 border-t border-slate-200 mt-4">
                    {domainProgrammes.length} {language === 'fr' ? 'Filières' : 'Programmes'}
                  </p>
                </div>
              </div>

              {/* Minimal Programme Cards List */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {domainProgrammes.map((prog) => (
                  <div
                    key={prog.id}
                    className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm hover:shadow-md hover:border-emerald-300 transition-all flex flex-col justify-between space-y-4"
                  >
                    <div>
                      <div className="flex flex-wrap gap-1 mb-3">
                        {prog.level.map((lvl) => (
                          <span key={lvl} className="bg-slate-100 text-slate-700 text-[10px] font-bold px-2 py-0.5 rounded">
                            {lvl}
                          </span>
                        ))}
                      </div>
                      <h3 className="font-bold text-slate-900 text-base leading-tight">
                        {prog.name[language]}
                      </h3>
                    </div>

                    <div className="space-y-4 pt-2">
                      <div className="flex items-center justify-between text-[11px] text-slate-500 border-t border-slate-100 pt-3">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-emerald-600" />
                          {prog.campuses.length > 1 ? 'Bonabéri & Mboppi' : prog.campuses[0]}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3 text-amber-600" />
                          {prog.shifts[language]}
                        </span>
                      </div>
                      
                      <div className="flex gap-2">
                        <button
                          onClick={() => onSelectProgramme(prog)}
                          className="flex-1 py-2 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-800 text-xs font-bold transition-colors border border-slate-200"
                        >
                          {language === 'fr' ? 'Détails' : 'Details'}
                        </button>
                        <button
                          onClick={() => onOpenApplication(prog.domain, prog.name[language])}
                          className="flex-1 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors flex items-center justify-center gap-1"
                        >
                          <span>{language === 'fr' ? 'Postuler' : 'Apply'}</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </section>
          );
        })}
      </div>
    </div>
  );
};
