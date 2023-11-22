import dynamic from 'next/dynamic'

export const DynamicCrispChat = dynamic(() => import('../CrispChat'))
