'use client'

import { Crisp } from 'crisp-sdk-web'
import { useEffect } from 'react'

const CrispChat = () => {
  useEffect(() => {
    Crisp.configure('08c34aaf-cc50-4f31-8e81-b16203105ef0')
  })

  return null
}

export default CrispChat
