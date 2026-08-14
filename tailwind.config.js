/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Surface system
        surface: {
          DEFAULT: '#fbf9f9',
          dim: '#dbdad9',
          bright: '#fbf9f9',
          'container-lowest': '#ffffff',
          'container-low': '#f5f3f3',
          container: '#efeded',
          high: '#e9e8e7',
          highest: '#e3e2e2',
          variant: '#e3e2e2',
        },
        'on-surface': '#1b1c1c',
        'on-surface-variant': '#444748',
        'inverse-surface': '#303031',
        'inverse-on-surface': '#f2f0f0',
        outline: {
          DEFAULT: '#747878',
          variant: '#c4c7c7',
        },
        // Charcoal / primary
        primary: {
          DEFAULT: '#000000',
          container: '#1c1b1b',
          fixed: '#e5e2e1',
          'fixed-dim': '#c8c6c5',
        },
        'on-primary': '#ffffff',
        'on-primary-container': '#858383',
        'on-primary-fixed': '#1c1b1b',
        'on-primary-fixed-variant': '#474746',
        // Gold / secondary (accent)
        secondary: {
          DEFAULT: '#775a19',
          container: '#fed488',
          fixed: '#ffdea5',
          'fixed-dim': '#e9c176',
        },
        'on-secondary': '#ffffff',
        'on-secondary-container': '#785a1a',
        'on-secondary-fixed': '#261900',
        'on-secondary-fixed-variant': '#5d4201',
        // Tertiary (dark) for headers/footers
        tertiary: {
          DEFAULT: '#000000',
          container: '#1a1c1c',
          fixed: '#e2e2e2',
          'fixed-dim': '#c6c6c7',
        },
        'on-tertiary': '#ffffff',
        'on-tertiary-container': '#838484',
        'on-tertiary-fixed': '#1a1c1c',
        'on-tertiary-fixed-variant': '#454747',
        'inverse-primary': '#c8c6c5',
        error: '#ba1a1a',
        'on-error': '#ffffff',
        'error-container': '#ffdad6',
        'on-error-container': '#93000a',
      },
      borderRadius: {
        DEFAULT: '0px',
        none: '0px',
        sm: '0px',
        md: '0px',
        lg: '0px',
        xl: '0px',
        '2xl': '0px',
        '3xl': '0px',
        full: '9999px',
      },
      spacing: {
        gutter: '32px',
        'margin-desktop': '64px',
        'container-max': '1440px',
        unit: '8px',
        'margin-mobile': '20px',
        'section-gap': '120px',
      },
      maxWidth: {
        container: '1440px',
      },
      fontSize: {
        'display-lg': ['64px', { lineHeight: '72px', letterSpacing: '-0.02em' }],
        'display-lg-mobile': ['40px', { lineHeight: '48px', letterSpacing: '-0.01em' }],
        'headline-lg': ['48px', { lineHeight: '56px' }],
        'headline-md': ['32px', { lineHeight: '40px' }],
        'headline-sm': ['24px', { lineHeight: '32px' }],
        'body-lg': ['18px', { lineHeight: '28px' }],
        'body-md': ['16px', { lineHeight: '24px' }],
        'label-lg': ['14px', { lineHeight: '20px', letterSpacing: '0.1em' }],
        'label-md': ['12px', { lineHeight: '16px', letterSpacing: '0.05em' }],
      },
      boxShadow: {
        ambient: '0px 12px 40px rgba(26, 26, 26, 0.08)',
        editorial: '0px 24px 60px rgba(26, 26, 26, 0.12)',
      },
      keyframes: {
        'ken-burns': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.15)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'ken-burns': 'ken-burns 20s ease-in-out infinite alternate',
        'fade-in-up': 'fade-in-up 1s ease-out forwards',
      },
    },
  },
  plugins: [],
}
