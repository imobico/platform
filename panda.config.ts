import { defineConfig } from '@pandacss/dev'

import imobiTheme from '@/theme'

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  theme: {
    extend: {
      ...imobiTheme
    }
  },

  presets: ['animated-pandacss', '@park-ui/panda-preset', '@pandacss/preset-base'],

  // Where to look for your css declarations
  include: ['./src/components/**/*.{ts,tsx,js,jsx}', './src/app/**/*.{ts,tsx,js,jsx}'],

  // Files to exclude
  exclude: [],

  jsxFramework: 'react',

  // The output directory for your css system
  outdir: 'styled-system'
})
