import { styled } from '@/styled'

export const H1 = styled('h1', {
  base: {
    fontWeight: 700,
    color: 'trusty.11',
    fontFamily: 'var(--font-global)'
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

export const H2 = styled('h2', {
  base: {
    fontWeight: 700,
    color: 'trusty.11',
    fontFamily: 'var(--font-global)',
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

export const H3 = styled('h3', {
  base: {
    fontWeight: 700,
    color: 'trusty.11',
    fontFamily: 'var(--font-global)',
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

export const H4 = styled('h4', {
  base: {
    fontWeight: 700,
    color: 'trusty.11',
    fontFamily: 'var(--font-global)',
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

export const H5 = styled('h5', {
  base: {
    fontWeight: 700,
    color: 'trusty.11',
    fontFamily: 'var(--font-global)',
    fontSize: '1.4rem'
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
