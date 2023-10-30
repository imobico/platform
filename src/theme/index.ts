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
    shadows: {
      accent: {
        value: '0 0 0px 3px {colors.violet.4}'
      }
    },
    colors: {
      text: {
        // Global body text default color
        default: { value: { base: '{colors.slate.12}', _dark: '{colors.slate.2}' } },
        // Alternative low contrast text color
        muted: { value: { base: '{colors.slate.11}', _dark: '{colors.slate.3}' } },
      },
      fg: {
        // Global body text default color
        default: { value: { base: '{colors.text.12}', _dark: '{colors.slate.2}' } },
      },
        // Global bg colors
      accent: {
        default: { value: { base: '{colors.violet.10}', _dark: '{colors.violet.6}' } },
        emphasized: { value: { base: '{colors.violet.9}', _dark: '{colors.violet.7}' } },
        fg: { value: { base: '{colors.white}', _dark: '{colors.white}' } },
      },
        // Global border colors
      border: {
        accent: { value: { base: '{colors.violet.8}', _dark: '{colors.violet.3}' } },
      },
    },
  },
}

export default theme