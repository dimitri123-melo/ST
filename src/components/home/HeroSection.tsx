import React from 'react';
import { useLanguage } from '../../locales/useLanguage';
import { INSTITUTION } from '../../data/institution';
import { UniversityLogo, OfficialSeal } from '../common/Logo';
import { BonaberiGlassFacadeGraphic } from '../common/CampusShowcaseVisuals';
import {
  GraduationCap,
  ArrowRight,
  ShieldCheck,
  Award,
  Clock,
  Compass,
  MessageSquare,
  Activity,
  Car,
  Laptop,
  Shirt,
  MapPin,
  CheckCircle2,
} from 'lucide-react';

interface HeroSectionProps {
  onOpenApplication: () => void;
  onOpenOrientation: () => void;
  onExploreProgrammes: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenApplication,
  onOpenOrientation,
  onExploreProgrammes,
}) => {
  const { t, language } = useLanguage();

  const handleWhatsAppChat = () => {
    const text = encodeURIComponent(
      language === 'fr'
        ? 'Bonjour Institut Universitaire St Bernard, je souhaite obtenir des informations sur les admissions 2026-2027.'
        : 'Hello St Bernard University Institute, I would like information about admission for the 2026-2027 academic year.'
    );
    window.open(`https://wa.me/${INSTITUTION.contacts.primaryWhatsApp}?text=${text}`, '_blank');
  };

  return (
    <section className="relative overflow-hidden bg-slate-950 text-white border-b border-slate-800">
      {/* Background Campus Photograph with Refined Dark Gradient Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="w-full h-full opacity-20 filter brightness-90 contrast-110 pointer-events-none scale-105">
          <BonaberiGlassFacadeGraphic className="w-full h-full" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-emerald-950/80"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:32px_32px] opacity-15"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Official Identity, Headline, State Tutelages & Actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Accreditation Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-900/80 border border-emerald-500/40 text-emerald-300 text-xs font-semibold backdrop-blur-md shadow-sm">
              <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
              <span>
                {language === 'fr' 
                  ? 'Autorisation MINESUP N°21-06408/L/MINESUP' 
                  : 'MINESUP Authorization N°21-06408/L/MINESUP'}
              </span>
            </div>

            {/* University Title & Emblem Header */}
            <div className="space-y-3">
              <div className="flex items-center justify-center lg:justify-start gap-4 sm:gap-5">
                <div className="h-18 w-18 sm:h-22 sm:w-22 shrink-0 drop-shadow-xl">
                  <OfficialSeal className="w-full h-full" />
                </div>
                <div className="text-left">
                  <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-amber-400 block font-sans">
                    {language === 'fr' ? 'Institut Universitaire' : 'University Institute'}
                  </span>
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-black font-serif-academic tracking-tight text-white">
                    ST BERNARD
                  </span>
                  <span className="text-xs sm:text-sm font-semibold tracking-wider text-emerald-300 block italic">
                    University of Skill Acquisition
                  </span>
                </div>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-serif-academic tracking-tight text-white leading-tight">
                {language === 'fr' ? (
                  <>
                    L'Excellence Académique & <br className="hidden sm:inline" />
                    <span className="text-amber-400">L'Acquisition de Compétences</span>
                  </>
                ) : (
                  <>
                    Academic Excellence & <br className="hidden sm:inline" />
                    <span className="text-amber-400">Skill Acquisition</span>
                  </>
                )}
              </h1>
              
              <p className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {language === 'fr'
                  ? 'Formations professionnelles d\'État en BTS, HND, Licence et Master. Deux campus modernes à Douala (Bonabéri & Mboppi) avec 3 hôpitaux partenaires et laboratoires de pointe.'
                  : 'State-accredited professional training in BTS, HND, Bachelor and Master degrees. Two modern campuses in Douala (Bonaberi & Mboppi) with 3 partner hospitals and state-of-the-art labs.'}
              </p>
            </div>

            {/* State Tutelages & Shift Options */}
            <div className="pt-1">
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/90 border border-slate-700 text-slate-200 text-xs font-semibold">
                  <Award className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  Université de Douala
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/90 border border-slate-700 text-slate-200 text-xs font-semibold">
                  <Award className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  University of Buea
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-950/80 border border-emerald-700/60 text-emerald-300 text-xs font-semibold">
                  <Clock className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  {language === 'fr' ? 'Cours du Jour & Cours du Soir' : 'Day & Evening Shifts'}
                </span>
              </div>
            </div>

            {/* Primary, Secondary, and WhatsApp CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <button
                id="hero-btn-apply-now"
                onClick={onOpenApplication}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-sm shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 transition-all flex items-center justify-center gap-2"
              >
                <GraduationCap className="w-4 h-4" />
                <span>{language === 'fr' ? 'Postuler en Ligne' : 'Apply Now'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-btn-explore-programmes"
                onClick={onExploreProgrammes}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm border border-slate-700 transition-all flex items-center justify-center gap-2"
              >
                <span>{language === 'fr' ? 'Explorer les Filières' : 'Explore Programmes'}</span>
              </button>

              <button
                id="hero-btn-whatsapp-chat"
                onClick={handleWhatsAppChat}
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-semibold text-sm border border-emerald-600 transition-all flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-emerald-200" />
                <span>WhatsApp : +237 682 764 947</span>
              </button>
            </div>

            {/* Verified Campus Locations */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-slate-400 border-t border-slate-800/80">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span className="font-semibold text-slate-200">Campus Bonabéri :</span>
                <span>En face de la boulangerie de la Gare</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span className="font-semibold text-slate-200">Campus Mboppi :</span>
                <span>Près de l'entrée ECOBANK</span>
              </div>
            </div>
          </div>

          {/* Right Column: Institutional 2026-2027 Admissions Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-slate-900/90 border border-slate-800 p-6 sm:p-7 shadow-2xl backdrop-blur-md space-y-5">
              
              {/* Campaign Header */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-amber-500/20 to-emerald-500/10 border border-amber-500/30">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-400">
                    {language === 'fr' ? 'Campagne Admissions 2026 / 2027' : '2026 / 2027 Admissions'}
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-500/30 text-amber-300 border border-amber-500/40">
                    Sept. 2026
                  </span>
                </div>
                <p className="text-xs text-slate-200 font-medium">
                  {language === 'fr'
                    ? 'Inscrivez-vous tôt et choisissez votre avantage de rentrée :'
                    : 'Early applicants can select their preferred admission bonus:'}
                </p>
                <div className="grid grid-cols-3 gap-2 mt-3 text-center">
                  <div className="bg-slate-950/80 p-2 rounded-lg border border-slate-800">
                    <span className="text-xs font-bold text-amber-400 block">60.000 F</span>
                    <span className="text-[10px] text-slate-400">{language === 'fr' ? 'Bourse' : 'Scholarship'}</span>
                  </div>
                  <div className="bg-slate-950/80 p-2 rounded-lg border border-slate-800">
                    <span className="text-xs font-bold text-amber-400 block">Laptop</span>
                    <span className="text-[10px] text-slate-400">{language === 'fr' ? 'Ordinateur' : 'Computer'}</span>
                  </div>
                  <div className="bg-slate-950/80 p-2 rounded-lg border border-slate-800">
                    <span className="text-xs font-bold text-amber-400 block">Smartphone</span>
                    <span className="text-[10px] text-slate-400">{language === 'fr' ? '4G / 5G' : 'Connected'}</span>
                  </div>
                </div>
              </div>

              {/* Verified Institutional Pillars (No emojis, Lucide Icons) */}
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                  <div className="p-2 rounded-lg bg-emerald-950 border border-emerald-800/80 text-emerald-400 shrink-0">
                    <Activity className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-100">
                      {language === 'fr' ? '3 Hôpitaux Partenaires St Bernard' : '3 Partner St Bernard Hospitals'}
                    </h4>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      {language === 'fr'
                        ? 'Immersion clinique directe et couverture santé à 50% pour nos étudiants.'
                        : 'Direct clinical practice and 50% medical coverage for enrolled students.'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                  <div className="p-2 rounded-lg bg-emerald-950 border border-emerald-800/80 text-emerald-400 shrink-0">
                    <Car className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-100">
                      {language === 'fr' ? 'Formation Auto-École Offerte' : 'Complimentary Driving School'}
                    </h4>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      {language === 'fr'
                        ? 'Cours théoriques et pratiques de conduite inclus dans le parcours de formation.'
                        : 'Comprehensive driving license training included in student curriculum.'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                  <div className="p-2 rounded-lg bg-emerald-950 border border-emerald-800/80 text-emerald-400 shrink-0">
                    <Shirt className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-100">
                      {language === 'fr' ? 'Uniformes & Blouses Offerts' : 'Free Institutional Uniforms'}
                    </h4>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      {language === 'fr'
                        ? 'Tenues officielles et blouses de laboratoire fournies gracieusement.'
                        : 'Official campus polo shirts and lab coats provided upon registration.'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Free Orientation Quick Action */}
              <button
                id="hero-card-orientation-btn"
                onClick={onOpenOrientation}
                className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-750 text-slate-200 hover:text-white text-xs font-bold border border-slate-700 transition-all flex items-center justify-center gap-2"
              >
                <Compass className="w-4 h-4 text-amber-400" />
                <span>{language === 'fr' ? 'Besoin d\'aide pour choisir votre filière ?' : 'Need guidance choosing a programme?'}</span>
              </button>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
