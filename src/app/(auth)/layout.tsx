import { Metadata } from 'next'
import { ReactNode } from 'react'

import { Center } from '@/ui'

import bg from '@/public/cool-pattern.svg'

export const metadata: Metadata = {
  title: 'Login | Platforms Starter Kit'
}

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <Center
      style={{ backgroundImage: `url("${bg.src}")`, backgroundRepeat: 'repeat' }}
      height="100vh"
      width="100vw"
      // bg="slate.50"
      // background="radial-gradient(circle at bottom left,transparent 25%,#f1f5f9 25.5%, #f1f5f9 36%, transparent 37%, transparent 100%),radial-gradient(circle at top right,transparent 34%,#f1f5f9 34.5%, #f1f5f9 45.5%, transparent 46%, transparent 100%)"
      // backgroundSize="3em 3em"
      // backgroundColor="#f8fafc"
      // opacity="1"
      // background="radial-gradient(circle at top left,transparent 9%, #f1f5f9 10% ,#f1f5f9 15% , transparent 16%) , radial-gradient(circle at bottom left,transparent 9%, #f1f5f9 10% ,#f1f5f9 15% , transparent 16%), radial-gradient(circle at top right ,transparent 9%, #f1f5f9 10% ,#f1f5f9 15% , transparent 16%) , radial-gradient(circle at bottom right,transparent 9%, #f1f5f9 10% ,#f1f5f9 15% , transparent 16%),radial-gradient(circle, transparent 25%, #f8fafc  26%),linear-gradient(0deg, transparent 44%, #f1f5f9 45%, #f1f5f9 55%, transparent 56%), linear-gradient(90deg, transparent 44%, #f1f5f9 45%, #f1f5f9 55%, transparent 56%)"
      // backgroundSize="3em 3em"
      // backgroundColor="#f8fafc"
      // opacity="1"
      // background="radial-gradient(circle at top,transparent 9%, #f1f5f9 10% ,#f1f5f9 15% , transparent 16%), radial-gradient(circle at bottom,transparent 9%, #f1f5f9 10% ,#f1f5f9 15% , transparent 16%), radial-gradient(circle at right,transparent 9%, #f1f5f9 10% ,#f1f5f9 15% , transparent 16%), radial-gradient(circle at left,transparent 9%, #f1f5f9 10% ,#f1f5f9 15% , transparent 16%)"
      // backgroundSize="3em 3em"
      // backgroundColor="#F8FAFC"
      // opacity="1"
    >
      {children}
    </Center>
  )
}
