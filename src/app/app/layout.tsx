'use client'

import { useWindowWidth } from '@react-hook/window-size'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { PropsWithChildren, useEffect, useState } from 'react'

import { DashboardIcon } from '@/icons'
import { ProvidersWrapper } from '@/providers'
import { Box, Flex, VStack } from '@/ui'

import { SidebarNavigationItem } from './components/SidebarNavigationItem'

const navItemsList = [
  {
    label: 'Visão geral',
    route: '/app',
    icon: DashboardIcon
  },
  {
    label: 'Imoveis',
    route: '/app/imoveis',
    icon: DashboardIcon
  },
  {
    label: 'Clientes',
    route: '/app/clientes',
    icon: DashboardIcon
  }
]

const AppLayout = (props: PropsWithChildren) => {
  const windowWidth = useWindowWidth()
  const [isSidebarActive, setIsSidebarActive] = useState(false)
  const [activeNavItemIndex, setActiveNavItemIndex] = useState(0)
  const pathname = usePathname()

  useEffect(() => {
    const activeNavItem = navItemsList.findIndex((navItem) => navItem.route === pathname)
    setActiveNavItemIndex(activeNavItem)
  }, [pathname])

  useEffect(() => {
    if (windowWidth > 1536) {
      setIsSidebarActive(true)
    } else {
      setIsSidebarActive(false)
    }
  }, [windowWidth])

  return (
    <ProvidersWrapper>
      <Flex minHeight="100vh" minWidth="100vw" bg="white">
        <Box
          width={{ base: '80px', '2xl': '280px' }}
          onMouseEnter={() => {
            if (windowWidth < 1536) setIsSidebarActive(true)
          }}
          onMouseLeave={() => {
            if (windowWidth < 1536) setIsSidebarActive(false)
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
            zIndex={10}
            transition="all ease-in-out 0.2s"
            borderRight="1px solid token(colors.slate.5)"
          >
            <Box position="absolute" top="10px" left="13px" width="136px">
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
              gap="2"
            >
              <Box
                position="absolute"
                style={{
                  width: isSidebarActive ? '252px' : '52px',
                  top: `${activeNavItemIndex > 0 ? activeNavItemIndex * 72 : 16}px`
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
                return (
                  <SidebarNavigationItem
                    key={`SidebarNavigation-${index}`}
                    isActive={index === activeNavItemIndex}
                    route={navItem.route}
                    label={navItem.label}
                    icon={navItem.icon}
                  />
                )
              })}
            </VStack>
          </Box>

          {/* <Input opacity={0.8} placeholder="Buscar imóveis ou leads..." width="100%" /> */}
        </Box>
        <Box borderRadius="3xl" bg="white" m="2" flex="1">
          {props.children}
        </Box>
      </Flex>
    </ProvidersWrapper>
  )
}

export default AppLayout
