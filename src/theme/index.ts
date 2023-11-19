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
      bg: {
        canvas: {
          value: {
            base: '{colors.white}',
            _dark: '{colors.slate.10}'
          }
        }
      },
      text: {
        // Global body text default color
        default: { value: { base: '{colors.slate.12}', _dark: '{colors.slate.2}' } },
        // Alternative low contrast text color
        muted: { value: { base: '{colors.slate.11}', _dark: '{colors.slate.3}' } }
      },
      fg: {
        // Global body text default color
        default: { value: { base: '{colors.text.12}', _dark: '{colors.slate.2}' } }
      },
      // Global bg colors
      accent: {
        default: { value: { base: '{colors.trusty.7}', _dark: '{colors.trusty.1}' } },
        emphasized: { value: { base: '{colors.trusty.8}', _dark: '{colors.trusty.2}' } },
        fg: { value: { base: '{colors.white}', _dark: '{colors.white}' } }
      },
      // Global border colors
      border: {
        accent: { value: { base: '{colors.trusty.9}', _dark: '{colors.trusty.3}' } }
      }
    },
    shadows: {
      accent: {
        value: '0 0 0px 5px {colors.trusty.3}'
      }
    }
  }
}

export default theme
