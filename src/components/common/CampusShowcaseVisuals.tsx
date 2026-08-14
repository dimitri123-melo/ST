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
export const MboppiFacadeGraphic: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => {
  return (
    <div className={`relative overflow-hidden group ${className} bg-gradient-to-br from-emerald-950 via-slate-900 to-slate-950 p-6 flex flex-col justify-between select-none shadow-sm border border-emerald-900/50`}>
      {/* Background Architectural Vector Motif */}
      <div className="absolute inset-0 bg-[radial-gradient(#059669_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" />
      
      {/* Top Header */}
      <div className="relative z-10 flex items-start justify-between gap-3">
        <div className="bg-emerald-900/80 border border-amber-400/40 text-white px-3.5 py-2 rounded-xl shadow-lg flex items-center gap-2.5">
          <Building className="w-4 h-4 text-amber-400 shrink-0" />
          <div>
            <span className="text-xs font-bold block leading-tight">Campus Mboppi (Campus B)</span>
            <span className="text-[10px] text-emerald-300">Derrière Ecobank (Entrée Ecobank) • Douala</span>
          </div>
        </div>
        <span className="bg-emerald-500/20 text-emerald-300 text-[10px] font-extrabold px-2.5 py-1 rounded-full border border-emerald-400/30 uppercase tracking-wider">
          Pôle Santé & Gestion
        </span>
      </div>

      {/* Center Information */}
      <div className="relative z-10 my-4 p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-2">
        <div className="flex items-center gap-2 text-xs text-slate-200">
          <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
          <span className="font-semibold">Mboppi, Derrière ECOBANK (Entrée Ecobank)</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-slate-300">
          <Clock className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
          <span>Cours du Jour (08h00 - 15h30) & Cours du Soir (17h30 - 21h00)</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-slate-300">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
          <span>Labos d'Analyses Biomédicales, Salles de Soins & Économie-Gestion</span>
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
 * 3. Official Campus Presentation
 */
export const OfficialCampusPosterCollage: React.FC<{ className?: string }> = ({ className = 'w-full' }) => {
  return (
    <div className={`rounded-3xl overflow-hidden border border-slate-200 shadow-md bg-white ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-slate-50">
        {/* Campus Bonaberi */}
        <div className="p-5 rounded-2xl bg-emerald-950 text-white border border-emerald-800/60 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="text-xs font-black uppercase tracking-wider text-amber-400">Campus A — Bonabéri</span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-800/80 text-emerald-200">Principal</span>
            </div>
            <h4 className="text-sm font-bold text-white mb-2">Immeuble Moderne à Façade Vitrée</h4>
            <p className="text-xs text-slate-300 leading-relaxed mb-3">
              Situé face à la boulangerie de la Gare sur l'axe principal de Bonabéri. Abrite les salles de cours climatisées, les laboratoires informatiques, ateliers de génie civil et l'administration centrale.
            </p>
          </div>
          <div className="pt-3 border-t border-emerald-900/80 flex items-center gap-2 text-xs text-amber-300 font-medium">
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            <span>Face Boulangerie de la Gare, Bonabéri</span>
          </div>
        </div>

        {/* Campus Mboppi */}
        <div className="p-5 rounded-2xl bg-slate-900 text-white border border-slate-800 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="text-xs font-black uppercase tracking-wider text-amber-400">Campus B — Mboppi</span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-800 text-slate-300">Santé & Gestion</span>
            </div>
            <h4 className="text-sm font-bold text-white mb-2">Pôle Médical & Sciences de Gestion</h4>
            <p className="text-xs text-slate-300 leading-relaxed mb-3">
              Situé directement derrière l'agence ECOBANK Mboppi. Spécialement équipé pour les travaux pratiques biomédicaux, la simulation en soins infirmiers et les filières commerciales.
            </p>
          </div>
          <div className="pt-3 border-t border-slate-800 flex items-center gap-2 text-xs text-amber-300 font-medium">
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            <span>Derrière l'agence ECOBANK, Mboppi</span>
          </div>
        </div>
      </div>

      <div className="p-4 bg-white flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600 border-t border-slate-200">
        <span className="font-bold text-slate-900">Institut Universitaire St Bernard de Douala</span>
        <span className="text-emerald-800 font-semibold">Autorisation MINESUP N°21-06408/L/MINESUP</span>
      </div>
    </div>
  );
};
