import { Programme } from '../types';

export interface DomainInfoItem {
  id: string;
  name: {
    fr: string;
    en: string;
  };
  shortName: {
    fr: string;
    en: string;
  };
  description: {
    fr: string;
    en: string;
  };
  color: string;
  icon: string;
  badgeColor: string;
  coverImage: string;
}

export const DOMAIN_INFO: Record<string, DomainInfoItem> = {
  biomedical: {
    id: 'biomedical',
    name: {
      fr: 'Sciences Biomédicales & Médico-Sanitaires',
      en: 'Biomedical & Health Sciences',
    },
    shortName: {
      fr: 'Sciences Biomédicales',
      en: 'Biomedical Sciences',
    },
    description: {
      fr: 'Formations de haut niveau pour les futurs professionnels de santé avec stages immersifs dans nos 3 hôpitaux partenaires St Bernard.',
      en: 'High-level training for healthcare professionals with immersive clinical internships in our 3 partner St Bernard hospitals.',
    },
    color: 'emerald',
    icon: 'Stethoscope',
    badgeColor: 'bg-emerald-50 text-emerald-800 border-emerald-200',
    coverImage: '',
  },
  engineering: {
    id: 'engineering',
    name: {
      fr: 'Industrie et Technologie',
      en: 'Industry & Technology',
    },
    shortName: {
      fr: 'Industrie & Technologie',
      en: 'Industry & Technology',
    },
    description: {
      fr: 'Filières d\'ingénierie appliquée, génie logiciel, mécatronique, électrotechnique, intelligence artificielle et travaux publics.',
      en: 'Applied engineering, software engineering, mechatronics, electrical engineering, artificial intelligence and civil works.',
    },
    color: 'sky',
    icon: 'Cpu',
    badgeColor: 'bg-sky-50 text-sky-800 border-sky-200',
    coverImage: '',
  },
  business: {
    id: 'business',
    name: {
      fr: 'Commerce et Gestion',
      en: 'Business & Management',
    },
    shortName: {
      fr: 'Commerce & Gestion',
      en: 'Business & Management',
    },
    description: {
      fr: 'Comptabilité, Banque et Finance, Douane et Transit, Marketing Digital, Logistique et Management des Ressources Humaines.',
      en: 'Accountancy, Banking & Finance, Customs & Transit, Digital Marketing, Logistics and Human Resource Management.',
    },
    color: 'amber',
    icon: 'Briefcase',
    badgeColor: 'bg-amber-50 text-amber-900 border-amber-200',
    coverImage: '',
  },
  commerce: {
    id: 'business',
    name: {
      fr: 'Commerce et Gestion',
      en: 'Business & Management',
    },
    shortName: {
      fr: 'Commerce & Gestion',
      en: 'Business & Management',
    },
    description: {
      fr: 'Comptabilité, Banque et Finance, Douane et Transit, Marketing Digital, Logistique et Management des Ressources Humaines.',
      en: 'Accountancy, Banking & Finance, Customs & Transit, Digital Marketing, Logistics and Human Resource Management.',
    },
    color: 'amber',
    icon: 'Briefcase',
    badgeColor: 'bg-amber-50 text-amber-900 border-amber-200',
    coverImage: '',
  },
  agriculture: {
    id: 'agriculture',
    name: {
      fr: 'Agriculture & Sciences Agro-Pastorales',
      en: 'Agriculture & Agro-Pastoral Sciences',
    },
    shortName: {
      fr: 'Agriculture',
      en: 'Agriculture',
    },
    description: {
      fr: 'Aquaculture, production végétale et animale, transformation alimentaire, conseil agro-pastoral et hydraulique agricole.',
      en: 'Aquaculture, crop and animal production, food transformation, agro-pastoral consulting and agricultural hydraulics.',
    },
    color: 'green',
    icon: 'Sprout',
    badgeColor: 'bg-emerald-50 text-emerald-800 border-emerald-200',
    coverImage: '',
  },
  social_sciences: {
    id: 'social_sciences',
    name: {
      fr: 'Sciences Sociales & Arts Appliqués',
      en: 'Social Sciences & Applied Arts',
    },
    shortName: {
      fr: 'Sciences Sociales',
      en: 'Social Sciences',
    },
    description: {
      fr: 'Génie culinaire, design de mode, gestion hôtelière et restauration, art gastronomique et infographie web design.',
      en: 'Culinary arts, fashion design, hotel & catering management, gastronomic arts and graphic/web design.',
    },
    color: 'rose',
    icon: 'Palette',
    badgeColor: 'bg-rose-50 text-rose-800 border-rose-200',
    coverImage: '',
  },
  education: {
    id: 'education',
    name: {
      fr: 'Sciences de l\'Éducation & Juridique',
      en: 'Education Sciences & Legal Studies',
    },
    shortName: {
      fr: 'Sciences de l\'Éducation',
      en: 'Education Sciences',
    },
    description: {
      fr: 'Éducation spécialisée, administration scolaire, didactique et droit des affaires pour l\'encadrement éducatif.',
      en: 'Special education, school administration, curriculum development and corporate law.',
    },
    color: 'indigo',
    icon: 'Scale',
    badgeColor: 'bg-indigo-50 text-indigo-800 border-indigo-200',
    coverImage: '',
  },
};

