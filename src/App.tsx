import React, { useState, useEffect } from 'react';
import { LanguageProvider } from './locales/useLanguage';
import { PageView, Programme, NewsArticle } from './types';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { WhatsAppFloat } from './components/common/WhatsAppFloat';

// Pages (Lazy Loaded)
const HomePage = React.lazy(() => import('./pages/HomePage').then(m => ({ default: m.HomePage })));
const AboutPage = React.lazy(() => import('./pages/AboutPage').then(m => ({ default: m.AboutPage })));
const ProgrammesPage = React.lazy(() => import('./pages/ProgrammesPage').then(m => ({ default: m.ProgrammesPage })));
const AdmissionsPage = React.lazy(() => import('./pages/AdmissionsPage').then(m => ({ default: m.AdmissionsPage })));
const CampusesPage = React.lazy(() => import('./pages/CampusesPage').then(m => ({ default: m.CampusesPage })));
const StudentLifePage = React.lazy(() => import('./pages/StudentLifePage').then(m => ({ default: m.StudentLifePage })));
const NewsPage = React.lazy(() => import('./pages/NewsPage').then(m => ({ default: m.NewsPage })));
const FAQPage = React.lazy(() => import('./pages/FAQPage').then(m => ({ default: m.FAQPage })));
const ContactPage = React.lazy(() => import('./pages/ContactPage').then(m => ({ default: m.ContactPage })));

// Modals (Lazy Loaded)
const ApplicationModal = React.lazy(() => import('./components/admissions/ApplicationModal').then(m => ({ default: m.ApplicationModal })));
const OrientationModal = React.lazy(() => import('./components/orientation/OrientationModal').then(m => ({ default: m.OrientationModal })));
const ProgrammeDetailModal = React.lazy(() => import('./components/programmes/ProgrammeDetailModal').then(m => ({ default: m.ProgrammeDetailModal })));
const NewsDetailModal = React.lazy(() => import('./components/news/NewsDetailModal').then(m => ({ default: m.NewsDetailModal })));
const LegalModal = React.lazy(() => import('./components/legal/LegalModal').then(m => ({ default: m.LegalModal })));

function MainAppContent() {
  const [currentPage, setCurrentPage] = useState<PageView>('home');

  // Modals state
  const [isApplicationModalOpen, setIsApplicationModalOpen] = useState(false);
  const [appModalDomain, setAppModalDomain] = useState<string>('');
  const [appModalProgramme, setAppModalProgramme] = useState<string>('');

  const [isOrientationModalOpen, setIsOrientationModalOpen] = useState(false);
  const [selectedProgramme, setSelectedProgramme] = useState<Programme | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);
  const [legalModalType, setLegalModalType] = useState<'terms' | 'privacy' | null>(null);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handleOpenApplication = (domain?: string, programmeName?: string) => {
    setAppModalDomain(domain || '');
    setAppModalProgramme(programmeName || '');
    setIsApplicationModalOpen(true);
  };

  const handleOpenOrientation = () => {
    setIsOrientationModalOpen(true);
  };

  const handleNavigate = (page: PageView) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-emerald-800 selection:text-amber-300 font-sans">
      {/* 1. Header & Navigation */}
      <Navbar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        onOpenApplication={() => handleOpenApplication()}
        onOpenOrientation={handleOpenOrientation}
      />

      {/* 2. Main Page Views */}
      <main className="flex-grow">
        <React.Suspense fallback={<div className="min-h-[50vh] flex items-center justify-center text-emerald-800 font-bold animate-pulse">Chargement / Loading...</div>}>
          {currentPage === 'home' && (
            <HomePage
              onOpenApplication={handleOpenApplication}
              onOpenOrientation={handleOpenOrientation}
              onSelectProgramme={(prog) => setSelectedProgramme(prog)}
              onSelectArticle={(article) => setSelectedArticle(article)}
              onNavigate={handleNavigate}
            />
          )}

          {currentPage === 'about' && (
            <AboutPage
              onOpenApplication={handleOpenApplication}
              onOpenOrientation={handleOpenOrientation}
              onNavigate={handleNavigate}
            />
          )}

          {currentPage === 'programmes' && (
            <ProgrammesPage
              onSelectProgramme={(prog) => setSelectedProgramme(prog)}
              onOpenApplication={handleOpenApplication}
              onOpenOrientation={handleOpenOrientation}
            />
          )}

          {currentPage === 'admissions' && (
            <AdmissionsPage
              onOpenApplication={handleOpenApplication}
              onOpenOrientation={handleOpenOrientation}
            />
          )}

          {currentPage === 'campuses' && (
            <CampusesPage
              onOpenApplication={handleOpenApplication}
            />
          )}

          {currentPage === 'student-life' && (
            <StudentLifePage
              onOpenApplication={() => handleOpenApplication()}
              onOpenOrientation={handleOpenOrientation}
            />
          )}

          {currentPage === 'news' && (
            <NewsPage
              onSelectArticle={(article) => setSelectedArticle(article)}
            />
          )}

          {currentPage === 'faq' && (
            <FAQPage
              onOpenApplication={() => handleOpenApplication()}
              onOpenOrientation={handleOpenOrientation}
            />
          )}

          {currentPage === 'contact' && (
            <ContactPage />
          )}
        </React.Suspense>
      </main>

      {/* 3. Footer */}
      <Footer
        setCurrentPage={setCurrentPage}
        onOpenApplication={() => handleOpenApplication()}
        onOpenOrientation={handleOpenOrientation}
        onOpenLegalModal={(type) => setLegalModalType(type)}
      />

      {/* 4. Floating WhatsApp Quick Contact Button */}
      <WhatsAppFloat />

      {/* 5. Modals & Overlays */}
      <React.Suspense fallback={null}>
        <ApplicationModal
          isOpen={isApplicationModalOpen}
          onClose={() => setIsApplicationModalOpen(false)}
          initialDomain={appModalDomain}
          initialProgramme={appModalProgramme}
        />

        <OrientationModal
          isOpen={isOrientationModalOpen}
          onClose={() => setIsOrientationModalOpen(false)}
          onSelectProgrammeForApply={(domain, progName) => {
            handleOpenApplication(domain, progName);
          }}
        />

        <ProgrammeDetailModal
          programme={selectedProgramme}
          onClose={() => setSelectedProgramme(null)}
          onApply={(domain, progName) => {
            setSelectedProgramme(null);
            handleOpenApplication(domain, progName);
          }}
        />

        <NewsDetailModal
          article={selectedArticle}
          onClose={() => setSelectedArticle(null)}
        />

        <LegalModal
          type={legalModalType}
          onClose={() => setLegalModalType(null)}
        />
      </React.Suspense>
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <MainAppContent />
    </LanguageProvider>
  );
}
