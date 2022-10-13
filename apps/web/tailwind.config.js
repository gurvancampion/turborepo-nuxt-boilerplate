/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [
    require('@myturborepo/tailwind-preset'),
  ],
  content: [
    '../../packages/ui/components/**/*.{vue,js,ts,jsx,tsx}',
  ],
}
