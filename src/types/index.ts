export type Language = 'fr' | 'en';

export type AcademicLevel = 'ALL' | 'BTS' | 'HND' | 'LICENCE' | 'BACHELOR' | 'MASTER' | 'CERTIFICATION';

export type DomainCategory = 
  | 'agriculture'
  | 'business'
  | 'biomedical'
  | 'engineering'
  | 'social_sciences'
  | 'education';

export interface Programme {
  id: string;
  code: string;
  name: {
    fr: string;
    en: string;
  };
  domain: DomainCategory;
  level: AcademicLevel[];
  description: {
    fr: string;
    en: string;
  };
  duration: {
    fr: string;
    en: string;
  };
  shifts: {
    fr: string;
    en: string;
  };
  campuses: ('bonaberi' | 'mboppi')[];
  requirements: {
    fr: string[];
    en: string[];
  };
  curriculumHighlights: {
    fr: string[];
    en: string[];
  };
  careerOutcomes: {
    fr: string[];
    en: string[];
  };
  featured?: boolean;
  specialFlyerNote?: {
    fr: string;
    en: string;
  };
}

export interface CampusInfo {
  id: 'bonaberi' | 'mboppi';
  name: {
    fr: string;
    en: string;
  };
  campusTag: {
    fr: string;
    en: string;
  };
  landmark: {
    fr: string;
    en: string;
  };
  fullAddress: {
    fr: string;
    en: string;
  };
  description: {
    fr: string;
    en: string;
  };
  phone: string;
  whatsapp: string;
  shifts: {
    fr: string;
    en: string;
  };
  features: {
    fr: string[];
    en: string[];
  };
  imageUrl: string;
  galleryUrls: string[];
  mapQuery: string;
}

export interface AdmissionFeeItem {
  category: {
    fr: string;
    en: string;
  };
  level: string;
  registrationFee: string;
  medicalFee: string;
  reprographyFee: string;
  folderStudyFee?: string;
  tuitionNote: {
    fr: string;
    en: string;
  };
  requiredDocs: {
    fr: string[];
    en: string[];
  };
}

export interface NewsArticle {
  id: string;
  title: {
    fr: string;
    en: string;
  };
  category: 'admissions' | 'academic' | 'events' | 'student_life' | 'partnership';
  date: string;
  readTime: string;
  excerpt: {
    fr: string;
    en: string;
  };
  content: {
    fr: string[];
    en: string[];
  };
  imageUrl: string;
  visualKey?: 'delegation-parade' | 'promoter-founder' | 'student-uniform' | 'biomedical-defense' | 'nursing-parade' | 'exam-classroom' | 'clinical-simulation' | 'laptop-distribution' | 'agriculture-practical' | 'bonaberi-facade' | 'mboppi-facade' | 'campus-collage';
  featured?: boolean;
}

export interface GalleryItem {
  id: string;
  title: {
    fr: string;
    en: string;
  };
  category: 'campus' | 'students' | 'biomedical' | 'engineering' | 'agriculture' | 'events' | 'leadership';
  imageUrl: string;
  visualKey?: 'delegation-parade' | 'promoter-founder' | 'student-uniform' | 'biomedical-defense' | 'nursing-parade' | 'exam-classroom' | 'clinical-simulation' | 'laptop-distribution' | 'agriculture-practical' | 'bonaberi-facade' | 'mboppi-facade' | 'campus-collage';
  caption: {
    fr: string;
    en: string;
  };
}

export interface FAQItem {
  id: string;
  category: 'admissions' | 'programmes' | 'campuses' | 'fees' | 'orientation' | 'scholarships';
  question: {
    fr: string;
    en: string;
  };
  answer: {
    fr: string;
    en: string;
  };
}

export interface ApplicationFormData {
  studentFullName: string;
  parentName?: string;
  studentPhone: string;
  whatsappNumber: string;
  email: string;
  cityLocation: string;
  lastDegree: string;
  examStatus: string;
  interestedDomain: DomainCategory | '';
  interestedProgramme: string;
  academicLevel: string;
  preferredCampus: 'bonaberi' | 'mboppi' | 'undecided';
  preferredShift: 'day' | 'evening' | 'undecided';
  needOrientation: 'yes' | 'no' | 'partial';
  message?: string;
}

export type PageView = 
  | 'home'
  | 'about'
  | 'programmes'
  | 'admissions'
  | 'campuses'
  | 'student-life'
  | 'news'
  | 'gallery'
  | 'faq'
  | 'contact';
