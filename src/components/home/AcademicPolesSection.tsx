import React, { useState } from 'react';
import { useLanguage } from '../../locales/useLanguage';
import { DOMAIN_INFO, PROGRAMMES_DATA } from '../../data/programmes';
import { Programme } from '../../types';
import {
  Search,
  ArrowRight,
  GraduationCap,
  MapPin,
  Clock,
  BookOpen,
  Stethoscope,
  Cpu,
  Briefcase,
  Sprout,
  Palette,
  Scale,
  Layers,
} from 'lucide-react';

interface AcademicPolesSectionProps {
  onSelectProgramme: (prog: Programme) => void;
  onApplyForProgramme: (domain: string, progName: string) => void;
  onViewAllProgrammes: () => void;
  selectedDomainFilter?: string;
}

export const AcademicPolesSection: React.FC<AcademicPolesSectionProps> = ({
  onSelectProgramme,
  onApplyForProgramme,
  onViewAllProgrammes,
  selectedDomainFilter = 'all',
}) => {
  const { t, language } = useLanguage();
  const [activeDomain, setActiveDomain] = useState<string>(selectedDomainFilter);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');

  const getDomainIcon = (key: string, className: string = 'w-4 h-4') => {
    switch (key) {
      case 'biomedical':
        return <Stethoscope className={className} />;
      case 'engineering':
        return <Cpu className={className} />;
      case 'business':
      case 'commerce':
        return <Briefcase className={className} />;
      case 'agriculture':
        return <Sprout className={className} />;
      case 'social_sciences':
        return <Palette className={className} />;
      case 'education':
        return <Scale className={className} />;
      default:
        return <Layers className={className} />;
    }
  };

  const domainTabs: { key: string; nameFr: string; nameEn: string }[] = [
    { key: 'all', nameFr: 'Toutes les filières', nameEn: 'All Disciplines' },
    { key: 'biomedical', nameFr: 'Sciences Biomédicales', nameEn: 'Biomedical & Health' },
    { key: 'engineering', nameFr: 'Industrie & Technologie', nameEn: 'Industry & Technology' },
    { key: 'business', nameFr: 'Commerce & Gestion', nameEn: 'Business & Management' },
    { key: 'agriculture', nameFr: 'Sciences Agro-Pastorales', nameEn: 'Agro-Pastoral Sciences' },
    { key: 'social_sciences', nameFr: 'Sciences Sociales & Arts', nameEn: 'Social Sciences & Arts' },
    { key: 'education', nameFr: 'Sciences de l\'Éducation', nameEn: 'Education & Law' },
  ];

  const filteredProgrammes = PROGRAMMES_DATA.filter((prog) => {
    if (activeDomain !== 'all' && prog.domain !== activeDomain) return false;

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
      const matchHighlights =
        prog.curriculumHighlights.fr.some((h) => h.toLowerCase().includes(q)) ||
        prog.curriculumHighlights.en.some((h) => h.toLowerCase().includes(q));
      if (!matchName && !matchDesc && !matchHighlights) return false;
    }

    return true;
  });

  return (
    <section id="programmes-section" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 font-bold text-xs uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5 text-emerald-700" />
            <span>{language === 'fr' ? 'Pôles de Compétences Universitaires' : 'Accredited Degree Programs'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black font-serif-academic text-slate-900">
            {t.domains.heading}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-sans">
            {t.domains.subheading}
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className="bg-white p-4 sm:p-5 rounded-2xl shadow-sm border border-slate-200 mb-8 space-y-4">
          
          {/* Search bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.domains.searchPlaceholder}
              className="w-full pl-11 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:bg-white transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 font-semibold"
              >
                {language === 'fr' ? 'Effacer' : 'Clear'}
              </button>
            )}
          </div>

          {/* Domain Tabs with Lucide Icons */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
            {domainTabs.map((dom) => (
              <button
                key={dom.key}
                onClick={() => setActiveDomain(dom.key)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-2 shrink-0 ${
                  activeDomain === dom.key
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {getDomainIcon(dom.key, 'w-3.5 h-3.5')}
                <span>{language === 'fr' ? dom.nameFr : dom.nameEn}</span>
              </button>
            ))}
          </div>

          {/* Level Filter Pills */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-100 text-xs">
            <div className="flex items-center gap-2">
              <span className="font-bold text-slate-500 uppercase text-[10px]">
                {language === 'fr' ? 'Cycle :' : 'Level:'}
              </span>
              {['all', 'bts', 'hnd', 'licence', 'master'].map((lvl) => (
                <button
                  key={lvl}
                  onClick={() => setSelectedLevel(lvl)}
                  className={`px-2.5 py-1 rounded-md text-xs font-semibold uppercase transition-all ${
                    selectedLevel === lvl
                      ? 'bg-amber-500 text-slate-950 font-bold'
                      : 'text-slate-600 hover:text-slate-900 bg-slate-100'
                  }`}
                >
                  {lvl === 'all' ? (language === 'fr' ? 'Tous' : 'All') : lvl}
                </button>
              ))}
            </div>

            <span className="text-xs text-slate-500 font-medium">
              {filteredProgrammes.length} {language === 'fr' ? 'filières disponibles' : 'available programmes'}
            </span>
          </div>
        </div>

        {/* Programmes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProgrammes.map((prog) => {
            const domainMeta = DOMAIN_INFO[prog.domain] || DOMAIN_INFO.business || {
              name: { fr: 'Formation', en: 'Programme' },
              badgeColor: 'bg-emerald-50 text-emerald-800 border-emerald-200',
              icon: 'GraduationCap',
            };

            return (
              <div
                key={prog.id}
                className="group relative bg-white rounded-2xl p-6 border border-slate-200 hover:border-slate-400 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Top Badge Row */}
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={`inline-flex items-center gap-1.5 text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-md border ${domainMeta.badgeColor}`}
                    >
                      {getDomainIcon(prog.domain, 'w-3 h-3')}
                      <span>{domainMeta.name[language]}</span>
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

                  {/* Programme Name */}
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-emerald-800 transition-colors line-clamp-2 leading-snug">
                    {prog.name[language]}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {prog.description[language]}
                  </p>

                  {/* Curriculum Highlights */}
                  <div className="space-y-1.5 pt-1">
                    <span className="text-[10px] font-bold uppercase text-slate-400 block">
                      {language === 'fr' ? 'Compétences clés :' : 'Core competencies:'}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {prog.curriculumHighlights[language].slice(0, 3).map((topic, i) => (
                        <span
                          key={i}
                          className="text-[11px] bg-slate-50 text-slate-700 px-2 py-0.5 rounded border border-slate-200 truncate max-w-[200px]"
                        >
                          • {topic}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Campus & Shift Badges */}
                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-slate-600" />
                      {prog.campuses.map((c) => (c === 'bonaberi' ? 'Bonabéri' : 'Mboppi')).join(' & ')}
                    </span>
                    <span className="flex items-center gap-1 text-slate-700 font-semibold">
                      <Clock className="w-3 h-3 text-slate-500" />
                      {prog.shifts[language]}
                    </span>
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                  <button
                    onClick={() => onSelectProgramme(prog)}
                    className="text-xs font-bold text-slate-700 hover:text-slate-950 py-2 px-3 rounded-lg hover:bg-slate-100 transition-colors"
                  >
                    {language === 'fr' ? 'Détails du cursus' : 'View Syllabus'}
                  </button>

                  <button
                    onClick={() => onApplyForProgramme(prog.domain, prog.name[language])}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-sm transition-all"
                  >
                    <span>{language === 'fr' ? 'Postuler' : 'Apply'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* View all programmes CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={onViewAllProgrammes}
            className="px-8 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all inline-flex items-center gap-2"
          >
            <GraduationCap className="w-4 h-4 text-amber-400" />
            <span>{t.domains.viewAll}</span>
          </button>
        </div>
      </div>
    </section>
  );
};
