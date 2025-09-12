/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ['Pretendard', 'sans-serif'],
      },
      colors: {
        bg: '#FCFCFC',
        bg_dark: '#2f2f2f',
        ebebeb: '#ebebeb',
        border: '#9f9f9f',
        border_light: '#EEE',
        navy: '#46475E',
        text: {
          primary: '#222222',
          hard: '#414347',
          menu: '#505050',
          secondary: '#767676',
          light: '#949494',
          extralight: '#f1f1f1',
          soft: '#E6E6E6',
          extraSoft: '#E3E3E3',
          navy: '#444963',
          lightNavy: '#B1C4EF',
          softNavy: '#D3D6E2',
        },
        background: {
          soft: '#F5F5F5',
          extraSoft: '#F6F6F9',
          light: '#DDDDDD',
          extralight: '#F8F9FA',
          hard: '#B7B7B7',
          extraHard: '#7D7D7D',
          dark: '#353535',
          extraDark: '#2f2f2f',
          softNavy: '#DFE4EF',
        },
      },
      boxShadow: {
        default: '2px 2px 12px 0px rgba(0, 0, 0, 0.12)',
        border: '0px -3px 20px 0px rgba(0, 0, 0, 0.05)',
        modal: '0px -6px 30px 0px rgba(0, 0, 0, 0.08)',
      },
      screens: {
        sm: '360px',
        md: '768px',
        lg: '1024px',
        lx: '1288px',
      },
      perspective: {
        1000: '1000px',
        1200: '1200px',
      },
      fontSize: {
        '48eb': ['48px', { fontWeight: '800' }],
        '36eb': ['36px', { fontWeight: '800' }],
        '28eb': ['28px', { fontWeight: '800' }],
        '22eb': ['22px', { fontWeight: '800' }],
        '16eb': ['16px', { fontWeight: '800' }],

        '30b': ['30px', { fontWeight: '700' }],
        '24b': ['24px', { fontWeight: '700' }],
        '20b': ['20px', { fontWeight: '700' }],
        '18b': ['18px', { fontWeight: '700' }],
        '14b': ['14px', { fontWeight: '700' }],
        '12b': ['12px', { fontWeight: '700' }],

        '48s': ['48px', { fontWeight: '600' }],
        '36s': ['36px', { fontWeight: '600' }],
        '30s': ['30px', { fontWeight: '600' }],
        '24s': ['24px', { fontWeight: '600' }],
        '22s': ['22px', { fontWeight: '600' }],
        '20s': ['20px', { fontWeight: '600' }],
        '18s': ['18px', { fontWeight: '600' }],
        '16s': ['16px', { fontWeight: '600' }],
        '14s': ['14px', { fontWeight: '600' }],
        '12s': ['12px', { fontWeight: '600' }],

        '36m': ['36px', { fontWeight: '500' }],
        '24m': ['24px', { fontWeight: '500' }],
        '22m': ['22px', { fontWeight: '500' }],
        '20m': ['20px', { fontWeight: '500' }],
        '18m': ['18px', { fontWeight: '500' }],
        '16m': ['16px', { fontWeight: '500' }],
        '14m': ['14px', { fontWeight: '500' }],
        '12m': ['12px', { fontWeight: '500' }],
        '10m': ['10px', { fontWeight: '500' }],

        '36r': ['36px', { fontWeight: '400' }],
        '24r': ['24px', { fontWeight: '400' }],
        '20r': ['20px', { fontWeight: '400' }],
        '18r': ['18px', { fontWeight: '400' }],
        '16r': ['16px', { fontWeight: '400' }],
        '14r': ['14px', { fontWeight: '400' }],
        '12r': ['12px', { fontWeight: '400' }],
        '10r': ['10px', { fontWeight: '400' }],

        '24l': ['24px', { fontWeight: '300' }],
      },
      keyframes: {
        'bounce-up-down': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        'bounce-delay-0': 'bounce-up-down 1s ease-in-out infinite',
        'bounce-delay-1': 'bounce-up-down 1s ease-in-out infinite 0.2s',
        'bounce-delay-2': 'bounce-up-down 1s ease-in-out infinite 0.4s',
        'bounce-delay-3': 'bounce-up-down 1s ease-in-out infinite 0.6s',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        // 3D transform
        '.preserve-3d': {
          transformStyle: 'preserve-3d',
        },
        '.perspective-1000': {
          perspective: '1000px',
        },
        '.perspective-1200': {
          perspective: '1200px',
        },
        '.backface-hidden': {
          backfaceVisibility: 'hidden',
        },

        // scrollbar
        '.custom-scrollbar': {
          position: 'relative',
          overflowY: 'scroll',
        },
        '.custom-scrollbar::-webkit-scrollbar': {
          width: '4px',
          height: '4px',
          marginRight: '10px',
          marginLeft: '10px',
        },
        '.custom-scrollbar::-webkit-scrollbar-thumb': {
          backgroundColor: '#DDD',
          borderRadius: '20px',
        },
        '.custom-scrollbar::-webkit-scrollbar-thumb:hover': {
          backgroundColor: '#DDD',
        },
        '.custom-scrollbar::-webkit-scrollbar-track': {
          backgroundColor: '#fff',
          borderRadius: '20px',
        },
        '.no-scrollbar': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        },
        '.no-scrollbar::-webkit-scrollbar': {
          display: 'none',
        },
        '.border-dotted-wide': {
          borderStyle: 'dotted',
          borderWidth: '1px',
          borderImage:
            'repeating-linear-gradient(to right, currentColor 0, currentColor 2px, transparent 2px, transparent 8px) 1',
        },
      });
    },
  ],
};
