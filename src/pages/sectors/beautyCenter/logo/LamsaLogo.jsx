// src/pages/sectors/beautyCenter/logo/LamsaLogo.jsx
export default function LamsaLogo({ size = 48, color = "#D6336C" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="32" r="31" fill="none" stroke={color} strokeWidth="1.2" />
      <text
        x="32"
        y="41"
        textAnchor="middle"
        fontFamily="'Playfair Display', serif"
        fontSize="26"
        fontWeight="700"
        fill={color}
      >
        L
      </text>
      <path d="M18 46 Q32 50 46 46" stroke={color} strokeWidth="1" fill="none" opacity="0.7" />
    </svg>
  );
}