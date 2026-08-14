import React from 'react';
import { useLanguage } from '../locales/useLanguage';
import { INSTITUTION } from '../data/institution';
import {
  HeartPulse,
  Car,
  Laptop,
  Award,
  Users,
  ShieldCheck,
  GraduationCap,
  Sparkles,
  BookOpen,
  Calendar,
  Clock,
  CheckCircle2,
  Building,
  Camera,
} from 'lucide-react';
import {
  GalleryDelegationParade,
  GalleryStudentUniform,
  GalleryNursingParade,
  GalleryExamClassroom,
  GalleryLaptopDistribution,
} from '../components/common/RealCampusGalleryVisuals';

interface StudentLifePageProps {
  onOpenApplication: () => void;
  onOpenOrientation: () => void;
}

export const StudentLifePage: React.FC<StudentLifePageProps> = ({
  onOpenApplication,
  onOpenOrientation,
}) => {
  const { t, language } = useLanguage();

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* 1. Header Banner */}
      <section className="bg-gradient-to-r from-emerald-950 via-emerald-900 to-slate-900 text-white py-16 sm:py-20 border-b-4 border-amber-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-800/80 border border-emerald-600/80 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <Users className="w-4 h-4" />
            <span>{language === 'fr' ? 'Expérience & Épanouissement' : 'Student Life & Experience'}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-serif-academic text-white">
            {language === 'fr' ? 'La Vie Étudiante à St Bernard' : 'Campus Life at St Bernard'}
          </h1>
          <p className="text-sm sm:text-base text-slate-200 max-w-2xl mx-auto leading-relaxed">
            {language === 'fr'
              ? 'Un cadre propice aux études, des clubs dynamiques, des stages cliniques et des avantages exclusifs pour préparer votre insertion professionnelle.'
              : 'A thriving academic community with vibrant student societies, clinical internships, and exclusive perks to prepare your career success.'}
          </p>
        </div>
      </section>

      {/* 2. Flagship Perks Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-extrabold text-emerald-800 uppercase tracking-wider">
            {language === 'fr' ? 'Avantages Uniques au Cameroun' : 'Unique Student Advantages'}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black font-serif-academic text-slate-900">
            {language === 'fr' ? 'Ce Que Vous Recevez en Rejoignant St Bernard' : 'The St Bernard Student Advantage'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            {language === 'fr'
              ? 'L\'Institut Universitaire St Bernard ne forme pas seulement des diplômés, nous accompagnons votre bien-être et votre mobilité.'
              : 'St Bernard University Institute supports your holistic development, mobility, and well-being.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Advantage 1: Auto-école */}
          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4 hover:border-emerald-500 transition-all">
            <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-900 flex items-center justify-center font-bold text-2xl">
              <Car className="w-7 h-7 text-amber-700" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 font-display">
              {t.studentLife.drivingCardTitle}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {t.studentLife.drivingCardDesc}
            </p>
            <div className="pt-2 text-xs font-semibold text-emerald-800 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>{language === 'fr' ? 'Permis de conduire catégorie B' : 'Category B Driving License Included'}</span>
            </div>
          </div>

          {/* Advantage 2: Santé 50% */}
          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4 hover:border-emerald-500 transition-all">
            <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-900 flex items-center justify-center font-bold text-2xl">
              <HeartPulse className="w-7 h-7 text-emerald-700" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 font-display">
              {t.studentLife.healthCardTitle}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {t.studentLife.healthCardDesc}
            </p>
            <div className="pt-2 text-xs font-semibold text-emerald-800 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>{language === 'fr' ? 'Valable dans les 3 hôpitaux partenaires St Bernard' : 'Valid across 3 partner St Bernard hospitals'}</span>
            </div>
          </div>

          {/* Advantage 3: Uniformes */}
          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4 hover:border-emerald-500 transition-all">
            <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-900 flex items-center justify-center font-bold text-2xl">
              <Laptop className="w-7 h-7 text-amber-700" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 font-display">
              {t.studentLife.uniformsCardTitle}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {t.studentLife.uniformsCardDesc}
            </p>
            <div className="pt-2 text-xs font-semibold text-emerald-800 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>{language === 'fr' ? 'Tenues académiques de haute confection' : 'Two high-quality custom tailored uniforms'}</span>
            </div>
          </div>

          {/* Advantage 4: Stages & Insertion */}
          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4 hover:border-emerald-500 transition-all">
            <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-900 flex items-center justify-center font-bold text-2xl">
              <Award className="w-7 h-7 text-emerald-700" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 font-display">
              {t.studentLife.activitiesTitle}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {t.studentLife.activitiesDesc}
            </p>
            <div className="pt-2 text-xs font-semibold text-emerald-800 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>{language === 'fr' ? 'Conventions entreprises & centres de santé' : 'Company & health centre internship placement'}</span>
            </div>
          </div>
        </div>

        {/* Authentic Uniforms & Campus Events Visual Showcase */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-100 pb-4">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold">
                <Camera className="w-3 h-3" />
                <span>{language === 'fr' ? 'Photothèque Réelle des Étudiants' : 'Authentic Student Gallery'}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-serif-academic text-slate-900">
                {language === 'fr' ? 'Nos Tenues Officielles & Défilés Académiques à Douala' : 'Official Attire & Academic Parades in Douala'}
              </h3>
            </div>
            <span className="text-xs font-semibold text-emerald-800">
              {language === 'fr' ? '2 Tenues Offertes à chaque Inscription' : '2 Free Uniforms with Every Enrollment'}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Visual 1: Parades & Blazers */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 flex flex-col justify-between">
              <div className="h-48 w-full bg-slate-900">
                <GalleryDelegationParade className="w-full h-full" />
              </div>
              <div className="p-4 space-y-1 bg-white">
                <h4 className="font-bold text-xs text-slate-900">
                  {language === 'fr' ? 'Costume Officiel Bleu Marine & Cravate Verte' : 'Official Navy Blazer & Emerald Green Tie'}
                </h4>
                <p className="text-[11px] text-slate-500">
                  {language === 'fr' ? 'Porté pour les cérémonies, le défilé du 11 Février et les soutenances.' : 'Worn for official events, Youth Day parades, and thesis defenses.'}
                </p>
              </div>
            </div>

            {/* Visual 2: Nursing Scrubs */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 flex flex-col justify-between">
              <div className="h-48 w-full bg-slate-900">
                <GalleryNursingParade className="w-full h-full" />
              </div>
              <div className="p-4 space-y-1 bg-white">
                <h4 className="font-bold text-xs text-slate-900">
                  {language === 'fr' ? 'Blouse Médicale Blanche & Col V Vert' : 'White Medical Scrub with Green V-Neck'}
                </h4>
                <p className="text-[11px] text-slate-500">
                  {language === 'fr' ? 'Tenue clinique pour nos étudiants en soins infirmiers et laboratoires.' : 'Clinical scrub for nursing and biomedical laboratory students.'}
                </p>
              </div>
            </div>

            {/* Visual 3: IT Laptops */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 flex flex-col justify-between">
              <div className="h-48 w-full bg-slate-900">
                <GalleryLaptopDistribution className="w-full h-full" />
              </div>
              <div className="p-4 space-y-1 bg-white">
                <h4 className="font-bold text-xs text-slate-900">
                  {language === 'fr' ? 'Dotation Ordinateurs Portables Dell' : 'Dell Study Laptop Distribution'}
                </h4>
                <p className="text-[11px] text-slate-500">
                  {language === 'fr' ? 'Remise des PC pour les formations en génie logiciel et management.' : 'PC package for practical software engineering and business management.'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Student Clubs & Communities */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <h3 className="text-xl font-bold font-serif-academic text-slate-900">
              {language === 'fr' ? 'Clubs & Vie Associative sur Campus' : 'Student Clubs & Societies'}
            </h3>
            <p className="text-xs text-slate-500">
              {language === 'fr'
                ? 'Développez vos compétences en leadership, travail d\'équipe et innovation.'
                : 'Develop leadership, teamwork, and innovation through student societies.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="text-2xl">💻</span>
              <h4 className="font-bold text-slate-900">
                {language === 'fr' ? 'Club Informatique & IA' : 'Tech & AI Club'}
              </h4>
              <p className="text-slate-600 text-[11px]">
                Hackathons, coding challenges, initiation à l'intelligence artificielle et projets logiciels.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="text-2xl">🩺</span>
              <h4 className="font-bold text-slate-900">
                {language === 'fr' ? 'Secourisme & Santé' : 'First Aid & Health Society'}
              </h4>
              <p className="text-slate-600 text-[11px]">
                Campagnes de sensibilisation, caravanes de santé gratuites et gestes de premiers secours.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="text-2xl">⚽</span>
              <h4 className="font-bold text-slate-900">
                {language === 'fr' ? 'Sports & Football' : 'Sports & Athletics'}
              </h4>
              <p className="text-slate-600 text-[11px]">
                Tournois inter-filières, football, handball et journées d'intégration sportive.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="text-2xl">🎭</span>
              <h4 className="font-bold text-slate-900">
                {language === 'fr' ? 'Culture & Débat' : 'Culture & Public Speaking'}
              </h4>
              <p className="text-slate-600 text-[11px]">
                Art oratoire, défilés de mode, gastronomie camerounaise et soirées culturelles.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center space-y-4 pt-4">
          <button
            onClick={onOpenApplication}
            className="px-8 py-3.5 bg-emerald-800 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-lg transition-all"
          >
            {t.nav.applyNow}
          </button>
        </div>
      </section>
    </div>
  );
};
