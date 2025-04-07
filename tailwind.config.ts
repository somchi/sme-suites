import type { Config } from 'tailwindcss';
import Colors from './src/site-settings/colors';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const flowbite = require('flowbite-react/tailwind');

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        ...Colors,
      },
    },
    keyframes: {
      fadeInUp: {
        '0%': { opacity: '0', transform: 'translateY(10px)' },
        '100%': { opacity: '1', transform: 'translateY(0)' },
      },
    },
    animation: {
      fadeInUp: 'fadeInUp 1s ease-out forwards',
    },
  },
  plugins: [flowbite.plugin()],
} satisfies Config;
