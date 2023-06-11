/** @type {import('tailwindcss').Config} */

import colors from './src/colors.json';
import buttons from './plugins/tailwind-buttons.cjs';

export default  {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors,
    },
  },
  plugins: [buttons],
};
