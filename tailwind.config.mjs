/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        accent: {
          50: '#eef2ff',
          100: '#e0e7ff',
          500: '#4f46e5',
          600: '#4338ca',
          700: '#3730a3'
        }
      },
      boxShadow: {
        soft: '0 10px 30px -18px rgba(15, 23, 42, 0.25)'
      },
      maxWidth: {
        content: '72rem'
      }
    }
  },
  plugins: []
};
