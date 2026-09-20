import type { Config } from 'tailwindcss';

/**
 * Design tokens extracted from the reference site (see docs/AUDIT.md §3–§5).
 * Breakpoints and container widths intentionally mirror Bootstrap 4 so the
 * responsive behaviour matches the reference exactly.
 */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
    },
    extend: {
      colors: {
        brand: {
          DEFAULT: '#a04838',
          light: '#b18077',
          soft: '#f9f5f4',
          alt: '#ffba60',
        },
        ink: 'rgba(0, 0, 0, 0.8)',
        body: '#808080',
        dark: '#252525',
        band: '#f5f5f5',
        light: '#f8f9fa',
        whatsapp: '#4dc247',
        'submit-dark': '#113d48',
        'input-border': '#ced4da',
      },
      fontFamily: {
        sans: ['Poppins', 'Arial', 'sans-serif'],
        display: ['"Josefin Sans"', 'Poppins', 'sans-serif'],
        lato: ['Lato', 'Arial', 'sans-serif'],
      },
      fontSize: {
        // Bootstrap 4 heading scale
        h1: ['2.5rem', { lineHeight: '1.5' }],
        h2: ['2rem', { lineHeight: '1.5' }],
        h3: ['1.75rem', { lineHeight: '1.5' }],
        h4: ['1.5rem', { lineHeight: '1.5' }],
        h5: ['1.25rem', { lineHeight: '1.5' }],
        nav: ['14px', { lineHeight: '1.8', letterSpacing: '2px' }],
        'hero-title': ['75px', { lineHeight: '1' }],
        'hero-sub': ['27px', { lineHeight: '1.5', letterSpacing: '0.15em' }],
      },
      boxShadow: {
        dropdown: '0px 10px 34px -20px rgba(0, 0, 0, 0.41)',
        card: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
        loader: '0px 24px 64px rgba(0, 0, 0, 0.24)',
        widget: '2px 2px 6px rgba(0,0,0,0.4)',
      },
      borderRadius: {
        btn: '3px',
        pill: '50px',
      },
      spacing: {
        gutter: '15px',
        section: '7em',
        'section-sm': '6em',
        70: '70px',
        80: '80px',
      },
      maxWidth: {
        container: '1140px',
        faq: '1200px',
        article: '900px',
        'blog-hero': '700px',
      },
      height: {
        banner: '200px',
        gallery: '300px',
        'blog-img': '200px',
        'team-card': '360px',
        'infra-img': '400px',
      },
      minHeight: {
        hero: '500px',
      },
      transitionDuration: {
        400: '400ms',
      },
      keyframes: {
        fadeInUp: {
          from: { opacity: '0', transform: 'translate3d(0, 100%, 0)' },
          to: { opacity: '1', transform: 'translate3d(0, 0, 0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        heroFadeUp: {
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        loaderRotate: {
          '100%': { transform: 'rotate(360deg)' },
        },
        loaderDash: {
          '0%': { strokeDasharray: '1, 200', strokeDashoffset: '0' },
          '50%': { strokeDasharray: '89, 200', strokeDashoffset: '-35px' },
          '100%': { strokeDasharray: '89, 200', strokeDashoffset: '-136px' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 1s both',
        fadeIn: 'fadeIn 0.4s both',
        heroFadeUp: 'heroFadeUp 1s ease forwards',
        loaderRotate: 'loaderRotate 2s linear infinite',
        loaderDash: 'loaderDash 1.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;
