'use client'

import { useWindowWidth } from '@react-hook/window-size'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { PropsWithChildren, useEffect, useState } from 'react'

import { CustomersIcon, DashboardIcon, LayersIcon, PropertiesIcon } from '@/icons'
import { ProvidersWrapper } from '@/providers'
import { Box, Flex, Text, VStack } from '@/ui'

import { SidebarNavigationItem } from './components/SidebarNavigationItem'

export const EXPANDED_SIDEBAR_WIDTH = 280
export const COLLAPSED_SIDEBAR_WIDTH = 80
export const SIDEBAR_GUTTER = 8

const navItemsList = [
  {
    label: 'Visão geral',
    route: '/app',
    icon: DashboardIcon
  },
  {
    label: 'Imoveis',
    route: '/app/imoveis',
    icon: PropertiesIcon
  },
  {
    label: 'Clientes',
    route: '/app/clientes',
    icon: CustomersIcon
  },
  {
    label: 'Canais',
    route: '/app/canais?target=channel',
    icon: LayersIcon
  }
]

const AppLayout = (props: PropsWithChildren) => {
  const windowWidth = useWindowWidth()
  const [isSidebarActive, setIsSidebarActive] = useState(false)
  const [activeNavItemIndex, setActiveNavItemIndex] = useState(0)
  const pathname = usePathname()

  useEffect(() => {
    const basePathname = pathname.split('/')[2]

    const activeNavItem = navItemsList.findIndex((navItem) => navItem.route.includes(basePathname))

    setActiveNavItemIndex(activeNavItem >= 0 ? activeNavItem : 0)
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
      <Flex minHeight="100vh" minWidth="100vw" bg="slate.2">
        <Box
          width={{ base: `${COLLAPSED_SIDEBAR_WIDTH}px`, '2xl': `${EXPANDED_SIDEBAR_WIDTH}px` }}
          position="absolute"
          top={`${SIDEBAR_GUTTER}px`}
          left={`${SIDEBAR_GUTTER}px`}
        >
          <Box
            position="relative"
            width={{ base: `${COLLAPSED_SIDEBAR_WIDTH}px`, '2xl': `${EXPANDED_SIDEBAR_WIDTH}px` }}
            height={`calc(100vh - ${SIDEBAR_GUTTER * 2}px)`}
            overflow="hidden"
            bg="white"
            borderRadius="xl"
            onMouseEnter={() => {
              if (windowWidth < 1536) setIsSidebarActive(true)
            }}
            onMouseLeave={() => {
              if (windowWidth < 1536) setIsSidebarActive(false)
            }}
            _hover={{
              width: { base: COLLAPSED_SIDEBAR_WIDTH, md: EXPANDED_SIDEBAR_WIDTH }
            }}
            zIndex={10}
            transition="all ease-in-out 0.2s"
            border="1px solid token(colors.slate.5)"
          >
            <Box position="absolute" top="10px" left="12px" width="136px">
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
            <Text
              position="absolute"
              left="26px"
              top="90px"
              color="slate.9"
              fontSize="sm"
              fontWeight={400}
              letterSpacing={2}
              style={{ opacity: isSidebarActive ? 1 : 0 }}
              transition="opacity 0.2s ease-in-out"
            >
              MENU
            </Text>
            <VStack
              px="4"
              alignItems="flex-start"
              position="absolute"
              top="120px"
              width="100%"
              gap="12px"
            >
              <Box
                position="absolute"
                style={{
                  width: isSidebarActive ? '252px' : '52px',
                  top: `${activeNavItemIndex * 60}px`
                }}
                left="13px"
                height="48px"
                bg="slate.2"
                borderRadius="lg"
                border="1px solid token(colors.slate.4)"
                boxShadow="0 1px 2px 0 token(colors.slate.3), 0 2px 6px 0 token(colors.slate.2)"
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
        <Box
          flex="1"
          maxHeight="100vh"
          overflowY="auto"
          pl={{ base: '8px', md: '8px', lg: '148px', xl: '208px', '2xl': '540px' }}
          pr={{ base: '8px', md: '8px', lg: '60p', xl: '120px', '2xl': '260px' }}
        >
          {props.children}
        </Box>
      </Flex>
    </ProvidersWrapper>
  )
}

export default AppLayout
