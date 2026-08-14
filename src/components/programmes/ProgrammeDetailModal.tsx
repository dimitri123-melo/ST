import React from 'react';
import { useLanguage } from '../../locales/useLanguage';
import { Programme } from '../../types';
import { INSTITUTION } from '../../data/institution';
import {
  X,
  GraduationCap,
  Briefcase,
  CheckCircle,
  MapPin,
  Clock,
  BookOpen,
  MessageCircle,
  Sparkles,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';

interface ProgrammeDetailModalProps {
  programme: Programme | null;
  onClose: () => void;
  onApply: (domain: string, progName: string) => void;
}

export const ProgrammeDetailModal: React.FC<ProgrammeDetailModalProps> = ({
  programme,
  onClose,
  onApply,
}) => {
  const { language } = useLanguage();

  if (!programme) return null;

  const openWhatsAppForProgramme = () => {
    const text = encodeURIComponent(
      language === 'fr'
        ? `Bonjour, je souhaite avoir des détails sur la filière "${programme.name.fr}" (cycles: ${programme.level.join('/')}) à l'Institut Universitaire St Bernard.`
        : `Hello, I would like details about the programme "${programme.name.en}" (levels: ${programme.level.join('/')}) at St Bernard University Institute.`
    );
    window.open(`https://wa.me/${INSTITUTION.contacts.primaryWhatsApp}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header with gradient */}
        <div className="bg-gradient-to-r from-emerald-900 via-emerald-950 to-slate-950 p-6 text-white flex items-start justify-between gap-4">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="bg-amber-400 text-emerald-950 font-extrabold text-[10px] uppercase px-2.5 py-0.5 rounded-full tracking-wider">
                {programme.domain.toUpperCase()}
              </span>
              <div className="flex gap-1">
                {programme.level.map((lvl) => (
                  <span
                    key={lvl}
                    className="bg-emerald-800 text-emerald-100 text-[10px] font-bold px-2 py-0.5 rounded"
                  >
                    {lvl}
                  </span>
                ))}
              </div>
              <span className="text-emerald-300 text-xs font-semibold">
                • {programme.durationYears[language]}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold font-serif-academic text-white">
              {programme.name[language]}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-emerald-200 hover:text-white hover:bg-emerald-800 transition-colors shrink-0"
            aria-label="Fermer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Overview Description */}
          <div className="bg-emerald-50/70 border border-emerald-200/60 rounded-2xl p-4 text-sm text-slate-800 leading-relaxed">
            <p>{programme.description[language]}</p>
          </div>

          {/* Quick info row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center gap-2.5">
              <MapPin className="w-4 h-4 text-emerald-700 shrink-0" />
              <div>
                <span className="text-slate-400 block text-[10px]">Campus :</span>
                <span className="font-bold text-slate-800">
                  {programme.campuses.map((c) => (c === 'bonaberi' ? 'Bonabéri' : 'Mboppi')).join(' & ')}
                </span>
              </div>
            </div>

            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-emerald-700 shrink-0" />
              <div>
                <span className="text-slate-400 block text-[10px]">Horaires :</span>
                <span className="font-bold text-slate-800">{programme.shifts[language]}</span>
              </div>
            </div>

            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center gap-2.5">
              <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
              <div>
                <span className="text-slate-400 block text-[10px]">Tutelle d'État :</span>
                <span className="font-bold text-slate-800">Douala / Buea</span>
              </div>
            </div>
          </div>

          {/* Key Topics / Syllabus */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2 border-b border-slate-100 pb-2">
              <BookOpen className="w-4 h-4 text-emerald-700" />
              <span>{language === 'fr' ? 'Modules & Compétences Clés' : 'Core Modules & Skills'}</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {programme.keyTopics.map((topic, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{topic[language]}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Career Opportunities / Débouchés */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2 border-b border-slate-100 pb-2">
              <Briefcase className="w-4 h-4 text-emerald-700" />
              <span>{language === 'fr' ? 'Débouchés Professionnels' : 'Career Opportunities'}</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {programme.careerOpportunities.map((career, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 rounded-xl bg-slate-100 text-slate-800 text-xs font-medium border border-slate-200"
                >
                  💼 {career[language]}
                </span>
              ))}
            </div>
          </div>

          {/* Admission Requirements */}
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2 text-xs">
            <h5 className="font-bold text-slate-900 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-amber-600" />
              <span>{language === 'fr' ? 'Profil Requis & Diplômes d\'Accès' : 'Admission Requirements'}</span>
            </h5>
            <p className="text-slate-600">{programme.admissionRequirements[language]}</p>
          </div>
        </div>

        {/* Modal Footer Controls */}
        <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={openWhatsAppForProgramme}
            className="w-full sm:w-auto px-4 py-2.5 bg-white hover:bg-emerald-50 text-emerald-900 border border-emerald-200 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600" />
            <span>{language === 'fr' ? 'Poser une question sur WhatsApp' : 'Ask on WhatsApp'}</span>
          </button>

          <button
            onClick={() => {
              onClose();
              onApply(programme.domain, programme.name[language]);
            }}
            className="w-full sm:w-auto px-6 py-2.5 bg-emerald-800 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
          >
            <span>{language === 'fr' ? 'Postuler dans cette filière' : 'Apply for this programme'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
