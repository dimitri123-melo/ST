import { useEffect } from 'react';
import { PageView } from '../types';
import { useLanguage } from '../locales/useLanguage';

interface SEOConfig {
  titleFr: string;
  titleEn: string;
  descFr: string;
  descEn: string;
}

const SEO_MAP: Record<PageView, SEOConfig> = {
  home: {
    titleFr: "Institut Universitaire St Bernard | Accueil",
    titleEn: "St Bernard University Institute | Home",
    descFr: "L'Institut Universitaire St Bernard (IUSB) à Douala forme des professionnels compétents (BTS, HND, Licence, Bachelor, Master) avec une insertion professionnelle rapide.",
    descEn: "St Bernard University Institute (IUSB) in Douala trains competent professionals (HND, Bachelor, Master) with guaranteed fast professional integration.",
  },
  about: {
    titleFr: "À Propos de Nous | Institut Universitaire St Bernard",
    titleEn: "About Us | St Bernard University Institute",
    descFr: "Découvrez l'Institut Universitaire St Bernard, son histoire, sa vision académique, ses campus à Douala et son accréditation officielle du MINESUP.",
    descEn: "Discover St Bernard University Institute, its history, academic vision, campuses in Douala, and official MINESUP accreditation.",
  },
  programmes: {
    titleFr: "Nos Formations (BTS, HND, Licence, Master) | IUSB",
    titleEn: "Our Programmes (HND, Bachelor, Master) | IUSB",
    descFr: "Explorez nos formations en Santé, Informatique, Commerce, Agriculture et Droit à l'Institut Universitaire St Bernard.",
    descEn: "Explore our academic programmes in Health, Engineering, Business, Agriculture, and Law at St Bernard University Institute.",
  },
  admissions: {
    titleFr: "Admissions & Inscriptions 2026/2027 | IUSB Douala",
    titleEn: "Admissions & Enrollment 2026/2027 | IUSB Douala",
    descFr: "Rejoignez l'Institut Universitaire St Bernard. Bourse de 60 000 FCFA, ordinateur offert et réductions sur les frais médicaux pour l'année 2026/2027.",
    descEn: "Join St Bernard University Institute. 60,000 FCFA scholarship, free laptop, and medical fee reductions for the 2026/2027 academic year.",
  },
  campuses: {
    titleFr: "Nos Campus à Douala (Bonabéri & Mboppi) | IUSB",
    titleEn: "Our Campuses in Douala (Bonaberi & Mboppi) | IUSB",
    descFr: "L'IUSB dispose de deux campus modernes à Douala : Bonabéri (Site Principal) et Mboppi (Pôle Médical & Gestion).",
    descEn: "IUSB operates two modern campuses in Douala: Bonaberi (Main Campus) and Mboppi (Medical & Business Hub).",
  },
  'student-life': {
    titleFr: "Vie Étudiante & Avantages (Auto-école, Santé) | IUSB",
    titleEn: "Student Life & Benefits (Driving School, Health) | IUSB",
    descFr: "Profitez d'une vie étudiante épanouie à l'IUSB : auto-école offerte, 50% de réduction santé, tenues académiques et clubs étudiants.",
    descEn: "Enjoy a fulfilling student life at IUSB: free driving school, 50% health discount, tailored uniforms, and vibrant student clubs.",
  },
  news: {
    titleFr: "Actualités & Événements du Campus | IUSB",
    titleEn: "Campus News & Events | IUSB",
    descFr: "Restez informé des dernières annonces, rentrées académiques, séminaires et événements à l'Institut Universitaire St Bernard.",
    descEn: "Stay updated on the latest announcements, academic back-to-school dates, seminars, and events at St Bernard University Institute.",
  },
  faq: {
    titleFr: "Foire Aux Questions (FAQ) | IUSB",
    titleEn: "Frequently Asked Questions (FAQ) | IUSB",
    descFr: "Trouvez les réponses à vos questions concernant les admissions, les frais de scolarité, les diplômes et la vie sur le campus.",
    descEn: "Find answers to your questions regarding admissions, tuition fees, degrees, and campus life.",
  },
  contact: {
    titleFr: "Contactez-Nous | Institut Universitaire St Bernard",
    titleEn: "Contact Us | St Bernard University Institute",
    descFr: "Contactez l'IUSB pour toute information ou pour organiser une visite de nos campus à Douala.",
    descEn: "Contact IUSB for any information or to schedule a visit to our campuses in Douala.",
  }
};

export const useSEO = (page: PageView) => {
  const { language } = useLanguage();

  useEffect(() => {
    const config = SEO_MAP[page];
    if (!config) return;

    const title = language === 'fr' ? config.titleFr : config.titleEn;
    const description = language === 'fr' ? config.descFr : config.descEn;

    document.title = title;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    } else {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      metaDesc.setAttribute('content', description);
      document.head.appendChild(metaDesc);
    }

    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title);
    } else {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      ogTitle.setAttribute('content', title);
      document.head.appendChild(ogTitle);
    }

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute('content', description);
    } else {
      ogDesc = document.createElement('meta');
      ogDesc.setAttribute('property', 'og:description');
      ogDesc.setAttribute('content', description);
      document.head.appendChild(ogDesc);
    }
  }, [page, language]);
};
