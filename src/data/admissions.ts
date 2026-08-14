import { AdmissionFeeItem } from '../types';

export const ADMISSION_FEES_DATA: AdmissionFeeItem[] = [
  {
    category: {
      fr: 'Cycle BTS & HND',
      en: 'BTS & HND Cycle',
    },
    level: 'Baccalauréat / GCE A-Level',
    registrationFee: '30.000 FCFA',
    medicalFee: '5.000 FCFA',
    reprographyFee: '1.000 FCFA (Carte d\'étudiant)',
    tuitionNote: {
      fr: 'Frais de scolarité modérés payables en plusieurs tranches tout au long de l\'année académique.',
      en: 'Affordable tuition fees payable in flexible installments throughout the academic year.',
    },
    requiredDocs: {
      fr: [
        'Photocopie certifiée conforme du Baccalauréat ou du GCE Advanced Level',
        'Photocopie certifiée de l\'acte de naissance',
        '01 rame de papier format A4',
        '04 photos d\'identité 4x4 récentes',
        'Fiche d\'inscription dûment remplie',
      ],
      en: [
        'Certified copy of Baccalaureate or GCE Advanced Level certificate',
        'Certified copy of Birth Certificate',
        '01 ream of A4 paper',
        '04 recent passport-size photos',
        'Completed official registration form',
      ],
    },
  },
  {
    category: {
      fr: 'Cycle Licence Professionnelle / Bachelor Degree',
      en: 'Bachelor Degree / Professional Licence',
    },
    level: 'Bac + 2 (BTS, HND, DUT, DEUG ou équivalent)',
    registrationFee: '40.000 FCFA',
    medicalFee: '10.000 FCFA',
    reprographyFee: '1.000 FCFA (Carte d\'étudiant)',
    tuitionNote: {
      fr: 'En partenariat académique sous tutelle de l\'Université de Douala & Université de Buea. Paiement échelonné en tranches.',
      en: 'Under state academic tutelage of University of Douala & University of Buea. Flexible installment payments.',
    },
    requiredDocs: {
      fr: [
        'Photocopie certifiée du relevé de notes ou diplôme de BTS, HND, DUT ou Licence 2',
        'Photocopie certifiée du Baccalauréat ou GCE A-Level',
        'Photocopie certifiée de l\'acte de naissance',
        '01 rame de papier format A4',
        '04 photos d\'identité 4x4 récentes',
      ],
      en: [
        'Certified copy of BTS, HND, DUT or Year-2 transcript/diploma',
        'Certified copy of Baccalaureate or GCE A-Level',
        'Certified copy of Birth Certificate',
        '01 ream of A4 paper',
        '04 recent passport-size photos',
      ],
    },
  },
  {
    category: {
      fr: 'Cycle Master Professionnel',
      en: 'Professional Master Degree',
    },
    level: 'Bac + 3 (Licence, Bachelor, Ingénieur des travaux ou équivalent)',
    registrationFee: '50.000 FCFA',
    medicalFee: '10.000 FCFA',
    reprographyFee: '1.000 FCFA (Carte d\'étudiant)',
    folderStudyFee: '15.000 FCFA (Frais d\'étude de dossier)',
    tuitionNote: {
      fr: 'Scolarité indicative de 600.000 FCFA à 650.000 FCFA selon la filière (ex: Commerce: 600.000F, Industrie & Biomédical: 650.000F), payable en 3 ou 4 tranches.',
      en: 'Indicative tuition of 600,000 FCFA to 650,000 FCFA depending on faculty (e.g. Business: 600,000F, Industry & Biomedical: 650,000F), payable in installments.',
    },
    requiredDocs: {
      fr: [
        'Photocopie certifiée conforme du diplôme de Licence / Bachelor ou relevé de notes officiel',
        'Curriculum Vitae (CV) actualisé et lettre de motivation',
        'Photocopie certifiée de l\'acte de naissance',
        '01 rame de papier format A4',
        'Frais d\'étude de dossier : 15.000 FCFA',
      ],
      en: [
        'Certified copy of Bachelor Degree certificate or official final transcripts',
        'Updated Curriculum Vitae (CV) and cover letter',
        'Certified copy of Birth Certificate',
        '01 ream of A4 paper',
        'File assessment fee: 15,000 FCFA',
      ],
    },
  },
];

