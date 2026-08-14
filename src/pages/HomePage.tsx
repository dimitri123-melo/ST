import React from 'react';
import { useLanguage } from '../locales/useLanguage';
import { Programme, NewsArticle, PageView } from '../types';
import { HeroSection } from '../components/home/HeroSection';
import { UniversityIntroSection } from '../components/home/UniversityIntroSection';
import { AcademicPolesSection } from '../components/home/AcademicPolesSection';
import { PromoBanner } from '../components/home/PromoBanner';
import { ParentConfidenceSection } from '../components/home/ParentConfidenceSection';
import { CampusesPreviewSection } from '../components/home/CampusesPreviewSection';
import { PracticalExperienceSection } from '../components/home/PracticalExperienceSection';
import { RealPhotoGallerySection } from '../components/home/RealPhotoGallerySection';
import { HomeFAQSection } from '../components/home/HomeFAQSection';
import { AuthenticVisualRenderer } from '../components/common/RealCampusGalleryVisuals';
import { NEWS_DATA } from '../data/news';
import { INSTITUTION } from '../data/institution';
import {
  GraduationCap,
  Sparkles,
  ArrowRight,
  Calendar,
  MessageSquare,
  Mail,
  Phone,
} from 'lucide-react';

interface HomePageProps {
  onOpenApplication: (domain?: string, prog?: string) => void;
  onOpenOrientation: () => void;
  onSelectProgramme: (prog: Programme) => void;
  onSelectArticle: (article: NewsArticle) => void;
  onNavigate: (page: PageView) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onOpenApplication,
  onOpenOrientation,
  onSelectProgramme,
  onSelectArticle,
  onNavigate,
}) => {
  const { t, language } = useLanguage();

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      language === 'fr'
        ? "Bonjour, je souhaite postuler pour la rentrée 2026/2027 à l'Institut Universitaire St Bernard."
        : "Hello, I wish to apply for the 2026/2027 academic session at St Bernard University Institute."
    );
    window.open(`https://wa.me/${INSTITUTION.contacts.primaryWhatsApp}?text=${text}`, '_blank');
  };

  return (
    <div className="space-y-0">
      {/* 1. Hero Section */}
      <HeroSection
        onOpenApplication={() => onOpenApplication()}
        onOpenOrientation={onOpenOrientation}
        onExploreProgrammes={() => onNavigate('programmes')}
      />

      {/* 2. University Introduction & Tutelage (MINESUP, Univ de Douala, Univ de Buea) */}
      <UniversityIntroSection
        onOpenAdmissions={() => onNavigate('admissions')}
      />

      {/* 3. Academic Faculties & Accredited Programmes */}
      <AcademicPolesSection
        onSelectProgramme={onSelectProgramme}
        onApplyForProgramme={(dom, name) => onOpenApplication(dom, name)}
        onViewAllProgrammes={() => onNavigate('programmes')}
      />

      {/* 4. 2026/2027 Early Registration Advantage Banner */}
      <PromoBanner onClaimPromo={() => onOpenApplication()} />

      {/* 5. Institutional Confidence & 4 Pillars (Hospitals, Installment, Degrees) */}
      <ParentConfidenceSection />

      {/* 6. Real Campuses Section (Bonaberi & Mboppi) */}
      <CampusesPreviewSection
        onOpenApplication={() => onOpenApplication()}
        onNavigateToCampusesPage={() => onNavigate('campuses')}
      />

      {/* 7. Practical Experience & Included Student Advantages */}
      <PracticalExperienceSection />

      {/* 8. Campus News & Announcements Highlights */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div className="space-y-2">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                {language === 'fr' ? 'Actualités & Vie Universitaire' : 'Campus Updates & Academic News'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-serif-academic text-slate-900">
                {t.news.heading}
              </h2>
            </div>
            <button
              onClick={() => onNavigate('news')}
              className="text-xs font-bold text-slate-800 hover:text-slate-950 flex items-center gap-1.5"
            >
              <span>{language === 'fr' ? 'Toutes les actualités' : 'All news articles'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {NEWS_DATA.slice(0, 3).map((article) => (
              <div
                key={article.id}
                onClick={() => onSelectArticle(article)}
                className="group cursor-pointer bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 hover:border-slate-400 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                    <AuthenticVisualRenderer
                      visualKey={article.visualKey}
                      fallbackCategory={article.category}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      altText={article.title[language]}
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-slate-900/90 text-white font-bold text-[10px] uppercase px-2.5 py-0.5 rounded backdrop-blur-sm">
                        {article.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 space-y-2">
                    <div className="flex items-center gap-2 text-[11px] text-slate-500">
                      <Calendar className="w-3.5 h-3.5 text-slate-600" />
                      <span>{article.date}</span>
                      <span>•</span>
                      <span>{article.readTime}</span>
                    </div>
                    <h3 className="font-bold text-sm text-slate-900 group-hover:text-emerald-800 transition-colors line-clamp-2">
                      {article.title[language]}
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-2">
                      {article.excerpt[language]}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <span className="text-xs font-bold text-slate-800 group-hover:underline flex items-center gap-1">
                    {t.news.readMore} →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Real Photo Gallery */}
      <RealPhotoGallerySection onOpenApplication={() => onOpenApplication()} />

      {/* 10. Frequently Asked Questions */}
      <HomeFAQSection />

      {/* 11. Final Admissions & Contact Call To Action */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <GraduationCap className="w-4 h-4" />
            <span>{language === 'fr' ? 'Inscriptions Ouvertes • Session 2026 / 2027' : 'Admissions Open • 2026 / 2027 Session'}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-bold font-serif-academic text-white">
            {language === 'fr'
              ? 'Rejoignez l\'Institut Universitaire St Bernard à Douala'
              : 'Join St Bernard University Institute in Douala'}
          </h2>

          <p className="text-xs sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {language === 'fr'
              ? 'Sécurisez votre place pour la rentrée 2026-2027 en déposant votre dossier en ligne ou en contactant nos conseillers sur nos campus de Bonabéri et Mboppi.'
              : 'Secure your place for the 2026-2027 intake by submitting your application online or contacting our advisors on our Bonaberi and Mboppi campuses.'}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onOpenApplication()}
              className="w-full sm:w-auto px-8 py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
            >
              <GraduationCap className="w-5 h-5" />
              <span>{t.nav.applyNow}</span>
            </button>

            <button
              onClick={handleWhatsApp}
              className="w-full sm:w-auto px-6 py-3.5 bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-sm rounded-xl transition-all flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{language === 'fr' ? 'WhatsApp Admissions (+237 682 764 947)' : 'Admissions WhatsApp (+237 682 764 947)'}</span>
            </button>
          </div>

          <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>+237 682 764 947</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-amber-400" />
              <span>stbernarduniversityinstitute@gmail.com</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
