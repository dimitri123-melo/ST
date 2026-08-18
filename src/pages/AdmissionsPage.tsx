import React, { useState } from 'react';
import { useLanguage } from '../locales/useLanguage';
import { INSTITUTION } from '../data/institution';
import { PROMOTION_2026_2027, ADMISSION_FEES_DATA } from '../data/admissions';
import {
  GraduationCap,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Download,
  Calendar,
  CreditCard,
  HeartPulse,
  Car,
  Laptop,
  FileText,
  Clock,
  ArrowRight,
  HelpCircle,
  MessageCircle,
  PhoneCall,
  Award,
  ChevronDown,
} from 'lucide-react';

interface AdmissionsPageProps {
  onOpenApplication: (domain?: string, prog?: string) => void;
  onOpenOrientation: () => void;
}

export const AdmissionsPage: React.FC<AdmissionsPageProps> = ({
  onOpenApplication,
  onOpenOrientation,
}) => {
  const { t, language } = useLanguage();

  // Tuition Calculator State
  const [selectedCycle, setSelectedCycle] = useState<'BTS' | 'HND' | 'LICENCE' | 'MASTER'>('BTS');
  const [selectedSector, setSelectedSector] = useState<'biomedical' | 'engineering' | 'business' | 'agriculture' | 'social_sciences' | 'education'>('biomedical');

  // Calculate pricing based on cycle & sector
  const getPricingData = () => {
    let baseTuition = 420000;
    let registration = 50000;
    let medical = 15000;
    let reprography = 15000;

    if (selectedSector === 'biomedical') {
      baseTuition = selectedCycle === 'MASTER' ? 650000 : selectedCycle === 'LICENCE' ? 520000 : 470000;
      medical = 20000;
    } else if (selectedSector === 'engineering') {
      baseTuition = selectedCycle === 'MASTER' ? 580000 : selectedCycle === 'LICENCE' ? 480000 : 430000;
    } else if (selectedSector === 'business') {
      baseTuition = selectedCycle === 'MASTER' ? 520000 : selectedCycle === 'LICENCE' ? 420000 : 380000;
    } else if (selectedSector === 'agriculture') {
      baseTuition = selectedCycle === 'LICENCE' ? 420000 : 370000;
    } else if (selectedSector === 'social_sciences') {
      baseTuition = selectedCycle === 'LICENCE' ? 410000 : 360000;
    } else {
      baseTuition = selectedCycle === 'LICENCE' ? 390000 : 350000;
    }

    const tranche1 = Math.round(baseTuition * 0.5);
    const tranche2 = Math.round(baseTuition * 0.3);
    const tranche3 = baseTuition - tranche1 - tranche2;

    return {
      registration,
      medical,
      reprography,
      baseTuition,
      tranche1,
      tranche2,
      tranche3,
      totalInitial: registration + medical + reprography + tranche1,
    };
  };

  const pricing = getPricingData();

  const openWhatsAppForAdmissions = () => {
    const text = encodeURIComponent(
      language === 'fr'
        ? `Bonjour, je souhaite des précisions sur les modalités d'inscription 2026/2027 et les facilités de paiement (Cycle: ${selectedCycle}, Secteur: ${selectedSector}) à l'Institut Universitaire St Bernard.`
        : `Hello, I would like details regarding 2026/2027 enrollment and payment installments (Cycle: ${selectedCycle}, Sector: ${selectedSector}) at St Bernard University Institute.`
    );
    window.open(`https://wa.me/${INSTITUTION.contacts.primaryWhatsApp}?text=${text}`, '_blank');
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* 1. Header Banner */}
      <section className="bg-gradient-to-r from-emerald-950 via-emerald-900 to-slate-900 text-white py-16 sm:py-20 border-b-4 border-amber-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500 text-emerald-950 text-xs font-black uppercase tracking-wider shadow-lg">
            <Sparkles className="w-4 h-4" />
            <span>{language === 'fr' ? 'Admissions Officielles 2026 / 2027 • Inscriptions Ouvertes' : 'Official Admissions 2026 / 2027 • Open Enrolment'}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-serif-academic text-white">
            {language === 'fr' ? 'Rejoignez l\'Excellence St Bernard' : 'Join Academic Excellence at St Bernard'}
          </h1>
          <p className="text-sm sm:text-base text-slate-200 max-w-2xl mx-auto leading-relaxed">
            {language === 'fr'
              ? 'Dossiers d\'admission, calendrier des rentrées, simulateur de scolarité par tranches et avantages étudiants exclusifs.'
              : 'Application requirements, admission schedules, interactive tuition calculator, and exclusive student scholarship perks.'}
          </p>

          <div className="pt-4 flex flex-wrap justify-center gap-3">
            <button
              onClick={() => onOpenApplication()}
              className="px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-emerald-950 font-black text-xs sm:text-sm rounded-xl shadow-lg transition-all flex items-center gap-2"
            >
              <GraduationCap className="w-4 h-4" />
              <span>{t.nav.applyNow}</span>
            </button>
            <button
              onClick={onOpenOrientation}
              className="px-5 py-3 bg-emerald-800/80 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm rounded-xl border border-emerald-600 transition-all flex items-center gap-2"
            >
              <span>{t.nav.orientationQuick}</span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. Special 2026/2027 Benefits Matrix */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-emerald-900 to-emerald-950 rounded-3xl p-6 sm:p-8 text-white border border-amber-500/40 shadow-xl space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-emerald-800 pb-4">
            <div>
              <span className="text-amber-400 font-extrabold uppercase text-xs tracking-wider block mb-1">
                {language === 'fr' ? 'Avantage Rentrée 2026 / 2027' : '2026 / 2027 Early Advantage'}
              </span>
              <h2 className="text-xl sm:text-2xl font-bold font-serif-academic">
                {language === 'fr'
                  ? 'Le Pack Étudiant Intégral St Bernard'
                  : 'The Comprehensive St Bernard Student Package'}
              </h2>
            </div>
            <div className="flex items-center gap-2 bg-amber-400 text-emerald-950 font-black text-xs px-3.5 py-1.5 rounded-xl self-start md:self-auto">
              <span>{language === 'fr' ? 'Bourse de 60.000 FCFA' : '60,000 FCFA Grant'}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="group relative p-5 rounded-2xl border border-emerald-700/60 overflow-hidden flex flex-col justify-end min-h-[160px]">
              <img src="/images/Woman_sitting_inside_green_car_202608171132.jpeg" alt="Auto Ecole" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-900/80 to-transparent"></div>
              <div className="relative z-10 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-amber-400 text-emerald-950 flex items-center justify-center font-bold shadow-md">
                  <Car className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-sm text-white leading-tight">
                  {language === 'fr' ? 'Auto-École Offerte' : 'Free Driving School'}
                </h3>
                <p className="text-[11px] text-emerald-200/90 leading-relaxed line-clamp-2">
                  {language === 'fr'
                    ? 'Formation au permis de conduire.'
                    : 'Free driving license course.'}
                </p>
              </div>
            </div>

            <div className="group relative p-5 rounded-2xl border border-emerald-700/60 overflow-hidden flex flex-col justify-end min-h-[160px]">
              <img src="/images/Medical_workers_attending_to_patient_202608171133.jpeg" alt="Santé" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-900/80 to-transparent"></div>
              <div className="relative z-10 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-amber-400 text-emerald-950 flex items-center justify-center font-bold shadow-md">
                  <HeartPulse className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-sm text-white leading-tight">
                  {language === 'fr' ? 'Santé à -50%' : '50% Health Coverage'}
                </h3>
                <p className="text-[11px] text-emerald-200/90 leading-relaxed line-clamp-2">
                  {language === 'fr'
                    ? '50% sur les soins dans nos hôpitaux.'
                    : '50% discount in our partner hospitals.'}
                </p>
              </div>
            </div>

            <div className="group relative p-5 rounded-2xl border border-emerald-700/60 overflow-hidden flex flex-col justify-end min-h-[160px]">
              <img src="/images/Students_using_laptops_in_classroom_202608171133.jpeg" alt="Laptop" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-900/80 to-transparent"></div>
              <div className="relative z-10 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-amber-400 text-emerald-950 flex items-center justify-center font-bold shadow-md">
                  <Laptop className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-sm text-white leading-tight">
                  {language === 'fr' ? 'Laptop ou Smartphone' : 'Laptop or Smartphone'}
                </h3>
                <p className="text-[11px] text-emerald-200/90 leading-relaxed line-clamp-2">
                  {language === 'fr'
                    ? 'Équipement numérique offert.'
                    : 'Digital device awarded.'}
                </p>
              </div>
            </div>

            <div className="group relative p-5 rounded-2xl border border-emerald-700/60 overflow-hidden flex flex-col justify-end min-h-[160px]">
              <img src="/images/Six_women_in_white_uniforms_202608171133.jpeg" alt="Uniforms" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500 group-hover:scale-105 object-top" />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-900/80 to-transparent"></div>
              <div className="relative z-10 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-amber-400 text-emerald-950 flex items-center justify-center font-bold shadow-md">
                  <Award className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-sm text-white leading-tight">
                  {language === 'fr' ? '2 Uniformes Fournis' : '2 Tailored Uniforms'}
                </h3>
                <p className="text-[11px] text-emerald-200/90 leading-relaxed line-clamp-2">
                  {language === 'fr'
                    ? 'Tenues officielles académiques.'
                    : 'Official academic uniforms.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Interactive Tuition & Fee Simulator */}
      <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-800">
            {language === 'fr' ? 'Transparence Financière' : 'Tuition Transparency'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-black font-serif-academic text-slate-900">
            {language === 'fr' ? 'Simulateur de Frais & Échéancier de Paiement' : 'Tuition & Payment Installment Calculator'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            {language === 'fr'
              ? 'Choisissez votre cycle et votre filière pour estimer vos droits d\'inscription et les 3 tranches de scolarité.'
              : 'Select your degree level and field of study to estimate registration and installment terms.'}
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-8">
          {/* Cycle selector */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
              1. {language === 'fr' ? 'Choisissez le cycle d\'études :' : 'Select degree level:'}
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { id: 'BTS', label: 'BTS (Bac+2)' },
                { id: 'HND', label: 'HND (Anglophone Bac+2)' },
                { id: 'LICENCE', label: 'Licence / Bachelor (Bac+3)' },
                { id: 'MASTER', label: 'Master Pro (Bac+5)' },
              ].map((c) => (
                <button
                  key={c.id}
                  onClick={() => setSelectedCycle(c.id as any)}
                  className={`py-3 px-4 rounded-2xl text-xs font-bold transition-all text-center border ${
                    selectedCycle === c.id
                      ? 'bg-emerald-800 text-white border-emerald-800 shadow-md ring-2 ring-emerald-700/30'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>

          {/* Sector selector */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
              2. {language === 'fr' ? 'Choisissez le domaine d\'études :' : 'Select discipline:'}
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
              {[
                { id: 'biomedical', name: language === 'fr' ? 'Santé & TIM' : 'Health & TIM' },
                { id: 'engineering', name: language === 'fr' ? 'Génie Logiciel / IA' : 'Software / AI' },
                { id: 'business', name: language === 'fr' ? 'Douane & Commerce' : 'Customs & Business' },
                { id: 'agriculture', name: language === 'fr' ? 'Agriculture / Pêche' : 'Agriculture & Fishery' },
                { id: 'social_sciences', name: language === 'fr' ? 'Cuisine & Mode' : 'Culinary & Fashion' },
                { id: 'education', name: language === 'fr' ? 'Éducation & Droit' : 'Education & Law' },
              ].map((s) => (
                <button
                  key={s.id}
                  onClick={() => setSelectedSector(s.id as any)}
                  className={`py-2.5 px-3 rounded-xl text-xs font-semibold transition-all text-center border truncate ${
                    selectedSector === s.id
                      ? 'bg-amber-500 text-emerald-950 font-bold border-amber-500 shadow-sm'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {s.name}
                </button>
              ))}
            </div>
          </div>

          {/* Calculated Output Breakdown */}
          <div className="pt-4 border-t border-slate-100 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left: Administrative & Enrolment Fees */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                <FileText className="w-4 h-4 text-emerald-700" />
                <span>{language === 'fr' ? 'Droits d\'Inscription & Frais Annexes' : 'Enrolment & Administrative Fees'}</span>
              </h3>

              <div className="space-y-2 text-xs">
                <div className="flex justify-between py-2 border-b border-slate-200">
                  <span className="text-slate-600">{language === 'fr' ? 'Frais d\'inscription administrative' : 'Administrative registration'}</span>
                  <span className="font-bold text-slate-900">{pricing.registration.toLocaleString()} FCFA</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-200">
                  <span className="text-slate-600">{language === 'fr' ? 'Visite médicale & assurance St Bernard' : 'Medical exam & St Bernard insurance'}</span>
                  <span className="font-bold text-slate-900">{pricing.medical.toLocaleString()} FCFA</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-200">
                  <span className="text-slate-600">{language === 'fr' ? 'Frais de reprographie & plateformes' : 'Reprography & portal access'}</span>
                  <span className="font-bold text-slate-900">{pricing.reprography.toLocaleString()} FCFA</span>
                </div>
                <div className="flex justify-between py-2 pt-3 font-extrabold text-sm text-emerald-950">
                  <span>{language === 'fr' ? 'Total Inscription + Annexes' : 'Total Registration & Misc.'}</span>
                  <span className="text-emerald-800">
                    {(pricing.registration + pricing.medical + pricing.reprography).toLocaleString()} FCFA
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Tuition Installment Plan (3 Tranches) */}
            <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-emerald-950 uppercase tracking-wider flex items-center gap-2">
                  <CreditCard className="w-4 h-4 text-emerald-800" />
                  <span>{language === 'fr' ? 'Scolarité Annuelle Échelonnée (3 Tranches)' : 'Annual Tuition in 3 Installments'}</span>
                </h3>
                <span className="text-xs font-black text-emerald-900 bg-emerald-200/80 px-2.5 py-0.5 rounded-full">
                  {pricing.baseTuition.toLocaleString()} FCFA
                </span>
              </div>

              <div className="space-y-3 text-xs">
                <div className="p-3 bg-white rounded-xl border border-emerald-100 flex justify-between items-center">
                  <div>
                    <span className="font-bold text-slate-900 block">{language === 'fr' ? '1ère Tranche (À la rentrée - Octobre)' : '1st Installment (At start - October)'}</span>
                    <span className="text-[11px] text-slate-500">{language === 'fr' ? '50% de la scolarité' : '50% of tuition'}</span>
                  </div>
                  <span className="font-bold text-sm text-emerald-900">{pricing.tranche1.toLocaleString()} FCFA</span>
                </div>

                <div className="p-3 bg-white rounded-xl border border-emerald-100 flex justify-between items-center">
                  <div>
                    <span className="font-bold text-slate-900 block">{language === 'fr' ? '2ème Tranche (Mi-Janvier)' : '2nd Installment (Mid-January)'}</span>
                    <span className="text-[11px] text-slate-500">{language === 'fr' ? '30% de la scolarité' : '30% of tuition'}</span>
                  </div>
                  <span className="font-bold text-sm text-emerald-900">{pricing.tranche2.toLocaleString()} FCFA</span>
                </div>

                <div className="p-3 bg-white rounded-xl border border-emerald-100 flex justify-between items-center">
                  <div>
                    <span className="font-bold text-slate-900 block">{language === 'fr' ? '3ème Tranche (Fin Mars)' : '3rd Installment (End of March)'}</span>
                    <span className="text-[11px] text-slate-500">{language === 'fr' ? 'Solde restant (20%)' : 'Remaining balance (20%)'}</span>
                  </div>
                  <span className="font-bold text-sm text-emerald-900">{pricing.tranche3.toLocaleString()} FCFA</span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="p-4 bg-slate-50 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-600 text-center sm:text-left">
              <span className="font-bold text-slate-800 block flex items-center gap-1.5 justify-center sm:justify-start">
                <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span>{language === 'fr' ? 'Besoin d\'un aménagement personnalisé pour le paiement ?' : 'Need a customized payment arrangement?'}</span>
              </span>
              <span>
                {language === 'fr'
                  ? 'Nos services financiers reçoivent les parents pour adapter l\'échéancier en toute flexibilité.'
                  : 'Our financial office is available to tailor installment plans for parents and guardians.'}
              </span>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={openWhatsAppForAdmissions}
                className="px-4 py-2.5 bg-emerald-800 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl flex items-center gap-1.5 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{language === 'fr' ? 'Demander un accord financier' : 'Request Payment Plan'}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Required Documentation Dossier */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-800">
            {language === 'fr' ? 'Constitution du Dossier' : 'Application Requirements'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-black font-serif-academic text-slate-900">
            {language === 'fr' ? 'Pièces à Fournir pour l\'Inscription' : 'Required Application Documents'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* BTS / HND Requirements */}
          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="font-bold text-base text-slate-900">
                {language === 'fr' ? 'Dossier 1ère Année (BTS / HND)' : '1st Year Enrolment (BTS / HND)'}
              </h3>
              <span className="text-xs font-extrabold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full">
                Bac / GCE A-Level
              </span>
            </div>

            <ul className="space-y-2.5 text-xs text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{language === 'fr' ? '1 fiche d\'inscription dûment remplie (en ligne ou sur campus)' : '1 completed application form (online or on campus)'}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{language === 'fr' ? '1 copie certifiée conforme de l\'acte de naissance' : '1 certified copy of birth certificate'}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{language === 'fr' ? '1 copie certifiée du Baccalauréat / GCE A-Level ou relevé de notes' : '1 certified copy of Baccalaureate / GCE A-Level or transcript'}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{language === 'fr' ? '4 photos d\'identité 4x4 récentes en couleur' : '4 recent passport-size color photos'}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{language === 'fr' ? '1 certificat médical d\'aptitude physique (délivré sur campus)' : '1 medical fitness certificate (issued on campus)'}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{language === 'fr' ? '1 enveloppe A4 timbrée à l\'adresse des parents' : '1 stamped A4 envelope addressed to parents/guardian'}</span>
              </li>
            </ul>
          </div>

          {/* Licence / Master Requirements */}
          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="font-bold text-base text-slate-900">
                {language === 'fr' ? 'Dossier Licence Pro / Master Pro' : 'Bachelor / Master Pro Requirements'}
              </h3>
              <span className="text-xs font-extrabold text-amber-900 bg-amber-100 px-2.5 py-1 rounded-full">
                Bac+2 / Bac+3
              </span>
            </div>

            <ul className="space-y-2.5 text-xs text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>{language === 'fr' ? '1 fiche d\'inscription Licence / Master remplie' : '1 completed Bachelor / Master registration form'}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>{language === 'fr' ? '1 copie certifiée du BTS / HND / DEUG ou Licence précédente' : '1 certified copy of BTS / HND or previous Bachelor diploma'}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>{language === 'fr' ? 'Relevés de notes des années universitaires antérieures' : 'Official transcripts from prior academic university years'}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>{language === 'fr' ? 'Curriculum Vitae (CV) actualisé et lettre de motivation' : 'Updated Curriculum Vitae (CV) and motivation letter'}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>{language === 'fr' ? '4 photos d\'identité 4x4 et copie certifiée d\'acte de naissance' : '4 passport photos and certified birth certificate'}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 5. Direct Apply CTA Footer */}
      <section className="py-12 bg-gradient-to-r from-emerald-900 to-slate-950 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-black font-serif-academic">
            {language === 'fr' ? 'Prêt à Déposer Votre Candidature ?' : 'Ready to Submit Your Application?'}
          </h2>
          <p className="text-xs sm:text-sm text-emerald-200 max-w-xl mx-auto">
            {language === 'fr'
              ? 'Remplissez le formulaire en ligne en 3 minutes ou rendez-vous directement aux secrétariats de nos campus de Bonabéri et Mboppi.'
              : 'Complete your online pre-registration in 3 minutes or visit our Bonaberi and Mboppi campus admission desks.'}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => onOpenApplication()}
              className="px-8 py-3.5 bg-amber-500 hover:bg-amber-400 text-emerald-950 font-black text-sm rounded-2xl shadow-xl transition-all flex items-center gap-2"
            >
              <GraduationCap className="w-5 h-5" />
              <span>{t.nav.applyNow}</span>
            </button>
            <button
              onClick={openWhatsAppForAdmissions}
              className="px-6 py-3.5 bg-emerald-800 hover:bg-emerald-700 text-white font-bold text-sm rounded-2xl border border-emerald-600 transition-all flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5 text-emerald-300" />
              <span>{t.nav.chatWhatsApp}</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
