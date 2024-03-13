import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

const breakpoints = {
  xs: '20rem', /* 320px */
  sm: '24rem', /* 384px */
  md: '28rem', /* 448px */
  lg: '32rem', /* 512px */
  xl: '36rem', /* 576px */
  '2xl': '42rem', /* 672px */
  '3xl': '48rem', /* 768px */
  '4xl': '56rem', /* 896px */
  '5xl': '64rem', /* 1024px */
  '6xl': '72rem', /* 1152px */
  '7xl': '78rem', /* 1248px */
  '8xl': '90rem', /* 1440px */
  '9xl': '120rem' /* 1920px */
}

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      screens: {
        xxs: '380px',
        xs: '480px',
        '3xl': '1680px'
      },
      spacing: {
        gutter: 'var(--inner-gutter)',
        'spacing-1': 'var(--spacing-spacing-1)',
        'spacing-2': 'var(--spacing-spacing-2)',
        'spacing-3': 'var(--spacing-spacing-3)',
        'spacing-4': 'var(--spacing-spacing-4)',
        'spacing-5': 'var(--spacing-spacing-5)',
        'spacing-6': 'var(--spacing-spacing-6)',
        'spacing-7': 'var(--spacing-spacing-7)',
        'spacing-8': 'var(--spacing-spacing-8)',
        'spacing-9': 'var(--spacing-spacing-9)',
        'spacing-10': 'var(--spacing-spacing-10)',
        'spacing-11': 'var(--spacing-spacing-11)'
      },
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans]
      },
      colors: {
        rehsok: 'oklch(52.43% 0.115 245.85 / <alpha-value>)', /* #246FA8 */
        emah: 'oklch(67.59% 0.217 38.8 / <alpha-value>)', /* #FF5500 */
        keyperspot: 'oklch(66.69% 0.14267133700943277 235.5994356712896 / <alpha-value>)', /* #00A0DF */
        taxo: {
          100: 'oklch(87.47% 0.029 238.28 / <alpha-value>)', /* #C5D9E7 */
          200: 'oklch(82.17% 0.054 250.22 / <alpha-value>)', /* #ABC8E7 */
          300: 'oklch(72.64% 0.077 241.86 / <alpha-value>)', /* #7BADD3 */
          400: 'oklch(56.08% 0.131 241.32 / <alpha-value>)', /* #007CBA */
          500: 'oklch(47.44% 0.122 246.18 / <alpha-value>)' /* #00609C */
        },
        sercius: 'oklch(22.53% 0.09079116383808032 259.76824527813346 / <alpha-value>)', /* #001845 */
        techgeeks: 'oklch(67.99% 0.172 254.69 / <alpha-value>)', /* #4399FF */
        primary: {
          DEFAULT: 'oklch(var(--primary) / <alpha-value>)',
          foreground: 'oklch(var(--primary-foreground) / <alpha-value>)'
        },
        secondary: {
          DEFAULT: 'oklch(var(--secondary) / <alpha-value>)',
          foreground: 'oklch(var(--secondary-foreground) / <alpha-value>)'
        },
        background: 'oklch(var(--background) / <alpha-value>)',
        foreground: 'oklch(var(--foreground) / <alpha-value>)',
        border: 'oklch(var(--border) / <alpha-value>)',
        input: 'oklch(var(--input) / <alpha-value>)',
        ring: 'oklch(var(--ring) / <alpha-value>)',
        destructive: {
          DEFAULT: 'oklch(var(--destructive) / <alpha-value>)',
          foreground: 'oklch(var(--destructive-foreground) / <alpha-value>)'
        },
        muted: {
          DEFAULT: 'oklch(var(--muted) / <alpha-value>)',
          foreground: 'oklch(var(--muted-foreground) / <alpha-value>)'
        },
        accent: {
          DEFAULT: 'oklch(var(--accent) / <alpha-value>)',
          foreground: 'oklch(var(--accent-foreground) / <alpha-value>)'
        },
        popover: {
          DEFAULT: 'oklch(var(--popover) / <alpha-value>)',
          foreground: 'oklch(var(--popover-foreground) / <alpha-value>)'
        },
        card: {
          DEFAULT: 'oklch(var(--card) / <alpha-value>)',
          foreground: 'oklch(var(--card-foreground) / <alpha-value>)'
        }
      },
      width: {
        '1-cols': 'calc(((1 / var(--container-grid-columns, var(--grid-columns))) * (100% - var(--inner-gutter))) - (var(--inner-gutter) - (1 / var(--container-grid-columns, var(--grid-columns)) * var(--inner-gutter))))',
        '2-cols': 'calc(((2 / var(--container-grid-columns, var(--grid-columns))) * (100% - var(--inner-gutter))) - (var(--inner-gutter) - (2 / var(--container-grid-columns, var(--grid-columns)) * var(--inner-gutter))))',
        '3-cols': 'calc(((3 / var(--container-grid-columns, var(--grid-columns))) * (100% - var(--inner-gutter))) - (var(--inner-gutter) - (3 / var(--container-grid-columns, var(--grid-columns)) * var(--inner-gutter))))',
        '4-cols': 'calc(((4 / var(--container-grid-columns, var(--grid-columns))) * (100% - var(--inner-gutter))) - (var(--inner-gutter) - (4 / var(--container-grid-columns, var(--grid-columns)) * var(--inner-gutter))))',
        '5-cols': 'calc(((5 / var(--container-grid-columns, var(--grid-columns))) * (100% - var(--inner-gutter))) - (var(--inner-gutter) - (5 / var(--container-grid-columns, var(--grid-columns)) * var(--inner-gutter))))',
        '6-cols': 'calc(((6 / var(--container-grid-columns, var(--grid-columns))) * (100% - var(--inner-gutter))) - (var(--inner-gutter) - (6 / var(--container-grid-columns, var(--grid-columns)) * var(--inner-gutter))))',
        '7-cols': 'calc(((7 / var(--container-grid-columns, var(--grid-columns))) * (100% - var(--inner-gutter))) - (var(--inner-gutter) - (7 / var(--container-grid-columns, var(--grid-columns)) * var(--inner-gutter))))',
        '8-cols': 'calc(((8 / var(--container-grid-columns, var(--grid-columns))) * (100% - var(--inner-gutter))) - (var(--inner-gutter) - (8 / var(--container-grid-columns, var(--grid-columns)) * var(--inner-gutter))))',
        '9-cols': 'calc(((9 / var(--container-grid-columns, var(--grid-columns))) * (100% - var(--inner-gutter))) - (var(--inner-gutter) - (9 / var(--container-grid-columns, var(--grid-columns)) * var(--inner-gutter))))',
        '10-cols': 'calc(((10 / var(--container-grid-columns, var(--grid-columns))) * (100% - var(--inner-gutter))) - (var(--inner-gutter) - (10 / var(--container-grid-columns, var(--grid-columns)) * var(--inner-gutter))))',
        '11-cols': 'calc(((11 / var(--container-grid-columns, var(--grid-columns))) * (100% - var(--inner-gutter))) - (var(--inner-gutter) - (11 / var(--container-grid-columns, var(--grid-columns)) * var(--inner-gutter))))',
        '12-cols': 'calc(((12 / var(--container-grid-columns, var(--grid-columns))) * (100% - var(--inner-gutter))) - (var(--inner-gutter) - (12 / var(--container-grid-columns, var(--grid-columns)) * var(--inner-gutter))))',
        '1/2-cols': 'calc(50% - var(--inner-gutter))',
        '1/3-cols': `calc(${(1 / 3) * 100}% - var(--inner-gutter))`,
        '2/3-cols': `calc(${(2 / 3) * 100}% - var(--inner-gutter))`,
        '1/5-cols': `calc(${(1 / 5) * 100}% - var(--inner-gutter))`,
        '1/6-cols': `calc(${(1 / 6) * 100}% - var(--inner-gutter))`,
        ...breakpoints
      },
      height: breakpoints,
      inset: breakpoints,
      maxWidth: {
        '8xl': breakpoints['8xl'],
        '9xl': breakpoints['9xl'],
        container: 'var(--container-width)'
      },
      flex: {
        full: '0 0 100%'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      borderRadius: {
        '2xl': 'calc(var(--radius) + 4px)',
        xl: 'calc(var(--radius) + 2px)',
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      animation: {
        draw: 'draw 2s ease-in forwards',
        show: 'show 1s ease-in forwards',
        'video-bg': 'video-bg 0.5s ease-in forwards'
      },
      keyframes: {
        'video-bg': {
          '0%': {
            'border-radius': '1.5rem'
          },
          '33%': {
            'border-radius': '1.5rem'
          },
          '100%': {
            width: '100%',
            height: '100%',
            'border-radius': '0'
          }
        },
        draw: {
          '30%': {
            'fill-opacity': '0'
          },
          '80%': {
            'stroke-width': '1'
          },
          '99%': {
            'fill-opacity': '100%',
            'stroke-dashoffset': '0',
            'stroke-width': '0'
          },
          '100%': {
            'fill-opacity': '100%',
            'stroke-dashoffset': '0',
            'stroke-width': '0'
          }
        },
        show: {
          '0%': {
            opacity: '0'
          },
          '100%': {
            opacity: '100%'
          }
        }
      }
    }
  },
  corePlugins: {
    container: false
  }
}
export default config
