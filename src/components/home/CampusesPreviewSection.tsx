import React from 'react';
import { useLanguage } from '../../locales/useLanguage';
import { CAMPUSES_DATA } from '../../data/campuses';
import { INSTITUTION } from '../../data/institution';
import { CampusInfo } from '../../types';
import {
  BonaberiGlassFacadeGraphic,
  MboppiFacadeGraphic,
} from '../common/CampusShowcaseVisuals';
import {
  MapPin,
  Building2,
  Clock,
  Phone,
  CheckCircle2,
  Navigation,
  MessageSquare,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';

interface CampusesPreviewSectionProps {
  onSelectCampus?: (campus: CampusInfo) => void;
  onOpenApplication: () => void;
  onNavigateToCampusesPage?: () => void;
}

export const CampusesPreviewSection: React.FC<CampusesPreviewSectionProps> = ({
  onOpenApplication,
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
    // Configurable Google Maps Search URL based on verified landmark
    const query = encodeURIComponent(
      campus.id === 'bonaberi'
        ? 'Boulangerie de la Gare Bonaberi Douala Cameroon'
        : 'Ecobank Mboppi Douala Cameroon'
    );
    window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank');
  };

  return (
    <section id="campuses-section" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-900 font-bold text-xs uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5 text-slate-700" />
            <span>{language === 'fr' ? 'Nos Deux Campus Universitaires à Douala' : 'Our Two University Campuses in Douala'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black font-serif-academic text-slate-900">
            {language === 'fr' ? 'Des Espaces d\'Apprentissage Dédiés à la Pratique' : 'Modern Spaces Dedicated to Practical Learning'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-sans">
            {language === 'fr'
              ? 'Deux campus stratégiquement implantés à Bonabéri et Mboppi pour accueillir les étudiants de jour comme de soir.'
              : 'Two strategically located campuses in Bonaberi and Mboppi accommodating both day and evening shift students.'}
          </p>
        </div>

        {/* Campuses Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {CAMPUSES_DATA.map((campus) => (
            <div
              key={campus.id}
              className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              {/* Real Campus Visual Facade */}
              <div className="relative h-68 sm:h-72 w-full overflow-hidden bg-slate-900">
                {campus.id === 'bonaberi' ? (
                  <BonaberiGlassFacadeGraphic className="w-full h-full" />
                ) : (
                  <MboppiFacadeGraphic className="w-full h-full" />
                )}
              </div>

              {/* Body Details */}
              <div className="p-6 sm:p-7 space-y-5 flex-1 flex flex-col justify-between">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold font-serif-academic text-slate-900">
                      {campus.name[language]}
                    </h3>
                    <p className="text-xs text-amber-700 font-semibold flex items-center gap-1.5 mt-0.5">
                      <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                      <span>{campus.landmark[language]}</span>
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {campus.description[language]}
                  </p>

                  {/* Highlights list */}
                  <div className="space-y-2 pt-1">
                    <span className="text-[11px] font-bold uppercase text-slate-500 tracking-wider block">
                      {t.campuses.featuresLabel}
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {campus.features[language].slice(0, 4).map((feature, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Shifts & Contacts */}
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200 text-xs space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 font-medium flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-slate-600" />
                        {t.campuses.shiftsLabel}
                      </span>
                      <span className="font-semibold text-slate-800">{campus.shifts[language]}</span>
                    </div>

                    <div className="flex items-center justify-between border-t border-slate-100 pt-2">
                      <span className="text-slate-500 font-medium flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5 text-slate-600" />
                        Contact :
                      </span>
                      <span className="font-bold text-slate-900">+237 682 764 947</span>
                    </div>
                  </div>
                </div>

                {/* 3 Explicit Mandated Action Buttons: View Campus, Get Directions, Chat on WhatsApp */}
                <div className="pt-4 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <button
                    onClick={() => {
                      if (onNavigateToCampusesPage) {
                        onNavigateToCampusesPage();
                      } else {
                        window.location.hash = '#campuses-section';
                      }
                    }}
                    className="py-2 px-3 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-all flex items-center justify-center gap-1.5"
                  >
                    <Building2 className="w-3.5 h-3.5 text-slate-600" />
                    <span>{language === 'fr' ? 'Voir le Campus' : 'View Campus'}</span>
                  </button>

                  <button
                    onClick={() => handleGetDirections(campus)}
                    className="py-2 px-3 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-all flex items-center justify-center gap-1.5"
                  >
                    <Navigation className="w-3.5 h-3.5 text-slate-600" />
                    <span>{language === 'fr' ? 'Itinéraire' : 'Get Directions'}</span>
                  </button>

                  <button
                    onClick={() => handleWhatsApp(campus.name[language])}
                    className="py-2 px-3 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-200" />
                    <span>WhatsApp</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

