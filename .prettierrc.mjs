/** @type {import('prettier').Config} */
export default {
  arrowParens: 'avoid',
  tabWidth: 2,
  useTabs: false,
  singleQuote: true,
  printWidth: 120,
  trailingComma: 'es5',
  semi: false,
  plugins: [
    '@trivago/prettier-plugin-sort-imports',
    'prettier-plugin-tailwindcss',
  ],
  importOrder: ['^@epostbox/(.*)$', '^@composables/(.*)$', '^@modules/(.*)$', '^../(.*)$', '^./(.*)$', '^[./]'],
  importOrderSeparation: true,
}
