import Link from 'next/link'

import { styled, type HTMLStyledProps } from '@/styled'
import { cva } from '@/styled/css'

const textLinkStyle = cva({
  base: {
    color: 'var(--color-trendy-5',
    fontFamily: 'var(--font-body)',
    fontSize: '1rem',
    fontWeight: 500
  }
})

const h1Style = cva({
  base: {
    color: '#FF0',
    fontFamily: 'var(--font-heading)',
  },
  variants: {
    size: {
      xs: {
        fontSize: 'lg'
      },
      sm: {
        fontSize: 'xl'
      },
      md: {
        fontSize: '2xl'
      },
      lg: {
        fontSize: '3xl'
      },
      xl: {
        fontSize: '4xl'
      }
    }
  }
})

const h2Style = cva({
  base: {
    color: 'black',
    fontFamily: 'var(--font-heading)',
    fontSize: '2.4rem'
  },
  variants: {
    size: {
      xs: {
        fontSize: 'md'
      },
      sm: {
        fontSize: 'lg'
      },
      md: {
        fontSize: 'xl'
      },
      lg: {
        fontSize: '3xl'
      },
      xl: {
        fontSize: '4xl'
      }
    }
  }
})

const h3Style = cva({
  base: {
    color: 'black',
    fontFamily: 'var(--font-heading)',
    fontSize: '2rem'
  },
  variants: {
    size: {
      xs: {
        fontSize: 'sm'
      },
      sm: {
        fontSize: 'md'
      },
      md: {
        fontSize: 'lg'
      },
      lg: {
        fontSize: 'xl'
      },
      xl: {
        fontSize: '3xl'
      }
    }
  }
})

const smallHeadingStyle = cva({
  base: {
    color: 'black',
    fontFamily: 'var(--font-heading)',
    fontSize: '1.8rem'
  },
  variants: {
    size: {
      xs: {
        fontSize: 'xs'
      },
      sm: {
        fontSize: 'sm'
      },
      md: {
        fontSize: 'md'
      },
      lg: {
        fontSize: 'lg'
      },
      xl: {
        fontSize: 'xl'
      }
    }
  }
})

export const TextLink = styled(Link, textLinkStyle)
export const H1 = styled('h1', h1Style)
export const H2 = styled('h2', h2Style)
export const H3 = styled('h3', h3Style)
export const H4 = styled('h4', smallHeadingStyle)
export const H5 = styled('h5', smallHeadingStyle)
