import Image from 'next/image'

import { ProvidersWrapper } from '@/providers'
import { Box, Flex } from '@/ui'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  console.log(children)
  return (
    <ProvidersWrapper>
      <Flex minHeight="100vh" minWidth="100vw" bg="white">
        <Box
          width={{ base: '80px', '2xl': '280px' }}
          bg="linear-gradient(0deg, rgba(252,253,254,1) 0%, rgba(239,243,247,1) 100%)"
        >
          <Box
            position="absolute"
            top={0}
            left={0}
            width={{ base: '80px', '2xl': '280px' }}
            height="100vh"
            overflow="hidden"
            bg="linear-gradient(0deg, rgba(252,253,254,1) 0%, rgba(239,243,247,1) 100%)"
            _hover={{
              width: { base: '80px', md: '280px' }
            }}
            transition="all ease-in-out 0.2s"
            borderRight="1px solid token(colors.slate.5)"
          >
            <Box position="absolute" top={4} left="20px" width="136px">
              <Image
                priority
                src="/logo-imoblr-light-bg.svg"
                alt="Imobi Test"
                width={240}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
              />
              <Box>osdfks</Box>
            </Box>
          </Box>

          {/* <Input opacity={0.8} placeholder="Buscar imóveis ou leads..." width="100%" /> */}
        </Box>
        <Box borderRadius="3xl" bg="white" m="2" flex="1">
          {/* <Box px="12" py="8">
            {children}
          </Box> */}
        </Box>
      </Flex>
    </ProvidersWrapper>
  )
}
