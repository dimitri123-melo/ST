import React, { useState } from 'react';
import { useLanguage } from '../../locales/useLanguage';
import { GALLERY_DATA } from '../../data/faq';
import { GalleryItem } from '../../types';
import { AuthenticVisualRenderer } from '../common/RealCampusGalleryVisuals';
import { Camera, Image as ImageIcon, Sparkles, X, Eye, Maximize2, ShieldCheck, Award } from 'lucide-react';

interface RealPhotoGallerySectionProps {
  onOpenApplication?: () => void;
}

export const RealPhotoGallerySection: React.FC<RealPhotoGallerySectionProps> = ({ onOpenApplication }) => {
  const { language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalItem, setActiveModalItem] = useState<GalleryItem | null>(null);

  const categories = [
    { key: 'all', labelFr: 'Toutes les photos', labelEn: 'All Photos' },
    { key: 'biomedical', labelFr: 'Santé & Soins Infirmiers', labelEn: 'Biomedical & Nursing' },
    { key: 'events', labelFr: 'Défilés & Cérémonies', labelEn: 'Parades & Events' },
    { key: 'campus', labelFr: 'Campus Bonabéri & Mboppi', labelEn: 'Bonaberi & Mboppi Campuses' },
    { key: 'engineering', labelFr: 'Informatique & Laptops', labelEn: 'IT & Laptops' },
    { key: 'agriculture', labelFr: 'Agriculture & Élevage', labelEn: 'Agriculture & Farming' },
    { key: 'students', labelFr: 'Tenues & Examens', labelEn: 'Uniforms & Exams' },
    { key: 'leadership', labelFr: 'Présidence & Promoteur', labelEn: 'President & Promoter' },
  ];

  const filteredItems = GALLERY_DATA.filter((item) => {
    if (selectedCategory === 'all') return true;
    return item.category === selectedCategory;
  });

  const renderVisual = (item: GalleryItem, isModal: boolean = false) => {
    const containerClasses = isModal ? 'w-full h-full min-h-[380px] max-h-[70vh]' : 'w-full h-full';
    return (
      <AuthenticVisualRenderer
        visualKey={item.visualKey}
        fallbackCategory={item.category}
        className={containerClasses}
        altText={item.title[language]}
      />
    );
  };

  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200" id="photo-gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-900 font-bold text-xs uppercase tracking-wider">
            <Camera className="w-3.5 h-3.5 text-emerald-700" />
            <span>{language === 'fr' ? 'Galerie Photos Réelles & Immersion' : 'Real University Photo Showcase'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif-academic text-slate-900">
            {language === 'fr' ? 'La Vie Réelle à l\'Université St Bernard de Douala' : 'Authentic Life at St Bernard University Douala'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
            {language === 'fr'
              ? 'Découvrez nos étudiants en costumes bleu marine officiels, nos blouses médicales blanches à col V vert, la remise des ordinateurs Dell, nos salles climatisées et la présence du Promoteur.'
              : 'Explore our students in official navy blazers, white medical scrubs with green collars, Dell laptop distribution, exam rooms, and institutional leadership in Douala.'}
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                selectedCategory === cat.key
                  ? 'bg-emerald-900 text-amber-300 shadow-md ring-2 ring-amber-400/40'
                  : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              <span>{language === 'fr' ? cat.labelFr : cat.labelEn}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                selectedCategory === cat.key ? 'bg-amber-400 text-emerald-950 font-bold' : 'bg-slate-100 text-slate-500'
              }`}>
                {cat.key === 'all' ? GALLERY_DATA.length : GALLERY_DATA.filter((i) => i.category === cat.key).length}
              </span>
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveModalItem(item)}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-emerald-500 transition-all flex flex-col justify-between"
            >
              {/* Media Container */}
              <div className="relative aspect-4/3 overflow-hidden bg-slate-950">
                {renderVisual(item)}
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4 text-white">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-amber-400 text-slate-950">
                      {item.category.toUpperCase()}
                    </span>
                    <span className="text-xs flex items-center gap-1 text-emerald-200 font-semibold">
                      <Maximize2 className="w-3.5 h-3.5" />
                      {language === 'fr' ? 'Agrandir' : 'Enlarge'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Caption & Metadata Card */}
              <div className="p-4 space-y-1.5 bg-white border-t border-slate-100">
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-emerald-800 transition-colors line-clamp-1">
                  {item.title[language]}
                </h4>
                <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed">
                  {item.caption[language]}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* High-Definition Lightbox Modal */}
      {activeModalItem && (
        <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden border border-slate-700 shadow-2xl animate-in fade-in zoom-in-95 duration-150">
            {/* Close Button */}
            <button
              onClick={() => setActiveModalItem(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-slate-950/90 border border-slate-700 text-white flex items-center justify-center hover:bg-emerald-800 hover:border-amber-400 transition-all shadow-lg"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image Display */}
            <div className="w-full bg-slate-950 flex items-center justify-center overflow-hidden min-h-[350px]">
              {renderVisual(activeModalItem, true)}
            </div>

            {/* Modal Footer Description */}
            <div className="p-6 text-white bg-slate-900 border-t border-slate-800 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-black uppercase px-2.5 py-1 rounded bg-amber-400 text-slate-950">
                    {activeModalItem.category}
                  </span>
                  <span className="text-xs font-bold text-emerald-400 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Douala, Cameroun
                  </span>
                </div>
                {onOpenApplication && (
                  <button
                    onClick={() => {
                      setActiveModalItem(null);
                      onOpenApplication();
                    }}
                    className="py-1.5 px-3 rounded-lg bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-bold transition-all"
                  >
                    {language === 'fr' ? 'Rejoindre cette Promotion' : 'Join this Class'}
                  </button>
                )}
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-bold font-serif-academic text-white">
                  {activeModalItem.title[language]}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                  {activeModalItem.caption[language]}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
