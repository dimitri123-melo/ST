import { CampusInfo } from '../types';

export const CAMPUSES_DATA: CampusInfo[] = [
  {
    id: 'bonaberi',
    name: {
      fr: 'Campus Bonabéri (Campus A)',
      en: 'Bonaberi Campus (Campus A)',
    },
    campusTag: {
      fr: 'Campus Principal & Centre des Technologies',
      en: 'Main Campus & Technology Center',
    },
    landmark: {
      fr: 'En face de la boulangerie de la Gare',
      en: 'Opposite Boulangerie de la Gare',
    },
    fullAddress: {
      fr: 'Bonabéri, Douala (en face de la boulangerie de la Gare), Littoral, Cameroun',
      en: 'Bonaberi, Douala (Opposite Boulangerie de la Gare), Littoral Region, Cameroon',
    },
    description: {
      fr: 'Immeuble moderne doté de salles de cours climatisées, laboratoires informatiques haute performance, ateliers de génie civil et salles de travaux pratiques. Idéalement situé sur l\'axe principal de Bonabéri.',
      en: 'Modern university complex equipped with air-conditioned classrooms, high-performance computer laboratories, civil engineering workshops, and practical training facilities. Conveniently situated along the main Bonaberi axis.',
    },
    phone: '+237 672 91 81 76',
    whatsapp: '237672918176',
    shifts: {
      fr: 'Cours du jour (08h00 - 15h30) & Cours du soir (17h30 - 21h00)',
      en: 'Day Shift (08:00 AM - 03:30 PM) & Evening Shift (05:30 PM - 09:00 PM)',
    },
    features: {
      fr: [
        'Laboratoires informatiques et réseau ultra-connectés',
        'Ateliers pratiques de génie industriel et technologie',
        'Bibliothèque physique et pôle de ressources numériques',
        'Service des admissions et d\'orientation personnalisé',
        'Amphithéâtre pour séminaires et conférences académiques',
        'Parking sécurisé et accès direct aux transports urbains'
      ],
      en: [
        'Ultra-connected computer and networking labs',
        'Industrial engineering and technology workshops',
        'Physical library and digital research hub',
        'Personalized admissions & career guidance center',
        'Amphitheater for academic conferences and seminars',
        'Secure parking and direct access to public transit'
      ],
    },
    imageUrl: '',
    galleryUrls: [],
    mapQuery: 'Douala+Bonaberi+Gare',
  },
  {
    id: 'mboppi',
    name: {
      fr: 'Campus Mboppi (Campus B)',
      en: 'Mboppi Campus (Campus B)',
    },
    campusTag: {
      fr: 'Pôle d\'Excellence Médicale & Gestion',
      en: 'Medical & Management Center of Excellence',
    },
    landmark: {
      fr: 'Derrière ECOBANK (entrée Ecobank)',
      en: 'Behind ECOBANK (near Ecobank entrance)',
    },
    fullAddress: {
      fr: 'Mboppi, Douala (derrière l\'agence ECOBANK Mboppi), Littoral, Cameroun',
      en: 'Mboppi, Douala (Behind ECOBANK Mboppi Branch), Littoral Region, Cameroon',
    },
    description: {
      fr: 'Campus ultra-moderne au cœur économique de Douala. Spécialement aménagé avec des laboratoires d\'analyses biomédicales, unités de simulation de soins infirmiers, salles d\'imagerie médicale et espaces d\'études collaboratifs pour les filières de gestion et santé.',
      en: 'Ultra-modern campus in the economic heart of Douala. Specially designed with biomedical laboratory testing units, nursing clinical simulation rooms, medical imaging equipment, and collaborative business learning suites.',
    },
    phone: '+237 696 05 11 11',
    whatsapp: '237696051111',
    shifts: {
      fr: 'Cours du jour (08h00 - 15h30) & Cours du soir (17h30 - 21h00)',
      en: 'Day Shift (08:00 AM - 03:30 PM) & Evening Shift (05:30 PM - 09:00 PM)',
    },
    features: {
      fr: [
        'Laboratoires de biologie clinique et hématologie',
        'Salle de simulation clinique et soins infirmiers équipés',
        'Pôle de gestion, commerce international et finance d\'entreprise',
        'Centre d\'accès direct aux 3 hôpitaux St Bernard partenaires',
        'Wifi campus haut débit pour étudiants',
        'Accès immédiat par les grands axes de transport de Mboppi'
      ],
      en: [
        'Clinical biology and hematology testing labs',
        'Equipped clinical nursing simulation wards',
        'Business, international trade and finance hub',
        'Direct clinical bridge with 3 partner St Bernard hospitals',
        'High-speed student campus Wi-Fi',
        'Immediate transit accessibility from Mboppi main hubs'
      ],
    },
    imageUrl: '',
    galleryUrls: [],
    mapQuery: 'Douala+Mboppi+Ecobank',
  },
];
