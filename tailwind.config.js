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
        border: '#f3f4f6',
        blue: {
          light: '#dbeafe',
          base: '#3b82f6',
        },
        skyblue: {
          light: '#e0f2fe',
          base: '#0ea5e9',
        },
        green: {
          light: '#dcfce7',
          base: '#22c55e',
        },
        pink: {
          light: '#fdf2f8',
          base: '#ec4899',
        },
        purple: {
          light: '#f3e8ff',
          base: '#a855f7',
        },
        red: {
          light: '#fee2e2',
          base: '#ef4444',
        },
        text: {
          primary: '#2b2b2b',
          menu: '#505050',
          secondary: '#353535',
          light: '#949494',
          extralight: '#f1f1f1',
          soft: '#E6E6E6',
          extraSoft: '#E3E3E3',
        },
        bg: {
          soft: '#F5F5F5',
          extraSoft: '#F6F6F9',
          light: '#DDDDDD',
          extralight: '#F8F9FA',
          hard: '#B7B7B7',
          extraHard: '#7D7D7D',
          enable: '#4b4b4b',
          hover: '#3a3a3a',
          active: '#2d2d2d',
        },
      },
      screens: {
        sm: '360px',
        md: '768px',
        lg: '1024px',
        lx: '1288px',
      },

      fontSize: {
        '24b': ['24px', { fontWeight: '700' }],
        '20b': ['20px', { fontWeight: '700' }],
        '18b': ['18px', { fontWeight: '700' }],
        '16b': ['16px', { fontWeight: '700' }],
        '14b': ['14px', { fontWeight: '700' }],

        '24s': ['24px', { fontWeight: '600' }],
        '22s': ['22px', { fontWeight: '600' }],
        '20s': ['20px', { fontWeight: '600' }],
        '18s': ['18px', { fontWeight: '600' }],
        '16s': ['16px', { fontWeight: '600' }],
        '14s': ['14px', { fontWeight: '600' }],
        '12s': ['12px', { fontWeight: '600' }],

        '24m': ['24px', { fontWeight: '500' }],
        '22m': ['22px', { fontWeight: '500' }],
        '20m': ['20px', { fontWeight: '500' }],
        '18m': ['18px', { fontWeight: '500' }],
        '16m': ['16px', { fontWeight: '500' }],
        '14m': ['14px', { fontWeight: '500' }],
        '12m': ['12px', { fontWeight: '500' }],
        '10m': ['10px', { fontWeight: '500' }],

        '24r': ['24px', { fontWeight: '400' }],
        '20r': ['20px', { fontWeight: '400' }],
        '18r': ['18px', { fontWeight: '400' }],
        '16r': ['16px', { fontWeight: '400' }],
        '14r': ['14px', { fontWeight: '400' }],
        '12r': ['12px', { fontWeight: '400' }],
        '10r': ['10px', { fontWeight: '400' }],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        // scrollbar
        '.no-scrollbar': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        },
        '.no-scrollbar::-webkit-scrollbar': {
          display: 'none',
        },
      });
    },
  ],
};
