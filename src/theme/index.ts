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
        default: { value: { base: '{colors.slate.12}', _dark: '{colors.slate.2}' } },
        // Alternative low contrast text color
        muted: { value: { base: '{colors.slate.11}', _dark: '{colors.slate.3}' } },
      },
      fg: {
        // Global body text default color
        default: { value: { base: '{colors.text.12}', _dark: '{colors.slate.2}' } },
      },
      accent: {
        default: { value: { base: '{colors.enterprise.10}', _dark: '{colors.enterprise.6}' } },
        emphasized: { value: { base: '{colors.enterprise.9}', _dark: '{colors.enterprise.7}' } },
        fg: { value: { base: '{colors.white}', _dark: '{colors.white}' } },
      },
      border: {
        accent: { value: { base: '{colors.enterprise.6}', _dark: '{colors.enterprise.3}' } },
      },
    },
  },
}

export default theme