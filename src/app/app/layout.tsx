'use client'

import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { PropsWithChildren, useEffect, useState } from 'react'

import { Briefcase } from '@/icons'
import { ProvidersWrapper } from '@/providers'
import { Box, Flex, Text, VStack } from '@/ui'

const navItemsList = [
  {
    label: 'Home',
    route: '/painel',
    icon: Briefcase
  },
  {
    label: 'Torneios',
    route: '/painel/torneios',
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

  console.log(props.children)
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
            <Box position="absolute" top="9px" left="12px" width="136px">
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
              top="100px"
              width="280px"
              gap="8"
            >
              <Box
                width="100%"
                position="absolute"
                style={{
                  width: isSidebarActive ? '260px' : '60px',
                  top: (activeNavItemIndex + 1) * 20
                }}
                left="10px"
                height="30px"
                bg="red"
                transition="all ease-in-out 0.2s"
              />
              {navItemsList.map((navItem, index) => (
                <Flex
                  bg="white"
                  key={`app-main-nav-menu-${index}`}
                  px={4}
                  py={2}
                  width="100%"
                  zIndex={20}
                  className="group"
                  cursor="pointer"
                >
                  <navItem.icon size="7" color="slate.10" />
                  <Text color="slate.10" _groupHover={{ color: 'slate.12' }} ml="8">
                    {navItem.label}
                  </Text>
                </Flex>
              ))}
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
