/** @type {import("prettier").Config} */
export default {
  plugins: ['prettier-plugin-tailwindcss'],
  printWidth: 80,
  singleQuote: true,
  tailwindFunctions: ['clsx', 'classnames', 'cva'],
};
