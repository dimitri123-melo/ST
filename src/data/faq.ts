import { GalleryItem, FAQItem } from '../types';

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: 'gal-delegation',
    title: {
      fr: 'Délégation Officielle & Défilé de la Jeunesse (Douala)',
      en: 'Official Student Delegation & Youth Day Parade (Douala)',
    },
    category: 'events',
    visualKey: 'delegation-parade',
    imageUrl: '',
    caption: {
      fr: 'Étudiants en costume bleu marine officiel, chemise blanche, cravate verte St Bernard et drapeaux du Cameroun',
      en: 'Students in official navy blue blazers, white shirts, St Bernard green ties, and Cameroon flags',
    },
  },
  {
    id: 'gal-promoter',
    title: {
      fr: 'Présidence & Promoteur Fondateur de l\'Université St Bernard',
      en: 'President & Founding Promoter of St Bernard University',
    },
    category: 'leadership',
    visualKey: 'promoter-founder',
    imageUrl: '',
    caption: {
      fr: 'Séance institutionnelle à la table présidentielle, pôle Commerce et Gestion St Bernard Douala',
      en: 'Executive governance session at the presidential board, Commerce and Management wing Douala',
    },
  },
  {
    id: 'gal-student-uniform',
    title: {
      fr: 'Tenue Réglementaire Étudiante - Sciences de Gestion',
      en: 'Official Student Attire - Management & Business Sciences',
    },
    category: 'students',
    visualKey: 'student-uniform',
    imageUrl: '',
    caption: {
      fr: 'Étudiante en chemise blanche à manches longues, cravate verte officielle et pantalon de costume bleu marine',
      en: 'Student in crisp white long-sleeve dress shirt, official emerald green tie, and navy blue formal trousers',
    },
  },
  {
    id: 'gal-biomedical-defense',
    title: {
      fr: 'Soutenance de Fin de Cycle & Pratique Biomédicale',
      en: 'Final Degree Thesis Defense & Biomedical Practice',
    },
    category: 'biomedical',
    visualKey: 'biomedical-defense',
    imageUrl: '',
    caption: {
      fr: 'Étudiant en blouse médicale blanche avec col V et liseré vert, badge porte-carte et dossiers académiques',
      en: 'Student in white medical tunic with green V-neck trim, official lanyard ID badge, and academic defense dossiers',
    },
  },
  {
    id: 'gal-nursing-parade',
    title: {
      fr: 'Grande Procession des Étudiants en Soins Infirmiers',
      en: 'Grand Nursing & Healthcare Student Procession',
    },
    category: 'biomedical',
    visualKey: 'nursing-parade',
    imageUrl: '',
    caption: {
      fr: 'Défilé dans les rues de Douala des soignants en tuniques blanches à col vert et toques infirmières',
      en: 'Healthcare procession through Douala in white scrub uniforms with green V-collars and nurse caps',
    },
  },
  {
    id: 'gal-exam-classroom',
    title: {
      fr: 'Salle d\'Examen & Cours Magistraux Climatisés',
      en: 'Air-Conditioned Examination Hall & Lecture Sessions',
    },
    category: 'students',
    visualKey: 'exam-classroom',
    imageUrl: '',
    caption: {
      fr: 'Étudiants concentrés en polo blanc et vert brodé St Bernard (Licence & Master) lors des évaluations',
      en: 'Students focused during exams wearing white and green St Bernard embroidered polo uniforms',
    },
  },
  {
    id: 'gal-clinical-simulation',
    title: {
      fr: 'Travaux Pratiques en Milieu Hospitalier Partenaire',
      en: 'Clinical Simulation & Practical Ward Training',
    },
    category: 'biomedical',
    visualKey: 'clinical-simulation',
    imageUrl: '',
    caption: {
      fr: 'Simulations cliniques, soins respiratoires et gestes d\'urgence en tenue médicale bleue et rose avec gants stériles',
      en: 'Hands-on clinical simulation and emergency airway management in partner hospital facilities',
    },
  },
  {
    id: 'gal-laptop-distribution',
    title: {
      fr: 'Dotation des Ordinateurs Portables & Filières Numériques',
      en: 'Laptop Distribution & Digital Engineering Program',
    },
    category: 'engineering',
    visualKey: 'laptop-distribution',
    imageUrl: '',
    caption: {
      fr: 'Remise officielle d\'ordinateurs portables Dell aux étudiants en technologies et gestion pour le e-learning',
      en: 'Official distribution of study laptops to technology and business students for hands-on IT training',
    },
  },
  {
    id: 'gal-campus-bonaberi',
    title: {
      fr: 'Campus Principal Bonabéri (Façade Verrière & Poste de Garde)',
      en: 'Main Bonaberi Campus (Glass Mirror Facade & Gatehouse)',
    },
    category: 'campus',
    visualKey: 'bonaberi-facade',
    imageUrl: '',
    caption: {
      fr: 'Complexe moderne en face de la boulangerie de la Gare avec verrière miroir bleue et drapeaux',
      en: 'Modern architectural facility opposite Gare bakery with blue reflective glass curtain and flagpoles',
    },
  },
  {
    id: 'gal-campus-mboppi',
    title: {
      fr: 'Campus B Mboppi (Bâtiment 4 Étages derrière Ecobank)',
      en: 'Campus B Mboppi (4-Story Academic Facility Behind Ecobank)',
    },
    category: 'campus',
    visualKey: 'mboppi-facade',
    imageUrl: '',
    caption: {
      fr: 'Pôle médical et gestion à Mboppi avec panneaux de façade verts et enseigne officielle St Bernard',
      en: 'Medical and management facility in Mboppi featuring green architectural bands and entrance signage',
    },
  },
  {
    id: 'gal-agriculture-practical',
    title: {
      fr: 'Travaux Pratiques en Agriculture & Aquaculture',
      en: 'Agriculture & Aquaculture Practical Fieldwork',
    },
    category: 'agriculture',
    visualKey: 'agriculture-practical',
    imageUrl: '',
    caption: {
      fr: 'Étudiants camerounais en gilets St Bernard lors de la gestion d\'écloseries piscicoles et de pépinières',
      en: 'Students in St Bernard field vests during practical hatchery management and crop nursery operations',
    },
  },
  {
    id: 'gal-campus-collage',
    title: {
      fr: 'Panoramique Officiel 4-Vues des Campus St Bernard',
      en: 'Official 4-View Campus Poster & Atrium Walkways',
    },
    category: 'campus',
    visualKey: 'campus-collage',
    imageUrl: '',
    caption: {
      fr: 'Affiche institutionnelle : Emblème St Bernard, atrium Bonabéri, campus Mboppi et galeries intérieures',
      en: 'Institutional poster: St Bernard crest, Bonaberi atrium tower, Mboppi campus, and academic corridors',
    },
  },
  {
    id: 'gal-culinary-class',
    title: {
      fr: 'Travaux Pratiques en Arts Culinaires & Hôtellerie',
      en: 'Practical Arts in Culinary & Hospitality',
    },
    category: 'tourism',
    visualKey: 'culinary-class',
    imageUrl: '',
    caption: {
      fr: 'Étudiants en tenue de chef (toques et vestes blanches à liseré vert) en pleine séance de découpe et préparation culinaire sous la supervision d\'un chef instructeur.',
      en: 'Students in chef attire (toques and white jackets with green trim) actively participating in a culinary preparation and cutting session under the supervision of a chef instructor.',
    },
  },
  {
    id: 'gal-fruit-carving',
    title: {
      fr: 'Art Culinaire : Sculpture sur Fruits & Décoration',
      en: 'Culinary Art: Fruit Carving & Decoration',
    },
    category: 'tourism',
    visualKey: 'fruit-carving',
    imageUrl: '',
    caption: {
      fr: 'Chef-d\'œuvre d\'art culinaire réalisé par les étudiants : sculpture impressionnante du logo St Bernard University sur une pastèque, accompagnée d\'une composition de fruits exotiques.',
      en: 'Culinary masterpiece created by students: an impressive carving of the St Bernard University logo on a watermelon, accompanied by a display of exotic fruits.',
    },
  },
  {
    id: 'gal-field-work',
    title: {
      fr: 'Agriculture & Foresterie : Travail sur le Terrain',
      en: 'Agriculture & Forestry: Practical Field Work',
    },
    category: 'agriculture',
    visualKey: 'field-work',
    imageUrl: '',
    caption: {
      fr: 'Étudiants en combinaison verte de travail sur le terrain, en pause lors d\'une session pratique dans une exploitation forestière et agricole.',
      en: 'Students in green field work jumpsuits taking a break during a practical session in a forestry and agricultural setting.',
    },
  },
  {
    id: 'gal-electrical-lab',
    title: {
      fr: 'Génie Électrique : Laboratoire & Câblage',
      en: 'Electrical Engineering: Laboratory & Wiring',
    },
    category: 'engineering',
    visualKey: 'electrical-lab',
    imageUrl: '',
    caption: {
      fr: 'Étudiante concentrée réalisant des montages électriques et le câblage de composants industriels sur un banc d\'essai.',
      en: 'Focused student working on electrical assemblies and wiring industrial components on a test bench.',
    },
  },
  {
    id: 'gal-maritime-training',
    title: {
      fr: 'Génie Maritime : Visite & Formation Portuaire',
      en: 'Maritime Engineering: Port Visit & Training',
    },
    category: 'maritime',
    visualKey: 'maritime-training',
    imageUrl: '',
    caption: {
      fr: 'Étudiants en gilets haute visibilité et casques de sécurité lors d\'une formation pratique sur un navire au port autonome.',
      en: 'Students in high-visibility vests and safety helmets during practical training on a vessel at the autonomous port.',
    },
  },
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'admissions',
    question: {
      fr: 'Quels sont les diplômes et cycles proposés à St Bernard ?',
      en: 'What degree cycles and levels are offered at St Bernard?',
    },
    answer: {
      fr: 'L\'Institut Universitaire St Bernard propose des formations en BTS (Brevet de Technicien Supérieur), HND (Higher National Diploma), Licence Professionnelle / Bachelor Degree, et Master Professionnel dans 6 grands domaines : Sciences Biomédicales, Industrie & Technologie, Commerce & Gestion, Agriculture & Pêche, Sciences Sociales, et Sciences de l\'Éducation.',
      en: 'St Bernard University Institute offers BTS, HND, Professional Bachelor / Licence, and Professional Master programs across 6 major domains: Biomedical Sciences, Industry & Technology, Business & Management, Agriculture, Social Sciences, and Education Sciences.',
    },
  },
  {
    id: 'faq-2',
    category: 'scholarships',
    question: {
      fr: 'Comment bénéficier de l\'offre spéciale Rentrée 2026/2027 (Bourse 60.000 FCFA / Ordinateur / Smartphone) ?',
      en: 'How do I qualify for the early 2026/2027 offer (60,000 FCFA Scholarship / Laptop / Smartphone)?',
    },
    answer: {
      fr: 'Pour être éligible, l\'étudiant doit valider son inscription avant le mois de septembre 2026. L\'étudiant peut choisir entre une bourse de 60.000 FCFA déduite de sa scolarité, un ordinateur portable pour ses études, ou un smartphone connecté, selon les conditions d\'attribution en vigueur.',
      en: 'To be eligible, candidates must complete and validate their registration before September 2026. Students can choose between a 60,000 FCFA tuition scholarship, a study laptop, or a connected smartphone, in accordance with applicable terms.',
    },
  },
  {
    id: 'faq-3',
    category: 'campuses',
    question: {
      fr: 'Où se situent exactement les campus de Bonabéri et de Mboppi à Douala ?',
      en: 'Where exactly are the Bonaberi and Mboppi campuses located in Douala?',
    },
    answer: {
      fr: 'Le Campus A se trouve à Bonabéri, directement en face de la boulangerie de la Gare. Le Campus B est situé à Mboppi, derrière l\'agence ECOBANK (à l\'entrée Ecobank). Les deux campus sont facilement accessibles par les transports en commun.',
      en: 'Campus A is situated in Bonaberi, directly opposite Boulangerie de la Gare. Campus B is in Mboppi, behind the ECOBANK branch (near the Ecobank entrance). Both campuses are easily accessible by public transit.',
    },
  },
  {
    id: 'faq-4',
    category: 'fees',
    question: {
      fr: 'Quels sont les frais d\'inscription officiels pour la session 2026/2027 ?',
      en: 'What are the official registration fees for the 2026/2027 academic session?',
    },
    answer: {
      fr: 'Les frais d\'inscription sont de 30.000 FCFA pour le cycle BTS/HND (+ 5.000 FCFA de couverture médicale), 40.000 FCFA pour le cycle Licence Professionnelle (+ 10.000 FCFA de couverture médicale), et 50.000 FCFA pour le cycle Master (+ 10.000 FCFA de couverture médicale + 15.000 FCFA d\'étude de dossier). Les frais de pension/scolarité sont payables en tranches étalées sur l\'année.',
      en: 'Registration fees are 30,000 FCFA for BTS/HND (+ 5,000 FCFA medical fee), 40,000 FCFA for Bachelor/Licence (+ 10,000 FCFA medical fee), and 50,000 FCFA for Master (+ 10,000 FCFA medical fee + 15,000 FCFA file review fee). Tuition fees are payable in flexible installments across the academic year.',
    },
  },
  {
    id: 'faq-5',
    category: 'orientation',
    question: {
      fr: 'Proposez-vous un accompagnement pour m\'aider à choisir la bonne filière ?',
      en: 'Do you provide guidance to help me choose the right field of study?',
    },
    answer: {
      fr: 'Oui, absolument ! Nos conseillers d\'orientation pédagogique vous accueillent gratuitement sur les campus et répondent instantanément sur WhatsApp (+237 682 764 947) pour évaluer votre profil et vos perspectives de carrière.',
      en: 'Yes, absolutely! Our academic advisors welcome you free of charge on campus and answer immediately via WhatsApp (+237 682 764 947) to evaluate your profile and career opportunities.',
    },
  },
  {
    id: 'faq-6',
    category: 'admissions',
    question: {
      fr: 'Les cours sont-ils dispensés en journée ou en soirée ?',
      en: 'Are courses scheduled during the day or in the evening?',
    },
    answer: {
      fr: 'L\'Institut Universitaire St Bernard propose deux formules : les cours du jour (pour les étudiants à temps plein) et les cours du soir (aménagés pour les professionnels, travailleurs et étudiants en reconversion).',
      en: 'St Bernard University Institute offers two flexible formats: Day Classes (for full-time students) and Evening Classes (tailored for working professionals and career switchers).',
    },
  },
  {
    id: 'faq-7',
    category: 'scholarships',
    question: {
      fr: 'En quoi consiste l\'assurance santé et les 3 hôpitaux partenaires St Bernard ?',
      en: 'What is the health insurance coverage and the 3 partner St Bernard hospitals?',
    },
    answer: {
      fr: 'Nos étudiants bénéficient d\'une couverture santé à hauteur de 50% pour les consultations et soins dans les 3 hôpitaux partenaires du réseau St Bernard, garantissant un suivi médical de qualité tout au long de leur cursus.',
      en: 'Our enrolled students benefit from a 50% health coverage reduction for medical consultations and care in the 3 St Bernard network partner hospitals, ensuring medical peace of mind during their studies.',
    },
  },
];
