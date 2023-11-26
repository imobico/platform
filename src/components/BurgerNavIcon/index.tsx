'use client'

import { useState } from 'react'

import { Box } from '@/styled'

import './style.css'

export const BurgerNavIcon = () => {
  const [isNavActive, setIsNavActive] = useState(false)

  return (
    <Box>
      <Box
        className="burger-nav-icon"
        onClick={() => {
          setIsNavActive(!isNavActive)
        }}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </Box>
    </Box>
  )
}

export default BurgerNavIcon