export const PROGRAMMES_DATA: Programme[] = [
  // ================= BIOMEDICAL SCIENCES =================
  {
    id: 'tim-imagerie-medicale',
    code: 'TIM-01',
    name: {
      fr: 'Technicien(ne) en Imagerie Médicale (TIM) / Échographie',
      en: 'Medical Imaging Technology (TIM) & Ultrasonography',
    },
    domain: 'biomedical',
    level: ['BTS', 'HND', 'LICENCE', 'MASTER'],
    description: {
      fr: 'Formation d\'élite pour maîtriser les équipements de radiographie, scanner, IRM et échographie avec immersion clinique dans nos centres hospitaliers.',
      en: 'Elite clinical training to master radiography, CT scanning, MRI, and ultrasonography with hospital immersion in partner facilities.',
    },
    duration: {
      fr: 'BTS/HND : 2 ans | Licence : 1 an (après Bac+2) | Master : 2 ans',
      en: 'BTS/HND: 2 years | Bachelor/Licence: 1 year (post Bac+2) | Master: 2 years',
    },
    shifts: {
      fr: 'Cours du jour & Cours du soir',
      en: 'Day classes & Evening classes',
    },
    campuses: ['bonaberi', 'mboppi'],
    requirements: {
      fr: ['Baccalauréat C, D, F8 ou GCE A-Level scientifique (Sciences)', 'Relevé de notes officiel', 'Acte de naissance'],
      en: ['GCE A-Level Sciences / Baccalaureate C, D, F8', 'Official transcripts', 'Birth certificate'],
    },
    curriculumHighlights: {
      fr: ['Radiologie conventionnelle et numérique', 'Échographie générale et obstétricale', 'Radioprotection et sécurité des patients', 'Techniques d\'imagerie par tomodensitométrie (Scanner) & IRM', 'Stages pratiques en milieu hospitalier St Bernard'],
      en: ['Conventional and digital radiography', 'General and obstetrical ultrasound', 'Radiation protection & patient safety', 'CT-Scan & MRI imaging techniques', 'Clinical internships at St Bernard hospitals'],
    },
    careerOutcomes: {
      fr: ['Technicien supérieur en imagerie médicale en hôpitaux et cliniques', 'Manipulateur en électroradiologie médicale', 'Spécialiste d\'application pour constructeurs d\'imagerie', 'Responsable de centre de radiologie et d\'échographie'],
      en: ['Senior medical imaging technologist in hospitals and clinics', 'Radiologic technologist', 'Clinical application specialist', 'Radiology and diagnostic center manager'],
    },
    featured: true,
    specialFlyerNote: {
      fr: 'Filière mise en avant sur nos affiches officielles 2026/2027. Pension indicative : 365.000 Fcfa (payable en tranches).',
      en: 'Featured specialty on official 2026/2027 posters. Indicative tuition: 365,000 FCFA (payable in installments).',
    },
  },
  {
    id: 'sciences-infirmieres',
    code: 'NUR-02',
    name: {
      fr: 'Sciences Infirmières',
      en: 'Nursing Sciences',
    },
    domain: 'biomedical',
    level: ['BTS', 'HND', 'LICENCE', 'MASTER'],
    description: {
      fr: 'Acquisition approfondie des compétences en soins infirmiers généraux, urgences, réanimation et gestion des unités de soins.',
      en: 'In-depth nursing skills in general care, intensive care, emergency response, and clinical unit leadership.',
    },
    duration: {
      fr: 'BTS/HND : 2 ans | Licence : 3 ans (ou 1 an post BTS) | Master : 2 ans',
      en: 'BTS/HND: 2 years | Bachelor/Licence: 3 years (or 1 year post-BTS) | Master: 2 years',
    },
    shifts: {
      fr: 'Cours du jour & Cours du soir',
      en: 'Day classes & Evening classes',
    },
    campuses: ['bonaberi', 'mboppi'],
    requirements: {
      fr: ['Baccalauréat C, D, F8 ou GCE A/L', 'Dossier d\'inscription complet'],
      en: ['GCE A-Level Sciences / Baccalaureate C, D', 'Complete registration file'],
    },
    curriculumHighlights: {
      fr: ['Soins infirmiers fondamentaux et spécialisés', 'Pharmacologie et administration des traitements', 'Pathologies médico-chirurgicales', 'Santé communautaire et éthique médicale', 'Stages cliniques supervisés'],
      en: ['Fundamental and specialized nursing care', 'Pharmacology and administration', 'Medical-surgical pathologies', 'Community healthcare & medical ethics', 'Supervised clinical internships'],
    },
    careerOutcomes: {
      fr: ['Infirmier diplômé d\'État en centre hospitalier', 'Coordinateur des soins et chef d\'unité', 'Infirmier d\'entreprise ou d\'ONG humanitaire'],
      en: ['State certified nurse in hospitals and private clinics', 'Care coordinator and head nurse', 'Occupational health nurse or NGO health officer'],
    },
    featured: true,
  },
  {
    id: 'sage-femme',
    code: 'MID-03',
    name: {
      fr: 'Sage-Femme / Maïeutique',
      en: 'Midwifery Sciences',
    },
    domain: 'biomedical',
    level: ['BTS', 'HND', 'LICENCE'],
    description: {
      fr: 'Formation experte pour l\'accompagnement de la grossesse, l\'accouchement, le post-partum et les soins néonataux.',
      en: 'Expert training for pregnancy monitoring, labor delivery, post-partum care, and neonatal health.',
    },
    duration: {
      fr: '2 à 3 ans selon le cycle',
      en: '2 to 3 years depending on cycle',
    },
    shifts: {
      fr: 'Cours du jour',
      en: 'Day classes',
    },
    campuses: ['bonaberi', 'mboppi'],
    requirements: {
      fr: ['Baccalauréat C, D ou GCE A-Level en sciences biologiques', 'Dossier d\'admission'],
      en: ['GCE A-Level with Biology / Bac C, D', 'Application file'],
    },
    curriculumHighlights: {
      fr: ['Obstétrique théorique et pratique', 'Surveillance prénatale et postnatale', 'Réanimation néonatale', 'Santé de la reproduction et planification familiale'],
      en: ['Theoretical and practical obstetrics', 'Prenatal and postnatal monitoring', 'Neonatal resuscitation', 'Reproductive health & family planning'],
    },
    careerOutcomes: {
      fr: ['Sage-femme en maternité et hôpital', 'Consultante en santé de la reproduction', 'Responsable de centre de santé maternel et infantile'],
      en: ['Midwife in hospital maternity wards', 'Reproductive health consultant', 'Maternal and child healthcare supervisor'],
    },
  },
  {
    id: 'techniques-laboratoire',
    code: 'LAB-04',
    name: {
      fr: 'Techniques de Laboratoire & Biologie Clinique',
      en: 'Medical Laboratory Technology & Clinical Biology',
    },
    domain: 'biomedical',
    level: ['BTS', 'HND', 'LICENCE', 'MASTER'],
    description: {
      fr: 'Maîtrise des analyses biomédicales, hématologie, biochimie clinique, microbiologie et immunologie.',
      en: 'Mastery of biomedical laboratory assays, hematology, clinical biochemistry, microbiology, and immunology.',
    },
    duration: {
      fr: '2 à 3 ans (BTS/HND/Licence) | 2 ans (Master)',
      en: '2 to 3 years (BTS/HND/Licence) | 2 years (Master)',
    },
    shifts: {
      fr: 'Cours du jour & Cours du soir',
      en: 'Day classes & Evening classes',
    },
    campuses: ['bonaberi', 'mboppi'],
    requirements: {
      fr: ['Baccalauréat C, D ou GCE A-Level Sciences', 'Dossier d\'inscription'],
      en: ['GCE A-Level Sciences / Bac C, D', 'Application file'],
    },
    curriculumHighlights: {
      fr: ['Biochimie clinique et automatisée', 'Hématologie et immuno-hématologie', 'Bactériologie, virologie et parasitologie', 'Contrôle qualité en laboratoire d\'analyses'],
      en: ['Clinical and automated biochemistry', 'Hematology and blood banking', 'Bacteriology, virology & parasitology', 'Quality control in analytical labs'],
    },
    careerOutcomes: {
      fr: ['Technicien biologiste en laboratoire d\'analyses médicales', 'Responsable assurance qualité en laboratoire', 'Agent de recherche en bio-santé'],
      en: ['Medical laboratory technologist in diagnostic labs', 'Quality assurance manager in lab settings', 'Biomedical research assistant'],
    },
  },
  {
    id: 'kinesitherapie',
    code: 'KIN-05',
    name: {
      fr: 'Kinésithérapie & Physiothérapie',
      en: 'Physiotherapy & Physical Rehabilitation',
    },
    domain: 'biomedical',
    level: ['BTS', 'HND', 'LICENCE', 'MASTER'],
    description: {
      fr: 'Rééducation fonctionnelle, réadaptation motrice, thérapie manuelle et prise en charge des traumatismes musculo-squelettiques.',
      en: 'Functional rehabilitation, motor recovery, manual therapy, and musculoskeletal injury management.',
    },
    duration: {
      fr: 'BTS : 2 ans | Licence : 3 ans | Master : 2 ans',
      en: 'BTS: 2 years | Licence: 3 years | Master: 2 years',
    },
    shifts: {
      fr: 'Cours du jour & Cours du soir',
      en: 'Day classes & Evening classes',
    },
    campuses: ['bonaberi', 'mboppi'],
    requirements: {
      fr: ['Baccalauréat C, D ou GCE A-Level scientifique', 'Fiche d\'inscription'],
      en: ['GCE A-Level Sciences / Bac C, D', 'Application form'],
    },
    curriculumHighlights: {
      fr: ['Anatomie biomécanique et physiologie', 'Masso-kinésithérapie et rééducation orthopédique', 'Kinésithérapie respiratoire et cardio-vasculaire', 'Réadaptation neurologique et sportive'],
      en: ['Biomechanical anatomy and physiology', 'Masso-physiotherapy and orthopedic rehab', 'Respiratory and cardiovascular physiotherapy', 'Neurological and sports rehabilitation'],
    },
    careerOutcomes: {
      fr: ['Kinésithérapeute en clinique, hôpital ou cabinet privé', 'Praticien en rééducation du sport', 'Ergonome et conseiller en santé au travail'],
      en: ['Physiotherapist in hospital or private practice', 'Sports rehabilitation therapist', 'Occupational ergonomics advisor'],
    },
  },
  {
    id: 'nutrition-dietetique',
    code: 'NUT-06',
    name: {
      fr: 'Nutrition et Diététique',
      en: 'Nutrition & Dietetics',
    },
    domain: 'biomedical',
    level: ['BTS', 'HND', 'LICENCE'],
    description: {
      fr: 'Évaluation nutritionnelle, régimes thérapeutiques, sécurité alimentaire et prévention des maladies métaboliques.',
      en: 'Nutritional assessment, therapeutic dieting, food safety, and metabolic disorder prevention.',
    },
    duration: {
      fr: '2 ans (BTS/HND) | 3 ans (Licence)',
      en: '2 years (BTS/HND) | 3 years (Licence)',
    },
    shifts: {
      fr: 'Cours du jour & Cours du soir',
      en: 'Day classes & Evening classes',
    },
    campuses: ['bonaberi', 'mboppi'],
    requirements: {
      fr: ['Baccalauréat toutes séries scientifiques / GCE A/L', 'Dossier d\'inscription'],
      en: ['GCE A-Level / Scientific Baccalaureate', 'Application file'],
    },
    curriculumHighlights: {
      fr: ['Biochimie des nutriments et métabolisme', 'Diététique clinique et régimes spécialisés', 'Restauration collective et hygiène alimentaire', 'Éducation nutritionnelle'],
      en: ['Nutrient biochemistry and metabolism', 'Clinical dietetics and tailored diets', 'Food safety in catering systems', 'Public nutrition education'],
    },
    careerOutcomes: {
      fr: ['Diététicien-nutritionniste en hôpital ou clinique', 'Conseiller nutritionnel en centre de bien-être ou sport', 'Responsable qualité agro-alimentaire'],
      en: ['Clinical dietitian in hospitals and clinics', 'Wellness & sports nutrition consultant', 'Food service nutritionist'],
    },
  },
  {
    id: 'techniques-pharmaceutiques',
    code: 'PHA-07',
    name: {
      fr: 'Techniques Pharmaceutiques',
      en: 'Pharmaceutical Technology',
    },
    domain: 'biomedical',
    level: ['BTS', 'HND', 'LICENCE', 'MASTER'],
    description: {
      fr: 'Préparation, contrôle, dispensation des médicaments et gestion des officines et stocks pharmaceutiques.',
      en: 'Preparation, quality control, dispensing of pharmaceuticals, and pharmacy inventory management.',
    },
    duration: {
      fr: '2 à 3 ans selon le cycle',
      en: '2 to 3 years depending on cycle',
    },
    shifts: {
      fr: 'Cours du jour & Cours du soir',
      en: 'Day classes & Evening classes',
    },
    campuses: ['bonaberi', 'mboppi'],
    requirements: {
      fr: ['Baccalauréat C, D ou GCE A/L Sciences', 'Dossier d\'inscription'],
      en: ['GCE A-Level Sciences / Bac C, D', 'Application file'],
    },
    curriculumHighlights: {
      fr: ['Pharmacologie générale et galénique', 'Chimie thérapeutique et toxicologie', 'Législation pharmaceutique et gestion d\'officine', 'Pharmaco-vigilance et dispensation'],
      en: ['General pharmacology and galenics', 'Therapeutic chemistry & toxicology', 'Pharmacy law and store management', 'Pharmacovigilance and dispensing'],
    },
    careerOutcomes: {
      fr: ['Préparateur en pharmacie hospitalière ou d\'officine', 'Technicien de production en industrie pharmaceutique', 'Délégué médical et technico-commercial pharmaceutique'],
      en: ['Hospital and community pharmacy assistant', 'Pharmaceutical manufacturing technician', 'Medical representative'],
    },
  },
  {
    id: 'sante-publique-master',
    code: 'SPB-08',
    name: {
      fr: 'Santé Publique & Épidémiologie',
      en: 'Public Health & Epidemiology',
    },
    domain: 'biomedical',
    level: ['LICENCE', 'MASTER'],
    description: {
      fr: 'Pilotage des politiques de santé, gestion des programmes sanitaires, veille épidémiologique et gestion des services de santé.',
      en: 'Public health policy governance, health program management, epidemiological surveillance, and health systems management.',
    },
    duration: {
      fr: 'Licence : 1 an post Bac+2 | Master : 2 ans',
      en: 'Licence: 1 year post Bac+2 | Master: 2 years',
    },
    shifts: {
      fr: 'Cours du soir & Cours du jour',
      en: 'Evening classes & Day classes',
    },
    campuses: ['bonaberi', 'mboppi'],
    requirements: {
      fr: ['Licence en sciences de la santé, biologie ou diplôme équivalent', 'Étude de dossier'],
      en: ['Bachelor in health sciences, biology or equivalent', 'File review'],
    },
    curriculumHighlights: {
      fr: ['Épidémiologie et biostatistique appliquée', 'Management des services de santé', 'Économie de la santé et politiques publiques', 'Gestion de projets de santé et évaluation d\'impact'],
      en: ['Applied epidemiology and biostatistics', 'Health services management', 'Health economics and public policy', 'Health project management and impact evaluation'],
    },
    careerOutcomes: {
      fr: ['Chef de projet santé dans les ONG et institutions internationales', 'Gestionnaire d\'établissements sanitaires', 'Chargé d\'études épidémiologiques'],
      en: ['Health project manager in NGOs and international agencies', 'Healthcare facility administrator', 'Epidemiology researcher'],
    },
  },

  // ================= INDUSTRY & TECHNOLOGY =================
  {
    id: 'genie-logiciel',
    code: 'GL-01',
    name: {
      fr: 'Génie Logiciel & Systèmes d\'Information',
      en: 'Software Engineering & Information Systems',
    },
    domain: 'engineering',
    level: ['BTS', 'HND', 'LICENCE', 'MASTER'],
    description: {
      fr: 'Développement d\'applications web, mobiles et cloud, architecture logicielle, bases de données et pratiques modernes DevSecOps.',
      en: 'Web, mobile and cloud application development, software architecture, databases, and modern DevSecOps practices.',
    },
    duration: {
      fr: 'BTS/HND : 2 ans | Licence : 1 an post BTS | Master : 2 ans',
      en: 'BTS/HND: 2 years | Bachelor/Licence: 1 year post-BTS | Master: 2 years',
    },
    shifts: {
      fr: 'Cours du jour & Cours du soir',
      en: 'Day classes & Evening classes',
    },
    campuses: ['bonaberi', 'mboppi'],
    requirements: {
      fr: ['Baccalauréat C, D, E, F, TI ou GCE A/L (avec Mathématiques ou Informatique)', 'Dossier d\'inscription'],
      en: ['GCE A-Level with Math or Computing / Bac C, D, E, F, TI', 'Application file'],
    },
    curriculumHighlights: {
      fr: ['Algorithmique et structures de données', 'Développement Web Full-Stack (React, Node, TypeScript)', 'Développement Mobile (Android/iOS)', 'Bases de données relationnelles & NoSQL', 'Génie logiciel, tests et déploiement CI/CD'],
      en: ['Algorithms and data structures', 'Full-Stack Web Development (React, Node, TypeScript)', 'Mobile Application Engineering', 'Relational & NoSQL Databases', 'Software engineering, automated testing, and CI/CD'],
    },
    careerOutcomes: {
      fr: ['Ingénieur logiciel / Développeur Full-Stack', 'Architecte logiciel et intégrateur de solutions', 'Chef de projet IT / Scrum Master', 'Développeur mobile'],
      en: ['Software Engineer / Full-Stack Developer', 'Software Architect and Solutions Integrator', 'IT Project Manager / Scrum Master', 'Mobile Application Developer'],
    },
    featured: true,
  },
  {
    id: 'reseaux-cybersecurite',
    code: 'CYB-02',
    name: {
      fr: 'Réseaux, Systèmes et Cybersécurité',
      en: 'Networks, Systems & Cyber Security',
    },
    domain: 'engineering',
    level: ['BTS', 'HND', 'LICENCE', 'MASTER'],
    description: {
      fr: 'Administration des infrastructures réseaux, virtualisation, cloud computing, sécurisation des données et défense contre les cybermenaces.',
      en: 'Network infrastructure administration, virtualization, cloud computing, data protection, and defense against cyber threats.',
    },
    duration: {
      fr: 'BTS/HND : 2 ans | Licence : 1 an post BTS | Master : 2 ans',
      en: 'BTS/HND: 2 years | Bachelor/Licence: 1 year post-BTS | Master: 2 years',
    },
    shifts: {
      fr: 'Cours du jour & Cours du soir',
      en: 'Day classes & Evening classes',
    },
    campuses: ['bonaberi', 'mboppi'],
    requirements: {
      fr: ['Baccalauréat C, D, E, F, TI ou GCE A/L Scientifique', 'Dossier d\'inscription'],
      en: ['GCE A-Level Sciences / Bac C, D, E, F, TI', 'Application file'],
    },
    curriculumHighlights: {
      fr: ['Réseaux informatiques avancés (Cisco/Routing/Switching)', 'Sécurité des systèmes et tests d\'intrusion (Ethical Hacking)', 'Administration serveurs Linux et Windows Server', 'Cloud Infrastructure & Cloud Security'],
      en: ['Advanced computer networking (Cisco/Routing/Switching)', 'System security and penetration testing (Ethical Hacking)', 'Linux and Windows Server administration', 'Cloud Infrastructure & Security'],
    },
    careerOutcomes: {
      fr: ['Administrateur réseaux et systèmes', 'Analyste en cybersécurité / SOC Analyst', 'Ingénieur sécurité informatique', 'Consultant en infrastructure cloud'],
      en: ['Network and systems administrator', 'Cybersecurity Analyst / SOC Analyst', 'IT Security Engineer', 'Cloud Infrastructure Consultant'],
    },
  },
  {
    id: 'intelligence-artificielle',
    code: 'IA-03',
    name: {
      fr: 'Intelligence Artificielle (IA) & Données',
      en: 'Artificial Intelligence (AI) & Data Engineering',
    },
    domain: 'engineering',
    level: ['LICENCE', 'MASTER'],
    description: {
      fr: 'Machine Learning, Deep Learning, traitement automatique du langage, vision par ordinateur et analyse prédictive des données d\'entreprise.',
      en: 'Machine Learning, Deep Learning, Natural Language Processing, computer vision, and enterprise predictive analytics.',
    },
    duration: {
      fr: 'Licence : 1 an post Bac+2 | Master : 2 ans',
      en: 'Licence: 1 year post Bac+2 | Master: 2 years',
    },
    shifts: {
      fr: 'Cours du soir & Cours du jour',
      en: 'Evening classes & Day classes',
    },
    campuses: ['bonaberi', 'mboppi'],
    requirements: {
      fr: ['Bac+2 en informatique, mathématiques, génie logiciel ou équivalent', 'Dossier d\'admission'],
      en: ['Bac+2 in computer science, mathematics, software engineering or equivalent', 'Application file'],
    },
    curriculumHighlights: {
      fr: ['Fondements mathématiques du Machine Learning', 'Python avancé pour la Data Science (TensorFlow/PyTorch)', 'Traitement du langage naturel (NLP) & LLMs', 'Ingénierie des pipelines de données (Data Engineering)'],
      en: ['Mathematical foundations of Machine Learning', 'Advanced Python for Data Science (TensorFlow/PyTorch)', 'Natural Language Processing (NLP) & LLMs', 'Data pipeline engineering (ETL & Big Data)'],
    },
    careerOutcomes: {
      fr: ['Ingénieur en Intelligence Artificielle', 'Data Scientist / Data Analyst', 'Développeur de solutions IA et agents automatisés', 'Consultant en transformation numérique IA'],
      en: ['Artificial Intelligence Engineer', 'Data Scientist / Data Analyst', 'AI Solutions Developer', 'Digital Transformation & AI Consultant'],
    },
    featured: true,
  },
  {
    id: 'batiment-genie-civil',
    code: 'BAT-04',
    name: {
      fr: 'Bâtiment, Travaux Publics & Génie Civil',
      en: 'Civil Engineering, Building & Public Works',
    },
    domain: 'engineering',
    level: ['BTS', 'HND', 'LICENCE', 'MASTER'],
    description: {
      fr: 'Conception structurelle, calcul de béton armé, conduite de chantiers de construction, géotechnique et topographie.',
      en: 'Structural design, reinforced concrete calculation, construction site management, geotechnics, and topography.',
    },
    duration: {
      fr: '2 à 3 ans selon le cycle | Master : 2 ans',
      en: '2 to 3 years depending on cycle | Master: 2 years',
    },
    shifts: {
      fr: 'Cours du jour & Cours du soir',
      en: 'Day classes & Evening classes',
    },
    campuses: ['bonaberi', 'mboppi'],
    requirements: {
      fr: ['Baccalauréat C, D, E, F4 ou GCE A/L', 'Dossier d\'inscription'],
      en: ['GCE A-Level Sciences / Technical Baccalaureate F4, C, D, E', 'Application file'],
    },
    curriculumHighlights: {
      fr: ['Résistance des matériaux (RDM) et béton armé', 'Dessin assisté par ordinateur (AutoCAD, Revit/BIM)', 'Topographie et métré de travaux', 'Conduite de chantiers et sécurité du bâtiment'],
      en: ['Strength of materials and reinforced concrete', 'Computer-aided design (AutoCAD, Revit/BIM)', 'Topography, site surveying and bill of quantities', 'Site management and occupational safety'],
    },
    careerOutcomes: {
      fr: ['Conducteur de travaux BTP', 'Chef de projet en bureau d\'études de génie civil', 'Technicien supérieur projeteur BIM', 'Inspecteur de travaux publics'],
      en: ['Civil works site manager', 'Civil engineering design project officer', 'Senior BIM design technician', 'Public infrastructure inspector'],
    },
  },
  {
    id: 'meca-electrotechnique',
    code: 'ELEC-05',
    name: {
      fr: 'Électrotechnique, Mécatronique & Énergie Renouvelable',
      en: 'Electrical Engineering, Mechatronics & Renewable Energy',
    },
    domain: 'engineering',
    level: ['BTS', 'HND', 'LICENCE', 'MASTER'],
    description: {
      fr: 'Production et distribution de l\'énergie électrique, automatismes industriels, systèmes mécatroniques et installations solaires/renouvelables.',
      en: 'Electrical power generation and distribution, industrial automation, mechatronic systems, and solar/renewable energy setups.',
    },
    duration: {
      fr: '2 à 3 ans | Master : 2 ans',
      en: '2 to 3 years | Master: 2 years',
    },
    shifts: {
      fr: 'Cours du jour & Cours du soir',
      en: 'Day classes & Evening classes',
    },
    campuses: ['bonaberi', 'mboppi'],
    requirements: {
      fr: ['Baccalauréat C, D, E, F1, F2, F3 ou GCE A/L', 'Dossier d\'inscription'],
      en: ['GCE A-Level Sciences / Technical Baccalaureate F1, F2, F3, C, D, E', 'Application file'],
    },
    curriculumHighlights: {
      fr: ['Installations électriques industrielles et haute/basse tension', 'Automates programmables industriels (API)', 'Systèmes solaires photovoltaïques et énergies renouvelables', 'Maintenance électromécanique et robotique'],
      en: ['Industrial high/low voltage electrical systems', 'Programmable Logic Controllers (PLC)', 'Solar photovoltaic systems & renewable power', 'Electromechanical maintenance & robotics'],
    },
    careerOutcomes: {
      fr: ['Technicien supérieur électrotechnicien', 'Spécialiste en installations solaires et énergies propres', 'Responsable de maintenance industrielle', 'Installateur de systèmes mécatroniques'],
      en: ['Senior electrical engineering technician', 'Solar energy & clean power specialist', 'Industrial maintenance supervisor', 'Mechatronic systems installer'],
    },
  },
  {
    id: 'ingenierie-petroliere',
    code: 'PET-06',
    name: {
      fr: 'Ingénierie Pétrolière & Chaudronnerie-Soudure',
      en: 'Petroleum Engineering & Industrial Boilermaking/Welding',
    },
    domain: 'engineering',
    level: ['BTS', 'HND', 'LICENCE'],
    description: {
      fr: 'Technologies de forage, production pétrolière, tuyauterie industrielle, chaudronnerie et soudure de haute précision.',
      en: 'Drilling technologies, oil & gas production, industrial piping, boilermaking, and high-precision welding.',
    },
    duration: {
      fr: '2 à 3 ans selon le cycle',
      en: '2 to 3 years depending on cycle',
    },
    shifts: {
      fr: 'Cours du jour & Cours du soir',
      en: 'Day classes & Evening classes',
    },
    campuses: ['bonaberi', 'mboppi'],
    requirements: {
      fr: ['Baccalauréat C, D, E, F ou GCE A/L', 'Dossier d\'inscription'],
      en: ['GCE A-Level Sciences / Technical Baccalaureate', 'Application file'],
    },
    curriculumHighlights: {
      fr: ['Géologie et exploitation des hydrocarbures', 'Tuyauterie industrielle et mécano-soudure', 'Normes de sécurité offshore/onshore (HSE)', 'Contrôle non destructif des soudures'],
      en: ['Hydrocarbon geology and field operations', 'Industrial piping and structural welding', 'Offshore/onshore HSE safety standards', 'Non-destructive testing methods'],
    },
    careerOutcomes: {
      fr: ['Technicien sur plateforme pétrolière et raffinerie', 'Inspecteur chaudronnerie et tuyauterie industrielle', 'Responsable de soudure industrielle certifié'],
      en: ['Petroleum technician on oil platforms & refineries', 'Industrial piping and boilermaking inspector', 'Certified industrial welding specialist'],
    },
  },

  // ================= COMMERCE & GESTION =================
  {
    id: 'banque-finance',
    code: 'BF-01',
    name: {
      fr: 'Banque et Finance / Banque et Assurance',
      en: 'Banking and Finance / Banking & Insurance',
    },
    domain: 'business',
    level: ['BTS', 'HND', 'LICENCE', 'MASTER'],
    description: {
      fr: 'Gestion des opérations bancaires, analyse financière d\'entreprise, gestion des risques de crédit et produits d\'assurance.',
      en: 'Banking operations management, corporate financial analysis, credit risk management, and insurance underwriting.',
    },
    duration: {
      fr: 'BTS/HND : 2 ans | Licence : 1 an post BTS | Master : 2 ans',
      en: 'BTS/HND: 2 years | Bachelor/Licence: 1 year post-BTS | Master: 2 years',
    },
    shifts: {
      fr: 'Cours du jour & Cours du soir',
      en: 'Day classes & Evening classes',
    },
    campuses: ['bonaberi', 'mboppi'],
    requirements: {
      fr: ['Baccalauréat A, B, C, D, G2 ou GCE A/L', 'Dossier d\'inscription'],
      en: ['GCE A-Level / Baccalaureate A, B, C, D, G2', 'Application file'],
    },
    curriculumHighlights: {
      fr: ['Techniques bancaires et opérations de crédit', 'Analyse et diagnostic financier', 'Droit bancaire et des assurances', 'Marchés financiers et gestion de trésorerie'],
      en: ['Banking operations and credit appraisal', 'Financial statement analysis & modeling', 'Banking and insurance legal frameworks', 'Financial markets & treasury management'],
    },
    careerOutcomes: {
      fr: ['Chargé de clientèle particuliers et entreprises en banque', 'Analyste financier et gestionnaire de risques', 'Gestionnaire de contrats d\'assurance', 'Conseiller en investissement'],
      en: ['Corporate & retail relationship manager in banks', 'Financial analyst and risk officer', 'Insurance policy and claims officer', 'Investment advisor'],
    },
    featured: true,
  },
  {
    id: 'comptabilite-gestion',
    code: 'CGE-02',
    name: {
      fr: 'Comptabilité et Gestion des Entreprises (CGE / CCA)',
      en: 'Accountancy, Control & Audit',
    },
    domain: 'business',
    level: ['BTS', 'HND', 'LICENCE', 'MASTER'],
    description: {
      fr: 'Tenue des comptes, fiscalité des entreprises, contrôle de gestion, audit interne et reporting financier normalisé SYSCOHADA.',
      en: 'Bookkeeping, corporate taxation, management accounting, internal audit, and SYSCOHADA financial reporting standards.',
    },
    duration: {
      fr: 'BTS/HND : 2 ans | Licence : 1 an post BTS | Master : 2 ans',
      en: 'BTS/HND: 2 years | Bachelor/Licence: 1 year post-BTS | Master: 2 years',
    },
    shifts: {
      fr: 'Cours du jour & Cours du soir',
      en: 'Day classes & Evening classes',
    },
    campuses: ['bonaberi', 'mboppi'],
    requirements: {
      fr: ['Baccalauréat G2, G3, B, C, D ou GCE A/L', 'Dossier d\'inscription'],
      en: ['GCE A-Level / Baccalaureate G2, G3, B, C, D', 'Application file'],
    },
    curriculumHighlights: {
      fr: ['Comptabilité générale et analytique approfondie', 'Fiscalité camerounaise et CEMAC', 'Audit comptable et financier', 'Logiciels de gestion comptable (Sage Saari, Excel Expert)'],
      en: ['Advanced financial and cost accounting', 'Cameroonian & CEMAC tax compliance', 'Accounting & financial auditing', 'Accounting software mastery (Sage, Excel)'],
    },
    careerOutcomes: {
      fr: ['Comptable d\'entreprise / Chef comptable', 'Auditeur junior en cabinet d\'expertise comptable', 'Contrôleur de gestion', 'Conseiller fiscal'],
      en: ['Corporate Accountant / Chief Accountant', 'Junior Auditor in CPA firms', 'Management controller', 'Tax advisor'],
    },
  },
  {
    id: 'douane-transit-logistique',
    code: 'DTL-03',
    name: {
      fr: 'Douane, Transit, Logistique & Transport (GLT)',
      en: 'Customs, Transit, Logistics & Transport Management',
    },
    domain: 'business',
    level: ['BTS', 'HND', 'LICENCE', 'MASTER'],
    description: {
      fr: 'Gestion de la chaîne logistique internationale, procédures douanières portuaires et aéroportuaires, fret et gestion d\'entrepôts.',
      en: 'International supply chain management, maritime and air customs clearance procedures, freight forwarding, and warehouse operations.',
    },
    duration: {
      fr: 'BTS/HND : 2 ans | Licence : 1 an post BTS | Master : 2 ans',
      en: 'BTS/HND: 2 years | Bachelor/Licence: 1 year post-BTS | Master: 2 years',
    },
    shifts: {
      fr: 'Cours du jour & Cours du soir',
      en: 'Day classes & Evening classes',
    },
    campuses: ['bonaberi', 'mboppi'],
    requirements: {
      fr: ['Baccalauréat toutes séries ou GCE A/L', 'Dossier d\'inscription'],
      en: ['GCE A-Level / Baccalaureate all streams', 'Application file'],
    },
    curriculumHighlights: {
      fr: ['Réglementation douanière et tarification CAMCIS/GUCE', 'Gestion des flux logistiques et transport multimodal', 'Gestion des stocks et entreposage', 'Commerce international et Incoterms'],
      en: ['Customs legislation & CAMCIS/GUCE single window clearance', 'Supply chain flows & multimodal transport', 'Inventory and warehouse management', 'International trade operations & Incoterms'],
    },
    careerOutcomes: {
      fr: ['Déclarant en douane agréé', 'Responsable logistique et approvisionnements', 'Transitaire et commissionnaire de transport', 'Gestionnaire des opérations portuaires'],
      en: ['Licensed customs clearance broker', 'Supply chain & logistics coordinator', 'Freight forwarding agent', 'Port operations officer'],
    },
    featured: true,
  },
  {
    id: 'marketing-digital-mcv',
    code: 'MKT-04',
    name: {
      fr: 'Marketing Digital, Commerce & Vente (MCV)',
      en: 'Digital Marketing, Trade & Sales Management',
    },
    domain: 'business',
    level: ['BTS', 'HND', 'LICENCE', 'MASTER'],
    description: {
      fr: 'Stratégie de marque, e-commerce, prospection commerciale, gestion de communauté, publicité numérique et négociation d\'affaires.',
      en: 'Brand strategy, e-commerce, B2B sales prospecting, community management, digital ads, and business negotiation.',
    },
    duration: {
      fr: 'BTS/HND : 2 ans | Licence : 1 an post BTS | Master : 2 ans',
      en: 'BTS/HND: 2 years | Bachelor/Licence: 1 year post-BTS | Master: 2 years',
    },
    shifts: {
      fr: 'Cours du jour & Cours du soir',
      en: 'Day classes & Evening classes',
    },
    campuses: ['bonaberi', 'mboppi'],
    requirements: {
      fr: ['Baccalauréat toutes séries ou GCE A/L', 'Dossier d\'inscription'],
      en: ['GCE A-Level / Baccalaureate all streams', 'Application file'],
    },
    curriculumHighlights: {
      fr: ['Marketing digital, SEO et gestion des réseaux sociaux', 'Techniques de vente et négociation commerciale', 'E-commerce et tunnels de conversion', 'Communication publicitaire et études de marché'],
      en: ['Digital marketing, SEO, and social media advertising', 'Sales techniques & high-value negotiation', 'E-commerce operations and sales funnels', 'Advertising communication & market research'],
    },
    careerOutcomes: {
      fr: ['Responsable marketing digital / Growth Manager', 'Chef de produit commercial', 'Manager commercial et responsable des ventes', 'Community manager et chargé de communication'],
      en: ['Digital Marketing Manager / Growth Specialist', 'Commercial Product Manager', 'Sales Director / Account Executive', 'Brand & Community Manager'],
    },
  },
  {
    id: 'ressources-humaines-grh',
    code: 'GRH-05',
    name: {
      fr: 'Gestion des Ressources Humaines (GRH) & Projets',
      en: 'Human Resources Management (HRM) & Project Management',
    },
    domain: 'business',
    level: ['BTS', 'HND', 'LICENCE', 'MASTER'],
    description: {
      fr: 'Recrutement, gestion des carrières, droit du travail, paie et climat social en entreprise, pilotage de projets organisationnels.',
      en: 'Talent acquisition, career development, labor law, payroll administration, employee relations, and project management.',
    },
    duration: {
      fr: 'BTS/HND : 2 ans | Licence : 1 an | Master : 2 ans',
      en: 'BTS/HND: 2 years | Bachelor/Licence: 1 year | Master: 2 years',
    },
    shifts: {
      fr: 'Cours du jour & Cours du soir',
      en: 'Day classes & Evening classes',
    },
    campuses: ['bonaberi', 'mboppi'],
    requirements: {
      fr: ['Baccalauréat toutes séries ou GCE A/L', 'Dossier d\'inscription'],
      en: ['GCE A-Level / Baccalaureate all streams', 'Application file'],
    },
    curriculumHighlights: {
      fr: ['Droit social et du travail au Cameroun', 'Gestion de la paie et administration du personnel', 'Gestion prévisionnelle des emplois et des compétences (GPEC)', 'Management de projets et conduite du changement'],
      en: ['Labor law & industrial relations in Cameroon', 'Payroll management & personnel administration', 'Strategic workforce planning (GPEC)', 'Project management & change management'],
    },
    careerOutcomes: {
      fr: ['Responsable des ressources humaines (RRH)', 'Chargé de recrutement et de formation', 'Gestionnaire de paie et administration du personnel', 'Consultant en organisation et management'],
      en: ['Human Resources Manager (HRM)', 'Talent Acquisition & Training Officer', 'Payroll & Personnel Administrator', 'Organizational Management Consultant'],
    },
  },

  // ================= AGRICULTURE & AGRO-PASTORAL =================
  {
    id: 'aquaculture-peche',
    code: 'AGR-01',
    name: {
      fr: 'Aquaculture & Gestion des Ressources Piscicoles',
      en: 'Aquaculture & Fisheries Resource Management',
    },
    domain: 'agriculture',
    level: ['BTS', 'HND', 'LICENCE'],
    description: {
      fr: 'Élevage de poissons (pisciculture), reproduction artificielle, gestion de bassins et étangs, nutrition des poissons et commercialisation.',
      en: 'Fish farming, artificial fish breeding, pond & tank management, fish nutrition, and aquatic product marketing.',
    },
    duration: {
      fr: '2 ans (BTS/HND) | 3 ans (Licence)',
      en: '2 years (BTS/HND) | 3 years (Licence)',
    },
    shifts: {
      fr: 'Cours du jour',
      en: 'Day classes',
    },
    campuses: ['bonaberi', 'mboppi'],
    requirements: {
      fr: ['Baccalauréat C, D, A ou GCE A/L', 'Dossier d\'inscription'],
      en: ['GCE A-Level / Baccalaureate C, D, A', 'Application file'],
    },
    curriculumHighlights: {
      fr: ['Biologie et physiologie des poissons d\'élevage (silures, tilapias)', 'Techniques d\'écloserie et reproduction artificielle', 'Formulation d\'aliments pour poissons', 'Gestion de fermes aquacoles et économie de filière'],
      en: ['Biology and physiology of farmed fish (catfish, tilapia)', 'Hatchery techniques and artificial breeding', 'Fish feed formulation and water quality', 'Fish farm management and value chain marketing'],
    },
    careerOutcomes: {
      fr: ['Entrepreneur aquacole / Propriétaire de ferme piscicole', 'Gestionnaire de station d\'alevinage', 'Conseiller technique en aquaculture', 'Cadre en transformation halieutique'],
      en: ['Aquaculture Entrepreneur / Fish Farm Owner', 'Hatchery station manager', 'Aquaculture technical advisor', 'Fisheries product processing officer'],
    },
    featured: true,
  },
  {
    id: 'production-vegetale-animale',
    code: 'AGR-02',
    name: {
      fr: 'Production Végétale, Animale & Entrepreneuriat Agro-Pastoral',
      en: 'Crop & Animal Production / Agro-Pastoral Entrepreneurship',
    },
    domain: 'agriculture',
    level: ['BTS', 'HND', 'LICENCE'],
    description: {
      fr: 'Techniques modernes de maraîchage, cultures de rente, élevage de bétail/volailles et gestion rentabilisée d\'exploitations agricoles.',
      en: 'Modern crop farming, cash crop production, livestock/poultry husbandry, and profitable agro-pastoral agribusiness management.',
    },
    duration: {
      fr: '2 ans (BTS/HND) | 3 ans (Licence)',
      en: '2 years (BTS/HND) | 3 years (Licence)',
    },
    shifts: {
      fr: 'Cours du jour',
      en: 'Day classes',
    },
    campuses: ['bonaberi', 'mboppi'],
    requirements: {
      fr: ['Baccalauréat toutes séries ou GCE A/L', 'Dossier d\'inscription'],
      en: ['GCE A-Level / Baccalaureate', 'Application file'],
    },
    curriculumHighlights: {
      fr: ['Agronomie générale et fertilisation des sols', 'Élevage avicole, porcin et petits ruminants', 'Protection phytosanitaire biologique et raisonnée', 'Montage de business plan agricole et recherche de financements'],
      en: ['General agronomy and soil fertility management', 'Poultry, swine, and small ruminant husbandry', 'Integrated crop pest management', 'Agribusiness financial planning and grant proposal drafting'],
    },
    careerOutcomes: {
      fr: ['Chef d\'exploitation agricole ou pastorale', 'Conseiller agro-pastoral en coopérative et ONG', 'Technicien de terrain pour semenciers et provenderies'],
      en: ['Agro-pastoral Farm Manager', 'Agro-pastoral extension agent in NGOs & cooperatives', 'Field technician for seed and feed manufacturers'],
    },
  },
  {
    id: 'transformation-alimentaire-hydraulique',
    code: 'AGR-03',
    name: {
      fr: 'Transformation Agroalimentaire & Hydraulique Agricole',
      en: 'Food Transformation, Technology & Agricultural Hydraulics',
    },
    domain: 'agriculture',
    level: ['BTS', 'HND', 'LICENCE'],
    description: {
      fr: 'Technologies de transformation des denrées locales, conservation, emballage, systèmes d\'irrigation et gestion de l\'eau agricole.',
      en: 'Processing of local agricultural produce, packaging, preservation, irrigation systems, and farm water management.',
    },
    duration: {
      fr: '2 ans (BTS/HND) | 3 ans (Licence)',
      en: '2 years (BTS/HND) | 3 years (Licence)',
    },
    shifts: {
      fr: 'Cours du jour',
      en: 'Day classes',
    },
    campuses: ['bonaberi', 'mboppi'],
    requirements: {
      fr: ['Baccalauréat C, D, F, A ou GCE A/L', 'Dossier d\'inscription'],
      en: ['GCE A-Level / Baccalaureate', 'Application file'],
    },
    curriculumHighlights: {
      fr: ['Procédés de séchage, mise en conserve et fermentation', 'Normes d\'hygiène et contrôle qualité HACCP', 'Dimensionnement de réseaux d\'irrigation goutte-à-goutte', 'Maintenance des équipements agro-industriels'],
      en: ['Drying, canning, and fermentation processes', 'HACCP food safety standards and quality control', 'Drip irrigation system design', 'Agro-industrial machinery maintenance'],
    },
    careerOutcomes: {
      fr: ['Responsable d\'unité de transformation agro-alimentaire', 'Technicien en irrigation et hydraulique rurale', 'Contrôleur qualité en industrie alimentaire'],
      en: ['Food processing production manager', 'Agricultural irrigation technician', 'Food quality assurance specialist'],
    },
  },

  // ================= SOCIAL SCIENCES & APPLIED ARTS =================
  {
    id: 'genie-culinaire-gastronomie',
    code: 'SOC-01',
    name: {
      fr: 'Génie Culinaire, Art Gastronomique & Restauration',
      en: 'Culinary Arts, Gastronomy & Restaurant Management',
    },
    domain: 'social_sciences',
    level: ['BTS', 'HND', 'LICENCE'],
    description: {
      fr: 'Haute cuisine internationale et africaine, techniques de pâtisserie/boulangerie, gestion de restaurant et sommellerie.',
      en: 'Fine international and African cuisine, pastry/bakery techniques, restaurant operations management, and culinary event leadership.',
    },
    duration: {
      fr: '2 ans (BTS/HND) | 3 ans (Licence)',
      en: '2 years (BTS/HND) | 3 years (Licence)',
    },
    shifts: {
      fr: 'Cours du jour & Cours du soir',
      en: 'Day classes & Evening classes',
    },
    campuses: ['bonaberi', 'mboppi'],
    requirements: {
      fr: ['Baccalauréat toutes séries ou GCE A/L', 'Dossier d\'inscription'],
      en: ['GCE A-Level / Baccalaureate all streams', 'Application file'],
    },
    curriculumHighlights: {
      fr: ['Techniques culinaires fondamentales et créatives', 'Pâtisserie fine et boulangerie moderne', 'Gestion des coûts de restauration (Food Cost)', 'Hygiène alimentaire et service en salle'],
      en: ['Fundamental and modern culinary techniques', 'Pastry and bakery arts', 'Restaurant food cost control & budgeting', 'Food hygiene and table service excellence'],
    },
    careerOutcomes: {
      fr: ['Chef de cuisine / Chef pâtissier', 'Gérant de restaurant ou service traiteur', 'Responsable banquet en hôtel de luxe', 'Consultant gastronomique'],
      en: ['Executive Chef / Pastry Chef', 'Restaurant Manager or Catering Entrepreneur', 'Luxury hotel banquet coordinator', 'Culinary consultant'],
    },
    featured: true,
  },
  {
    id: 'design-mode-textile',
    code: 'SOC-02',
    name: {
      fr: 'Design de Mode, Stylisme Modélisme & Industrie de l\'Habillement',
      en: 'Fashion Design, Pattern Making & Garment Industry',
    },
    domain: 'social_sciences',
    level: ['BTS', 'HND', 'LICENCE'],
    description: {
      fr: 'Création de collections textiles, stylisme, modélisme sur mannequin et à plat, confection industrielle et marketing de la mode.',
      en: 'Collection design, fashion styling, flat & 3D pattern drafting, industrial garment manufacturing, and fashion branding.',
    },
    duration: {
      fr: '2 ans (BTS/HND) | 3 ans (Licence)',
      en: '2 years (BTS/HND) | 3 years (Licence)',
    },
    shifts: {
      fr: 'Cours du jour & Cours du soir',
      en: 'Day classes & Evening classes',
    },
    campuses: ['bonaberi', 'mboppi'],
    requirements: {
      fr: ['Baccalauréat toutes séries ou GCE A/L', 'Dossier d\'inscription'],
      en: ['GCE A-Level / Baccalaureate', 'Application file'],
    },
    curriculumHighlights: {
      fr: ['Dessin de mode et stylisme de collection', 'Modélisme, coupe et confection haute couture', 'Conception assistée par ordinateur (CAO textile)', 'Gestion d\'un atelier de confection et marketing de la mode'],
      en: ['Fashion illustration and collection styling', 'Pattern drafting and couture garment assembly', 'Computer-aided fashion design (CAD)', 'Fashion brand marketing & workshop management'],
    },
    careerOutcomes: {
      fr: ['Styliste Modéliste indépendant ou en maison de couture', 'Chef d\'atelier de confection industrielle', 'Costumier pour cinéma et spectacle', 'Conseiller en image et stylisme'],
      en: ['Fashion Designer & Pattern Maker', 'Garment manufacturing workshop supervisor', 'Wardrobe & costume designer for film/theatre', 'Personal stylist & brand consultant'],
    },
  },
  {
    id: 'gestion-hoteliere',
    code: 'SOC-03',
    name: {
      fr: 'Gestion & Management Hôtelier',
      en: 'Hospitality & Hotel Management',
    },
    domain: 'social_sciences',
    level: ['BTS', 'HND', 'LICENCE'],
    description: {
      fr: 'Administration hôtelière, hébergement, réception, gestion des réservations et relation client de standing international.',
      en: 'Hotel operations administration, front desk, housekeeping management, reservation systems, and luxury guest relations.',
    },
    duration: {
      fr: '2 ans (BTS/HND) | 3 ans (Licence)',
      en: '2 years (BTS/HND) | 3 years (Licence)',
    },
    shifts: {
      fr: 'Cours du jour & Cours du soir',
      en: 'Day classes & Evening classes',
    },
    campuses: ['bonaberi', 'mboppi'],
    requirements: {
      fr: ['Baccalauréat toutes séries ou GCE A/L', 'Dossier d\'inscription'],
      en: ['GCE A-Level / Baccalaureate all streams', 'Application file'],
    },
    curriculumHighlights: {
      fr: ['Gestion des opérations d\'hébergement et réception', 'Yield management et tarification hôtelière', 'Marketing hôtelier et relation client', 'Gestion du personnel et sécurité en milieu hôtelier'],
      en: ['Front office and housekeeping operations', 'Yield management and room revenue optimization', 'Hospitality marketing and guest experience', 'Hotel staff coordination and safety regulations'],
    },
    careerOutcomes: {
      fr: ['Directeur d\'hôtel / Directeur d\'hébergement', 'Responsable de la réception et des réservations', 'Gérant de complexe touristique ou de résidence'],
      en: ['Hotel Manager / Accommodation Director', 'Front Office & Reservation Manager', 'Resort and leisure complex administrator'],
    },
  },
  {
    id: 'infographie-webdesign',
    code: 'SOC-04',
    name: {
      fr: 'Infographie, Web Design & Communication Visuelle',
      en: 'Graphic Design, Web Design & Visual Communication',
    },
    domain: 'social_sciences',
    level: ['BTS', 'HND', 'LICENCE'],
    description: {
      fr: 'Création d\'identités visuelles, packaging, design d\'interfaces UI/UX, animations graphiques et supports publicitaires imprimés et digitaux.',
      en: 'Brand identity design, packaging, UI/UX interface design, motion graphics, and digital/print advertising assets.',
    },
    duration: {
      fr: '2 ans (BTS/HND) | 3 ans (Licence)',
      en: '2 years (BTS/HND) | 3 years (Licence)',
    },
    shifts: {
      fr: 'Cours du jour & Cours du soir',
      en: 'Day classes & Evening classes',
    },
    campuses: ['bonaberi', 'mboppi'],
    requirements: {
      fr: ['Baccalauréat toutes séries ou GCE A/L', 'Dossier d\'inscription'],
      en: ['GCE A-Level / Baccalaureate', 'Application file'],
    },
    curriculumHighlights: {
      fr: ['Suite Adobe créative (Photoshop, Illustrator, InDesign)', 'Design d\'interfaces (Figma, UI/UX principles)', 'Motion Design (After Effects)', 'Typographie, colorimétrie et chaîne graphique'],
      en: ['Adobe Creative Suite (Photoshop, Illustrator, InDesign)', 'UI/UX Interface Design in Figma', 'Motion Graphics (After Effects)', 'Typography, color theory, and print prepress'],
    },
    careerOutcomes: {
      fr: ['Directeur artistique junior / Graphiste créatif', 'UI/UX Designer pour applications web et mobiles', 'Infographiste en agence de communication ou maison d\'édition'],
      en: ['Junior Art Director / Graphic Designer', 'UI/UX Designer for web & mobile apps', 'Visual content creator in advertising agencies'],
    },
  },

  // ================= EDUCATION SCIENCES =================
  {
    id: 'education-specialisee',
    code: 'EDU-01',
    name: {
      fr: 'Sciences de l\'Éducation & Éducation Spécialisée',
      en: 'Education Sciences & Special Needs Education',
    },
    domain: 'education',
    level: ['BTS', 'HND', 'LICENCE'],
    description: {
      fr: 'Accompagnement des apprenants à besoins spécifiques, psychopédagogie, ingénierie de la formation et inclusion scolaire.',
      en: 'Special needs educational support, educational psychology, training engineering, and inclusive schooling.',
    },
    duration: {
      fr: '2 ans (BTS/HND) | 3 ans (Licence)',
      en: '2 years (BTS/HND) | 3 years (Licence)',
    },
    shifts: {
      fr: 'Cours du jour & Cours du soir',
      en: 'Day classes & Evening classes',
    },
    campuses: ['bonaberi', 'mboppi'],
    requirements: {
      fr: ['Baccalauréat toutes séries ou GCE A/L', 'Dossier d\'inscription'],
      en: ['GCE A-Level / Baccalaureate', 'Application file'],
    },
    curriculumHighlights: {
      fr: ['Psychologie du développement et de l\'apprentissage', 'Méthodes d\'évaluation et remédiation pédagogique', 'Conception d\'outils didactiques adaptés', 'Législation éducative et inclusion sociale'],
      en: ['Developmental and learning psychology', 'Educational assessment and remediation methods', 'Adapted didactic material design', 'Education legislation and social inclusion'],
    },
    careerOutcomes: {
      fr: ['Éducateur spécialisé en établissement scolaire ou centre d\'accueil', 'Conseiller pédagogique d\'établissement', 'Coordinateur de projets socio-éducatifs'],
      en: ['Special education specialist in schools and care centers', 'Educational guidance counselor', 'Socio-educational program coordinator'],
    },
  },
  {
    id: 'droit-affaires-administration',
    code: 'EDU-02',
    name: {
      fr: 'Droit des Affaires & Administration Scolaire / Entreprise',
      en: 'Business Law & School Administration',
    },
    domain: 'education',
    level: ['BTS', 'HND', 'LICENCE'],
    description: {
      fr: 'Droit des contrats d\'affaires, gestion administrative d\'établissements scolaires et privés, contentieux et conformité légale.',
      en: 'Business contract law, school and enterprise administrative governance, dispute settlement, and regulatory compliance.',
    },
    duration: {
      fr: '2 ans (BTS/HND) | 3 ans (Licence)',
      en: '2 years (BTS/HND) | 3 years (Licence)',
    },
    shifts: {
      fr: 'Cours du jour & Cours du soir',
      en: 'Day classes & Evening classes',
    },
    campuses: ['bonaberi', 'mboppi'],
    requirements: {
      fr: ['Baccalauréat toutes séries ou GCE A/L', 'Dossier d\'inscription'],
      en: ['GCE A-Level / Baccalaureate', 'Application file'],
    },
    curriculumHighlights: {
      fr: ['Droit des affaires et de l\'entreprise (OHADA)', 'Gestion administrative et budgétaire d\'une institution', 'Droit du travail et gestion des litiges', 'Communication institutionnelle et déontologie'],
      en: ['Business & corporate law (OHADA framework)', 'Institutional administrative & budget governance', 'Labor law and dispute resolution', 'Institutional communication & ethics'],
    },
    careerOutcomes: {
      fr: ['Administrateur d\'établissement éducatif ou de centre de formation', 'Juriste d\'entreprise junior / Assistant juridique', 'Responsable de la conformité réglementaire'],
      en: ['Educational facility administrator', 'Corporate legal assistant', 'Compliance & regulatory affairs officer'],
    },
  },
];
