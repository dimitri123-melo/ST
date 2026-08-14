import { NewsArticle } from '../types';

export const NEWS_DATA: NewsArticle[] = [
  {
    id: 'rentree-academique-2026-2027',
    title: {
      fr: 'Ouverture officielle des inscriptions pour l\'année académique 2026 / 2027',
      en: 'Official Opening of Admissions for the 2026 / 2027 Academic Year',
    },
    category: 'admissions',
    date: '14 Août 2026',
    readTime: '3 min',
    excerpt: {
      fr: 'L\'Institut Universitaire St Bernard lance sa campagne de recrutement sur les campus de Bonabéri et Mboppi avec des opportunités d\'accompagnement exceptionnelles pour les premiers inscrits.',
      en: 'St Bernard University Institute launches its admissions campaign on both Bonaberi and Mboppi campuses with exclusive early registration perks.',
    },
    content: {
      fr: [
        'La Direction Générale de l\'Institut Universitaire St Bernard informe les nouveaux bacheliers, titulaires du GCE Advanced Level, ainsi que les candidats aux cycles de Licence et Master que les inscriptions pour la session académique 2026 / 2027 sont officiellement ouvertes.',
        'Afin d\'accompagner les étudiants dans leur insertion professionnelle et alléger la charge des familles, l\'établissement maintient son programme d\'avantages exclusifs : bourse de 60.000 FCFA ou dotation en ordinateur portable / smartphone pour toute inscription validée avant septembre 2026.',
        'Les équipes d\'orientation sont disponibles du lundi au samedi sur nos deux campus (Bonabéri en face de la boulangerie de la Gare et Mboppi derrière ECOBANK) ainsi que via notre assistance WhatsApp dédiée.'
      ],
      en: [
        'The Management of St Bernard University Institute informs new high school graduates, GCE A-Level holders, and candidates for Bachelor and Master programs that admissions for the 2026/2027 academic session are now officially open.',
        'To support students in their professional journeys and ease family expenses, the institution maintains its early registration benefits: 60,000 FCFA scholarship or laptop/smartphone package for enrollments validated before September 2026.',
        'Our academic guidance teams are available Monday through Saturday at both campuses (Bonaberi opposite Boulangerie de la Gare and Mboppi behind ECOBANK) as well as via our dedicated WhatsApp helpline.'
      ],
    },
    imageUrl: '',
    visualKey: 'delegation-parade',
    featured: true,
  },
  {
    id: 'partenariats-hospitaliers-st-bernard',
    title: {
      fr: 'Immersion clinique : nos 3 centres hospitaliers St Bernard prêts à accueillir nos étudiants en santé',
      en: 'Clinical Immersion: Our 3 Partner St Bernard Hospitals Ready for Healthcare Students',
    },
    category: 'academic',
    date: '02 Août 2026',
    readTime: '4 min',
    excerpt: {
      fr: 'Les étudiants en Sciences Biomédicales, Imagerie Médicale, Soins Infirmiers et Laboratoire bénéficient d\'une pratique clinique directe et de 50% de couverture médicale.',
      en: 'Students in Biomedical Sciences, Medical Imaging, Nursing, and Laboratory Sciences benefit from direct clinical practice and 50% medical coverage.',
    },
    content: {
      fr: [
        'L\'Institut Universitaire St Bernard réaffirme son engagement pour un enseignement 100% tourné vers la pratique. Grâce au réseau de 3 hôpitaux partenaires St Bernard, nos étudiants en sciences biomédicales effectuent des stages réguliers au contact des patients et des équipements de pointe.',
        'Cette immersion garantit une maîtrise concrète des protocoles d\'imagerie médicale, des analyses en laboratoire, et de la réanimation hospitalière dès les premières années de formation.'
      ],
      en: [
        'St Bernard University Institute reaffirms its commitment to practical, job-oriented learning. Thanks to our 3 partner St Bernard hospitals, students in biomedical disciplines undertake regular internships with real patients and state-of-the-art diagnostic equipment.',
        'This direct immersion ensures practical mastery in medical imaging, laboratory assays, and clinical nursing from year one.'
      ],
    },
    imageUrl: '',
    visualKey: 'nursing-parade',
    featured: true,
  },
  {
    id: 'nouvelle-filiere-ia-cybersecurite',
    title: {
      fr: 'Renforcement du pôle Industrie & Technologie : IA, Génie Logiciel et Cybersécurité',
      en: 'Engineering & Technology Expansion: AI, Software Engineering and Cyber Security',
    },
    category: 'academic',
    date: '18 Juillet 2026',
    readTime: '3 min',
    excerpt: {
      fr: 'Face aux besoins croissants du marché numérique camerounais et international, IUSB renforce ses laboratoires informatiques et ses programmes en Intelligence Artificielle.',
      en: 'Meeting market demands in Cameroon and internationally, IUSB upgrades its computer laboratories and Artificial Intelligence programs.',
    },
    content: {
      fr: [
        'Les entreprises locales et multinationales recherchent activement des experts capables de concevoir des applications résilientes, de protéger les données sensibles et d\'automatiser les processus métier.',
        'Le campus de Bonabéri s\'est enrichi de nouveaux postes informatiques haute performance et de serveurs dédiés à l\'apprentissage du Cloud, du DevOps et du Machine Learning.'
      ],
      en: [
        'Enterprises actively seek engineers capable of developing resilient cloud systems, securing sensitive data, and automating business workflows.',
        'The Bonaberi campus has been enhanced with high-performance computing labs and dedicated servers for Cloud, DevOps, and Machine Learning instruction.'
      ],
    },
    imageUrl: '',
    visualKey: 'laptop-distribution',
  },
  {
    id: 'ateliers-pratiques-agriculture-aquaculture',
    title: {
      fr: 'Journée terrain en Agriculture & Aquaculture : de la théorie au bassin piscicole',
      en: 'Field Practical Day in Agriculture & Aquaculture: From Class to Fish Farm',
    },
    category: 'student_life',
    date: '28 Juin 2026',
    readTime: '2 min',
    excerpt: {
      fr: 'Immersion de nos apprenants en aquaculture et production agro-pastorale avec formulation d\'aliments et gestion d\'écloseries.',
      en: 'Hands-on immersion for aquaculture and agro-pastoral students covering fish feed formulation and hatchery operations.',
    },
    content: {
      fr: [
        'Les étudiants du pôle Agriculture et Sciences Agro-Pastorales ont participé à une session intensive de mise en situation réelle.',
        'Ces travaux pratiques permettent aux futurs diplômés d\'être immédiatement opérationnels pour lancer leur propre exploitation ou encadrer des projets coopératifs.'
      ],
      en: [
        'Students in Agriculture and Agro-Pastoral Sciences participated in an intensive practical field session.',
        'These hands-on workshops equip future graduates to immediately manage commercial fish farms or agricultural cooperatives.'
      ],
    },
    imageUrl: '',
    visualKey: 'agriculture-practical',
  },
];
