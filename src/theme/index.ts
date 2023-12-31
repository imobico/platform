import colors from './colors'
import { baseInput } from './recipes/input'

export const theme = {
  recipes: {
    baseInput: baseInput
  },
  tokens: {
    colors,
    fonts: {
      heading: { value: 'var(--font-global), Menlo, monospace' },
      body: { value: 'var(--font-global), sans-serif' }
    }
  },
  semanticTokens: {
    // Example: Set primary color to another value
    colors: {
      gray: {
        a2: {
          value: {
            base: '{colors.slate.2}',
            _dark: '{colors.slate.3}'
          }
        }
      },
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
        default: { value: { base: '{colors.slate.12  }', _dark: '{colors.slate.3}' } },
        // Alternative low contrast text color
        muted: { value: { base: '{colors.slate.11}', _dark: '{colors.slate.3}' } }
      },
      fg: {
        // Global body text default color
        default: { value: { base: '{colors.slate.12}', _dark: '{colors.slate.2}' } }
      },
      // Global bg colors
      accent: {
        default: { value: { base: '{colors.trusty.8}', _dark: '{colors.trusty.1}' } },
        emphasized: { value: { base: '{colors.trusty.9}', _dark: '{colors.trusty.2}' } },
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
      },
      emphasized: {
        value: '0 0 0px 5px {colors.trusty.3}'
      }
    }
  }
}

export default theme
