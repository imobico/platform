import colors from './colors'

export const theme = {
  tokens: {
    colors,
    fonts: {
      heading: { value: 'var(--font-heading), Menlo, monospace' },
      body: { value: 'var(--font-body), sans-serif' }
    }
  },
  semanticTokens: {
    // Example: Set primary color to another value
    colors: {
      text: {
        // Global body text default color
        default: { value: { base: '{colors.mauve.12}', _dark: '{colors.mauve.2}' } },
        // Alternative low contrast text color
        muted: { value: { base: '{colors.mauve.11}', _dark: '{colors.mauve.3}' } },
      },
      fg: {
        // Global body text default color
        default: { value: { base: '{colors.text.12}', _dark: '{colors.mauve.2}' } },
      },
        // Global bg colors
      accent: {
        default: { value: { base: '{colors.trendy.10}', _dark: '{colors.trendy.6}' } },
        emphasized: { value: { base: '{colors.trendy.9}', _dark: '{colors.trendy.7}' } },
        fg: { value: { base: '{colors.white}', _dark: '{colors.white}' } },
      },
        // Global border colors
      border: {
        accent: { value: { base: '{colors.mauve.9}', _dark: '{colors.trendy.3}' } },
      },
    },
    shadows: {
      accent: {
        value: '0 0 0px 4px {colors.trendy.2}'
      }
    },
  },
}

export default theme