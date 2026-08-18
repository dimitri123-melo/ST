import React, { useState, useEffect } from 'react';
import { LanguageProvider } from './locales/useLanguage';
import { PageView, Programme, NewsArticle } from './types';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { WhatsAppFloat } from './components/common/WhatsAppFloat';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProgrammesPage } from './pages/ProgrammesPage';
import { AdmissionsPage } from './pages/AdmissionsPage';
import { CampusesPage } from './pages/CampusesPage';
import { StudentLifePage } from './pages/StudentLifePage';
import { NewsPage } from './pages/NewsPage';
import { FAQPage } from './pages/FAQPage';
import { ContactPage } from './pages/ContactPage';

// Modals
import { ApplicationModal } from './components/admissions/ApplicationModal';
import { OrientationModal } from './components/orientation/OrientationModal';
import { ProgrammeDetailModal } from './components/programmes/ProgrammeDetailModal';
import { NewsDetailModal } from './components/news/NewsDetailModal';
import { LegalModal } from './components/legal/LegalModal';

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
