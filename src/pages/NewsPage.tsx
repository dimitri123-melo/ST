import React, { useState } from 'react';
import { useLanguage } from '../locales/useLanguage';
import { NEWS_DATA } from '../data/news';
import { NewsArticle } from '../types';
import { AuthenticVisualRenderer } from '../components/common/RealCampusGalleryVisuals';
import {
  Newspaper,
  Calendar,
  Clock,
  ArrowRight,
  Sparkles,
  Tag,
  Search,
  BookOpen,
} from 'lucide-react';

interface NewsPageProps {
  onSelectArticle: (article: NewsArticle) => void;
}

export const NewsPage: React.FC<NewsPageProps> = ({ onSelectArticle }) => {
  const { t, language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', labelFr: 'Toutes les annonces', labelEn: 'All Announcements' },
    { id: 'admissions', labelFr: 'Admissions & Inscriptions', labelEn: 'Admissions & Enrolment' },
    { id: 'academic', labelFr: 'Académique & Examens', labelEn: 'Academic & Exams' },
    { id: 'events', labelFr: 'Événements & Séminaires', labelEn: 'Events & Seminars' },
    { id: 'student_life', labelFr: 'Vie Étudiante & Santé', labelEn: 'Student Life & Health' },
    { id: 'partnership', labelFr: 'Tutelles & Partenariats', labelEn: 'Tutelage & Partnerships' },
  ];

  const filteredNews = NEWS_DATA.filter((article) => {
    if (selectedCategory !== 'all' && article.category !== selectedCategory) return false;

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchTitle = article.title.fr.toLowerCase().includes(q) || article.title.en.toLowerCase().includes(q);
      const matchExcerpt = article.excerpt.fr.toLowerCase().includes(q) || article.excerpt.en.toLowerCase().includes(q);
      if (!matchTitle && !matchExcerpt) return false;
    }

    return true;
  });

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-emerald-950 via-emerald-900 to-slate-900 text-white py-16 sm:py-20 border-b-4 border-amber-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-800/80 border border-emerald-600/80 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <Newspaper className="w-4 h-4" />
            <span>{language === 'fr' ? 'Actualités & Communications' : 'News & Announcements'}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-serif-academic text-white">
            {language === 'fr' ? 'Vie du Campus & Calendrier 2026/2027' : 'Campus Updates & Academic Calendar'}
          </h1>
          <p className="text-sm sm:text-base text-slate-200 max-w-2xl mx-auto leading-relaxed">
            {language === 'fr'
              ? 'Retrouvez les dernières annonces officielles, les dates d\'inscription et les temps forts de l\'Institut St Bernard.'
              : 'Official university news, enrollment deadlines, and key moments from St Bernard academic life.'}
          </p>
        </div>
      </section>

      {/* Main News Stream */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Filter controls */}
        <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm space-y-4">
          {/* Search bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={language === 'fr' ? 'Rechercher une annonce ou actualité...' : 'Search an announcement...'}
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:bg-white"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-emerald-800 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {language === 'fr' ? cat.labelFr : cat.labelEn}
              </button>
            ))}
          </div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNews.map((article) => (
            <div
              key={article.id}
              onClick={() => onSelectArticle(article)}
              className="group cursor-pointer bg-white rounded-3xl overflow-hidden border border-slate-200 hover:border-emerald-500 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                  <AuthenticVisualRenderer
                    visualKey={article.visualKey}
                    fallbackCategory={article.category}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    altText={article.title[language]}
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-emerald-900/90 text-amber-300 font-extrabold text-[10px] uppercase px-2.5 py-0.5 rounded-full backdrop-blur-sm">
                      {article.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-2">
                  <div className="flex items-center gap-2 text-[11px] text-slate-500">
                    <Calendar className="w-3.5 h-3.5 text-emerald-700" />
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="font-bold text-base text-slate-900 group-hover:text-emerald-800 transition-colors leading-snug">
                    {article.title[language]}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {article.excerpt[language]}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <span className="text-xs font-bold text-emerald-800 group-hover:underline flex items-center gap-1">
                  {t.news.readMore} →
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
