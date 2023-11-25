import Link from 'next/link'
import { ReactNode } from 'react'

import { cva } from '@/styled/css'
import { styled } from '@/styled/jsx'
import { ColorToken } from '@/styled/tokens'
import { StyledVariantProps } from '@/styled/types'

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
