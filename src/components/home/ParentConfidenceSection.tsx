import React from 'react';
import { useLanguage } from '../../locales/useLanguage';
import { INSTITUTION } from '../../data/institution';
import {
  ShieldCheck,
  Award,
  HeartPulse,
  CreditCard,
  Briefcase,
  MessageSquare,
  Building,
} from 'lucide-react';

export const ParentConfidenceSection: React.FC = () => {
  const { t, language } = useLanguage();

  const openWhatsAppForParents = () => {
    const text = encodeURIComponent(
      language === 'fr'
        ? `Bonjour, je suis parent / tuteur d'un futur étudiant et je souhaite des informations sur l'encadrement, les filières et les facilités de paiement à l'Institut Universitaire St Bernard.`
        : `Hello, I am a parent / guardian of a prospective student and I would like information regarding student supervision, programmes and tuition installment plans at St Bernard University Institute.`
    );
    window.open(`https://wa.me/${INSTITUTION.contacts.primaryWhatsApp}?text=${text}`, '_blank');
  };

  return (
    <section className="py-16 sm:py-20 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-950 border border-emerald-800 text-emerald-400 font-bold text-xs uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>{language === 'fr' ? 'Garanties Académiques & Encadrement' : 'Institutional Guarantees & Support'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif-academic text-white">
            {language === 'fr' ? 'Pourquoi Choisir l\'Institut Universitaire St Bernard ?' : 'Why Choose St Bernard University Institute?'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 font-sans">
            {language === 'fr'
              ? 'Un cadre universitaire sérieux, accrédité par l\'État du Cameroun, axé sur la maîtrise pratique des métiers.'
              : 'A rigorous academic environment, state-accredited by the Republic of Cameroon, focused on practical professional mastery.'}
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Pillar 1: Diplômes d'État & Tutelle */}
          <div className="p-6 sm:p-7 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">
              {language === 'fr' ? 'Diplômes d\'État & Tutelles Académiques' : 'State Degrees & Academic Tutelage'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              {language === 'fr'
                ? 'Autorisé par le MINESUP (N°21-06408) et placé sous la tutelle académique des universités d\'État (Université de Douala et Université de Buea).'
                : 'Accredited by MINESUP (N°21-06408) under state academic tutelage of University of Douala and University of Buea.'}
            </p>
          </div>

          {/* Pillar 2: 3 Hôpitaux Partenaires */}
          <div className="p-6 sm:p-7 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <HeartPulse className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">
              {language === 'fr' ? '3 Centres Hospitaliers St Bernard Associés' : '3 Partner St Bernard Hospitals'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              {language === 'fr'
                ? 'Stages cliniques immersifs immédiats pour les filières biomédicales et couverture médicale étudiante assurée à 50% de réduction.'
                : 'Immediate immersive clinical training for biomedical students and 50% healthcare reduction across partner hospital centers.'}
            </p>
          </div>

          {/* Pillar 3: Modalités Financières Souples */}
          <div className="p-6 sm:p-7 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center">
              <CreditCard className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">
              {language === 'fr' ? 'Scolarités Échelonnées en Tranches' : 'Flexible Tuition Installments'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              {language === 'fr'
                ? 'Tarifs modérés avec facilités d\'échelonnement en plusieurs tranches tout au long de l\'année académique pour soutenir les familles.'
                : 'Moderate tuition rates with flexible installment schedules throughout the academic year to support families and sponsors.'}
            </p>
          </div>

          {/* Pillar 4: Insertion & Auto-École */}
          <div className="p-6 sm:p-7 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <Briefcase className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">
              {language === 'fr' ? 'Pratique Métier & Auto-École Offerte' : 'Job Readiness & Free Driving School'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              {language === 'fr'
                ? 'Laboratoires informatiques et techniques connectés, cours de conduite gratuits et accompagnement personnalisé vers l\'emploi.'
                : 'Equipped technical and IT laboratories, complimentary driving school lessons, and personalized career mentoring.'}
            </p>
          </div>

        </div>

        {/* Parent Hotline Banner */}
        <div className="mt-10 p-6 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base font-bold text-white">
              {language === 'fr' ? 'Parents & Tuteurs : Échangez avec notre Service des Admissions' : 'Parents & Guardians: Speak with our Admissions Office'}
            </h4>
            <p className="text-xs text-slate-400">
              {language === 'fr'
                ? 'Posez vos questions sur les filières, l\'encadrement des étudiants et les facilités de paiement.'
                : 'Ask questions regarding degree choices, student supervision, and tuition installment plans.'}
            </p>
          </div>

          <button
            onClick={openWhatsAppForParents}
            className="px-5 py-2.5 bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-bold rounded-xl transition-all flex items-center gap-2 shrink-0"
          >
            <MessageSquare className="w-4 h-4 text-emerald-200" />
            <span>{language === 'fr' ? 'Conseiller WhatsApp' : 'Admissions WhatsApp'}</span>
          </button>
        </div>

      </div>
    </section>
  );
};
