
import React from 'react';

export const COLORS = {
  NAVY: '#062642ff', // 
  AQUA: '#81C7D4', // 
  WHITE: '#FFFFFF',
  GRAY_LIGHT: '#f8f9fa34',
  GRAY_TEXT: '#1A1A1A'
};

/**
 * BRAND CONFIGURATION
 */
export const BRAND_CONFIG = {
  name: "SALT.",
  fullName: "SALT Builds",
  email: "saltbuilds@gmail.com",
  tagline: "We Build -> You Grow",
  description: "Crafting modern digital experiences with precision and clarity. We are your partner in building foundations that last.",
  logo: {
    useImage: false,
    imageUrl: "https://images.squarespace-cdn.com/content/v1/5f1b297920f32e2930491a9b/1595610015507-O3O3N0O3O3N0O3O3N0O3/Crystal+Cube+Logo.png",
  }
};

/**
 * SALT LOGO COMPONENT
 */
export const SaltLogo: React.FC<{ className?: string, color?: string }> = ({
  className = "w-10 h-10",
  color = COLORS.NAVY
}) => {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 15L74 27L50 39L26 27L50 15Z" fill="#E1F4F8" />
      <path d="M50 15L38 21L50 27L62 21L50 15Z" fill="#FFFFFF" />
      <path d="M26 27L50 39V63L26 51V27Z" fill="#B3E1EB" />
      <path d="M26 27L38 33V45L26 39V27Z" fill="#D2EFF5" />
      <path d="M38 33L50 39V51L38 45V33Z" fill="#81C7D4" />
      <path d="M26 39L38 45V57L26 51V39Z" fill="#9DD9E5" />
      <path d="M50 39L74 27V51L50 63V39Z" fill="#81C7D4" />
      <path d="M50 39L62 33V45L50 51V39Z" fill="#A7DEEB" />
      <path d="M62 33L74 27V39L62 45V33Z" fill="#C9EBF2" />
      <path d="M50 51L62 45V57L50 63V51Z" fill="#5FB8CC" />
      <path d="M62 45L74 39V51L62 57V45Z" fill="#71BDCE" />
      <g stroke={color} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M50 15L74 27V51L50 63L26 51V27L50 15Z" />
        <path d="M50 15V39" />
        <path d="M50 39L26 27" />
        <path d="M50 39L74 27" />
        <path d="M50 39V63" />
        <path d="M38 21L50 27L62 21" opacity="0.8" />
        <path d="M38 33L38 45L26 39" opacity="0.8" />
        <path d="M38 45L50 51" opacity="0.8" />
        <path d="M38 45L38 57" opacity="0.8" />
        <path d="M62 33L62 45L74 39" opacity="0.8" />
        <path d="M62 45L50 51" opacity="0.8" />
        <path d="M62 45L62 57" opacity="0.8" />
      </g>
    </svg>
  );
};

export const BrandIdentity: React.FC<{
  showText?: boolean,
  textColor?: string,
  iconSize?: string,
  textSize?: string
}> = ({ showText = true, textColor = COLORS.NAVY, iconSize = "w-10 h-10", textSize = "text-2xl" }) => (
  <div className="flex items-center gap-3 group cursor-pointer">
    <SaltLogo className={`${iconSize} transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`} />
    {showText && <span className={`${textSize} font-black tracking-tighter`} style={{ color: textColor }}>{BRAND_CONFIG.name}</span>}
  </div>
);
