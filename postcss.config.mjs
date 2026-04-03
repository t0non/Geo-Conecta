/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    // Tailwind CSS v4 é configurado via Vite plugin, não via PostCSS
    // Removido para evitar conflito com @tailwindcss/vite
  },
};

export default config;
