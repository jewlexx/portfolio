/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: { "@tailwindcss/postcss": {}, autoprefixer: {}, cssnano: {} },
};

export default config;
