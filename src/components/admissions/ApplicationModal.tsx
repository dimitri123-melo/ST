import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../locales/useLanguage';
import { PROGRAMMES_DATA } from '../../data/programmes';
import { INSTITUTION } from '../../data/institution';
import { ApplicationFormData, DomainCategory } from '../../types';
import {
  X,
  GraduationCap,
  CheckCircle2,
  Send,
  MessageSquare,
  Sparkles,
  Phone,
  Building,
  Clock,
  HelpCircle,
  Lock,
} from 'lucide-react';

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialDomain?: string;
  initialProgramme?: string;
}

export const ApplicationModal: React.FC<ApplicationModalProps> = ({
  isOpen,
  onClose,
  initialDomain = '',
  initialProgramme = '',
}) => {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState<ApplicationFormData>({
    studentFullName: '',
    parentName: '',
    studentPhone: '',
    whatsappNumber: '',
    email: '',
    cityLocation: 'Douala',
    lastDegree: 'bacD',
    examStatus: 'obtained',
    interestedDomain: (initialDomain as DomainCategory) || 'biomedical',
    interestedProgramme: initialProgramme || 'Technicien(ne) en Imagerie Médicale (TIM) / Échographie',
    academicLevel: 'BTS',
    preferredCampus: 'bonaberi',
    preferredShift: 'day',
    needOrientation: 'no',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    if (initialDomain) {
      setFormData((prev) => ({ ...prev, interestedDomain: initialDomain as DomainCategory }));
    }
    if (initialProgramme) {
      setFormData((prev) => ({ ...prev, interestedProgramme: initialProgramme }));
    }
  }, [initialDomain, initialProgramme]);

  if (!isOpen) return null;

  const availableProgrammes = PROGRAMMES_DATA.filter(
    (p) => !formData.interestedDomain || p.domain === formData.interestedDomain
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!formData.studentFullName.trim()) {
      setErrorMsg(language === 'fr' ? 'Veuillez saisir le nom complet de l\'étudiant.' : 'Please enter the student\'s full name.');
      return;
    }
    if (!formData.studentPhone.trim() || !formData.whatsappNumber.trim()) {
      setErrorMsg(language === 'fr' ? 'Veuillez renseigner les numéros de téléphone et WhatsApp.' : 'Please enter both phone and WhatsApp numbers.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 400);
  };

  const forwardToWhatsApp = () => {
    const campusLabel =
      formData.preferredCampus === 'bonaberi'
        ? 'Campus Bonabéri (En face boulangerie de la Gare)'
        : formData.preferredCampus === 'mboppi'
        ? 'Campus Mboppi (Près de l\'entrée ECOBANK)'
        : 'Non déterminé';

    const text = encodeURIComponent(
      `*NOUVELLE CANDIDATURE / ADMISSION 2026-2027*\n` +
      `*Institut Universitaire St Bernard - Douala*\n\n` +
      `👤 *Étudiant:* ${formData.studentFullName}\n` +
      (formData.parentName ? `👨‍👩‍👧 *Parent / Tuteur:* ${formData.parentName}\n` : '') +
      `📞 *Téléphone:* ${formData.studentPhone}\n` +
      `💬 *WhatsApp:* ${formData.whatsappNumber}\n` +
      `📧 *Email:* ${formData.email || 'Non précisé'}\n` +
      `📍 *Ville:* ${formData.cityLocation}\n` +
      `🎓 *Dernier diplôme:* ${formData.lastDegree} (${formData.examStatus})\n` +
      `📚 *Filière sollicitée:* ${formData.interestedProgramme}\n` +
      `🏅 *Niveau d'études:* ${formData.academicLevel}\n` +
      `🏢 *Campus préféré:* ${campusLabel}\n` +
      `⏰ *Régime:* ${formData.preferredShift === 'day' ? 'Cours du jour' : 'Cours du soir'}\n` +
      `🎯 *Besoin d'orientation:* ${formData.needOrientation}\n` +
      (formData.message ? `📝 *Message:* ${formData.message}\n` : '') +
      `\n_Candidature transmise via le portail officiel de l'Institut Universitaire St Bernard._`
    );

    window.open(`https://wa.me/${INSTITUTION.contacts.primaryWhatsApp}?text=${text}`, '_blank');
  };

  const handleResetForm = () => {
    setIsSubmitted(false);
    setFormData({
      studentFullName: '',
      parentName: '',
      studentPhone: '',
      whatsappNumber: '',
      email: '',
      cityLocation: 'Douala',
      lastDegree: 'bacD',
      examStatus: 'obtained',
      interestedDomain: 'biomedical',
      interestedProgramme: 'Technicien(ne) en Imagerie Médicale (TIM) / Échographie',
      academicLevel: 'BTS',
      preferredCampus: 'bonaberi',
      preferredShift: 'day',
      needOrientation: 'no',
      message: '',
    });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4">
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
        
        {/* Modal Header */}
        <div className="bg-slate-900 p-5 sm:p-6 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400 block">
                {language === 'fr' ? 'Session 2026 / 2027 • Inscriptions Ouvertes' : '2026 / 2027 Session • Enrollment Open'}
              </span>
              <h3 className="text-base sm:text-lg font-bold">{t.admissions.applyFormTitle}</h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
          {isSubmitted ? (
            <div className="text-center py-8 space-y-6">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-1.5 max-w-md mx-auto">
                <h4 className="text-xl font-bold text-slate-900 font-serif-academic">
                  {language === 'fr' ? 'Dossier Pré-Enregistré avec Succès !' : 'Application Pre-Registered!'}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {language === 'fr'
                    ? 'Votre demande d\'admission 2026-2027 a été enregistrée. Pour finaliser votre réservation d\'avantage de rentrée (Bourse / Laptop / Téléphone), transmettez votre récapitulatif directement sur notre WhatsApp officiel.'
                    : 'Your 2026-2027 admission inquiry is recorded. To finalize your early perk (Scholarship / Laptop / Phone), submit the summary directly to our official WhatsApp.'}
                </p>
              </div>

              {/* Summary card */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-left text-xs text-slate-700 max-w-lg mx-auto space-y-2">
                <div className="flex justify-between border-b border-slate-200 pb-2 font-bold text-slate-900">
                  <span>{formData.studentFullName}</span>
                  <span className="text-emerald-800 uppercase">{formData.academicLevel}</span>
                </div>
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <div>
                    <span className="text-slate-400 block text-[10px]">Filière :</span>
                    <span className="font-semibold text-slate-800">{formData.interestedProgramme}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">Campus :</span>
                    <span className="font-semibold text-slate-800">
                      {formData.preferredCampus === 'bonaberi' ? 'Bonabéri' : 'Mboppi'}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">WhatsApp :</span>
                    <span className="font-semibold text-slate-800">{formData.whatsappNumber}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">Régime :</span>
                    <span className="font-semibold text-slate-800">
                      {formData.preferredShift === 'day' ? 'Cours du jour' : 'Cours du soir'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                <button
                  onClick={forwardToWhatsApp}
                  className="px-6 py-2.5 bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-200" />
                  <span>{language === 'fr' ? 'Transmettre sur WhatsApp (+237 682 764 947)' : 'Send to WhatsApp (+237 682 764 947)'}</span>
                </button>
                <button
                  onClick={handleResetForm}
                  className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl transition-colors"
                >
                  {language === 'fr' ? 'Nouvelle candidature' : 'New Application'}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Early notice */}
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-3.5 text-xs text-amber-950 flex items-start gap-2.5">
                <Sparkles className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block">
                    {language === 'fr' ? 'Session 2026/2027 • Inscriptions Anticipées' : '2026/2027 Session • Early Intake'}
                  </span>
                  <span className="text-slate-700">
                    {language === 'fr'
                      ? 'Les candidats validant leur inscription avant septembre 2026 bénéficient d\'une bourse de 60.000 FCFA, d\'un Laptop ou d\'un Smartphone.'
                      : 'Candidates enrolling before September 2026 can benefit from a 60,000 FCFA scholarship, a Laptop or a Smartphone.'}
                  </span>
                </div>
              </div>

              {errorMsg && (
                <div className="p-3 bg-rose-50 border border-rose-200 text-rose-800 text-xs rounded-xl font-medium">
                  {errorMsg}
                </div>
              )}

              {/* Section 1: Candidate Identity */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 border-b border-slate-100 pb-1">
                  1. {language === 'fr' ? 'Identité du Candidat' : 'Applicant Information'}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {t.form.studentName} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.studentFullName}
                      onChange={(e) => setFormData({ ...formData, studentFullName: e.target.value })}
                      placeholder={t.form.studentNamePlaceholder}
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-slate-900 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {t.form.parentName}
                    </label>
                    <input
                      type="text"
                      value={formData.parentName}
                      onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      placeholder={t.form.parentNamePlaceholder}
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-slate-900 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {t.form.whatsapp} *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.whatsappNumber}
                      onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
                      placeholder="Ex: +237 682 764 947"
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-slate-900 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {t.form.phone} *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.studentPhone}
                      onChange={(e) => setFormData({ ...formData, studentPhone: e.target.value })}
                      placeholder="Ex: +237 682 764 947"
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-slate-900 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {t.form.email}
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="votre.email@exemple.com"
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-slate-900 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {t.form.city}
                    </label>
                    <input
                      type="text"
                      value={formData.cityLocation}
                      onChange={(e) => setFormData({ ...formData, cityLocation: e.target.value })}
                      placeholder="Douala"
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-slate-900 focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Section 2: Academic Background */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 border-b border-slate-100 pb-1">
                  2. {language === 'fr' ? 'Niveau Scolaire & Diplôme Précédent' : 'Academic Background'}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {t.form.lastDegree}
                    </label>
                    <select
                      value={formData.lastDegree}
                      onChange={(e) => setFormData({ ...formData, lastDegree: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-slate-900 focus:outline-none bg-white"
                    >
                      <option value="bacD">{t.form.lastDegreeOptions.bacD}</option>
                      <option value="bacC">{t.form.lastDegreeOptions.bacC}</option>
                      <option value="bacA">{t.form.lastDegreeOptions.bacA}</option>
                      <option value="bacF">{t.form.lastDegreeOptions.bacF}</option>
                      <option value="bacTI">{t.form.lastDegreeOptions.bacTI}</option>
                      <option value="bacG">{t.form.lastDegreeOptions.bacG}</option>
                      <option value="gceAL">{t.form.lastDegreeOptions.gceAL}</option>
                      <option value="btsHnd">{t.form.lastDegreeOptions.btsHnd}</option>
                      <option value="licence">{t.form.lastDegreeOptions.licence}</option>
                      <option value="other">{t.form.lastDegreeOptions.other}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {t.form.examStatus}
                    </label>
                    <select
                      value={formData.examStatus}
                      onChange={(e) => setFormData({ ...formData, examStatus: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-slate-900 focus:outline-none bg-white"
                    >
                      <option value="obtained">{t.form.examStatusOptions.obtained}</option>
                      <option value="awaitingResults">{t.form.examStatusOptions.awaitingResults}</option>
                      <option value="studying">{t.form.examStatusOptions.studying}</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Section 3: Desired Programme & Campus */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 border-b border-slate-100 pb-1">
                  3. {language === 'fr' ? 'Choix de la Filière & Campus' : 'Programme & Campus Choice'}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {t.form.interestedDomain}
                    </label>
                    <select
                      value={formData.interestedDomain}
                      onChange={(e) => {
                        const newDomain = e.target.value as DomainCategory;
                        const matching = PROGRAMMES_DATA.filter((p) => p.domain === newDomain);
                        setFormData({
                          ...formData,
                          interestedDomain: newDomain,
                          interestedProgramme: matching[0]?.name[language] || '',
                        });
                      }}
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-slate-900 focus:outline-none bg-white"
                    >
                      <option value="biomedical">Sciences Biomédicales & Imagerie (TIM)</option>
                      <option value="engineering">Industrie, Génie Logiciel & IA</option>
                      <option value="business">Commerce, Douane & Gestion</option>
                      <option value="agriculture">Sciences Agro-Pastorales & Pêche</option>
                      <option value="social_sciences">Génie Culinaire & Mode</option>
                      <option value="education">Sciences de l'Éducation & Droit</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {t.form.interestedProgramme}
                    </label>
                    <select
                      value={formData.interestedProgramme}
                      onChange={(e) => setFormData({ ...formData, interestedProgramme: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-slate-900 focus:outline-none bg-white"
                    >
                      {availableProgrammes.map((prog) => (
                        <option key={prog.id} value={prog.name[language]}>
                          {prog.name[language]}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {t.form.academicLevel}
                    </label>
                    <select
                      value={formData.academicLevel}
                      onChange={(e) => setFormData({ ...formData, academicLevel: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-slate-900 focus:outline-none bg-white"
                    >
                      <option value="BTS">BTS (Brevet de Technicien Supérieur - 2 ans)</option>
                      <option value="HND">HND (Higher National Diploma - 2 years)</option>
                      <option value="LICENCE">Licence Professionnelle / Bachelor (1 an post Bac+2)</option>
                      <option value="MASTER">Master Professionnel (2 ans post Licence)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {t.form.preferredCampus}
                    </label>
                    <select
                      value={formData.preferredCampus}
                      onChange={(e) => setFormData({ ...formData, preferredCampus: e.target.value as any })}
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-slate-900 focus:outline-none bg-white"
                    >
                      <option value="bonaberi">Campus Bonabéri (En face boulangerie de la Gare)</option>
                      <option value="mboppi">Campus Mboppi (Près de l'entrée ECOBANK)</option>
                      <option value="undecided">{t.form.campusOptions.undecided}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {t.form.preferredShift}
                    </label>
                    <select
                      value={formData.preferredShift}
                      onChange={(e) => setFormData({ ...formData, preferredShift: e.target.value as any })}
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-slate-900 focus:outline-none bg-white"
                    >
                      <option value="day">{t.form.shiftOptions.day}</option>
                      <option value="evening">{t.form.shiftOptions.evening}</option>
                      <option value="undecided">{t.form.shiftOptions.undecided}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {t.form.needOrientation}
                    </label>
                    <select
                      value={formData.needOrientation}
                      onChange={(e) => setFormData({ ...formData, needOrientation: e.target.value as any })}
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-slate-900 focus:outline-none bg-white"
                    >
                      <option value="no">{t.form.orientationOptions.no}</option>
                      <option value="yes">{t.form.orientationOptions.yes}</option>
                      <option value="partial">{t.form.orientationOptions.partial}</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {t.form.message}
                  </label>
                  <textarea
                    rows={2}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t.form.messagePlaceholder}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-slate-900 focus:outline-none"
                  ></textarea>
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100">
                <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
                  <Lock className="w-3 h-3 text-slate-400" />
                  <span>{language === 'fr' ? 'Vos informations sont traitées de manière confidentielle.' : 'Your data is handled confidentially.'}</span>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <Send className="w-4 h-4 text-amber-400" />
                  <span>{isSubmitting ? t.form.submitting : t.form.submitBtn}</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
