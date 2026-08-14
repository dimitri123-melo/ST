import React from 'react';
import {
  ShieldCheck,
  MapPin,
  Award,
  CheckCircle2,
  User,
  BookOpen,
  Laptop,
  HeartPulse,
  GraduationCap,
  Flag,
  Sprout,
  Building,
  Sparkles,
  Stethoscope,
  Briefcase,
  Users,
  Calendar,
} from 'lucide-react';
import {
  BonaberiGlassFacadeGraphic,
  MboppiFacadeGraphic,
  OfficialCampusPosterCollage,
} from './CampusShowcaseVisuals';

interface GalleryCardProps {
  className?: string;
  badgeTitle: string;
  badgeSubtitle: string;
  badgeIcon: React.ReactNode;
  category: string;
  highlights: string[];
  gradient: string;
}

const AcademicCardVisual: React.FC<GalleryCardProps> = ({
  className = 'w-full h-full',
  badgeTitle,
  badgeSubtitle,
  badgeIcon,
  category,
  highlights,
  gradient,
}) => {
  return (
    <div
      className={`relative overflow-hidden group ${className} ${gradient} p-6 flex flex-col justify-between select-none shadow-sm border border-slate-800`}
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:20px_20px] opacity-15 pointer-events-none" />

      {/* Top Header */}
      <div className="relative z-10">
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-400">
            {category}
          </span>
          <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-300 border border-emerald-500/30">
            MINESUP Cameroun
          </span>
        </div>

        <div className="flex items-start gap-3">
          <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-700 text-white shrink-0 shadow-md">
            {badgeIcon}
          </div>
          <div>
            <h3 className="text-sm font-bold text-white leading-snug">{badgeTitle}</h3>
            <p className="text-xs text-slate-300 mt-0.5">{badgeSubtitle}</p>
          </div>
        </div>
      </div>

      {/* Highlights List */}
      <div className="relative z-10 my-4 space-y-2">
        {highlights.map((h, i) => (
          <div key={i} className="flex items-center gap-2 text-xs text-slate-200">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>{h}</span>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="relative z-10 pt-3 border-t border-slate-800 text-slate-400 flex items-center justify-between text-[11px]">
        <span className="font-semibold text-slate-300">Institut Universitaire St Bernard</span>
        <span className="text-amber-400 font-bold">Douala, Cameroun</span>
      </div>
    </div>
  );
};

export const GalleryDelegationParade: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => {
  return (
    <AcademicCardVisual
      className={className}
      category="Vie Estudiantine & Cérémonies"
      badgeTitle="Délégation Officielle des Étudiants"
      badgeSubtitle="Défilé du 11 Février & Événements Institutionnels"
      badgeIcon={<GraduationCap className="w-5 h-5 text-amber-400" />}
      gradient="bg-gradient-to-br from-emerald-950 via-slate-900 to-slate-950"
      highlights={[
        'Représentation officielle en costume cravate aux cérémonies d\'État',
        'Fierté républicaine et intégration nationale des promotions',
        'Tenues réglementaires offertes par l\'université',
      ]}
    />
  );
};

export const GalleryPromoterFounder: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => {
  return (
    <AcademicCardVisual
      className={className}
      category="Gouvernance & Leadership"
      badgeTitle="Présidence & Promoteur Fondateur"
      badgeSubtitle="Orientation Stratégique & Partenariats Hospitaliers"
      badgeIcon={<Award className="w-5 h-5 text-amber-400" />}
      gradient="bg-gradient-to-br from-slate-950 via-emerald-950 to-slate-900"
      highlights={[
        'Conseil académique en partenariat avec les Universités de Douala & Buea',
        'Convention de stage clinique avec 3 hôpitaux St Bernard',
        'Supervision pédagogique orientée vers l\'employabilité immédiate',
      ]}
    />
  );
};

export const GalleryStudentUniform: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => {
  return (
    <AcademicCardVisual
      className={className}
      category="Discipline & Éthique"
      badgeTitle="Tenue Réglementaire Universitaire"
      badgeSubtitle="Pôles Gestion, Douane, Commerce & Droit"
      badgeIcon={<User className="w-5 h-5 text-emerald-400" />}
      gradient="bg-gradient-to-br from-emerald-950 via-slate-900 to-slate-950"
      highlights={[
        'Chemises blanches et cravates vertes institutionnelles',
        'Code vestimentaire professionnel conforme aux exigences d\'entreprise',
        'Kits de rentrée offerts aux étudiants dès l\'inscription',
      ]}
    />
  );
};

export const GalleryBiomedicalDefense: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => {
  return (
    <AcademicCardVisual
      className={className}
      category="Sciences Médico-Sanitaires"
      badgeTitle="Soutenances & Travaux Biomédicaux"
      badgeSubtitle="Laboratoires de Biologie Clinique & Imagerie"
      badgeIcon={<HeartPulse className="w-5 h-5 text-emerald-400" />}
      gradient="bg-gradient-to-br from-emerald-950 via-slate-900 to-emerald-950"
      highlights={[
        'Soutenances devant jurys d\'experts hospitaliers et universitaires',
        'Pratique sur microscopes, automates et réactifs de laboratoire',
        'Stages garantis en hématologie, biochimie et microbiologie',
      ]}
    />
  );
};

export const GalleryNursingParade: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => {
  return (
    <AcademicCardVisual
      className={className}
      category="Corps Médical & Soins"
      badgeTitle="Procession Professionnelle en Soins Infirmiers"
      badgeSubtitle="Blouses Blanches & Coiffes Infirmières Réglementaires"
      badgeIcon={<HeartPulse className="w-5 h-5 text-rose-400" />}
      gradient="bg-gradient-to-br from-slate-950 via-emerald-950 to-slate-900"
      highlights={[
        'Serment professionnel et éthique du soignant',
        'Stages cliniques immersifs en chirurgie, pédiatrie et urgences',
        'Assurance santé couverte à 50% pour chaque étudiant soignant',
      ]}
    />
  );
};

export const GalleryExamClassroom: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => {
  return (
    <AcademicCardVisual
      className={className}
      category="Rigueur Académique"
      badgeTitle="Salles de Cours & Examens Semestriels"
      badgeSubtitle="Campus Bonabéri & Mboppi Douala"
      badgeIcon={<BookOpen className="w-5 h-5 text-amber-400" />}
      gradient="bg-gradient-to-br from-emerald-950 via-slate-900 to-slate-950"
      highlights={[
        'Salles climatisées et insonorisées favorisant la concentration',
        'Contrôles continus rigoureux et examens nationaux BTS / HND',
        'Effectifs maîtrisés pour un encadrement personnalisé',
      ]}
    />
  );
};

export const GalleryClinicalSimulation: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => {
  return (
    <AcademicCardVisual
      className={className}
      category="Pratique Hospitalière"
      badgeTitle="Simulation Clinique sur Mannequins Médicaux"
      badgeSubtitle="Ateliers de Soins d'Urgence & Gestes Pratiques"
      badgeIcon={<Stethoscope className="w-5 h-5 text-emerald-400" />}
      gradient="bg-gradient-to-br from-emerald-950 via-slate-900 to-slate-950"
      highlights={[
        'Mises en situation d\'urgence et réanimation guidées',
        'Chariots de soins, perfusions et instruments chirurgicaux réels',
        'Passerelle directe vers les 3 hôpitaux St Bernard',
      ]}
    />
  );
};

export const GalleryLaptopDistribution: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => {
  return (
    <AcademicCardVisual
      className={className}
      category="Équipement Numérique"
      badgeTitle="Remise des Ordinateurs Portables Dell"
      badgeSubtitle="Offre Spéciale Rentrée Académique"
      badgeIcon={<Laptop className="w-5 h-5 text-sky-400" />}
      gradient="bg-gradient-to-br from-slate-950 via-sky-950 to-slate-900"
      highlights={[
        'Ordinateur portable offert dès l\'inscription précoce',
        'Laboratoires informatiques haute performance et Wi-Fi campus',
        'Pratique intensive en génie logiciel, réseaux et gestion',
      ]}
    />
  );
};

export const GalleryAgriculturePractical: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => {
  return (
    <AcademicCardVisual
      className={className}
      category="Agro-Pastoral & Pêche"
      badgeTitle="Exploitations Agricoles & Piscicoles"
      badgeSubtitle="Travaux Pratiques sur le Terrain"
      badgeIcon={<Sprout className="w-5 h-5 text-emerald-400" />}
      gradient="bg-gradient-to-br from-emerald-950 via-slate-900 to-slate-950"
      highlights={[
        'Gestion de bacs piscicoles et fermes expérimentales',
        'Techniques modernes de production végétale et élevage',
        'Formation d\'agro-entrepreneurs autonomes et compétitifs',
      ]}
    />
  );
};

export interface AuthenticVisualProps {
  visualKey?: string;
  className?: string;
  fallbackCategory?: string;
  altText?: string;
}

export const AuthenticVisualRenderer: React.FC<AuthenticVisualProps> = ({
  visualKey,
  className = 'w-full h-full',
  fallbackCategory,
}) => {
  switch (visualKey) {
    case 'delegation-parade':
      return <GalleryDelegationParade className={className} />;
    case 'promoter-founder':
      return <GalleryPromoterFounder className={className} />;
    case 'student-uniform':
      return <GalleryStudentUniform className={className} />;
    case 'biomedical-defense':
      return <GalleryBiomedicalDefense className={className} />;
    case 'nursing-parade':
      return <GalleryNursingParade className={className} />;
    case 'exam-classroom':
      return <GalleryExamClassroom className={className} />;
    case 'clinical-simulation':
      return <GalleryClinicalSimulation className={className} />;
    case 'laptop-distribution':
      return <GalleryLaptopDistribution className={className} />;
    case 'agriculture-practical':
      return <GalleryAgriculturePractical className={className} />;
    case 'bonaberi-facade':
      return <BonaberiGlassFacadeGraphic className={className} />;
    case 'mboppi-facade':
      return <MboppiFacadeGraphic className={className} />;
    case 'campus-collage':
      return <OfficialCampusPosterCollage className={className} />;
    default:
      if (fallbackCategory === 'biomedical' || fallbackCategory === 'academic') {
        return <GalleryBiomedicalDefense className={className} />;
      }
      if (fallbackCategory === 'engineering') {
        return <GalleryLaptopDistribution className={className} />;
      }
      if (fallbackCategory === 'agriculture') {
        return <GalleryAgriculturePractical className={className} />;
      }
      if (fallbackCategory === 'campus') {
        return <BonaberiGlassFacadeGraphic className={className} />;
      }
      return <GalleryDelegationParade className={className} />;
  }
};
