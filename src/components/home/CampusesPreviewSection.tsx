import React from 'react';
import { useLanguage } from '../../locales/useLanguage';
import { CAMPUSES_DATA } from '../../data/campuses';
import { INSTITUTION } from '../../data/institution';
import { CampusInfo } from '../../types';
import {
  MapPin,
  Building2,
  Clock,
  Phone,
  CheckCircle2,
  Navigation,
  MessageSquare,
} from 'lucide-react';

interface CampusesPreviewSectionProps {
  onSelectCampus?: (campus: CampusInfo) => void;
  onOpenApplication: () => void;
  onNavigateToCampusesPage?: () => void;
}

export const CampusesPreviewSection: React.FC<CampusesPreviewSectionProps> = ({
  onNavigateToCampusesPage,
}) => {
  const { t, language } = useLanguage();

  const handleWhatsApp = (campusName: string) => {
    const text = encodeURIComponent(
      language === 'fr'
        ? `Bonjour, je souhaite des informations et visiter le ${campusName} de l'Institut Universitaire St Bernard.`
        : `Hello, I would like information and to visit the ${campusName} of St Bernard University Institute.`
    );
    window.open(`https://wa.me/${INSTITUTION.contacts.primaryWhatsApp}?text=${text}`, '_blank');
  };

  const handleGetDirections = (campus: CampusInfo) => {
    const query = encodeURIComponent(
      campus.id === 'bonaberi'
        ? 'Boulangerie de la Gare Bonaberi Douala Cameroon'
        : 'Ecobank Mboppi Douala Cameroon'
    );
    window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank');
  };

  const campusImages: Record<string, string> = {
    bonaberi: '/images/St_Bernard_University_building_exterior_202608171132.jpeg',
    mboppi: '/images/campus-building.jpg',
  };

  return (
    <section id="campuses-section" className="py-16 sm:py-24 bg-white border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 text-slate-900 font-bold text-xs uppercase tracking-wider">
            <Building2 className="w-4 h-4 text-slate-700" />
            <span>{language === 'fr' ? 'Nos Deux Campus Universitaires' : 'Our Two University Campuses'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-serif-academic text-slate-900">
            {language === 'fr' ? 'Espaces d\'Apprentissage Dédiés' : 'Dedicated Learning Spaces'}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
            {language === 'fr'
              ? 'Deux campus stratégiquement implantés à Bonabéri et Mboppi pour accueillir les étudiants de jour comme de soir, équipés pour la pratique intensive.'
              : 'Two strategically located campuses in Bonaberi and Mboppi accommodating both day and evening shift students, fully equipped for intensive practical learning.'}
          </p>
        </div>

        {/* Dynamic Alternating Layout (Layout B/A variant) */}
        <div className="space-y-24 lg:space-y-32">
          {CAMPUSES_DATA.map((campus, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <div
                key={campus.id}
                className={`flex flex-col gap-12 lg:gap-16 items-center ${
                  isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'
                }`}
              >
                {/* Image Side */}
                <div className="w-full lg:w-1/2">
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[400px] sm:h-[500px]">
                    <img
                      src={campusImages[campus.id]}
                      alt={campus.name[language]}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-slate-900/10 pointer-events-none"></div>
                    <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/50 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-emerald-700" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-slate-500 uppercase block">{language === 'fr' ? 'Localisation' : 'Location'}</span>
                        <span className="text-sm font-black text-slate-900">{campus.landmark[language]}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Text Side */}
                <div className="w-full lg:w-1/2 space-y-8">
                  <div className="space-y-4">
                    <h3 className="text-3xl sm:text-4xl font-bold font-serif-academic text-slate-900">
                      {campus.name[language]}
                    </h3>
                    <p className="text-base text-slate-600 leading-relaxed">
                      {campus.description[language]}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <span className="text-xs font-bold uppercase text-slate-500 tracking-wider">
                      {t.campuses.featuresLabel}
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {campus.features[language].slice(0, 4).map((feature, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-amber-500" />
                      <span className="text-sm font-bold text-slate-900">{campus.shifts[language]}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-emerald-600" />
                      <span className="text-sm font-bold text-slate-900">+237 682 764 947</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-4">
                    <button
                      onClick={() => handleGetDirections(campus)}
                      className="px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-sm font-bold transition-all flex items-center gap-2 shadow-md"
                    >
                      <Navigation className="w-4 h-4" />
                      <span>{language === 'fr' ? 'Itinéraire' : 'Get Directions'}</span>
                    </button>

                    <button
                      onClick={() => handleWhatsApp(campus.name[language])}
                      className="px-5 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white text-sm font-bold transition-all flex items-center gap-2 shadow-md"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>WhatsApp</span>
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
