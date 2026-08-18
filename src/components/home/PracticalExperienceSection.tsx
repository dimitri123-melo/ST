import React from 'react';
import { useLanguage } from '../../locales/useLanguage';
import {
  HeartPulse,
  Car,
  Laptop,
  GraduationCap,
} from 'lucide-react';

export const PracticalExperienceSection: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section className="relative overflow-hidden border-b border-slate-200">
      {/* Background Image (Immersive) */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/Medical_students_training_around_patient_202608171133.jpeg"
          alt="Practical Student Experience"
          className="w-full h-full object-cover filter brightness-[0.35]"
          loading="lazy" decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/80 to-slate-900/60"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left: Text & Intro */}
          <div className="space-y-6 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-bold text-xs uppercase tracking-wider backdrop-blur-sm border border-emerald-500/30">
              <GraduationCap className="w-4 h-4" />
              <span>{language === 'fr' ? 'Pédagogie Axée sur le Terrain' : 'Field-Oriented Practical Pedagogy'}</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-serif-academic text-white leading-tight">
              {language === 'fr'
                ? 'L\'Expérience Étudiante & Les Avantages Inclus'
                : 'Student Experience & Included University Benefits'}
            </h2>
            
            <p className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed">
              {language === 'fr'
                ? 'À l\'Institut Universitaire St Bernard, l\'apprentissage théorique ne suffit pas. Nous combinons excellence académique et accompagnement concret sur le terrain pour garantir votre intégration professionnelle.'
                : 'At St Bernard University Institute, theoretical learning is not enough. We merge academic rigor with concrete institutional field support to ensure your professional integration.'}
            </p>
          </div>

          {/* Right: Immersive Inclusions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Item 1 */}
            <div className="group bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all text-white flex flex-col">
              <div className="h-32 w-full relative overflow-hidden">
                <img src="/images/Medical_workers_attending_to_patient_202608171133.jpeg" alt="Healthcare Coverage" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100" loading="lazy" decoding="async" />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 to-transparent"></div>
                <div className="absolute bottom-3 left-4 w-10 h-10 rounded-xl bg-emerald-500 text-emerald-950 flex items-center justify-center font-bold shadow-lg">
                  <HeartPulse className="w-5 h-5" />
                </div>
              </div>
              <div className="p-5 space-y-2 flex-1">
                <h3 className="text-lg font-bold mb-1">
                  {language === 'fr' ? 'Couverture Santé' : 'Healthcare Coverage'}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {language === 'fr'
                    ? 'Accès privilégié à 3 hôpitaux partenaires avec réduction de 50% sur les consultations.'
                    : 'Privileged access across 3 partner hospitals with 50% discount on consultations.'}
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="group bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all text-white flex flex-col">
              <div className="h-32 w-full relative overflow-hidden">
                <img src="/images/Woman_sitting_inside_green_car_202608171132.jpeg" alt="Driving School" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100" loading="lazy" decoding="async" />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 to-transparent"></div>
                <div className="absolute bottom-3 left-4 w-10 h-10 rounded-xl bg-amber-500 text-emerald-950 flex items-center justify-center font-bold shadow-lg">
                  <Car className="w-5 h-5" />
                </div>
              </div>
              <div className="p-5 space-y-2 flex-1">
                <h3 className="text-lg font-bold mb-1">
                  {language === 'fr' ? 'Auto-École' : 'Driving School'}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {language === 'fr'
                    ? 'Formation au permis de conduire dispensée par une auto-école agréée partenaire.'
                    : 'Driver license training delivered by an accredited partner driving school.'}
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="group bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all text-white flex flex-col sm:col-span-2 sm:flex-row">
              <div className="h-40 sm:h-auto sm:w-1/3 relative overflow-hidden">
                <img src="/images/Six_women_in_white_uniforms_202608171133.jpeg" alt="Uniforms" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100" loading="lazy" decoding="async" />
                <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-emerald-950/90 to-transparent"></div>
              </div>
              <div className="p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-center">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-200 text-slate-900 flex items-center justify-center font-bold shadow-lg">
                    <Laptop className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold">
                    {language === 'fr' ? 'Tenues & Équipements' : 'Uniforms & Equipment'}
                  </h3>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed max-w-lg">
                  {language === 'fr'
                    ? 'Polos institutionnels et blouses de laboratoire fournies selon la spécialité pour une présentation impeccable dès la première année d\'immersion pratique.'
                    : 'Institutional polo shirts and lab coats provided according to discipline for professional presentation from year one.'}
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
