import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  variant?: 'light' | 'dark' | 'white';
  type?: 'seal' | 'crest';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

/**
 * Official Seal Emblem of St Bernard Higher Institute - University of Skill Acquisition
 * Circular Badge with high-contrast emerald green background, white ring, sunburst, and typography.
 */
export const OfficialSeal: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => {
  return (
    <svg
      viewBox="0 0 500 500"
      className={`${className} drop-shadow-md transition-transform duration-300 hover:scale-105 select-none`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Official Seal of St Bernard Higher Institute"
    >
      {/* Outer Circle Background (Rich Emerald / Forest Green) */}
      <circle cx="250" cy="250" r="242" fill="#084C2F" />

      {/* Outer Fine White Concentric Ring */}
      <circle cx="250" cy="250" r="226" stroke="#FFFFFF" strokeWidth="7" fill="none" />

      {/* Upper Sunburst / 11 Palm Rays in Pure White */}
      <g fill="#FFFFFF">
        {/* Central ray (top) */}
        <path d="M239 88 C244 74 256 74 261 88 L266 182 L234 182 Z" />
        
        {/* Ray +1 (right 1) */}
        <path d="M275 92 C286 82 297 89 299 101 L278 184 L258 180 Z" />
        {/* Ray -1 (left 1) */}
        <path d="M225 92 C214 82 203 89 201 101 L222 184 L242 180 Z" />

        {/* Ray +2 (right 2) */}
        <path d="M312 110 C326 103 336 113 333 126 L290 190 L273 181 Z" />
        {/* Ray -2 (left 2) */}
        <path d="M188 110 C174 103 164 113 167 126 L210 190 L227 181 Z" />

        {/* Ray +3 (right 3) */}
        <path d="M344 140 C358 137 366 150 358 162 L300 200 L287 188 Z" />
        {/* Ray -3 (left 3) */}
        <path d="M156 140 C142 137 134 150 142 162 L200 200 L213 188 Z" />

        {/* Ray +4 (right 4) */}
        <path d="M363 178 C375 180 379 196 367 205 L307 212 L300 198 Z" />
        {/* Ray -4 (left 4) */}
        <path d="M137 178 C125 180 121 196 133 205 L193 212 L200 198 Z" />

        {/* Ray +5 (right bottom) */}
        <path d="M363 218 C371 223 371 236 358 240 L310 223 L310 210 Z" />
        {/* Ray -5 (left bottom) */}
        <path d="M137 218 C129 223 129 236 142 240 L190 223 L190 210 Z" />
      </g>

      {/* Central Pedestal Silhouette */}
      <path
        d="M206 172 
           C202 160 210 152 222 152 
           C232 152 238 164 250 164 
           C262 164 268 152 278 152 
           C290 152 298 160 294 172 
           C288 190 274 204 274 220 
           L226 220 
           C226 204 212 190 206 172 Z"
        fill="#FFFFFF"
      />

      {/* Central 'S' Monogram in Forest Green */}
      <text
        x="250"
        y="210"
        textAnchor="middle"
        fontFamily="Cinzel, 'Times New Roman', Georgia, serif"
        fontSize="56"
        fontWeight="900"
        fill="#084C2F"
      >
        S
      </text>

      {/* Horizontal Rounded White Base Beam */}
      <rect x="148" y="232" width="204" height="12" rx="6" fill="#FFFFFF" />

      {/* Primary Institution Title: ST BERNARD */}
      <text
        x="250"
        y="306"
        textAnchor="middle"
        fontFamily="Cinzel, 'Times New Roman', Georgia, serif"
        fontSize="44"
        fontWeight="800"
        letterSpacing="2"
        fill="#FFFFFF"
      >
        ST BERNARD
      </text>

      {/* Subtitle: HIGHER INSTITUTE */}
      <text
        x="250"
        y="344"
        textAnchor="middle"
        fontFamily="Cinzel, 'Times New Roman', Georgia, serif"
        fontSize="24"
        fontWeight="700"
        letterSpacing="3"
        fill="#FFFFFF"
      >
        HIGHER INSTITUTE
      </text>

      {/* Golden Divider Line with Center Dot */}
      <g>
        <line x1="88" y1="361" x2="241" y2="361" stroke="#D4AF37" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="250" cy="361" r="4.5" fill="#D4AF37" />
        <line x1="259" y1="361" x2="412" y2="361" stroke="#D4AF37" strokeWidth="2.5" strokeLinecap="round" />
      </g>

      {/* Official Slogan: UNIVERSITY OF SKILL ACQUISITION */}
      <text
        x="250"
        y="388"
        textAnchor="middle"
        fontFamily="'Plus Jakarta Sans', 'Outfit', sans-serif"
        fontSize="13.5"
        fontWeight="800"
        letterSpacing="2.6"
        fill="#FFFFFF"
      >
        UNIVERSITY OF SKILL ACQUISITION
      </text>
    </svg>
  );
};

/**
 * Official Brand Crest / Standalone Emblem (as displayed on campus signboards)
 */
export const BrandCrest: React.FC<{ className?: string; color?: string }> = ({
  className = 'w-full h-full',
  color = '#084C2F',
}) => {
  return (
    <svg
      viewBox="0 0 300 240"
      className={`${className} transition-transform duration-300 select-none`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="St Bernard University Crest"
    >
      {/* 11 Radiating Fan Rays in Brand Emerald Green */}
      <g fill={color}>
        <path d="M142 16 C146 6 154 6 158 16 L162 92 L138 92 Z" />
        <path d="M169 19 C177 11 185 16 186 26 L171 94 L155 90 Z" />
        <path d="M131 19 C123 11 115 16 114 26 L129 94 L145 90 Z" />
        <path d="M198 34 C209 28 217 36 215 47 L181 99 L168 91 Z" />
        <path d="M102 34 C91 28 83 36 85 47 L119 99 L132 91 Z" />
        <path d="M224 58 C235 56 242 66 235 76 L189 107 L179 97 Z" />
        <path d="M76 58 C65 56 58 66 65 76 L111 107 L121 97 Z" />
        <path d="M239 88 C249 90 252 103 242 110 L195 116 L189 105 Z" />
        <path d="M61 88 C51 90 48 103 58 110 L105 116 L111 105 Z" />
        <path d="M239 120 C245 124 245 135 235 138 L197 125 L197 114 Z" />
        <path d="M61 120 C55 124 55 135 65 138 L103 125 L103 114 Z" />
      </g>

      {/* Central Solid Green Pedestal */}
      <path
        d="M116 84 
           C113 74 120 68 128 68 
           C136 68 141 78 150 78 
           C159 78 164 68 172 68 
           C180 68 187 74 184 84 
           C179 98 168 109 168 122 
           L132 122 
           C132 109 121 98 116 84 Z"
        fill={color}
      />

      {/* White 'S' Monogram inside Green Pedestal */}
      <text
        x="150"
        y="114"
        textAnchor="middle"
        fontFamily="Cinzel, 'Times New Roman', Georgia, serif"
        fontSize="44"
        fontWeight="900"
        fill="#FFFFFF"
      >
        S
      </text>

      {/* Horizontal Green Base Beam */}
      <rect x="70" y="132" width="160" height="10" rx="5" fill={color} />
    </svg>
  );
};

export const UniversityLogo: React.FC<LogoProps> = ({
  className,
  showText = true,
  variant = 'dark',
  type = 'seal',
  size = 'md',
}) => {
  const textColor = variant === 'white' ? 'text-white' : variant === 'light' ? 'text-slate-900' : 'text-emerald-950';
  const subTextColor = variant === 'white' ? 'text-emerald-200' : 'text-emerald-800';

  // Responsive sizing defaults if no explicit className provided
  const sizeClasses = {
    sm: 'h-10 w-10 sm:h-11 sm:w-11',
    md: 'h-12 w-12 sm:h-14 sm:w-14',
    lg: 'h-16 w-16 sm:h-20 sm:w-20',
    xl: 'h-24 w-24 sm:h-28 sm:w-28',
  };

  const activeSizeClass = className || sizeClasses[size];

  return (
    <div className="flex items-center gap-3.5 select-none">
      {/* Official Emblem */}
      <div className={`relative shrink-0 ${activeSizeClass}`}>
        {type === 'seal' ? (
          <OfficialSeal />
        ) : (
          <BrandCrest color={variant === 'white' ? '#FFFFFF' : '#084C2F'} />
        )}
      </div>

      {/* Brand Text Lockup */}
      {showText && (
        <div className="flex flex-col leading-none space-y-0.5">
          <span className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-amber-600 dark:text-amber-400 font-sans">
            Institut Universitaire
          </span>
          <span className={`text-base sm:text-xl font-extrabold tracking-tight ${textColor} font-serif-academic`}>
            ST BERNARD
          </span>
          <span className={`text-[9.5px] sm:text-[11px] font-semibold tracking-wide ${subTextColor} italic hidden sm:block font-sans`}>
            University of Skill Acquisition
          </span>
        </div>
      )}
    </div>
  );
};


