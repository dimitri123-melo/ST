import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../locales/useLanguage';
import { PageView } from '../../types';
import { INSTITUTION } from '../../data/institution';
import { UniversityLogo } from './Logo';
import { LanguageSwitcher } from './LanguageSwitcher';
import {
  Menu,
  X,
  Phone,
  MessageSquare,
  GraduationCap,
  Sparkles,
  ChevronDown,
  Building2,
  BookOpen,
  MapPin,
  HelpCircle,
  Newspaper,
  Compass,
  Stethoscope,
  Cpu,
  Briefcase,
  Sprout,
  Palette,
  Scale,
} from 'lucide-react';

interface NavbarProps {
  currentPage: PageView;
  setCurrentPage: (page: PageView) => void;
  onOpenApplication: (preselectedDomain?: string, preselectedProg?: string) => void;
  onOpenOrientation: () => void;
  onSelectFaculty?: (domain: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  setCurrentPage,
  onOpenApplication,
  onOpenOrientation,
  onSelectFaculty,
}) => {
  const { t, language } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [programmesDropdownOpen, setProgrammesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { id: PageView; label: string; icon: React.ReactNode; badge?: string }[] = [
    { id: 'home', label: t.nav.home, icon: null },
    { id: 'about', label: t.nav.about, icon: null },
    { id: 'programmes', label: t.nav.programmes, icon: <ChevronDown className="w-3.5 h-3.5 ml-0.5" /> },
    {
      id: 'admissions',
      label: t.nav.admissions,
      icon: null,
      badge: '2026/27',
    },
    { id: 'campuses', label: t.nav.campuses, icon: null },
    { id: 'student-life', label: t.nav.studentLife, icon: null },
    { id: 'news', label: t.nav.news, icon: null },
    { id: 'faq', label: t.nav.faq, icon: null },
    { id: 'contact', label: t.nav.contact, icon: null },
  ];

  const handleNavClick = (pageId: PageView) => {
    setCurrentPage(pageId);
    setMobileMenuOpen(false);
    setProgrammesDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openWhatsApp = (customMsg?: string) => {
    const text = customMsg || encodeURIComponent(
      language === 'fr'
        ? `Bonjour, je souhaite avoir des informations sur les admissions 2026/2027 à l'Institut Universitaire St Bernard.`
        : `Hello, I would like information regarding the 2026/2027 admissions at St Bernard University Institute.`
    );
    window.open(`https://wa.me/${INSTITUTION.contacts.primaryWhatsApp}?text=${text}`, '_blank');
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Institutional Notification & Hotline Bar */}
      <div className="bg-slate-950 text-white text-xs py-1.5 px-4 sm:px-8 border-b border-slate-800 hidden sm:block">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <span className="bg-amber-500 text-slate-950 font-bold text-[10px] uppercase px-2 py-0.5 rounded tracking-wider flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              {t.topBanner.tag}
            </span>
            <span className="text-slate-300 text-[11px] font-medium hidden md:inline truncate max-w-xl">
              {t.topBanner.text}
            </span>
            <button
              onClick={() => handleNavClick('admissions')}
              className="text-amber-400 hover:text-amber-300 text-[11px] font-bold underline underline-offset-2 ml-1"
            >
              {t.topBanner.cta} →
            </button>
          </div>

          <div className="flex items-center gap-4 text-slate-300">
            <a
              href={`tel:${INSTITUTION.contacts.primaryPhone.replace(/[^0-9+]/g, '')}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span className="font-semibold text-[11px]">{INSTITUTION.contacts.primaryPhone}</span>
            </a>
            <span className="text-slate-700">|</span>
            <div className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-[11px]">Douala (Bonabéri & Mboppi)</span>
            </div>
            <span className="text-slate-700">|</span>
            <LanguageSwitcher />
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        id="main-navbar"
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200 py-2.5'
            : 'bg-white border-b border-slate-200 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Logo Brand */}
          <button
            id="brand-logo-btn"
            onClick={() => handleNavClick('home')}
            className="text-left focus:outline-none focus:ring-2 focus:ring-slate-900 rounded-xl p-1 transition-opacity hover:opacity-95"
            aria-label="Retour à l'accueil"
          >
            <UniversityLogo className="h-12 w-12 sm:h-14 sm:w-14" />
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-1.5">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;

              if (link.id === 'programmes') {
                return (
                  <div
                    key={link.id}
                    className="relative"
                    onMouseEnter={() => setProgrammesDropdownOpen(true)}
                    onMouseLeave={() => setProgrammesDropdownOpen(false)}
                  >
                    <button
                      id="nav-link-programmes"
                      onClick={() => handleNavClick('programmes')}
                      className={`px-3 py-2 rounded-lg text-xs xl:text-sm font-semibold transition-all flex items-center gap-1 ${
                        isActive
                          ? 'text-slate-950 bg-slate-100 font-bold'
                          : 'text-slate-700 hover:text-slate-950 hover:bg-slate-50'
                      }`}
                    >
                      {link.label}
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${programmesDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {/* Mega Dropdown */}
                    {programmesDropdownOpen && (
                      <div className="absolute top-full left-0 w-80 bg-white rounded-2xl shadow-xl border border-slate-200 p-3 mt-1 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                        <div className="px-3 py-2 border-b border-slate-100 mb-2">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                            {language === 'fr' ? '6 Pôles de Spécialités' : '6 Academic Disciplines'}
                          </span>
                        </div>
                        <div className="grid grid-cols-1 gap-1">
                          <button
                            onClick={() => {
                              handleNavClick('programmes');
                              if (onSelectFaculty) onSelectFaculty('biomedical');
                            }}
                            className="w-full text-left px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-slate-950 flex items-center justify-between group"
                          >
                            <span className="flex items-center gap-2">
                              <Stethoscope className="w-3.5 h-3.5 text-emerald-600" />
                              <span>{language === 'fr' ? 'Santé & Imagerie Médicale (TIM)' : 'Biomedical & Imaging'}</span>
                            </span>
                            <span className="text-[10px] text-slate-400 group-hover:text-slate-700">BTS/Licence/Master</span>
                          </button>
                          <button
                            onClick={() => {
                              handleNavClick('programmes');
                              if (onSelectFaculty) onSelectFaculty('engineering');
                            }}
                            className="w-full text-left px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-slate-950 flex items-center justify-between group"
                          >
                            <span className="flex items-center gap-2">
                              <Cpu className="w-3.5 h-3.5 text-blue-600" />
                              <span>{language === 'fr' ? 'Génie Logiciel, IA & Réseaux' : 'Engineering & AI'}</span>
                            </span>
                            <span className="text-[10px] text-slate-400 group-hover:text-slate-700">BTS/Licence/Master</span>
                          </button>
                          <button
                            onClick={() => {
                              handleNavClick('programmes');
                              if (onSelectFaculty) onSelectFaculty('business');
                            }}
                            className="w-full text-left px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-slate-950 flex items-center justify-between group"
                          >
                            <span className="flex items-center gap-2">
                              <Briefcase className="w-3.5 h-3.5 text-amber-600" />
                              <span>{language === 'fr' ? 'Commerce, Douane & Banque' : 'Business & Customs'}</span>
                            </span>
                            <span className="text-[10px] text-slate-400 group-hover:text-slate-700">BTS/Licence/Master</span>
                          </button>
                          <button
                            onClick={() => {
                              handleNavClick('programmes');
                              if (onSelectFaculty) onSelectFaculty('agriculture');
                            }}
                            className="w-full text-left px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-slate-950 flex items-center justify-between group"
                          >
                            <span className="flex items-center gap-2">
                              <Sprout className="w-3.5 h-3.5 text-emerald-600" />
                              <span>{language === 'fr' ? 'Agriculture & Aquaculture' : 'Agro-Pastoral'}</span>
                            </span>
                            <span className="text-[10px] text-slate-400 group-hover:text-slate-700">HND/BTS/Licence</span>
                          </button>
                          <button
                            onClick={() => {
                              handleNavClick('programmes');
                              if (onSelectFaculty) onSelectFaculty('social_sciences');
                            }}
                            className="w-full text-left px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-slate-950 flex items-center justify-between group"
                          >
                            <span className="flex items-center gap-2">
                              <Palette className="w-3.5 h-3.5 text-purple-600" />
                              <span>{language === 'fr' ? 'Génie Culinaire & Mode' : 'Culinary Arts & Fashion'}</span>
                            </span>
                            <span className="text-[10px] text-slate-400 group-hover:text-slate-700">BTS/Licence</span>
                          </button>
                          <button
                            onClick={() => {
                              handleNavClick('programmes');
                              if (onSelectFaculty) onSelectFaculty('education');
                            }}
                            className="w-full text-left px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-slate-950 flex items-center justify-between group"
                          >
                            <span className="flex items-center gap-2">
                              <Scale className="w-3.5 h-3.5 text-indigo-600" />
                              <span>{language === 'fr' ? 'Sciences de l\'Éducation & Droit' : 'Education & Law'}</span>
                            </span>
                            <span className="text-[10px] text-slate-400 group-hover:text-slate-700">BTS/Licence</span>
                          </button>
                        </div>
                        <div className="mt-2 pt-2 border-t border-slate-100 flex items-center justify-between">
                          <button
                            onClick={onOpenOrientation}
                            className="text-[11px] font-bold text-amber-600 hover:text-amber-700 flex items-center gap-1"
                          >
                            <Compass className="w-3.5 h-3.5" />
                            {t.nav.orientationQuick}
                          </button>
                          <button
                            onClick={() => handleNavClick('programmes')}
                            className="text-[11px] font-bold text-slate-900 hover:underline"
                          >
                            {language === 'fr' ? 'Tout voir →' : 'View all →'}
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative px-3 py-2 rounded-lg text-xs xl:text-sm font-semibold transition-all ${
                    isActive
                      ? 'text-slate-950 bg-slate-100 font-bold'
                      : 'text-slate-700 hover:text-slate-950 hover:bg-slate-50'
                  }`}
                >
                  <span className="flex items-center gap-1">
                    {link.label}
                    {link.badge && (
                      <span className="bg-amber-100 text-amber-900 text-[10px] font-bold px-1.5 py-0.2 rounded-full border border-amber-300">
                        {link.badge}
                      </span>
                    )}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Action CTAs */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Quick WhatsApp Chat */}
            <button
              id="btn-nav-whatsapp"
              onClick={() => openWhatsApp()}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-800 border border-slate-200 text-xs font-bold transition-all"
              title="Chat WhatsApp"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600" />
              <span className="hidden xl:inline">{t.nav.chatWhatsApp}</span>
              <span className="xl:hidden">WhatsApp</span>
            </button>

            {/* Primary Apply Button */}
            <button
              id="btn-nav-apply"
              onClick={() => onOpenApplication()}
              className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-bold shadow-sm transition-all transform active:scale-95"
            >
              <GraduationCap className="w-4 h-4 text-amber-400" />
              <span>{t.nav.applyNow}</span>
            </button>

            {/* Mobile language switch trigger */}
            <div className="sm:hidden">
              <LanguageSwitcher />
            </div>

            {/* Mobile Menu Button */}
            <button
              id="btn-mobile-menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-900"
              aria-label="Ouvrir le menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-[65px] bg-white border-b border-slate-200 shadow-2xl z-40 max-h-[85vh] overflow-y-auto p-4 animate-in slide-in-from-top-4 duration-300">
            {/* Promo Callout in mobile menu */}
            <div className="bg-slate-900 text-white rounded-2xl p-4 mb-4 border border-slate-800">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold mb-1">
                <Sparkles className="w-4 h-4" />
                <span>RENTRÉE 2026 / 2027</span>
              </div>
              <p className="text-xs text-slate-300 mb-3">
                Bourse 60.000 FCFA, Laptop ou Smartphone pour les premiers inscrits.
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    handleNavClick('admissions');
                  }}
                  className="flex-1 py-2 px-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl text-xs text-center"
                >
                  Voir les modalités
                </button>
                <button
                  onClick={() => openWhatsApp()}
                  className="py-2 px-3 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-xl text-xs flex items-center justify-center gap-1"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                  WhatsApp
                </button>
              </div>
            </div>

            {/* Links List */}
            <div className="space-y-1">
              {navLinks.map((link) => {
                const isActive = currentPage === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold flex items-center justify-between transition-colors ${
                      isActive
                        ? 'bg-slate-100 text-slate-950 font-bold border-l-4 border-slate-900'
                        : 'text-slate-800 hover:bg-slate-50'
                    }`}
                  >
                    <span>{link.label}</span>
                    {link.badge && (
                      <span className="bg-amber-100 text-amber-900 text-[11px] font-bold px-2 py-0.5 rounded-full border border-amber-300">
                        {link.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Quick Orientation Advisor Button in drawer */}
            <div className="mt-4 pt-4 border-t border-slate-100">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenOrientation();
                }}
                className="w-full py-3 px-4 rounded-xl bg-slate-50 text-slate-900 border border-slate-200 text-xs font-bold flex items-center justify-center gap-2 mb-3"
              >
                <Compass className="w-4 h-4 text-amber-600" />
                <span>{t.nav.orientationQuick}</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenApplication();
                }}
                className="w-full py-3.5 px-4 rounded-xl bg-slate-900 text-white text-sm font-bold shadow-md flex items-center justify-center gap-2"
              >
                <GraduationCap className="w-4 h-4 text-amber-400" />
                <span>{t.nav.applyNow}</span>
              </button>
            </div>

            {/* Campus Quick Contacts in mobile */}
            <div className="mt-4 pt-3 text-xs text-slate-500 space-y-1">
              <p className="font-semibold text-slate-700">Campus Douala :</p>
              <p className="text-[11px]">• Bonabéri : {INSTITUTION.locations.campusA.landmark.fr}</p>
              <p className="text-[11px]">• Mboppi : {INSTITUTION.locations.campusB.landmark.fr}</p>
              <p className="text-[11px] pt-1 font-medium text-slate-900">
                Tél : {INSTITUTION.contacts.primaryPhone}
              </p>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
