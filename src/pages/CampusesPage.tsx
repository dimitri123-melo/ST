import React, { useState } from 'react';
import { useLanguage } from '../locales/useLanguage';
import { CAMPUSES_DATA } from '../data/campuses';
import { INSTITUTION } from '../data/institution';
import { CampusInfo } from '../types';
import {
  BonaberiGlassFacadeGraphic,
  MboppiFacadeGraphic,
  OfficialCampusPosterCollage,
} from '../components/common/CampusShowcaseVisuals';
import { UniversityLogo, OfficialSeal, BrandCrest } from '../components/common/Logo';
import {
  MapPin,
  Building2,
  Clock,
  Phone,
  MessageCircle,
  CheckCircle2,
  Navigation,
  Sparkles,
  ShieldCheck,
  GraduationCap,
  Car,
  Compass,
  Layers,
  Eye,
  Camera,
} from 'lucide-react';

interface CampusesPageProps {
  onOpenApplication: (domain?: string, prog?: string) => void;
}

export const CampusesPage: React.FC<CampusesPageProps> = ({ onOpenApplication }) => {
  const { t, language } = useLanguage();
  const [selectedCampusId, setSelectedCampusId] = useState<'bonaberi' | 'mboppi'>('bonaberi');

  const selectedCampus = CAMPUSES_DATA.find((c) => c.id === selectedCampusId) || CAMPUSES_DATA[0];

  const handleWhatsApp = (campusName: string) => {
    const text = encodeURIComponent(
      language === 'fr'
        ? `Bonjour, je souhaite obtenir des renseignements pour me rendre au ${campusName} de l'Institut Universitaire St Bernard.`
        : `Hello, I would like directions and info regarding the ${campusName} of St Bernard University Institute.`
    );
    window.open(`https://wa.me/${INSTITUTION.contacts.primaryWhatsApp}?text=${text}`, '_blank');
  };

  const handleCall = (phone: string) => {
    window.location.href = `tel:${phone.replace(/[^0-9+]/g, '')}`;
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* 1. Header Banner */}
      <section className="bg-gradient-to-r from-emerald-950 via-emerald-900 to-slate-900 text-white py-14 sm:py-18 border-b-4 border-amber-500 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
          <OfficialSeal className="w-80 h-80" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-800/80 border border-emerald-600/80 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <Building2 className="w-4 h-4" />
            <span>{language === 'fr' ? 'Nos Deux Sites à Douala' : 'Our Two Campuses in Douala'}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-serif-academic text-white">
            {language === 'fr' ? 'Campus Bonabéri & Campus Mboppi' : 'Bonaberi & Mboppi Campuses'}
          </h1>
          <p className="text-sm sm:text-base text-slate-200 max-w-2xl mx-auto leading-relaxed">
            {language === 'fr'
              ? 'Des infrastructures réelles modernes, des ateliers technologiques, laboratoires biomédicaux et 3 hôpitaux partenaires à Douala.'
              : 'Modern academic complexes, technology labs, biomedical suites, and 3 partner hospitals strategically located in Douala.'}
          </p>
        </div>
      </section>

      {/* 2. Interactive Campus Switcher */}
      <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Toggle Pills */}
        <div className="flex justify-center">
          <div className="bg-white p-1.5 rounded-2xl border border-slate-200 shadow-md flex items-center gap-2 max-w-lg w-full">
            <button
              id="campus-tab-bonaberi"
              onClick={() => setSelectedCampusId('bonaberi')}
              className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 ${
                selectedCampusId === 'bonaberi'
                  ? 'bg-emerald-900 text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Building2 className="w-4 h-4 text-amber-400" />
              <span>Campus A (Bonabéri)</span>
            </button>
            <button
              id="campus-tab-mboppi"
              onClick={() => setSelectedCampusId('mboppi')}
              className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 ${
                selectedCampusId === 'mboppi'
                  ? 'bg-emerald-900 text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Building2 className="w-4 h-4 text-amber-400" />
              <span>Campus B (Mboppi)</span>
            </button>
          </div>
        </div>

        {/* Selected Campus Showcase */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0">
          {/* Left Column: Image & Highlights (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-between p-6 sm:p-8 space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-amber-400 text-emerald-950 font-black text-[10px] uppercase px-3 py-1 rounded-full">
                  {selectedCampus.id === 'bonaberi' ? 'Site Principal (Campus A)' : 'Site Économique & Médical (Campus B)'}
                </span>
                <span className="text-xs font-bold text-emerald-800">
                  Douala, Cameroun
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black font-serif-academic text-slate-900">
                {selectedCampus.name[language]}
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {selectedCampus.description[language]}
              </p>

              {/* Exact Landmark Callout */}
              <div className="p-4 rounded-2xl bg-amber-50 border-2 border-amber-300 text-amber-950 text-xs space-y-1.5 shadow-sm">
                <div className="flex items-center gap-2 font-bold text-amber-900">
                  <MapPin className="w-4 h-4 text-amber-700 shrink-0" />
                  <span className="uppercase tracking-wider text-[11px]">
                    {language === 'fr' ? 'Repère officiel & Localisation :' : 'Official Landmark & Location:'}
                  </span>
                </div>
                <p className="font-extrabold text-sm pl-6 text-slate-900">
                  {selectedCampus.landmark[language]}
                </p>
                <p className="text-[11px] text-slate-600 pl-6">
                  {selectedCampus.fullAddress[language]}
                </p>
              </div>

              {/* Amenities Grid */}
              <div className="space-y-2 pt-2">
                <span className="text-[11px] font-extrabold uppercase text-slate-400 tracking-wider block">
                  {language === 'fr' ? 'Infrastructures & Équipements Clés :' : 'Key Campus Infrastructure & Amenities:'}
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedCampus.features[language].map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span className="font-medium">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={() => handleWhatsApp(selectedCampus.name[language])}
                className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-950 border border-emerald-200 text-xs font-bold transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-emerald-700" />
                <span>{language === 'fr' ? 'WhatsApp Campus' : 'WhatsApp Campus'}</span>
              </button>

              <button
                onClick={() => onOpenApplication()}
                className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-emerald-800 hover:bg-emerald-700 text-white text-xs font-bold shadow-md transition-all flex items-center justify-center gap-2"
              >
                <GraduationCap className="w-4 h-4 text-amber-300" />
                <span>{language === 'fr' ? 'Postuler sur ce Site' : 'Apply on this Campus'}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Real Architectural Visual Showcase (6 cols) */}
          <div className="lg:col-span-6 bg-slate-950 flex flex-col justify-between relative overflow-hidden border-t lg:border-t-0 lg:border-l border-slate-200">
            {/* Visual Canvas */}
            <div className="h-80 sm:h-96 lg:h-full w-full min-h-[380px] relative">
              {selectedCampus.id === 'bonaberi' ? (
                <BonaberiGlassFacadeGraphic className="w-full h-full" />
              ) : (
                <MboppiFacadeGraphic className="w-full h-full" />
              )}

              {/* Operating Shifts Overlay */}
              <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-slate-950/90 backdrop-blur-md border border-slate-800 text-white space-y-1.5 shadow-2xl">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-amber-400 font-bold flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {language === 'fr' ? 'Horaires & Régimes :' : 'Operating Shifts:'}
                  </span>
                  <span className="font-extrabold text-[10px] bg-emerald-800 text-emerald-100 px-2 py-0.5 rounded-md border border-emerald-600">
                    Jour & Soir
                  </span>
                </div>
                <p className="text-[11px] text-slate-300">
                  {selectedCampus.shifts[language]}
                </p>
                <div className="pt-1.5 border-t border-slate-800 flex items-center justify-between text-[11px]">
                  <span className="text-slate-400">Secrétariat Direct :</span>
                  <button
                    onClick={() => handleCall(selectedCampus.phone)}
                    className="text-amber-400 font-bold hover:underline flex items-center gap-1"
                  >
                    <Phone className="w-3 h-3" />
                    <span>{selectedCampus.phone}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Official 4-Quadrant Visual Collage Section */}
        <div className="space-y-4 pt-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 font-bold text-xs">
              <Camera className="w-3.5 h-3.5 text-emerald-700" />
              <span>{language === 'fr' ? 'Affiche Institutionnelle & Panoramique' : 'Official Institutional Showcase'}</span>
            </div>
            <h3 className="text-2xl font-black font-serif-academic text-slate-900">
              {language === 'fr' ? 'Les Campus St Bernard en Vue Complète' : 'St Bernard Campuses in Full View'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              {language === 'fr'
                ? 'Emblème officiel, façade verrière Bonabéri, pôle Mboppi derrière Ecobank et galeries intérieures.'
                : 'Official crest, Bonaberi glass facade, Mboppi center behind Ecobank, and interior academic walkways.'}
            </p>
          </div>

          <OfficialCampusPosterCollage className="max-w-5xl mx-auto" />
        </div>

        {/* 4. Comparative Mini Cards */}
        <div className="space-y-4 pt-6">
          <div className="text-center">
            <h3 className="text-xl font-bold font-serif-academic text-slate-900">
              {language === 'fr' ? 'Vue Comparative des Deux Campus' : 'Comparative Overview of Both Campuses'}
            </h3>
            <p className="text-xs text-slate-500">
              {language === 'fr'
                ? 'Choisissez le site le plus accessible selon votre lieu de résidence à Douala'
                : 'Choose the most accessible campus location in Douala'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Bonaberi Mini Card */}
            <div
              onClick={() => {
                setSelectedCampusId('bonaberi');
                window.scrollTo({ top: 300, behavior: 'smooth' });
              }}
              className={`cursor-pointer rounded-3xl border overflow-hidden transition-all shadow-sm hover:shadow-lg ${
                selectedCampusId === 'bonaberi' ? 'border-emerald-600 ring-2 ring-emerald-600/30' : 'border-slate-200 bg-white'
              }`}
            >
              <div className="h-52 w-full relative">
                <BonaberiGlassFacadeGraphic className="w-full h-full" />
              </div>
              <div className="p-5 space-y-2 bg-white">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-900">
                    Campus A
                  </span>
                  <span className="text-xs font-bold text-amber-600">Bonabéri, Douala</span>
                </div>
                <h4 className="font-bold text-slate-900 text-base">Campus Bonabéri (Site Principal)</h4>
                <p className="text-xs text-slate-600 font-medium flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  En face de la boulangerie de la Gare
                </p>
              </div>
            </div>

            {/* Mboppi Mini Card */}
            <div
              onClick={() => {
                setSelectedCampusId('mboppi');
                window.scrollTo({ top: 300, behavior: 'smooth' });
              }}
              className={`cursor-pointer rounded-3xl border overflow-hidden transition-all shadow-sm hover:shadow-lg ${
                selectedCampusId === 'mboppi' ? 'border-emerald-600 ring-2 ring-emerald-600/30' : 'border-slate-200 bg-white'
              }`}
            >
              <div className="h-52 w-full relative">
                <MboppiFacadeGraphic className="w-full h-full" />
              </div>
              <div className="p-5 space-y-2 bg-white">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-900">
                    Campus B
                  </span>
                  <span className="text-xs font-bold text-amber-600">Mboppi, Douala</span>
                </div>
                <h4 className="font-bold text-slate-900 text-base">Campus Mboppi (Pôle Médical & Gestion)</h4>
                <p className="text-xs text-slate-600 font-medium flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  Derrière ECOBANK (entrée Ecobank)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