export const PROMOTION_2026_2027 = {
  academicYear: '2026 / 2027',
  title: {
    fr: 'Offre Exceptionnelle Rentrée 2026 / 2027',
    en: 'Exclusive Admission Offer — 2026 / 2027 Academic Year',
  },
  subheading: {
    fr: 'Inscrivez-vous avant Septembre 2026 et bénéficiez d\'avantages exclusifs !',
    en: 'Register before September 2026 and enjoy exclusive early enrollment advantages!',
  },
  deadline: 'Septembre 2026',
  legalNotice: {
    fr: 'Les candidats précoces peuvent bénéficier d\'avantages d\'admission spéciaux, sous réserve des conditions et modalités d\'éligibilité de l\'établissement.',
    en: 'Early applicants may benefit from special admission advantages, subject to the institution\'s terms and eligibility conditions.',
  },
  mainGiftOptions: [
    {
      id: 'scholarship',
      amount: '60.000 FCFA',
      title: {
        fr: 'Bourse d\'Études de 60.000 FCFA',
        en: '60,000 FCFA Tuition Scholarship',
      },
      description: {
        fr: 'Déduction directe de 60.000 FCFA accordée sur vos frais de pension académique.',
        en: 'Direct 60,000 FCFA deduction granted on your academic tuition installments.',
      },
      icon: 'BadgePercent',
      tag: { fr: 'Option A', en: 'Option A' },
    },
    {
      id: 'laptop',
      amount: 'PC Portable',
      title: {
        fr: 'Un Ordinateur Portable (Laptop)',
        en: 'A Student Laptop Computer',
      },
      description: {
        fr: 'Équipement informatique remis pour accompagner vos travaux pratiques, recherches et cours numériques.',
        en: 'Computer equipment provided to empower your coursework, research, and practical IT labs.',
      },
      icon: 'Laptop',
      tag: { fr: 'Option B', en: 'Option B' },
    },
    {
      id: 'smartphone',
      amount: 'Smartphone',
      title: {
        fr: 'Un Smartphone 4G / 5G',
        en: 'A Connected Smartphone',
      },
      description: {
        fr: 'Smartphone connecté pour accéder aux ressources pédagogiques et plateformes d\'e-learning.',
        en: 'Connected smartphone to access pedagogical resources and online student portals.',
      },
      icon: 'Smartphone',
      tag: { fr: 'Option C', en: 'Option C' },
    },
  ],
  complimentaryPerks: [
    {
      title: {
        fr: 'Couverture Santé 50% dans 3 Hôpitaux',
        en: '50% Health Insurance in 3 Partner Hospitals',
      },
      description: {
        fr: 'Prise en charge médicale et consultations à demi-tarif dans l\'un des 3 hôpitaux partenaires St Bernard.',
        en: 'Medical coverage and consultations at half price in any of the 3 partner St Bernard hospitals.',
      },
      icon: 'ShieldCheck',
    },
    {
      title: {
        fr: 'Cours d\'Auto-École Gratuit',
        en: 'Free Driving School Lessons',
      },
      description: {
        fr: 'Formation au permis de conduire offerte pour renforcer votre autonomie et vos compétences professionnelles.',
        en: 'Complimentary driving license training package to boost your personal and professional mobility.',
      },
      icon: 'Car',
    },
    {
      title: {
        fr: 'T-Shirt & Uniforme Universitaire Offerts',
        en: 'Free Student T-Shirt & Institutional Uniform',
      },
      description: {
        fr: 'Dotation vestimentaire institutionnelle et blouses de laboratoire pour les filières médico-sanitaires et techniques.',
        en: 'Official institutional wear and laboratory coats provided for biomedical and engineering students.',
      },
      icon: 'Shirt',
    },
  ],
};

export const ADMISSION_STEPS = [
  {
    step: 1,
    title: {
      fr: 'Découvrir nos filières',
      en: 'Discover Programmes',
    },
    desc: {
      fr: 'Explorez notre catalogue de formations en BTS, HND, Licence et Master dans 6 pôles de compétences.',
      en: 'Explore our catalog of BTS, HND, Bachelor and Master degrees across 6 academic disciplines.',
    },
  },
  {
    step: 2,
    title: {
      fr: 'Choisir votre cycle & campus',
      en: 'Choose Level & Campus',
    },
    desc: {
      fr: 'Optez pour le Campus Bonabéri ou le Campus Mboppi, en cours du jour ou cours du soir.',
      en: 'Select Bonaberi or Mboppi campus with day shift or evening shift options.',
    },
  },
  {
    step: 3,
    title: {
      fr: 'Vérifier les conditions d\'accès',
      en: 'Check Requirements',
    },
    desc: {
      fr: 'Assurez-vous d\'avoir le diplôme requis (Bac, GCE A/L, BTS/HND, Licence) selon le cycle visé.',
      en: 'Verify your qualifying degree (Bac, GCE A/L, BTS/HND, Bachelor) for your chosen cycle.',
    },
  },
  {
    step: 4,
    title: {
      fr: 'Bénéficier d\'une orientation gratuite',
      en: 'Get Free Orientation',
    },
    desc: {
      fr: 'Échangez directement avec un conseiller d\'admission sur place ou sur WhatsApp pour valider votre projet.',
      en: 'Chat with an admissions counselor on campus or via WhatsApp to validate your career goals.',
    },
  },
  {
    step: 5,
    title: {
      fr: 'Remplir la demande en ligne ou sur place',
      en: 'Submit Application',
    },
    desc: {
      fr: 'Soumettez vos informations via le formulaire web sécurisé ou rendez-vous au secrétariat.',
      en: 'Submit your details online via our portal or visit our admissions office in person.',
    },
  },
  {
    step: 6,
    title: {
      fr: 'Déposer les pièces justificatives',
      en: 'Submit Required Documents',
    },
    desc: {
      fr: 'Fournissez les photocopies de votre diplôme, acte de naissance, photos et 1 rame de papier A4.',
      en: 'Provide certified copies of your diploma, birth certificate, photos, and 1 ream of A4 paper.',
    },
  },
  {
    step: 7,
    title: {
      fr: 'Visiter le campus & finaliser',
      en: 'Visit Campus & Finalize',
    },
    desc: {
      fr: 'Découvrez les laboratoires, rencontrez l\'équipe pédagogique et réglez vos frais d\'inscription.',
      en: 'Tour our laboratories, meet faculty members, and settle your registration fees.',
    },
  },
  {
    step: 8,
    title: {
      fr: 'Recevoir votre carte & kit de rentrée',
      en: 'Receive ID Card & Welcome Kit',
    },
    desc: {
      fr: 'Obtenez votre carte d\'étudiant, votre uniforme et votre accès à l\'offre rentrée (Bourse / PC / Smartphone).',
      en: 'Receive your student ID card, uniform, and activate your early registration bonus.',
    },
  },
];
