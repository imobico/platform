import Image from 'next/image'

import { Box, Flex, H3 } from '@/ui'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <Flex minHeight="100vh" minWidth="100vw" bg="slate.3">
      <Box width="240px" p="6">
        <Box width="60%">
          <Image
            priority
            src="/logo-imobi-trusty.svg"
            alt="Imobi Test"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
          />
        </Box>
        {/* <Input opacity={0.8} placeholder="Buscar imóveis ou leads..." width="100%" /> */}
      </Box>
      <Box borderRadius="3xl" bg="white" m="2" flex="1">
        <Box px="12" py="8">
          {children}
        </Box>
      </Box>
    </Flex>
  )
}
