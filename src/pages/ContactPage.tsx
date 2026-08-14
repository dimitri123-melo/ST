import React, { useState } from 'react';
import { useLanguage } from '../locales/useLanguage';
import { INSTITUTION } from '../data/institution';
import {
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  Clock,
  Send,
  CheckCircle2,
  Building2,
  Navigation,
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const { t, language } = useLanguage();

  const [formName, setFormName] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formCampus, setFormCampus] = useState('bonaberi');
  const [formSubject, setFormSubject] = useState('admissions');
  const [formMessage, setFormMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const openWhatsApp = (customMsg?: string) => {
    const text = encodeURIComponent(
      customMsg ||
        (language === 'fr'
          ? "Bonjour, je souhaite contacter l'Institut Universitaire St Bernard pour des informations sur les inscriptions."
          : "Hello, I would like to contact St Bernard University Institute for admission information.")
    );
    window.open(`https://wa.me/${INSTITUTION.contacts.primaryWhatsApp}?text=${text}`, '_blank');
  };

  const handleDirections = (campus: 'bonaberi' | 'mboppi') => {
    const query = encodeURIComponent(
      campus === 'bonaberi'
        ? 'Boulangerie de la Gare Bonaberi Douala Cameroon'
        : 'Ecobank Mboppi Douala Cameroon'
    );
    window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank');
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* 1. Header Banner */}
      <section className="bg-slate-900 text-white py-14 sm:py-18 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-800 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <Phone className="w-3.5 h-3.5 text-amber-400" />
            <span>{language === 'fr' ? 'Accès Campus & Informations' : 'Campus Access & Contacts'}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif-academic text-white">
            {language === 'fr' ? 'Contactez l\'Institut Universitaire St Bernard' : 'Contact St Bernard University Institute'}
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {language === 'fr'
              ? 'Nos conseillers d\'orientation et secrétariats académiques vous accueillent sur nos campus de Bonabéri et Mboppi à Douala.'
              : 'Our guidance counselors and academic administration welcome you at our Bonaberi and Mboppi campuses in Douala.'}
          </p>
        </div>
      </section>

      {/* 2. Main Contact Grid */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Campus Cards & Official Contacts */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Campus A: Bonabéri */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <span className="bg-amber-500 text-slate-950 font-bold text-[10px] uppercase px-2.5 py-0.5 rounded">
                  CAMPUS A (BONABÉRI)
                </span>
                <span className="text-xs font-semibold text-slate-600">Douala</span>
              </div>
              <h3 className="text-base font-bold text-slate-900">
                {INSTITUTION.locations.campusA.name[language]}
              </h3>
              <p className="text-xs text-slate-600 flex items-start gap-1.5 leading-relaxed">
                <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />
                <span>{INSTITUTION.locations.campusA.landmark[language]}</span>
              </p>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                <button
                  onClick={() => handleDirections('bonaberi')}
                  className="text-slate-700 hover:text-slate-950 font-semibold flex items-center gap-1"
                >
                  <Navigation className="w-3 h-3 text-slate-500" />
                  <span>{language === 'fr' ? 'Itinéraire' : 'Directions'}</span>
                </button>
                <a
                  href={`tel:${INSTITUTION.contacts.primaryPhone}`}
                  className="font-bold text-emerald-800 hover:underline"
                >
                  {INSTITUTION.contacts.primaryPhone}
                </a>
              </div>
            </div>

            {/* Campus B: Mboppi */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <span className="bg-amber-500 text-slate-950 font-bold text-[10px] uppercase px-2.5 py-0.5 rounded">
                  CAMPUS B (MBOPPI)
                </span>
                <span className="text-xs font-semibold text-slate-600">Douala</span>
              </div>
              <h3 className="text-base font-bold text-slate-900">
                {INSTITUTION.locations.campusB.name[language]}
              </h3>
              <p className="text-xs text-slate-600 flex items-start gap-1.5 leading-relaxed">
                <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />
                <span>{INSTITUTION.locations.campusB.landmark[language]}</span>
              </p>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                <button
                  onClick={() => handleDirections('mboppi')}
                  className="text-slate-700 hover:text-slate-950 font-semibold flex items-center gap-1"
                >
                  <Navigation className="w-3 h-3 text-slate-500" />
                  <span>{language === 'fr' ? 'Itinéraire' : 'Directions'}</span>
                </button>
                <a
                  href={`tel:${INSTITUTION.contacts.primaryPhone}`}
                  className="font-bold text-emerald-800 hover:underline"
                >
                  {INSTITUTION.contacts.primaryPhone}
                </a>
              </div>
            </div>

            {/* Direct Lines & WhatsApp */}
            <div className="bg-slate-900 text-white rounded-2xl p-6 space-y-4">
              <h3 className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                {language === 'fr' ? 'Coordonnées Officielles' : 'Official Channels'}
              </h3>
              <div className="space-y-2.5 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-slate-300">Téléphone Principal :</span>
                  <span className="font-bold text-white">{INSTITUTION.contacts.primaryPhone}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-300">WhatsApp Admissions :</span>
                  <span className="font-bold text-emerald-400">+{INSTITUTION.contacts.primaryWhatsApp}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-300">Email Officiel :</span>
                  <span className="font-bold text-white text-[11px]">{INSTITUTION.contacts.email}</span>
                </div>
              </div>

              <button
                onClick={() => openWhatsApp()}
                className="w-full py-2.5 bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-2 mt-2"
              >
                <MessageSquare className="w-4 h-4 text-emerald-200" />
                <span>{language === 'fr' ? 'Discussion WhatsApp Directe' : 'Direct WhatsApp Chat'}</span>
              </button>
            </div>

            {/* Opening Hours */}
            <div className="p-4 rounded-xl bg-white text-xs text-slate-700 space-y-1.5 border border-slate-200">
              <span className="font-bold text-slate-900 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-slate-500" />
                {language === 'fr' ? 'Horaires d\'ouverture des secrétariats :' : 'Admissions Desk Hours:'}
              </span>
              <p className="text-[11px] text-slate-600 pl-5">
                • {language === 'fr' ? 'Lundi à Vendredi : 07h30 - 18h30' : 'Monday to Friday: 07:30 - 18:30'}
              </p>
              <p className="text-[11px] text-slate-600 pl-5">
                • {language === 'fr' ? 'Samedi : 08h00 - 15h00 (Inscriptions & Cours du soir)' : 'Saturday: 08:00 - 15:00 (Registration & Evening Classes)'}
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Message Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
              <div>
                <h3 className="text-xl font-bold font-serif-academic text-slate-900">
                  {language === 'fr' ? 'Formulaire de Contact & Renseignements' : 'Inquiry & Message Form'}
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  {language === 'fr'
                    ? 'Transmettez votre demande pour recevoir une réponse personnalisée de notre service pédagogique.'
                    : 'Submit your question to receive guidance from our academic admissions office.'}
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-xl bg-slate-50 border border-slate-200 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6 text-amber-400" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-base">
                    {language === 'fr' ? 'Message Transmis avec Succès !' : 'Inquiry Sent Successfully!'}
                  </h4>
                  <p className="text-xs text-slate-600 max-w-md mx-auto">
                    {language === 'fr'
                      ? 'Merci de votre intérêt. Nos conseillers d\'orientation vous contacteront très rapidement.'
                      : 'Thank you for reaching out. Our guidance team will get back to you promptly.'}
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-3 px-4 py-2 bg-slate-900 text-white text-xs font-bold rounded-lg hover:bg-slate-800"
                  >
                    {language === 'fr' ? 'Envoyer un autre message' : 'Send another message'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700 block">
                        {language === 'fr' ? 'Nom et Prénom *' : 'Full Name *'}
                      </label>
                      <input
                        type="text"
                        required
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                        placeholder="Ex: Kuete Alexandre"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-slate-900 focus:outline-none"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700 block">
                        {language === 'fr' ? 'Numéro de Téléphone / WhatsApp *' : 'Phone / WhatsApp Number *'}
                      </label>
                      <input
                        type="tel"
                        required
                        value={formPhone}
                        onChange={(e) => setFormPhone(e.target.value)}
                        placeholder="Ex: +237 682 764 947"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-slate-900 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700 block">
                        {language === 'fr' ? 'Campus Souhaité' : 'Preferred Campus'}
                      </label>
                      <select
                        value={formCampus}
                        onChange={(e) => setFormCampus(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-slate-900 focus:outline-none bg-white"
                      >
                        <option value="bonaberi">Campus Bonabéri (En face boulangerie de la Gare)</option>
                        <option value="mboppi">Campus Mboppi (Près de l'entrée ECOBANK)</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700 block">
                        {language === 'fr' ? 'Objet de la Demande' : 'Subject'}
                      </label>
                      <select
                        value={formSubject}
                        onChange={(e) => setFormSubject(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-slate-900 focus:outline-none bg-white"
                      >
                        <option value="admissions">{language === 'fr' ? 'Inscription & Admission 2026/2027' : 'Enrollment & Admission'}</option>
                        <option value="orientation">{language === 'fr' ? 'Orientation vers une filière' : 'Career Orientation'}</option>
                        <option value="tuition">{language === 'fr' ? 'Bourses & Frais de scolarité' : 'Grants & Tuition'}</option>
                        <option value="other">{language === 'fr' ? 'Autre demande' : 'Other'}</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 block">
                      {language === 'fr' ? 'Votre Message *' : 'Your Message *'}
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formMessage}
                      onChange={(e) => setFormMessage(e.target.value)}
                      placeholder={language === 'fr' ? 'Précisez votre demande...' : 'Details of your inquiry...'}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-slate-900 focus:outline-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm rounded-xl transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4 text-amber-400" />
                    <span>{language === 'fr' ? 'Envoyer mon Message' : 'Submit Inquiry'}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
