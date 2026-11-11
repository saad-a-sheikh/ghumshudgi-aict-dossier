/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#0A0A0C',
        'surface-card': '#121316',
        'border-subtle': '#2A2B30',
        'accent-alert': '#C2272D',
        'text-main': '#E3E1D9',
        'text-muted': '#9CA3AF',
      },
      fontFamily: {
        display: ['"Cinzel"', '"Syne"', 'serif'],
        syne: ['"Syne"', 'sans-serif'],
        sans: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"Space Mono"', '"JetBrains Mono"', 'monospace'],
        urdu: ['"Noto Nastaliq Urdu"', '"Jameel Noori Nastaleeq"', 'serif'],
      },
      backgroundImage: {
        'dossier-grid': 'linear-gradient(to right, rgba(42, 43, 48, 0.22) 1px, transparent 1px), linear-gradient(to bottom, rgba(42, 43, 48, 0.22) 1px, transparent 1px)',
        'crimson-glow': 'radial-gradient(circle at 50% 0%, rgba(194, 39, 45, 0.16), transparent 65%)',
      },
      boxShadow: {
        'crimson': '0 0 25px -5px rgba(194, 39, 45, 0.35)',
        'dossier': '0 20px 50px rgba(0, 0, 0, 0.85)',
      }
    },
  },
  plugins: [],
};
