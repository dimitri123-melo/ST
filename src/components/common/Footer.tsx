import React from 'react';
import { useLanguage } from '../../locales/useLanguage';
import { INSTITUTION } from '../../data/institution';
import { PageView } from '../../types';
import { UniversityLogo } from './Logo';
import { LanguageSwitcher } from './LanguageSwitcher';
import {
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  ExternalLink,
  ShieldCheck,
  Award,
  ChevronRight,
  GraduationCap,
  Clock,
  Compass,
} from 'lucide-react';

interface FooterProps {
  setCurrentPage: (page: PageView) => void;
  onOpenApplication: () => void;
  onOpenOrientation: () => void;
  onOpenLegalModal: (type: 'terms' | 'privacy') => void;
}

export const Footer: React.FC<FooterProps> = ({
  setCurrentPage,
  onOpenApplication,
  onOpenOrientation,
  onOpenLegalModal,
}) => {
  const { t, language } = useLanguage();

  const handleNav = (page: PageView) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openWhatsApp = () => {
    const text = encodeURIComponent(
      language === 'fr'
        ? `Bonjour, je contacte l'Institut Universitaire St Bernard via le site web officiel.`
        : `Hello, I am contacting St Bernard University Institute via the official website.`
    );
    window.open(`https://wa.me/${INSTITUTION.contacts.primaryWhatsApp}?text=${text}`, '_blank');
  };

  return (
    <footer id="institution-footer" className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t-2 border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1 & 2: Branding & Accreditations */}
          <div className="lg:col-span-2 space-y-4">
            <UniversityLogo className="h-14 w-14 sm:h-16 sm:w-16" variant="white" />
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-md">
              {t.footer.aboutText}
            </p>

            {/* Official Tutelage Badges */}
            <div className="pt-2">
              <span className="text-[11px] font-bold tracking-wider text-amber-400 uppercase block mb-2">
                {language === 'fr' ? 'Tutelles Académiques & Autorisation :' : 'Academic Tutelage & Accreditation:'}
              </span>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 bg-slate-900 border border-slate-800 text-slate-200 text-xs px-2.5 py-1.5 rounded-lg">
                  <Award className="w-3.5 h-3.5 text-amber-400" />
                  Université de Douala
                </span>
                <span className="inline-flex items-center gap-1.5 bg-slate-900 border border-slate-800 text-slate-200 text-xs px-2.5 py-1.5 rounded-lg">
                  <Award className="w-3.5 h-3.5 text-amber-400" />
                  University of Buea
                </span>
                <span className="inline-flex items-center gap-1.5 bg-slate-900 border border-slate-800 text-slate-200 text-xs px-2.5 py-1.5 rounded-lg">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  MINESUP Cameroun
                </span>
              </div>
            </div>

            {/* Shift modes */}
            <div className="flex items-center gap-2 text-xs text-slate-300 font-semibold pt-1">
              <Clock className="w-4 h-4 text-amber-400" />
              <span>{INSTITUTION.shifts[language]} (Jour & Soir)</span>
            </div>
          </div>

          {/* Col 3: Quick Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold tracking-wider text-white uppercase border-b border-slate-800 pb-2">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-amber-400 transition-colors flex items-center gap-1 text-slate-400 hover:text-white"
                >
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  {t.nav.home}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-amber-400 transition-colors flex items-center gap-1 text-slate-400 hover:text-white"
                >
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  {t.nav.about}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('programmes')}
                  className="hover:text-amber-400 transition-colors flex items-center gap-1 text-slate-400 hover:text-white"
                >
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  {t.nav.programmes}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('admissions')}
                  className="hover:text-amber-400 transition-colors flex items-center gap-1 text-slate-400 hover:text-white"
                >
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  {t.nav.admissions}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('campuses')}
                  className="hover:text-amber-400 transition-colors flex items-center gap-1 text-slate-400 hover:text-white"
                >
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  {t.nav.campuses}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('student-life')}
                  className="hover:text-amber-400 transition-colors flex items-center gap-1 text-slate-400 hover:text-white"
                >
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  {t.nav.studentLife}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('news')}
                  className="hover:text-amber-400 transition-colors flex items-center gap-1 text-slate-400 hover:text-white"
                >
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  {t.nav.news}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('faq')}
                  className="hover:text-amber-400 transition-colors flex items-center gap-1 text-slate-400 hover:text-white"
                >
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  {t.nav.faq}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Academic Disciplines */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold tracking-wider text-white uppercase border-b border-slate-800 pb-2">
              {t.footer.academicPoles}
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button
                  onClick={() => handleNav('programmes')}
                  className="hover:text-white transition-colors text-left"
                >
                  • {language === 'fr' ? 'Santé & Imagerie Médicale (TIM)' : 'Biomedical & Imaging (TIM)'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('programmes')}
                  className="hover:text-white transition-colors text-left"
                >
                  • {language === 'fr' ? 'Génie Logiciel, IA & Industrie' : 'Software Eng., AI & Industry'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('programmes')}
                  className="hover:text-white transition-colors text-left"
                >
                  • {language === 'fr' ? 'Banque, Finance & Douane' : 'Banking, Finance & Customs'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('programmes')}
                  className="hover:text-white transition-colors text-left"
                >
                  • {language === 'fr' ? 'Agriculture & Aquaculture' : 'Agriculture & Aquaculture'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('programmes')}
                  className="hover:text-white transition-colors text-left"
                >
                  • {language === 'fr' ? 'Génie Culinaire & Mode' : 'Culinary Arts & Fashion'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('programmes')}
                  className="hover:text-white transition-colors text-left"
                >
                  • {language === 'fr' ? 'Sciences de l\'Éducation & Droit' : 'Education Sciences & Law'}
                </button>
              </li>
              <li className="pt-2">
                <button
                  onClick={onOpenOrientation}
                  className="text-amber-400 hover:text-amber-300 font-bold flex items-center gap-1 text-xs"
                >
                  <Compass className="w-3.5 h-3.5" />
                  <span>{t.nav.orientationQuick}</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Campuses & Contacts */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold tracking-wider text-white uppercase border-b border-slate-800 pb-2">
              {t.footer.contactsTitle}
            </h4>
            <div className="space-y-3 text-xs">
              <div>
                <p className="text-white font-bold flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  Campus Bonabéri (A) :
                </p>
                <p className="text-slate-400 text-[11px] pl-5">
                  {INSTITUTION.locations.campusA.landmark[language]}
                </p>
              </div>

              <div>
                <p className="text-white font-bold flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  Campus Mboppi (B) :
                </p>
                <p className="text-slate-400 text-[11px] pl-5">
                  {INSTITUTION.locations.campusB.landmark[language]}
                </p>
              </div>

              <div className="pt-1">
                <p className="text-white font-semibold">Téléphone direct :</p>
                <p className="text-amber-400 font-bold">{INSTITUTION.contacts.primaryPhone}</p>
                <p className="text-slate-400 text-[11px] mt-0.5">{INSTITUTION.contacts.email}</p>
              </div>

              <div>
                <button
                  onClick={openWhatsApp}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-200" />
                  <span>WhatsApp (+237 682 764 947)</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-center sm:text-left">
            <span>© 2026 Institut Universitaire St Bernard (IUSB) - Douala. {t.footer.rights}</span>
            <div className="flex items-center gap-4 text-[11px]">
              <button
                onClick={() => onOpenLegalModal('terms')}
                className="hover:text-slate-300 underline underline-offset-2"
              >
                {t.footer.termsOfAdmission}
              </button>
              <button
                onClick={() => onOpenLegalModal('privacy')}
                className="hover:text-slate-300 underline underline-offset-2"
              >
                {t.footer.privacyPolicy}
              </button>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <LanguageSwitcher variant="footer" />
          </div>
        </div>
      </div>
    </footer>
  );
};
