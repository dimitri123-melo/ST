import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  variant?: 'light' | 'dark' | 'white';
  type?: 'seal' | 'crest';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const OfficialSeal: React.FC<{ className?: string }> = ({ className = 'w-full h-full object-contain' }) => {
  return <img src="/images/logo.png" alt="St Bernard University Seal" className={className} />;
};

export const BrandCrest: React.FC<{ className?: string; color?: string }> = ({ className = 'w-full h-full object-contain' }) => {
  return <img src="/images/logo.png" alt="St Bernard University Crest" className={className} />;
};

export const UniversityLogo: React.FC<LogoProps> = ({
  className,
  size = 'md',
  variant = 'dark',
}) => {
  // Responsive sizing defaults if no explicit className provided
  const sizeClasses = {
    sm: 'h-10 sm:h-12',
    md: 'h-14 sm:h-16',
    lg: 'h-20 sm:h-24',
    xl: 'h-28 sm:h-32',
  };

  const activeSizeClass = className || sizeClasses[size];
  const filterClass = variant === 'white' ? 'filter brightness-0 invert opacity-90' : '';

  return (
    <div className="flex items-center select-none">
      <img 
        src="/images/logo.png" 
        alt="St Bernard University Institute Logo"
        className={`object-contain ${activeSizeClass} ${filterClass}`}
      />
    </div>
  );
};

