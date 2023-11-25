import Link from 'next/link'

import { cva } from '@/styled/css'
import { styled } from '@/styled/jsx'

export const Text = styled('p', {
  base: {
    fontWeight: 500
  }
})

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

const highlightedUnderlinetextStyle = cva({
  base: {
    fontWeight: 700
  },
  variants: {
    highlightColorMode: {
      lightPrimary: {
        color: {
          base: '#FF0'
        },
        backgroundColor: {
          base: '#FF0'
        }
      }
    }
  },
  defaultVariants: {
    highlightColorMode: 'lightPrimary'
  }
})

export const HighlightedUnderlineText = styled('strong', highlightedUnderlinetextStyle)
