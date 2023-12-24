import { defineConfig } from '@pandacss/dev'

import imobiTheme from '@/theme'

export default defineConfig({
  importMap: '@/styled',

  // Whether to use css reset
  preflight: true,

  theme: {
    extend: {
      ...imobiTheme
    }
  },

  presets: ['animated-pandacss', '@pandacss/preset-base', '@park-ui/panda-preset'],

  // Where to look for your css declarations
  include: [
    './src/ui/**/*.{ts,tsx,js,jsx}',
    './src/components/**/*.{ts,tsx,js,jsx}',
    './src/icons/**/*.{ts,tsx,js,jsx}',
    './src/app/**/*.{ts,tsx,js,jsx}'
  ],

  // Files to exclude
  exclude: [],

  jsxFramework: 'react',

  // The output directory for your css system
  outdir: 'styled-system'
})
