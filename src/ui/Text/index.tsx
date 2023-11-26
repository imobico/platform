import Link from 'next/link'

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
    fontWeight: 600
  }
})
