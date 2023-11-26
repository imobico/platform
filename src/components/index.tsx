import dynamic from 'next/dynamic'

export const BurgerNavIcon = dynamic(() => import('./BurgerNavIcon'))

export * from './DynamicCrispChat'
