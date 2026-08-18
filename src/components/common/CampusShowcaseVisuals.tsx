import React from 'react';
import { MapPin, Building, ShieldCheck, CheckCircle2, Navigation, Clock, Phone, Sparkles } from 'lucide-react';
import { INSTITUTION } from '../../data/institution';

/**
 * 1. Bonabéri Main Campus Card
 * Located opposite Boulangerie de la Gare, Douala.
 */
export const BonaberiGlassFacadeGraphic: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => {
  return (
    <div className={`relative overflow-hidden group ${className} bg-gradient-to-br from-emerald-950 via-slate-900 to-slate-950 p-6 flex flex-col justify-between select-none shadow-sm border border-emerald-900/50`}>
      {/* Background Architectural Vector Motif */}
      <div className="absolute inset-0 bg-[radial-gradient(#059669_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" />
      
      {/* Top Header */}
      <div className="relative z-10 flex items-start justify-between gap-3">
        <div className="bg-emerald-900/80 border border-amber-400/40 text-white px-3.5 py-2 rounded-xl shadow-lg flex items-center gap-2.5">
          <Building className="w-4 h-4 text-amber-400 shrink-0" />
          <div>
            <span className="text-xs font-bold block leading-tight">Campus Bonabéri (Campus A)</span>
            <span className="text-[10px] text-emerald-300">Face Boulangerie de la Gare • Douala</span>
          </div>
        </div>
        <span className="bg-amber-400/20 text-amber-300 text-[10px] font-extrabold px-2.5 py-1 rounded-full border border-amber-400/30 uppercase tracking-wider">
          Campus Principal
        </span>
      </div>

      {/* Center Information */}
      <div className="relative z-10 my-4 p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-2">
        <div className="flex items-center gap-2 text-xs text-slate-200">
          <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
          <span className="font-semibold">Axe Principal Bonabéri, Face Boulangerie de la Gare</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-slate-300">
          <Clock className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
          <span>Cours du Jour (08h00 - 15h30) & Cours du Soir (17h30 - 21h00)</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-slate-300">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
          <span>Laboratoires Informatiques, Ateliers Génie Civil, Amphi & Administration</span>
        </div>
      </div>

      {/* Footer Info */}
      <div className="relative z-10 text-white flex items-center justify-between text-xs pt-2 border-t border-slate-800/80">
        <div className="flex items-center gap-1.5 text-emerald-300 font-semibold text-[11px]">
          <Phone className="w-3 h-3 text-emerald-400" />
          <span>(+237) 6 72 91 81 76 / 6 96 05 11 11</span>
        </div>
        <span className="text-[10px] text-slate-400">Douala, Littoral</span>
      </div>
    </div>
  );
};

/**
 * 2. Mboppi Campus Card
 * Located behind ECOBANK (Ecobank entrance), Douala.
 */
export const MboppiFacadeGraphic: React.FC<{ className?: string }> = ({ className = 'w-full h-full object-cover' }) => {
  return (
    <img 
      src="/images/campus-building.jpg" 
      alt="Mboppi Campus - Behind ECOBANK"
      className={className}
    />
  );
};

/**
 * 3. Official Campus Presentation
 */
export const OfficialCampusPosterCollage: React.FC<{ className?: string }> = ({ className = 'w-full object-cover rounded-3xl border border-slate-200 shadow-md' }) => {
  return (
    <img 
      src="/images/collage.jpg" 
      alt="St Bernard University Campuses and Activities"
      className={className}
    />
  );
};
