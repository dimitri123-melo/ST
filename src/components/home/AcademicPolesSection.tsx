import React from 'react';
import { useLanguage } from '../../locales/useLanguage';
import {
  ArrowRight,
  GraduationCap,
  BookOpen,
} from 'lucide-react';

interface AcademicPolesSectionProps {
  onSelectProgramme?: (prog: any) => void;
  onApplyForProgramme?: (domain: string, progName: string) => void;
  onViewAllProgrammes: () => void;
}

export const AcademicPolesSection: React.FC<AcademicPolesSectionProps> = ({
  onViewAllProgrammes,
}) => {
  const { language } = useLanguage();

  const domainShowcases = [
    {
      id: 'biomedical',
      image: '/images/Medical_students_training_around_patient_202608171133.jpeg',
      titleFr: 'Santé & Biomédical',
      titleEn: 'Health & Biomedical',
      descFr: 'Immersion clinique, sciences infirmières et technologies d\'imagerie.',
      descEn: 'Clinical immersion, nursing sciences, and imaging technologies.',
      colSpan: 'lg:col-span-8',
    },
    {
      id: 'engineering',
      image: '/images/Students_assembling_electrical_circuit_board_202608171133.jpeg',
      titleFr: 'Génie & Technologies',
      titleEn: 'Engineering & Tech',
      descFr: 'IA, génie logiciel, réseaux et systèmes industriels.',
      descEn: 'AI, software engineering, networking and industrial systems.',
      colSpan: 'lg:col-span-4',
    },
    {
      id: 'business',
      image: '/images/People_gathered_in_a_meeting_202608171133.jpeg',
      titleFr: 'Management & Douane',
      titleEn: 'Management & Customs',
      descFr: 'Commerce international, logistique portuaire et finance.',
      descEn: 'International trade, port logistics, and finance.',
      colSpan: 'lg:col-span-4',
    },
    {
      id: 'agriculture',
      image: '/images/Woman_working_in_field_202608171133.jpeg',
      titleFr: 'Agriculture & Élevage',
      titleEn: 'Agriculture & Farming',
      descFr: 'Agro-industrie, aquaculture et gestion des exploitations.',
      descEn: 'Agro-industry, aquaculture, and farm management.',
      colSpan: 'lg:col-span-4',
    },
    {
      id: 'social_sciences',
      image: '/images/Students_preparing_food_in_kitchen_202608171133.jpeg',
      titleFr: 'Arts Culinaires & Mode',
      titleEn: 'Culinary Arts & Fashion',
      descFr: 'Gastronomie, hôtellerie et design de mode.',
      descEn: 'Gastronomy, hospitality, and fashion design.',
      colSpan: 'lg:col-span-4',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/50 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
              <BookOpen className="w-4 h-4" />
              <span>{language === 'fr' ? 'Programmes Académiques' : 'Academic Programmes'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-serif-academic leading-tight">
              {language === 'fr' ? 'Choisissez votre domaine d\'excellence' : 'Choose your field of excellence'}
            </h2>
          </div>
          <button
            onClick={onViewAllProgrammes}
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm transition-all"
          >
            <GraduationCap className="w-4 h-4" />
            <span>{language === 'fr' ? 'Voir toutes les filières' : 'View all programmes'}</span>
          </button>
        </div>

        {/* Asymmetrical Grid (Layout E) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-6">
          {domainShowcases.map((domain, index) => (
            <div
              key={domain.id}
              onClick={onViewAllProgrammes}
              className={`group relative rounded-3xl overflow-hidden cursor-pointer h-[300px] sm:h-[400px] ${domain.colSpan}`}
            >
              <img
                src={domain.image}
                alt={language === 'fr' ? domain.titleFr : domain.titleEn}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy" decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
              
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 flex flex-col justify-end">
                <h3 className="text-2xl sm:text-3xl font-bold font-serif-academic text-white mb-2 group-hover:text-amber-400 transition-colors">
                  {language === 'fr' ? domain.titleFr : domain.titleEn}
                </h3>
                <div className="flex items-end justify-between gap-4">
                  <p className="text-sm text-slate-300 line-clamp-2 max-w-sm">
                    {language === 'fr' ? domain.descFr : domain.descEn}
                  </p>
                  <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center shrink-0 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
