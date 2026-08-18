import React from 'react';
import { useLanguage } from '../../locales/useLanguage';
import { INSTITUTION } from '../../data/institution';
import { OfficialSeal, UniversityLogo } from '../common/Logo';
import {
  GraduationCap,
  ArrowRight,
  ShieldCheck,
  MessageSquare,
} from 'lucide-react';

interface HeroSectionProps {
  onOpenApplication: () => void;
  onOpenOrientation: () => void;
  onExploreProgrammes: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenApplication,
  onExploreProgrammes,
}) => {
  const { language } = useLanguage();

  const handleWhatsAppChat = () => {
    const text = encodeURIComponent(
      language === 'fr'
        ? 'Bonjour Institut Universitaire St Bernard, je souhaite obtenir des informations sur les admissions 2026-2027.'
        : 'Hello St Bernard University Institute, I would like information about admission for the 2026-2027 academic year.'
    );
    window.open(`https://wa.me/${INSTITUTION.contacts.primaryWhatsApp}?text=${text}`, '_blank');
  };

  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Immersive Background Photograph */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/Students_in_classroom_lecture_202608171133.jpeg" 
          alt="St Bernard University Students" 
          className="w-full h-full object-cover filter brightness-[0.4]"
        />
        {/* Subtle radial gradient to focus attention on center/text */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-slate-950/30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        {/* Accreditation Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/50 border border-slate-700/50 text-slate-300 text-[11px] sm:text-xs font-semibold backdrop-blur-md mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>
            {language === 'fr' 
              ? 'Autorisation MINESUP N°21-06408/L/MINESUP' 
              : 'MINESUP Authorization N°21-06408/L/MINESUP'}
          </span>
        </div>

        {/* Seal and Title */}
        <div className="flex flex-col items-center gap-4 mb-6 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
          <div className="flex items-center justify-center">
            <UniversityLogo size="xl" variant="white" className="h-28 sm:h-32 drop-shadow-[0_4px_20px_rgba(255,255,255,0.3)]" />
          </div>
          <div>
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] text-amber-400 block mb-2">
              {language === 'fr' ? 'Institut Universitaire' : 'University Institute'}
            </span>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black font-serif-academic tracking-tight text-white leading-none">
              ST BERNARD
            </h1>
          </div>
        </div>

        {/* Catchphrase */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-slate-200 mt-2 mb-8 max-w-3xl animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200 leading-snug">
          {language === 'fr' ? (
            <>L'Excellence Académique <span className="font-bold text-white">&</span> <span className="text-amber-400 font-bold">L'Acquisition de Compétences</span></>
          ) : (
            <>Academic Excellence <span className="font-bold text-white">&</span> <span className="text-amber-400 font-bold">Skill Acquisition</span></>
          )}
        </h2>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300">
          <button
            onClick={onExploreProgrammes}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white hover:bg-slate-100 text-slate-950 font-black text-sm transition-all shadow-xl hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
          >
            <span>{language === 'fr' ? 'Explorer les Filières' : 'Explore Programmes'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onOpenApplication}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm transition-all shadow-lg hover:shadow-amber-500/20 flex items-center justify-center gap-2"
          >
            <GraduationCap className="w-4 h-4" />
            <span>{language === 'fr' ? 'Admissions 2026-2027' : '2026-2027 Admissions'}</span>
          </button>
          
          <button
            onClick={handleWhatsAppChat}
            className="w-full sm:w-auto px-6 py-4 rounded-xl bg-slate-900/60 hover:bg-slate-800/80 backdrop-blur-md border border-slate-700/50 text-white font-bold text-sm transition-all flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            <span>WhatsApp</span>
          </button>
        </div>
      </div>
    </section>
  );
};
