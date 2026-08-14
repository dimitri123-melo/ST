import React, { useState } from 'react';
import { useLanguage } from '../../locales/useLanguage';
import { INSTITUTION } from '../../data/institution';
import { MessageCircle, X, ChevronRight, Sparkles, Send } from 'lucide-react';

export const WhatsAppFloat: React.FC = () => {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const quickTopics = [
    {
      title: language === 'fr' ? 'Inscriptions 2026/2027 & Bourse 60.000F' : '2026/2027 Admissions & 60,000F Bonus',
      msg: language === 'fr'
        ? `Bonjour, je souhaite des informations sur l'offre d'inscription 2026/2027 (Bourse 60.000 FCFA / PC / Smartphone) à St Bernard.`
        : `Hello, I would like information about the 2026/2027 early admission package (60,000 FCFA scholarship / Laptop / Smartphone) at St Bernard.`,
    },
    {
      title: language === 'fr' ? 'Orientation filières & Débouchés' : 'Career Orientation & Programmes',
      msg: language === 'fr'
        ? `Bonjour, je cherche une orientation pour choisir ma filière à l'Institut Universitaire St Bernard.`
        : `Hello, I am seeking guidance to choose my study programme at St Bernard University Institute.`,
    },
    {
      title: language === 'fr' ? 'Visiter le Campus Bonabéri ou Mboppi' : 'Visit Bonaberi or Mboppi Campus',
      msg: language === 'fr'
        ? `Bonjour, je souhaite visiter le campus de Bonabéri / Mboppi pour déposer mon dossier d'admission.`
        : `Hello, I would like to visit the Bonaberi / Mboppi campus to submit my registration file.`,
    },
  ];

  const handleSendMessage = (customText?: string) => {
    const text = encodeURIComponent(
      customText ||
        (language === 'fr'
          ? `Bonjour, je souhaite échanger avec un conseiller d'admission de l'Institut Universitaire St Bernard.`
          : `Hello, I would like to speak with an admissions counselor from St Bernard University Institute.`)
    );
    window.open(`https://wa.me/${INSTITUTION.contacts.primaryWhatsApp}?text=${text}`, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end">
      {/* Floating interactive modal */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-900 to-emerald-950 p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-emerald-700 flex items-center justify-center text-white border-2 border-emerald-400">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 rounded-full border-2 border-emerald-950"></span>
              </div>
              <div>
                <h4 className="text-sm font-bold">Admissions St Bernard</h4>
                <p className="text-[11px] text-emerald-200 flex items-center gap-1">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  {language === 'fr' ? 'En ligne • Réponse rapide' : 'Online • Fast reply'}
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-emerald-200 hover:text-white hover:bg-emerald-800 transition-colors"
              aria-label="Fermer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 space-y-3 bg-slate-50">
            <div className="bg-white p-3 rounded-xl border border-slate-200/80 text-xs text-slate-700 leading-relaxed shadow-sm">
              <p className="font-semibold text-emerald-950 mb-1">
                {language === 'fr' ? 'Bienvenue à l\'Institut St Bernard !' : 'Welcome to St Bernard University!'}
              </p>
              <p>
                {language === 'fr'
                  ? 'Comment pouvons-nous vous aider aujourd\'hui ? Choisissez un sujet ci-dessous ou écrivez-nous directement.'
                  : 'How can we assist you today? Select a topic below or write to us directly.'}
              </p>
            </div>

            <div className="space-y-1.5">
              {quickTopics.map((topic, i) => (
                <button
                  key={i}
                  onClick={() => handleSendMessage(topic.msg)}
                  className="w-full text-left p-2.5 rounded-xl bg-white hover:bg-emerald-50 border border-slate-200 hover:border-emerald-300 text-xs font-semibold text-slate-800 transition-all flex items-center justify-between group shadow-sm"
                >
                  <span className="truncate pr-2">{topic.title}</span>
                  <ChevronRight className="w-4 h-4 text-emerald-700 group-hover:translate-x-1 transition-transform shrink-0" />
                </button>
              ))}
            </div>

            <button
              onClick={() => handleSendMessage()}
              className="w-full py-2.5 px-4 bg-emerald-800 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-all shadow-md flex items-center justify-center gap-2"
            >
              <Send className="w-3.5 h-3.5" />
              <span>{language === 'fr' ? 'Démarrer une conversation' : 'Start WhatsApp Chat'}</span>
            </button>
          </div>
        </div>
      )}

      {/* Main trigger button */}
      <button
        id="btn-floating-whatsapp"
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-2.5 py-3 px-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 border-2 border-white/40"
        aria-label="Contacter sur WhatsApp"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-400"></span>
        </span>
        <MessageCircle className="w-6 h-6" />
        <span className="text-xs font-bold hidden sm:inline tracking-wide">
          {language === 'fr' ? 'WhatsApp Admissions' : 'Admissions WhatsApp'}
        </span>
      </button>
    </div>
  );
};
