import React from 'react';
import { useLanguage } from '../locales/useLanguage';
import { INSTITUTION } from '../data/institution';
import { PageView } from '../types';
import { OfficialSeal } from '../components/common/Logo';
import {
  BonaberiGlassFacadeGraphic,
  MboppiFacadeGraphic,
} from '../components/common/CampusShowcaseVisuals';
import { GalleryPromoterFounder } from '../components/common/RealCampusGalleryVisuals';
import {
  ShieldCheck,
  Award,
  BookOpen,
  Target,
  Users,
  CheckCircle2,
  MapPin,
  Clock,
  Sparkles,
  HeartHandshake,
  GraduationCap,
} from 'lucide-react';

interface AboutPageProps {
  onOpenApplication: () => void;
  onOpenOrientation: () => void;
  onNavigate?: (page: PageView) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onOpenApplication,
  onOpenOrientation,
}) => {
  const { t, language } = useLanguage();

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-emerald-950 via-emerald-900 to-slate-900 text-white py-16 sm:py-20 border-b-4 border-amber-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-800/80 border border-emerald-600/80 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>{language === 'fr' ? 'À Propos de Notre Institution' : 'About Our Institution'}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-serif-academic text-white">
            {INSTITUTION.name[language]}
          </h1>
          <p className="text-base sm:text-xl text-amber-300 font-display italic max-w-2xl mx-auto">
            « {INSTITUTION.slogan[language]} »
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Accreditations & Tutelages Banner */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-slate-100 pb-6">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-800 block mb-1">
                {language === 'fr' ? 'Reconnaissance Officielle' : 'Official Accreditation'}
              </span>
              <h2 className="text-xl sm:text-2xl font-bold font-serif-academic text-slate-900">
                {language === 'fr' ? 'Autorisation Ministérielle & Tutelles Académiques' : 'Ministerial Authorization & State Tutelage'}
              </h2>
            </div>

            <div className="p-3 bg-emerald-50 rounded-2xl border border-emerald-200 text-xs font-bold text-emerald-950">
              MINESUP N° {INSTITUTION.authorization.number.split('/')[0]}...
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
                <ShieldCheck className="w-5 h-5 text-emerald-700" />
                <span>MINESUP Cameroun</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-mono text-[11px]">
                {INSTITUTION.authorization.number}
              </p>
              <p className="text-[11px] text-slate-500 pt-1">
                {language === 'fr'
                  ? 'Établissement privé d\'enseignement supérieur agréé pour la délivrance des diplômes nationaux.'
                  : 'Accredited higher education institution authorized for official degree delivery.'}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
                <Award className="w-5 h-5 text-amber-600" />
                <span>Université de Douala</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {language === 'fr'
                  ? 'Tutelle académique d\'État pour les programmes de Licence et Master Professionnels.'
                  : 'State academic tutelage for professional Bachelor and Master degree curricula.'}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
                <Award className="w-5 h-5 text-amber-600" />
                <span>University of Buea</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {language === 'fr'
                  ? 'Tutelle académique anglophone pour les cycles HND, Bachelor et Master bilingues.'
                  : 'English-speaking state academic supervision for HND, Bachelor, and bilingual Master tracks.'}
              </p>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-800">
              {language === 'fr' ? 'Notre Vision Fondatrice' : 'Our Core Mission'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black font-serif-academic text-slate-900">
              {language === 'fr'
                ? 'Former des Professionnels Opérationnels Dès le Premier Jour'
                : 'Training Job-Ready Professionals from Day One'}
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              {language === 'fr'
                ? 'L\'Institut Universitaire St Bernard (IUSB) est né d\'une conviction forte : l\'enseignement supérieur doit être synonyme d\'acquisition concrète de compétences professionnelles. Trop souvent, les diplômés peinent à s\'insérer faute d\'expérience pratique. À St Bernard, nous inversons ce paradigme en plaçant les travaux dirigés, les laboratoires de simulation et les stages au cœur de chaque semestre.'
                : 'St Bernard University Institute (IUSB) was founded on a strong conviction: higher education must deliver practical, market-aligned competence. Too often, graduates struggle to enter the workforce due to a lack of hands-on experience. At St Bernard, we place laboratory workshops, clinical practice, and direct company internships at the core of every semester.'}
            </p>
            <p className="text-sm text-slate-700 leading-relaxed">
              {language === 'fr'
                ? 'Grâce à nos deux campus stratégiques à Douala (Bonabéri et Mboppi) et nos 3 centres hospitaliers partenaires St Bernard, nos étudiants bénéficient d\'un cadre d\'apprentissage moderne, sécurisé et bienveillant.'
                : 'With two strategically located campuses in Douala (Bonaberi and Mboppi) and 3 partner St Bernard hospitals, our students benefit from a contemporary, secure, and supportive academic setting.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-6 bg-white rounded-3xl border border-slate-200 shadow-sm space-y-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center">
                <Target className="w-5 h-5 text-emerald-700" />
              </div>
              <h3 className="font-bold text-sm text-slate-900">
                {language === 'fr' ? '100% Pratique & Professionnalisant' : '100% Practical & Competency-Based'}
              </h3>
              <p className="text-xs text-slate-600">
                {language === 'fr'
                  ? 'Laboratoires informatiques, imagerie médicale, ateliers de cuisine et fermes pilotes.'
                  : 'IT labs, medical imaging machines, culinary studios, and model agricultural farms.'}
              </p>
            </div>

            <div className="p-6 bg-white rounded-3xl border border-slate-200 shadow-sm space-y-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center">
                <HeartHandshake className="w-5 h-5 text-emerald-700" />
              </div>
              <h3 className="font-bold text-sm text-slate-900">
                {language === 'fr' ? '3 Hôpitaux Partenaires' : '3 Partner Hospitals'}
              </h3>
              <p className="text-xs text-slate-600">
                {language === 'fr'
                  ? 'Immersion clinique et 50% de prise en charge santé pour nos étudiants.'
                  : 'Direct clinical stages and 50% health coverage for enrolled students.'}
              </p>
            </div>

            <div className="p-6 bg-white rounded-3xl border border-slate-200 shadow-sm space-y-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center">
                <Clock className="w-5 h-5 text-emerald-700" />
              </div>
              <h3 className="font-bold text-sm text-slate-900">
                {language === 'fr' ? 'Jour & Soir / Samedi' : 'Day & Evening Shifts'}
              </h3>
              <p className="text-xs text-slate-600">
                {language === 'fr'
                  ? 'Deux régimes horaires conçus pour les bacheliers et les travailleurs.'
                  : 'Flexible schedules designed for fresh graduates and working professionals.'}
              </p>
            </div>

            <div className="p-6 bg-white rounded-3xl border border-slate-200 shadow-sm space-y-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-emerald-700" />
              </div>
              <h3 className="font-bold text-sm text-slate-900">
                {language === 'fr' ? 'Auto-École Offerte' : 'Free Driving Training'}
              </h3>
              <p className="text-xs text-slate-600">
                {language === 'fr'
                  ? 'Permis de conduire catégorie B offert pour favoriser la mobilité professionnelle.'
                  : 'Free driving license course provided to foster graduate employability.'}
              </p>
            </div>
          </div>
        </div>

        {/* 3. Leadership & Promoter Section */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0">
          <div className="lg:col-span-6 p-8 sm:p-10 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 font-bold text-xs">
                <Award className="w-3.5 h-3.5 text-amber-700" />
                <span>{language === 'fr' ? 'Gouvernance & Présidence' : 'Institutional Leadership'}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black font-serif-academic text-slate-900">
                {language === 'fr' ? 'Le Mot du Promoteur de l\'Université' : 'Message from the University Promoter'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {language === 'fr'
                  ? '« Notre mission à l\'Institut Universitaire St Bernard est d\'offrir à chaque jeune camerounais et africain un cadre d\'excellence où la théorie s\'efface devant la maîtrise pratique des outils contemporains : ateliers technologiques, stages cliniques réels et bourses d\'accompagnement. »'
                  : '“Our mission at St Bernard University Institute is to provide every student with an academic environment of excellence where theory is coupled with hands-on mastery: technology suites, clinical hospital immersions, and comprehensive student support.”'}
              </p>
              <div className="pt-2 flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-900 font-black text-xs border border-emerald-200">
                  PROMOTEUR FONDATEUR
                </div>
                <span className="text-xs font-bold text-slate-700">Institut Universitaire St Bernard de Douala</span>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
              <button
                onClick={onOpenApplication}
                className="py-2.5 px-5 rounded-xl bg-emerald-800 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-sm"
              >
                {t.nav.applyNow}
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 bg-slate-100 relative min-h-[340px] border-t lg:border-t-0 lg:border-l border-slate-200">
            <GalleryPromoterFounder className="w-full h-full" />
          </div>
        </div>

        {/* Campuses Spotlight */}
        <div className="bg-emerald-950 text-white rounded-3xl p-8 sm:p-12 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-extrabold uppercase text-amber-400 tracking-wider">
              {language === 'fr' ? 'Nos Deux Sites à Douala' : 'Our Two Locations in Douala'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black font-serif-academic">
              {language === 'fr' ? 'Des Campus Conçus pour la Réussite' : 'Campuses Engineered for Student Success'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
            <div className="rounded-3xl bg-emerald-900/60 border border-emerald-800 overflow-hidden space-y-4">
              <div className="h-44 w-full relative">
                <BonaberiGlassFacadeGraphic className="w-full h-full" />
              </div>
              <div className="p-6 pt-0 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="bg-amber-400 text-emerald-950 font-black px-2.5 py-0.5 rounded-full text-[10px]">
                    CAMPUS A
                  </span>
                  <span className="text-emerald-300 font-semibold">Bonabéri</span>
                </div>
                <h3 className="text-lg font-bold text-white">Campus Bonabéri (Site Principal)</h3>
                <p className="text-emerald-200 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>{language === 'fr' ? 'En face de la boulangerie de la Gare, Douala' : 'Opposite Boulangerie de la Gare, Douala'}</span>
                </p>
                <p className="text-slate-300 leading-relaxed">
                  {language === 'fr'
                    ? 'Laboratoires informatiques haute performance, amphithéâtres climatisés, ateliers biomédicaux et espace vie étudiante.'
                    : 'High-performance computing labs, air-conditioned lecture halls, biomedical workshops, and student recreation areas.'}
                </p>
              </div>
            </div>

            <div className="rounded-3xl bg-emerald-900/60 border border-emerald-800 overflow-hidden space-y-4">
              <div className="h-44 w-full relative">
                <MboppiFacadeGraphic className="w-full h-full" />
              </div>
              <div className="p-6 pt-0 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="bg-amber-400 text-emerald-950 font-black px-2.5 py-0.5 rounded-full text-[10px]">
                    CAMPUS B
                  </span>
                  <span className="text-emerald-300 font-semibold">Mboppi</span>
                </div>
                <h3 className="text-lg font-bold text-white">Campus Mboppi (Pôle Médical & Gestion)</h3>
                <p className="text-emerald-200 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>{language === 'fr' ? 'Derrière l\'agence ECOBANK (entrée Ecobank), Douala' : 'Behind ECOBANK branch, Douala'}</span>
                </p>
                <p className="text-slate-300 leading-relaxed">
                  {language === 'fr'
                    ? 'Situé au cœur de l\'activité économique de Douala, idéal pour les étudiants en commerce, gestion, douane et cours du soir.'
                    : 'Located in the economic heart of Douala, ideal for business, customs, management, and evening classes.'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center space-y-4 pt-4">
          <h3 className="text-xl font-bold text-slate-900 font-serif-academic">
            {language === 'fr'
              ? 'Rejoignez la Communauté St Bernard'
              : 'Join the St Bernard Academic Community'}
          </h3>
          <div className="flex justify-center gap-3">
            <button
              onClick={onOpenApplication}
              className="px-6 py-3 bg-emerald-800 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all"
            >
              {t.nav.applyNow}
            </button>
            <button
              onClick={onOpenOrientation}
              className="px-5 py-3 bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold text-xs sm:text-sm rounded-xl transition-all"
            >
              {t.nav.orientationQuick}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
