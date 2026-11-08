/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

// Components
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { AuditWizardModal } from './components/AuditWizardModal';
import { QuoteModal } from './components/QuoteModal';

// Pages
import { HomePage } from './pages/HomePage';
import { ServicesHubPage } from './pages/ServicesHubPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { ProcessPage } from './pages/ProcessPage';
import { SectorsPage } from './pages/SectorsPage';
import { FaqPage } from './pages/FaqPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { KvkkPage } from './pages/KvkkPage';
import { CookiePage } from './pages/CookiePage';
import { NotFoundPage } from './pages/NotFoundPage';

// Scroll To Top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export function AppContent() {
  // Global Modals State
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quoteServiceTitle, setQuoteServiceTitle] = useState<string | undefined>(undefined);

  const handleOpenQuoteModal = (serviceTitle?: string) => {
    setQuoteServiceTitle(serviceTitle);
    setIsQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased flex flex-col selection:bg-orange-500 selection:text-white">
      <ScrollToTop />

      {/* Sticky Header Navigation */}
      <Navbar
        onOpenAuditModal={() => setIsAuditModalOpen(true)}
        onOpenQuote={() => handleOpenQuoteModal()}
      />

      {/* Main Content Viewport */}
      <main className="flex-1">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                onOpenAuditModal={() => setIsAuditModalOpen(true)}
                onOpenQuote={() => handleOpenQuoteModal()}
              />
            }
          />
          <Route
            path="/hakkimizda"
            element={
              <AboutPage
                onOpenAuditWizard={() => setIsAuditModalOpen(true)}
                onOpenQuoteModal={handleOpenQuoteModal}
              />
            }
          />
          <Route
            path="/hizmetlerimiz"
            element={
              <ServicesHubPage
                onOpenQuote={() => handleOpenQuoteModal()}
              />
            }
          />
          <Route
            path="/hizmetlerimiz/:slug"
            element={
              <ServiceDetailPage
                onOpenQuote={() => handleOpenQuoteModal()}
              />
            }
          />
          <Route
            path="/surec"
            element={
              <ProcessPage
                onOpenQuote={() => handleOpenQuoteModal()}
              />
            }
          />
          <Route
            path="/sektorler"
            element={
              <SectorsPage
                onOpenQuote={() => handleOpenQuoteModal()}
              />
            }
          />
          <Route
            path="/hizmet-bolgeleri/sakarya"
            element={
              <AboutPage
                onOpenAuditWizard={() => setIsAuditModalOpen(true)}
                onOpenQuoteModal={handleOpenQuoteModal}
              />
            }
          />
          <Route
            path="/sss"
            element={
              <FaqPage
                onOpenAuditWizard={() => setIsAuditModalOpen(true)}
                onOpenQuoteModal={handleOpenQuoteModal}
              />
            }
          />
          <Route
            path="/iletisim"
            element={
              <ContactPage
                onOpenAuditWizard={() => setIsAuditModalOpen(true)}
                onOpenQuoteModal={handleOpenQuoteModal}
              />
            }
          />
          <Route path="/kvkk" element={<KvkkPage />} />
          <Route path="/cerez-politikasi" element={<CookiePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer onOpenQuote={() => handleOpenQuoteModal()} />

      {/* Mobile Bottom Action Bar */}
      <MobileStickyBar
        onOpenQuote={() => handleOpenQuoteModal()}
      />

      {/* Global Interactive Modals */}
      <AuditWizardModal
        isOpen={isAuditModalOpen}
        onClose={() => setIsAuditModalOpen(false)}
        onOpenQuoteWithAudit={(summary) => handleOpenQuoteModal(summary)}
      />

      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        prefilledService={quoteServiceTitle}
      />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
