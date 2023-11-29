'use client'

import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { PropsWithChildren, useEffect, useState } from 'react'

import { token } from '@/styled/tokens'

import { Briefcase } from '@/icons'
import { ProvidersWrapper } from '@/providers'
import { Box, Flex, Text, VStack } from '@/ui'

const navItemsList = [
  {
    label: 'Visão geral',
    route: '/app',
    icon: Briefcase
  },
  {
    label: 'Imoveis',
    route: '/app/imoveis',
    icon: Briefcase
  },
  {
    label: 'Busca',
    icon: Briefcase
  }
]

const AppLayout = (props: PropsWithChildren) => {
  const [isSidebarActive, setIsSidebarActive] = useState(false)
  const [activeNavItemIndex, setActiveNavItemIndex] = useState(0)
  const pathname = usePathname()

  useEffect(() => {
    const activeNavItem = navItemsList.findIndex((navItem) => navItem.route === pathname)
    setActiveNavItemIndex(activeNavItem)
  }, [pathname])

  console.log('just a placeholder', props)

  return (
    <ProvidersWrapper>
      <Flex minHeight="100vh" minWidth="100vw" bg="white">
        <Box
          width={{ base: '80px', '2xl': '280px' }}
          bg="linear-gradient(0deg, rgba(252,253,254,1) 0%, rgba(239,243,247,1) 100%)"
          onMouseEnter={() => {
            setIsSidebarActive(true)
          }}
          onMouseLeave={() => {
            setIsSidebarActive(false)
          }}
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
            <Box position="absolute" top="10px" left="14px" width="136px">
              <Image
                priority
                src="/imoblr-app-navbar-logo.svg"
                alt="Imobi Test"
                width={240}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
              />
            </Box>
            <VStack
              p="4"
              alignItems="flex-start"
              position="absolute"
              top="80px"
              width="280px"
              gap="4"
            >
              <Box
                position="absolute"
                style={{
                  width: isSidebarActive ? '252px' : '52px',
                  top: (activeNavItemIndex + 1) * 16
                }}
                left="14px"
                height="48px"
                bg="white"
                borderRadius="xl"
                border="1px solid token(colors.slate.6)"
                boxShadow="0 2px 4px 0 token(colors.slate.4)"
                transition="all ease-in-out 0.2s"
              />
              {navItemsList.map((navItem, index) => {
                console.log(index, activeNavItemIndex)
                console.log(activeNavItemIndex === index)
                return (
                  <Flex
                    key={`app-main-nav-menu-${index}`}
                    px={3}
                    width="100%"
                    zIndex={20}
                    className="group"
                    cursor="pointer"
                    height="48px"
                    alignItems="center"
                  >
                    <navItem.icon size="6" color="slate.10" />
                    <Text
                      color="slate.10"
                      _groupHover={{ color: 'slate.12' }}
                      ml="8"
                      style={{
                        color: activeNavItemIndex === index ? token('colors.slate.12') : 'slate.10'
                      }}
                    >
                      {navItem.label}
                    </Text>
                  </Flex>
                )
              })}
            </VStack>
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

export default AppLayout
