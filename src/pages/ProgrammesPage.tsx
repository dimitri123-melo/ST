import React, { useState, useEffect } from 'react';
import { useLanguage } from '../locales/useLanguage';
import { PROGRAMMES_DATA, DOMAIN_INFO } from '../data/programmes';
import { Programme, DomainCategory } from '../types';
import {
  Search,
  BookOpen,
  GraduationCap,
  Sparkles,
  MapPin,
  Clock,
  ArrowRight,
  Filter,
  CheckCircle2,
  Compass,
  HeartPulse,
  Cpu,
  Briefcase,
  Sprout,
  Palette,
  Scale,
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
  const { t, language } = useLanguage();
  const [selectedDomain, setSelectedDomain] = useState<string>(initialDomainFilter);
  const [selectedLevel, setSelectedLevel] = useState<string>('all');
  const [selectedCampus, setSelectedCampus] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    if (initialDomainFilter) {
      setSelectedDomain(initialDomainFilter);
    }
  }, [initialDomainFilter]);

  const domainTabs = [
    { id: 'all', labelFr: 'Toutes les filières', labelEn: 'All Programmes', Icon: GraduationCap },
    { id: 'biomedical', labelFr: 'Santé & TIM', labelEn: 'Health & TIM', Icon: HeartPulse },
    { id: 'engineering', labelFr: 'Génie Logiciel & IA', labelEn: 'Software & AI', Icon: Cpu },
    { id: 'business', labelFr: 'Douane, Banque & Gestion', labelEn: 'Business & Customs', Icon: Briefcase },
    { id: 'agriculture', labelFr: 'Agro-pastoral & Aquaculture', labelEn: 'Agro & Aquaculture', Icon: Sprout },
    { id: 'social_sciences', labelFr: 'Cuisine & Mode', labelEn: 'Culinary & Fashion', Icon: Palette },
    { id: 'education', labelFr: 'Éducation & Droit', labelEn: 'Education & Law', Icon: Scale },
  ];

  const filteredProgrammes = PROGRAMMES_DATA.filter((prog) => {
    if (selectedDomain !== 'all' && prog.domain !== selectedDomain) return false;
    if (selectedCampus !== 'all' && !prog.campuses.includes(selectedCampus as any)) return false;

    if (selectedLevel !== 'all') {
      if (selectedLevel === 'bts' && !prog.level.includes('BTS')) return false;
      if (selectedLevel === 'hnd' && !prog.level.includes('HND')) return false;
      if (selectedLevel === 'licence' && !prog.level.includes('LICENCE') && !prog.level.includes('BACHELOR')) return false;
      if (selectedLevel === 'master' && !prog.level.includes('MASTER')) return false;
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchName = prog.name.fr.toLowerCase().includes(q) || prog.name.en.toLowerCase().includes(q);
      const matchDesc = prog.description.fr.toLowerCase().includes(q) || prog.description.en.toLowerCase().includes(q);
      const matchKeyTopics =
        prog.curriculumHighlights.fr.some((top) => top.toLowerCase().includes(q)) ||
        prog.curriculumHighlights.en.some((top) => top.toLowerCase().includes(q));
      const matchCareers =
        prog.careerOutcomes.fr.some((c) => c.toLowerCase().includes(q)) ||
        prog.careerOutcomes.en.some((c) => c.toLowerCase().includes(q));
      if (!matchName && !matchDesc && !matchKeyTopics && !matchCareers) return false;
    }

    return true;
  });

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-emerald-950 via-emerald-900 to-slate-900 text-white py-16 sm:py-20 border-b-4 border-amber-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-800/80 border border-emerald-600/80 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <BookOpen className="w-4 h-4" />
            <span>{language === 'fr' ? 'Offre de Formation Complète' : 'Full Academic Catalog'}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-serif-academic text-white">
            {language === 'fr' ? 'Nos Formations & Diplômes' : 'Programmes & Degrees'}
          </h1>
          <p className="text-sm sm:text-base text-slate-200 max-w-2xl mx-auto">
            {language === 'fr'
              ? 'Plus de 35 spécialités d\'avenir réparties en 6 grands domaines, sous tutelle académique des Universités de Douala et de Buea.'
              : 'Over 35 high-demand specialties across 6 academic disciplines, under state academic tutelage of University of Douala and University of Buea.'}
          </p>

          {onOpenOrientation && (
            <div className="pt-2">
              <button
                onClick={onOpenOrientation}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-400 text-emerald-950 font-black text-xs hover:bg-amber-300 transition-all shadow-md"
              >
                <Compass className="w-4 h-4" />
                <span>{language === 'fr' ? 'Faire le test d\'orientation rapide' : 'Take Career Orientation Quiz'}</span>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Main Catalog View */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Controls Card */}
        <div className="bg-white p-5 sm:p-6 rounded-3xl shadow-sm border border-slate-200 space-y-5">
          {/* Search bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.domains.searchPlaceholder}
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:bg-white transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 font-semibold"
              >
                Effacer
              </button>
            )}
          </div>

          {/* Domain tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
            {domainTabs.map((tab) => {
              const IconComponent = tab.Icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedDomain(tab.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 shrink-0 ${
                    selectedDomain === tab.id
                      ? 'bg-emerald-800 text-white shadow-md'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  <IconComponent className="w-3.5 h-3.5 shrink-0" />
                  <span>{language === 'fr' ? tab.labelFr : tab.labelEn}</span>
                </button>
              );
            })}
          </div>

          {/* Secondary Filters: Level and Campus */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-slate-100 text-xs">
            {/* Level */}
            <div className="flex items-center gap-2">
              <span className="font-bold text-slate-500 uppercase text-[10px]">
                {language === 'fr' ? 'Cycle :' : 'Level:'}
              </span>
              {[
                { id: 'all', label: language === 'fr' ? 'Tous' : 'All' },
                { id: 'bts', label: 'BTS' },
                { id: 'hnd', label: 'HND' },
                { id: 'licence', label: 'Licence / Bachelor' },
                { id: 'master', label: 'Master' },
              ].map((lvl) => (
                <button
                  key={lvl.id}
                  onClick={() => setSelectedLevel(lvl.id)}
                  className={`px-2.5 py-1 rounded-lg font-semibold transition-all ${
                    selectedLevel === lvl.id
                      ? 'bg-amber-500 text-emerald-950 font-bold'
                      : 'text-slate-600 hover:text-slate-900 bg-slate-100'
                  }`}
                >
                  {lvl.label}
                </button>
              ))}
            </div>

            {/* Campus */}
            <div className="flex items-center gap-2">
              <span className="font-bold text-slate-500 uppercase text-[10px]">
                {language === 'fr' ? 'Campus :' : 'Campus:'}
              </span>
              {[
                { id: 'all', label: language === 'fr' ? 'Tous les sites' : 'All Sites' },
                { id: 'bonaberi', label: 'Bonabéri' },
                { id: 'mboppi', label: 'Mboppi' },
              ].map((camp) => (
                <button
                  key={camp.id}
                  onClick={() => setSelectedCampus(camp.id)}
                  className={`px-2.5 py-1 rounded-lg font-semibold transition-all ${
                    selectedCampus === camp.id
                      ? 'bg-emerald-800 text-white font-bold'
                      : 'text-slate-600 hover:text-slate-900 bg-slate-100'
                  }`}
                >
                  {camp.label}
                </button>
              ))}
            </div>

            <span className="text-xs text-slate-500 font-semibold">
              {filteredProgrammes.length} {language === 'fr' ? 'formations disponibles' : 'programmes available'}
            </span>
          </div>
        </div>

        {/* Catalog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProgrammes.map((prog) => {
            const domainMeta = DOMAIN_INFO[prog.domain] || DOMAIN_INFO.business || {
              name: { fr: 'Formation', en: 'Programme' },
              badgeColor: 'bg-emerald-50 text-emerald-800 border-emerald-200',
              icon: '🎓',
            };
            return (
              <div
                key={prog.id}
                className="group relative bg-white rounded-3xl p-6 border border-slate-200 hover:border-emerald-500 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Category Pill + Cycles */}
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={`text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full border ${domainMeta.badgeColor}`}
                    >
                      {domainMeta.name[language]}
                    </span>
                    <div className="flex gap-1">
                      {prog.level.map((lvl) => (
                        <span
                          key={lvl}
                          className="bg-slate-100 text-slate-800 font-bold text-[10px] px-2 py-0.5 rounded"
                        >
                          {lvl}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-emerald-800 transition-colors leading-snug">
                    {prog.name[language]}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {prog.description[language]}
                  </p>

                  {/* Modules topics preview */}
                  <div className="space-y-1 pt-1">
                    <span className="text-[10px] font-bold uppercase text-slate-400 block">
                      {language === 'fr' ? 'Points forts du programme :' : 'Syllabus highlights:'}
                    </span>
                    <div className="space-y-1">
                      {prog.curriculumHighlights[language].slice(0, 3).map((topic, i) => (
                        <div key={i} className="flex items-center gap-1.5 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span className="truncate">{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Shift & Campuses */}
                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-emerald-700" />
                      {prog.campuses.map((c) => (c === 'bonaberi' ? 'Bonabéri' : 'Mboppi')).join(' & ')}
                    </span>
                    <span className="flex items-center gap-1 text-amber-700 font-semibold">
                      <Clock className="w-3 h-3 text-amber-600" />
                      {prog.shifts[language]}
                    </span>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-5 flex items-center gap-2 border-t border-slate-100 mt-4">
                  <button
                    onClick={() => onSelectProgramme(prog)}
                    className="flex-1 py-2 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-all text-center"
                  >
                    {language === 'fr' ? 'Voir Détails' : 'View Details'}
                  </button>

                  <button
                    onClick={() => onOpenApplication(prog.domain, prog.name[language])}
                    className="flex-1 py-2 px-3 rounded-xl bg-emerald-800 hover:bg-emerald-700 text-white text-xs font-bold transition-all flex items-center justify-center gap-1 shadow-sm"
                  >
                    <span>{language === 'fr' ? 'Postuler' : 'Apply'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
