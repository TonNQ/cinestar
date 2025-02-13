module.exports = {
  darkMode: ['class'],
  content: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}', './app/**/*.{js,jsx}', './src/**/*.{js,jsx}'],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        main: 'var(--main-color)',
        'white-custom-700': 'var(--white-color-700)',
        'yellow-custom-700': 'var(--yellow-color-700)',
        'yellow-custom-700/50': 'var(--yellow-color-700-50)',
        'black-custom-700': 'var(--black-color-700)',
        'blue-custom-700': 'var(--blue-color-700)',
        'purple-custom-700': 'var(--purple-color-700)',
        'gray-custom-700': 'var(--dark-gray-color-700)'
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      },
      maxWidth: {
        container: 'var(--max-width)'
      },
      padding: {
        container: '20px'
      },
      boxShadow: {
        'lg-yellow-700': 'var(--shadow-lg-yellow-700)'
      }
    }
  },
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/aspect-ratio'),
    function ({ addUtilities }) {
      const values = [0, 1, 2, 3, 4, 5, 6, 7, 8]

      const utilities = values.reduce((acc, value) => {
        return {
          ...acc,
          [`.underline-offset-${value}`]: {
            textUnderlineOffset: `${value}px`
          }
        }
      }, {})

      addUtilities(utilities, ['responsive', 'hover'])
    }
  ]
}
