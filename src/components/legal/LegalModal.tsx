import React from 'react';
import { useLanguage } from '../../locales/useLanguage';
import { INSTITUTION } from '../../data/institution';
import { X, ShieldCheck, FileText, CheckCircle2 } from 'lucide-react';

interface LegalModalProps {
  type: 'terms' | 'privacy' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  const { language } = useLanguage();

  if (!type) return null;

  const isTerms = type === 'terms';

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        <div className="bg-gradient-to-r from-emerald-900 to-emerald-950 p-6 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-400">
              {isTerms ? <FileText className="w-6 h-6" /> : <ShieldCheck className="w-6 h-6" />}
            </div>
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-400">
                {INSTITUTION.name[language]}
              </span>
              <h3 className="text-lg font-bold">
                {isTerms
                  ? language === 'fr'
                    ? 'Règlement & Conditions d\'Admission'
                    : 'Admissions Policy & Guidelines'
                  : language === 'fr'
                  ? 'Politique de Confidentialité des Données'
                  : 'Data Privacy Policy'}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-emerald-200 hover:text-white hover:bg-emerald-800 transition-colors"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 space-y-4 max-h-[60vh] overflow-y-auto text-xs sm:text-sm text-slate-700 leading-relaxed">
          {isTerms ? (
            <>
              <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-900 space-y-1">
                <p className="font-bold">Autorisation Ministérielle MINESUP Cameroun :</p>
                <p>N°21-06408/L/MINESUP/SG/DDES/ESUP/SDA/MF/YDE</p>
                <p className="pt-1 font-semibold">Sous tutelle académique : Université de Douala & Université de Buea.</p>
              </div>

              <h4 className="font-bold text-slate-900 text-sm">1. Conditions d'Admission et Dépôt de Dossier</h4>
              <p>
                L'admission aux cycles BTS/HND est ouverte aux titulaires du Baccalauréat de l'enseignement secondaire ou du GCE Advanced Level. Les candidats aux cycles Licence Professionnelle doivent justifier d'un BTS, HND ou diplôme équivalent (Bac+2). Les candidats au Master Professionnel doivent être titulaires d'une Licence ou équivalent (Bac+3).
              </p>

              <h4 className="font-bold text-slate-900 text-sm">2. Modalités des Bourses et Avantages Rentrée 2026/2027</h4>
              <p>
                Les avantages de rentrée précoce (Bourse de 60.000 FCFA, Ordinateur Portable ou Smartphone) sont accordés selon l'ordre d'inscription et la validation complète du dossier d'inscription avant la date limite fixée à septembre 2026, dans la limite des stocks et quotas alloués par la direction de l'Institut Universitaire St Bernard.
              </p>

              <h4 className="font-bold text-slate-900 text-sm">3. Couverture Médicale et Assurance</h4>
              <p>
                Chaque étudiant régulièrement inscrit bénéficie d'une prise en charge de 50% sur les consultations et soins ambulatoires auprès des 3 hôpitaux partenaires du réseau St Bernard à Douala.
              </p>
            </>
          ) : (
            <>
              <h4 className="font-bold text-slate-900 text-sm">1. Collecte et Traitement des Données</h4>
              <p>
                Les informations recueillies via les formulaires de candidature en ligne (Nom, numéro de téléphone, WhatsApp, filière souhaitée, niveau d'études) sont destinées exclusivement au service des admissions de l'Institut Universitaire St Bernard pour le suivi du dossier académique de l'étudiant.
              </p>

              <h4 className="font-bold text-slate-900 text-sm">2. Confidentialité & Sécurité</h4>
              <p>
                L'Institut s'engage à ne jamais vendre, céder ou divulguer vos données personnelles à des tiers extérieurs non autorisés. Vos données sont conservées de façon sécurisée conformément aux réglementations applicables en République du Cameroun.
              </p>

              <h4 className="font-bold text-slate-900 text-sm">3. Droits d'Accès et de Rectification</h4>
              <p>
                Tout candidat ou parent d'élève dispose d'un droit d'accès, de modification ou de suppression de ses données en contactant directement le secrétariat général sur nos campus de Bonabéri et de Mboppi.
              </p>
            </>
          )}
        </div>

        <div className="bg-slate-50 px-6 py-4 border-t border-slate-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-emerald-800 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-colors"
          >
            {language === 'fr' ? 'Compris' : 'Understood'}
          </button>
        </div>
      </div>
    </div>
  );
};
