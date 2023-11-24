import Link from 'next/link'

import { cva } from '@/styled/css'
import { styled } from '@/styled/jsx'

export const textStyle = cva({
  base: {
    fontWeight: 500
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

export const Text = styled('p', textStyle)

export const TextLink = styled(Link, {
  base: {
    color: 'trusty'
  }
})

export const Strong = styled('strong', {
  base: {
    fontWeight: 700
  }
})
