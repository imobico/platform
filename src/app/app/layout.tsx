'use client'

import { useWindowWidth } from '@react-hook/window-size'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { PropsWithChildren, useEffect, useState } from 'react'

import { CustomersIcon, DashboardIcon, PropertiesIcon } from '@/icons'
import { ProvidersWrapper } from '@/providers'
import { Box, Flex, Text, VStack } from '@/ui'

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
    icon: PropertiesIcon
  },
  {
    label: 'Clientes',
    route: '/app/clientes',
    icon: CustomersIcon
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
      <Flex minHeight="100vh" minWidth="100vw" bg="slate.2">
        <Box width={{ base: '88px', '2xl': '288px' }}>
          <Box
            position="relative"
            ml="8px"
            mt="8px"
            mb="8px"
            mr="0"
            top={0}
            left={0}
            width={{ base: '80px', '2xl': '280px' }}
            height="calc(100vh - 16px)"
            overflow="hidden"
            bg="white"
            borderRadius="xl"
            onMouseEnter={() => {
              if (windowWidth < 1536) setIsSidebarActive(true)
            }}
            onMouseLeave={() => {
              if (windowWidth < 1536) setIsSidebarActive(false)
            }}
            // bg="linear-gradient(0deg, rgba(252,253,254,1) 0%, rgba(239,243,247,1) 100%)"
            // boxShadow={
            //   isSidebarActive
            //     ? '0 1px 5px 1px rgba(0,0,0,0.1), 0 2px 20px 0 rgba(0,0,0,0.1)'
            //     : undefined
            // }
            _hover={{
              width: { base: '80px', md: '280px' }
            }}
            zIndex={10}
            transition="all ease-in-out 0.2s"
            border="1px solid token(colors.slate.5)"
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
              width="280px"
              gap="12px"
            >
              <Box
                position="absolute"
                style={{
                  width: isSidebarActive ? '252px' : '52px',
                  top: `${activeNavItemIndex * 60}px`
                }}
                left="14px"
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
        <Box flex="1" maxHeight="100vh" overflowY="auto" p="16px">
          {props.children}
        </Box>
      </Flex>
    </ProvidersWrapper>
  )
}

export default AppLayout
